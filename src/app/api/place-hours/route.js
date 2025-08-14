import { NextResponse } from "next/server";

/**
 * GET /api/place-hours
 * Optional query:
 *   ?placeId=PLACE_ID  (falls back to GOOGLE_PLACE_ID)
 *   ?address=TEXT      (used as a fallback text search if placeId fails)
 */
export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const placeIdParam = searchParams.get("placeId");
  const addressParam = searchParams.get("address");

  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const envPlaceId = process.env.GOOGLE_PLACE_ID;
  const placeId = placeIdParam || envPlaceId;
  const fallbackText =
    addressParam || "Effy Exotics, 2153 W Picacho Ave, Las Cruces, NM 88007";

  if (!apiKey) {
    return NextResponse.json({ error: "Missing GOOGLE_MAPS_API_KEY" }, { status: 500 });
  }

  const DETAILS_FIELDS =
    "id,displayName,formattedAddress,nationalPhoneNumber,websiteUri,googleMapsUri,utcOffsetMinutes,businessStatus,currentOpeningHours,regularOpeningHours";
  const SEARCH_FIELDS = "places.id,places.displayName,places.formattedAddress";

  async function fetchDetails(id) {
    const res = await fetch(`https://places.googleapis.com/v1/places/${encodeURIComponent(id)}`, {
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": DETAILS_FIELDS,
      },
      cache: "no-store",
    });
    const body = await res.json().catch(() => ({}));
    return { ok: res.ok, status: res.status, body };
  }

  async function searchByText(text) {
    const res = await fetch("https://places.googleapis.com/v1/places:searchText", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": SEARCH_FIELDS,
      },
      body: JSON.stringify({ textQuery: text, regionCode: "US", languageCode: "en" }),
      cache: "no-store",
    });
    const body = await res.json().catch(() => ({}));
    return { ok: res.ok, status: res.status, body };
  }

  // 1) Try details with the provided (or env) placeId
  if (placeId) {
    const d = await fetchDetails(placeId);
    if (d.ok) return NextResponse.json(normalize(d.body));
    // If details failed (stale/invalid ID), fall through to search…
  }

  // 2) Search by address/name to get a fresh ID, then fetch details again
  const s = await searchByText(fallbackText);
  const freshId = s?.body?.places?.[0]?.id;
  if (s.ok && freshId) {
    const d2 = await fetchDetails(freshId);
    if (d2.ok) return NextResponse.json({ ...normalize(d2.body), id: freshId });
  }

  // 3) If still not ok, bubble an error so the UI can show a graceful message
  const reason =
    (s?.body?.error && (s.body.error.message || s.body.error.status)) ||
    "Places API request failed";
  return NextResponse.json({ error: reason }, { status: 502 });
}

function normalize(place) {
  const hours = place.currentOpeningHours || place.regularOpeningHours || {};
  const weekdayDescriptions = hours.weekdayDescriptions || []; // e.g., "Sun: 10:00 AM–11:30 PM"
  return {
    id: place.id || null,
    name: place.displayName?.text || null,
    address: place.formattedAddress || null,
    phone: place.nationalPhoneNumber || null,
    website: place.websiteUri || null,
    url: place.googleMapsUri || null,
    status: place.businessStatus || "BUSINESS_STATUS_UNSPECIFIED",
    utcOffsetMinutes: place.utcOffsetMinutes ?? null,
    openNow: hours.openNow ?? null,
    nextOpenTime: hours.nextOpenTime || null,
    nextCloseTime: hours.nextCloseTime || null,
    weekdayDescriptions,
  };
}

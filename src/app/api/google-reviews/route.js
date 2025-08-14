export const revalidate = 3600; // ISR cache: 1 hour

export async function GET() {
  const key = process.env.GOOGLE_MAPS_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  if (!key || !placeId) {
    return new Response(JSON.stringify({ error: "Missing API key or place ID" }), { status: 500 });
  }

  // Places Details endpoint – ask only for what we need
  const url = new URL("https://maps.googleapis.com/maps/api/place/details/json");
  url.searchParams.set("place_id", placeId);
  url.searchParams.set("fields", "name,rating,user_ratings_total,url,reviews");
  url.searchParams.set("key", key);

  try {
    const res = await fetch(url.toString(), { cache: "no-store" });
    const json = await res.json();

    if (json.status !== "OK") {
      return new Response(JSON.stringify({ error: json.status, details: json.error_message || null }), { status: 400 });
    }

    const place = json.result || {};
    const reviews = (place.reviews || []).map(r => ({
      authorName: r.author_name,
      profilePhotoUrl: r.profile_photo_url,
      rating: r.rating,
      relativeTime: r.relative_time_description,
      text: r.text,
      time: r.time,
      authorUrl: r.author_url
    }));

    return new Response(JSON.stringify({
      name: place.name,
      rating: place.rating,
      total: place.user_ratings_total,
      url: place.url,         // link to Google listing
      reviews
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        // Cache at the edge/proxy for 1 hour
        "Cache-Control": "s-maxage=3600, stale-while-revalidate=600"
      }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Fetch failed" }), { status: 500 });
  }
}

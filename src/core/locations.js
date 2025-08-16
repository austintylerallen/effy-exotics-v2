// src/core/locations.js

// Where we persist the user's chosen location (cookie + localStorage)
export const LOCATION_COOKIE = "effy_location";

// Define each storefront/location in one place.
// Fill in Alamogordo details when you have them.
export const LOCATIONS = {
  "las-cruces": {
    slug: "las-cruces",
    cityLabel: "Las Cruces",
    name: "Effy Exotics – Las Cruces",
    phoneDisplay: "(575) 652-4619",
    phone: "+1-575-652-4619",
    license: "NM CCD Retailer #XXXX-XXXX",
    address: {
      street: "2153 W Picacho Ave",
      city: "Las Cruces",
      region: "NM",
      postalCode: "88077",
      country: "US",
      latitude: 32.311383948399154,
      longitude: -106.80641921326792,
    },
    hours: [
      { days: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], opens: "07:00", closes: "23:30" },
      { days: ["Sunday"], opens: "10:00", closes: "23:30" },
    ],
    menuUrl: "https://dutchie.com/api/v2/embedded-menu/66b662a0d91b92addb39e11a.js",
  },

  "alamogordo": {
    slug: "alamogordo",
    cityLabel: "Alamogordo",
    name: "Effy Exotics – Alamogordo",
    phoneDisplay: "(575) 000-0000",
    phone: "+1-575-000-0000",
    license: "NM CCD Retailer #YYYY-YYYY",
    address: {
      street: "123 Main St",
      city: "Alamogordo",
      region: "NM",
      postalCode: "88310",
      country: "US",
      latitude: 32.8995,
      longitude: -105.9603,
    },
    hours: [
      { days: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], opens: "07:00", closes: "23:30" },
      { days: ["Sunday"], opens: "10:00", closes: "23:30" },
    ],
    menuUrl: "https://dutchie.com/api/v2/embedded-menu/XXXXXXXXXXXXXXXXXXXX.js",
  },
};

// Slug helpers
export const LOCATION_SLUGS = Object.keys(LOCATIONS);
export const DEFAULT_LOCATION_SLUG = "las-cruces";

// *** This is what your provider expected but couldn't find ***
export const DEFAULT_LOCATION = LOCATIONS[DEFAULT_LOCATION_SLUG];

// Convenience getter
export function getLocation(slug) {
  return LOCATIONS[slug] || null;
}

// src/core/locations.js
export const LOCATIONS = {
    "las-cruces": {
      slug: "las-cruces",
      name: "Las Cruces",
      // TODO: replace with your real Dutchie URL
      dutchieUrl: "https://effyexotics.com/las-cruces/shop",
    },
    "alamogordo": {
      slug: "alamogordo",
      name: "Alamogordo",
      // TODO: replace with your real Dutchie URL
      dutchieUrl: "https://dutchie.com/stores/effy-exotics-alamogordo",
    },
  };
  
  export const LOCATION_SLUGS = Object.keys(LOCATIONS);
  export const DEFAULT_LOCATION = LOCATIONS["las-cruces"];
  export const LOCATION_COOKIE = "effy:loc";
  
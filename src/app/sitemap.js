// src/app/sitemap.js
export default function sitemap() {
    const base = "https://www.effyexotics.com";
    const now = new Date().toISOString();
  
    const routes = [
      "", // landing chooser
      "/las-cruces", "/las-cruces/shop", "/las-cruces/about", "/las-cruces/the_lab", "/las-cruces/map",
      "/alamogordo", "/alamogordo/shop", "/alamogordo/about", "/alamogordo/the_lab", "/alamogordo/map",
      "/privacy", "/terms", "/returns", "/accessibility",
    ];
  
    return routes.map((path) => ({
      url: `${base}${path}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: path === "" ? 1.0 : 0.7,
    }));
  }
  
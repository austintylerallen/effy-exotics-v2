import { NextResponse } from "next/server";

const LOCATION_COOKIE = "effy:loc";
const LOCATION_SLUGS = new Set(["las-cruces", "alamogordo"]);

export function middleware(req) {
  const { pathname } = req.nextUrl;
  const parts = pathname.split("/").filter(Boolean);
  const first = parts[0];

  if (LOCATION_SLUGS.has(first)) {
    const res = NextResponse.redirect(new URL("/", req.url));
    res.cookies.set(LOCATION_COOKIE, first, { path: "/", maxAge: 60 * 60 * 24 * 365 });
    return res;
  }
  return NextResponse.next();
}

// run on all pages so the redirect triggers on those slugs
export const config = {
  matcher: ["/:path*"],
};

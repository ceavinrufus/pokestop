import { NextResponse, NextRequest } from "next/server";

export async function middleware(req, ev) {
  const { pathname } = req.nextUrl;
  if (pathname == "/") {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    } else {
      return NextResponse.redirect(
        "https://pokestop.vercel.app/pokedex/pokemon/"
      );
    }
  }
  return NextResponse.next();
}

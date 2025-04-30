import { NextResponse } from "next/server";
import { stackServerApp } from "./stack";

export async function middleware(request) {
  const { pathname } = request.nextUrl;
  const user = await stackServerApp.getUser();

  // Redirect logic
  if (!user) {
    // If not logged in and trying to access protected routes
    if (pathname.startsWith('/dashboard')) {
      return NextResponse.redirect(new URL('/handler/sign-in', request.url));
    }
  // } else {
  //   // If logged in and trying to access auth pages
  //   if (pathname.startsWith('/handler')) {
  //     return NextResponse.redirect(new URL('/dashboard', request.url));
  //   }
    
    // If logged in but accessing root, redirect to dashboard
    // if (pathname === '/') {
    //   return NextResponse.redirect(new URL('/dashboard', request.url));
    // }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/', // Root path
    '/dashboard/:path*', // All dashboard routes
    '/handler/:path*' // All auth handler routes
  ]
};
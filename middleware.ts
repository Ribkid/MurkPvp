import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Get response
  const response = NextResponse.next()

  // Add CORS headers
  response.headers.set("Access-Control-Allow-Origin", "*")
  response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
  response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization")

  // Add CSP header to allow eval for specific routes
  if (request.nextUrl.pathname.startsWith("/admin/server-commands")) {
    const csp = `
      default-src 'self';
      script-src 'self' 'unsafe-eval' 'unsafe-inline';
      style-src 'self' 'unsafe-inline';
      img-src 'self' data: blob:;
      font-src 'self';
      connect-src 'self' https://panel.murkpvp.com;
    `
      .replace(/\s{2,}/g, " ")
      .trim()

    response.headers.set("Content-Security-Policy", csp)
  }

  return response
}

// Only run middleware on specific paths
export const config = {
  matcher: ["/admin/:path*", "/api/:path*"],
}

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
    const token = request.cookies.get('jwt_token')?.value

    const { pathname } = request.nextUrl

    // Public paths that don't require authentication
    const publicPaths = ['/login', '/not-found']

    // Check if the current path is a public path
    const isPublicPath = publicPaths.some((path) => pathname.startsWith(path))

    // If not authenticated and trying to access a protected route
    if (!token && !isPublicPath) {
        // Redirect to login page
        return NextResponse.redirect(new URL('/login', request.url))
    }

    // If authenticated and trying to access login page
    if (token && pathname === '/login') {
        return NextResponse.redirect(new URL('/', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - public folder contents
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}

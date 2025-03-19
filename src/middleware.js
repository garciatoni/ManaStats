import { NextResponse } from 'next/server'
import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

export default createMiddleware(routing);


export async function middleware(request) {
	const authTokens = request.cookies.get('token')?.value
  console.log("AQUI ESTA EL AUTH TOKEN",authTokens)
  console.log("AQUI ESTA EL AUTH TOKEN",request.nextUrl.pathname.startsWith('/auth'))

	// if (request.nextUrl.pathname.startsWith('/') && !authTokens) {
	// 	const response = NextResponse.redirect(new URL('/auth', request.url))
	// 	response.cookies.delete('token')
	// 	return response
	// }

	
	if (authTokens && request.nextUrl.pathname.startsWith('/es/auth')) {
		const response = NextResponse.redirect(new URL('/es', request.url))
		return response
	}
}
 
export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};
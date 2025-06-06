import { betterFetch } from "@better-fetch/fetch";
import type { auth } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";
 
type Session = typeof auth.$Infer.Session;

export async function protectedRouteMiddleware(request: NextRequest) {
	const { data: session } = await betterFetch<Session>("/api/auth/get-session", {
		baseURL: request.nextUrl.origin,
		headers: {
			cookie: request.headers.get("cookie") || "",
		},
	});
 
	if (!session) {
		return NextResponse.redirect(new URL("/sign-in", request.url));
	}
 
	return NextResponse.next();
}
	
export async function authRouteMiddleware(request: NextRequest) {
	const { data: session } = await betterFetch<Session>("/api/auth/get-session", {
		baseURL: request.nextUrl.origin,
		headers: {
			cookie: request.headers.get("cookie") || "",
		},
	});

	if (session) {
		return NextResponse.redirect(new URL("/dashboard", request.url));
	}
 
	return NextResponse.next();
}

export function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;
 
	if (pathname.startsWith("/dashboard")) {
		return protectedRouteMiddleware(request);
	}
 
	if (pathname.startsWith("/sign-in") || pathname.startsWith("/sign-up")) {
		return authRouteMiddleware(request);
	}
 
	return NextResponse.next();
}
 
export const config = {
	matcher: [
		"/dashboard/:path*",
		"/sign-in",
		"/sign-up"
	],
};
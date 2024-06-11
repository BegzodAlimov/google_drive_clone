import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { useAuth } from "@clerk/nextjs";

export default clerkMiddleware();

export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)",
    '/settings(.*)'
  ],
};



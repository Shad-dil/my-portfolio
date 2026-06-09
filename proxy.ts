import createMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";

const handleI18nRouting = createMiddleware({
  locales: ["en", "ar", "hi"],
  defaultLocale: "en",
  localePrefix: "always",
});

export default function middleware(request: NextRequest) {
  return handleI18nRouting(request);
}

export const config = {
  matcher: ["/((?!_next|_vercel|.*\\..*).*)"],
};

import { NextRequest } from "next/server";
import { translationMiddleware } from "./translations/translations";

export function proxy(request: NextRequest) {
  return translationMiddleware(request);
}

export const config = {
  matcher: [
    "/((?!_next).*)", // Skip all internal paths (_next)
  ],
};

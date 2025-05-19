// import "server-only";

import { NextRequest, NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import fr from "./fr";
import en from "./en";

export const defaultLocale = "fr";
const dictionaries: { [lang: string]: typeof fr } = {
  en,
  fr,
};
const locales = Object.keys(dictionaries);

// Get the preferred locale, similar to the above or using a library
function getLocale(request: NextRequest) {
  // extract accepted languages in order of preference
  let languages = new Negotiator({
    headers: { "accept-language": request.headers.get("accept-language") },
  }).languages();
  // return the best language or the default locale
  return match(languages, locales, defaultLocale);
}

const unlocalizedAssets = [
  "/favicon.ico",
  "/favicon-32x32.png",
  "/favicon-256x256.png",
  "/safari-pinned-tab.svg",
  "/robots.txt",
  "/sitemap.xml",
  "/docs/"
];

export function translationMiddleware(request: NextRequest): NextResponse {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;

  const isUnlocalizedAsset = unlocalizedAssets.some((p) => {
    return pathname.indexOf(p) >= 0;
  });
  if (isUnlocalizedAsset) return;

  const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`);
  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const getDictionary = (locale: string): typeof fr => dictionaries[locale];

export const getTranslationStaticParams = () => {
  return Object.keys(dictionaries).map((l) => ({ lang: l }));
};

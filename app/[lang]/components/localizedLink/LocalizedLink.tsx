const prodOrigin = "https://upsignon.eu";

export const localizedLink = (lang: string, href: string) =>
  href.startsWith("/")
    ? `/${lang}${href}`
    : href.startsWith("prodOrigin")
      ? `${prodOrigin}/${lang}${href.replace(prodOrigin, "")}`
      : href;

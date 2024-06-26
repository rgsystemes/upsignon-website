import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const canonicalLinks: { u: string; f: string; p: number }[] = [
    { u: "", f: "monthly", p: 1 },
    { u: "/features", f: "weekly", p: 1 },
    { u: "/downloads", f: "monthly", p: 0.8 },
    { u: "/downloads/linux", f: "monthly", p: 0.3 },
    { u: "/downloads/windows", f: "monthly", p: 0.3 },
    { u: "/pricing", f: "monthly", p: 0.8 },
    { u: "/resources/articles", f: "yearly", p: 0.6 },
    { u: "/resources/articles/1", f: "yearly", p: 0.6 },
    { u: "/resources/articles/2", f: "yearly", p: 0.6 },
    { u: "/resources/articles/3", f: "yearly", p: 0.8 },
    { u: "/resources/articles/4", f: "yearly", p: 0.6 },
    { u: "/resources/articles/5", f: "yearly", p: 0.6 },
    { u: "/resources/articles/6", f: "yearly", p: 0.6 },
    { u: "/resources/articles/7", f: "yearly", p: 0.6 },
    { u: "/resources/articles/8", f: "yearly", p: 0.6 },
    { u: "/resources/articles/9", f: "yearly", p: 0.6 },
    { u: "/resources/articles/10", f: "yearly", p: 0.6 },
    { u: "/resources/commitments", f: "yearly", p: 0.5 },
    { u: "/resources/release-notes/app", f: "weekly", p: 0.1 },
    { u: "/resources/release-notes/dashboard", f: "weekly", p: 0.1 },
    { u: "/resources/release-notes/extension", f: "weekly", p: 0.1 },
    { u: "/resources/release-notes/server", f: "weekly", p: 0.1 },
    { u: "/resources/tech-articles", f: "monthly", p: 0.5 },
    { u: "/resources/tech-articles/pro-vs-perso", f: "monthly", p: 0.5 },
    { u: "/resources/tech-articles/protected-clipboard-behaviour", f: "monthly", p: 0.5 },
  ];
  const sitemap = [];
  for (var cl of canonicalLinks) {
    sitemap.push({
      url: "https://upsignon.eu/fr" + cl.u,
      changeFrequency: cl.f,
      priority: cl.p,
      alternates: {
        languages: {
          fr: "https://upsignon.eu/fr" + cl.u,
          en: "https://upsignon.eu/en" + cl.u,
        },
      },
    });
  }
  sitemap.push({
    url: "https://upsignon.notion.site/Notice-d-utilisation-d-UpSignOn-de4f8ba200e14ec1adcaba2613b38340?pvs=4",
    changeFrequency: "monthly",
    priority: 0.6,
  });
  return sitemap;
}

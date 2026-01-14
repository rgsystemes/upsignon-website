// @ts-check

module.exports = async (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    poweredByHeader: false,
    redirects: () =>
      Promise.resolve([
        {
          source: "/upsignon-perso",
          destination: "/",
          permanent: true,
        },
        {
          source: "/en/upsignon-perso",
          destination: "/en",
          permanent: true,
        },
        {
          source: "/fr/upsignon-perso",
          destination: "/fr",
          permanent: true,
        },
        {
          source: "/upsignon-pro",
          destination: "/",
          permanent: true,
        },
        {
          source: "/en/upsignon-pro",
          destination: "/en",
          permanent: true,
        },
        {
          source: "/fr/upsignon-pro",
          destination: "/fr",
          permanent: true,
        },
        {
          source: "/blog",
          destination: "/resources/articles",
          permanent: true,
        },
        {
          source: "/en/blog",
          destination: "/en/resources/articles",
          permanent: true,
        },
        {
          source: "/fr/blog",
          destination: "/fr/resources/articles",
          permanent: true,
        },
        {
          source: "/download",
          destination: "/downloads",
          permanent: true,
        },
        {
          source: "/en/download",
          destination: "/en/downloads",
          permanent: true,
        },
        {
          source: "/en/download-upsignon",
          destination: "/en/downloads",
          permanent: true,
        },
        {
          source: "/fr/download",
          destination: "/fr/downloads",
          permanent: true,
        },
        {
          source: "/faq",
          destination: "/features",
          permanent: true,
        },
        {
          source: "/en/faq",
          destination: "/en/features",
          permanent: true,
        },
        {
          source: "/fr/faq",
          destination: "/fr/features",
          permanent: true,
        },
        {
          source: "/about",
          destination: "/",
          permanent: true,
        },
        {
          source: "/en/about-us",
          destination: "/en",
          permanent: true,
        },
        {
          source: "/fr/about-us",
          destination: "/en",
          permanent: true,
        },
        {
          source: "/quest-ce-quun-mot-de-passe-fort",
          destination: "/resources/articles/1",
          permanent: true,
        },
        {
          source: "/pourquoi-est-il-deconseille-dutiliser-le-meme-mot-de-passe-partout",
          destination: "/resources/articles/2",
          permanent: true,
        },
        {
          source: "/pourquoi-utiliser-un-gestionnaire-de-mots-de-passe",
          destination: "/resources/articles/3",
          permanent: true,
        },
        {
          source: "/securite-informatique-zoom-sur-4-modeles-de-securite",
          destination: "/resources/articles/4",
          permanent: true,
        },
        {
          source:
            "/authentification-multifacteur-double-authentification-et-authentification-forte-quelles-differences",
          destination: "/resources/articles/5",
          permanent: true,
        },
        {
          source: "/detecter-sites-web-non-securises",
          destination: "/resources/articles/6",
          permanent: true,
        },
        {
          source: "/hackers-donnees-personnelles",
          destination: "/resources/articles/7",
          permanent: true,
        },
        {
          source: "/navigateur-vs-coffre-fort-de-mots-de-passe-dedie-quel-outil-privilegier",
          destination: "/resources/articles/8",
          permanent: true,
        },
        {
          source: "/les-4-fausses-bonnes-idees-repandues-dans-les-formulaires-de-mots-de-passe",
          destination: "/resources/articles/9",
          permanent: true,
        },
        {
          source: "/privacy-policy/fr/20200209.pdf",
          destination: "https://app.upsignon.eu/privacy-policy/fr/20200209.pdf",
          permanent: true,
        },
        {
          source: "/protocol/:param*",
          destination: "https://app.upsignon.eu/protocol/:param*",
          permanent: true,
        },
        {
          source: "/.well-known/:param*",
          destination: "https://app.upsignon.eu/.well-known/:param*",
          permanent: true,
        },
        {
          // redirect a link mistyped in the app
          source: "/resources/articles/upsignon-rejoint-rg-system-group-septeo",
          destination: "/resources/articles/upsignon-rejoint-rg-system-groupe-septeo",
          permanent: true,
        },
        {
          // redirect a link mistyped in the app
          source: "/resources/articles/upsignon-rejoint-rg-system-groupe-septeo",
          destination: "/resources/articles/11",
          permanent: true,
        },
        {
          source: "/help-center",
          destination: "https://upsignon.notion.site/Notice-d-utilisation-d-UpSignOn-de4f8ba200e14ec1adcaba2613b38340",
          permanent: false,
        },
        {
          // redirect a link mistyped in the app
          source: "/fr/help-center",
          destination: "https://upsignon.notion.site/Notice-d-utilisation-d-UpSignOn-de4f8ba200e14ec1adcaba2613b38340",
          permanent: false,
        },
        {
          // renamed link
          source: "/fr/privacy",
          destination: "/fr/appPrivacyPolicy",
          permanent: true,
        },
        {
          // renamed link
          source: "/en/privacy",
          destination: "/en/appPrivacyPolicy",
          permanent: true,
        },
      ]),
  };
  return nextConfig;
};

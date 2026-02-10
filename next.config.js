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
          statusCode: 301,
        },
        {
          source: "/en/upsignon-perso",
          destination: "/en",
          statusCode: 301,
        },
        {
          source: "/fr/upsignon-perso",
          destination: "/fr",
          statusCode: 301,
        },
        {
          source: "/upsignon-pro",
          destination: "/",
          statusCode: 301,
        },
        {
          source: "/en/upsignon-pro",
          destination: "/en",
          statusCode: 301,
        },
        {
          source: "/fr/upsignon-pro",
          destination: "/fr",
          statusCode: 301,
        },
        {
          source: "/blog",
          destination: "/resources/articles",
          statusCode: 301,
        },
        {
          source: "/en/blog",
          destination: "/en/resources/articles",
          statusCode: 301,
        },
        {
          source: "/fr/blog",
          destination: "/fr/resources/articles",
          statusCode: 301,
        },
        {
          source: "/download",
          destination: "/downloads",
          statusCode: 301,
        },
        {
          source: "/en/download",
          destination: "/en/downloads",
          statusCode: 301,
        },
        {
          source: "/en/download-upsignon",
          destination: "/en/downloads",
          statusCode: 301,
        },
        {
          source: "/fr/download",
          destination: "/fr/downloads",
          statusCode: 301,
        },
        {
          source: "/faq",
          destination: "/features",
          statusCode: 301,
        },
        {
          source: "/en/faq",
          destination: "/en/features",
          statusCode: 301,
        },
        {
          source: "/fr/faq",
          destination: "/fr/features",
          statusCode: 301,
        },
        {
          source: "/about",
          destination: "/",
          statusCode: 301,
        },
        {
          source: "/en/about-us",
          destination: "/en",
          statusCode: 301,
        },
        {
          source: "/fr/about-us",
          destination: "/en",
          statusCode: 301,
        },
        {
          source: "/quest-ce-quun-mot-de-passe-fort",
          destination: "/resources/articles/1",
          statusCode: 301,
        },
        {
          source: "/pourquoi-est-il-deconseille-dutiliser-le-meme-mot-de-passe-partout",
          destination: "/resources/articles/2",
          statusCode: 301,
        },
        {
          source: "/pourquoi-utiliser-un-gestionnaire-de-mots-de-passe",
          destination: "/resources/articles/3",
          statusCode: 301,
        },
        {
          source: "/securite-informatique-zoom-sur-4-modeles-de-securite",
          destination: "/resources/articles/4",
          statusCode: 301,
        },
        {
          source:
            "/authentification-multifacteur-double-authentification-et-authentification-forte-quelles-differences",
          destination: "/resources/articles/5",
          statusCode: 301,
        },
        {
          source: "/detecter-sites-web-non-securises",
          destination: "/resources/articles/6",
          statusCode: 301,
        },
        {
          source: "/hackers-donnees-personnelles",
          destination: "/resources/articles/7",
          statusCode: 301,
        },
        {
          source: "/navigateur-vs-coffre-fort-de-mots-de-passe-dedie-quel-outil-privilegier",
          destination: "/resources/articles/8",
          statusCode: 301,
        },
        {
          source: "/les-4-fausses-bonnes-idees-repandues-dans-les-formulaires-de-mots-de-passe",
          destination: "/resources/articles/9",
          statusCode: 301,
        },
        {
          source: "/privacy-policy/fr/20200209.pdf",
          destination: "https://app.upsignon.eu/privacy-policy/fr/20200209.pdf",
          statusCode: 301,
        },
        {
          source: "/protocol/:param*",
          destination: "https://app.upsignon.eu/protocol/:param*",
          statusCode: 301,
        },
        {
          source: "/.well-known/:param*",
          destination: "https://app.upsignon.eu/.well-known/:param*",
          statusCode: 301,
        },
        {
          // redirect a link mistyped in the app
          source: "/resources/articles/upsignon-rejoint-rg-system-group-septeo",
          destination: "/resources/articles/upsignon-rejoint-rg-system-groupe-septeo",
          statusCode: 301,
        },
        {
          // redirect a link mistyped in the app
          source: "/resources/articles/upsignon-rejoint-rg-system-groupe-septeo",
          destination: "/resources/articles/11",
          statusCode: 301,
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
          statusCode: 301,
        },
        {
          // renamed link
          source: "/en/privacy",
          destination: "/en/appPrivacyPolicy",
          statusCode: 301,
        },
      ]),
  };
  return nextConfig;
};

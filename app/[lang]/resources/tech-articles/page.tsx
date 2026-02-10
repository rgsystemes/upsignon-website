import Link from "next/link";
import { getDictionary } from "../../../../translations/translations";
import styles from "../page.module.css";
import { Metadata } from "next";
import { localizedLink } from "../../components/localizedLink/LocalizedLink";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const t = getDictionary(lang);
  return {
    title: t.resources.technicalExplanations,
    description: t.resources.technicalExplanationsMetaDesc,
    alternates: {
      canonical: "https://upsignon.eu/fr/resources/tech-articles",
      languages: {
        fr: "https://upsignon.eu/fr/resources/tech-articles",
        en: "https://upsignon.eu/en/resources/tech-articles",
      },
    },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t = getDictionary(lang);

  return (
    <div className={styles.article}>
      <h1>{t.resources.technicalExplanations}</h1>
      <Link href={localizedLink(lang, "/resources/tech-articles/pro-vs-perso")} className={styles.techArticle}>
        {t.resources.generalDesignPrinciples}
      </Link>
      <Link
        href={localizedLink(lang, "/resources/tech-articles/browser-extension-security")}
        className={styles.techArticle}
      >
        {t.resources.browserExtensionSecurity}
      </Link>
      <Link
        href={localizedLink(lang, "/resources/tech-articles/protected-clipboard-behaviour")}
        className={styles.techArticle}
      >
        {t.techResources.protectedClipboardBehaviour.title}
      </Link>
      <Link
        className={styles.techArticle}
        href="https://github.com/rgsystemes/upsignon-pro-server/blob/production/doc/Install.md"
        target="_blank"
      >
        {t.resources.onPremDoc}
      </Link>
    </div>
  );
}

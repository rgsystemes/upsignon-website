import { Metadata } from "next";
import { getDictionary } from "../../../../../translations/translations";
import styles from "../article.module.css";
import Link from "next/link";
import { FRArticle } from "./fr";
import { ENArticle } from "./en";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const t = getDictionary(lang);
  return {
    title: t.articles[14].title,
    description: t.articles[14].metaDescription,
    alternates: {
      canonical: "https://upsignon.eu/fr/resources/articles/14",
      languages: {
        fr: "https://upsignon.eu/fr/resources/articles/14",
        en: "https://upsignon.eu/en/resources/articles/14",
      },
    },
  };
}

export default async function Article1({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t = getDictionary(lang);
  return (
    <div className={styles.content}>
      <div className={styles.backArrow}>
        <span>&lt;  </span>
        <Link href="/resources/articles">{t.resources.articles}</Link>
      </div>
      <article className={styles.article}>{lang === "fr" ? <FRArticle /> : <ENArticle />}</article>
      <div className={styles.backArrow}>
        <span>&lt;  </span>
        <Link href="/resources/articles">{t.resources.articles}</Link>
      </div>
    </div>
  );
}

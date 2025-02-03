import { Metadata } from "next";
import { getDictionary } from "../../../../../translations/translations";
import styles from "../../page.module.css";
import Link from "next/link";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const t = getDictionary(lang);
  return {
    title: t.techResources.protectedClipboardBehaviour.title,
    description: t.techResources.protectedClipboardBehaviour.metaDescription,
    alternates: {
      canonical: "https://upsignon.eu/fr/resources/tech-articles/protected-clipboard-behaviour",
      languages: {
        fr: "https://upsignon.eu/fr/resources/tech-articles/protected-clipboard-behaviour",
        en: "https://upsignon.eu/en/resources/tech-articles/protected-clipboard-behaviour",
      },
    },
  };
}

export default async function ProtectedClipboardBehaviour({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t = getDictionary(lang);
  return (
    <div className={styles.content}>
      <div className={styles.backArrow}>
        <span>&lt;  </span>
        <Link href="/resources/tech-articles">{t.resources.technicalExplanations}</Link>
      </div>
      <article className={styles.article}>
        <h1>{t.techResources.protectedClipboardBehaviour.title}</h1>
        <h2>iOS</h2>
        <p>{t.techResources.protectedClipboardBehaviour.ios}</p>
        <h2>Windows / macOS / Linux</h2>
        <p>{t.techResources.protectedClipboardBehaviour.desktop}</p>
        <h2>Android</h2>
        <p>{t.techResources.protectedClipboardBehaviour.android.intro}</p>
        <ul>
          <li>{t.techResources.protectedClipboardBehaviour.android.intro_1}</li>
          <li>{t.techResources.protectedClipboardBehaviour.android.intro_2}</li>
          <li>{t.techResources.protectedClipboardBehaviour.android.intro_3}</li>
        </ul>
        <p>{t.techResources.protectedClipboardBehaviour.android.remark}</p>
      </article>
      <div className={styles.backArrow}>
        <span>&lt;  </span>
        <Link href="/resources/tech-articles">{t.resources.technicalExplanations}</Link>
      </div>
    </div>
  );
}

import { Metadata } from "next";
import { getDictionary } from "../../../translations/translations";
import styles from "./page.module.css";
import Link from "next/link";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const t = getDictionary(lang);
  return {
    title: t.legalNotice.pageTitle,
    description: t.legalNotice.metaDescription,
    alternates: {
      canonical: "https://upsignon.eu/fr/legalNotice",
      languages: {
        fr: "https://upsignon.eu/fr/legalNotice",
        en: "https://upsignon.eu/en/legalNotice",
      },
    },
  };
}
export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t = getDictionary(lang);
  return (
    <div className={styles.content}>
      <h1>{t.legalNotice.pageTitle}</h1>

      <section className={styles.section}>
        {/* EDITOR */}
        <h2>{t.legalNotice.editor.title}</h2>
        <p>{t.legalNotice.editor.intro}</p>
        <p>
          <span className={styles.bold}>{t.legalNotice.editor.name}</span>
          <br />
          <span className={styles.detailContainer}>
            <span className={styles.bold}>{t.legalNotice.editor.mainLocationTitle}</span>&nbsp;
            {t.legalNotice.editor.mainLocationContent}
          </span>
          <br />
          <span className={styles.detailContainer}>
            <span className={styles.bold}>{t.legalNotice.editor.statusTitle}</span>&nbsp;
            {t.legalNotice.editor.statusContent}
          </span>
          <br />
          <span className={styles.detailContainer}>
            <span className={styles.bold}>{t.legalNotice.editor.capitalTitle}</span>&nbsp;
            {t.legalNotice.editor.capitalContent}
          </span>
          <br />
          <span className={styles.detailContainer}>
            <span className={styles.bold}>{t.legalNotice.editor.rcsTitle}</span>&nbsp;
            {t.legalNotice.editor.rcsContent}
          </span>
          <br />
          <span className={styles.detailContainer}>
            <span className={styles.bold}>{t.legalNotice.editor.siretTitle}</span>&nbsp;
            {t.legalNotice.editor.siretContent}
          </span>
          <br />
          <span className={styles.detailContainer}>
            <span className={styles.bold}>{t.legalNotice.editor.registerLocationTitle}</span>&nbsp;
            {t.legalNotice.editor.registerLocationContent}
          </span>
          <br />
          <span className={styles.detailContainer}>
            <span className={styles.bold}>{t.legalNotice.editor.apeTitle}</span>&nbsp;
            {t.legalNotice.editor.apeContent}
          </span>
          <br />
          <span className={styles.detailContainer}>
            <span className={styles.bold}>{t.legalNotice.editor.fiscalIDTitle}</span>&nbsp;
            {t.legalNotice.editor.fiscalIDContent}
          </span>
          <br />
          <span className={styles.detailContainer}>
            <span className={styles.bold}>{t.legalNotice.editor.phoneTitle}</span>&nbsp;
            {t.legalNotice.editor.phoneContent}
          </span>
          <br />
          <span className={styles.detailContainer}>
            <span className={styles.bold}>{t.legalNotice.editor.emailTitle}</span>&nbsp;
            {t.legalNotice.editor.emailContent}
          </span>
        </p>
      </section>

      <section className={styles.section}>
        {/* INTELLECTUAL PROPERTY */}
        <h2>{t.legalNotice.intellectualProperty.title}</h2>
        <p>{t.legalNotice.intellectualProperty.intro}</p>
      </section>

      <section className={styles.section}>
        {/* PUBLICATION DIRECTOR */}
        <h2>{t.legalNotice.publicationDirector.title}</h2>
        <p>
          <span className={styles.bold}>{t.legalNotice.editor.name}</span>
          <br />
          <span className={styles.detailContainer}>
            <span className={styles.bold}>{t.legalNotice.editor.mainLocationTitle}</span>&nbsp;
            {t.legalNotice.editor.mainLocationContent}
          </span>
          <br />
          <span className={styles.detailContainer}>
            <span className={styles.bold}>{t.legalNotice.editor.rcsTitle}</span>&nbsp;
            {t.legalNotice.editor.rcsContent}
          </span>
          <br />
          <span className={styles.detailContainer}>
            <span className={styles.bold}>{t.legalNotice.editor.representedByTitle}</span>&nbsp;
            {t.legalNotice.editor.representedByContent}
          </span>
        </p>
      </section>

      <section className={styles.section}>
        {/* HOSTING */}
        <h2>{t.legalNotice.hosting.title}</h2>
        <p>
          <span className={styles.bold}>{t.legalNotice.hosting.name}</span>
          <br />
          <span className={styles.detailContainer}>
            <span className={styles.bold}>{t.legalNotice.hosting.addressTitle}</span>&nbsp;
            {t.legalNotice.hosting.addressContent}
          </span>
        </p>
      </section>

      <section className={styles.section}>
        {/* WEBMASTER */}
        <h2>{t.legalNotice.websiteCreation.title}</h2>
        <p>
          <span className={styles.bold}>{t.legalNotice.editor.name}</span>
          <br />
          <span className={styles.detailContainer}>
            <span className={styles.bold}>{t.legalNotice.editor.mainLocationTitle}</span>&nbsp;
            {t.legalNotice.editor.mainLocationContent}
          </span>
          <br />
          <span className={styles.detailContainer}>
            <span className={styles.bold}>{t.legalNotice.editor.rcsTitle}</span>&nbsp;
            {t.legalNotice.editor.rcsContent}
          </span>
          <br />
          <span className={styles.detailContainer}>
            <Link href={t.legalNotice.websiteCreation.url}>{t.legalNotice.websiteCreation.url}</Link>
          </span>
        </p>
      </section>

      <section>
        <p>{t.legalNotice.footer1}</p>
        <br />
        <p>{t.legalNotice.footer2}</p>
      </section>
    </div>
  );
}

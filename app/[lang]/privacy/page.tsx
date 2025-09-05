import { Metadata } from "next";
import { getDictionary } from "../../../translations/translations";
import styles from "./page.module.css";
import Link from "next/link";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const t = getDictionary(lang);
  return {
    title: t.footer.privacyPolicy,
    description: t.footer.privacyPolicy,
    alternates: {
      canonical: "https://upsignon.eu/fr/privacy",
      languages: {
        fr: "https://upsignon.eu/fr/privacy",
        en: "https://upsignon.eu/en/privacy",
      },
    },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t = getDictionary(lang);

  const pdfUrl =
    "https://upsignon.eu/docs/ANNEXE%20SUR%20LA%20PROTECTION%20DES%20DONNEES%20A%20CARACTERE%20PERSONNEL%20USO.pdf";

  // Adding parameters to the PDF URL to control its display
  // #view=FitH - Adjusts the PDF width to fit the window
  // #zoom=100 - Sets the initial zoom level
  // #toolbar=1 - Displays the toolbar
  // #navpanes=1 - Displays the navigation panel
  const enhancedPdfUrl = `${pdfUrl}#view=FitH&zoom=100&toolbar=1&navpanes=1`;

  return (
    <div className={styles.content}>
      <h1>{t.footer.privacyPolicy}</h1>

      <section className={styles.section}>
        <iframe src={enhancedPdfUrl} className={styles.pdfViewer} title={t.footer.privacyPolicy} allowFullScreen />
      </section>
    </div>
  );
}

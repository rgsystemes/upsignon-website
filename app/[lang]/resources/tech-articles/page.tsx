import Link from "next/link";
import { getDictionary } from "../../../../translations/translations";
import styles from "../page.module.css";

export default function Page({ params }: { params: { lang: string } }) {
  const t = getDictionary(params.lang);

  return (
    <div className={styles.article}>
      <h1>{t.resources.technicalExplanations}</h1>
      <Link className={styles.techArticle} href="/resources/tech-articles/pro-vs-perso">
        {t.resources.generalDesignPrinciples}
      </Link>
      <Link className={styles.techArticle} href="/resources/tech-articles/protected-clipboard-behaviour">
        {t.techResources.protectedClipboardBehaviour.title}
      </Link>
      <Link
        className={styles.techArticle}
        href="https://github.com/UpSignOn/UpSignOn-pro-server/blob/production/doc/Install.md"
        target="_blank"
      >
        {t.resources.onPremDoc}
      </Link>
    </div>
  );
}

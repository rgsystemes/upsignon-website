import { getDictionary } from "../../../translations/translations";
import styles from "./page.module.css";

export default function Page({ params }: { params: { lang: string } }) {
  const t = getDictionary(params.lang);

  return (
    <div className={styles.content}>
      <h1>{t.menu.resources}</h1>
      <h2 className={styles.mainResourceTitle}>{t.resources.tutorials}</h2>
      <h2 className={styles.mainResourceTitle}>{t.resources.technicalExplanations}</h2>
      <ul>
        <li>
          <a className={styles.link} href="/resources/technical-details/pro-vs-perso">
            {t.resources.generalDesignPrinciples}
          </a>
        </li>
        <li>
          <a className={styles.link} href="/resources/technical-details/protected-clipboard-behaviour">
            {t.techResources.protectedClipboardBehaviour.title}
          </a>
        </li>
        <li>
          <a
            className={styles.link}
            href="https://github.com/UpSignOn/UpSignOn-pro-server/blob/production/doc/Install.md"
            target="_blank"
          >
            {t.resources.onPremDoc}
          </a>
        </li>
      </ul>
      <h2 className={styles.mainResourceTitle}>
        <a className={styles.link} href="/resources/release-notes/app">
          {t.resources.releaseNotes}
        </a>
      </h2>
      <h2 className={styles.mainResourceTitle}>
        <a className={styles.link} href="/resources/commitments">
          {t.resources.contractualCommitments}
        </a>
      </h2>

      <h2 className={styles.mainResourceTitle}>{t.resources.articles}</h2>
    </div>
  );
}

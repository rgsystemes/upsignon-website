import { Metadata } from "next";
import { getDictionary } from "../../../../../translations/translations";
import styles from "../../page.module.css";

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const t = getDictionary(params.lang);
  return {
    title: t.techResources.protectedClipboardBehaviour.title,
  };
}

export default function ProtectedClipboardBehaviour({ params }: { params: { lang: string } }) {
  const t = getDictionary(params.lang);
  return (
    <div className={styles.content}>
      <div className={styles.backArrow}>
        <span>&lt;  </span>
        <a href="/resources/tech-articles">{t.resources.technicalExplanations}</a>
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
        <a href="/resources/tech-articles">{t.resources.technicalExplanations}</a>
      </div>
    </div>
  );
}

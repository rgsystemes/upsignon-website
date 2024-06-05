import { getDictionary } from "../../../translations/translations";
import styles from "./page.module.css";

export default function Page({ params }: { params: { lang: string } }) {
  const t = getDictionary(params.lang);

  return (
    <div className={styles.content}>
      <h1>{t.menu.resources}</h1>
      <ul>
        <li>{t.resources.tutorials}</li>
        <li>{t.resources.technicalExplanations}</li>
        <li>{t.resources.contractualCommitments}</li>
        <li>{t.resources.articles}</li>
      </ul>
    </div>
  );
}

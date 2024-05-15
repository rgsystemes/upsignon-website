import { getDictionary } from "../../../translations/translations";
import styles from "./proPersoTags.module.css";

export default function ProPersoTags({ pro, perso, lang }: { pro: boolean; perso: boolean; lang: string }) {
  const t = getDictionary(lang);
  if (!perso && !pro) {
    return null;
  }
  return (
    <div className={styles.pro_perso_tag_container}>
      {perso && <div className={styles.perso_tag}>{t.features.tags.perso}</div>}
      {pro && <div className={styles.pro_tag}>{t.features.tags.pro}</div>}
    </div>
  );
}

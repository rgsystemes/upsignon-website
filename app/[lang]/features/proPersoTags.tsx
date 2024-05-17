import { getDictionary } from "../../../translations/translations";
import { PlatformSupportedIcon, PlatformUnsupportedIcon } from "./availabilityIcons";
import styles from "./proPersoTags.module.css";

export default function ProPersoTags({ pro, perso, lang }: { pro: boolean; perso: boolean; lang: string }) {
  const t = getDictionary(lang);
  if (!perso && !pro) {
    return null;
  }
  return (
    <div className={styles.pro_perso_tag_container}>
      <div aria-label={perso ? t.features.tags.availableFor(false) : t.features.tags.unavailableFor(false)}>
        {perso ? <PlatformSupportedIcon /> : <PlatformUnsupportedIcon />}
        <div className={styles.perso_tag}>{t.features.tags.perso}</div>
      </div>
      <div aria-label={pro ? t.features.tags.availableFor(true) : t.features.tags.unavailableFor(true)}>
        {pro ? <PlatformSupportedIcon /> : <PlatformUnsupportedIcon />}
        <div className={styles.pro_tag}>{t.features.tags.pro}</div>
      </div>
    </div>
  );
}

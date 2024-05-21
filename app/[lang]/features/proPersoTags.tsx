import { getDictionary } from "../../../translations/translations";
import { PlatformSupportedIcon, PlatformUnsupportedIcon, PlatformWarningIcon } from "./availabilityIcons";
import styles from "./proPersoTags.module.css";

export default function ProPersoTags({
  pro,
  perso,
  lang,
  inline,
}: {
  pro: "yes" | "no" | "warning";
  perso: "yes" | "no" | "warning";
  lang: string;
  inline?: boolean;
}) {
  const t = getDictionary(lang);
  if (perso === "no" && pro === "no") {
    return null;
  }

  return (
    <div className={`${styles.pro_perso_tag_container} ${inline ? styles.inline : ""}`}>
      {perso === "yes" && (
        <div aria-label={t.features.tags.availableFor(false)}>
          {<PlatformSupportedIcon />}
          <div className={styles.perso_tag}>{t.features.tags.perso}</div>
        </div>
      )}
      {perso === "no" && (
        <div aria-label={t.features.tags.unavailableFor(false)}>
          {<PlatformUnsupportedIcon />}
          <div className={styles.perso_tag}>{t.features.tags.perso}</div>
        </div>
      )}
      {perso === "warning" && (
        <div aria-label={t.features.tags.availableWithWarningFor(false)}>
          {<PlatformWarningIcon />}
          <div className={styles.perso_tag}>{t.features.tags.perso}</div>
        </div>
      )}
      {pro === "yes" && (
        <div aria-label={t.features.tags.availableFor(true)}>
          {<PlatformSupportedIcon />}
          <div className={styles.pro_tag}>{t.features.tags.pro}</div>
        </div>
      )}
      {pro === "no" && (
        <div aria-label={t.features.tags.unavailableFor(true)}>
          {<PlatformUnsupportedIcon />}
          <div className={styles.pro_tag}>{t.features.tags.pro}</div>
        </div>
      )}
      {pro === "warning" && (
        <div aria-label={t.features.tags.availableWithWarningFor(true)}>
          {<PlatformWarningIcon />}
          <div className={styles.pro_tag}>{t.features.tags.pro}</div>
        </div>
      )}
    </div>
  );
}

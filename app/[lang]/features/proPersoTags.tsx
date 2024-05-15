import styles from "./proPersoTags.module.css";

export default function ProPersoTags({ pro, perso }: { pro: boolean; perso: boolean }) {
  return (
    <div className={styles.pro_perso_tag_container}>
      {perso && <div className={styles.perso_tag}>PERSO</div>}
      {pro && <div className={styles.pro_tag}>PRO</div>}
    </div>
  );
}

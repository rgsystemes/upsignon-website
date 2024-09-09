import { GreenCheckIcon } from "./greenCheckIcon";
import styles from "./singleAdvantage.module.css";

export default function SingleAdvantage(p: { title: string; details: string[] }) {
  return (
    <div className={styles.singleAdvantageCard}>
      <GreenCheckIcon />
      <div className={styles.advantageText}>
        <h2>{p.title}</h2>
        {p.details.map((d, i) => (
          <p key={i}>{d}</p>
        ))}
      </div>
    </div>
  );
}

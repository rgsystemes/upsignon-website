import { GreenCheckIcon } from "../greenCheckIcon/greenCheckIcon";
import styles from "./singleAdvantage.module.css";

export default function SingleAdvantage(p: { title: string; details: string[]; children?: React.ReactNode }) {
  return (
    <div className={styles.singleAdvantageCard}>
      <GreenCheckIcon />
      <div className={styles.advantageText}>
        <h2>{p.title}</h2>
        {p.children}
        {p.details.map((d, i) => (
          <p key={i}>{d}</p>
        ))}
      </div>
    </div>
  );
}

import Image from "next/image";
import styles from "./customerQuotes.module.css";

import metavonicsLogo from "../../../../public/customerLogos/metavonics.png";
import { getDictionary } from "../../../../translations/translations";

export default function CustomerQuotes(p: { lang: string }) {
  const t = getDictionary(p.lang);
  const customerLogos = {
    metavonics: metavonicsLogo,
  };
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{t.pitch.customerQuotes.title}</h2>
      {Object.keys(t.pitch.customerQuotes.quotes).map((key) => {
        const q = t.pitch.customerQuotes.quotes[key];
        return (
          <div key={key} className={styles.quote}>
            <p className={styles.quoteText}>{q.quote}</p>
            <div className={styles.quoteImage}>
              <Image src={customerLogos[key]} alt={""} objectFit="contain" />
            </div>
            <p className={styles.quoteName}>{q.name}</p>
            <p className={styles.quoteNameSubtitle}>{q.jobTitle}</p>
            <p className={styles.quoteNameSubtitle}>{q.companyName}</p>
          </div>
        );
      })}
    </section>
  );
}

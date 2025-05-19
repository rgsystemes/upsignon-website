"use client";
import { getDictionary } from "../../../../translations/translations";
import styles from "./banner.module.css";

export const Banner = (p: { lang?: string }) => {
  const t = getDictionary(p.lang);
  return (
    <div className={styles.banner}>
      <span>
        {t.banner[1]}
        <strong>{t.banner[2]}</strong>
        {t.banner[3]}
      </span>
      &nbsp;
      <a href="/resources/articles/upsignon-rejoint-rg-system-groupe-septeo">{t.banner.more}</a>
    </div>
  );
};

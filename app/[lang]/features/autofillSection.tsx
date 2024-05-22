"use client";
import Image from "next/image";
import FeaturePlatforms from "./featurePlatforms";
import styles from "./featureSection.module.css";
import ProPersoTags from "./proPersoTags";
import { useState } from "react";
import { getDictionary } from "../../../translations/translations";
import passwordScore from "../../../public/images/password-score.png";

type Props = {
  lang: string;
};

export default function AutofillSection(p: Props) {
  const [isOpen, toggleOpen] = useState(false);
  const t = getDictionary(p.lang);
  const toggleFold = () => {
    toggleOpen(!isOpen);
  };
  return (
    <section className={styles.feature_section}>
      <div className={styles.feature_title} onClick={toggleFold}>
        <h2>{t.features.autofill.title}</h2>
        <span className={styles.toggle_button}>{isOpen ? "-" : "+"}</span>
      </div>
      <FeaturePlatforms
        platforms={{ ios: "yes", android: "yes", windows: "yes", macos: "yes", linux: "yes", chromeos: "no" }}
        inline
        lang={p.lang}
      />
      <ProPersoTags pro={"yes"} perso={"yes"} lang={p.lang} inline />
      <div className={isOpen ? null : styles.autofill_block_container}>
        <div className={styles.autofill_block}>
          <div className={styles.autofill_block_title}>{t.features.autofill.desktopTitle}</div>
          <Image
            src={passwordScore}
            alt={t.features.autofill.desktopImageAlt}
            className={styles.feature_img}
            style={{
              maxHeight: isOpen ? 450 : 212,
            }}
          />
          {isOpen && (
            <div>
              {t.features.autofill.desktopDetails.map((d, id) => (
                <p key={id} className={styles.p}>
                  {d}
                </p>
              ))}
            </div>
          )}
        </div>
        <div className={styles.autofill_block}>
          <div className={styles.autofill_block_title}>{t.features.autofill.iosTitle}</div>
          <Image
            src={passwordScore}
            alt={t.features.autofill.iosImageAlt}
            className={styles.feature_img}
            style={{
              maxHeight: isOpen ? 450 : 212,
            }}
          />
          {isOpen && (
            <div>
              {t.features.autofill.iosDetails.map((d, id) => (
                <p key={id} className={styles.p}>
                  {d}
                </p>
              ))}
            </div>
          )}
        </div>
        <div className={styles.autofill_block}>
          <div className={styles.autofill_block_title}>{t.features.autofill.androidTitle}</div>
          <Image
            src={passwordScore}
            alt={t.features.autofill.androidImageAlt}
            className={styles.feature_img}
            style={{
              maxHeight: isOpen ? 450 : 212,
            }}
          />
          {isOpen && (
            <div>
              {t.features.autofill.androidDetails.map((d, id) => (
                <p key={id} className={styles.p}>
                  {d}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

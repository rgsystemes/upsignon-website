"use client";
import Image from "next/image";
import FeaturePlatforms from "./featurePlatforms";
import styles from "./featureSection.module.css";
import ProPersoTags from "./proPersoTags";
import { useState } from "react";
import { getDictionary } from "../../../translations/translations";

import autofillAndroidImg from "../../../public/images/autofillAndroid.jpg";
import autofillDesktopSmallImg from "../../../public/images/autofillDesktopSmall.png";
import autofillIOSImg from "../../../public/images/autofillIOS.png";

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
      <div className={isOpen ? styles.autofill_block_container_unfolded : styles.autofill_block_container_folded}>
        <div className={styles.autofill_block_desktop}>
          <div className={styles.autofill_block_title}>{t.features.autofill.desktopTitle}</div>
          <div>
            <Image
              src={autofillDesktopSmallImg}
              alt={t.features.autofill.desktopImageAlt}
              className={styles.feature_img}
              style={{
                maxHeight: isOpen ? 450 : 350,
              }}
            />
          </div>
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
            src={autofillIOSImg}
            alt={t.features.autofill.iosImageAlt}
            className={styles.feature_img}
            style={{
              maxHeight: isOpen ? 450 : 250,
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
            src={autofillAndroidImg}
            alt={t.features.autofill.androidImageAlt}
            className={styles.feature_img}
            style={{
              maxHeight: isOpen ? 450 : 250,
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

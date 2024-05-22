"use client";
import Image, { StaticImageData } from "next/image";
import FeaturePlatforms, { TPlatforms } from "./featurePlatforms";
import styles from "./featureSection.module.css";
import ProPersoTags from "./proPersoTags";
import { ReactNode, useState } from "react";
import { getDictionary } from "../../../translations/translations";
import { colors } from "../../colors";

type Props = {
  lang: string;
  title: string;
  platforms?: TPlatforms;
  tags?: {
    pro: "yes" | "no" | "warning";
    perso: "yes" | "no" | "warning";
  };
  details: string[] | null;
  imageSrc: StaticImageData | null;
  imageAlt: string;
  children?: ReactNode | null;
};

export default function FeatureSection(p: Props) {
  const [isOpen, toggleOpen] = useState(false);
  const t = getDictionary(p.lang);
  const toggleFold = () => {
    toggleOpen(!isOpen);
  };
  return (
    <section className={styles.feature_section}>
      <div className={styles.feature_title} onClick={toggleFold}>
        <h2>{p.title}</h2>
        <span className={styles.toggle_button}>{isOpen ? "-" : "+"}</span>
      </div>
      <div className={styles.feature_section_compact_summary}>
        {p.imageSrc && (
          <div>
            <Image
              src={p.imageSrc}
              alt={p.imageAlt}
              className={styles.feature_img}
              style={{
                maxHeight: isOpen ? 450 : 212,
              }}
            />
          </div>
        )}
        <div className={styles.feature_tags}>
          {p.platforms && <FeaturePlatforms platforms={p.platforms} lang={p.lang} />}
          {p.tags && <ProPersoTags pro={p.tags?.pro} perso={p.tags?.perso} lang={p.lang} />}
        </div>
      </div>
      {isOpen && (
        <div>
          {p.details.map((d, id) => (
            <p key={id} className={styles.p}>
              {d}
            </p>
          ))}
          {p.children}
        </div>
      )}
    </section>
  );
}

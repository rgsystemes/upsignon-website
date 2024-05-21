"use client";
import Image, { StaticImageData } from "next/image";
import FeaturePlatforms, { TPlatforms } from "./featurePlatforms";
import styles from "./featureSection.module.css";
import ProPersoTags from "./proPersoTags";
import { ReactNode, useRef, useState } from "react";
import { getDictionary } from "../../../translations/translations";

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
      <div className={styles.title} onClick={toggleFold}>
        <h2>{p.title}</h2>
        <span>{isOpen ? "-" : "+"}</span>
      </div>
      <div className={isOpen ? null : styles.feature_section_compact_summary}>
        {p.imageSrc && (
          <Image
            src={p.imageSrc}
            alt={p.imageAlt}
            style={{
              width: "auto",
              height: "auto",
              maxHeight: isOpen ? 450 : 200,
              margin: "auto",
            }}
          />
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

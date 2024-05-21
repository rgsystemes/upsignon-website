import Image, { StaticImageData } from "next/image";
import FeaturePlatforms, { TPlatforms } from "./featurePlatforms";
import styles from "./featureSection.module.css";
import ProPersoTags from "./proPersoTags";
import { ReactNode } from "react";

type Props = {
  lang: string;
  title: string;
  platforms?: TPlatforms;
  tags?: {
    pro: "yes" | "no" | "warning";
    perso: "yes" | "no" | "warning";
  };
  summary: string;
  details: string[] | null;
  imageSrc: StaticImageData | null;
  imageAlt: string;
  children?: ReactNode | null;
};

export default function FeatureSection(p: Props) {
  return (
    <section className={styles.feature_section}>
      <h2>{p.title}</h2>
      {p.platforms && <FeaturePlatforms platforms={p.platforms} lang={p.lang} />}
      {p.tags && <ProPersoTags pro={p.tags?.pro} perso={p.tags?.perso} lang={p.lang} />}
      {p.imageSrc && (
        <Image
          src={p.imageSrc}
          alt={p.imageAlt}
          style={{ width: "auto", height: "auto", maxHeight: 450, margin: "auto" }}
        />
      )}
      {p.summary ? (
        <details>
          <summary>{p.summary}</summary>
          {p.details.map((d, id) => (
            <p key={id} className={styles.p}>
              {d}
            </p>
          ))}
        </details>
      ) : (
        p.details.map((d, id) => (
          <p key={id} className={styles.p}>
            {d}
          </p>
        ))
      )}
      {p.children}
    </section>
  );
}

import Image, { StaticImageData } from "next/image";
import FeaturePlatforms, { TPlatforms } from "./featurePlatforms";
import styles from "./featureSection.module.css";
import Link from "next/link";
import TechFocusLink from "./techFocusLink";
import ProPersoTags from "./proPersoTags";
import { ReactNode } from "react";

type Props = {
  title: string;
  platforms: TPlatforms;
  tags: {
    pro: boolean;
    perso: boolean;
  } | null;
  summary: string;
  details: string[] | null;
  techFocus: {
    title: string;
    href: string;
  } | null;
  imageSrc: StaticImageData;
  imageAlt: string;
  children?: ReactNode | null;
};

export default function FeatureSection(p: Props) {
  return (
    <section className={styles.feature_section}>
      <h2>{p.title}</h2>
      <Image
        src={p.imageSrc}
        alt={p.imageAlt}
        style={{ width: "auto", height: "auto", maxHeight: 450, margin: "auto" }}
      />
      {p.platforms && <FeaturePlatforms platforms={p.platforms} />}
      <ProPersoTags pro={p.tags?.pro} perso={p.tags?.perso} />
      {p.summary ? (
        <details>
          <summary>{p.summary}</summary>
          {p.details.map((d, id) => (
            <p key={id}>{d}</p>
          ))}
        </details>
      ) : (
        p.details.map((d, id) => (
          <p key={id} className={styles.p}>
            {d}
          </p>
        ))
      )}
      {p.techFocus && <TechFocusLink title={p.techFocus.title} href={p.techFocus.href} />}
      {p.children}
    </section>
  );
}

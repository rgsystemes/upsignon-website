import Link from "next/link";
import React from "react";
import { getDictionary } from "../../translations/translations";
import styles from "./page.module.css";
import Image from "next/image";
import frenchImg from "../../public/images/french.svg";
import privacyByDesignImg from "../../public/images/privacyByDesign.svg";

export default function Page({ params }: { params: { lang: string } }) {
  const t = getDictionary(params.lang);
  return (
    <div>
      <section className={styles.titleSection}>
        <h1 className={styles.moto}>{t.pitch.moto}</h1>
        <p>
          <strong className={styles.subtitle}>{t.pitch.subtitle}</strong>
        </p>
        {/*
        <script src="https://player.vimeo.com/api/player.js"></script>
        <iframe
          src="https://player.vimeo.com/video/915105612?h=aa8e3cb72c"
          width="640"
          height="360"
          frameBorder="0"
          allow="fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe> */}
      </section>
      <section className={styles.tagsSection}>
        <div className={styles.tagsCard}>
          <div className={styles.tagsImgContainer}>
            <Image src={frenchImg} alt="" />
          </div>
          <div>{t.pitch.french}</div>
        </div>
        <div className={styles.tagsCard}>
          <div className={styles.tagsImgContainer}>
            <Image src={privacyByDesignImg} alt="" />
          </div>
          <div>{t.pitch.privacyByDesign}</div>
        </div>
      </section>
      <Link href="/features">{t.menu.features}</Link>
    </div>
  );
}

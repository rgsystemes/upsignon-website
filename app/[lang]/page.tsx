import Link from "next/link";
import React from "react";
import { getDictionary } from "../../translations/translations";
import styles from "./page.module.css";
import Image from "next/image";
import frenchImg from "../../public/images/french.svg";
import privacyByDesignImg from "../../public/images/privacyByDesign.svg";
import YoutubePlayer from "./youtubePlayer";

export default function Page({ params }: { params: { lang: string } }) {
  const t = getDictionary(params.lang);
  return (
    <div>
      <section className={styles.titleSection}>
        <h1 className={styles.moto}>{t.pitch.moto}</h1>
        <p>
          <strong className={styles.subtitle}>{t.pitch.subtitle}</strong>
        </p>
        <div className={styles.videoContainer}>
          <YoutubePlayer lang={params.lang} videoId={"dLF8Fb12XbE"} width={640} height={320} />
        </div>
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
      <section className={styles.keyMetricsSection}>
        <div className={styles.keyMetricsSectionContent}>
          <h2>{t.pitch.keyMetrics1Title}</h2>
          <p>{t.pitch.keyMetrics1Details}</p>
          <h2>{t.pitch.keyMetrics2Title}</h2>
          <p>{t.pitch.keyMetrics2Details}</p>
        </div>
      </section>
      <section className={styles.advantagesSection}>
        <div className={styles.advantagesSectionContent}>
          <h1>{t.pitch.advantages.sectionTitle}</h1>
          <div className={styles.singleAdvantageCard}>
            <h2>{t.pitch.advantages[1].t}</h2>
            <p>{t.pitch.advantages[1].p1}</p>
            <p>{t.pitch.advantages[1].p2}</p>
          </div>
          <div className={styles.singleAdvantageCard}>
            <h2>{t.pitch.advantages[2].t}</h2>
            <p>{t.pitch.advantages[2].p1}</p>
            <p>{t.pitch.advantages[2].p2}</p>
            <p>{t.pitch.advantages[2].p3}</p>
          </div>
          <div className={styles.singleAdvantageCard}>
            <h2>{t.pitch.advantages[3].t}</h2>
            <p>{t.pitch.advantages[3].p1}</p>
          </div>
          <div className={styles.singleAdvantageCard}>
            <h2>{t.pitch.advantages[4].t}</h2>
            <p>{t.pitch.advantages[4].p1}</p>
            <p>{t.pitch.advantages[4].p2}</p>
          </div>
          <div className={styles.singleAdvantageCard}>
            <h2>{t.pitch.advantages[5].t}</h2>
            <p>{t.pitch.advantages[5].p1}</p>
            <p>{t.pitch.advantages[5].p2}</p>
          </div>
        </div>
      </section>
      <section className={styles.proVsPersoSection}>
        <div className={styles.proVsPersoSectionContent}>
          <h1>{t.pitch.proVsPerso.sectionTitle}</h1>
          <h2>{t.pitch.proVsPerso.perso.t}</h2>
          <p>{t.pitch.proVsPerso.perso.p1}</p>
          <h2>{t.pitch.proVsPerso.pro.t}</h2>
          <p>{t.pitch.proVsPerso.pro.p1}</p>
          <p>{t.pitch.proVsPerso.pro.p2}</p>
          <p>{t.pitch.proVsPerso.pro.p3}</p>
          <div>
            {t.pitch.proVsPerso.more_1}
            <a href="/resources/technical-details/pro-vs-perso">{t.pitch.proVsPerso.more_2}</a>
            {t.pitch.proVsPerso.more_3}
            <a href="/features">{t.pitch.proVsPerso.more_4}</a>
            {t.pitch.proVsPerso.more_5}
          </div>
        </div>
      </section>
      <section className={styles.demoSection}>
        <div className={styles.demoSectionContent}>
          <h1>{t.pitch.demo.sectionTitle}</h1>
          <h2>{t.pitch.demo.perso}</h2>
          <div className={styles.videoContainer}>
            <YoutubePlayer lang={params.lang} videoId={"ydO1DeDcbak"} width={640} height={320} />
          </div>
          <h2>{t.pitch.demo.pro}</h2>
          <div className={styles.videoContainer}>
            <YoutubePlayer lang={params.lang} videoId={"TgUDr-UOr8Y"} width={640} height={320} />
          </div>
        </div>
      </section>
      <section className={styles.securityByDesignSection}>
        <div className={styles.securityByDesignSectionContent}>
          <h1>{t.pitch.securityByDesign.sectionTitle}</h1>
          <div>
            <h2>{t.pitch.securityByDesign.e2eEnc.t}</h2>
            <p>{t.pitch.securityByDesign.e2eEnc.p1}</p>
            <p>{t.pitch.securityByDesign.e2eEnc.p2}</p>
          </div>
          <div>
            <h2>{t.pitch.securityByDesign.mfa.t}</h2>
            <p>{t.pitch.securityByDesign.mfa.p1}</p>
          </div>
          <div>
            <h2>{t.pitch.securityByDesign.zeroKnowledge.t}</h2>
            <p>{t.pitch.securityByDesign.zeroKnowledge.p1}</p>
          </div>
        </div>
      </section>
      <Link href="/features">{t.menu.features}</Link>
    </div>
  );
}

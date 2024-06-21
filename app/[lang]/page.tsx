import React from "react";
import { getDictionary } from "../../translations/translations";
import styles from "./page.module.css";
import Image from "next/image";
import frenchImg from "../../public/images/french.svg";
import privacyByDesignImg from "../../public/images/privacyByDesign.svg";
import multiDeviceImg from "../../public/images/multiDevice.svg";
import cryptographyImg from "../../public/images/cryptography.svg";
import VimeoPlayer from "./vimeoPlayer";
import CustomerCarousel from "./customerCarousel";
import SingleAdvantage from "./singleAdvantage";
import { ContactLaterButton } from "./contactLaterButton/contactLaterButton";
import { FreeTrialButton } from "./freeTrialButton/freeTrial";
import { ContactUsButton } from "./contactUsButton/contactUsButton";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const t = getDictionary(params.lang);
  return {
    title: t.pitch.moto,
    description: t.pitch.metaDescription,
  };
}

export default function Page({ params }: { params: { lang: string } }) {
  const t = getDictionary(params.lang);
  return (
    <div>
      <div className={styles.blueBackground}>
        <section className={styles.titleSection}>
          <h1 className={styles.moto}>{t.pitch.moto}</h1>
          <VimeoPlayer videoId="915105612" title={t.pitch.prezVideoTitle} className={styles.demoVideo} />
          <p className={styles.subtitle}>{t.pitch.subtitle}</p>
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
          <div className={styles.tagsCard}>
            <div className={styles.tagsImgContainer}>
              <Image src={multiDeviceImg} alt="" />
            </div>
            {/* <MultiPlatformsTag containerStyle={styles.tagsImgContainerLogos} iconStyle={styles.platformLogo} /> */}
            <div>{t.pitch.crossPlatform}</div>
          </div>
        </section>
        <div className={styles.actionContainer}>
          <ContactLaterButton lang={params.lang} className={styles.actionLinkOnBlue} />
          <FreeTrialButton lang={params.lang} className={styles.actionLinkOnBlue} />
        </div>
      </div>
      <section className={styles.keyMetricsSection}>
        <div className={styles.keyMetricsSectionContent}>
          <h1 className={styles.sectionTitle}>{t.pitch.keyMetrics.sectionTitle}</h1>
          <div className={styles.keyMetricsSubsections}>
            <div className={styles.keyMetricsSubsection}>
              <div className={styles.keyMetricsNumber}>80%</div>
              <h2>{t.pitch.keyMetrics.t1}</h2>
              <p>{t.pitch.keyMetrics.d1}</p>
            </div>
            <div className={styles.keyMetricsSubsection}>
              <div className={styles.keyMetricsNumber}>59%</div>
              <h2>{t.pitch.keyMetrics.t2}</h2>
              <p>{t.pitch.keyMetrics.d2}</p>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.advantagesSection} ${styles.blueBackground}`}>
        <div className={styles.advantagesSectionContent}>
          <h1 className={styles.sectionTitle}>{t.pitch.advantages.sectionTitle}</h1>
          <SingleAdvantage title={t.pitch.advantages[1].t} details={t.pitch.advantages[1].d} />
          <SingleAdvantage title={t.pitch.advantages[2].t} details={t.pitch.advantages[2].d} />
          <SingleAdvantage title={t.pitch.advantages[3].t} details={t.pitch.advantages[3].d} />
          <SingleAdvantage title={t.pitch.advantages[4].t} details={t.pitch.advantages[4].d} />
          <SingleAdvantage title={t.pitch.advantages[5].t} details={t.pitch.advantages[5].d} />
          <SingleAdvantage title={t.pitch.advantages[6].t} details={t.pitch.advantages[6].d} />
        </div>
      </section>
      <section className={styles.proVsPersoSection}>
        <div className={styles.proVsPersoSectionContent}>
          <h1 className={styles.sectionTitle}>{t.pitch.proVsPerso.sectionTitle}</h1>
          <h2>
            <span className={styles.persoTTag}>{t.pitch.proVsPerso.perso.tTag}</span>
            <span>{t.pitch.proVsPerso.perso.t}</span>
          </h2>
          <p>{t.pitch.proVsPerso.perso.p1}</p>
          <h2>
            <span className={styles.proTTag}>{t.pitch.proVsPerso.pro.tTag}</span>
            <span>{t.pitch.proVsPerso.pro.t}</span>
          </h2>
          <p>{t.pitch.proVsPerso.pro.p1}</p>
          <p>{t.pitch.proVsPerso.pro.p2}</p>
          <div className={styles.actionContainer}>
            <div className={styles.actionContainer}>
              <ContactUsButton lang={params.lang} className={styles.actionLinkOnWhite} />
              <ContactLaterButton lang={params.lang} className={styles.actionLinkOnWhite} />
              <FreeTrialButton lang={params.lang} className={styles.actionLinkOnWhite} />
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.demoSection} ${styles.greenBackground}`}>
        <div className={styles.demoSectionContent}>
          <h1 className={styles.sectionTitle}>{t.pitch.demo.sectionTitle}</h1>
          <h2>{t.pitch.demo.appDemo}</h2>
          <VimeoPlayer videoId="964351571" title={t.pitch.demo.appDemo} className={styles.demoVideo} />
          <h2>{t.pitch.demo.extensionDemo}</h2>
          <VimeoPlayer videoId="964418300" title={t.pitch.demo.extensionDemo} className={styles.demoVideo} />
          <div className={styles.actionContainer}>
            <ContactUsButton lang={params.lang} className={styles.actionLinkOnGreen} />
            <ContactLaterButton lang={params.lang} className={styles.actionLinkOnGreen} />
            <FreeTrialButton lang={params.lang} className={styles.actionLinkOnGreen} />
          </div>
        </div>
      </section>
      <section className={styles.securityByDesignSection}>
        <div className={styles.securityByDesignSectionContent}>
          <h1 className={styles.sectionTitle}>{t.pitch.securityByDesign.sectionTitle}</h1>
          <div className={styles.securityArg}>
            <div className={styles.securityArgTitleContainer}>
              <Image src={cryptographyImg} alt="" className={styles.securityByDesignImg} />
              <h2>{t.pitch.securityByDesign.e2eEnc.t}</h2>
            </div>
            <p>{t.pitch.securityByDesign.e2eEnc.p1}</p>
            <p>{t.pitch.securityByDesign.e2eEnc.p2}</p>
          </div>
          <div className={styles.securityArg}>
            <div className={styles.securityArgTitleContainer}>
              <Image src={cryptographyImg} alt="" className={styles.securityByDesignImg} />
              <h2>{t.pitch.securityByDesign.mfa.t}</h2>
            </div>
            <p>{t.pitch.securityByDesign.mfa.p1}</p>
          </div>
          <div className={styles.securityArg}>
            <div className={styles.securityArgTitleContainer}>
              <Image src={cryptographyImg} alt="" className={styles.securityByDesignImg} />
              <h2>{t.pitch.securityByDesign.zeroKnowledge.t}</h2>
            </div>
            <p>{t.pitch.securityByDesign.zeroKnowledge.p1}</p>
          </div>
        </div>
      </section>
      <section className={styles.customerListSection}>
        <div className={styles.customerListSectionContent}>
          <h1 className={styles.sectionTitle}>{t.pitch.customerList.sectionTitle}</h1>
        </div>
        <CustomerCarousel />
      </section>
    </div>
  );
}

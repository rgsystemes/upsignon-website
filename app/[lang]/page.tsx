import React from "react";
import { getDictionary } from "../../translations/translations";
import styles from "./page.module.css";
import { Metadata } from "next";
import Image from "next/image";

import frenchImg from "../../public/images/french.svg";
import privacyByDesignImg from "../../public/images/privacyByDesign.svg";
import multiDeviceImg from "../../public/images/multiDevice.svg";
import cryptographyImg from "../../public/images/cryptography.svg";
import heroBannerImg from "../../public/images/heroBanner.png";
import googleIcon from "../../public/images/google.svg";
import starsIcon from "../../public/images/stars.svg";

import VimeoPlayer from "./components/vimeoPlayer/vimeoPlayer";
import CustomerCarousel from "./components/customerCarousel/customerCarousel";
import SingleAdvantage from "./components/singleAdvantage/singleAdvantage";
import { GreenCheckIcon } from "./components/greenCheckIcon/greenCheckIcon";
import { LanguageFlags } from "./components/languageFlags/languageFlags";
import CustomerQuotes from "./components/customerQuotes/customerQuotes";
import { FormModalButton } from "./components/formModal/formModal";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const t = getDictionary(lang);
  return {
    title: t.pitch.moto,
    description: t.pitch.metaDescription,
    alternates: {
      canonical: "https://upsignon.eu/fr",
      languages: {
        fr: "https://upsignon.eu/fr",
        en: "https://upsignon.eu/en",
      },
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = getDictionary(lang);
  return (
    <div>
      <div className={styles.blueBackground}>
        <section className={styles.heroBanner}>
          <div className={styles.heroBannerContainer}>
            <div className={styles.heroBannerContent}>
              <h1 className={styles.heroBannerTitle}>{t.heroBannner.title}</h1>
              <p className={styles.heroBannerDescription}>{t.heroBannner.description}</p>
              <div className={styles.heroBannerCTA}>
                <FormModalButton
                lang={lang}
                className={styles.actionLink}
                buttonText={t.actions.contactUs}
                modalTitle={t.actions.contactUs}
                modalLinkValue="contact-us"
                isFreeTrialForm={false}
                />
                <FormModalButton
                  lang={lang}
                  className={styles.actionLinkPrimary}
                  buttonText={t.actions.freeTrial}
                  modalTitle={t.actions.freeTrial}
                  modalLinkValue="free-trial"
                  isFreeTrialForm={true}
                />
              </div>
              <div className={styles.statsContainer}>
                <Image src={googleIcon} alt="" />
                <p>{t.heroBannner.rating}</p>
                <Image src={starsIcon} alt="" />
              </div>
            </div>
            <div className={styles.heroBannerImg}>
              <Image src={heroBannerImg} alt="" />
            </div>
          </div>
        </section>
        <section className={styles.titleSection}>
          <h2 className={styles.moto}>{t.pitch.moto}</h2>
          <VimeoPlayer
            videoId="915105612"
            title={t.pitch.prezVideoTitle}
            className={styles.demoVideo}
          />
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
            <div>{t.pitch.crossPlatform}</div>
          </div>
        </section>
        <section className={styles.hostingSection}>
          <div className={styles.hostingBadge}>
            <GreenCheckIcon />
            <div>{t.pitch.saas}</div>
          </div>
          <div className={styles.hostingBadge}>
            <GreenCheckIcon />
            <div>{t.pitch.onprem}</div>
          </div>
        </section>
        <div className={styles.actionContainer}>
          <FormModalButton
            lang={lang}
            className={styles.actionLink}
            buttonText={t.actions.contactUs}
            modalTitle={t.actions.contactUs}
            modalLinkValue="contact-us"
            isFreeTrialForm={false}
          />
          <FormModalButton
            lang={lang}
            className={styles.actionLinkPrimary}
            buttonText={t.actions.freeTrial}
            modalTitle={t.actions.freeTrial}
            modalLinkValue="free-trial"
            isFreeTrialForm={true}
          />
        </div>
      </div >
      <section className={styles.keyMetricsSection}>
        <div className={styles.keyMetricsSectionContent}>
          <h1 className={styles.sectionTitle}>
            {t.pitch.keyMetrics.sectionTitle}
          </h1>
          <div className={styles.keyMetricsSubsections}>
            <div className={styles.keyMetricsSubsection}>
              <div className={styles.keyMetricsNumber}>80%</div>
              <h2>{t.pitch.keyMetrics.t1}</h2>
              <p>{t.pitch.keyMetrics.d1}</p>
            </div>
            <div className={styles.keyMetricsSubsection}>
              <div className={styles.keyMetricsNumberAlt}>59%</div>
              <h2>{t.pitch.keyMetrics.t2}</h2>
              <p>{t.pitch.keyMetrics.d2}</p>
            </div>
          </div>
        </div>
      </section>
      <section
        className={`${styles.advantagesSection} ${styles.advantagesBackground}`}
      >
        <div className={styles.advantagesSectionContent}>
          <h1 className={styles.sectionTitle}>
            {t.pitch.advantages.sectionTitle}
          </h1>
          <SingleAdvantage
            title={t.pitch.advantages[1].t}
            details={t.pitch.advantages[1].d}
          />
          <SingleAdvantage
            title={t.pitch.advantages[2].t}
            details={t.pitch.advantages[2].d}
          />
          <SingleAdvantage
            title={t.pitch.advantages[3].t}
            details={t.pitch.advantages[3].d}
          />
          <SingleAdvantage
            title={t.pitch.advantages[4].t}
            details={t.pitch.advantages[4].d}
          />
          <SingleAdvantage
            title={t.pitch.advantages[5].t}
            details={t.pitch.advantages[5].d}
          />
          <SingleAdvantage
            title={t.pitch.advantages[6].t}
            details={t.pitch.advantages[6].d}
          />
          <SingleAdvantage
            title={t.pitch.advantages[7].t}
            details={t.pitch.advantages[7].d}
          >
            <LanguageFlags lang={lang} />
          </SingleAdvantage>
        </div>
      </section>
      <section className={styles.proVsPersoSection}>
        <div className={styles.proVsPersoSectionContent}>
          <h1 className={styles.sectionTitle}>
            {t.pitch.proVsPerso.sectionTitle}
          </h1>
          <h2>
            <span className={styles.persoTTag}>
              {t.pitch.proVsPerso.perso.tTag}
            </span>
            <span>{t.pitch.proVsPerso.perso.t}</span>
          </h2>
          <p>{t.pitch.proVsPerso.perso.p1}</p>
          <h2>
            <span className={styles.proTTag}>
              {t.pitch.proVsPerso.pro.tTag}
            </span>
            <span>{t.pitch.proVsPerso.pro.t}</span>
          </h2>
          <p>{t.pitch.proVsPerso.pro.p1}</p>
          <p>{t.pitch.proVsPerso.pro.p2}</p>
          <div className={styles.actionContainer}>
            <div className={styles.actionContainer}>
              <FormModalButton
                lang={lang}
                className={styles.actionLinkPrimary}
                buttonText={t.actions.contactUs}
                modalTitle={t.actions.contactUs}
                modalLinkValue="contact-us"
                isFreeTrialForm={false}
              />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.securityByDesignSection}>
        <div className={styles.securityByDesignSectionContent}>
          <h1 className={styles.sectionTitle}>
            {t.pitch.securityByDesign.sectionTitle}
          </h1>
          <div className={styles.securityArg}>
            <div className={styles.securityArgTitleContainer}>
              <Image
                src={cryptographyImg}
                alt=""
                className={styles.securityByDesignImg}
              />
              <h2>{t.pitch.securityByDesign.e2eEnc.t}</h2>
            </div>
            <p>{t.pitch.securityByDesign.e2eEnc.p1}</p>
            <p>{t.pitch.securityByDesign.e2eEnc.p2}</p>
          </div>
          <div className={styles.securityArg}>
            <div className={styles.securityArgTitleContainer}>
              <Image
                src={cryptographyImg}
                alt=""
                className={styles.securityByDesignImg}
              />
              <h2>{t.pitch.securityByDesign.mfa.t}</h2>
            </div>
            <p>{t.pitch.securityByDesign.mfa.p1}</p>
          </div>
          <div className={styles.securityArg}>
            <div className={styles.securityArgTitleContainer}>
              <Image
                src={cryptographyImg}
                alt=""
                className={styles.securityByDesignImg}
              />
              <h2>{t.pitch.securityByDesign.zeroKnowledge.t}</h2>
            </div>
            <p>{t.pitch.securityByDesign.zeroKnowledge.p1}</p>
          </div>
        </div>
      </section>
      <section className={styles.customerListSection}>
        <div className={styles.customerListSectionContent}>
          <h1 className={styles.sectionTitle}>
            {t.pitch.customerList.sectionTitle}
          </h1>
        </div>
        <CustomerCarousel />
        <CustomerQuotes lang={lang} />
      </section>
    </div >
  );
}

import { Metadata } from "next";
import styles from "./page.module.css";
import { getDictionary } from "../../../translations/translations";
import Link from "next/link";
import { defaultLicencePrice } from "./priceHelper";
import { FormModalButton } from "../components/formModal/formModal";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const t = getDictionary(lang);
  return {
    title: t.menu.pricing,
    description: t.pricing.metaDescription,
    alternates: {
      canonical: "https://upsignon.eu/fr/pricing",
      languages: {
        fr: "https://upsignon.eu/fr/pricing",
        en: "https://upsignon.eu/en/pricing",
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
    <div className={styles.content}>
      <section className={styles.section}>
        <h1>{t.menu.pricing}</h1>
        <div className={styles.pricingsContainer}>
          <div className={styles.persoPricing}>
            <h3 className={styles.pricingTitlePerso}>
              {t.pricing.persoPricing.t}
            </h3>
            <div className={styles.persoPrice}>
              {t.pricing.persoPricing.free}
            </div>
            <Link href="/downloads" className={styles.downloadAction}>
              {t.pricing.persoPricing.downloadAction}
            </Link>
            <div className={styles.pricingDetails}>
              {t.pricing.persoPricing.details} 🙏🙏
            </div>
          </div>
          <div className={styles.proPricing}>
            <h3 className={styles.pricingTitlePro}>{t.pricing.proPricing.t}</h3>
            <div className={styles.proPrice}>{defaultLicencePrice}€</div>
            <div className={styles.proPriceUnit}>
              {t.pricing.proPricing.licencePriceUnit}
            </div>
            <div className={styles.selfHostingTitle}>
              {t.pricing.proPricing.onPremOption}
            </div>
            <FormModalButton
              lang={lang}
              className={styles.proPricingActionButtonSecondary}
              buttonText={t.actions.contactUs}
              modalTitle={t.actions.contactUs}
              modalLinkValue="contact-us"
              isFreeTrialForm={false}
            />
            <FormModalButton
              lang={lang}
              className={styles.proPricingActionButton}
              buttonText={t.actions.freeTrial}
              modalTitle={t.actions.freeTrial}
              modalLinkValue="free-trial"
              isFreeTrialForm={true}
            />

            <div className={styles.pricingDetails}>
              {t.pricing.proPricing.saasDetails}
            </div>
          </div>
        </div>
        <h1>{t.pricing.distribTitle}</h1>
        <p className={styles.distribDetails}>{t.pricing.distribDetails}</p>
        <div className={styles.centerContainer}>
          <FormModalButton
            lang={lang}
            className={styles.proPricingActionButtonSecondary}
            buttonText={t.actions.contactUs}
            modalTitle={t.actions.contactUs}
            modalLinkValue="contact-us"
            isFreeTrialForm={false}
          />
        </div>
      </section>
    </div>
  );
}

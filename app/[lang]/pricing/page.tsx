import { getDictionary } from "../../../translations/translations";
import styles from "./page.module.css";

export default function Page({ params }: { params: { lang: string } }) {
  const t = getDictionary(params.lang);
  return (
    <div className={styles.content}>
      <h1>{t.pricing.pageTitle}</h1>
      <div className={styles.pricingsContainer}>
        <div className={styles.persoPricing}>
          <h3 className={styles.pricingTitlePerso}>{t.pricing.persoPricing.t}</h3>
          <div className={styles.persoPrice}>{t.pricing.persoPricing.free}</div>
          <div className={styles.pricingDetails}>{t.pricing.persoPricing.details}</div>
          <a href="/downloads" className={styles.downloadAction}>
            {t.pricing.persoPricing.downloadAction}
          </a>
        </div>
        <div className={styles.proPricing}>
          <h3 className={styles.pricingTitlePro}>{t.pricing.proPricing.t}</h3>
          <div className={styles.proPrice}>
            18€ <span className={styles.proPriceUnit}>{t.pricing.proPricing.licencePriceUnit}</span>
          </div>
          <div className={styles.priceDetail}>{t.pricing.proPricing.licenceOver1000}</div>
          <div className={styles.priceDetail}>{t.pricing.proPricing.licenceOver12000}</div>
          <div className={styles.priceDetail}>{t.pricing.proPricing.licence3YearsReduction}</div>
          <h3 className={styles.selfHostingTitle}>{t.pricing.proPricing.onPremOption}</h3>
          <div className={styles.pricingDetails}>{t.pricing.proPricing.saasDetails}</div>
          <div className={styles.pricingDetails}>{t.pricing.proPricing.onPremDetails}</div>

          {/* TODO implement call to Action */}
          <div className={styles.proPricingTestButton}>{t.pricing.proPricing.test1month}</div>
          <div className={styles.proPricingCallLater}>{t.pricing.proPricing.beContactedLater}</div>
        </div>
      </div>

      <h1>{t.pricing.distribTitle}</h1>
      <p>{t.pricing.distribDetails}</p>
    </div>
  );
}

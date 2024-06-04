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
        </div>
      </div>
    </div>
  );
}

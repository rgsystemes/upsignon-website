import { Metadata } from "next";
import FeatureSection from "./featureSection";
import CompatibilityTable from "./compatibilityTable";
import styles from "./page.module.css";
import proPersoVaultsImg from "../../../public/images/pro-perso-vaults.png";
import passwordScore from "../../../public/images/password-score.png";
import { getDictionary } from "../../../translations/translations";

export const metadata: Metadata = {
  title: "Fonctionnalités",
};

export default function Page({ params }: { params: { lang: string } }) {
  const t = getDictionary(params.lang);
  return (
    <div className={styles.content}>
      <h1>{t.features.pageTitle}</h1>
      <FeatureSection
        lang={params.lang}
        title={t.features.proPerso.title}
        platforms={{
          ios: true,
          android: true,
          windows: true,
          macos: true,
          linux: true,
          chromeos: true,
        }}
        tags={null}
        summary={t.features.proPerso.summary}
        details={t.features.proPerso.details}
        imageSrc={proPersoVaultsImg}
        imageAlt={t.features.proPerso.imageAlt}
        techFocus={{
          title: t.features.proPerso.techFocusTitle,
          href: "/resources/technical-details/pro-vs-perso",
        }}
      />
      <FeatureSection
        lang={params.lang}
        title={t.features.crossPlatform.title}
        platforms={null}
        tags={{ pro: true, perso: true }}
        summary={null}
        details={t.features.crossPlatform.details}
        imageSrc={proPersoVaultsImg}
        imageAlt={t.features.crossPlatform.imageAlt}
        techFocus={null}
      >
        <CompatibilityTable lang={params.lang} />
      </FeatureSection>
      <FeatureSection
        lang={params.lang}
        title={t.features.syncing.title}
        platforms={{
          ios: true,
          android: true,
          windows: true,
          macos: true,
          linux: true,
          chromeos: true,
        }}
        tags={{ pro: true, perso: true }}
        summary={null}
        details={t.features.syncing.details}
        imageSrc={proPersoVaultsImg}
        imageAlt="TODO"
        techFocus={null}
      />
      <h2 className={styles.page_h2}>{t.features.dataSubtitle}</h2>
      <FeatureSection
        lang={params.lang}
        title={t.features.unlimitedAccounts.title}
        platforms={{
          ios: true,
          android: true,
          windows: true,
          macos: true,
          linux: true,
          chromeos: true,
        }}
        tags={{ pro: true, perso: true }}
        summary={null}
        details={t.features.unlimitedAccounts.details}
        imageSrc={proPersoVaultsImg}
        imageAlt="TODO"
        techFocus={null}
      />
      <FeatureSection
        lang={params.lang}
        title={t.features.unlimitedCodes.title}
        platforms={{
          ios: true,
          android: true,
          windows: true,
          macos: true,
          linux: true,
          chromeos: true,
        }}
        tags={{ pro: true, perso: true }}
        summary={null}
        details={t.features.unlimitedCodes.details}
        imageSrc={proPersoVaultsImg}
        imageAlt="TODO"
        techFocus={null}
      />
      <FeatureSection
        lang={params.lang}
        title={t.features.quickView.title}
        platforms={{
          ios: true,
          android: true,
          windows: true,
          macos: true,
          linux: true,
          chromeos: true,
        }}
        tags={{ pro: true, perso: true }}
        summary={null}
        details={t.features.quickView.details}
        imageSrc={proPersoVaultsImg}
        imageAlt="TODO"
        techFocus={null}
      />
      <FeatureSection
        lang={params.lang}
        title={t.features.passwordStrength.title}
        platforms={{
          ios: true,
          android: true,
          windows: true,
          macos: true,
          linux: true,
          chromeos: true,
        }}
        tags={{ pro: true, perso: true }}
        summary={t.features.passwordStrength.summary} // TODO link to article
        details={t.features.passwordStrength.details}
        imageSrc={passwordScore}
        imageAlt={t.features.passwordStrength.imageAlt}
        techFocus={null}
      />
      <FeatureSection
        lang={params.lang}
        title={t.features.passwordGenerator.title}
        platforms={{
          ios: true,
          android: true,
          windows: true,
          macos: true,
          linux: true,
          chromeos: true,
        }}
        tags={{ pro: true, perso: true }}
        summary={t.features.passwordGenerator.summary}
        details={t.features.passwordGenerator.details}
        imageSrc={passwordScore}
        imageAlt={t.features.passwordGenerator.imageAlt}
        techFocus={null}
      />
      <FeatureSection
        lang={params.lang}
        title={t.features.passwordHistory.title}
        platforms={{
          ios: true,
          android: true,
          windows: true,
          macos: true,
          linux: true,
          chromeos: true,
        }}
        tags={{ pro: true, perso: true }}
        summary={null}
        details={t.features.passwordHistory.details}
        imageSrc={passwordScore}
        imageAlt={t.features.passwordHistory.imageAlt}
        techFocus={null}
      />
      <FeatureSection
        lang={params.lang}
        title={t.features.multiUrls.title}
        platforms={{
          ios: true,
          android: true,
          windows: true,
          macos: true,
          linux: true,
          chromeos: true,
        }}
        tags={{ pro: true, perso: true }}
        summary={null}
        details={t.features.multiUrls.details}
        imageSrc={passwordScore}
        imageAlt={t.features.multiUrls.imageAlt}
        techFocus={null}
      />
      <FeatureSection
        lang={params.lang}
        title={t.features.notes.title}
        platforms={{
          ios: true,
          android: true,
          windows: true,
          macos: true,
          linux: true,
          chromeos: true,
        }}
        tags={{ pro: true, perso: true }}
        summary={null}
        details={t.features.notes.details}
        imageSrc={passwordScore}
        imageAlt={t.features.notes.imageAlt}
        techFocus={null}
      />
      <FeatureSection
        lang={params.lang}
        title={t.features.totp.title}
        platforms={{
          ios: true,
          android: true,
          windows: true,
          macos: true,
          linux: true,
          chromeos: true,
        }}
        tags={{ pro: true, perso: true }}
        summary={null}
        details={t.features.totp.details}
        imageSrc={passwordScore}
        imageAlt={t.features.totp.imageAlt}
        techFocus={null}
      >
        <div>Comment configurer un TOTP dans UpSignOn ?</div>
        {/* TODO */}
      </FeatureSection>
      <FeatureSection
        lang={params.lang}
        title={t.features.paymentData.title}
        platforms={{
          ios: true,
          android: true,
          windows: true,
          macos: true,
          linux: true,
          chromeos: true,
        }}
        tags={{ pro: true, perso: true }}
        summary={null}
        details={t.features.paymentData.details}
        imageSrc={passwordScore}
        imageAlt={t.features.paymentData.imageAlt}
        techFocus={null}
      />
      <h2 className={styles.page_h2}>{t.features.sharingSubtitle}</h2>
      <FeatureSection
        lang={params.lang}
        title={t.features.trustedContacts.title}
        platforms={{
          ios: true,
          android: true,
          windows: true,
          macos: true,
          linux: true,
          chromeos: true,
        }}
        tags={{ pro: false, perso: true }}
        summary={null}
        details={["TODO"]}
        imageSrc={passwordScore}
        imageAlt="Capture d'écran TODO"
        techFocus={null}
      />
      <FeatureSection
        lang={params.lang}
        title={t.features.sharing.title}
        platforms={{
          ios: true,
          android: true,
          windows: true,
          macos: true,
          linux: true,
          chromeos: true,
        }}
        tags={{ pro: true, perso: true }}
        summary={null}
        details={["TODO"]}
        imageSrc={passwordScore}
        imageAlt="Capture d'écran TODO"
        techFocus={null}
      />
      <FeatureSection
        lang={params.lang}
        title={t.features.rightsManagement.title}
        platforms={{
          ios: true,
          android: true,
          windows: true,
          macos: true,
          linux: true,
          chromeos: true,
        }}
        tags={{ pro: true, perso: true }}
        summary={null}
        details={["TODO"]}
        imageSrc={passwordScore}
        imageAlt="Capture d'écran TODO"
        techFocus={null}
      />
      <h2 className={styles.page_h2}>{t.features.autofillAutosaveSubtitle}</h2>
      <FeatureSection
        lang={params.lang}
        title={t.features.autofillSmartphones.title}
        platforms={{
          ios: true,
          android: true,
          windows: false,
          macos: false,
          linux: false,
          chromeos: false,
        }}
        tags={{ pro: true, perso: true }}
        summary={null}
        details={["TODO"]}
        imageSrc={passwordScore}
        imageAlt="Capture d'écran TODO"
        techFocus={null}
      />
    </div>
  );
}

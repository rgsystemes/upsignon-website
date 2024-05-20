import { Metadata } from "next";
import FeatureSection from "./featureSection";
import CompatibilityTable from "./compatibilityTable";
import styles from "./page.module.css";
import proPersoVaultsImg from "../../../public/images/pro-perso-vaults.png";
import passwordScore from "../../../public/images/password-score.png";
import { getDictionary } from "../../../translations/translations";
import TechFocusLink from "./techFocusLink";
import AutolockBehaviourTable from "./autolockBehaviourTable";

export const metadata: Metadata = {
  title: "Fonctionnalités",
};

export default function Page({ params }: { params: { lang: string } }) {
  const t = getDictionary(params.lang);
  return (
    <div className={styles.content}>
      <h1>{t.features.pageTitle}</h1>
      <h2 className={styles.feature_family_title}>{t.features.generalSubtitle}</h2>
      <FeatureSection
        lang={params.lang}
        title={t.features.proPerso.title}
        platforms={{ ios: true, android: true, windows: true, macos: true, linux: true, chromeos: true }}
        tags={null}
        summary={t.features.proPerso.summary}
        details={t.features.proPerso.details}
        imageSrc={proPersoVaultsImg}
        imageAlt={t.features.proPerso.imageAlt}
      >
        <TechFocusLink
          title={t.features.proPerso.techFocusTitle}
          href={"/resources/technical-details/pro-vs-perso"}
          lang={params.lang}
        />
      </FeatureSection>
      <FeatureSection
        lang={params.lang}
        title={t.features.crossPlatform.title}
        platforms={null}
        tags={{ pro: "yes", perso: "yes" }}
        summary={null}
        details={t.features.crossPlatform.details}
        imageSrc={proPersoVaultsImg}
        imageAlt={t.features.crossPlatform.imageAlt}
      >
        <CompatibilityTable lang={params.lang} />
      </FeatureSection>
      <FeatureSection
        lang={params.lang}
        title={t.features.syncing.title}
        platforms={{ ios: true, android: true, windows: true, macos: true, linux: true, chromeos: true }}
        tags={{ pro: "yes", perso: "yes" }}
        summary={null}
        details={t.features.syncing.details}
        imageSrc={proPersoVaultsImg}
        imageAlt={t.features.syncing.imageAlt}
      />
      <h2 className={styles.feature_family_title}>{t.features.dataSubtitle}</h2>
      <FeatureSection
        lang={params.lang}
        title={t.features.unlimitedAccounts.title}
        platforms={{ ios: true, android: true, windows: true, macos: true, linux: true, chromeos: true }}
        tags={{ pro: "yes", perso: "yes" }}
        summary={null}
        details={t.features.unlimitedAccounts.details}
        imageSrc={proPersoVaultsImg}
        imageAlt="TODO"
      />
      <FeatureSection
        lang={params.lang}
        title={t.features.unlimitedCodes.title}
        platforms={{ ios: true, android: true, windows: true, macos: true, linux: true, chromeos: true }}
        tags={{ pro: "yes", perso: "yes" }}
        summary={null}
        details={t.features.unlimitedCodes.details}
        imageSrc={proPersoVaultsImg}
        imageAlt="TODO"
      />
      <FeatureSection
        lang={params.lang}
        title={t.features.quickView.title}
        platforms={{ ios: true, android: true, windows: true, macos: true, linux: true, chromeos: true }}
        tags={{ pro: "yes", perso: "yes" }}
        summary={null}
        details={t.features.quickView.details}
        imageSrc={proPersoVaultsImg}
        imageAlt={t.features.quickView.imageAlt}
      />
      <FeatureSection
        lang={params.lang}
        title={t.features.passwordStrength.title}
        platforms={{ ios: true, android: true, windows: true, macos: true, linux: true, chromeos: true }}
        tags={{ pro: "yes", perso: "yes" }}
        summary={t.features.passwordStrength.summary} // TODO link to article
        details={t.features.passwordStrength.details}
        imageSrc={passwordScore}
        imageAlt={t.features.passwordStrength.imageAlt}
      />
      <FeatureSection
        lang={params.lang}
        title={t.features.passwordGenerator.title}
        platforms={{ ios: true, android: true, windows: true, macos: true, linux: true, chromeos: true }}
        tags={{ pro: "yes", perso: "yes" }}
        summary={t.features.passwordGenerator.summary}
        details={t.features.passwordGenerator.details}
        imageSrc={passwordScore}
        imageAlt={t.features.passwordGenerator.imageAlt}
      />
      <FeatureSection
        lang={params.lang}
        title={t.features.passwordHistory.title}
        platforms={{ ios: true, android: true, windows: true, macos: true, linux: true, chromeos: true }}
        tags={{ pro: "yes", perso: "yes" }}
        summary={null}
        details={t.features.passwordHistory.details}
        imageSrc={passwordScore}
        imageAlt={t.features.passwordHistory.imageAlt}
      />
      <FeatureSection
        lang={params.lang}
        title={t.features.multiUrls.title}
        platforms={{ ios: true, android: true, windows: true, macos: true, linux: true, chromeos: true }}
        tags={{ pro: "yes", perso: "yes" }}
        summary={null}
        details={t.features.multiUrls.details}
        imageSrc={passwordScore}
        imageAlt={t.features.multiUrls.imageAlt}
      />
      <FeatureSection
        lang={params.lang}
        title={t.features.notes.title}
        platforms={{ ios: true, android: true, windows: true, macos: true, linux: true, chromeos: true }}
        tags={{ pro: "yes", perso: "yes" }}
        summary={null}
        details={t.features.notes.details}
        imageSrc={passwordScore}
        imageAlt={t.features.notes.imageAlt}
      />
      <FeatureSection
        lang={params.lang}
        title={t.features.totp.title}
        platforms={{ ios: true, android: true, windows: true, macos: true, linux: true, chromeos: true }}
        tags={{ pro: "yes", perso: "yes" }}
        summary={null}
        details={t.features.totp.details}
        imageSrc={passwordScore}
        imageAlt={t.features.totp.imageAlt}
      >
        <div>Comment configurer un TOTP dans UpSignOn ?</div>
        {/* TODO */}
      </FeatureSection>
      <FeatureSection
        lang={params.lang}
        title={t.features.paymentData.title}
        platforms={{ ios: true, android: true, windows: true, macos: true, linux: true, chromeos: true }}
        tags={{ pro: "yes", perso: "yes" }}
        summary={null}
        details={t.features.paymentData.details}
        imageSrc={passwordScore}
        imageAlt={t.features.paymentData.imageAlt}
      />
      <h2 className={styles.feature_family_title}>{t.features.sharingSubtitle}</h2>
      <FeatureSection
        lang={params.lang}
        title={t.features.trustedContacts.title}
        platforms={{ ios: true, android: true, windows: true, macos: true, linux: true, chromeos: true }}
        tags={{ pro: "no", perso: "yes" }}
        summary={null}
        details={t.features.trustedContacts.details}
        imageSrc={passwordScore}
        imageAlt={t.features.trustedContacts.imageAlt}
      />
      <FeatureSection
        lang={params.lang}
        title={t.features.sharing.title}
        platforms={{ ios: true, android: true, windows: true, macos: true, linux: true, chromeos: true }}
        tags={{ pro: "yes", perso: "yes" }}
        summary={null}
        details={t.features.sharing.details}
        imageSrc={passwordScore}
        imageAlt={t.features.sharing.imageAlt}
      />
      <FeatureSection
        lang={params.lang}
        title={t.features.rightsManagement.title}
        platforms={{ ios: true, android: true, windows: true, macos: true, linux: true, chromeos: true }}
        tags={{ pro: "yes", perso: "yes" }}
        summary={null}
        details={t.features.rightsManagement.details}
        imageSrc={passwordScore}
        imageAlt={t.features.rightsManagement.imageAlt}
      >
        <ul>
          <li>
            <strong>{t.features.rightsManagement.rightLevels.readOnly.title}</strong>{" "}
            {t.features.rightsManagement.rightLevels.readOnly.def}
          </li>
          <li>
            <strong>{t.features.rightsManagement.rightLevels.editor.title}</strong>{" "}
            {t.features.rightsManagement.rightLevels.editor.def}
          </li>
          <li>
            <strong>{t.features.rightsManagement.rightLevels.owner.title}</strong>{" "}
            {t.features.rightsManagement.rightLevels.owner.def}
          </li>
        </ul>
      </FeatureSection>

      <h2 className={styles.feature_family_title}>{t.features.autofillAutosaveSubtitle}</h2>
      <FeatureSection
        lang={params.lang}
        title={t.features.autofillDesktop.title}
        platforms={{ ios: false, android: false, windows: true, macos: true, linux: false, chromeos: false }}
        tags={{ pro: "yes", perso: "yes" }}
        summary={null}
        details={t.features.autofillDesktop.details}
        imageSrc={passwordScore}
        imageAlt={t.features.autofillDesktop.imageAlt}
      />
      <FeatureSection
        lang={params.lang}
        title={t.features.autosaveDesktop.title}
        platforms={{ ios: false, android: false, windows: true, macos: true, linux: false, chromeos: false }}
        tags={{ pro: "yes", perso: "yes" }}
        summary={null}
        details={t.features.autosaveDesktop.details}
        imageSrc={passwordScore}
        imageAlt={t.features.autosaveDesktop.imageAlt}
      />
      <FeatureSection
        lang={params.lang}
        title={t.features.autofillIOS.title}
        platforms={{ ios: true, android: false, windows: false, macos: false, linux: false, chromeos: false }}
        tags={{ pro: "yes", perso: "yes" }}
        summary={null}
        details={t.features.autofillIOS.details}
        imageSrc={passwordScore}
        imageAlt={t.features.autofillIOS.imageAlt}
      />
      <FeatureSection
        lang={params.lang}
        title={t.features.autofillAndroid.title}
        platforms={{ ios: false, android: true, windows: false, macos: false, linux: false, chromeos: false }}
        tags={{ pro: "yes", perso: "yes" }}
        summary={null}
        details={t.features.autofillAndroid.details}
        imageSrc={passwordScore}
        imageAlt={t.features.autofillAndroid.imageAlt}
      />

      <h2 className={styles.feature_family_title}>{t.features.searchFilterOrganizeSubtitle}</h2>
      <FeatureSection
        lang={params.lang}
        title={t.features.search.title}
        platforms={{ ios: true, android: true, windows: true, macos: true, linux: true, chromeos: true }}
        tags={{ pro: "yes", perso: "yes" }}
        summary={null}
        details={t.features.search.details}
        imageSrc={passwordScore}
        imageAlt={t.features.search.imageAlt}
      />
      <FeatureSection
        lang={params.lang}
        title={t.features.filter.title}
        platforms={{ ios: true, android: true, windows: true, macos: true, linux: true, chromeos: true }}
        tags={{ pro: "yes", perso: "yes" }}
        summary={null}
        details={t.features.filter.details}
        imageSrc={passwordScore}
        imageAlt={t.features.filter.imageAlt}
      />
      <FeatureSection
        lang={params.lang}
        title={t.features.organize.title}
        platforms={{ ios: true, android: true, windows: true, macos: true, linux: true, chromeos: true }}
        tags={{ pro: "yes", perso: "yes" }}
        summary={null}
        details={t.features.organize.details}
        imageSrc={passwordScore}
        imageAlt={t.features.organize.imageAlt}
      />

      <h2 className={styles.feature_family_title}>{t.features.importExportSubtitle}</h2>
      <FeatureSection
        lang={params.lang}
        title={t.features.csvImport.title}
        platforms={{ ios: true, android: true, windows: true, macos: true, linux: true, chromeos: true }}
        tags={{ pro: "yes", perso: "yes" }}
        summary={null}
        details={t.features.csvImport.details}
        imageSrc={passwordScore}
        imageAlt={t.features.csvImport.imageAlt}
      />
      <FeatureSection
        lang={params.lang}
        title={t.features.csvExport.title}
        platforms={{ ios: true, android: true, windows: true, macos: true, linux: true, chromeos: true }}
        tags={{ pro: "yes", perso: "yes" }}
        summary={null}
        details={t.features.csvExport.details}
        imageSrc={passwordScore}
        imageAlt={t.features.csvExport.imageAlt}
      >
        <strong>{t.features.csvExport.warningPro}</strong>
      </FeatureSection>

      <h2 className={styles.feature_family_title}>{t.features.securityFeaturesSubtitle}</h2>
      <FeatureSection
        lang={params.lang}
        title={t.features.endToEndEncryption.title}
        platforms={{ ios: true, android: true, windows: true, macos: true, linux: true, chromeos: true }}
        tags={{ pro: "yes", perso: "yes" }}
        summary={t.features.endToEndEncryption.summary}
        details={t.features.endToEndEncryption.details}
        imageSrc={null}
        imageAlt={""}
        // TODO: parler des algorithmes de chiffrement utilisés
      />
      <FeatureSection
        lang={params.lang}
        title={t.features.passwordLocking.title}
        platforms={{ ios: true, android: true, windows: true, macos: true, linux: true, chromeos: true }}
        tags={{ pro: "yes", perso: "yes" }}
        summary={null}
        details={t.features.passwordLocking.details}
        imageSrc={null}
        imageAlt={""}
        // TODO: parler des algorithmes de chiffrement utilisés
      />
      <FeatureSection
        lang={params.lang}
        title={t.features.mfaByDesign.title}
        platforms={{ ios: true, android: true, windows: true, macos: true, linux: true, chromeos: true }}
        tags={{ pro: "yes", perso: "yes" }}
        summary={null}
        details={t.features.mfaByDesign.details}
        imageSrc={null}
        imageAlt={""}
        // TODO: parler des algorithmes de chiffrement utilisés
      />
      <FeatureSection
        lang={params.lang}
        title={t.features.biometricUnlock.title}
        platforms={{ ios: true, android: true, windows: true, macos: true, linux: false, chromeos: false }}
        tags={{ pro: "yes", perso: "yes" }}
        summary={null}
        details={t.features.biometricUnlock.details}
        imageSrc={null}
        imageAlt={""}
      />
      <FeatureSection
        lang={params.lang}
        title={t.features.forgottenPassword.title}
        platforms={{ ios: true, android: true, windows: true, macos: true, linux: true, chromeos: true }}
        tags={{ pro: "yes", perso: "warning" }}
        summary={null}
        details={t.features.forgottenPassword.details}
        imageSrc={null}
        imageAlt={""}
      />
      <FeatureSection
        lang={params.lang}
        title={t.features.deviceRevocation.title}
        platforms={{ ios: true, android: true, windows: true, macos: true, linux: true, chromeos: true }}
        tags={{ pro: "yes", perso: "yes" }}
        summary={t.features.deviceRevocation.summary}
        details={t.features.deviceRevocation.details}
        imageSrc={null}
        imageAlt={t.features.deviceRevocation.imageAlt}
      />
      <FeatureSection
        lang={params.lang}
        title={t.features.offlineAcess.title}
        platforms={{ ios: true, android: true, windows: true, macos: true, linux: true, chromeos: true }}
        tags={{ pro: "yes", perso: "yes" }}
        summary={t.features.offlineAcess.summary}
        details={t.features.offlineAcess.details}
        imageSrc={null}
        imageAlt={t.features.offlineAcess.imageAlt}
      >
        <TechFocusLink
          title={t.features.offlineAcess.techFocusTitle}
          href={"/resources/technical-details/pro-vs-perso"}
          lang={params.lang}
        />
      </FeatureSection>
      <FeatureSection
        lang={params.lang}
        title={t.features.dataBackup.title}
        platforms={{ ios: true, android: true, windows: true, macos: true, linux: true, chromeos: true }}
        tags={{ pro: "yes", perso: "warning" }}
        summary={t.features.dataBackup.summary}
        details={t.features.dataBackup.details}
        imageSrc={null}
        imageAlt={""}
      />
      <FeatureSection
        lang={params.lang}
        title={t.features.autolock.title}
        platforms={{ ios: true, android: true, windows: true, macos: true, linux: true, chromeos: true }}
        tags={{ pro: "yes", perso: "yes" }}
        summary={null}
        details={t.features.autolock.details}
        imageSrc={null}
        imageAlt={t.features.autolock.imageAlt}
      >
        <AutolockBehaviourTable lang={params.lang} />
      </FeatureSection>
    </div>
  );
}

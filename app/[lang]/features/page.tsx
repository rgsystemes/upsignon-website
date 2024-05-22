import { Metadata } from "next";
import FeatureSection from "./featureSection";
import CompatibilityTable from "./compatibilityTable";
import styles from "./page.module.css";
import proPersoVaultsImg from "../../../public/images/pro-perso-vaults.png";
import passwordScore from "../../../public/images/password-score.png";
import { getDictionary } from "../../../translations/translations";
import TechFocusLink from "./techFocusLink";
import AutolockBehaviourTable from "./autolockBehaviourTable";
import AutofillSection from "./autofillSection";

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
        platforms={{ ios: "yes", android: "yes", windows: "yes", macos: "yes", linux: "yes", chromeos: "yes" }}
        tags={null}
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
        details={t.features.crossPlatform.details}
        imageSrc={proPersoVaultsImg}
        imageAlt={t.features.crossPlatform.imageAlt}
      >
        <CompatibilityTable lang={params.lang} />
      </FeatureSection>
      <FeatureSection
        lang={params.lang}
        title={t.features.syncing.title}
        platforms={{ ios: "yes", android: "yes", windows: "yes", macos: "yes", linux: "yes", chromeos: "yes" }}
        tags={{ pro: "yes", perso: "yes" }}
        details={t.features.syncing.details}
        imageSrc={proPersoVaultsImg}
        imageAlt={t.features.syncing.imageAlt}
      />
      <h2 className={styles.feature_family_title}>{t.features.dataSubtitle}</h2>
      <FeatureSection
        lang={params.lang}
        title={t.features.unlimitedAccounts.title}
        platforms={{ ios: "yes", android: "yes", windows: "yes", macos: "yes", linux: "yes", chromeos: "yes" }}
        tags={{ pro: "yes", perso: "yes" }}
        details={t.features.unlimitedAccounts.details}
        imageSrc={proPersoVaultsImg}
        imageAlt="TODO"
      />
      <FeatureSection
        lang={params.lang}
        title={t.features.unlimitedCodes.title}
        platforms={{ ios: "yes", android: "yes", windows: "yes", macos: "yes", linux: "yes", chromeos: "yes" }}
        tags={{ pro: "yes", perso: "yes" }}
        details={t.features.unlimitedCodes.details}
        imageSrc={proPersoVaultsImg}
        imageAlt="TODO"
      />
      <FeatureSection
        lang={params.lang}
        title={t.features.quickView.title}
        platforms={{ ios: "yes", android: "yes", windows: "yes", macos: "yes", linux: "yes", chromeos: "yes" }}
        tags={{ pro: "yes", perso: "yes" }}
        details={t.features.quickView.details}
        imageSrc={proPersoVaultsImg}
        imageAlt={t.features.quickView.imageAlt}
      />
      <FeatureSection
        lang={params.lang}
        title={t.features.passwordStrength.title}
        platforms={{ ios: "yes", android: "yes", windows: "yes", macos: "yes", linux: "yes", chromeos: "yes" }}
        tags={{ pro: "yes", perso: "yes" }}
        details={t.features.passwordStrength.details}
        imageSrc={passwordScore}
        imageAlt={t.features.passwordStrength.imageAlt}
      />
      <FeatureSection
        lang={params.lang}
        title={t.features.passwordGenerator.title}
        platforms={{ ios: "yes", android: "yes", windows: "yes", macos: "yes", linux: "yes", chromeos: "yes" }}
        tags={{ pro: "yes", perso: "yes" }}
        details={t.features.passwordGenerator.details}
        imageSrc={passwordScore}
        imageAlt={t.features.passwordGenerator.imageAlt}
      />
      <FeatureSection
        lang={params.lang}
        title={t.features.passwordHistory.title}
        platforms={{ ios: "yes", android: "yes", windows: "yes", macos: "yes", linux: "yes", chromeos: "yes" }}
        tags={{ pro: "yes", perso: "yes" }}
        details={t.features.passwordHistory.details}
        imageSrc={passwordScore}
        imageAlt={t.features.passwordHistory.imageAlt}
      />
      <FeatureSection
        lang={params.lang}
        title={t.features.multiUrls.title}
        platforms={{ ios: "yes", android: "yes", windows: "yes", macos: "yes", linux: "yes", chromeos: "yes" }}
        tags={{ pro: "yes", perso: "yes" }}
        details={t.features.multiUrls.details}
        imageSrc={passwordScore}
        imageAlt={t.features.multiUrls.imageAlt}
      />
      <FeatureSection
        lang={params.lang}
        title={t.features.notes.title}
        platforms={{ ios: "yes", android: "yes", windows: "yes", macos: "yes", linux: "yes", chromeos: "yes" }}
        tags={{ pro: "yes", perso: "yes" }}
        details={t.features.notes.details}
        imageSrc={passwordScore}
        imageAlt={t.features.notes.imageAlt}
      />
      <FeatureSection
        lang={params.lang}
        title={t.features.totp.title}
        platforms={{ ios: "yes", android: "yes", windows: "yes", macos: "yes", linux: "yes", chromeos: "yes" }}
        tags={{ pro: "yes", perso: "yes" }}
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
        platforms={{ ios: "yes", android: "yes", windows: "yes", macos: "yes", linux: "yes", chromeos: "yes" }}
        tags={{ pro: "yes", perso: "yes" }}
        details={t.features.paymentData.details}
        imageSrc={passwordScore}
        imageAlt={t.features.paymentData.imageAlt}
      />
      <h2 className={styles.feature_family_title}>{t.features.sharingSubtitle}</h2>
      <FeatureSection
        lang={params.lang}
        title={t.features.trustedContacts.title}
        platforms={{ ios: "yes", android: "yes", windows: "yes", macos: "yes", linux: "yes", chromeos: "yes" }}
        tags={{ pro: "no", perso: "yes" }}
        details={t.features.trustedContacts.details}
        imageSrc={passwordScore}
        imageAlt={t.features.trustedContacts.imageAlt}
      />
      <FeatureSection
        lang={params.lang}
        title={t.features.sharing.title}
        platforms={{ ios: "yes", android: "yes", windows: "yes", macos: "yes", linux: "yes", chromeos: "yes" }}
        tags={{ pro: "yes", perso: "yes" }}
        details={t.features.sharing.details}
        imageSrc={passwordScore}
        imageAlt={t.features.sharing.imageAlt}
      />
      <FeatureSection
        lang={params.lang}
        title={t.features.rightsManagement.title}
        platforms={{ ios: "yes", android: "yes", windows: "yes", macos: "yes", linux: "yes", chromeos: "yes" }}
        tags={{ pro: "yes", perso: "yes" }}
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
      <AutofillSection lang={params.lang} />
      <FeatureSection
        lang={params.lang}
        title={t.features.autosaveDesktop.title}
        platforms={{ ios: "no", android: "no", windows: "yes", macos: "yes", linux: "yes", chromeos: "no" }}
        tags={{ pro: "yes", perso: "yes" }}
        details={t.features.autosaveDesktop.details}
        imageSrc={passwordScore}
        imageAlt={t.features.autosaveDesktop.imageAlt}
      />
      <h2 className={styles.feature_family_title}>{t.features.searchFilterOrganizeSubtitle}</h2>
      <FeatureSection
        lang={params.lang}
        title={t.features.search.title}
        platforms={{ ios: "yes", android: "yes", windows: "yes", macos: "yes", linux: "yes", chromeos: "yes" }}
        tags={{ pro: "yes", perso: "yes" }}
        details={t.features.search.details}
        imageSrc={passwordScore}
        imageAlt={t.features.search.imageAlt}
      />
      <FeatureSection
        lang={params.lang}
        title={t.features.filter.title}
        platforms={{ ios: "yes", android: "yes", windows: "yes", macos: "yes", linux: "yes", chromeos: "yes" }}
        tags={{ pro: "yes", perso: "yes" }}
        details={t.features.filter.details}
        imageSrc={passwordScore}
        imageAlt={t.features.filter.imageAlt}
      />
      <FeatureSection
        lang={params.lang}
        title={t.features.organize.title}
        platforms={{ ios: "yes", android: "yes", windows: "yes", macos: "yes", linux: "yes", chromeos: "yes" }}
        tags={{ pro: "yes", perso: "yes" }}
        details={t.features.organize.details}
        imageSrc={passwordScore}
        imageAlt={t.features.organize.imageAlt}
      />
      <h2 className={styles.feature_family_title}>{t.features.importExportSubtitle}</h2>
      <FeatureSection
        lang={params.lang}
        title={t.features.csvImport.title}
        platforms={{ ios: "yes", android: "yes", windows: "yes", macos: "yes", linux: "yes", chromeos: "yes" }}
        tags={{ pro: "yes", perso: "yes" }}
        details={t.features.csvImport.details}
        imageSrc={passwordScore}
        imageAlt={t.features.csvImport.imageAlt}
      />
      <FeatureSection
        lang={params.lang}
        title={t.features.csvExport.title}
        platforms={{ ios: "yes", android: "yes", windows: "yes", macos: "yes", linux: "yes", chromeos: "yes" }}
        tags={{ pro: "yes", perso: "yes" }}
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
        platforms={{ ios: "yes", android: "yes", windows: "yes", macos: "yes", linux: "yes", chromeos: "yes" }}
        tags={{ pro: "yes", perso: "yes" }}
        details={t.features.endToEndEncryption.details}
        imageSrc={null}
        imageAlt={""}
        // TODO: parler des algorithmes de chiffrement utilisés
      />
      <FeatureSection
        lang={params.lang}
        title={t.features.passwordLocking.title}
        platforms={{ ios: "yes", android: "yes", windows: "yes", macos: "yes", linux: "yes", chromeos: "yes" }}
        tags={{ pro: "yes", perso: "yes" }}
        details={t.features.passwordLocking.details}
        imageSrc={null}
        imageAlt={""}
        // TODO: parler des algorithmes de chiffrement utilisés
      />
      <FeatureSection
        lang={params.lang}
        title={t.features.biometricUnlock.title}
        platforms={{ ios: "yes", android: "yes", windows: "yes", macos: "yes", linux: "no", chromeos: "no" }}
        tags={{ pro: "yes", perso: "yes" }}
        details={t.features.biometricUnlock.details}
        imageSrc={null}
        imageAlt={""}
      />{" "}
      <FeatureSection
        lang={params.lang}
        title={t.features.autolock.title}
        platforms={{ ios: "yes", android: "yes", windows: "yes", macos: "yes", linux: "yes", chromeos: "yes" }}
        tags={{ pro: "yes", perso: "yes" }}
        details={t.features.autolock.details}
        imageSrc={null}
        imageAlt={t.features.autolock.imageAlt}
      >
        <AutolockBehaviourTable lang={params.lang} />
      </FeatureSection>
      <FeatureSection
        lang={params.lang}
        title={t.features.forgottenPassword.title}
        platforms={{ ios: "yes", android: "yes", windows: "yes", macos: "yes", linux: "yes", chromeos: "yes" }}
        tags={{ pro: "yes", perso: "warning" }}
        details={t.features.forgottenPassword.details}
        imageSrc={null}
        imageAlt={""}
      />
      <FeatureSection
        lang={params.lang}
        title={t.features.dataBackup.title}
        platforms={{ ios: "yes", android: "yes", windows: "yes", macos: "yes", linux: "yes", chromeos: "yes" }}
        tags={{ pro: "yes", perso: "warning" }}
        details={t.features.dataBackup.details}
        imageSrc={null}
        imageAlt={""}
      />
      <FeatureSection
        lang={params.lang}
        title={t.features.mfaByDesign.title}
        platforms={{ ios: "yes", android: "yes", windows: "yes", macos: "yes", linux: "yes", chromeos: "yes" }}
        tags={{ pro: "yes", perso: "yes" }}
        details={t.features.mfaByDesign.details}
        imageSrc={null}
        imageAlt={""}
        // TODO: parler des algorithmes de chiffrement utilisés
      />
      <FeatureSection
        lang={params.lang}
        title={t.features.deviceRevocation.title}
        platforms={{ ios: "yes", android: "yes", windows: "yes", macos: "yes", linux: "yes", chromeos: "yes" }}
        tags={{ pro: "yes", perso: "yes" }}
        details={t.features.deviceRevocation.details}
        imageSrc={null}
        imageAlt={t.features.deviceRevocation.imageAlt}
      />
      <FeatureSection
        lang={params.lang}
        title={t.features.offlineAcess.title}
        platforms={{ ios: "yes", android: "yes", windows: "yes", macos: "yes", linux: "yes", chromeos: "yes" }}
        tags={{ pro: "yes", perso: "yes" }}
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
        title={t.features.protectedClipboard.title}
        platforms={{ ios: "yes", android: "warning", windows: "yes", macos: "yes", linux: "yes", chromeos: "warning" }}
        tags={{ pro: "yes", perso: "yes" }}
        details={t.features.protectedClipboard.details}
        imageSrc={null}
        imageAlt={""}
      >
        <TechFocusLink
          title={t.techResources.protectedClipboardBehaviour.title}
          href="/resources/technical-details/protected-clipboard-behaviour"
          lang={params.lang}
        />
      </FeatureSection>
      <FeatureSection
        lang={params.lang}
        title={t.features.screenshotProtection.title}
        platforms={{ ios: "yes", android: "yes", windows: "yes", macos: "no", linux: "no", chromeos: "yes" }}
        tags={{ pro: "yes", perso: "yes" }}
        details={t.features.screenshotProtection.details}
        imageSrc={null}
        imageAlt={""}
      />
      <h2 className={styles.feature_family_title}>{t.features.supervisionSubtitle}</h2>
      <p className={styles.supervision_general_intro}>{t.features.supervisionGeneralExplanation}</p>
      <FeatureSection
        lang={params.lang}
        title={t.features.bankManagement.title}
        details={t.features.bankManagement.details}
        imageSrc={null}
        imageAlt={t.features.bankManagement.imageAlt}
      />
      <FeatureSection
        lang={params.lang}
        title={t.features.passwordStrengthEvolutionCurve.title}
        details={t.features.passwordStrengthEvolutionCurve.details}
        imageSrc={null}
        imageAlt={t.features.passwordStrengthEvolutionCurve.imageAlt}
      />
      <FeatureSection
        lang={params.lang}
        title={t.features.userManagement.title}
        details={t.features.userManagement.details}
        imageSrc={null}
        imageAlt={t.features.userManagement.imageAlt}
      />
      <FeatureSection
        lang={params.lang}
        title={t.features.deviceManagement.title}
        details={t.features.deviceManagement.details}
        imageSrc={null}
        imageAlt={t.features.deviceManagement.imageAlt}
      />
      <FeatureSection
        lang={params.lang}
        title={t.features.sharedVaultsManagement.title}
        details={t.features.sharedVaultsManagement.details}
        imageSrc={null}
        imageAlt={t.features.sharedVaultsManagement.imageAlt}
      />
      <FeatureSection
        lang={params.lang}
        title={t.features.passwordResetApproval.title}
        details={t.features.passwordResetApproval.details}
        imageSrc={null}
        imageAlt={t.features.passwordResetApproval.imageAlt}
      />
      <FeatureSection
        lang={params.lang}
        title={t.features.securitySettings.title}
        details={t.features.securitySettings.details}
        imageSrc={null}
        imageAlt={t.features.securitySettings.imageAlt}
      />
      <FeatureSection
        lang={params.lang}
        title={t.features.adminManagement.title}
        details={t.features.adminManagement.details}
        imageSrc={null}
        imageAlt={t.features.adminManagement.imageAlt}
      />
      <FeatureSection
        lang={params.lang}
        title={t.features.msEntra.title}
        details={t.features.msEntra.details}
        imageSrc={null}
        imageAlt={t.features.msEntra.imageAlt}
      />
      <FeatureSection
        lang={params.lang}
        title={t.features.passwordAwarenessCampaigns.title}
        details={t.features.passwordAwarenessCampaigns.details}
        imageSrc={null}
        imageAlt={t.features.passwordAwarenessCampaigns.imageAlt}
      />
      <FeatureSection
        lang={params.lang}
        title={t.features.prefilledWebsites.title}
        details={t.features.prefilledWebsites.details}
        imageSrc={null}
        imageAlt={t.features.prefilledWebsites.imageAlt}
      />
      <FeatureSection
        lang={params.lang}
        title={t.features.sharedDeviceVisibility.title}
        details={t.features.sharedDeviceVisibility.details}
        imageSrc={null}
        imageAlt={t.features.sharedDeviceVisibility.imageAlt}
      />
    </div>
  );
}

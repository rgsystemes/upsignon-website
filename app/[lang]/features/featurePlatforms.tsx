import { getDictionary } from "../../../translations/translations";
import { colors } from "../../colors";
import { PlatformSupportedIcon, PlatformUnsupportedIcon, PlatformWarningIcon } from "./availabilityIcons";
import styles from "./featurePlatforms.module.css";

export type TPlatforms = {
  ios: "yes" | "no" | "warning";
  android: "yes" | "no" | "warning";
  windows: "yes" | "no" | "warning";
  macos: "yes" | "no" | "warning";
  linux: "yes" | "no" | "warning";
  chromeos: "yes" | "no" | "warning";
};

function FeaturePlatform(p: { name: string; supported: "yes" | "no" | "warning"; lang: string }) {
  const t = getDictionary(p.lang);
  if (p.supported === "yes") {
    return (
      <div aria-label={t.features.featurePlatforms.availableOn(p.name)}>
        <PlatformSupportedIcon /> {p.name}
      </div>
    );
  } else if (p.supported === "warning") {
    return (
      <div aria-label={t.features.featurePlatforms.availableWithWarningFor(p.name)}>
        <PlatformWarningIcon /> {p.name}
      </div>
    );
  } else {
    return (
      <div aria-label={t.features.featurePlatforms.unavailableOn(p.name)}>
        <PlatformUnsupportedIcon /> {p.name}
      </div>
    );
  }
}

export default function FeaturePlatforms({ platforms, lang }: { platforms: TPlatforms; lang: string }) {
  const t = getDictionary(lang);
  return (
    <div className={styles.platform_support}>
      <FeaturePlatform lang={lang} name="Windows" supported={platforms.windows} />
      <FeaturePlatform lang={lang} name="MacOS" supported={platforms.macos} />
      <FeaturePlatform lang={lang} name="Linux" supported={platforms.linux} />
      <FeaturePlatform lang={lang} name="iOS" supported={platforms.ios} />
      <FeaturePlatform lang={lang} name="Android" supported={platforms.android} />
      <FeaturePlatform lang={lang} name="ChromeOS" supported={platforms.chromeos} />
    </div>
  );
}

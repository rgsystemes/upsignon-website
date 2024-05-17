import { getDictionary } from "../../../translations/translations";
import { colors } from "../../colors";
import { PlatformSupportedIcon, PlatformUnsupportedIcon } from "./availabilityIcons";
import styles from "./featurePlatforms.module.css";

export type TPlatforms = {
  ios: boolean;
  android: boolean;
  windows: boolean;
  macos: boolean;
  linux: boolean;
  chromeos: boolean;
};

export default function FeaturePlatforms({ platforms, lang }: { platforms: TPlatforms; lang: string }) {
  const t = getDictionary(lang);
  return (
    <div className={styles.platform_support}>
      <div
        aria-label={
          platforms.windows
            ? t.features.featurePlatforms.availableOn("Windows")
            : t.features.featurePlatforms.unavailableOn("Windows")
        }
      >
        {platforms.windows ? <PlatformSupportedIcon /> : <PlatformUnsupportedIcon />}Windows
      </div>
      <div
        aria-label={
          platforms.macos
            ? t.features.featurePlatforms.availableOn("MacOS")
            : t.features.featurePlatforms.unavailableOn("MacOS")
        }
      >
        {platforms.macos ? <PlatformSupportedIcon /> : <PlatformUnsupportedIcon />}MacOS
      </div>
      <div
        aria-label={
          platforms.macos
            ? t.features.featurePlatforms.availableOn("Linux")
            : t.features.featurePlatforms.unavailableOn("Linux")
        }
      >
        {platforms.linux ? <PlatformSupportedIcon /> : <PlatformUnsupportedIcon />}Linux
      </div>
      <div
        aria-label={
          platforms.ios
            ? t.features.featurePlatforms.availableOn("iOS")
            : t.features.featurePlatforms.unavailableOn("iOS")
        }
      >
        {platforms.ios ? <PlatformSupportedIcon /> : <PlatformUnsupportedIcon />}iOS
      </div>
      <div
        aria-label={
          platforms.android
            ? t.features.featurePlatforms.availableOn("Android")
            : t.features.featurePlatforms.unavailableOn("Android")
        }
      >
        {platforms.android ? <PlatformSupportedIcon /> : <PlatformUnsupportedIcon />}Android
      </div>
      <div
        aria-label={
          platforms.chromeos
            ? t.features.featurePlatforms.availableOn("ChromeOS")
            : t.features.featurePlatforms.unavailableOn("ChromeOS")
        }
      >
        {platforms.chromeos ? <PlatformSupportedIcon /> : <PlatformUnsupportedIcon />}ChromeOS
      </div>
    </div>
  );
}

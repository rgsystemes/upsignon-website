import { colors } from "../colors";
import styles from "./featurePlatforms.module.css";

export type TPlatforms = {
  ios: boolean;
  android: boolean;
  windows: boolean;
  macos: boolean;
  linux: boolean;
};

export default function FeaturePlatforms({ platforms }: { platforms: TPlatforms }) {
  return (
    <ul className={styles.platform_support}>
      <li aria-label={platforms.windows ? "Supported on Windows" : "Unsupported on Windows"}>
        {platforms.windows ? <PlatformSupportedIcon /> : <PlatformUnsupportedIcon />}Windows
      </li>
      <li aria-label={platforms.macos ? "Supported on MacOS" : "Unsupported on MacOS"}>
        {platforms.macos ? <PlatformSupportedIcon /> : <PlatformUnsupportedIcon />}MacOS
      </li>
      <li aria-label={platforms.macos ? "Supported on Linux" : "Unsupported on Linux"}>
        {platforms.linux ? <PlatformSupportedIcon /> : <PlatformUnsupportedIcon />}Linux
      </li>
      <li aria-label={platforms.ios ? "Supported on iOS" : "Unsupported on iOS"}>
        {platforms.ios ? <PlatformSupportedIcon /> : <PlatformUnsupportedIcon />}iOS
      </li>
      <li aria-label={platforms.android ? "Supported on Android" : "Unsupported on Android"}>
        {platforms.android ? <PlatformSupportedIcon /> : <PlatformUnsupportedIcon />}Android
      </li>
    </ul>
  );
}

function PlatformSupportedIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      width="24"
      viewBox="0 -960 960 960"
      aria-hidden="true"
      focusable="false"
      fill={colors.green}
    >
      <path d="m424-408-86-86q-11-11-28-11t-28 11q-11 11-11 28t11 28l114 114q12 12 28 12t28-12l226-226q11-11 11-28t-11-28q-11-11-28-11t-28 11L424-408Zm56 328q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" />
    </svg>
  );
}

function PlatformUnsupportedIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      width="24"
      viewBox="0 -960 960 960"
      aria-hidden="true"
      focusable="false"
      fill={colors.red}
    >
      <path d="m480-424 116 116q11 11 28 11t28-11q11-11 11-28t-11-28L536-480l116-116q11-11 11-28t-11-28q-11-11-28-11t-28 11L480-536 364-652q-11-11-28-11t-28 11q-11 11-11 28t11 28l116 116-116 116q-11 11-11 28t11 28q11 11 28 11t28-11l116-116Zm0 344q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
    </svg>
  );
}

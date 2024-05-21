import { getDictionary } from "../../../translations/translations";
import styles from "./autolockBehaviourTable.module.css";

export default function AutolockBehaviourTable({ lang }: { lang: string }) {
  const t = getDictionary(lang);
  return (
    <div>
      <strong>{t.features.autolock.byPlatformBehaviourTable.title}</strong>
      <div className={styles.autolock_behaviour_container}>
        <table>
          <thead>
            <tr>
              <th>{t.features.autolock.byPlatformBehaviourTable.header.platform}</th>
              <th>{t.features.autolock.byPlatformBehaviourTable.header.onInactivityBackground}</th>
              <th>{t.features.autolock.byPlatformBehaviourTable.header.onInactivityMinimized}</th>
              <th>{t.features.autolock.byPlatformBehaviourTable.header.onSessionLock}</th>
              <th>{t.features.autolock.byPlatformBehaviourTable.header.onScreenLock}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Windows</td>
              <td>-</td>
              <td>{t.features.autolock.byPlatformBehaviourTable.minutesDefaultDesktop}</td>
              <td>{t.features.autolock.byPlatformBehaviourTable.yesOptional}</td>
              <td>-</td>
            </tr>
            <tr>
              <td>macOS</td>
              <td>-</td>
              <td>{t.features.autolock.byPlatformBehaviourTable.minutesDefaultDesktop}</td>
              <td>-</td>
              <td>{t.features.autolock.byPlatformBehaviourTable.yesOptional}</td>
            </tr>
            <tr>
              <td>Linux</td>
              <td>-</td>
              <td>{t.features.autolock.byPlatformBehaviourTable.minutesDefaultDesktop}</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>iOS / Android</td>
              <td>{t.features.autolock.byPlatformBehaviourTable.minutesDefaultMobile}</td>
              <td>-</td>
              <td>-</td>
              <td>{t.features.autolock.byPlatformBehaviourTable.yesAlways}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

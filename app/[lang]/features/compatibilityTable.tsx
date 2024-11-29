import { getDictionary } from "../../../translations/translations";
import styles from "./compatibilityTable.module.css";

export default function CompatibilityTable({ lang }: { lang: string }) {
  const t = getDictionary(lang);
  return (
    <div>
      <strong>{t.features.compatibilityTable.summary}</strong>
      <div className={styles.platform_compat_table_container}>
        <table>
          <thead>
            <tr>
              <th>{t.features.compatibilityTable.header.os}</th>
              <th>{t.features.compatibilityTable.header.minTheoreticalVersion}</th>
              <th>{t.features.compatibilityTable.header.testedVersion}</th>
              <th>{t.features.compatibilityTable.header.arch}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>iOS</td>
              <td>12</td>
              <td>18</td>
              <td>Arm64</td>
            </tr>
            <tr>
              <td>Android</td>
              <td>5</td>
              <td>15</td>
              <td>x64, Arm32, Arm64</td>
            </tr>
            <tr>
              <td>Windows</td>
              <td>10</td>
              <td>11</td>
              <td>x64, Arm64</td>
            </tr>
            <tr>
              <td>MacOS</td>
              <td>10.14</td>
              <td>15</td>
              <td>x64, Arm64</td>
            </tr>
            <tr>
              <td>Ubuntu (Linux)</td>
              <td>20.04 LTS</td>
              <td>22.04 LTS</td>
              <td>x64, Arm64</td>
            </tr>
            <tr>
              <td>Debian (Linux)</td>
              <td>9</td>
              <td>{t.features.compatibilityTable.untested}</td>
              <td>x64, Arm64</td>
            </tr>
            <tr>
              <td>Chrome OS (Android)</td>
              <td>{t.features.compatibilityTable.untested}</td>
              <td>{t.features.compatibilityTable.untested}</td>
              <td>?</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

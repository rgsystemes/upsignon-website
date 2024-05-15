import styles from "./compatibilityTable.module.css";

export default function CompatibilityTable() {
  return (
    <details>
      <summary>Table de compatibilité</summary>
      <div className={styles.platform_compat_table_container}>
        <table>
          <thead>
            <tr>
              <th>OS</th>
              <th>Version minimum théorique</th>
              <th>Version testée</th>
              <th>Architectures</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>iOS</td>
              <td>12</td>
              <td>17</td>
              <td>Arm64</td>
            </tr>
            <tr>
              <td>Android</td>
              <td>5</td>
              <td>14</td>
              <td>x64, Arm32, Arm64</td>
            </tr>
            <tr>
              <td>Windows</td>
              <td>7</td>
              <td>11</td>
              <td>x64, Arm64</td>
            </tr>
            <tr>
              <td>MacOS</td>
              <td>10.14</td>
              <td>14.2</td>
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
              <td>Non testé</td>
              <td>x64, Arm64</td>
            </tr>
          </tbody>
        </table>
      </div>
    </details>
  );
}

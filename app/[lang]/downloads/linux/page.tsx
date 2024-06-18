import { linuxVersions } from "../../resources/release-notes/app/versionList";
import styles from "./page.module.css";

export default function LinuxOtherDownloads({ params }: { params: { lang: string } }) {
  if (params.lang === "fr") {
    return FRLinuxOtherDownloads();
  } else {
    return;
  }
}

function FRLinuxOtherDownloads() {
  const currentVersion = linuxVersions[0];
  return (
    <section className={styles.content}>
      <div className={styles.backArrow}>
        <span>&lt;  </span>
        <a href="/downloads">Téléchargements</a>
      </div>
      <h1>Téléchargements Linux et informations</h1>
      <p>Téléchargement direct AppImage</p>
      <p>
        <a
          className={styles.buttonLink}
          href={`https://app.upsignon.eu/UpSignOn-${currentVersion}-x86_64.AppImage`}
          download
        >
          Plus récent AppImage
        </a>
      </p>

      <p>Toutes les versions</p>
      <ul className={styles.ul}>
        {linuxVersions.map((v) => (
          <li key={v}>
            <a href={`https://app.upsignon.eu/UpSignOn-${v}-x86_64.AppImage`} download>
              {v}
            </a>
          </li>
        ))}
      </ul>

      <p>Attention, les fonctionnalités suivantes sont encore indisponibles ou non documentées :</p>
      <ul>
        <li>icône de l’application</li>
        <li>verrouillage automatique & verrouillage en même temps que la session de l’utilisateur</li>
        <li>
          configuration des extensions de navigateur (il reste à documenter l’activation du protocole upsignon:// pour
          ouvrir l’application UpSignOn)
        </li>
        <li>signature de l’application</li>
      </ul>
    </section>
  );
}

import { Metadata } from "next";
import { linuxVersions } from "../../resources/release-notes/app/versionList";
import styles from "./page.module.css";

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  if (params.lang === "fr") {
    return {
      title: "Téléchargements - Linux",
      description: "Tous les liens et informations utiles pour télécharger et installer UpSignOn sur Linux.",
    };
  } else {
    return {
      title: "Downloads - Linux",
      description: "All links and useful information to download and install UpSignOn on Linux.",
    };
  }
}

export default function LinuxOtherDownloads({ params }: { params: { lang: string } }) {
  if (params.lang === "fr") {
    return FRLinuxOtherDownloads();
  } else {
    return ENLinuxOtherDownloads();
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

function ENLinuxOtherDownloads() {
  const currentVersion = linuxVersions[0];
  return (
    <section className={styles.content}>
      <div className={styles.backArrow}>
        <span>&lt;  </span>
        <a href="/downloads">Downloads</a>
      </div>
      <h1>Linux downloads and information</h1>
      <p>Direct AppImage downloads</p>
      <p>
        <a
          className={styles.buttonLink}
          href={`https://app.upsignon.eu/UpSignOn-${currentVersion}-x86_64.AppImage`}
          download
        >
          Latest AppImage
        </a>
      </p>

      <p>All versions</p>
      <ul className={styles.ul}>
        {linuxVersions.map((v) => (
          <li key={v}>
            <a href={`https://app.upsignon.eu/UpSignOn-${v}-x86_64.AppImage`} download>
              {v}
            </a>
          </li>
        ))}
      </ul>

      <p>Beware, the following features are not yet available or documented:</p>
      <ul>
        <li>application icon</li>
        <li>automatic locking and locking with user session</li>
        <li>
          browser extensions setup (the procedure to activate the upsignon:// to open the UpSignOn app has not been
          documented yet)
        </li>
        <li>application signing</li>
      </ul>
    </section>
  );
}

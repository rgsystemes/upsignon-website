import { Metadata } from "next";
import { linuxVersions } from "../../resources/release-notes/app/versionList";
import styles from "./page.module.css";
import { CodeBlock } from "../../components/codeBlock/codeBlock";
import { LinkToAnchor } from "../../components/linkToAnchor/linkToAnchor";

const anchors = {
  installInstructions: "install",
};

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const template = {
    alternates: {
      canonical: "https://upsignon.eu/fr/downloads/linux",
      languages: {
        fr: "https://upsignon.eu/fr/downloads/linux",
        en: "https://upsignon.eu/en/downloads/linux",
      },
    },
  };
  if (params.lang === "fr") {
    return {
      title: "Téléchargements - Linux",
      description: "Tous les liens et informations utiles pour télécharger et installer UpSignOn sur Linux.",
      ...template,
    };
  } else {
    return {
      title: "Downloads - Linux",
      description: "All links and useful information to download and install UpSignOn on Linux.",
      ...template,
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

const makeAppImageExecutable = `chmod +x /home/<votre_nom_utilisateur>/Applications/UpSignOn-${linuxVersions[0]}-x86_64.AppImage`;
const makeDesktopExecutable = `chmod +x /usr/share/applications/UpSignOn.desktop`;
const updateDesktopDatabase = `sudo update-desktop-database`;

function FRLinuxOtherDownloads() {
  return (
    <section className={styles.content}>
      <div className={styles.backArrow}>
        <span>&lt;  </span>
        <a href="/downloads">Téléchargements</a>
      </div>
      <h1>Téléchargements Linux et informations</h1>
      <p>Téléchargement direct AppImage</p>
      <p>
        <a className={styles.buttonLink} href={`https://app.upsignon.eu/downloads/UpSignOn-latest.AppImage`} download>
          Plus récent AppImage
        </a>
      </p>

      <h2>Toutes les versions</h2>
      <ul className={styles.ul}>
        {linuxVersions.map((v) => (
          <li key={v}>
            <a href={`https://app.upsignon.eu/downloads/UpSignOn-${v}-x86_64.AppImage`} download>
              {v}
            </a>
          </li>
        ))}
      </ul>

      <h2>
        <LinkToAnchor id={anchors.installInstructions}>Instructions d’installation</LinkToAnchor>
      </h2>
      <strong>Installation automatique avec AppImageLauncher</strong>
      <p>
        Nous recommandons de suivre les explications de la page{" "}
        <a href="https://doc.ubuntu-fr.org/appimage#installer_un_appimage" target="_blank">
          https://doc.ubuntu-fr.org/appimage#installer_un_appimage
        </a>{" "}
        et d’utiliser AppImageLauncher pour installer l’application.
      </p>
      <strong>Installation manuelle</strong>
      <ul>
        <li>{`Déplacez le fichier UpSignOn-${linuxVersions[0]}-x86_64.AppImage dans /home/<votre_nom_utilisateur>/Applications/`}</li>
        <li>
          Rendez ce fichier exécutable
          <CodeBlock>{makeAppImageExecutable}</CodeBlock>
        </li>
        <li>
          Créez le fichier /usr/share/applications/UpSignOn.desktop, et ajoutez-y le contenu suivant
          <CodeBlock name="/usr/share/applications/UpSignOn.desktop">
            {`[Desktop Entry]
Encoding=UTF-8
Type=Application
Categories=Utility;
Name=UpSignOn
Comment=Coffre-fort de mots de passe
Exec=/home/<votre_nom_utilisateur>/Applications/UpSignOn-${linuxVersions[0]}-x86_64.AppImage %u
Icon=eu.upsignon.upsignon
StartupNotify=false
Terminal=false
Hidden=false
MimeType=x-scheme-handler/upsignon;
`}
          </CodeBlock>
        </li>
        <li>
          Rendez ce fichier exécutable
          <CodeBlock>{makeDesktopExecutable}</CodeBlock>
        </li>
        <li>
          Mettez-à-jour le cache des applications de bureau
          <CodeBlock>{updateDesktopDatabase}</CodeBlock>
        </li>
      </ul>
    </section>
  );
}

function ENLinuxOtherDownloads() {
  return (
    <section className={styles.content}>
      <div className={styles.backArrow}>
        <span>&lt;  </span>
        <a href="/downloads">Downloads</a>
      </div>
      <h1>Linux downloads and information</h1>
      <p>Direct AppImage downloads</p>
      <p>
        <a className={styles.buttonLink} href={`https://app.upsignon.eu/downloads/UpSignOn-latest.AppImage`} download>
          Latest AppImage
        </a>
      </p>

      <h2>All versions</h2>
      <ul className={styles.ul}>
        {linuxVersions.map((v) => (
          <li key={v}>
            <a href={`https://app.upsignon.eu/downloads/UpSignOn-${v}-x86_64.AppImage`} download>
              {v}
            </a>
          </li>
        ))}
      </ul>

      <h2>
        <LinkToAnchor id={anchors.installInstructions}>Installation instructions</LinkToAnchor>
      </h2>
      <strong>Automatic installation with AppImageLauncher</strong>
      <p>
        We recommend to follow the explanations on the page{" "}
        <a href="https://doc.ubuntu-fr.org/appimage#installer_un_appimage" target="_blank">
          https://doc.ubuntu-fr.org/appimage#installer_un_appimage
        </a>{" "}
        and to use AppImageLauncher to install the app.
      </p>
      <strong>Manual installation </strong>
      <ul>
        <li>{`Move the file UpSignOn-${linuxVersions[0]}-x86_64.AppImage to /home/<your_user_name>/Applications/`}</li>
        <li>
          Make this file executable
          <CodeBlock>{makeAppImageExecutable}</CodeBlock>
        </li>
        <li>
          Create the file /usr/share/applications/UpSignOn.desktop, and add the following content to it
          <CodeBlock name="/usr/share/applications/UpSignOn.desktop">
            {`[Desktop Entry]
Encoding=UTF-8
Type=Application
Categories=Utility;
Name=UpSignOn
Comment=Password manager
Exec=/home/<your_user_name>/Applications/UpSignOn-${linuxVersions[0]}-x86_64.AppImage %u
Icon=eu.upsignon.upsignon
StartupNotify=false
Terminal=false
Hidden=false
MimeType=x-scheme-handler/upsignon;
`}
          </CodeBlock>
        </li>
        <li>
          Make this file executable
          <CodeBlock>{makeDesktopExecutable}</CodeBlock>
        </li>
        <li>
          Update the desktop entry cache
          <CodeBlock>{updateDesktopDatabase}</CodeBlock>
        </li>
      </ul>
    </section>
  );
}

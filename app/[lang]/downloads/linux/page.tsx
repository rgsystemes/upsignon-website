import { Metadata } from "next";
import { linuxVersions } from "../../resources/release-notes/app/versionList";
import styles from "./page.module.css";
import { CodeBlock } from "../../components/codeBlock/codeBlock";
import { LinkToAnchor } from "../../components/linkToAnchor/linkToAnchor";
import Link from "next/link";

const anchors = {
  installInstructions: "install",
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const template = {
    alternates: {
      canonical: "https://upsignon.eu/fr/downloads/linux",
      languages: {
        fr: "https://upsignon.eu/fr/downloads/linux",
        en: "https://upsignon.eu/en/downloads/linux",
      },
    },
  };
  if (lang === "fr") {
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

export default async function LinuxOtherDownloads({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (lang === "fr") {
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
        <Link href="/downloads">Téléchargements</Link>
      </div>
      <h1>Téléchargements Linux et informations</h1>
      <h2>Installation via snapcraft</h2>
      <ul>
        <li>
          Installer snapd (cf instructions spécifiques à votre OS sur{" "}
          <Link href="https://snapcraft.io/upsignon" target="_blank">
            https://snapcraft.io/upsignon
          </Link>
          )
        </li>
        <li>
          Installer le snap upsignon
          <pre>sudo snap install upsignon</pre>
        </li>
      </ul>
      <br />
      <br />
      <details>
        <summary>Anciennes versions AppImage</summary>
        <p>Nous ne livrons plus l'application au format AppImage. Veuillez nous excuser pour le désagrément.</p>
        <h2>Liste des anciennes versions</h2>
        <ul className={styles.ul}>
          {linuxVersions.map((v) => (
            <li key={v}>
              <Link href={`https://app.upsignon.eu/downloads/linux/UpSignOn-${v}-x86_64.AppImage`} download>
                {v}
              </Link>
            </li>
          ))}
        </ul>

        <h2>
          <LinkToAnchor id={anchors.installInstructions}>Instructions d’installation</LinkToAnchor>
        </h2>
        <strong>Installation automatique avec AppImageLauncher</strong>
        <p>
          Nous recommandons de suivre les explications de la page{" "}
          <Link href="https://doc.ubuntu-fr.org/appimage#installer_un_appimage" target="_blank">
            https://doc.ubuntu-fr.org/appimage#installer_un_appimage
          </Link>{" "}
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
      </details>
    </section>
  );
}

function ENLinuxOtherDownloads() {
  return (
    <section className={styles.content}>
      <div className={styles.backArrow}>
        <span>&lt;  </span>
        <Link href="/downloads">Downloads</Link>
      </div>
      <h1>Linux downloads and information</h1>
      <h2>Installation via snapcraft</h2>
      <ul>
        <li>
          Install snapd (see specific instructions for your OS at{" "}
          <Link href="https://snapcraft.io/upsignon" target="_blank">
            https://snapcraft.io/upsignon
          </Link>
          )
        </li>
        <li>
          Install the upsignon snap
          <pre>sudo snap install upsignon</pre>
        </li>
      </ul>
      <br />
      <br />
      <details>
        <summary>Older AppImage versions</summary>

        <p>We no longer build the app as an AppImage. Sorry for the inconvenience.</p>
        <h2>List of older versions</h2>
        <ul className={styles.ul}>
          {linuxVersions.map((v) => (
            <li key={v}>
              <Link href={`https://app.upsignon.eu/downloads/linux/UpSignOn-${v}-x86_64.AppImage`} download>
                {v}
              </Link>
            </li>
          ))}
        </ul>

        <h2>
          <LinkToAnchor id={anchors.installInstructions}>Installation instructions</LinkToAnchor>
        </h2>
        <strong>Automatic installation with AppImageLauncher</strong>
        <p>
          We recommend to follow the explanations on the page{" "}
          <Link href="https://doc.ubuntu-fr.org/appimage#installer_un_appimage" target="_blank">
            https://doc.ubuntu-fr.org/appimage#installer_un_appimage
          </Link>{" "}
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
      </details>
    </section>
  );
}

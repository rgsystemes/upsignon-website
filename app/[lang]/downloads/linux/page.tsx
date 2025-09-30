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
const setupAppLinks = `sudo cp /snap/upsignon/7/meta/gui/upsignon.desktop ~/.local/share/applications/
sudo chown <user>: ~/.local/share/applications/upsignon.desktop
xdg-mime default upsignon.desktop x-scheme-handler/upsignon`;

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
      <details>
        <summary>Troubleshooting</summary>
        <p>Si les liens d'application upsignon:// ne fonctionnent pas, vous pouvez essayer les commandes suivantes :</p>
        <CodeBlock>{setupAppLinks}</CodeBlock>
      </details>

      <br />
      <br />
      <h2>Téléchargement AppImage (déconseillé)</h2>
      <details>
        <summary>Afficher</summary>
        <p>
          L'application est fournie au format AppImage pour les utilisateurs qui le souhaitent, mais nous ne fournissons
          pas de support pour l'installation.
        </p>
        <h3>Liste des versions</h3>
        <ul className={styles.ul}>
          {linuxVersions.map((v) => (
            <li key={v}>
              <Link href={`https://app.upsignon.eu/downloads/linux/UpSignOn-${v}-x86_64.AppImage`} download>
                {v}
              </Link>
            </li>
          ))}
        </ul>

        <h3>
          <LinkToAnchor id={anchors.installInstructions}>Instructions d’installation</LinkToAnchor>
        </h3>
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
      <details>
        <summary>Troubleshooting</summary>
        <p>If upsignon:// app links do not work, you can try :</p>
        <CodeBlock>{setupAppLinks}</CodeBlock>
      </details>
      <br />
      <br />
      <details>
        <h2>AppImage download (not advised)</h2>
        <summary>Show</summary>
        <p>
          The app is provided with the AppImage format for those who want it, but but offer no support for installation
          with this format.
        </p>
        <h3>List of versions</h3>
        <ul className={styles.ul}>
          {linuxVersions.map((v) => (
            <li key={v}>
              <Link href={`https://app.upsignon.eu/downloads/linux/UpSignOn-${v}-x86_64.AppImage`} download>
                {v}
              </Link>
            </li>
          ))}
        </ul>

        <h3>
          <LinkToAnchor id={anchors.installInstructions}>Installation instructions</LinkToAnchor>
        </h3>
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

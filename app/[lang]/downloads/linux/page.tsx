import { Metadata } from "next";
import styles from "./page.module.css";
import { CodeBlock } from "../../components/codeBlock/codeBlock";
import Link from "next/link";
import { localizedLink } from "../../components/localizedLink/LocalizedLink";

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

const setupAppLinks = `sudo cp /snap/upsignon/7/meta/gui/upsignon.desktop ~/.local/share/applications/
sudo chown <user>: ~/.local/share/applications/upsignon.desktop
xdg-mime default upsignon.desktop x-scheme-handler/upsignon`;

function FRLinuxOtherDownloads() {
  return (
    <section className={styles.content}>
      <div className={styles.backArrow}>
        <span>&lt;  </span>
        <Link href={localizedLink("fr", "/downloads")}>Téléchargements</Link>
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
    </section>
  );
}

function ENLinuxOtherDownloads() {
  return (
    <section className={styles.content}>
      <div className={styles.backArrow}>
        <span>&lt;  </span>
        <Link href={localizedLink("en", "/downloads")}>Downloads</Link>
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
    </section>
  );
}

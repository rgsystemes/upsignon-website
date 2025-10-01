import { Metadata } from "next";
import { allMsiVersions, allMsixBundleVersions } from "../../resources/release-notes/app/versionList";
import styles from "./page.module.css";
import { CodeBlock } from "../../components/codeBlock/codeBlock";
import { LinkToAnchor } from "../../components/linkToAnchor/linkToAnchor";
import Link from "next/link";
import { PlatformWarningIcon } from "../../features/availabilityIcons";

const gpoConfigContent = `{"proConfigUrl":"https://<xxx.xx/xx>"}`;
const preConfigDeployScript = `## RUN AS ADMIN !
$cUsersPath = "C:\\Users"
$usersPaths = (Get-ChildItem -Path $cUsersPath -Directory -ErrorAction SilentlyContinue).FullName
$bankUrl = "https://<xxx.xx/xx>";
Foreach($u in $usersPaths){
  if (Get-AppxPackage -Name 'dataSmine.UpSignOn' -AllUsers) {
      # Store package case
      New-Item "$u\\AppData\\Local\\Packages\\dataSmine.UpSignOn_fqgssej11bscy\\LocalState\\v6-gpo-configuration.json" -ItemType File -Value "{\`"proConfigUrl\`":\`"$bankUrl\`"}" -Force
  } else {
      # MSI package case
      New-Item "$u\\AppData\\Local\\UpSignOn\\v6-gpo-configuration.json" -ItemType File -Value "{\`"proConfigUrl\`":\`"$bankUrl\`"}" -Force
  }
}
`;
const msiMigrationScript = `## RUN AS ADMIN !
$cUsersPath = "C:\\Users"
$usersPaths = (Get-ChildItem -Path $cUsersPath -Directory -ErrorAction SilentlyContinue).FullName

Foreach($u in $usersPaths){
    $msiFolderPath = "$u\\AppData\\Local\\UpSignOn"
    $storeFolderPath = "$u\\AppData\\Local\\Packages\\dataSmine.UpSignOn_fqgssej11bscy\\LocalState"
    if (-Not (Test-Path $msiFolderPath) -And (Test-Path $storeFolderPath)) {
        New-Item -ItemType Directory -Force -Path $msiFolderPath
        Copy-Item -Path "$storeFolderPath\\*" -Destination "$msiFolderPath" -Recurse
    }
}
Get-AppxPackage -Name 'dataSmine.UpSignOn' -AllUsers | Remove-AppxPackage -AllUsers
`;
const updateScriptFR = `# Enregistrer en utilisant l'encodage UTF-8-with-BOM
#############################################
# CONSTANTES A ADAPTER SELON VOTRE CONTEXTE #
#############################################
# Chemin vers le dossier de mise-à-jour
$updateFolderPath = "C:\\path\\to\\upsignon-update\\folder"
if (-not (Test-Path $updateFolderPath)) {
    Write-Error "Le dossier de mise à jour n'existe pas : $updateFolderPath"
    exit 1
}

# Choix du mode d'installation parmi "SILENT_MSI", "SILENT_USER_MSI", "STORE"
$packageType = "SILENT_MSI"


#################
# UPDATE SCRIPT #
# This script downloads the last package of the app only if a new version is available.
#########################

# Latest available version URLs per package type
$latestMSIVersionUrl = "https://app.upsignon.eu/downloads/latest_windows_msi.txt"
$latestStoreVersionUrl = "https://app.upsignon.eu/downloads/latest_windows_store.txt"

# Latest available package download URLs
$silentMsiDownloadUrl = "https://app.upsignon.eu/downloads/UpSignOn-latest-silent-installer.msi"
$silentUserMsiDownloadUrl = "https://app.upsignon.eu/downloads/UpSignOn-latest-silent-user-installer.msi"
$storeDownloadUrl = "https://app.upsignon.eu/downloads/UpSignOn_latest.zip"

$packageLatestVersionUrl = $latestMSIVersionUrl
$packageDownloadUrl = $silentMsiDownloadUrl
$localPackagePath = "$updateFolderPath\\upsignon.msi"
if($packageType -eq "SILENT_USER_MSI") {
    $packageDownloadUrl = $silentUserMsiDownloadUrl
} elseif($packageType -eq "STORE") {
    $packageLatestVersionUrl = $latestStoreVersionUrl
    $packageDownloadUrl = $storeDownloadUrl
    $localPackagePath = "$updateFolderPath\\upsignon.zip"
}

$currentVersionFilePath = "$updateFolderPath\\currentVersion.txt"
$latestVersionFilePath = "$updateFolderPath\\latestVersion.txt"



# Download the latest version file
try {
    Invoke-WebRequest -Uri $packageLatestVersionUrl -OutFile $latestVersionFilePath -ErrorAction Stop
} catch {
    Write-Error "Erreur lors du téléchargement du fichier de dernière version: $_"
    exit 2
}

# Read versions
if (Test-Path $currentVersionFilePath) {
    $currentVersion = Get-Content -Path $currentVersionFilePath -ErrorAction SilentlyContinue
} else {
    $currentVersion = ""
}
$latestVersion = Get-Content -Path $latestVersionFilePath -ErrorAction SilentlyContinue

# Compare versions
if ($currentVersion -ne $latestVersion) {
    Write-Output "Une nouvelle version est disponible : $latestVersion. Mise-à-jour en cours..."

    # Remove previous package if present
    if (Test-Path $localPackagePath) {
        try {
            Remove-Item $localPackagePath -ErrorAction Stop
        } catch {
            Write-Warning "Suppression du package précédent impossible : $_"
        }
    }

    # Download the new package
    try {
        Invoke-WebRequest -Uri $packageDownloadUrl -OutFile $localPackagePath -ErrorAction Stop
    } catch {
        Write-Error "Erreur de téléchargement du package : $_"
        Remove-Item $latestVersionFilePath -ErrorAction SilentlyContinue
        exit 4
    }

    # Update current version file
    Set-Content -Path $currentVersionFilePath -Value $latestVersion

    # Remove the latest version file
    Remove-Item $latestVersionFilePath -ErrorAction SilentlyContinue

    Write-Output "Le package est désormais à la version $latestVersion. ($localPackagePath)"
} else {
    Write-Output "Le package est déjà à la version $currentVersion."
    # Remove the latest version file
    Remove-Item $latestVersionFilePath -ErrorAction SilentlyContinue
}
`;
const updateScriptEN = `# Save with UTF-8-with-BOM encoding
######################################
# CONSTANTS TO ADAPT TO YOUR CONTEXT #
######################################
# Path of the update folder
$updateFolderPath = "C:\\path\\to\\upsignon-update\\folder"
if (-not (Test-Path $updateFolderPath)) {
    Write-Error "The update folder does not exist: $updateFolderPath"
    exit 1
}

# Choice of the installation mode amongst "SILENT_MSI", "SILENT_USER_MSI", "STORE"
$packageType = "SILENT_MSI"


#################
# UPDATE SCRIPT #
# This script downloads the last package of the app only if a new version is available.
#########################

# Latest available version URLs per package type
$latestMSIVersionUrl = "https://app.upsignon.eu/downloads/latest_windows_msi.txt"
$latestStoreVersionUrl = "https://app.upsignon.eu/downloads/latest_windows_store.txt"

# Latest available package download URLs
$silentMsiDownloadUrl = "https://app.upsignon.eu/downloads/UpSignOn-latest-silent-installer.msi"
$silentUserMsiDownloadUrl = "https://app.upsignon.eu/downloads/UpSignOn-latest-silent-user-installer.msi"
$storeDownloadUrl = "https://app.upsignon.eu/downloads/UpSignOn_latest.zip"

$packageLatestVersionUrl = $latestMSIVersionUrl
$packageDownloadUrl = $silentMsiDownloadUrl
$localPackagePath = "$updateFolderPath\\upsignon.msi"
if($packageType -eq "SILENT_USER_MSI") {
    $packageDownloadUrl = $silentUserMsiDownloadUrl
} elseif($packageType -eq "STORE") {
    $packageLatestVersionUrl = $latestStoreVersionUrl
    $packageDownloadUrl = $storeDownloadUrl
    $localPackagePath = "$updateFolderPath\\upsignon.zip"
}

$currentVersionFilePath = "$updateFolderPath\\currentVersion.txt"
$latestVersionFilePath = "$updateFolderPath\\latestVersion.txt"



# Download the latest version file
try {
    Invoke-WebRequest -Uri $packageLatestVersionUrl -OutFile $latestVersionFilePath -ErrorAction Stop
} catch {
    Write-Error "Error while downloading the latest version file: $_"
    exit 2
}

# Read versions
if (Test-Path $currentVersionFilePath) {
    $currentVersion = Get-Content -Path $currentVersionFilePath -ErrorAction SilentlyContinue
} else {
    $currentVersion = ""
}
$latestVersion = Get-Content -Path $latestVersionFilePath -ErrorAction SilentlyContinue

# Compare versions
if ($currentVersion -ne $latestVersion) {
    Write-Output "A new version is available: $latestVersion. Updating..."

    # Remove previous package if present
    if (Test-Path $localPackagePath) {
        try {
            Remove-Item $localPackagePath -ErrorAction Stop
        } catch {
            Write-Warning "Could not remove previous package: $_"
        }
    }

    # Download the new package
    try {
        Invoke-WebRequest -Uri $packageDownloadUrl -OutFile $localPackagePath -ErrorAction Stop
    } catch {
        Write-Error "Error while downloading the package: $_"
        Remove-Item $latestVersionFilePath -ErrorAction SilentlyContinue
        exit 4
    }

    # Update current version file
    Set-Content -Path $currentVersionFilePath -Value $latestVersion

    # Remove the latest version file
    Remove-Item $latestVersionFilePath -ErrorAction SilentlyContinue

    Write-Output "The package is now at version $latestVersion. ($localPackagePath)"
} else {
    Write-Output "The package is already at version $currentVersion."
    # Remove the latest version file
    Remove-Item $latestVersionFilePath -ErrorAction SilentlyContinue
}
`;
const msiMigrationScript2 = `Start-Process \\\\srv\\partages$\\xxx\\UpSignOn-7.3.0-silent-installer.msi -ArgumentList "/quiet"`;

const anchors = {
  downloads: "downloads",
  gpoPreconfig: "gpoPreconfig",
  gpoAutoUpdate: "gpoAutoUpdate",
  storeToMsiMigration: "storeToMsiMigration",
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const template = {
    alternates: {
      canonical: "https://upsignon.eu/fr/downloads/windows",
      languages: {
        fr: "https://upsignon.eu/fr/downloads/windows",
        en: "https://upsignon.eu/en/downloads/windows",
      },
    },
  };
  const { lang } = await params;
  if (lang === "fr") {
    return {
      title: "Téléchargements - Windows",
      description: "Tous les liens et informations utiles pour télécharger et installer UpSignOn sur Windows.",
      ...template,
    };
  } else {
    return {
      title: "Downloads - Windows",
      description: "All links and useful information to download and install UpSignOn on Windows.",
      ...template,
    };
  }
}

export default async function WindowsAllDownloadsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (lang === "fr") {
    return <FRWindowsAllDownloadPage />;
  } else {
  }
  return <ENWindowsAllDownloadPage />;
}

function FRWindowsAllDownloadPage() {
  return (
    <section className={styles.content}>
      <div className={styles.backArrow}>
        <span>&lt;  </span>
        <Link href="/downloads">Téléchargements</Link>
      </div>
      <h1>Téléchargements, déploiement et pré-configuration Windows</h1>
      <h2>
        <LinkToAnchor id={anchors.downloads}>Téléchargements (PC 64 bits uniquement)</LinkToAnchor>
      </h2>
      <div className={styles.downloadDiffs}>
        <strong>Différences entre les modes de téléchargement</strong>
        <div className={styles.tableContainer}>
          <table>
            <thead>
              <tr>
                <th>Type d’installation</th>
                <th>Compatible GPO</th>
                <th>Mise-à-jour automatique intégrée</th>
                <th>Données locales effacées lors de la désinstallation</th>
                <th>Signature</th>
                <th>Emplacement des données</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Microsoft Store</th>
                <td>NON</td>
                <td rowSpan={2}>OUI</td>
                <td rowSpan={2}>
                  OUI 
                  <PlatformWarningIcon />
                </td>
                <td rowSpan={2}>Microsoft</td>
                <td rowSpan={2} className={styles.largeCol}>
                  C:\Users\xxx\AppData\Local\Packages\dataSmine.UpSignOn_fqgssej11bscy\LocalState
                </td>
              </tr>
              <tr>
                <th>msixbundle</th>
                <td>OUI (mais déprécié)</td>
              </tr>
              <tr>
                <th>MSI</th>
                <td>OUI</td>
                <td>
                  OUI
                  <br />
                  (avec validation manuelle)
                </td>
                <td>NON</td>
                <td>UPSIGNON</td>
                <td className={styles.largeCol}>C:\Users\xxx\AppData\Local\UpSignOn</td>
              </tr>
            </tbody>
          </table>
        </div>
        <strong>
          <PlatformWarningIcon />
           NB: conséquences de l’effacement des données locales
        </strong>
        <ul>
          <li>
            coffres-forts PERSO : le coffre est perdu s’il n’y a pas d’autre appareil synchronisé ni de sauvegarde
            auprès d’un contact de confiance
          </li>
          <li>
            coffres-forts PRO : le coffre est toujours disponible sur le serveur, mais la procédure de mot de passe
            oublié n’est plus utilisable sur cet appareil (jusqu’au prochain enrôlement complet).
          </li>
        </ul>
      </div>

      <h3>Téléchargement via le Microsoft Store</h3>
      <Link
        href="https://www.microsoft.com/fr-fr/p/upsignon/9n811tstg52w"
        target="_blank"
        className={styles.buttonLink}
      >
        Microsoft Store
      </Link>

      <h3>Téléchargement msixbundle (déprécié)</h3>
      <details>
        <summary>Déprécié</summary>
        <p>
          Cette méthode vous permet d’installer le fichier provenant du Microsoft Store sans passer par l’application
          Microsoft Store. Ainsi l’application recevra les mises-à-jour automatiquement.
        </p>
        <Link href="https://app.upsignon.eu/downloads/UpSignOn_latest.zip" download className={styles.buttonLink}>
          UpSignOn_latest.zip
        </Link>
        <div className={styles.msixbundleSteps}>
          <em>Version actuelle : {allMsixBundleVersions[0]}</em>
          <ul>
            <li>Dézippez le fichier UpSignOn_latest.zip</li>
            <li>Exécutez ensuite le script d’installation powershell</li>
            <li>
              Attention, si vous utilisez cette méthode pour le déploiement par GPO, il faut appliquer le script pour
              l’utilisateur et non pour l’ordinateur
            </li>
          </ul>
        </div>
        <details>
          <summary>Toutes les versions</summary>
          <ul>
            {allMsixBundleVersions.map((v) => (
              <li key={v}>
                <Link
                  href={`https://app.upsignon.eu/downloads/windows-store/UpSignOn_${v.replaceAll(".", "_")}.zip`}
                  download
                >
                  {v}
                </Link>
              </li>
            ))}
          </ul>
        </details>
      </details>

      <h3>Téléchargements MSI</h3>
      <p>
        NB: tous les packages msi sont signés avec un{" "}
        <strong>certificat de signature de code de niveau EV qui ne déclenche pas d’alerte de sécurité Windows</strong>.
        Donc si vous avez une alerte de sécurité Windows, refusez immédiatement l’installation ! Le certificat est au
        nom d’UPSIGNON et est signé par “Sectigo Public Code Signing CA EV R36”.
      </p>
      <p>
        NB: Vous pouvez installer l’application au niveau de la machine. Les données resteront spécifiques à chaque
        utilisateur et il n’y aura pas de conflit.
      </p>
      <div className={styles.tableContainer}>
        <table className={styles.msiTable}>
          <thead>
            <tr>
              <th>Version d’installation admin silencieuse</th>
              <th>Version d’installation interactive</th>
              <th>Version d’installation utilisateur silencieuse (déconseillée)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>idéale pour les GPO</td>
              <td>pour les installations manuelles</td>
              <td>utilisable pour les GPO mais déconseillée</td>
            </tr>
            <tr>
              <td>
                installation dans <br />
                <span className={styles.breakable}>C:\Program Files\UPSIGNON\UpSignOn (msi)</span>
              </td>
              <td>
                installation par défaut dans <br />
                <span className={styles.breakable}>C:\Program Files\UPSIGNON\UpSignOn (msi)</span>
                <br />
                ou dans
                <span className={styles.breakable}>C:\Users\xxx\AppData\Local\Programs\UPSIGNON\UpSignOn (msi)</span>
              </td>
              <td>
                installation pour l’utilisateur uniquement dans <br />
                <span className={styles.breakable}>C:\Users\xxx\AppData\Roaming\UPSIGNON\UpSignOn (msi)</span>
              </td>
            </tr>
            <tr>
              <td colSpan={3}>Version actuelle : {allMsiVersions[0]}</td>
            </tr>
            <tr>
              <td>
                <Link
                  href="https://app.upsignon.eu/downloads/UpSignOn-latest-silent-installer.msi"
                  download
                  className={styles.buttonLink}
                >
                  Plus récent .msi
                </Link>
              </td>
              <td>
                <Link
                  href="https://app.upsignon.eu/downloads/UpSignOn-latest-installer.msi"
                  download
                  className={styles.buttonLink}
                >
                  Plus récent .msi
                </Link>
              </td>
              <td>
                <Link
                  href="https://app.upsignon.eu/downloads/UpSignOn-latest-silent-user-installer.msi"
                  download
                  className={styles.buttonLink}
                >
                  Plus récent .msi
                </Link>
              </td>
            </tr>
            <tr>
              <td className={styles.versionList}>
                <details>
                  <summary>Toutes les versions</summary>
                  <ul>
                    {allMsiVersions.map((v) => (
                      <li key={v}>
                        <Link
                          download
                          href={`https://app.upsignon.eu/downloads/windows-msi/UpSignOn-${v}-silent-installer.msi`}
                        >
                          {v}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              </td>
              <td className={styles.versionList}>
                <details>
                  <summary>Toutes les versions</summary>
                  <ul>
                    {allMsiVersions.map((v) => (
                      <li key={v}>
                        <Link
                          download
                          href={`https://app.upsignon.eu/downloads/windows-msi/UpSignOn-${v}-installer.msi`}
                        >
                          {v}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              </td>
              <td className={styles.versionList}>
                <details>
                  <summary>Toutes les versions</summary>
                  <ul>
                    {allMsiVersions.map((v) => (
                      <li key={v}>
                        <Link
                          download
                          href={`https://app.upsignon.eu/downloads/windows-msi/UpSignOn-${v}-silent-user-installer.msi`}
                        >
                          {v}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>
        <LinkToAnchor id={anchors.gpoPreconfig}>Pré-configuration par GPO</LinkToAnchor>
      </h2>
      <p>
        <em>(à partir de la version 7.7.0 de l’application)</em>
      </p>
      <p>
        Pour simplifier la création des coffres-forts par vos utilisateurs, vous pouvez pré-configurer l’URL de
        configuration de votre banque en créant le fichier suivant par GPO :
      </p>
      <ul className={styles.ul}>
        <li>
          cas de l’installation Microsoft Store / .appxbundle, fichier à placer dans :
          <br />
          C:\Users\xxx\AppData\Local\Packages\dataSmine.UpSignOn_fqgssej11bscy\LocalState\v6-gpo-configuration.json
        </li>
        <li>
          cas de l’installation .msi, fichier à placer dans :
          <br />
          C:\Users\xxx\AppData\Local\UpSignOn\v6-gpo-configuration.json
        </li>
      </ul>
      <p>Contenu du fichier (à adapter selon votre cas) :</p>
      <CodeBlock name="v6-gpo-configuration.json">{gpoConfigContent}</CodeBlock>
      <p>Le script suivant peut être utilisé pour déployer ce fichier automatiquement (à ajuster avec votre url) :</p>
      <CodeBlock name="upsignonGPO.sh">{preConfigDeployScript}</CodeBlock>

      <h2>
        <LinkToAnchor id={anchors.gpoAutoUpdate}>Script de mise-à-jour automatique par GPO</LinkToAnchor>
      </h2>
      <details>
        <summary>Voir :</summary>
        <p>
          Si vous souhaitez mettre à jour l'application automatiquement par GPO, vous pouvez utiliser ce script pour
          télécharger automatiquement la dernière version de l'application à chaque fois qu'une nouvelle version est
          publiée. Vous pouvez ensuite configurer une tâche quotidienne ou hebdomadaire qui lance ce script. Ensuite
          vous pouvez configurer une GPO qui installe le fichier téléchargé pour tous vos utilisateurs lorsque ce
          fichier change.
        </p>
        <CodeBlock name="upsignon-update.ps1">{updateScriptFR}</CodeBlock>
      </details>

      <h2>
        <LinkToAnchor id={anchors.storeToMsiMigration}>
          Documentation pour migrer vers le package msi (depuis la version store)
        </LinkToAnchor>
      </h2>
      <details>
        <summary>Voir</summary>
        <p>Voici les choses à savoir avant de commencer cette migration :</p>
        <ul className={styles.ul}>
          <li>
            la version store et la version msi de l’application, bien que fonctionnellement identiques et portant le
            même nom, sont du point de vue de Windows des applications différentes.
          </li>
          <li>
            la version store de l’application stocke ses données dans
            C:\Users\xxx\AppData\Local\Packages\dataSmine.UpSignOn_fqgssej11bscy\LocalState
          </li>
          <li>la désinstallation de l’application store entraîne la suppression des données</li>
          <li>la version msi de l’application stocke ses données dans C:\Users\xxx\AppData\Local\UpSignOn</li>
          <li>
            au lancement de la version msi de l’application, si le dossier C:\Users\xxx\AppData\Local\UpSignOn n’existe
            pas, l’application copie les données de
            C:\Users\xxx\AppData\Local\Packages\dataSmine.UpSignOn_fqgssej11bscy\LocalState si elles existent vers
            C:\Users\xxx\AppData\Local\UpSignOn
          </li>
          <li>
            Windows ne parvient pas à faire la différence entre les raccourcis de la version store et ceux de la version
            msi.
          </li>
        </ul>
        <p>La procédure idéale de migration est donc</p>

        <ol className={styles.ul}>
          <li>
            exécuter un script qui copie, pour chaque utilisateur, les données de la version store vers le dossier de la
            version msi
          </li>
          <li>désinstaller la version store</li>
          <li>installer la version msi</li>
        </ol>
        <p>Pour l’étape 1. et 2. vous pouvez utiliser ce script powershell à exécuter en tant qu’administrateur :</p>
        <CodeBlock name="upsignonMigrateFromStoreToMsi_Steps_1_2.sh">{msiMigrationScript}</CodeBlock>
        <p>
          Pour l’étape 3., vous pouvez vous inspirer de ce script en adaptant le numéro de version de l’application et
          le chemin du fichier.
        </p>
        <CodeBlock name="upsignonMigrateFromStoreToMsi_Step_3.sh">{msiMigrationScript2}</CodeBlock>
      </details>
    </section>
  );
}

function ENWindowsAllDownloadPage() {
  return (
    <section className={styles.content}>
      <div className={styles.backArrow}>
        <span>&lt;  </span>
        <Link href="/downloads">Downloads</Link>
      </div>
      <h1>Windows downloads, deployment, and pre-configuration</h1>
      <h2>
        <LinkToAnchor id={anchors.downloads}>Downloads (64-bit PC only)</LinkToAnchor>
      </h2>
      <div className={styles.downloadDiffs}>
        <strong>Differences between download modes</strong>
        <div className={styles.tableContainer}>
          <table>
            <thead>
              <tr>
                <th>Type of installation</th>
                <th>GPO compatible</th>
                <th>Built-in auto-update</th>
                <th>Local data cleared during uninstallation</th>
                <th>Signature</th>
                <th>Data location</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Microsoft Store</th>
                <td>NO</td>
                <td rowSpan={2}>YES</td>
                <td rowSpan={2}>
                  YES <PlatformWarningIcon />
                </td>
                <td rowSpan={2}>Microsoft</td>
                <td rowSpan={2} className={styles.largeCol}>
                  C:\Users\xxx\AppData\Local\Packages\dataSmine.UpSignOn_fqgssej11bscy\LocalState
                </td>
              </tr>
              <tr>
                <th>msixbundle</th>
                <td>YES (but deprecated)</td>
              </tr>
              <tr>
                <th>MSI</th>
                <td>YES</td>
                <td>
                  YES
                  <br />
                  (with manual validation)
                </td>
                <td>NO</td>
                <td>UPSIGNON</td>
                <td className={styles.largeCol}>C:\Users\xxx\AppData\Local\UpSignOn</td>
              </tr>
            </tbody>
          </table>
        </div>
        <strong>
          <PlatformWarningIcon /> NB: consequences of erasing local data
        </strong>
        <ul>
          <li>
            PERSO vaults: the vault is lost if there is no other synchronized device or backup from a trusted contact
          </li>
          <li>
            PRO vaults: the vault is still available on the server, but the forgotten password procedure can no longer
            be used on this device (until the next complete enrollment).
          </li>
        </ul>
      </div>

      <h3>Download via Microsoft Store</h3>
      <Link
        href="https://www.microsoft.com/fr-fr/p/upsignon/9n811tstg52w"
        target="_blank"
        className={styles.buttonLink}
      >
        Microsoft Store
      </Link>

      <h3>msixbundle download (deprecated)</h3>
      <details>
        <summary>Deprecated</summary>
        <p>
          This method allows you to install the file from the Microsoft Store without going through the Microsoft Store
          application. So the application will receive updates automatically.
        </p>
        <Link href="https://app.upsignon.eu/downloads/UpSignOn_latest.zip" download className={styles.buttonLink}>
          UpSignOn_latest.zip
        </Link>
        <div className={styles.msixbundleSteps}>
          <em>Current version: {allMsixBundleVersions[0]}</em>
          <ul>
            <li>Unzip the UpSignOn_latest.zip file</li>
            <li>Then run the powershell installation script</li>
            <li>
              Please note, if you use this method for GPO deployment, you must apply the script to the user and not for
              the computer
            </li>
          </ul>
        </div>
        <details>
          <summary>All versions</summary>
          <ul>
            {allMsixBundleVersions.map((v) => (
              <li key={v}>
                <Link
                  href={`https://app.upsignon.eu/downloads/windows-store/UpSignOn_${v.replaceAll(".", "_")}.zip`}
                  download
                >
                  {v}
                </Link>
              </li>
            ))}
          </ul>
        </details>
      </details>

      <h3>MSI Downloads</h3>
      <p>
        NB: all msi packages are signed with an{" "}
        <strong>EV-level code signing certificate that does not trigger Windows security alerts</strong>. So if you get
        a Windows security alert, refuse the installation immediately! The certificate is in the name of UPSIGNON and is
        signed by “Sectigo Public Code Signing CA EV R36”.
      </p>
      <p>
        NB: You can install the application at machine level. The data will remain specific to each user and there will
        be no conflict.
      </p>
      <div className={styles.tableContainer}>
        <table className={styles.msiTable}>
          <thead>
            <tr>
              <th>Silent admin install version</th>
              <th>Interactive installation version</th>
              <th>Silent user install version (not advised)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ideal for GPOs</td>
              <td>for manual installations</td>
              <td>usable for GPOs but not advised</td>
            </tr>
            <tr>
              <td>
                installation in <br />
                <span className={styles.breakable}>C:\Program Files\UPSIGNON\UpSignOn (msi)</span>
              </td>
              <td>
                default installation in <br />
                <span className={styles.breakable}>C:\Program Files\UPSIGNON\UpSignOn (msi)</span>
                <br />
                or in
                <span className={styles.breakable}>C:\Users\xxx\AppData\Local\Programs\UPSIGNON\UpSignOn (msi)</span>
              </td>
              <td>
                installation for user only in <br />
                <span className={styles.breakable}>C:\Users\xxx\AppData\Roaming\UPSIGNON\UpSignOn (msi)</span>
              </td>
            </tr>
            <tr>
              <td colSpan={3}>Current version: {allMsiVersions[0]}</td>
            </tr>
            <tr>
              <td>
                <Link
                  href="https://app.upsignon.eu/downloads/UpSignOn-latest-silent-installer.msi"
                  download
                  className={styles.buttonLink}
                >
                  Latest.msi
                </Link>
              </td>
              <td>
                <Link
                  href="https://app.upsignon.eu/downloads/UpSignOn-latest-installer.msi"
                  download
                  className={styles.buttonLink}
                >
                  Latest.msi
                </Link>
              </td>
              <td>
                <Link
                  href="https://app.upsignon.eu/downloads/UpSignOn-latest-silent-user-installer.msi"
                  download
                  className={styles.buttonLink}
                >
                  Latest.msi
                </Link>
              </td>
            </tr>
            <tr>
              <td className={styles.versionList}>
                <details>
                  <summary>All versions</summary>
                  <ul>
                    {allMsiVersions.map((v) => (
                      <li key={v}>
                        <Link
                          download
                          href={`https://app.upsignon.eu/downloads/windows-msi/UpSignOn-${v}-silent-installer.msi`}
                        >
                          {v}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              </td>
              <td className={styles.versionList}>
                <details>
                  <summary>All versions</summary>
                  <ul>
                    {allMsiVersions.map((v) => (
                      <li key={v}>
                        <Link
                          download
                          href={`https://app.upsignon.eu/downloads/windows-msi/UpSignOn-${v}-installer.msi`}
                        >
                          {v}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              </td>
              <td className={styles.versionList}>
                <details>
                  <summary>All versions</summary>
                  <ul>
                    {allMsiVersions.map((v) => (
                      <li key={v}>
                        <Link
                          download
                          href={`https://app.upsignon.eu/downloads/windows-msi/UpSignOn-${v}-silent-user-installer.msi`}
                        >
                          {v}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <h2>
        <LinkToAnchor id={anchors.gpoPreconfig}>Pre-configuration by GPO</LinkToAnchor>
      </h2>
      <p>
        <em>(from version 7.7.0 of the application)</em>
      </p>
      <p>
        To simplify the creation of vaults by your users, you can pre-configure your bank’s configuration URL by
        creating the following file per GPO:
      </p>
      <ul className={styles.ul}>
        <li>
          case of Microsoft Store / .appxbundle installation, file to be placed in:
          <br />
          C:\Users\xxx\AppData\Local\Packages\dataSmine.UpSignOn_fqgssej11bscy\LocalState\v6-gpo-configuration.json
        </li>
        <li>
          case of .msi installation, file to be placed in:
          <br />
          C:\Users\xxx\AppData\Local\UpSignOn\v6-gpo-configuration.json
        </li>
      </ul>
      <p>Content of the file (to be adapted according to your case):</p>
      <CodeBlock name="v6-gpo-configuration.json">{gpoConfigContent}</CodeBlock>
      <p>The following script can be used to deploy this file automatically (to be adjusted with your url):</p>
      <CodeBlock name="upsignonGPO.sh">{preConfigDeployScript}</CodeBlock>

      <h2>
        <LinkToAnchor id={anchors.gpoAutoUpdate}>GPO auto update script</LinkToAnchor>
      </h2>
      <details>
        <summary>View:</summary>
        <p>
          If you wish to automatically update the app by GPO, you can use this script to automatically download the
          latest version of the app each time a new release is published. Add a task to launch this script every day or
          week, then add a GPO to install the downloaded app for all your users when the file changes.
        </p>
        <CodeBlock name="upsignon-update.ps1">{updateScriptEN}</CodeBlock>
      </details>

      <h2>
        <LinkToAnchor id={anchors.storeToMsiMigration}>
          Documentation for migrating to the msi package (from the store version)
        </LinkToAnchor>
      </h2>
      <details>
        <summary>View</summary>
        <p>Here are the things to know before starting this migration:</p>
        <ul className={styles.ul}>
          <li>
            the store version and the msi version of the application, although functionally identical and bearing the
            same name, are from Windows point of view different applications.
          </li>
          <li>
            the store version of the application stores its data in
            C:\Users\xxx\AppData\Local\Packages\dataSmine.UpSignOn_fqgssej11bscy\LocalState
          </li>
          <li>uninstalling the app store results in data deletion</li>
          <li>the msi version of the application stores its data in C:\Users\xxx\AppData\Local\UpSignOn</li>
          <li>
            when launching the msi version of the application, if the C:\Users\xxx\AppData\Local\UpSignOn folder does
            not exist, the application copies the data from
            C:\Users\xxx\AppData\Local\Packages\dataSmine.UpSignOn_fqgssej11bscy\LocalState if they exist to
            C:\Users\xxx\AppData\Local\UpSignOn
          </li>
          <li>Windows cannot tell the difference between store version and version shortcuts msi.</li>
        </ul>
        <p>The ideal migration procedure is therefore</p>

        <ol className={styles.ul}>
          <li>
            execute a script which copies, for each user, the data from the version store to the folder of the msi
            version
          </li>
          <li>uninstall store version</li>
          <li>install msi version</li>
        </ol>
        <p>For step 1. and 2. you can use this powershell script to run as administrator:</p>
        <CodeBlock name="upsignonMigrateFromStoreToMsi_Steps_1_2.sh">{msiMigrationScript}</CodeBlock>
        <p>
          For step 3., you can take inspiration from this script by adapting the version number of the application and
          the file path.
        </p>
        <CodeBlock name="upsignonMigrateFromStoreToMsi_Step_3.sh">{msiMigrationScript2}</CodeBlock>
      </details>
    </section>
  );
}

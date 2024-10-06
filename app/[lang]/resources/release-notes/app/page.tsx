import { Metadata } from "next";
import styles from "../notes.module.css";
import { getDictionary } from "../../../../../translations/translations";
import { LinkToAnchor } from "../../../components/linkToAnchor/linkToAnchor";

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const t = getDictionary(params.lang);
  return {
    title: t.resources.releaseNotes,
    description: t.releaseNotes.metaDescription,
    robots: "noindex, nofollow",
    alternates: {
      canonical: "https://upsignon.eu/fr/resources/release-notes/app",
      languages: {
        fr: "https://upsignon.eu/fr/resources/release-notes/app",
        en: "https://upsignon.eu/en/resources/release-notes/app",
      },
    },
  };
}

export default function AppNotes({ params }: { params: { lang: string } }) {
  if (params.lang === "fr") {
    return <FRAppNotes />;
  } else {
    return <ENAppNotes />;
  }
}

function FRAppNotes() {
  return (
    <section className={styles.section}>
      {/* 7.9.0 */}
      <h2>
        <LinkToAnchor id="7.9.0">7.9.0</LinkToAnchor>
      </h2>
      <p>
        <em>Publiée le 04/10/2024</em>
      </p>
      <strong>Nouveautés</strong>
      <ul>
        <li>
          L'application prend en compte un nouveau paramètre administrateur pour désactiver l'affichage de la popup de
          mise-à-jour.
        </li>
        <li>
          Version 1.1.0 de l'application sur Safari (voir les{" "}
          <a href="https://upsignon.eu/resources/release-notes/extension">notes associées</a>)
        </li>
        <li>Le bouton "Nous contacter" permet désormais également d'envoyer les logs anonymisés de l'application.</li>
      </ul>
      <strong>Correctifs</strong>
      <ul>
        <li>
          L'avertissement "mode hors-ligne" s'affiche désormais aussi quand l'application est connectée à internet mais
          ne parvient pas à communiquer avec le serveur.
        </li>
        <li>Corrige un problème de fréquence d'affichage de la popup de mise-à-jour sur macOS.</li>
        <li>Évite le blocage de l'application en cas d'erreur de mise-à-jour (Windows).</li>
      </ul>
      {/* 7.8.5 */}
      <h2>
        <LinkToAnchor id="7.8.5">7.8.5 (Linux uniquement)</LinkToAnchor>
      </h2>
      <p>
        <em>Publiée le 04/09/2024</em>
      </p>
      <strong>Correctif</strong>
      <ul>
        <li>Corrige un bug empêchant la connexion des extensions de navigateur sur Linux</li>
      </ul>
      {/* 7.8.4 */}
      <h2>
        <LinkToAnchor id="7.8.4">7.8.4</LinkToAnchor>
      </h2>
      <p>
        <em>Publiée le 03/07/2024</em>
      </p>
      <strong>Nouveautés</strong>
      <ul>
        <li>Ajout d’un lien et d’une popup pour proposer aux utilisateurs de noter l’application</li>
      </ul>
      <strong>Correctifs</strong>
      <ul>
        <li>
          (PRO) correction des statistiques de nombre de mots de passe dupliqués envoyés à la console de supervision
        </li>
        <li>
          (Windows) correction d’un crash dû à la non reconnaissance des informations de l’appareil sur certains PC
          Windows (cas rare)
        </li>
        <li>(Windows) correction d’un crash au démarrage de l’application sur certains PC Windows (cas très rare)</li>
      </ul>
      {/* 7.8.0 */}
      <h2>
        <LinkToAnchor id="7.8.0">7.8.0</LinkToAnchor>
      </h2>
      <p>
        <em>Publiée le 17/06/2024</em>
      </p>
      <strong>Changement cassant</strong>
      <ul>
        <li>fin de compatibilité avec la v5 : la migration des données depuis la v5 n’est plus disponible.</li>
      </ul>
      <strong>Correctifs</strong>
      <ul>
        <li>
          correction d’un problème empêchant l’ajout d’un compte depuis l’extension de navigateur lorsque le coffre-fort
          contient une url incomplète
        </li>
      </ul>
      {/* 7.7.2 */}
      <h2>
        <LinkToAnchor id="7.7.2">7.7.2</LinkToAnchor>
      </h2>
      <p>
        <em>Publiée le 3/06/2024</em>
      </p>
      <strong>Correctifs</strong>
      <ul>
        <li>correction d’un bug sur l’extension Safari</li>
        <li>
          correction de l’import CSV et XML qui pouvait générer des doublons de dossiers et des déplacements d’éléments
          entre dossiers de même nom
        </li>
        <li>correction d’un bug empêchant la suppression de coffre-fort</li>
        <li>correction d’un bug sur Linux empêchant l’enrolement de nouveaux appareils</li>
        <li>correction du format accepté pour la saisie d’une clé TOTP</li>
      </ul>

      {/* 7.7.1 */}
      <h2>
        <LinkToAnchor id="7.7.1">7.7.1</LinkToAnchor>
      </h2>
      <p>
        <em>Publiée le 21/05/2024</em>
      </p>
      <strong>Nouveautés</strong>
      <ul>
        <li>pré-configuration par GPO de l’URL de configuration d’un coffre-fort PRO</li>
        <li>
          import KeePass via fichier XML : cet import permet de récupérer l’arborescence depuis KeePass, ce qui n’était
          pas possible avec l’import CSV
        </li>
        <li>détection de ChromeOS (l’appareil s’affichera comme un ChromeOS au lieu d’un Android)</li>
      </ul>
      <strong>Correctifs</strong>
      <ul>
        <li>corrige un problème de verrouillage automatique intempestif</li>
      </ul>

      {/* 7.6.0 */}
      <h2>
        <LinkToAnchor id="7.6.0">7.6.0</LinkToAnchor>
      </h2>
      <p>
        <em>Publiée le 30/04/2024</em>
      </p>
      <ul>
        <li>
          WINDOWS : gestion des proxies nécessitant une authentification et suppression de la possibilité de saisir
          manuellement les paramètres proxies
        </li>
        <li>PRO: prise en compte automatique des changements de nom de banque</li>
        <li>PRO: prise en compte des redirections de serveur UpSignOn PRO</li>
      </ul>

      {/* 7.5.1 */}
      <h2>
        <LinkToAnchor id="7.5.0">7.5.0 (7.5.1 sur windows)</LinkToAnchor>
      </h2>
      <p>
        <em>Publiée le 22/04/2024 et 23/04/2024</em>
      </p>
      <strong>Correctif de sécurité</strong>
      <ul>
        <li>
          [PRO] le cache hors-ligne est désormais effacé à la première tentative de connexion depuis un appareil
          révoqué.
        </li>
      </ul>
      <strong>Améliorations</strong>
      <ul>
        <li>
          [PRO] Améliore les métadonnées d’appareil envoyées aux serveurs UpSignOn PRO (notamment le type d’installation
          windows)
        </li>
        <li>La saisie des cartes bancaires de type Amex est désormais autorisée</li>
        <li>[MacOS Safari] met à jour l’extension de navigateur vers la version 0.11.0</li>
        <li>Corrige certains cas de non détection automatique du proxy sur windows</li>
        <li>
          Supprime les urls “https://” qui s’ajoutaient automatiquement à la création des comptes dans les versions
          précédentes
        </li>
      </ul>
      <strong>Correctifs</strong>
      <ul>
        <li>
          Corrige des cas où l’enregistrement automatique de l’extension de navigateur génère un doublon au lieu de
          mettre à jour le compte existant
        </li>
        <li>
          Corrige le verrouillage automatique qui était déclenché à tort lors d’une action dans l’extension de
          navigateur et qui dans certains cas verrouillait le coffre-fort sans naviguer vers la page “liste des
          coffres”.
        </li>
        <li>Corrige un problème d’affichage sur les TOTP</li>
      </ul>

      {/* 7.4.1 */}
      <h2>
        <LinkToAnchor id="7.4.1">7.4.1</LinkToAnchor>
      </h2>
      <p>
        <em>Publiée entre le 18/03/2024 et le 19/03/2024</em>
      </p>
      <strong>Nouveautés</strong>
      <ul>
        <li>
          Lors de la désactivation de la protection contre les captures d’écran, l’utilisateur est amené à choisir une
          durée de désactivation (5, 30 ou 60 minutes).
        </li>
        <li>
          Le verrouillage automatique au verrouillage de la session est désormais désactivé par défaut sur l’application
          de bureau. Il est possible de le réactiver dans la page paramètres.
        </li>
      </ul>

      {/* 7.4.0 */}
      <h2>
        <LinkToAnchor id="7.4.0">7.4.0</LinkToAnchor>
      </h2>
      <p>
        <em>Publiée entre le 11/03/2024 et le 13/03/2024</em>
      </p>
      <strong>Nouveautés</strong>
      <ul>
        <li>
          dans le générateur de mots de passe, l’option “facile à taper” a été remplacée par la génération d’une phrase
          de passe
        </li>
        <li>
          verrouillage automatique des coffres-forts au verrouillage de la session windows, et au verrouillage de
          l’écran sur macOS, iOS et Android
        </li>
        <li>
          déclenchement du délai de verrouillage automatique lorsque l’application passe en arrière plan (fenêtre
          fermée) et réinitialisation de ce délai à chaque action faite dans l’extension de navigateur
        </li>
        <li>possibilité de configurer les paramètres proxy manuellement</li>
        <li>ajout du lien vers les notes de version dans la page paramètres</li>
      </ul>
      <strong>Correctifs</strong>
      <ul>
        <li>
          correction d’un problème empêchant de refermer les fenêtres d’instruction pour l’export CSV depuis les
          navigateurs
        </li>
        <li>
          correction d’un problème d’affichage lorsque la taille de police est grossie dans les paramètres systèmes
        </li>
        <li>
          iOS 16- : ajout d’une option sur la page “liste des coffres” pour empêcher l’utilisation de la biométrie qui
          semble poser problème à certaines personnes sur iOS16.
        </li>
        <li>
          [technique] ajout d’une fonctionnalité de capture d’erreurs sur l’application windows pour aider au déboggage
        </li>
        <li>amélioration de la robustesse de la fonctionnalité de mot de passe oublié des coffres-forts PERSO</li>
      </ul>

      {/* 7.3.1 */}
      <h2>
        <LinkToAnchor id="7.3.1">7.3.1 - 7.3.2 - 7.3.3 (macos)</LinkToAnchor>
      </h2>
      <ul>
        <li>mises-à-jour de l’extension pour Safari</li>
      </ul>

      {/* 7.3.0 */}
      <h2>
        <LinkToAnchor id="7.3.0">7.3.0</LinkToAnchor>
      </h2>
      <p>
        <em>Publiée le 9 février 2024</em>
      </p>
      <ul>
        <li>MacOS : support pour l’enregistrement automatique via l’extension de navigateur pour Safari</li>
        <li>Android : refonte du système de remplissage automatique intégré qui ne fonctionnait pas</li>
        <li>Windows : système de mise-à-jour de l’application in situ pour la version store</li>
        <li>
          import CSV :
          <ul>
            <li>(desktop) l’application propose de supprimer le fichier CSV après son import réussi</li>
            <li>(mobile) l’application rappelle à l’utilisateur de supprimer le fichier CSV après son import réussi</li>
            <li>android (pro) : les mots de passe d’application sont désormais importés avec un titre</li>
          </ul>
        </li>
        <li>nouveau filtre pour n’afficher que les éléments partagés</li>
        <li>possibilité de plier/déplier tous les dossiers et sous-dossiers d’un coup</li>
        <li>possibilité d’ajouter des CVV de carte bancaire de plus de 3 caractères</li>
        <li>TOTP : les secrets courts sont désormais acceptés</li>
        <li>windows : la fenêtre s’ouvre centrée sur l’écran au lieu de collée en haut à gauche</li>
      </ul>

      {/* 7.2.0 */}
      <h2>
        <LinkToAnchor id="7.2.0">7.2.0</LinkToAnchor>
      </h2>
      <p>
        <em>Publiée le 22/12/2023</em>
      </p>
      <strong>Nouveautés</strong>
      <ul>
        <li>Gestion des TOTP</li>
      </ul>
      <strong>Correctifs</strong>
      <ul>
        <li>
          correction du bug critique suivant : la suppression d’un sous-dossier d’un coffre-fort partagé entraînait la
          suppression du coffre-fort partagé parent
        </li>
        <li>correction du lien de mise-à-jour pour les application Windows installées par msi</li>
        <li>amélioration du message de mise-à-jour</li>
        <li>
          correction du délai de verrouillage d’un coffre après que le délai de verrouillage ait été modifié pour un
          autre coffre
        </li>
      </ul>
      <strong>Autres</strong>
      <ul>
        <li>Possibilité d’afficher l’identifiant technique de coffre-fort PERSONNEL pour aider au support.</li>
        <li>Mise-à-jour des dépendances</li>
        <li>Changement du système de navigation (transparent pour les utilisateurs)</li>
      </ul>

      {/* 7.1.2 */}
      <h2>
        <LinkToAnchor id="7.1.2">7.1.2 (uniquement pour les msi)</LinkToAnchor>
      </h2>
      <p>
        <em>Publiée le 21/12/2023</em>
      </p>
      <p>Corrige le lien de mise-à-jour sur les applications Windows installées par msi.</p>

      {/* 7.1.1 */}
      <h2>
        <LinkToAnchor id="7.1.1">7.1.1</LinkToAnchor>
      </h2>
      <p>
        <em>Publiée le 19/12/2023</em>
      </p>
      <p>
        Corrige un cas de blocage d’un coffre-fort PERSO suite à une remigration tardive avec certaines conditions
        particulières (cas rare).
      </p>

      {/* 7.1.0 */}
      <h2>
        <LinkToAnchor id="7.1.0">7.1.0</LinkToAnchor>
      </h2>
      <p>
        <em>Publiée le 18/12/2023</em>
      </p>
      <p>
        <em>Equivalente à la version 7.0.17 beta.</em>
      </p>
      <strong>Nouveautés</strong>
      <p>Amélioration du système de partage</p>
      <ul>
        <li>possibilité de partager directement un compte, un code ou un dossier</li>
        <li>possibilité de déplacer un dossier partagé dans un dossier non partagé</li>
        <li>ajout d’icônes “groupe“ sur les éléments partagés</li>
        <li>possibilité de gérer les propriétaires des éléments partagés dans les coffres-forts PERSO</li>
      </ul>
      <p>Arborescence</p>
      <ul>
        <li>possibilité de créer un compte, un code ou un dossier directement dans un dossier</li>
        <li>nouveau filtre pour cacher les éléments non triés (ceux du dossier racine)</li>
      </ul>
      <strong>Correctifs</strong>
      <ul>
        <li>support pour les proxys sortants</li>
        <li>correction d’un crash sur iOS 16 et antérieur</li>
        <li>
          correction d’un blocage de l’application au démarrage sur iOS lorsque l’utilisateur n’a qu’un seul coffre-fort
          et que la biométrie est activée
        </li>
        <li>
          correction d’un problème d’enregistrement concurrent de fichiers pouvant conduire à la perte des paramètres
          locaux de l’application, notamment la configuration de la biométrie et la configuration des extensions de
          navigateur
        </li>
      </ul>
      <strong>Autres</strong>
      <ul>
        <li>amélioration des rapports d’erreur</li>
        <li>ajout d’un identifiant d’appareil pour faciliter le support utilisateur</li>
        <li>
          le serveur local d’extension de navigateur peut désormais s’ouvrir sur plusieurs ports pour gérer le cas où le
          port est déjà utilisé, notamment par exemple sur windows RDS
        </li>
        <li>
          amélioration de la rétrocompatibilité future de l’application : l’application n’efface plus les informations
          inconnues présentes dans les données (ces informations pourraient typiquement avoir été créées par une version
          plus à jour de l’application)
        </li>
      </ul>
    </section>
  );
}

function ENAppNotes() {
  return (
    <section className={styles.section}>
      {/* 7.9.0 */}
      <h2>
        <LinkToAnchor id="7.9.0">7.9.0</LinkToAnchor>
      </h2>
      <p>
        <em>Publiée le 04/10/2024</em>
      </p>
      <strong>New features</strong>
      <ul>
        <li>The app takes into account a new administrator parameter to prevent the display of the update popup.</li>
        <li>
          Version 1.1.0 of the Safari extension (see the{" "}
          <a href="https://upsignon.eu/resources/release-notes/extension">associated notes</a>)
        </li>
        <li>The "Contact us" button now also makes it possible to send anonymised app logs.</li>
      </ul>
      <strong>Fixes</strong>
      <ul>
        <li>
          The "Offline mode" warning now also displays when the application is connected to the internet but cannot
          communicate with the server.
        </li>
        <li>Fixes an issue with the frequency of display of the update popup on macOS.</li>
        <li>Prevents the blocking of the application in case of update error (Windows).</li>
      </ul>
      {/* 7.8.5 */}
      <h2>
        <LinkToAnchor id="7.8.5">7.8.5 (Linux only)</LinkToAnchor>
      </h2>
      <p>
        <em>Published on 04/09/2024</em>
      </p>
      <strong>Fix</strong>
      <ul>
        <li>Fixes a bug preventing browser extension connection on Linux</li>
      </ul>
      {/* 7.8.4 */}
      <h2>
        <LinkToAnchor id="7.8.4">7.8.4</LinkToAnchor>
      </h2>
      <p>
        <em>Published on 02/07/2024</em>
      </p>
      <strong>New feature</strong>
      <ul>
        <li>Add a link and a popup to suggest users to rate the app</li>
      </ul>
      <strong>Fixes</strong>
      <ul>
        <li>(PRO) correction of statistics for the number of duplicate passwords sent to the monitoring console</li>
        <li>(Windows) fixed a crash due to not recognizing device information on some Windows PCs (rare case)</li>
        <li>(Windows) fixed a crash at application start on certain Windows PCs (very rare case)</li>
      </ul>
      {/* 7.8.0 */}
      <h2>
        <LinkToAnchor id="7.8.0">7.8.0</LinkToAnchor>
      </h2>
      <p>
        <em>Published on 17/06/2024</em>
      </p>
      <strong>Breaking change</strong>
      <ul>
        <li>end of compatibility with v5: data migration from v5 is no longer available.</li>
      </ul>
      <strong>Fixes</strong>
      <ul>
        <li>
          fixes a problem preventing an account from being added from the browser extension when the vault contains an
          incomplete url.
        </li>
      </ul>
      {/* 7.7.2 */}
      <h2>
        <LinkToAnchor id="7.7.2">7.7.2</LinkToAnchor>
      </h2>
      <p>
        <em>Published on 3/06/2024</em>
      </p>
      <strong>Fixes</strong>
      <ul>
        <li>fixes a bug on the Safari extension</li>
        <li>
          fixes CSV and XML import which could generate duplicate folders and movement of elements between folders of
          the same name
        </li>
        <li>fixe sa bug preventing vault deletion</li>
        <li>fixes a bug on Linux preventing the enrollment of new devices</li>
        <li>fixes the accepted format for entering a TOTP key</li>
      </ul>

      {/* 7.7.1 */}
      <h2>
        <LinkToAnchor id="7.7.1">7.7.1</LinkToAnchor>
      </h2>
      <p>
        <em>Published on 21/05/2024</em>
      </p>
      <strong>New features</strong>
      <ul>
        <li>GPO pre-configuration of the configuration URL of a PRO vault</li>
        <li>
          KeePass import via XML file: this import allows you to retrieve the tree structure from KeePass, which was not
          possible with CSV import
        </li>
        <li>ChromeOS detection (device will show as ChromeOS instead of Android)</li>
      </ul>
      <strong>Fixes</strong>
      <ul>
        <li>fixes an unexpected auto-locking issue</li>
      </ul>

      {/* 7.6.0 */}
      <h2>
        <LinkToAnchor id="7.6.0">7.6.0</LinkToAnchor>
      </h2>
      <p>
        <em>Published on 30/04/2024</em>
      </p>
      <ul>
        <li>
          WINDOWS: management of proxies requiring authentication and removal of the possibility of typing proxy
          settings manually
        </li>
        <li>PRO: automatic taking into account of bank name changes</li>
        <li>PRO: support for UpSignOn PRO server redirects</li>
      </ul>

      {/* 7.5.1 */}
      <h2>
        <LinkToAnchor id="7.5.1">7.5.0 (7.5.1 for Windows)</LinkToAnchor>
      </h2>
      <p>
        <em>Published on 22/04/2024 and 23/04/2024</em>
      </p>
      <strong>Security fixes</strong>
      <ul>
        <li>[PRO] offline cache is now cleared on the first login attempt from a revoked device</li>
      </ul>
      <strong>Improvements</strong>
      <ul>
        <li>[PRO] improves device metadata sent to UpSignOn PRO servers (including windows installation type)</li>
        <li>the entry of Amex type bank cards is now authorized</li>
        <li>[MacOS Safari] updates browser extension to version 0.11.0</li>
        <li>[Windows] fixes certain cases of non-automatic proxy detection</li>
        <li>removes the “https://” urls which were automatically added when creating accounts in previous versions</li>
      </ul>
      <strong>Fixes</strong>
      <ul>
        <li>
          fixes cases where the browser extension auto-save results in account duplications instead of account update
        </li>
        <li>
          fixes auto-lock that was incorrectly triggered during an action in the extension browser and which in some
          cases locked the vault without navigating to the “vault list“ page.
        </li>
        <li>fixes a display problem on TOTP</li>
      </ul>

      {/* 7.4.1 */}
      <h2>
        <LinkToAnchor id="7.4.1">7.4.1</LinkToAnchor>
      </h2>
      <p>
        <em>Published between 18/03/2024 and 19/03/2024</em>
      </p>
      <strong>New features</strong>
      <ul>
        <li>
          When disabling screenshot protection, the user is prompted to choose a deactivation duration (5, 30 or 60
          minutes).
        </li>
        <li>
          Auto-lock on session lock is now disabled by default on the desktop app. It is possible to reactivate it in
          the settings page.
        </li>
      </ul>

      {/* 7.4.0 */}
      <h2>
        <LinkToAnchor id="7.4.0">7.4.0</LinkToAnchor>
      </h2>
      <p>
        <em>Published between 11/03/2024 and 13/03/2024</em>
      </p>
      <strong>New features</strong>
      <ul>
        <li>in the password generator, the “easy to type” option has been replaced by generating a passphrase</li>
        <li>automatic locking of vaults on windows session lock and on screen lock on macOS, iOS and Android</li>
        <li>
          triggering of the automatic lock delay when the application goes into the background (window closed) and
          resetting of this delay for each action made in the browser extension
        </li>
        <li>possibility to configure proxy settings manually</li>
        <li>added link to release notes in settings page</li>
      </ul>
      <strong>Fixes</strong>
      <ul>
        <li>fixes a problem preventing the instruction popups for CSV export from browsers from being closed</li>
        <li>fixes a display problem when the font size is enlarged in the system settings</li>
        <li>
          iOS 16-: adds an option on the ”vault list” page to prevent the use of biometrics which seems to create a
          problem for some people on iOS16.
        </li>
        <li>[technical] adds error catching functionality to the Windows application to help with debugging</li>
        <li>improves the robustness of the forgotten password functionality of PERSO vaults</li>
      </ul>

      {/* 7.3.1 */}
      <h2>
        <LinkToAnchor id="7.3.1">7.3.1 - 7.3.2 - 7.3.3 (macos)</LinkToAnchor>
      </h2>
      <ul>
        <li>Safari extension updates</li>
      </ul>

      {/* 7.3.0 */}
      <h2>
        <LinkToAnchor id="7.3.0">7.3.0</LinkToAnchor>
      </h2>

      <p>
        <em>Published on 9/02/2024</em>
      </p>
      <ul>
        <li>MacOS: support for automatic saving via browser extension for Safari</li>
        <li>Android: rewrite of the built-in autofill system that did not work</li>
        <li>Windows: in-situ application update system for the store version</li>
        <li>
          CSV import:
          <ul>
            <li>(desktop) the application offers to delete the CSV file after its successful import</li>
            <li>(mobile) the application reminds the user to delete the CSV file after its successful import</li>
            <li>Android (pro): app passwords are now imported with a title</li>
          </ul>
        </li>
        <li>new filter to only display shared items</li>
        <li>possibility of folding/unfolding all folders and sub-folders at once</li>
        <li>possibility of adding bank card CVVs of more than 3 characters</li>
        <li>TOTP: short secrets are now accepted</li>
        <li>Windows: the window opens centered on the screen instead of stuck to the top left</li>
      </ul>

      {/* 7.2.0 */}
      <h2>
        <LinkToAnchor id="7.2.0">7.2.0</LinkToAnchor>
      </h2>
      <p>
        <em>Published on 22/12/2023</em>
      </p>
      <strong>New features</strong>
      <ul>
        <li>TOTP management</li>
      </ul>
      <strong>Fixes</strong>
      <ul>
        <li>
          fixes the following critical bug: deleting a subfolder of a shared vault resulted in the removing of the
          parent shared vault
        </li>
        <li>fixes update link for Windows applications installed by msi</li>
        <li>improves update message</li>
        <li>fixes the lock delay of a vault after the lock delay was changed on another vault</li>
      </ul>
      <strong>Others</strong>
      <ul>
        <li>Ability to display the PERSONAL vault technical ID to assist with support.</li>
        <li>Updates dependencies</li>
        <li>Changes the navigation system (transparent for users)</li>
      </ul>

      {/* 7.1.2 */}
      <h2>
        <LinkToAnchor id="7.1.2">7.1.2 (only for msi)</LinkToAnchor>
      </h2>
      <p>
        <em>Published on 21/12/2023</em>
      </p>
      <p>Fixes the update ling on Windows for apps installed via msi.</p>

      {/* 7.1.1 */}
      <h2>
        <LinkToAnchor id="7.1.1">7.1.1</LinkToAnchor>
      </h2>
      <p>
        <em>Published on 19/12/2023</em>
      </p>
      <p>
        Fixes a case of blocking of a PERSO vault following a late remigration under certain special conditions (rare
        case).
      </p>

      {/* 7.1.0 */}
      <h2>
        <LinkToAnchor id="7.1.0">7.1.0</LinkToAnchor>
      </h2>
      <p>
        <em>Published on 18/12/2023</em>
      </p>
      <p>
        <em>Equivalent to beta version 7.0.17</em>
      </p>
      <strong>New features</strong>
      <p>Improvement of the sharing system</p>
      <ul>
        <li>possibility to directly share an account, a code or a folder</li>
        <li>possibility to move a shared folder to a non-shared folder</li>
        <li>addition of “group” icons to shared elements</li>
        <li>possibility to manage the owners of shared items in PERSO vaults</li>
      </ul>
      <p>Tree</p>
      <ul>
        <li>possibility of creating an account, a code or a folder directly in a folder</li>
        <li>new filter to hide unsorted items (those in the root folder)</li>
      </ul>
      <strong>Fixes</strong>
      <ul>
        <li>support for outbound proxies</li>
        <li>fixes a crash on iOS 16 and earlier</li>
        <li>fixes an app crash on startup on iOS when user only has one vault and biometrics is enabled</li>
        <li>
          fixes an issue with concurrent file saving that could lead to loss of local app settings, including biometrics
          setup and browser extensions setup
        </li>
      </ul>
      <strong>Other</strong>
      <ul>
        <li>improves error reporting</li>
        <li>adds device identifier to facilitate user support</li>
        <li>
          the local browser extension server can now open on multiple ports to handle the case where the port is already
          used, in particular for example on Windows RDS
        </li>
        <li>
          improvement of future backward compatibility of the application: the application no longer erases unknown
          information present in the data (this information could typically have been created by a more up-to-date
          version of the application)
        </li>
      </ul>
    </section>
  );
}

import { Metadata } from "next";
import { getDictionary } from "../../../../../translations/translations";
import styles from "../notes.module.css";
import { LinkToAnchor } from "../../../components/linkToAnchor/linkToAnchor";
import Link from "next/link";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const t = getDictionary(lang);
  return {
    title: t.resources.releaseNotes,
    description: t.releaseNotes.metaDescription,
    robots: "noindex, nofollow",
    alternates: {
      canonical: "https://upsignon.eu/fr/resources/release-notes/extension",
      languages: {
        fr: "https://upsignon.eu/fr/resources/release-notes/extension",
        en: "https://upsignon.eu/en/resources/release-notes/extension",
      },
    },
  };
}

export default async function ExtensionNotes({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (lang === "fr") {
    return <FRExtensionNotes />;
  } else {
    return <ENExtensionNotes />;
  }
}

function FRExtensionNotes() {
  return (
    <section className={styles.section}>
      {/* 1.6.0 */}
      <h2>
        <LinkToAnchor id="1.6.0">1.6.0</LinkToAnchor>
      </h2>
      <em>Publiée le 18/11/2025</em>
      <ul>
        <li>Changement de l'icône de l'extension.</li>
      </ul>
      {/* 1.5.4 */}
      <h2>
        <LinkToAnchor id="1.5.4">1.5.4</LinkToAnchor>
      </h2>
      <em>Publiée le 10/10/2025</em>
      <ul>
        <li>Changement du nom de l'extension en UpSignOn by Septeo.</li>
        <li>Prise en compte des onglets ouverts dès l'installation ou la mise-à-jour de l'extension.</li>
        <li>Empêche la mise en sommeil de l'extension par le navigateur pour fluidifier l'UX.</li>
        <li>
          Corrige un problème de non détection des modifications sur le champ login sur certains sites qui conduisait à
          la création de doublons.
        </li>
        <li>L'extension fonctionne désormais sur les pages utilisant des shadow DOM.</li>
      </ul>
      {/* 1.5.3 */}
      <h2>
        <LinkToAnchor id="1.5.3">1.5.3</LinkToAnchor>
      </h2>
      <em>Publiée le 23/07/2025</em>
      <ul>
        <li>Améliore l'interface de la page "extension non connectée".</li>
        <li>Corrige un bug affichant la mauvaise page dans certains cas.</li>
      </ul>
      {/* 1.5.2 */}
      <h2>
        <LinkToAnchor id="1.5.2">1.5.2</LinkToAnchor>
      </h2>
      <em>Publiée le 19/06/2025</em>
      <ul>
        <li>Corrige un bug empêchant de valider l'alerte du navigateur au clic sur le bouton "Connecter à l'appli".</li>
        <li>
          Corrige un bug où l'extension affiche la page d'erreur alors qu'elle est bien connectée à l'application (cas
          où le navigateur a éteint une partie du code de l'extension pour consommer moins de ressources).
        </li>
      </ul>
      {/* 1.5.1 */}
      <h2>
        <LinkToAnchor id="1.5.1">1.5.1</LinkToAnchor>
      </h2>
      <em>Publiée le 06/06/2025</em>
      <ul>
        <li>Correction de bugs</li>
      </ul>
      {/* 1.5.0 */}
      <h2>
        <LinkToAnchor id="1.5.0">1.5.0</LinkToAnchor>
      </h2>
      <em>Publiée le 28/05/2025</em>
      <ul>
        <li>
          Prise en charge d'un mode simplifié optionnel (le code à usage unique n'est plus demandé) pour l'autorisation
          de l'extension de navigateur.
        </li>
        <li>Correctifs sur l'heuristique de remplissage automatique.</li>
      </ul>
      {/* 1.4.0 */}
      <h2>
        <LinkToAnchor id="1.4.0">1.4.0</LinkToAnchor>
      </h2>
      <em>Publiée le 19/05/2025</em>
      <ul>
        <li>Améliorations de sécurité</li>
        <li>
          Nouveau système de configuration du canal de communication entre l'extension et l'application UpSignOn pour
          une meilleure sécurité et une meilleure expérience utilisateur. Voir les notes de versions de{" "}
          <Link href="/fr/resources/release-notes/app#7.12.2">l'application v7.12.2</Link>). (NB : cette version reste
          rétrocompatible avec les anciennes versions de l'application.)
        </li>
      </ul>
      {/* 1.3.0 */}
      <h2>
        <LinkToAnchor id="1.3.0">1.3.0</LinkToAnchor>
      </h2>
      <em>Publiée le 18/02/2025</em>
      <ul>
        <li>
          Applique le nouveau modèle de niveaux d'accès des coffres-forts partagés (see{" "}
          <Link href="/fr/resources/release-notes/app#7.11.0">app v7.11.0</Link>) et conserve la rétro-compatibilité
          avec les anciennes versions de l'application.
        </li>
      </ul>
      {/* 1.2.3 */}
      <h2>
        <LinkToAnchor id="1.2.3">1.2.3</LinkToAnchor>
      </h2>
      <em>Publiée le 04/02/2025</em>
      <ul>
        <li>Corrige un problème de redimensionnement de la bulle au clic (nouveaux cas).</li>
      </ul>
      {/* 1.2.2 */}
      <h2>
        <LinkToAnchor id="1.2.2">1.2.2</LinkToAnchor>
      </h2>
      <em>Publiée le 03/02/2025</em>
      <ul>
        <li>Corrige un problème de redimensionnement de la bulle au clic sur les onglets.</li>
        <li>Corrige la copie des codes TOTP.</li>
      </ul>
      {/* 1.2.1 */}
      <h2>
        <LinkToAnchor id="1.2.1">1.2.1</LinkToAnchor>
      </h2>
      <em>Publiée le 11/12/2024</em>
      <ul>
        <li>Corrige un cas d'affichage de la page de configuration au lieu de la page d'erreur.</li>
      </ul>
      {/* 1.2.0 */}
      <h2>
        <LinkToAnchor id="1.2.0">1.2.0</LinkToAnchor>
      </h2>
      <em>Publiée le 29/11/2024</em>
      <ul>
        <li>
          Ajoute une méthode de configuration alternative pour les appareils sur lesquels le lien d'application ne
          fonctionne pas (par exemple sur certaines distributions linux).{" "}
          <em>Nécessite une version 7.10.0 ou ultérieure de l'application.</em>
        </li>
        <li>
          La popup de l'extension (vue au clic sur l'icône de l'extension dans la barre d'acitons du navigateur) permet
          désormais d'afficher les codes TOTP. <em>Nécessite une version 7.10.0 ou ultérieure de l'application.</em>
        </li>
        <li>
          Affiche les comptes qui correspondent à la page avec leur arborescence pour faciliter leur distinction en cas
          de correspondances multiples.
        </li>
        <li>Ajoute la possibilité de réinitialiser l'extension en cliquant 7 fois sur le numéro de version.</li>
        <li>Améliore l'heuristique de remplissage automatique sur certains sites.</li>
        <li>Corrige un cas où l'extension empêche l'affichage du clavier virtuel d'un site bancaire.</li>
        <li>Corrige divers bugs mineurs.</li>
      </ul>
      {/* 1.1.0 */}
      <h2>
        <LinkToAnchor id="1.1.0">1.1.0</LinkToAnchor>
      </h2>
      <em>Publiée le 10/09/2024</em>
      <ul>
        <li>
          Permet le remplissage et l'enregistrement automatique des formulaires contenus dans une iframe si cet iframe
          est directement enfant du cadre principal et si le nom de domaine de cet iframe est égal au nom de domaine de
          la page.
        </li>
      </ul>
      {/* 1.0.0 */}
      <h2>
        <LinkToAnchor id="1.0.0">1.0.0</LinkToAnchor>
      </h2>
      <em>Publiée le 29/05/2024</em>
      <ul>
        <li>
          <strong>Fin de support de l’ancien système:</strong> Les application antérieures à la version 7 ne sont plus
          compatibles avec l’extension de navigateur.
        </li>
        <li>Amélioration significative des performances à l’ouverture de l’extension</li>
        <li>
          Amélioration technique - passage en manifest v3 sur les navigateurs chromium : l’extension consomme moins de
          ressources qu’auparavant.
        </li>
      </ul>

      {/* 0.11.0 */}
      <h2>
        <LinkToAnchor id="0.11.0">0.11.0</LinkToAnchor>
      </h2>
      <em>Publiée le 26/03/2024</em>
      <ul>
        <li>Amélioration de l’affichage des mots de passe non enregistrés</li>
        <li>Les mots de passe non enregistrés peuvent être ajoutés directement dans un coffre-fort</li>
        <li>Ajout d’une option pour désactiver globalement l’enregistrement automatique</li>
        <li>Amélioration de l’heuristique de détection de la soumission des formulaires de connexion</li>
      </ul>

      {/* 0.10.5 */}
      <h2>
        <LinkToAnchor id="0.10.5">0.10.5</LinkToAnchor>
      </h2>
      <em>Publiée le 20/02/2024</em>
      <ul>
        <li>amélioration de l’heuristique de détection des champs mot de passe</li>
        <li>effacement automatique de l’avertissement sur la force du mot de passe au bout de 6 secondes</li>
      </ul>

      {/* 0.10.4 */}
      <h2>
        <LinkToAnchor id="0.10.4">0.10.4</LinkToAnchor>
      </h2>
      <em>Publiée le 13/02/2024</em>
      <ul>
        <li>correction de la modification d’un mot de passe d’un compte partagé pour un coffre-fort PRO</li>
        <li>corrige l’affichage de certains éléments sur certains sites</li>
        <li>
          ajout d’un mécanisme permettant de garantir qu’un mot de passe ne sera pas proposé dans la liste des mots de
          passe non sauvegardés s’il existe déjà dans un coffre pour corriger le comportement observé sur certains sites
        </li>
      </ul>

      {/* 0.10.3 */}
      <h2>
        <LinkToAnchor id="0.10.3">0.10.3</LinkToAnchor>
      </h2>
      <em>Publiée le 12/02/2024</em>
      <ul>
        <li>ajout d’une option pour désactiver l’enregistrement automatique par défaut sur le site actuel</li>
      </ul>

      {/* 0.10.2 */}
      <h2>
        <LinkToAnchor id="0.10.2">0.10.2</LinkToAnchor>
      </h2>
      <em>Publiée le 12/02/2024</em>
      <ul>
        <li>
          amélioration de l’heuristique de détection des champs pour permettre le remplissage (semi-)automatique dans
          certains cas particuliers
        </li>
      </ul>

      {/* 0.10.1 */}
      <h2>
        <LinkToAnchor id="0.10.1">0.10.1</LinkToAnchor>
      </h2>
      <em>Publiée le 9/02/2024</em>
      <ul>
        <li>enregistrement automatique des logins et mots de passe saisis manuellement (coffres-forts Pro et Perso)</li>
        <li>
          gestion d’une plage de port pour la communication avec l’application, et notamment gestion des sessions RDS
          multi-utilisateurs.
        </li>
        <li>amélioration sur l’heuristique de détection des formulaires et du remplissage automatique</li>
        <li>
          affichage d’alertes sur les mots de passe faibles au moment de l’utilisation du mot de passe via l’extension
        </li>
      </ul>
    </section>
  );
}

function ENExtensionNotes() {
  return (
    <section className={styles.section}>
      {/* 1.6.0 */}
      <h2>
        <LinkToAnchor id="1.6.0">1.6.0</LinkToAnchor>
      </h2>
      <em>Published on 18/11/2025</em>
      <ul>
        <li>Change of the extension icon.</li>
      </ul>
      {/* 1.5.4 */}
      <h2>
        <LinkToAnchor id="1.5.4">1.5.4</LinkToAnchor>
      </h2>
      <em>Published on 10/10/2025</em>
      <ul>
        <li>Extension renamed to UpSignOn by Septeo.</li>
        <li>Open tabs are now taken into account right at the end of the extension install or update.</li>
        <li>Prevents the extension from being put to sleep by the browser to improve the user experience.</li>
        <li>
          Fixes an issue with the detection of changes on the login field of some websites that led to the creation of
          duplicate accounts.
        </li>
        <li>The extension now works on pages that use shadow DOM.</li>
      </ul>
      {/* 1.5.3 */}
      <h2>
        <LinkToAnchor id="1.5.3">1.5.3</LinkToAnchor>
      </h2>
      <em>Published on 23/07/2025</em>
      <ul>
        <li>Improves the interface for the page "extension not connected".</li>
        <li>Fixes a bug displaying the wrong page in some cases.</li>
      </ul>
      {/* 1.5.2 */}
      <h2>
        <LinkToAnchor id="1.5.2">1.5.2</LinkToAnchor>
      </h2>
      <em>Published on 19/06/2025</em>
      <ul>
        <li>Fixes a bug preventing to validate the browser alert when clicking on te "Connect to the app" button.</li>
        <li>
          Fixes a bug where the extension displays the error page despite being connected to the app (case when the
          browser kills parts of the extension to use less resources).
        </li>
      </ul>
      {/* 1.5.1 */}
      <h2>
        <LinkToAnchor id="1.5.1">1.5.1</LinkToAnchor>
      </h2>
      <em>Publiched on 06/06/2025</em>
      <ul>
        <li>Fixes bugs</li>
      </ul>
      {/* 1.5.0 */}
      <h2>
        <LinkToAnchor id="1.5.0">1.5.0</LinkToAnchor>
      </h2>
      <em>Publiched on 28/05/2025</em>
      <ul>
        <li>
          Support for an optional simplified mode (the code used once is no longer requested) for authorizing the
          browser extension.
        </li>
        <li>Fixes on ths autofill heuristic.</li>
      </ul>
      {/* 1.4.0 */}
      <h2>
        <LinkToAnchor id="1.4.0">1.4.0</LinkToAnchor>
      </h2>
      <em>Published on 19/05/2025</em>
      <ul>
        <li>Security improvements</li>
        <li>
          New setup system for the communication channel between the extension and the UpSignOn app to enhance security
          and UX. See version notes of
          <Link href="/fr/resources/release-notes/app#7.12.2">app v7.12.2</Link>). (Note : this version remains
          backwards-compatible with previous versions of the app.)
        </li>
      </ul>
      {/* 1.3.0 */}
      <h2>
        <LinkToAnchor id="1.3.0">1.3.0</LinkToAnchor>
      </h2>
      <em>Published on 18/02/2025</em>
      <ul>
        <li>
          Applies the new shared vault access level model (see{" "}
          <Link href="/fr/resources/release-notes/app#7.11.0">app v7.11.0</Link>) and keep backwards compatibility with
          older app versions.
        </li>
      </ul>
      {/* 1.2.3 */}
      <h2>
        <LinkToAnchor id="1.2.3">1.2.3</LinkToAnchor>
      </h2>
      <em>Published on 04/02/2025</em>
      <ul>
        <li>Fixes a bubble resizing issue on click (new cases).</li>
      </ul>
      {/* 1.2.2 */}
      <h2>
        <LinkToAnchor id="1.2.2">1.2.2</LinkToAnchor>
      </h2>
      <em>Published on 03/02/2025</em>
      <ul>
        <li>Fixes a bubble resizing issue when clicking on tabs.</li>
        <li>Fixes copying TOTP codes.</li>
      </ul>
      {/* 1.2.1 */}
      <h2>
        <LinkToAnchor id="1.2.1">1.2.1</LinkToAnchor>
      </h2>
      <em>Published on 11/12/2024</em>
      <ul>
        <li>Fixes a case when the setup page is displayed instead of the error page.</li>
      </ul>
      {/* 1.2.0 */}
      <h2>
        <LinkToAnchor id="1.2.0">1.2.0</LinkToAnchor>
      </h2>
      <em>Published on 29/11/2024</em>
      <ul>
        <li>
          Adds an alternative configuration method for devices on which the application link does not work (for example
          on some Linux distributions). <em>Requires version 7.10.0 or later of the application.</em>
        </li>
        <li>
          The extension popup (seen when you click on the extension icon in the browser toolbar) now displays TOTP
          codes. <em>Requires version 7.10.0 or later of the application.</em>
        </li>
        <li>
          Displays the accounts that correspond to the page with their tree structure to make it easier to distinguish
          them in the event of multiple matches.
        </li>
        <li>Adds the ability to reset the extension by clicking 7 times on the version number.</li>
        <li>Improves auto-fill heuristics on certain sites.</li>
        <li>Fixes a case where the extension prevents the virtual keyboard of a banking site from being displayed.</li>
        <li>Fixes various minor bugs.</li>
      </ul>
      {/* 1.1.0 */}
      <h2>
        <LinkToAnchor id="1.1.0">1.1.0</LinkToAnchor>
      </h2>
      <em>Published on 10/09/2024</em>
      <ul>
        <li>
          Allows forms contained in an iframe to be filled in and saved automatically if the iframe is a direct child of
          the main frame and if the iframe's domain name is equal to the page's domain name.
        </li>
      </ul>
      {/* 1.0.0 */}
      <h2>
        <LinkToAnchor id="1.0.0">1.0.0</LinkToAnchor>
      </h2>
      <em>Published on 29/05/2024</em>
      <ul>
        <li>
          <strong>End of support for the old system:</strong> Applications prior to version 7 are no longer compatible
          with the browser extension.
        </li>
        <li>Significant performance improvement when opening the extension</li>
        <li>
          Technical improvement - transition to manifest v3 on chromium browsers: the extension consumes less resources
          than before.
        </li>
      </ul>

      {/* 0.11.0 */}
      <h2>
        <LinkToAnchor id="0.11.0">0.11.0</LinkToAnchor>
      </h2>
      <em>Published on 26/03/2024</em>
      <ul>
        <li>Improves display of unsaved passwords</li>
        <li>Unsaved passwords can be added directly to a vault</li>
        <li>Adds an option to globally disable autosave</li>
        <li>Improves login form submission detection heuristics</li>
      </ul>

      {/* 0.10.5 */}
      <h2>
        <LinkToAnchor id="0.10.5">0.10.5</LinkToAnchor>
      </h2>
      <em>Published on 20/02/2024</em>
      <ul>
        <li>improves password field detection heuristics</li>
        <li>automatic clearing of password strength warning after 6 seconds</li>
      </ul>

      {/* 0.10.4 */}
      <h2>
        <LinkToAnchor id="0.10.4">0.10.4</LinkToAnchor>
      </h2>
      <em>Published 13/02/2024</em>
      <ul>
        <li>fixes changing a shared account password for a PRO vault</li>
        <li>fixes the display of certain elements on certain sites</li>
        <li>
          adds a mechanism to guarantee that a password will not be suggested in the list of unsaved passwords if it
          already exists in a vault to fix the behavior observed on certain sites
        </li>
      </ul>

      {/* 0.10.3 */}
      <h2>
        <LinkToAnchor id="0.10.3">0.10.3</LinkToAnchor>
      </h2>
      <em>Published 12/02/2024</em>
      <ul>
        <li>adds option to disable autosave by default on the current site</li>
      </ul>

      {/* 0.10.2 */}
      <h2>
        <LinkToAnchor id="0.10.2">0.10.2</LinkToAnchor>
      </h2>
      <em>Published 12/02/2024</em>
      <ul>
        <li>improvement of the field detection heuristic to allow (semi-)automatic filling in some special cases</li>
      </ul>

      {/* 0.10.1 */}
      <h2>
        <LinkToAnchor id="0.10.1">0.10.1</LinkToAnchor>
      </h2>
      <em>Published 9/02/2024</em>
      <ul>
        <li>automatic saving of logins and passwords entered manually (Pro and Personal vaults)</li>
        <li>
          management of a port range for communication with the application, and in particular management of multi-user
          RDS sessions
        </li>
        <li>improves form and autofill detection heuristics</li>
        <li>displays alerts about weak passwords when using the password via the extension</li>
      </ul>
    </section>
  );
}

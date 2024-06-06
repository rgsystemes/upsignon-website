import styles from "../notes.module.css";

export default function ExtensionNotes({ params }: { params: { lang: string } }) {
  if (params.lang === "fr") {
    return <FRExtensionNotes />;
  } else {
    return <ENExtensionNotes />;
  }
}

function FRExtensionNotes() {
  return (
    <section className={styles.section}>
      {/* 1.0.0 */}
      <h2>1.0.0</h2>
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
      <h2>0.11.0</h2>
      <em>Publiée le 26/03/2024</em>
      <ul>
        <li>Amélioration de l’affichage des mots de passe non enregistrés</li>
        <li>Les mots de passe non enregistrés peuvent être ajoutés directement dans un coffre-fort</li>
        <li>Ajout d’une option pour désactiver globalement l’enregistrement automatique</li>
        <li>Amélioration de l’heuristique de détection de la soumission des formulaires de connexion</li>
      </ul>

      {/* 0.10.5 */}
      <h2>0.10.5</h2>
      <em>Publiée le 20/02/2024</em>
      <ul>
        <li>amélioration de l’heuristique de détection des champs mot de passe</li>
        <li>effacement automatique de l’avertissement sur la force du mot de passe au bout de 6 secondes</li>
      </ul>

      {/* 0.10.4 */}
      <h2>0.10.4</h2>
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
      <h2>0.10.3</h2>
      <em>Publiée le 12/02/2024</em>
      <ul>
        <li>ajout d’une option pour désactiver l’enregistrement automatique par défaut sur le site actuel</li>
      </ul>

      {/* 0.10.2 */}
      <h2>0.10.2</h2>
      <em>Publiée le 12/02/2024</em>
      <ul>
        <li>
          amélioration de l’heuristique de détection des champs pour permettre le remplissage (semi-)automatique dans
          certains cas particuliers
        </li>
      </ul>

      {/* 0.10.1 */}
      <h2>0.10.1</h2>
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
      {/* 1.0.0 */}
      <h2>1.0.0</h2>
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
      <h2>0.11.0</h2>
      <em>Published on 26/03/2024</em>
      <ul>
        <li>Improves display of unsaved passwords</li>
        <li>Unsaved passwords can be added directly to a vault</li>
        <li>Adds an option to globally disable autosave</li>
        <li>Improves login form submission detection heuristics</li>
      </ul>

      {/* 0.10.5 */}
      <h2>0.10.5</h2>
      <em>Published on 20/02/2024</em>
      <ul>
        <li>improves password field detection heuristics</li>
        <li>automatic clearing of password strength warning after 6 seconds</li>
      </ul>

      {/* 0.10.4 */}
      <h2>0.10.4</h2>
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
      <h2>0.10.3</h2>
      <em>Published 12/02/2024</em>
      <ul>
        <li>adds option to disable autosave by default on the current site</li>
      </ul>

      {/* 0.10.2 */}
      <h2>0.10.2</h2>
      <em>Published 12/02/2024</em>
      <ul>
        <li>improvement of the field detection heuristic to allow (semi-)automatic filling in some special cases</li>
      </ul>

      {/* 0.10.1 */}
      <h2>0.10.1</h2>
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

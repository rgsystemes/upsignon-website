import styles from "../notes.module.css";

export default function ServerNotes({ params }: { params: { lang: string } }) {
  if (params.lang === "fr") {
    return <FRServerNotes />;
  } else {
    return <ENServerNotes />;
  }
}

function FRServerNotes() {
  return (
    <section className={styles.section}>
      {/* 2.1.0 */}
      <h2>2.1.0</h2>
      <em>Publiée le 27/06/2024</em>
      <ul>
        <li>
          correction de la courbe d’évolution de la force des mots de passe avec prise en compte de la suppression des
          coffres et éléments partagés (auparavant, les coffres et éléments partagés supprimés continuaient à compter
          avec leur dernière valeur connue).
        </li>
      </ul>
      {/* 2.0.1 */}
      <h2>2.0.1</h2>
      <em>Publiée le 17/06/2024</em>
      <ul>
        <li>
          les versions de l’application inférieures strictement à la 7.1.1 ne peuvent plus modifier les coffres-forts.
        </li>
      </ul>
      {/* 2.0.0 */}
      <h2>2.0.0</h2>
      <em>Publiée le 17/05/2024</em>
      <p>
        <strong>⚠️ Cette version nécessite node 20 ou ultérieur.</strong>
      </p>
      <ul>
        <li>mise-à-jour des dépendances (node 20 ou ultérieur requis)</li>
        <li>connexion à Microsoft Entra</li>
        <ul>
          <li>
            lors de la création d’un coffre-fort, le serveur peut vérifier si un utilisateur est autorisé en
            interrogeant Microsoft Entra OU en regardant si l’adresse email de l’utilisateur est autorisée (ancienne
            méthode)
          </li>
          <li>
            tous les jours à 1h et 13h, le serveur désactive automatiquement les utilisateurs qui ne sont plus autorisés
            ni via Microsoft Entra ni via une règle de format d’adresse email
          </li>
        </ul>
      </ul>

      {/* 1.11.0 */}
      <h2>1.11.0</h2>
      <em>Publiée le 30/04/2024</em>
      <ul>
        <li>ajoute un mécanisme pour simplifier le changement d’URL du serveur</li>
      </ul>

      {/* 1.10.0 */}
      <h2>1.10.0</h2>
      <em>Publiée le 9/04/2024</em>
      <ul>
        <li>
          les heures d’expiration des codes à usage unique envoyés par le serveur dans les emails de mots de passe
          oubliés ou d’autorisation d’appareil sont désormais affichés à l’heure locale du serveur et non à l’heure UTC.
        </li>
      </ul>

      {/* 1.9.2 */}
      <h2>1.9.2</h2>
      <em>Publiée le 4/04/2024</em>
      <ul>
        <li>correctif sur la vérification de plateforme pour l’enrôlement d’un nouvel appareil</li>
      </ul>

      {/* 1.9.0 */}
      <h2>1.9.0</h2>
      <em>Publiée le 3/04/2024</em>
      <ul>
        <li>
          un mail est automatiquement envoyé à tous les super-administrateurs et administrateurs de la banque lorsqu’un
          utilisateur soumet une demande de réinitialisation de mot de passe
        </li>
        <li>ajoute un paramètre pour configurer les plateformes autorisées, par banque et par utilisateur</li>
        <li>
          ajoute une option pour exiger la validation manuelle d’un administrateur pour l’ajout d’un deuxième appareil
          (désactivé par défaut)
        </li>
        <li>améliore la gestion des types d’appareil</li>
        <li>
          modifie les informations de statut envoyées à UpSignOn (supprime celles qui ne sont plus utiles et ajoute la
          version de nodejs)
        </li>
      </ul>

      {/* 1.8.6 */}
      <h2>1.8.6</h2>
      <ul>
        <li>
          correction sur la demande de réinitialisation de mot de passe maître si une demande antérieure avait déjà été
          faite
        </li>
        <li>
          changement de la valeur par défaut pour l’autorisation d’export CSV (désormais interdit par défaut) NB : ce
          paramètre a dû être réinitialisé pour tous les utilisateurs
        </li>
        <li>correction de la date de dernière session affichée dans la console</li>
      </ul>

      {/* 1.8.5 */}
      <h2>1.8.5</h2>
      <ul>
        <li>
          ajout d’un mécanisme spécifique pour permettre la migration des coffres-forts PRO après leur enrôlement sur
          une application v7
        </li>
        <li>correction sur la route de demande de suppression d’un destinataire d’un coffre-fort partagé</li>
      </ul>
    </section>
  );
}
function ENServerNotes() {
  return (
    <section className={styles.section}>
      {/* 2.1.0 */}
      <h2>2.1.0</h2>
      <em>Published on 27/06/2024</em>
      <ul>
        <li>
          correction of the password strength evolution curve taking into account the deletion of vaults and shared
          elements (previously, deleted vaults and shared elements continued to count with their last known value).
        </li>
      </ul>
      {/* 2.0.1 */}
      <h2>2.0.1</h2>
      <em>Published on 17/06/2024</em>
      <ul>
        <li>versions of the app stricly below 7.1.1 can no longer make changes to vaults.</li>
      </ul>
      {/* 2.0.0 */}
      <h2>2.0.0</h2>
      <em>Published on 17/05/2024</em>
      <p>
        <strong>⚠️ This version requires node 20 or later.</strong>
      </p>
      <ul>
        <li>dependency update (node 20 or later required)</li>
        <li>connection to Microsoft Entra</li>
        <ul>
          <li>
            when creating a vault, the server can check if a user is authorized by querying Microsoft Entra OR by
            looking if the user’s email address is authorized (old method)
          </li>
          <li>
            every day at 1 a.m. and 1 p.m., the server automatically deactivates users who are no longer authorized
            neither via Microsoft Entra nor via an email address format rule
          </li>
        </ul>
      </ul>

      {/* 1.11.0 */}
      <h2>1.11.0</h2>
      <em>Published on 30/04/2024</em>
      <ul>
        <li>adds a mechanism to simplify changing server URL</li>
      </ul>

      {/* 1.10.0 */}
      <h2>1.10.0</h2>
      <em>Published on 09/04/2024</em>
      <ul>
        <li>
          expiration times for one-time codes sent by the server in password emails Forgotten or device permissions are
          now displayed in the server’s local time instead of UTC.
        </li>
      </ul>

      {/* 1.9.2 */}
      <h2>1.9.2</h2>
      <em>Published on 04/04/2024</em>
      <ul>
        <li>fixes platform verification for new device enrollment</li>
      </ul>

      {/* 1.9.0 */}
      <h2>1.9.0</h2>
      <em>Published on 03/04/2024</em>
      <ul>
        <li>
          an email is automatically sent to all super-administrators and administrators of the bank when a user submits
          a password reset request
        </li>
        <li>adds a parameter to configure authorized platforms, per bank and per user</li>
        <li>
          adds an option to require manual validation from an administrator for adding a second device (disabled by
          default)
        </li>
        <li>improves the management of device types</li>
        <li>
          modifies the status information sent to UpSignOn (removes that which are no longer useful and adds the nodejs
          version)
        </li>
      </ul>

      {/* 1.8.6 */}
      <h2>1.8.6</h2>
      <ul>
        <li>correction on the master password reset request if a previous request had already been done</li>
        <li>
          changes the default value for CSV export authorization (now prohibited by default) NB: this setting had to be
          reset for all users
        </li>
        <li>fixes the last session date displayed in the console</li>
      </ul>

      {/* 1.8.5 */}
      <h2>1.8.5</h2>
      <ul>
        <li>
          adds a specific mechanism to allow the migration of PRO vaults after their enrollment on a v7 application
        </li>
        <li>fixes the request route to delete a recipient from a shared vault</li>
      </ul>
    </section>
  );
}

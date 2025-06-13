import { Metadata } from "next";
import { getDictionary } from "../../../../../translations/translations";
import styles from "../notes.module.css";
import { LinkToAnchor } from "../../../components/linkToAnchor/linkToAnchor";
import Link from "next/link";
import { PlatformWarningIcon } from "../../../features/availabilityIcons";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const t = getDictionary(lang);
  return {
    title: t.resources.releaseNotes,
    description: t.releaseNotes.metaDescription,
    robots: "noindex, nofollow",
    alternates: {
      canonical: "https://upsignon.eu/fr/resources/release-notes/server",
      languages: {
        fr: "https://upsignon.eu/fr/resources/release-notes/server",
        en: "https://upsignon.eu/en/resources/release-notes/server",
      },
    },
  };
}

export default async function ServerNotes({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (lang === "fr") {
    return <FRServerNotes />;
  } else {
    return <ENServerNotes />;
  }
}

function FRServerNotes() {
  return (
    <section className={styles.section}>
      {/* 2.6.1 */}
      <h2>
        <LinkToAnchor id="2.6.1">2.6.1</LinkToAnchor>
      </h2>
      <em>Publiée le 13/06/2025</em>
      <ul>
        <li>Mise à jour des dépendances.</li>
      </ul>
      {/* 2.6.0 */}
      <h2>
        <LinkToAnchor id="2.6.0">2.6.0</LinkToAnchor>
      </h2>
      <em>Publiée le 03/06/2025</em>
      <ul>
        <li>
          Ajout d'un paramètre pour autoriser le mode simple pour l'autorisation des extensions de navigateur. (Voir les
          notes de versions de la{" "}
          <Link href="/fr/resources/release-notes/app#7.12.1">version 7.12.1 de l'application</Link>.)
        </li>
      </ul>
      {/* 2.5.0 */}
      <h2>
        <LinkToAnchor id="2.5.0">2.5.0</LinkToAnchor>
      </h2>
      <em>Publiée le 18/02/2025</em>
      <ul>
        <li>Ajout de paramètres pour contrôler les durées de verrouillage automatique maximale et par défaut.</li>
        <li>
          Ajout de 2 niveaux d'accès supplémentaires aux coffres-forts partagés - éditeur et aveugle. Voir les notes de
          version de la <Link href="/fr/resources/release-notes/app#7.11.0">version 7.11.0 de l'application</Link>.
        </li>
      </ul>
      {/* 2.4.0 */}
      <h2>
        <LinkToAnchor id="2.4.0">2.4.0</LinkToAnchor>
      </h2>
      <em>Publiée le 03/10/2024</em>
      <ul>
        <li>
          ajout d'un paramètre pour empêcher l'affichage de la popup de mise-à-jour dans l'application (à partir de la
          version 7.9.0 de l'application)
        </li>
        <li>
          corrige un problème de synchronisation avec Microsoft Entra ID empêchant la désactivation des utilisateurs
        </li>
      </ul>
      {/* 2.3.0 */}
      <h2>
        <LinkToAnchor id="2.3.0">2.3.0</LinkToAnchor>
      </h2>
      <em>Publiée le 19/07/2024</em>
      <ul>
        <li>suppression définitive des coffres PRO non migrés en version 7</li>
        <li>CASSANT : les banques de test sans date d’expiration sont désormais considérées comme expirées</li>
      </ul>
      {/* 2.2.0 */}
      <h2>
        <LinkToAnchor id="2.2.0">2.2.0</LinkToAnchor>
      </h2>
      <em>Publiée le 01/07/2024</em>
      <ul>
        <li>
          correction d’un bug où la validation manuelle d’un admin est demandée dès le premier appareil au lieu du
          deuxième lorsque l’option est activée.
        </li>
        <li>
          les notifications de mot de passe oublié et de validation de deuxième appareil ne sont plus envoyées aux
          superadministrateurs, sauf s’il n’y a aucun administrateur dédié pour la banque.
        </li>
      </ul>
      {/* 2.1.0 */}
      <h2>
        <LinkToAnchor id="2.1.0">2.1.0</LinkToAnchor>
      </h2>
      <em>Publiée le 27/06/2024</em>
      <ul>
        <li>
          correction de la courbe d’évolution de la force des mots de passe avec prise en compte de la suppression des
          coffres et éléments partagés (auparavant, les coffres et éléments partagés supprimés continuaient à compter
          avec leur dernière valeur connue).
        </li>
      </ul>
      {/* 2.0.1 */}
      <h2>
        <LinkToAnchor id="2.0.1">2.0.1</LinkToAnchor>
      </h2>
      <em>Publiée le 17/06/2024</em>
      <ul>
        <li>
          les versions de l’application inférieures strictement à la 7.1.1 ne peuvent plus modifier les coffres-forts.
        </li>
      </ul>
      {/* 2.0.0 */}
      <h2>
        <LinkToAnchor id="2.0.0">2.0.0</LinkToAnchor>
      </h2>
      <em>Publiée le 17/05/2024</em>
      <p>
        <strong>
          <PlatformWarningIcon />
           Cette version nécessite node 20 ou ultérieur.
        </strong>
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
      <h2>
        <LinkToAnchor id="1.11.0">1.11.0</LinkToAnchor>
      </h2>
      <em>Publiée le 30/04/2024</em>
      <ul>
        <li>ajoute un mécanisme pour simplifier le changement d’URL du serveur</li>
      </ul>

      {/* 1.10.0 */}
      <h2>
        <LinkToAnchor id="1.10.0">1.10.0</LinkToAnchor>
      </h2>
      <em>Publiée le 9/04/2024</em>
      <ul>
        <li>
          les heures d’expiration des codes à usage unique envoyés par le serveur dans les emails de mots de passe
          oubliés ou d’autorisation d’appareil sont désormais affichés à l’heure locale du serveur et non à l’heure UTC.
        </li>
      </ul>

      {/* 1.9.2 */}
      <h2>
        <LinkToAnchor id="1.9.2">1.9.2</LinkToAnchor>
      </h2>
      <em>Publiée le 4/04/2024</em>
      <ul>
        <li>correctif sur la vérification de plateforme pour l’enrôlement d’un nouvel appareil</li>
      </ul>

      {/* 1.9.0 */}
      <h2>
        <LinkToAnchor id="1.9.0">1.9.0</LinkToAnchor>
      </h2>
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
          modifie les informations de statut envoyées à UpSignon (supprime celles qui ne sont plus utiles et ajoute la
          version de nodejs)
        </li>
      </ul>

      {/* 1.8.6 */}
      <h2>
        <LinkToAnchor id="1.8.6">1.8.6</LinkToAnchor>
      </h2>
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
      <h2>
        <LinkToAnchor id="1.8.5">1.8.5</LinkToAnchor>
      </h2>
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
      {/* 2.6.1 */}
      <h2>
        <LinkToAnchor id="2.6.1">2.6.1</LinkToAnchor>
      </h2>
      <em>Published on 13/06/2025</em>
      <ul>
        <li>Dependency updates.</li>
      </ul>
      {/* 2.6.0 */}
      <h2>
        <LinkToAnchor id="2.6.0">2.6.0</LinkToAnchor>
      </h2>
      <em>Published on 03/06/2025</em>
      <ul>
        <li>
          Adds a setting to allow the simple mode for authorizing the browser extensions. (See release notes for{" "}
          <Link href="/en/resources/release-notes/app#7.12.1">version 7.12.1 of the application</Link>.)
        </li>
      </ul>
      {/* 2.5.0 */}
      <h2>
        <LinkToAnchor id="2.5.0">2.5.0</LinkToAnchor>
      </h2>
      <em>Published on 18/02/2025</em>
      <ul>
        <li>Adds parameters to control the maximum and default autolock durations.</li>
        <li>
          Adds 2 levels of access to shared vaults - editor and blind. See release notes for{" "}
          <Link href="/en/resources/release-notes/app#7.11.0">version 7.11.0 of the application</Link>.
        </li>
      </ul>
      {/* 2.4.0 */}
      <h2>
        <LinkToAnchor id="2.4.0">2.4.0</LinkToAnchor>
      </h2>
      <em>Published on 03/10/2024</em>
      <ul>
        <li>
          adds a parameter to prevent the display of the app update popup in the app (since version 7.9.0 of the
          application)
        </li>
        <li>fixes an issue when synchronising with Microsoft Entra ID preventing the deactivation of users</li>
      </ul>
      {/* 2.3.0 */}
      <h2>
        <LinkToAnchor id="2.3.0">2.3.0</LinkToAnchor>
      </h2>
      <em>Published on 19/07/2024</em>
      <ul>
        <li>DEFINITIVE DELETION of PRO vaults not migrated to version 7</li>
        <li>BREAKING: test banks without expiration date are now considered expired</li>
      </ul>
      {/* 2.2.0 */}
      <h2>
        <LinkToAnchor id="2.2.0">2.2.0</LinkToAnchor>
      </h2>
      <em>Published on 01/07/2024</em>
      <ul>
        <li>
          Fixed a bug where manual validation from an admin is requested from the first device instead of the second
          when the option is activated.
        </li>
        <li>
          Forgotten password and second device validation notifications are no longer sent to super administrators
          except if if there is no dedicated administrator for the bank.
        </li>
      </ul>
      {/* 2.1.0 */}
      <h2>
        <LinkToAnchor id="2.1.0">2.1.0</LinkToAnchor>
      </h2>
      <em>Published on 27/06/2024</em>
      <ul>
        <li>
          correction of the password strength evolution curve taking into account the deletion of vaults and shared
          elements (previously, deleted vaults and shared elements continued to count with their last known value).
        </li>
      </ul>
      {/* 2.0.1 */}
      <h2>
        <LinkToAnchor id="2.0.1">2.0.1</LinkToAnchor>
      </h2>
      <em>Published on 17/06/2024</em>
      <ul>
        <li>versions of the app stricly below 7.1.1 can no longer make changes to vaults.</li>
      </ul>
      {/* 2.0.0 */}
      <h2>
        <LinkToAnchor id="2.0.0">2.0.0</LinkToAnchor>
      </h2>
      <em>Published on 17/05/2024</em>
      <p>
        <strong>
          <PlatformWarningIcon /> This version requires node 20 or later.
        </strong>
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
      <h2>
        <LinkToAnchor id="1.11.0">1.11.0</LinkToAnchor>
      </h2>
      <em>Published on 30/04/2024</em>
      <ul>
        <li>adds a mechanism to simplify changing server URL</li>
      </ul>

      {/* 1.10.0 */}
      <h2>
        <LinkToAnchor id="1.10.0">1.10.0</LinkToAnchor>
      </h2>
      <em>Published on 09/04/2024</em>
      <ul>
        <li>
          expiration times for one-time codes sent by the server in password emails Forgotten or device permissions are
          now displayed in the server’s local time instead of UTC.
        </li>
      </ul>

      {/* 1.9.2 */}
      <h2>
        <LinkToAnchor id="1.9.2">1.9.2</LinkToAnchor>
      </h2>
      <em>Published on 04/04/2024</em>
      <ul>
        <li>fixes platform verification for new device enrollment</li>
      </ul>

      {/* 1.9.0 */}
      <h2>
        <LinkToAnchor id="1.9.0">1.9.0</LinkToAnchor>
      </h2>
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
          modifies the status information sent to UpSignon (removes that which are no longer useful and adds the nodejs
          version)
        </li>
      </ul>

      {/* 1.8.6 */}
      <h2>
        <LinkToAnchor id="1.8.6">1.8.6</LinkToAnchor>
      </h2>
      <ul>
        <li>correction on the master password reset request if a previous request had already been done</li>
        <li>
          changes the default value for CSV export authorization (now prohibited by default) NB: this setting had to be
          reset for all users
        </li>
        <li>fixes the last session date displayed in the console</li>
      </ul>

      {/* 1.8.5 */}
      <h2>
        <LinkToAnchor id="1.8.5">1.8.5</LinkToAnchor>
      </h2>
      <ul>
        <li>
          adds a specific mechanism to allow the migration of PRO vaults after their enrollment on a v7 application
        </li>
        <li>fixes the request route to delete a recipient from a shared vault</li>
      </ul>
    </section>
  );
}

import { Metadata } from "next";
import { getDictionary } from "../../../../../translations/translations";
import styles from "../notes.module.css";

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const t = getDictionary(params.lang);
  return {
    title: t.resources.releaseNotes,
    description: t.releaseNotes.metaDescription,
    robots: "noindex, nofollow",
    alternates: {
      canonical: "https://upsignon.eu/fr/resources/release-notes/dashboard",
      languages: {
        fr: "https://upsignon.eu/fr/resources/release-notes/dashboard",
        en: "https://upsignon.eu/en/resources/release-notes/dashboard",
      },
    },
  };
}

export default function DashboardNotes({ params }: { params: { lang: string } }) {
  if (params.lang === "fr") {
    return <FRServerNotes />;
  } else {
    return <ENServerNotes />;
  }
}

function FRServerNotes() {
  return (
    <section className={styles.section}>
      {/* 2.2.0 */}
      <h2>2.2.0</h2>
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
      <h2>2.1.0</h2>
      <em>Publiée le 27/06/2024</em>
      <ul>
        <li>mise-à-jour des liens vers les pages de téléchargement et de notes de version</li>
        <li>la liste des éléments d’un dossier partagé est désormais repliable</li>
        <li>compatibilité avec le serveur UpSignOn PRO 2.1.0</li>
      </ul>
      {/* 2.0.2 */}
      <h2>2.0.2</h2>
      <em>Publiée le 30/05/2024</em>
      <ul>
        <li>correctifs d’affichage mineurs d’affichage</li>
        <li>correction de la recherche dans les coffres-forts partagés</li>
      </ul>

      {/* 2.0.1 */}
      <h2>2.0.1</h2>
      <em>Publiée le 21/05/2024</em>
      <ul>
        <li>
          correctif : pour empêcher sa désactivation automatique, il n’est plus possible de modifier l’adresse email
          d’un coffre-fort vers une adresse email non autorisée
        </li>
      </ul>

      {/* 2.0.0 */}
      <h2>2.0.0</h2>
      <em>Publiée le 17/05/2024</em>
      <p>
        <strong>⚠️ Cette version nécessite NodeJS 20 ou ultérieur.</strong>
      </p>
      <ul>
        <li>mise-à-jour des dépendances (node 20 ou ultérieur requis)</li>
        <li>interface de configuration de Microsoft Entra</li>
        <ul>
          <li>affichage des utilisateurs désactivés car supprimés de Microsoft Entra</li>
        </ul>
        <li>
          les coffres-forts non migrés (c’est-à-dire n’utilisant pas l’application version 7) sont triés en premier et
          mis en exergue
        </li>
      </ul>

      {/* 1.15.0 */}
      <h2>1.15.0</h2>
      <em>Publiée le 30/04/2024</em>
      <ul>
        <li>ajoute un mécanisme pour simplifier le changement d’URL du serveur</li>
        <li>
          correctif: lors de l’envoi d’email aux utilisateurs via la console, si la liste d’emails contient des emails
          récupérés par le filtre “non migré v7” ou “utilisateurs msi”, ces emails sont utilisées comme destinataires
        </li>
      </ul>

      {/* 1.14.0 */}
      <h2>1.14.0</h2>
      <em>Publiée le 09/04/2024</em>
      <ul>
        <li>
          les heures d’expiration des codes à usage unique envoyés par le serveur dans les emails de mots de passe
          oubliés ou d’invitation administrateur sont désormais affichés à l’heure locale du serveur et non à l’heure
          UTC.
        </li>
        <li>ajout des liens d’inscription à nos newsletters techniques et admin</li>
      </ul>

      {/* 1.13.1 */}
      <h2>1.13.1</h2>
      <em>Publiée le 04/04/2024</em>
      <ul>
        <li>affichage de l’email de l’admin qui autorise la réinitialisation de mot de passe d’un utilisateur</li>
      </ul>

      {/* 1.13.0 */}
      <h2>1.13.0</h2>
      <em>Publiée le 03/04/2024</em>
      <ul>
        <li>ajoute une fonction pour récupérer les utilisateurs ayant une version msi de l’application sur Windows</li>
        <li>
          ajoute une fonction pour récupérer les utilisateurs n’ayant pas encore fait la mise-à-jour de leurs données
          vers la version 7
        </li>
        <li>ajoute une interface pour configurer les plateformes autorisées, par banque et par utilisateur.</li>
        <li>
          ajoute une option pour exiger la validation manuelle d’un administrateur pour l’ajout d’un deuxième appareil
          (désactivé par défaut).
        </li>
        <li>améliore l’affichage des types d’appareils et l’affichage des options de banque et d’utilisateur</li>
        <li>
          superadmin / paramètres : ajoute un indicateur de validité de la chaîne de certification du serveur UpSignOn
          PRO
        </li>
        <li>mise-à-jour des dépendances et correctifs de sécurité</li>
      </ul>

      {/* 1.12.0 */}
      <h2>1.12.0</h2>
      <em>Publiée le 20/12/2023</em>
      <ul>
        <li>
          suppression de la page dépréciée “Comptes partagés” du menu et ajout d’un lien vers cette page depuis la page
          “Coffres-forts partagés” (avant suppression définitive d’ici quelques mois)
        </li>
        <li>déplacement des liens utiles vers la page “Vue d’ensemble”</li>
        <li>ajout des liens vers</li>
        <ul>
          <li>les tutoriels</li>
          <li>les notes de version</li>
          <li>la page de téléchargements</li>
        </ul>
      </ul>

      {/* 1.11.0 */}
      <h2>1.11.0</h2>
      <em>Publiée le 13/12/2023</em>
      <ul>
        <li>ajout de la page notes de version</li>
        <li>page “Extracts et communications” renommée en “Autres”</li>
        <li>
          mise à jour de l’affichage du paramètre “export CSV” : il est vert si l’export CSV est désactivé, ce qui est
          le paramètre le plus sécurisé, et orange sinon, pour alerter sur un choix moins fort
        </li>
        <li>correction de l’affichage des dates de dernière session</li>
        <li>
          ajout du token de réinitialisation de mot de passe après son approbation pour éviter les blocages en cas de
          problème sur l’envoi des emails
        </li>
        <li>
          correctif sur la saisie des adresses email autorisées sur une banque : les espaces ne sont plus pris en compte
          pour éviter les erreurs de saisie
        </li>
        <li>suppression des paramètres openID obsolètes et non utilisés</li>
      </ul>
    </section>
  );
}
function ENServerNotes() {
  return (
    <section className={styles.section}>
      {/* 2.2.0 */}
      <h2>2.2.0</h2>
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
      <h2>2.1.0</h2>
      <em>Published on 27/06/2024</em>
      <ul>
        <li>updated links to download and release notes pages</li>
        <li>the list of items in a shared folder is now collapsible</li>
        <li>compatibility with UpSignOn PRO 2.1.0 server</li>
      </ul>

      {/* 2.0.2 */}
      <h2>2.0.2</h2>
      <em>Published on 30/05/2024</em>
      <ul>
        <li>minor display fixes</li>
        <li>fixes search in shared vaults</li>
      </ul>

      {/* 2.0.1 */}
      <h2>2.0.1</h2>
      <em>Published on 21/05/2024</em>
      <ul>
        <li>
          fix: to prevent its automatic deactivation, it is no longer possible to modify a vault’s email address to an
          unauthorized email address
        </li>
      </ul>

      {/* 2.0.0 */}
      <h2>2.0.0</h2>
      <em>Published on 17/05/2024</em>
      <p>
        <strong>⚠️ This version requires NodeJS 20 or later.</strong>
      </p>
      <ul>
        <li>dependency update (node 20 or later required)</li>
        <li>Microsoft Entra configuration interface</li>
        <ul>
          <li>display of disabled users because they were deleted from Microsoft Entra</li>
        </ul>
        <li>non-migrated vaults (i.e. not using the version 7 application) are sorted first and highlighted</li>
      </ul>

      {/* 1.15.0 */}
      <h2>1.15.0</h2>
      <em>Published on 30/04/2024</em>
      <ul>
        <li>adds a mechanism to simplify changing server URL</li>
        <li>
          fix: when sending email to users via console, if the email list contains emails recovered by the “non-migrated
          v7” or “msi users” filter, these emails are used as recipients
        </li>
      </ul>

      {/* 1.14.0 */}
      <h2>1.14.0</h2>
      <em>Published on 09/04/2024</em>
      <ul>
        <li>
          expiration times for one-time codes sent by the server in password emails forgotten or admin invitations are
          now displayed at the server’s local time and not at the local time UTC.
        </li>
        <li>adds of subscription links to our technical and admin newsletters</li>
      </ul>

      {/* 1.13.1 */}
      <h2>1.13.1</h2>
      <em>Published on 04/04/2024</em>
      <ul>
        <li>display of the admin email which authorizes the reset of a user’s password</li>
      </ul>

      {/* 1.13.0 */}
      <h2>1.13.0</h2>
      <em>Published on 03/04/2024</em>
      <ul>
        <li>adds a function to retrieve users with an msi version of the application on Windows</li>
        <li>adds a function to retrieve users who have not yet updated their data to version 7</li>
        <li>adds an interface to configure authorized platforms, by bank and by user</li>
        <li>
          adds an option to require manual validation from an administrator for adding a second device (disabled by
          default)
        </li>
        <li>improves the display of device types and the display of bank and user options</li>
        <li>superadmin / settings: adds a validity indicator for the UpSignOn PRO server certification chain</li>
        <li>dependency updates and security fixes</li>
      </ul>

      {/* 1.12.0 */}
      <h2>1.12.0</h2>
      <em>Published on 20/12/2023</em>
      <ul>
        <li>
          removes the deprecated “Shared Accounts” page from the menu and adds a link to this page from the “Shared
          vaults” page (before permanent deletion within a few months)
        </li>
        <li>moves useful links to the “Overview” page</li>
        <li>adds links to</li>
        <ul>
          <li>tutorials</li>
          <li>release notes</li>
          <li>the downloads page</li>
        </ul>
      </ul>

      {/* 1.11.0 */}
      <h2>1.11.0</h2>
      <em>Published on 12/13/2023</em>
      <ul>
        <li>adds a release notes page</li>
        <li>“Extracts and communications” page renamed to “Others”</li>
        <li>
          updates the display of the “CSV export” parameter: it is green if CSV export is disabled, which is the most
          secure setting, and orange otherwise, to alert you to a less strong choice
        </li>
        <li>fixes the display of last session dates</li>
        <li>
          adds the password reset token after its approval to avoid blockages in the event of problem sending emails
        </li>
        <li>
          fixes the entry of email addresses authorized on a bank: spaces are no longer taken into account to avoid
          entry errors
        </li>
        <li>removing obsolete and unused openID parameters</li>
      </ul>
    </section>
  );
}

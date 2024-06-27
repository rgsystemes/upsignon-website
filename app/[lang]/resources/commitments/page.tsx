import { Metadata } from "next";
import styles from "../page.module.css";

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  if (params.lang === "fr") {
    return {
      title: "Nos engagements contractuels",
      description:
        "Résumé simplifié de nos engagements en terme de RGPD, de maintenance, d'hébergement, de support et autres garanties.",
      robots: "noindex, nofollow",
    };
  } else {
    return {
      title: "Our contractual commitments",
      description:
        "Simplified summary of our commitments in terms of GDPR, maintenance, hosting, support and other guarantees.",
      robots: "noindex, nofollow",
    };
  }
}

export default function Page({ params }: { params: { lang: string } }) {
  return <>{params.lang === "fr" ? <FRCommitments /> : <ENCommitments />}</>;
}

function FRCommitments() {
  return (
    <article className={styles.article}>
      <header>
        <h1>Nos engagements contractuels</h1>
        <em>
          Attention, ceci est un résumé simplifié de nos engagements mais ne remplace pas nos CGU et CGV qui seules
          peuvent nous être opposées.
        </em>
      </header>
      <h2>RGPD</h2>
      <ul>
        <li>Aucune donnée revendue, évidemment.</li>
        <li>Pas d’outil de statistiques (trackeur) intégré à l’application</li>
        <li>
          Anonymisation totale des données enregistrées sur le serveur PERSO (connaissance nulle)
          <ul>
            <li>l’adresse IP de l’utilisateur est susceptible d’être conservée dans les logs du serveur</li>
          </ul>
        </li>
        <li>
          Minimisation des données accessibles en clair sur le serveur UpSignOn PRO
          <ul>
            <li>adresse email</li>
            <li>appareils autorisés</li>
            <li>statistiques de force des mots de passe par coffre-fort et par coffre-fort partagé</li>
            <li>url et login des comptes des coffres-forts partagés</li>
            <li>l’adresse IP de l’utilisateur est susceptible d’être conservée dans les logs du serveur</li>
          </ul>
        </li>
        <li>
          Nos sous-traitants
          <ul>
            <li>hébergement : Scaleway (entreprise française)</li>
            <li>
              gestion des logs d’erreur : Sentry (société américaine)
              <ul>
                <li>
                  ces logs sont susceptibles de contenir des informations personnelles (adresse IP, adresse email,
                  identifiants d’appareil, type d’appareil, nom d’appareil).
                </li>
              </ul>
            </li>
            <li>
              gestion de ticket de support : Zendesk (société américaine)
              <ul>
                <li>
                  ces tickets sont susceptibles de contenir des informations personnelles (adresse email, nom, prénom,
                  ainsi que les informations sur la description du problème).
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>

      <h2>Mises à jour</h2>
      <p>Les futures mises-à-jour de l’application, du serveur ou de l’extension seront toujours gratuites.</p>
      <p>
        Nous nous réservons cependant le droit d’ajouter certaines fonctionnalités payantes, désactivées par défaut, qui
        ne remettent pas en question les fonctionnalités déjà existantes.
      </p>
      <h2>Transfert vers une autre solution</h2>
      <p>
        L’export CSV vous permet d’exporter vos mots de passe vers une autre solution. Cette fonctionnalité ne sera
        jamais supprimée et ne sera jamais payante. (Elle est désactivée par défaut pour les coffres-forts PRO pour des
        raisons de sécurité, mais peut être activée à tout moment depuis la console de supervision).
      </p>

      <h2>Hébergement SAAS</h2>
      <ul>
        <li>
          <strong>Hébergement</strong> par une entreprise française (Scaleway) sur des datacenters en France.
        </li>
        <li>
          <strong>Engagement de Niveau de Service :</strong> 99,6% du temps 24h/24h, 7j/7j, sous réserve des éventuelles
          pannes et interventions de maintenance nécessaires au bon fonctionnement du service, sauf en cas de force
          majeure. En cas d’interruption du service, UpSignOn en informera le client dans les meilleurs délais.
        </li>
        <li>
          <strong>Plan de Continuité d’Activité :</strong>
          <ul>
            <li>
              la continuité de service est rendue possible grâce au mode Hors-Ligne activé par défaut sur les
              coffres-forts PRO. En cas d’indisponibilité du serveur, l’application affiche la dernière version connue
              des données. La modification et synchronisation des coffres-forts ne sont plus possibles, mais les
              utilisateurs conservent l’accès en lecture à leurs données.
            </li>
            <li>
              il n’y a pas de système côté serveur pour assurer une continuité de service immédiate en cas de problème
              majeur.
            </li>
          </ul>
        </li>
        <li>
          <strong>Plan de Reprise d’Activité :</strong>
          <ul>
            <li>
              Un serveur de secours, situé physiquement dans un autre datacenter en France, et n’acceptant aucune
              requête en temps normal afin d’éviter les intrusions, est prêt à être branché si le serveur principal
              faisait défaut. Le serveur de secours récupère l’état de la base de données toutes les heures. Il est
              préconfiguré et maintenu à jour pour être totalement prêt en cas de besoin.
            </li>
            <li>
              En cas de défaut du serveur principal (destruction du datacenter, compromission), l’activation du serveur
              de secours nécessiterait un changement de paramètre manuel sur le serveur (5 minutes) et un changement des
              paramètres DNS (5 minutes). Le service serait ensuite rétabli en 1 heure maximum, le temps que les
              nouveaux paramètres DNS prennent effet. Ce délai pourrait être éventuellement raccourci manuellement par
              les utilisateurs en vidant le cache DNS de leurs machines.
            </li>
            <li>
              En cas d’activation de ce Plan de Reprise d’Activité, les modifications effectuées moins d’une heure avant
              l’interruption de service seraient malheureusement perdues.
            </li>
            <li>
              Si le serveur de secours venait à être également détruit ou compromis, nous serions capable de rebâtir un
              serveur opérationnel en 4h ouvrés et de de remettre en place une sauvegarde des données de la veille, sous
              réserve de disponibilité de nouvelles machines dans un autre datacenter.
            </li>
          </ul>
        </li>
      </ul>
      <h2>Support et incidents</h2>
      <p>
        Notre support est joignable par email ou téléphone du lundi au vendredi hors jours fériés de 9h à 12h et de 14h
        à 17h30 (clients PRO uniquement).
      </p>
      <p>Définitions</p>
      <ul>
        <li>Incident majeur : l’accès aux coffres-forts n’est plus possible et il n’existe aucun contournement.</li>
        <li>
          Incident modéré : l’accès aux coffre-forts est possible mais des fonctionnalités essentielles ne sont plus
          disponibles ou sont fortement dégradées.
        </li>
        <li>
          Incident mineur : il existe un contournement acceptable ou la fonctionnalité concernée n’est pas essentielle.
        </li>
      </ul>
      <table>
        <thead>
          <tr>
            <th>
              <strong>Priorité</strong>
            </th>
            <th>
              <strong>Prise en charge</strong>
            </th>
            <th>
              <strong>Analyse</strong>
            </th>
            <th>
              <strong>Résolution</strong>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Majeur</td>
            <td>1h</td>
            <td>2h</td>
            <td>4h (hors délais de certification par les stores)</td>
          </tr>
          <tr>
            <td>Modéré</td>
            <td>1h</td>
            <td>2j ouvrés</td>
            <td>4j ouvrés (hors délais de certification par les stores)</td>
          </tr>
          <tr>
            <td>Mineur</td>
            <td>1j</td>
            <td>4j ouvrés</td>
            <td>8j ouvrés (hors délais de certification par les stores)</td>
          </tr>
        </tbody>
      </table>

      <p>
        En cas d’incident impliquant le serveur, une solution de contournement acceptable consisterait dans la plupart
        des cas à revenir à une version antérieure du serveur. Ceci nécessiterait une action manuelle pour les clients
        ayant opté pour l’auto-hébergement.
      </p>
      <p>
        En cas d’incident impliquant l’application, une solution de contournement acceptable consisterait la plupart du
        temps à forcer manuellement la réinstallation d’une version antérieure de l’application. Ce contournement est
        possible sur Windows et Linux, mais pas sur les autres plateformes.
      </p>

      <h2>Assurance</h2>
      <ul>
        <li>Assurance Responsabilité Civile Professionnelle et Cyber : 100 000€ par an</li>
        <li>Assurance Responsabilité Civile d’Exploitation : 8 000 000€ par sinistre</li>
      </ul>
      <h2>Pérennité de la solution</h2>
      <p>
        Si l’entreprise UpSignOn devait un jour être liquidée, le code de l’application serait rendu open source sur
        Github afin de permettre sa maintenance par la communauté.
      </p>
    </article>
  );
}
function ENCommitments() {
  return (
    <article className={styles.article}>
      <header>
        <h1>Our contractual commitments</h1>
        <em>
          Please note, this is a simplified summary of our commitments but does not replace our Terms of Service and
          Terms of Sales which alone can be opposed to us.
        </em>
      </header>
      <h2>GDPR</h2>
      <ul>
        <li>No data resold, obviously.</li>
        <li>No statistics tool (tracker) integrated into the application</li>
        <li>
          Total anonymization of data recorded on the PERSO server (zero knowledge)
          <ul>
            <li>the user’s IP address may be stored in the server logs</li>
          </ul>
        </li>
        <li>
          Minimization of data accessible in clear text on the UpSignOn PRO server
          <ul>
            <li>email address</li>
            <li>authorized devices</li>
            <li>password strength statistics by vault and shared vault</li>
            <li>url and login of shared vault accounts</li>
            <li>the user’s IP address may be stored in the server logs</li>
          </ul>
        </li>
        <li>
          Our subcontractors
          <ul>
            <li>hosting: Scaleway (French company)</li>
            <li>
              error log management: Sentry (American company)
              <ul>
                <li>
                  these logs may contain personal information (IP address, email address, device identifiers, device
                  type, device name).
                </li>
              </ul>
            </li>
            <li>
              support ticket management: Zendesk (American company)
              <ul>
                <li>
                  these tickets may contain personal information (email address, last name, first name, as well as
                  information on the description of the problem).
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>

      <h2>Updates</h2>
      <p>Future updates to the application, server or extension will always be free.</p>
      <p>
        However, we reserve the right to add certain paid features, disabled by default, which do not remove or prevent
        the use of already existing functionalities.
      </p>
      <h2>Transfer to another solution</h2>
      <p>
        CSV export allows you to export your passwords to another solution. This feature will never be deleted and will
        never be charged for. (It is disabled by default for PRO vaults for security reasons, but can be activated at
        any time from the supervision console).
      </p>

      <h2>SAAS Hosting</h2>
      <ul>
        <li>
          <strong>Hosted</strong> by a French company (Scaleway) on data centers in France.
        </li>
        <li>
          <strong>Service Level Agreement:</strong> 99.6% of the time 24 hours a day, 7 days a week, subject to any
          breakdowns and maintenance interventions necessary for the proper functioning of the service, except in cases
          of force majeure. In the event of an interruption of the service, UpSignOn will inform the customer as soon as
          possible.
        </li>
        <li>
          <strong>Business continuity plan:</strong>
          <ul>
            <li>
              continuity of service is made possible thanks to the Offline mode activated by default on the PRO vaults.
              In case of server unavailability, the application displays the last known version of the data.
              Modification and synchronization of vaults is no longer possible, but the users retain read access to
              their data.
            </li>
            <li>
              there is no server-side system to ensure immediate continuity of service in the event of a force majeure.
            </li>
          </ul>
        </li>
        <li>
          <strong>Disaster recovery plan:</strong>
          <ul>
            <li>
              A backup server, physically located in another data center in France, and not accepting any request in
              normal times in order to avoid intrusions, is ready to be connected in the event of a fault on the main.
              The standby server retrieves database status every hour. It is preconfigured and kept up to date to be
              fully ready when needed.
            </li>
            <li>
              In the event of a fault in the main server (destruction of the data center, compromise), the activation of
              the server backup would require a manual parameter change on the server (5 minutes) and a change of DNS
              settings (5 minutes). The service would then be restored in 1 hour maximum, the time for the new DNS
              settings to take effect. This period could possibly be shortened manually by users by clearing the DNS
              cache of their machines.
            </li>
            <li>
              In the event of activation of this disaster recovery plan, modifications made less than one hour before
              the service interruption would unfortunately be lost.
            </li>
            <li>
              If the backup server were also destroyed or compromised, we would be able to rebuild an operational server
              in 4 working hours and to put back in place a backup of the data from the day before, under reserve of
              availability of new machines in another data center.
            </li>
          </ul>
        </li>
      </ul>
      <h2>Support and incidents</h2>
      <p>
        Our support can be reached by email or phone from Monday to Friday, excluding public holidays, from 9 a.m. to 12
        p.m. and 2 p.m. at 5:30 p.m (french hours). (PRO customers only).
      </p>
      <p>Definitions</p>
      <ul>
        <li>Major incident: access to the vaults is no longer possible and there is no workaround.</li>
        <li>
          Moderate incident: access to the vaults is possible but essential functionalities are not no longer available
          or are significantly degraded.
        </li>
        <li>Minor issue: There is an acceptable workaround or the affected functionality is not essential.</li>
      </ul>
      <table>
        <thead>
          <tr>
            <th>
              <strong>Priority</strong>
            </th>
            <th>
              <strong>Support</strong>
            </th>
            <th>
              <strong>Analysis</strong>
            </th>
            <th>
              <strong>Resolution</strong>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Major</td>
            <td>1h</td>
            <td>2h</td>
            <td>4 hours (excluding certification deadlines by stores)</td>
          </tr>
          <tr>
            <td>Moderate</td>
            <td>1h</td>
            <td>2 working days</td>
            <td>4 working days (excluding certification deadlines by stores)</td>
          </tr>
          <tr>
            <td>Minor</td>
            <td>1d</td>
            <td>4 working days</td>
            <td>8 working days (excluding certification deadlines by stores)</td>
          </tr>
        </tbody>
      </table>

      <p>
        In the event of an incident involving the server, an acceptable workaround would be, in most cases, to revert to
        an earlier version of the server. This would require manual action for the customers who have opted for
        self-hosting.
      </p>
      <p>
        In the event of an incident involving the application, an acceptable workaround would be, most of the time, to
        manually force the reinstallation of an earlier version of the application. This workaround is possible on
        Windows and Linux, but not on other platforms.
      </p>

      <h2>Insurance</h2>
      <ul>
        <li>Professional Civil Liability and Cyber Insurance: €100,000 per year</li>
        <li>Operating Civil Liability Insurance: €8,000,000 per claim</li>
      </ul>
      <h2>Sustainability of the solution</h2>
      <p>
        If the UpSignOn company were to be liquidated some day, the application code would be made open source on Github
        to allow its maintenance by the community.
      </p>
    </article>
  );
}

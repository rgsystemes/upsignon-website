import { Metadata } from "next";
import FeatureSection from "./featureSection";
import CompatibilityTable from "./compatibilityTable";
import styles from "./page.module.css";
import proPersoVaultsImg from "../../../public/images/pro-perso-vaults.png";
import passwordScore from "../../../public/images/password-score.png";

export const metadata: Metadata = {
  title: "Fonctionnalités",
};

export default function Page() {
  return (
    <div className={styles.content}>
      <h1>Fonctionnalités</h1>
      <FeatureSection
        title="Coffres-forts PRO & PERSO"
        platforms={{
          ios: true,
          android: true,
          windows: true,
          macos: true,
          linux: true,
          chromeos: true,
        }}
        tags={null}
        summary="UpSignOn vous propose deux types de coffres-forts, tous les deux semblables dans leur interface utilisateur, mais différents techniquement."
        details={[
          "Le coffre-fort PERSO est conçu pour votre usage privé, non professionnel. Il est totalement sécurisé et privé par conception. En revanche, son système de partage de secrets n’est pas adapté aux équipes de plus de quelques personnes.",
          "Les coffres-forts PRO sont proposés par votre employeur ou responsable de la sécurité informatique pour vous donner les moyens d’atteindre 100% de mots de passe forts et uniques. Votre DSI ou RSSI peut suivre l’avancement de cet objectif depuis la console de supervision qui lui donne accès à la force des mots de passe enregistrés dans les coffres-forts PRO. Cette console ne donne bien sûr pas accès à vos mots de passe et autres secrets directement. Par ailleurs, avec les coffres-forts PRO, il vous sera beaucoup plus facile de partager des secrets avec vos collègues en saisissant simplement leur adresse email.",
        ]}
        imageSrc={proPersoVaultsImg}
        imageAlt="Capture d'écran montrant les coffres-forts PRO et PERSO dans l'application."
        techFocus={{
          title: "Coffres-forts PRO vs coffres-forts PERSO",
          href: "/resources/technical-details/pro-vs-perso",
        }}
      />
      <FeatureSection
        title="Disponible sur smartphones, tablettes et ordinateurs"
        platforms={null}
        tags={{ pro: true, perso: true }}
        summary={null}
        details={[
          "Accédez à vos mots de passe en toute sécurité sur tous vos appareils. L'interface reste exactement la même sur toutes les tailles d'écran.",
        ]}
        imageSrc={proPersoVaultsImg}
        imageAlt="Captures d'écran de l'application sur un smartphone, une tablette et un ordinateur."
        techFocus={null}
      >
        <CompatibilityTable />
      </FeatureSection>
      <FeatureSection
        title="Synchronisation automatique entre vos appareils"
        platforms={{
          ios: true,
          android: true,
          windows: true,
          macos: true,
          linux: true,
          chromeos: true,
        }}
        tags={{ pro: true, perso: true }}
        summary={null}
        details={[
          "Les modifications que vous faites sur un appareil sont automatiquement synchronisées avec vos autres appareils autorisés. Il n’y a pas de limite au nombre d’appareils autorisés.",
        ]}
        imageSrc={proPersoVaultsImg}
        imageAlt="TODO"
        techFocus={null}
      />
      <h2 className={styles.page_h2}>Gestion de vos mots de passe, TOTP et données bancaires</h2>
      <FeatureSection
        title="Ajout de comptes internet illimité"
        platforms={{
          ios: true,
          android: true,
          windows: true,
          macos: true,
          linux: true,
          chromeos: true,
        }}
        tags={{ pro: true, perso: true }}
        summary={null}
        details={[
          "Dans UpSignOn, vous pouvez ajouter autant de comptes internet que vous le souhaitez, y compris dans les coffres-forts PERSO qui sont gratuits. Typiquement, vous y enregistrerez le mot de passe et l’adresse de chacun de vos sites web.",
        ]}
        imageSrc={proPersoVaultsImg}
        imageAlt="TODO"
        techFocus={null}
      />
      <FeatureSection
        title="Ajout de codes illimité"
        platforms={{
          ios: true,
          android: true,
          windows: true,
          macos: true,
          linux: true,
          chromeos: true,
        }}
        tags={{ pro: true, perso: true }}
        summary={null}
        details={[
          "Vous pouvez également enregistrer des codes dans votre coffre-fort (code d’immeuble, de cadenas, d’alarme, etc.) Leur affichage est plus simple que celui des comptes internet.",
        ]}
        imageSrc={proPersoVaultsImg}
        imageAlt="TODO"
        techFocus={null}
      />
      <FeatureSection
        title="Vue rapide ergonomique, toutes les actions à portée de main"
        platforms={{
          ios: true,
          android: true,
          windows: true,
          macos: true,
          linux: true,
          chromeos: true,
        }}
        tags={{ pro: true, perso: true }}
        summary={null}
        details={[
          "Votre coffre-fort affiche la liste de vos mots de passe et codes de façon assez condensée de façon à garder une interface simple et adaptée aux petits écrans.",
          "Vous pouvez consulter le contenu de vos informations de façon très intuitive et ergonomique sans changer de page. Toutes les actions que vous pourriez vouloir faire sont à portée de main. Copier un mot de passe, ouvrir un site dans votre navigateur, consulter vos notes.",
        ]}
        imageSrc={proPersoVaultsImg}
        imageAlt="TODO"
        techFocus={null}
      />
      <FeatureSection
        title="Évaluation de la force des mots de passe"
        platforms={{
          ios: true,
          android: true,
          windows: true,
          macos: true,
          linux: true,
          chromeos: true,
        }}
        tags={{ pro: true, perso: true }}
        summary="Enregistrer vos mots de passe dans un coffre pour ne pas les oublier, c’est bien, mais utiliser des mots de passe forts et uniques, c’est mieux ! Lisez notre article sur le sujet." // TODO link to article
        details={[
          "UpSignOn calcul un score de sécurité sur chacun de vos mots de passe (rouge, orange ou vert). Ce score tient compte d’une part de la résistance intrinsèque du mot de passe à une tentative d’extraction, et d’autre part du nombre d’occurrences du même mot de passe dans vos autres comptes. (Plus de détails techniques ici).",
          "Les mots de passe qui méritent d’être changés vont apparaître en rouge ou en orange dans votre coffre-fort. Passez tous vos mots de passe en vert. Ce n’est pas un gros effort mais cela aura un énorme impact positif sur votre cyber-sécurité !",
        ]}
        imageSrc={passwordScore}
        imageAlt="Capture d'écran des scores de différents mots de passe évalués par l'application."
        techFocus={null}
      />
      <FeatureSection
        title="Générateur de mots de passe et de phrases de passe"
        platforms={{
          ios: true,
          android: true,
          windows: true,
          macos: true,
          linux: true,
          chromeos: true,
        }}
        tags={{ pro: true, perso: true }}
        summary="Pour vraiment renforcer vos mots de passe, l’idéal est d’utiliser des mots de passe aléatoires, générés par UpSignOn."
        details={[
          "UpSignOn vous permet donc de générer plusieurs types de mots de passe aléatoires en vous laissant choisir leur longueur. L’ANSSI recommande désormais au moins 12 caractères. UpSignOn est paramétré par défaut sur 16 caractères mais surtout n’hésitez pas à augmenter cette longueur, votre mot de passe n’en sera que plus robuste.",
          "UpSignOn vous propose également un générateur de phrases de passe, c’est-à-dire une suite de mots choisis au hasard dans le dictionnaire. L’intérêt d’une phrase de passe est qu’il y a beaucoup de caractères (donc c’est très résistant), tout en étant relativement facile à mémoriser. Nous vous conseillons d’utiliser une phrase de passe notamment pour votre session Windows / Apple et pour votre mot de passe maître de coffre-fort.",
        ]}
        imageSrc={passwordScore}
        imageAlt="Capture d'écran du générateur de mots de passe."
        techFocus={null}
      />
      <FeatureSection
        title="Historique des mots de passe"
        platforms={{
          ios: true,
          android: true,
          windows: true,
          macos: true,
          linux: true,
          chromeos: true,
        }}
        tags={{ pro: true, perso: true }}
        summary={null}
        details={[
          "N’ayez plus peur des mauvaises manipulations ! UpSignOn conserve l’historique de vos mots de passe. Donc si quelque chose s’est mal passé, vous pouvez facilement revenir sur une version précédente de votre mot de passe.",
        ]}
        imageSrc={passwordScore}
        imageAlt="Capture d'écran de l'historique des mots de passe"
        techFocus={null}
      />
      <FeatureSection
        title="Gestion de plusieurs URLs (adresses internet)"
        platforms={{
          ios: true,
          android: true,
          windows: true,
          macos: true,
          linux: true,
          chromeos: true,
        }}
        tags={{ pro: true, perso: true }}
        summary={null}
        details={[
          "UpSignOn vous permet d’associer plusieurs urls à un même compte. C’est pratique dans beaucoup de cas, par exemple pour que votre compte Google soit associé à l’url de Gmail, mais aussi à l’url de Google Drive, etc.",
          "Votre coffre-fort UpSignOn vous sert donc aussi de liste de favoris et de raccourcis !",
        ]}
        imageSrc={passwordScore}
        imageAlt="Capture d'écran d'un compte ayant enregistré plusieurs URLs."
        techFocus={null}
      />
      <FeatureSection
        title="Champ notes (texte libre) pour chaque compte ou code"
        platforms={{
          ios: true,
          android: true,
          windows: true,
          macos: true,
          linux: true,
          chromeos: true,
        }}
        tags={{ pro: true, perso: true }}
        summary={null}
        details={[
          "Pour chaque compte et code de votre coffre-fort, vous pouvez ajouter des notes libres. Ces notes sont donc sécurisées et vous pouvez y stocker des informations secrètes, comme par exemple des codes de récupération, ou tout autre information utile.",
        ]}
        imageSrc={passwordScore}
        imageAlt="Capture d'écran d'une note."
        techFocus={null}
      />
      <FeatureSection
        title="Gestion des TOTP"
        platforms={{
          ios: true,
          android: true,
          windows: true,
          macos: true,
          linux: true,
          chromeos: true,
        }}
        tags={{ pro: true, perso: true }}
        summary={null}
        details={[
          "Les TOTP (Timed-One-Time-Passwords) sont un système de génération de codes à usage unique souvent utilisé comme deuxième facteur d’authentification. Le protocole TOTP est très sécurisé car il repose sur une preuve de possession (vous possédez votre smartphone).",
          "En vous permettant d’enregistrer des TOTP dans votre coffre-fort, UpSignOn vous permet non seulement d’avoir un seul outil pour gérer vos mots de passe et vos TOTP, mais également de ne plus être dépendant de votre smartphone lorsqu’on vous demande une validation sur votre ordinateur.",
        ]}
        imageSrc={passwordScore}
        imageAlt="Capture d'écran d'un TOTP."
        techFocus={null}
      >
        <div>Comment configurer un TOTP dans UpSignOn ?</div>
        {/* TODO */}
      </FeatureSection>
      <FeatureSection
        title="Gestion de vos informations bancaires"
        platforms={{
          ios: true,
          android: true,
          windows: true,
          macos: true,
          linux: true,
          chromeos: true,
        }}
        tags={{ pro: true, perso: true }}
        summary={null}
        details={[
          "Facilitez le remplissage des formulaires de paiement sur le web en enregistrant vos RIB et les détails de vos cartes bancaires dans votre coffre-fort UpSignOn.",
        ]}
        imageSrc={passwordScore}
        imageAlt="Capture d'écran de la page données bancaires."
        techFocus={null}
      />
      <h2 className={styles.page_h2}>Partagez vos identifiants</h2>
      <FeatureSection
        title="(PERSO) Gestion de contacts de confiance"
        platforms={{
          ios: true,
          android: true,
          windows: true,
          macos: true,
          linux: true,
          chromeos: true,
        }}
        tags={{ pro: false, perso: true }}
        summary={null}
        details={["TODO"]}
        imageSrc={passwordScore}
        imageAlt="Capture d'écran TODO"
        techFocus={null}
      />
      <FeatureSection
        title="Partage sécurisé en famille ou entre collègues"
        platforms={{
          ios: true,
          android: true,
          windows: true,
          macos: true,
          linux: true,
          chromeos: true,
        }}
        tags={{ pro: true, perso: true }}
        summary={null}
        details={["TODO"]}
        imageSrc={passwordScore}
        imageAlt="Capture d'écran TODO"
        techFocus={null}
      />
      <FeatureSection
        title="Gestion des droits (lecture seule ou gestionnaire)"
        platforms={{
          ios: true,
          android: true,
          windows: true,
          macos: true,
          linux: true,
          chromeos: true,
        }}
        tags={{ pro: true, perso: true }}
        summary={null}
        details={["TODO"]}
        imageSrc={passwordScore}
        imageAlt="Capture d'écran TODO"
        techFocus={null}
      />
      <h2 className={styles.page_h2}>Remplissage et enregistrement automatique</h2>
      <FeatureSection
        title="Remplissage automatique sur smartphones et tablettes"
        platforms={{
          ios: true,
          android: true,
          windows: true,
          macos: true,
          linux: true,
          chromeos: true,
        }}
        tags={{ pro: true, perso: true }}
        summary={null}
        details={["TODO"]}
        imageSrc={passwordScore}
        imageAlt="Capture d'écran TODO"
        techFocus={null}
      />
    </div>
  );
}

import { Metadata } from "next";
import FeatureSection from "./featureSection";
import styles from "./page.module.css";
import proPersoVaultsImg from "../../public/images/pro-perso-vaults.png";

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
          windows: false,
          macos: true,
          linux: true,
        }}
        tags={null}
        summary="UpSignOn vous propose deux types de coffres-forts, tous les deux semblables dans leur interface utilisateur, mais différents techniquement."
        details={[
          "Le coffre-fort PERSO est conçu pour votre usage privé, non professionnel. Il est totalement sécurisé et privé par conception. En revanche, son système de partage de secrets n’est pas adapté aux équipes de plus de quelques personnes.",
          "Les coffres-forts PRO sont proposés par votre employeur ou responsable de la sécurité informatique pour vous donner les moyens d’atteindre 100% de mots de passe forts et uniques. Votre DSI ou RSSI peut suivre l’avancement de cet objectif depuis la console de supervision qui lui donne accès à la force des mots de passe enregistrés dans les coffres-forts PRO. Cette console ne donne bien sûr pas accès à vos mots de passe et autres secrets directement. Par ailleurs, avec les coffres-forts PRO, il vous sera beaucoup plus facile de partager des secrets avec vos collègues en saisissant simplement leur adresse email.",
        ]}
        imageSrc={proPersoVaultsImg}
        imageAlt="Screen capture illustrating PRO and PERSO vaults in the app."
        techFocus={{
          title: "Coffres-forts PRO vs coffres-forts PERSO",
          href: "/resources/technical-details/pro-vs-perso",
        }}
      />
      <FeatureSection
        title="Coffres-forts PRO & PERSO"
        platforms={{
          ios: true,
          android: true,
          windows: false,
          macos: true,
          linux: true,
        }}
        tags={null}
        summary="UpSignOn vous propose deux types de coffres-forts, tous les deux semblables dans leur interface utilisateur, mais différents techniquement."
        details={null}
        imageSrc={proPersoVaultsImg}
        imageAlt="Screen capture illustrating PRO and PERSO vaults in the app."
        techFocus={null}
      />
    </div>
  );
}

import Image from "next/image";
import styles from "../article.module.css";
import illuFR from "../../../../../public/articles/14/banner_blog_upsignon_temoignage_Groupe_Deux_Mains_FR_1375x619px.jpg";

export function FRArticle() {
  return (
    <>
      <div className={styles.image}>
        <Image src={illuFR} alt="" unoptimized />
      </div>
      <h1>Comment le groupe Deux Mains sécurise ses 300 accès fournisseurs avec UpSignOn</h1>
      <h2>Présentation & contexte</h2>
      <p>
        Je m’appelle Julienne Gaudebert, je suis directrice du restaurant <em>Le Soulier</em> et adjointe de direction
        du groupe Deux Mains, qui regroupe plusieurs restaurants, dont <em>Aux Pieds Sous la Table</em>.
        <br />
        Le groupe Demain fonctionne comme une holding : il regroupe toutes les fonctions support pour les différents
        établissements.
        <br />
        C’est le bureau du groupe, composé de 5 personnes, qui utilise UpSignOn au quotidien.
      </p>
      <p>
        Nous avions envisagé de le déployer aussi auprès des collaborateurs, mais cela posait un risque : en cas de
        départ, ils auraient accès à tous les mots de passe des fournisseurs. Nous avons donc choisi de le réserver au
        bureau.
      </p>
      <h2>Contexte et besoins initiaux</h2>
      <p>
        Avant UpSignOn, nous utilisions un fichier Word protégé stocké sur SharePoint pour partager nos mots de passe.
        Ce n’était ni pratique ni sécurisé.
        <br />
        Nous avions parfois un seul mot de passe pour des dizaines de comptes – environ{" "}
        <strong>300 accès différents</strong>.
      </p>
      <p>
        Le besoin est venu d’une volonté de sécuriser davantage nos données, notamment face aux risques de piratage.
        <br />
        Nous voulions une solution simple et sécurisée, adaptée à une petite structure multisite, avec plus de contrôle
        sur les accès et moins de pertes de temps liées aux oublis.
      </p>
      <p>Nous n’avions pas d’autre outil en place avant UpSignOn.</p>
      <h2>Mise en œuvre de la solution</h2>
      <h3>Découverte et choix de la solution</h3>
      <p>
        Je ne suis pas à l’origine du choix : c’est notre dirigeant qui a découvert la solution lors d’un webinaire
        organisé par notre cabinet comptable. Le fait qu’UpSignOn soit <strong>une solution française</strong> a été un{" "}
        <strong>critère décisif</strong> : cela répondait à nos valeurs et à notre recherche de{" "}
        <strong>souveraineté et conformité RGPD</strong>.
      </p>
      <h3>Déploiement et organisation</h3>
      <p>
        C’est moi qui ai <strong>intégré et classé tous les mots de passe</strong> dans UpSignOn. Ensuite, nous l’avons
        déployé auprès des <strong>5 membres du bureau</strong> (une personne par service).
      </p>
      <p>
        Je les ai accompagnés dans la{" "}
        <strong>création de leurs comptes, l’installation des extensions et la formation de base</strong>. Aujourd’hui,{" "}
        <strong>tout le monde maîtrise bien l’outil</strong>.
      </p>
      <h3>Structuration interne</h3>
      <p>
        Nous avons organisé les accès en <strong>6 grands dossiers</strong> :
      </p>
      <ol>
        <li>Fournisseurs</li>
        <li>Encaissement</li>
        <li>Comptabilité / Social</li>
        <li>Commercialisation / Communication</li>
        <li>Administration des sociétés</li>
        <li>Dossiers divers (comptes à vérifier, mots de passe automatiques, etc.)</li>
      </ol>
      <br />
      <p>
        Dans chaque dossier, nous avons <strong>un sous-dossier par société du groupe</strong> :
      </p>
      <ol>
        <li>Le groupe (holding)</li>
        <li>Société 1</li>
        <li>Société 2</li>
        <li>Société 3</li>
      </ol>
      <br />
      <p>
        Chaque compte est <strong>nommé “société – site”</strong> pour une meilleure lisibilité.
      </p>
      <h3>Difficultés rencontrées</h3>
      <p>
        Lors d’une migration, nous avons perdu l’arborescence, ce qui a demandé{" "}
        <strong>une réorganisation manuelle complète.</strong>
        <br />
        Nous avons également dû <strong>changer tous les mots de passe</strong> pour les rendre plus sécurisés (travail
        réalisé par une alternante cet été).
      </p>
      <h2>Utilisation au quotidien</h2>
      <p>
        L’usage principal concerne le stockage et le partage sécurisé des accès fournisseurs.
        <br />
        Les fonctionnalités les plus appréciées :
      </p>
      <ul>
        <li>
          Le <strong>partage sécurisé</strong> entre collaborateurs sans envoi de mots de passe par mail.
        </li>
        <li>
          L’<strong>extension de navigateur (Chrome)</strong>, jugée <strong>très pratique</strong> pour les connexions
          rapides.
        </li>
        <li>
          Le <strong>changement de mots de passe simplifié</strong>, sans avoir à prévenir tout le monde à chaque
          modification.
        </li>
      </ul>
      <p>
        Cela permet une <strong>meilleure autonomie</strong> : par exemple, la comptabilité peut se connecter aux
        comptes fournisseurs sans passer par moi.
      </p>
      <h2>Points d’amélioration proposés</h2>
      <ul>
        <li>
          <strong>Désactivation de l’enregistrement automatique par défaut</strong>, jugé “trop envahissant”.
        </li>
        <li>
          <strong>Affichage du dossier d’appartenance</strong> d’un compte dans la pop-up du navigateur.
        </li>
        <li>
          <strong>Possibilité de classer directement un nouveau mot de passe dans un dossier</strong> depuis la pop-up,
          sans passer par l’application.
        </li>
      </ul>
      <h2>Recommandation et vision</h2>
      <p>
        Pour Julienne, <strong>UpSignOn est avant tout un outil de sécurité et de productivité</strong> :
        <cite>
          <strong>
            “C’est la combinaison entre sécurité et gain de temps qui fait toute la force de la solution.”
          </strong>
        </cite>
      </p>
      <p>Elle recommande la solution pour :</p>
      <ul>
        <li>
          Sa <strong>simplicité d’utilisation</strong> (une fois installée).
        </li>
        <li>
          Son <strong>côté collaboratif et sécurisé</strong>.
        </li>
        <li>
          Son <strong>hébergement français et le soutien du groupe Septeo.</strong>
        </li>
        <li>
          <strong>Amélioration continue</strong>
        </li>
      </ul>
      <br />
      <p>
        Julienne souligne la <strong>réactivité de l’équipe UpSignOn</strong> : ses remarques ont été{" "}
        <strong>prises en compte dans des mises à jour.</strong>
        <br />
        Elle apprécie cette logique d’<strong>amélioration continue</strong>, en phase avec la culture du groupe.
      </p>
      <p>
        Elle précise néanmoins que la <strong>mise en place initiale</strong> demande un peu d’accompagnement pour les
        profils <strong>moins à l’aise en informatique</strong>, mais que l’usage au quotidien est très fluide.
      </p>
    </>
  );
}

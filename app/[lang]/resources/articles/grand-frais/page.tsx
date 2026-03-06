import { Metadata } from "next";
import { getDictionary } from "../../../../../translations/translations";
import styles from "../article.module.css";
import Link from "next/link";
import illuFR from "../../../../../public/articles/grandFrais/banner_upsignon_usecase_grandfrais_FR_1375x619px.png";
import illuEN from "../../../../../public/articles/grandFrais/banner_upsignon_usecase_grandfrais_EN_1375x619px.png";
import Image from "next/image";
import { localizedLink } from "../../../components/localizedLink/LocalizedLink";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const t = getDictionary(lang);
  return {
    title: t.articles.grandFrais.title,
    description: t.articles.grandFrais.metaDescription,
    alternates: {
      canonical: "https://upsignon.eu/fr/resources/articles/grand-frais",
      languages: {
        fr: "https://upsignon.eu/fr/resources/articles/grand-frais",
        en: "https://upsignon.eu/en/resources/articles/grand-frais",
      },
    },
  };
}

export default async function Article1({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = getDictionary(lang);
  return (
    <div className={styles.content}>
      <div className={styles.backArrow}>
        <span>&lt;  </span>
        <Link href={localizedLink(lang, "/resources/articles")}>
          {t.resources.articles}
        </Link>
      </div>
      <article className={styles.article}>
        {lang === "fr" ? <FRArticle /> : <ENArticle />}
      </article>
      <div className={styles.backArrow}>
        <span>&lt;  </span>
        <Link href={localizedLink(lang, "/resources/articles")}>
          {t.resources.articles}
        </Link>
      </div>
    </div>
  );
}
function FRArticle() {
  return (
    <>
      <div className={styles.image}>
        <Image src={illuFR} alt="" unoptimized />
      </div>
      <h1>Cas d’usage – UpSignOn x Grand Frais</h1>
      <h2>
        Sécuriser la gestion des accès IT d’une enseigne nationale spécialisée
        dans les produits frais
      </h2>
      <p>
        Grand Frais est une enseigne nationale spécialisée dans la distribution
        de produits frais, s’appuyant sur :
      </p>
      <ul>
        <li>un réseau de magasins répartis sur tout le territoire</li>
        <li>
          des systèmes d’information critiques (outils internes,
          infrastructures, accès techniques)
        </li>
        <li>
          une DSI garante de la continuité et de la sécurité des opérations
        </li>
      </ul>
      <p>
        Dans ce contexte, la gestion des accès IT est un enjeu stratégique :
        toute perte de contrôle peut avoir un impact direct sur le
        fonctionnement des équipes et des systèmes.
      </p>
      <h2>Problématique</h2>
      <p>La DSI devait faire face à plusieurs enjeux :</p>
      <ul>
        <li>gérer un volume important de mots de passe et d’accès sensibles</li>
        <li>partager certains accès entre plusieurs membres de l’équipe IT</li>
        <li>
          éviter les risques de fuite, notamment lors des départs de
          collaborateurs
        </li>
        <li>
          conserver un haut niveau de sécurité sans complexifier
          l’administration
        </li>
      </ul>
      <p>
        La DSI gère aujourd’hui plus de{" "}
        <strong>300 à 400 accès critiques</strong> (comptes techniques, outils
        internes, infrastructures). Sans solution adaptée, la gestion manuelle
        devenait difficile à piloter dans la durée.
      </p>
      <h2>Mise en place de la solution</h2>
      <h3>Pourquoi UpSignOn ?</h3>
      <p>Grand Frais recherchait une solution :</p>
      <ul>
        <li>simple et efficace, sans fonctionnalités superflues</li>
        <li>hautement sécurisée pour protéger des accès critiques</li>
        <li>française, avec une architecture claire et documentée</li>
        <li>facilement administrable par la DSI</li>
      </ul>
      <h3>Déploiement et prise en main</h3>
      <ul>
        <li>Déploiement rapide au sein de la DSI</li>
        <li>Création de coffres partagés par périmètre IT</li>
        <li>
          Administration centralisée, sans projet lourd ni paramétrage complexe
        </li>
      </ul>
      <h3>Usages prioritaires</h3>
      <ul>
        <li>Centralisation des mots de passe DSI</li>
        <li>Partage sécurisé des accès entre collaborateurs autorisés</li>
        <li>Mise en place de règles de sécurité strictes</li>
      </ul>
      <p>
        Une fois les utilisateurs enrôlés, chacun accède uniquement aux coffres
        correspondant à son périmètre, garantissant une séparation claire des
        responsabilités dans un environnement IT multi-sites.
      </p>
      <h2>Résultats & bénéfices observés</h2>
      <h3>Bénéfices clés pour Grand Frais</h3>
      <ul>
        <li>Maîtrise renforcée des accès sensibles</li>
        <li>Réduction significative des risques de fuite</li>
        <li>Sécurité élevée sans alourdir les processus IT</li>
        <li>Confiance accrue dans la gestion des systèmes critiques</li>
      </ul>
      <h3>Fonctionnalités particulièrement appréciées</h3>
      <ul>
        <li>Blocage de l’export des mots de passe</li>
        <li>Limitation du nombre de devices par utilisateur</li>
        <li>Validation administrateur pour l’ajout d’un nouveau device</li>
        <li>Masquage automatique des mots de passe lors du partage d’écran</li>
      </ul>
      <h3>Exemples concrets</h3>
      <ul>
        <li>
          <strong>Départ d’un collaborateur :</strong> les mots de passe ne
          peuvent pas être exportés avant la désactivation des accès
        </li>
        <li>
          <strong>Contrôle des équipements :</strong> un accès depuis un device
          non validé est automatiquement bloqué
        </li>
        <li>
          <strong>Visioconférences IT :</strong> lors d’un partage d’écran, les
          mots de passe restent invisibles par défaut
        </li>
      </ul>
      <br />
      <blockquote>
        <cite>
          « Le blocage de l’export des mots de passe est un vrai différenciateur
          en matière de sécurité [...] La gestion des devices nous permet de
          garder le contrôle sur où et comment les accès sont utilisés. »
        </cite>
        <br />
        <strong>
          Fabien Gougoux – Responsable Infrastructure et Sécurité – Grand Frais
        </strong>
      </blockquote>
    </>
  );
}
function ENArticle() {
  return (
    <>
      <div className={styles.image}>
        <Image src={illuEN} alt="" unoptimized />
      </div>
      <h1>Case Study – UpSignOn x Grand Frais</h1>
      <h2>
        Securing IT access management for a nationwide fresh food retailer
      </h2>
      <p>
        Grand Frais is a national retailer specializing in fresh food products,
        operating through:
      </p>
      <ul>
        <li>a network of stores across France</li>
        <li>
          critical information systems (internal tools, infrastructure and
          technical accounts)
        </li>
        <li>
          an IT department responsible for maintaining operational continuity
          and system security
        </li>
      </ul>
      <p>
        In this environment, controlling access to IT resources is a key
        challenge. Any loss of control over credentials could directly impact
        the reliability of systems and the daily operations of the teams.
      </p>
      <h2>The challenge</h2>
      <p>The IT team needed to address several key issues:</p>
      <ul>
        <li>
          managing a large number of sensitive credentials and administrative
          accounts
        </li>
        <li>allowing secure access sharing within the IT team</li>
        <li>
          reducing the risk of password leaks, especially when employees leave
          the company
        </li>
        <li>
          maintaining strong security without introducing complex administration
          processes
        </li>
      </ul>
      <p>
        Today, the IT department manages more than{" "}
        <strong>300 to 400 critical credentials</strong>, including technical
        accounts, infrastructure access and internal tools. Without a dedicated
        solution, managing these credentials manually was becoming increasingly
        difficult over time.
      </p>
      <h2>Implementing the solution</h2>
      <h3>Why UpSignOn?</h3>
      <p>Grand Frais was looking for a solution that would be:</p>
      <ul>
        <li>straightforward and efficient, without unnecessary complexity</li>
        <li>highly secure to protect critical system access</li>
        <li>
          developed in France with transparent architecture and documentation
        </li>
        <li>easy for the IT team to manage and maintain</li>
      </ul>
      <h3>Deployment and onboarding</h3>
      <ul>
        <li>Rapid deployment within the IT department</li>
        <li>Creation of shared vaults organized by IT scope</li>
        <li>
          Centralized administration without heavy configuration or complex
          projects
        </li>
      </ul>
      <h3>Key use cases</h3>
      <ul>
        <li>Centralized storage of IT credentials</li>
        <li>Secure sharing of access among authorized team members</li>
        <li>Enforcement of strict security policies</li>
      </ul>
      <p>
        Once users are enrolled, they only have access to the vaults relevant to
        their responsibilities, ensuring clear separation of roles within a
        multi-site IT environment.
      </p>
      <h2>Results and benefits</h2>
      <h3>Key benefits for Grand Frais</h3>
      <ul>
        <li>Stronger control over sensitive credentials</li>
        <li>Significant reduction in the risk of password leaks</li>
        <li>High security standards without adding operational complexity</li>
        <li>Increased confidence in the management of critical systems</li>
      </ul>
      <h3>Most valued features</h3>
      <ul>
        <li>Prevention of password export</li>
        <li>Limiting the number of devices per user</li>
        <li>Administrator approval required for adding a new device</li>
        <li>Automatic masking of passwords during screen sharing</li>
      </ul>
      <h3>Practical examples</h3>
      <ul>
        <li>
          <strong>Employee departure:</strong> passwords cannot be exported
          before access is revoked
        </li>
        <li>
          <strong>Device control:</strong> attempts to connect from an
          unapproved device are automatically blocked
        </li>
        <li>
          <strong>IT meetings:</strong> during screen sharing sessions,
          passwords remain hidden by default
        </li>
      </ul>
      <br />
      <blockquote>
        <cite>
          “Preventing password export is a real security differentiator. Device
          management also allows us to maintain full control over where and how
          credentials are used.”
        </cite>
        <br />
        <strong>
          Fabien Gougoux — Infrastructure & Security Manager — Grand Frais
        </strong>
      </blockquote>
    </>
  );
}

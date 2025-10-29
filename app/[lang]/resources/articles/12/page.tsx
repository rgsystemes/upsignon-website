import { Metadata } from "next";
import { getDictionary } from "../../../../../translations/translations";
import styles from "../article.module.css";
import Link from "next/link";
import Image from "next/image";
import bannerImageFR from "../../../../../public/articles/12/banner_email_upsignon_changement_UI_FR.jpg";
import bannerImageEN from "../../../../../public/articles/12/banner_email_upsignon_changement_UI_EN.jpg";
import newDesign from "../../../../../public/articles/12/Image-Page-Accueil-USO-Nouvelle-UI.jpg";
import newIconFR from "../../../../../public/articles/12/Image-Avant-Apres-Icone-USO-Nouvelle-UI-FR.jpg";
import newIconEN from "../../../../../public/articles/12/Image-Avant-Apres-Icone-USO-Nouvelle-UI-EN.jpg";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const t = getDictionary(lang);
  return {
    title: t.articles[12].title,
    description: t.articles[12].metaDescription,
    alternates: {
      canonical: "https://upsignon.eu/fr/resources/articles/12",
      languages: {
        fr: "https://upsignon.eu/fr/resources/articles/12",
        en: "https://upsignon.eu/en/resources/articles/12",
      },
    },
  };
}

export default async function Article1({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t = getDictionary(lang);
  return (
    <div className={styles.content}>
      <div className={styles.backArrow}>
        <span>&lt;  </span>
        <Link href="/resources/articles">{t.resources.articles}</Link>
      </div>
      <article className={styles.article}>{lang === "fr" ? <FRArticle /> : <ENArticle />}</article>
      <div className={styles.backArrow}>
        <span>&lt;  </span>
        <Link href="/resources/articles">{t.resources.articles}</Link>
      </div>
    </div>
  );
}
function FRArticle() {
  return (
    <>
      <div className={styles.image}>
        <Image src={bannerImageFR} alt="" unoptimized />
      </div>
      <h1>UpSignOn fait peau neuve : une nouvelle interface pensée pour la simplicité et le confort d’usage</h1>
      <p>
        Parce que la sécurité ne doit jamais se faire au détriment de l’expérience utilisateur,{" "}
        <strong>UpSignOn by Septeo</strong>
        dévoilera le <strong>13 novembre 2025</strong> une toute nouvelle interface. Plus claire, plus moderne et plus
        fluide, elle incarne la vision d’une cybersécurité accessible à tous, sans complexité.
      </p>

      <h3>Une refonte au service de l’expérience utilisateur</h3>
      <p>
        L’enjeu de cette évolution est simple : offrir à chaque utilisateur un environnement de travail à la fois plus
        agréable et plus efficace. Cette mise à jour n’est pas qu’un simple “relooking” : elle s’inscrit dans une
        démarche continue d’amélioration de l’ergonomie et de l’accessibilité, au service des{" "}
        <strong>TPE, PME, collectivités et professionnels IT</strong> qui utilisent UpSignOn au quotidien.
      </p>
      <h3>Les trois objectifs clés de cette refonte</h3>
      <ul>
        <li>
          <strong>Simplifier la compréhension</strong> de l’interface et la rendre plus intuitive ;
        </li>
        <li>
          <strong>Harmoniser le design</strong> avec l’écosystème des solutions du groupe Septeo ;
        </li>
        <li>
          <strong>Renforcer la clarté des informations</strong> essentielles à la gestion des mots de passe et des
          accès.
        </li>
      </ul>
      <br />
      <h3>Un design repensé, fidèle à l’ADN UpSignOn</h3>
      <p>
        <strong>Dès le 13 novembre</strong>, vous découvrirez une{" "}
        <strong>palette de couleurs neutres et apaisantes</strong> (gris et blanc), où le <strong>violet Septeo</strong>{" "}
        vient souligner les éléments essentiels : vos coffres-forts pro et perso, la force de vos mots de passe ou
        encore les alertes de sécurité.
      </p>
      <p>
        L’icône de l’application et celle de l’extension navigateur ont également été repensées : un nouveau visage pour
        une solution déjà reconnue pour sa fiabilité et sa simplicité.
      </p>
      <div className={styles.image}>
        <Image src={newIconFR} alt="Changement d'icône de l'application UpSignOn" />
      </div>

      <h3>Une structure plus claire et une lecture plus fluide</h3>

      <p>
        La page d’accueil d’UpSignOn a été totalement repensée. <strong>Les icônes sont désormais unifiées</strong>,
        l’espace de lecture est plus aéré, et les informations clés mieux hiérarchisées. À l’intérieur du coffre, le
        design adopte un style <strong>plus “flat” et plus lisible</strong>.
      </p>

      <p>
        Cette nouvelle interface permet à chaque collaborateur qu’il soit technicien, dirigeant ou membre d’une équipe
        d’accéder plus rapidement à ses informations et de renforcer la sécurité de ses accès sans effort.
      </p>

      <div className={styles.image}>
        <Image src={newDesign} alt="Changement de design de l'application UpSignOn" />
      </div>

      <h3>Un changement sans impact sur vos habitudes</h3>

      <p>
        Bonne nouvelle : cette évolution est <strong>entièrement transparente</strong>. Vos coffres-forts, mots de
        passe, TOTP, droits d’accès et paramètres SSO/MFA restent inchangés. L’autoremplissage, les raccourcis et la
        navigation fonctionneront comme avant. <strong>Aucune action n’est requise de la part des utilisateurs</strong>
         : la mise à jour s’appliquera automatiquement à partir du 13 novembre.
      </p>

      <h3>Une continuité dans la sécurité et la souveraineté</h3>

      <p>
        Cette refonte visuelle s’inscrit dans la philosophie d’UpSignOn :{" "}
        <strong>une cybersécurité simple, souveraine et efficace</strong>. La solution repose sur un{" "}
        <strong>chiffrement de bout en bout</strong>, une <strong>conformité RGPD native</strong> et un{" "}
        <strong>hébergement 100% français</strong>, garantissant la confidentialité totale des données. Avec sa{" "}
        <strong>console d’administration</strong>, ses <strong>coffres-forts partagés</strong> et sa{" "}
        <strong>gestion fine des droits d’accès</strong>, UpSignOn offre aux entreprises un équilibre unique entre
        ergonomie et contrôle.
      </p>

      <h3>En résumé</h3>
      <ul>
        <li>
          Nouvelle interface disponible le <strong>13 novembre 2025</strong>
        </li>
        <li>Design modernisé et harmonisé à l’écosystème Septeo</li>
        <li>Expérience plus fluide et plus intuitive</li>
        <li>Aucune action requise pour les utilisateurs</li>
        <li>Données et sécurité inchangées</li>
      </ul>

      <h3>Une interface qui incarne la promesse d’UpSignOn : la cybersécurité sans complexité</h3>

      <p>
        Chez <strong>UpSignOn by Septeo</strong>, nous croyons que la <strong>simplicité</strong> est la meilleure
        alliée de la <strong>sécurité</strong>. Cette nouvelle interface est une étape de plus vers un objectif clair :
        permettre à chaque entreprise de <strong>reprendre le contrôle de ses accès</strong> sans compromis entre{" "}
        <strong>souveraineté, sécurité et confort d’usage</strong>.
      </p>

      <p>
        Souhaitez-vous découvrir la solution en action ?{" "}
        <Link href="/pricing?modal=free-trial">Essayez gratuitement UpSignOn</Link> et simplifiez la sécurité des accès
        de votre entreprise dès aujourd’hui.
      </p>
    </>
  );
}
function ENArticle() {
  return (
    <>
      <div className={styles.image}>
        <Image src={bannerImageEN} alt="" unoptimized />
      </div>
      <h1>UpSignOn gets a makeover: a new interface designed for simplicity and ease of use</h1>
      <p>
        Because security should never come at the expense of user experience, <strong>UpSignOn by Septeo</strong> will
        unveil a brand new interface on <strong>13 November 2025</strong>. Clearer, more modern and more fluid, it
        embodies the vision of cybersecurity that is accessible to all, without complexity.
      </p>
      <h3>A redesign focused on the user experience</h3>
      <p>
        The aim of this change is simple: to offer every user a working environment that is both more pleasant and more
        efficient. This update is not just a simple ‘makeover’: it is part of an ongoing process of improving ergonomics
        and accessibility for the benefit of{" "}
        <strong>microbusinesses, SMEs, local authorities and IT professionals</strong> who use UpSignOn on a daily
        basis.
      </p>
      <h3>The three key objectives of this redesign</h3>
      <ul>
        <li>
          <strong>Simplify understanding</strong> of the interface and make it more intuitive;
        </li>
        <li>
          <strong>Harmonise the design</strong> with the Septeo group's ecosystem of solutions;
        </li>
        <li>
          <strong>Improve the clarity of information</strong> essential for managing passwords and access.
        </li>
      </ul>
      <br />
      <h3>A redesigned look, faithful to the UpSignOn DNA</h3>
      <p>
        <strong>Starting 13 November</strong>, you will discover a <strong>palette of neutral, soothing colours</strong>{" "}
        (grey and white), where <strong>Septeo purple</strong> highlights the essential elements: your professional and
        personal vaults, the strength of your passwords, and security alerts.
      </p>
      <p>
        The application icon and browser extension icon have also been redesigned: a new look for a solution already
        recognised for its reliability and simplicity.
      </p>
      <div className={styles.image}>
        <Image src={newIconEN} alt="Change of UpSignOn application icon" />
      </div>
      <h3>A clearer structure and smoother reading experience</h3>
      <p>
        The UpSignOn home page has been completely redesigned. <strong>The icons are now unified</strong>, the reading
        space is more spacious, and key information is better organised. Inside the vault, the design adopts a{" "}
        <strong>flatter and more readable</strong> style.
      </p>
      <p>
        This new interface allows every employee, whether they are a technician, manager or team member, to access their
        information more quickly and strengthen their access security effortlessly.
      </p>
      <div className={styles.image}>
        <Image src={newDesign} alt="Change in the design of the UpSignOn application" />
      </div>
      <h3>A change with no impact on your habits</h3>
      <p>
        Good news: this change is <strong>completely transparent</strong>. Your vaults, passwords, TOTPs, access rights
        and SSO/MFA settings remain unchanged. Auto-fill, shortcuts and navigation will work as before.{" "}
        <strong>No action is required on the part of users</strong>: the update will be applied automatically from 13
        November.
      </p>
      <h3>Continuity in security and sovereignty</h3>
      <p>
        This visual redesign is in line with UpSignOn's philosophy:{" "}
        <strong>simple, sovereign and effective cybersecurity</strong>. The solution is based on{" "}
        <strong>end-to-end encryption</strong>, <strong>native GDPR compliance</strong> and{" "}
        <strong>100% French hosting</strong>, guaranteeing total data confidentiality. With its{" "}
        <strong>administration console</strong>, <strong>shared vaults</strong> and{" "}
        <strong>detailed access rights management</strong>, UpSignOn offers businesses a unique balance between
        ergonomics and control.
      </p>
      <h3>In summary</h3>
      <ul>
        <li>
          New interface available on <strong>13 November 2025</strong>
        </li>
        <li>Modernised design harmonised with the Septeo ecosystem</li>
        <li>A smoother, more intuitive experience</li>
        <li>No action required from users</li>
        <li>Unchanged data and security</li>
      </ul>
      <h3>An interface that embodies UpSignOn's promise: cybersecurity without complexity</h3>
      <p>
        At <strong>UpSignOn by Septeo</strong>, we believe that <strong>simplicity</strong> is the best ally of{" "}
        <strong>security</strong>. This new interface is another step towards a clear goal: enabling every company to{" "}
        <strong>regain control of its access</strong> without compromising on{" "}
        <strong>sovereignty, security and ease of use</strong>.
      </p>
      <p>
        Would you like to see the solution in action?{" "}
        <Link href="/pricing/?modal=free-trial">Try UpSignOn for free</Link> and simplify your company's access security
        today.
      </p>
    </>
  );
}

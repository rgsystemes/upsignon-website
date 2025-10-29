import { Metadata } from "next";
import { getDictionary } from "../../../../../translations/translations";
import styles from "../article.module.css";
import Link from "next/link";
import illuFR from "../../../../../public/articles/13/illuFR.png";
import illuEN from "../../../../../public/articles/13/illuEN.png";
import Image from "next/image";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const t = getDictionary(lang);
  return {
    title: t.articles[13].title,
    description: t.articles[13].metaDescription,
    alternates: {
      canonical: "https://upsignon.eu/fr/resources/articles/13",
      languages: {
        fr: "https://upsignon.eu/fr/resources/articles/13",
        en: "https://upsignon.eu/en/resources/articles/13",
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
        <Image src={illuFR} alt="" unoptimized />
      </div>
      <h1>
        Gérer la sécurité au quotidien dans le service public : le choix du RSSI du Var pour le gestionnaire de mots de
        passe français UpSignOn
      </h1>

      <p style={{ textAlign: "center", marginBottom: 20 }}>
        <em>Témoignage utilisateur – UpSignOn by Septeo</em>
        <br />
        <em>Vincent Sueur, RSSI – Département du Var</em>
      </p>

      <p>
        Depuis 2023, <strong>Vincent Sueur</strong> est{" "}
        <strong>Responsable de la Sécurité des Systèmes d’Information (RSSI)</strong> du Département du Var. C’est à
        cette période que la collectivité a également créé une <strong>cellule dédiée à la cybersécurité</strong>, qu’il
        dirige aujourd’hui en tant que <strong>Responsable SOC</strong>.
      </p>

      <p>
        Ses missions couvrent la <strong>sécurisation des données départementales</strong> et la{" "}
        <strong>sensibilisation des agents aux bonnes pratiques numériques</strong>. Le Département du Var compte
        environ <strong>5 000 agents</strong>, dont <strong>4 000 postes de travail</strong> et près de{" "}
        <strong>400 serveurs</strong> à sécuriser. À cela s’ajoute la{" "}
        <strong>gestion informatique de 71 collèges</strong>, représentant un environnement particulièrement vaste et
        hétérogène.
      </p>

      <h3>Contexte et besoins initiaux</h3>

      <p>
        Avant la mise en place d’<strong>UpSignOn</strong>, le Département du Var utilisait déjà{" "}
        <strong>TeamPass</strong>, une solution open source de gestion de mots de passe. Cette solution répondait à
        certains besoins techniques, mais montrait ses limites :
      </p>

      <ul className={styles.ul}>
        <li>pas d’auto-complétion pour les sites web,</li>
        <li>maintenance complexe et dépendante des ressources internes,</li>
        <li>absence d’application mobile et de portabilité,</li>
        <li>et des contraintes de sécurité et d’évolutivité.</li>
      </ul>

      <p>
        Le besoin d’un <strong>coffre-fort numérique sécurisé, moderne et français</strong> est alors devenu évident.
        <br />
        Pour le Département, le choix d’un éditeur <strong>français</strong> était un critère déterminant à la fois pour
        la <strong>souveraineté numérique</strong>, la <strong>conformité RGPD</strong>, et la{" "}
        <strong>proximité de support</strong>. Le Département du Var fait ainsi partie des{" "}
        <strong>premiers utilisateurs d’UpSignOn</strong>, déployée en 2023.
        <br />
        Vincent Sueur salue particulièrement la <strong>qualité de l’accompagnement</strong> des équipes UpSignOn.
      </p>

      <cite className={styles.cite}>
        « Nous avons bénéficié d’un suivi exemplaire, d’une vraie écoute et d’une prise en compte de nos besoins dans
        les évolutions du produit. »
      </cite>

      <p>
        Cette collaboration de proximité, conjuguée à la réactivité du support, a été un facteur clé dans la réussite du
        projet.
      </p>

      <h3>Mise en œuvre de la solution</h3>

      <p>L’onboarding d’UpSignOn s’est déroulé de manière fluide, le paramétrage est simple et bien accompagné.</p>

      <p>
        Les principales difficultés sont venues non pas de la technique, mais de l’
        <strong>appropriation de l’outil par les utilisateurs</strong>. Certains agents, peu familiers avec les
        gestionnaires de mots de passe, ont eu besoin d’un accompagnement renforcé. Même au sein de la DSI, l’adoption a
        nécessité un temps d’adaptation.
      </p>

      <cite className={styles.cite}>
        « Il faut du temps pour que les usages s’ancrent. Après deux à trois ans, les réflexes commencent vraiment à
        s’installer. »
      </cite>

      <p>
        Pour accompagner cette montée en compétence, le Département a mis en place des{" "}
        <strong>sessions de formation internes</strong> et des <strong>supports de sensibilisation</strong> simples et
        concrets. Un suivi progressif par service a permis une appropriation en douceur.
      </p>

      <p>
        Côté supervision, les équipes exploitent les outils d’administration d’UpSignOn pour{" "}
        <strong>suivre l’usage et la conformité</strong> des postes, notamment via l’analyse des exports CSV intégrés
        dans leur système de gestion interne (CM). Cela leur permet d’identifier les postes non conformes ou les usages
        atypiques.
      </p>

      <p>
        L’équipe a également développé quelques <strong>bonnes pratiques internes</strong>, comme la mutualisation d’un
        seul compte pour plusieurs sites web afin de limiter les redondances et simplifier la gestion des mots de passe.
      </p>

      <h3>Utilisation au quotidien & bénéfices observés</h3>

      <p>
        Aujourd’hui, <strong>UpSignOn</strong> est utilisé à la fois pour des <strong>coffres individuels</strong> et
        pour des <strong>coffres partagés</strong>. Les agents commencent progressivement à migrer depuis TeamPass vers
        UpSignOn, service par service.
      </p>

      <p>Les principaux bénéfices observés :</p>
      <ul>
        <li>
          une <strong>meilleure sécurité</strong> des accès grâce à un coffre-fort chiffré et contrôlé,
        </li>
        <li>
          une <strong>souveraineté numérique garantie</strong>, avec une solution 100% française,
        </li>
        <li>
          une <strong>utilisation plus souple</strong>, notamment grâce à la{" "}
          <strong>version mobile et au mode déconnecté</strong>,
        </li>
        <li>
          un <strong>support réactif et à l’écoute</strong>, et
        </li>
        <li>
          une <strong>solution évolutive</strong>, en amélioration continue.
        </li>
      </ul>

      <p>
        Vincent Sueur souligne également la <strong>volonté d’UpSignOn d’obtenir une certification ANSSI</strong>, gage
        de sérieux et de confiance pour les acteurs publics.
      </p>

      <cite className={styles.cite}>
        « C’est un vrai gage de sécurité pour nous. Peu de solutions peuvent revendiquer une démarche aussi
        rigoureuse. »
      </cite>

      <p>
        En matière d’acculturation, la DSI a déjà organisé <strong>2, 3 sessions de formations</strong> pour accompagner
        les agents dans l’adoption de la solution et la sensibilisation aux bonnes pratiques.
        <br />
        Les documentations fournies par UpSignOn, jugées <strong>claires et bien conçues</strong>, servent de base de
        référence, tandis que le Département crée ses propres <strong>guides simplifiés</strong> pour vulgariser
        certains aspects auprès des utilisateurs.
      </p>

      <h3>Recommandation et vision</h3>

      <p>
        Pour Vincent Sueur, un <strong>coffre-fort de mots de passe centralisé</strong> est aujourd’hui{" "}
        <strong>indispensable</strong> dans toute stratégie de cybersécurité, y compris dans les collectivités
        territoriales.
        <br />
        Il permet à la fois de <strong>sécuriser les accès</strong>, de <strong>centraliser la gestion</strong> et de{" "}
        <strong>garantir la conformité</strong> avec les exigences réglementaires.
      </p>

      <cite className={styles.cite}>
        « C’est essentiel que ce type de solution puisse être managé de façon centralisée par les équipes cybersécurité.
        »
      </cite>

      <p>
        Il reconnaît toutefois que le <strong>déploiement à grande échelle</strong> (sur plusieurs milliers d’agents)
        représente un <strong>enjeu budgétaire</strong> important pour les collectivités, souvent contraintes
        financièrement.
      </p>

      <h3>Conclusion</h3>

      <p>
        L’expérience du Département du Var illustre parfaitement la valeur d’une solution comme UpSignOn by Septeo dans
        le secteur public : une technologie <strong>française, sécurisée et évolutive</strong>, soutenue par une équipe
        <strong>proche de ses utilisateurs</strong>.
      </p>

      <cite className={styles.cite}>
        « Le produit évolue dans le bon sens, en phase avec les besoins du terrain. On sent une vraie écoute et une
        volonté de faire grandir la solution avec ses clients. »
      </cite>
    </>
  );
}
function ENArticle() {
  return (
    <>
      <div className={styles.image}>
        <Image src={illuEN} alt="" unoptimized />
      </div>
      <h1>
        Managing day-to-day security in the public sector: the Var CISO's choice for the French password manager
        UpSignOn
      </h1>

      <p style={{ textAlign: "center", marginBottom: 20 }}>
        <em>User testimonial – UpSignOn by Septeo</em>
        <br />
        <em>Vincent Sueur, CISO – Var Department</em>
      </p>

      <p>
        Since 2023, <strong>Vincent Sueur</strong> has been the{" "}
        <strong>Chief Information Security Officer (CISO)</strong> for the Var Department. It was during this period
        that the local authority also created a <strong>unit dedicated to cybersecurity</strong>, which he now heads as{" "}
        <strong>SOC Manager</strong>.
      </p>

      <p>
        His responsibilities include <strong>securing departmental data</strong> and{" "}
        <strong>raising awareness among staff about good digital practices</strong>. The Var Department has
        approximately <strong>5,000 employees</strong>, including <strong>4,000 workstations</strong> and nearly{" "}
        <strong>400 servers</strong> to secure. Added to this is the{" "}
        <strong>IT management of 71 secondary schools</strong>, representing a particularly large and heterogeneous
        environment.
      </p>

      <h3>Context and initial requirements</h3>

      <p>
        Before implementing <strong>UpSignOn</strong>, the Var Department was already using <strong>TeamPass</strong>,
        an open source password management solution. This solution met certain technical requirements, but had its
        limitations:
      </p>

      <ul className={styles.ul}>
        <li>no auto-completion for websites,</li>
        <li>complex maintenance dependent on internal resources,</li>
        <li>lack of mobile application and portability,</li>
        <li>and security and scalability constraints. </li>
      </ul>

      <p>
        The need for a <strong>secure, modern, French digital vault</strong> then became obvious.
        <br />
        For the Department, choosing a <strong>French</strong> publisher was a decisive criterion for{" "}
        <strong>digital sovereignty</strong>, <strong>GDPR compliance</strong>, and{" "}
        <strong>proximity of support</strong>. The Var Department is thus one of the{" "}
        <strong>first users of UpSignOn</strong>, deployed in 2023.
        <br />
        Vincent Sueur particularly praises the <strong>quality of support</strong> provided by the UpSignOn teams.
      </p>

      <cite className={styles.cite}>
        "We benefited from exemplary support, genuine attentiveness and consideration of our needs in the product's
        development."
      </cite>

      <p>This close collaboration, combined with responsive support, was a key factor in the success of the project.</p>

      <h3>Implementation of the solution</h3>

      <p>The onboarding of UpSignOn went smoothly, the configuration is simple and well supported.</p>

      <p>
        The main difficulties arose not from the technology itself, but from{" "}
        <strong>users' adoption of the tool</strong>. Some agents, unfamiliar with password managers, needed extra
        support. Even within the IT department, adoption required a period of adjustment.
      </p>

      <cite className={styles.cite}>
        "It takes time for practices to become ingrained. After two to three years, reflexes really start to take hold."
      </cite>

      <p>
        To support this skills development, the Department has set up <strong>internal training sessions</strong> and
        simple, practical <strong>awareness-raising materials</strong>. Progressive monitoring by department has enabled
        a smooth transition.
      </p>

      <p>
        In terms of supervision, the teams use UpSignOn's administration tools to{" "}
        <strong>monitor usage and compliance</strong> of workstations, in particular by analysing CSV exports integrated
        into their internal management system (CM). This enables them to identify non-compliant workstations or atypical
        usage patterns.
      </p>

      <p>
        The team has also developed some <strong>internal best practices</strong>, such as sharing a single account for
        multiple websites in order to limit redundancy and simplify password management.
      </p>

      <h3>Daily use & observed benefits</h3>

      <p>
        Today, <strong>UpSignOn</strong> is used for both <strong>individual vaults</strong> and{" "}
        <strong>shared vaults</strong>. Agents are gradually migrating from TeamPass to UpSignOn, service by service.
      </p>

      <p>The main benefits observed are:</p>
      <ul>
        <li>
          <strong>Improved security</strong> for access thanks to an encrypted and controlled vault,
        </li>
        <li>
          <strong>Guaranteed digital sovereignty</strong> with a 100% French solution,
        </li>
        <li>more flexible use, particularly thanks to the mobile version and offline mode,</li>
        <li>responsive and attentive support, and</li>
        <li>a scalable solution that is continuously being improved.</li>
      </ul>

      <p>
        Vincent Sueur also emphasises <strong>UpSignOn's commitment to obtaining ANSSI certification</strong>, a
        guarantee of reliability and trustworthiness for public sector stakeholders.
      </p>

      <cite className={styles.cite}>
        "This is a real guarantee of security for us. Few solutions can claim to have such a rigorous approach."
      </cite>

      <p>
        In terms of acculturation, the IT department has already organised{" "}
        <strong>two or three training sessions</strong> to support staff in adopting the solution and raising awareness
        of best practices.
        <br />
        The documentation provided by UpSignOn, which is considered <strong>clear and well designed</strong>, serves as
        a reference, while the Department is creating its own <strong>simplified guides</strong> to explain certain
        aspects to users.
      </p>

      <h3>Recommendation and vision</h3>

      <p>
        For Vincent Sueur, a <strong>centralised password vault</strong> is now <strong>essential</strong> in any
        cybersecurity strategy, including in local authorities.
        <br />
        It enables <strong>secure access</strong>, <strong>centralised management</strong> and
        <strong>guaranteed compliance</strong> with regulatory requirements.
      </p>

      <cite className={styles.cite}>
        "It is essential that this type of solution can be managed centrally by cybersecurity teams."
      </cite>

      <p>
        However, he acknowledges that <strong>large-scale deployment</strong> (across several thousand agents)
        represents a significant <strong>budgetary challenge</strong> for local authorities, which are often under
        financial constraints.
      </p>

      <h3>Conclusion</h3>

      <p>
        The experience of the Var Department perfectly illustrates the value of a solution such as UpSignOn by Septeo in
        the public sector: a <strong>French, secure and scalable</strong> technology, supported by a team that is{" "}
        <strong>close to its users</strong>.
      </p>

      <cite className={styles.cite}>
        "The product is evolving in the right direction, in line with the needs on the ground. We feel that they are
        really listening to us and are committed to developing the solution with their customers."
      </cite>
    </>
  );
}

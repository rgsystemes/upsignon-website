import { Metadata } from "next";
import { getDictionary } from "../../../../../translations/translations";
import styles from "../article.module.css";
import Link from "next/link";
import Image from "next/image";
import acquisitionBySepteo from "../../../../../public/articles/acquisitionBySepteo.png";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const t = getDictionary(lang);
  return {
    title: t.articles.upsignonJoinsRG.title,
    description: t.articles.upsignonJoinsRG.metaDescription,
    alternates: {
      canonical: "https://upsignon.eu/fr/resources/articles/11",
      languages: {
        fr: "https://upsignon.eu/fr/resources/articles/11",
        en: "https://upsignon.eu/en/resources/articles/11",
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
      <article className={styles.article}>
        <h1>{t.articles.upsignonJoinsRG.title}</h1>
        <div className={styles.image}>
          <Image src={acquisitionBySepteo} alt="" unoptimized />
        </div>
        {lang === "fr" ? <FRArticle /> : <ENArticle />}
      </article>
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
      <h2>RG System by Septeo intègre UpSignOn : une nouvelle étape pour renforcer la cybersécurité à la française</h2>

      <p>
        Chez UpSignOn, notre mission a toujours été claire : offrir une solution simple, sûre et souveraine pour la
        gestion des mots de passe. Aujourd'hui, nous franchissons une nouvelle étape enthousiasmante avec notre rachat
        par RG System, une filiale du groupe Septeo, acteur majeur de l’édition logicielle en Europe.
      </p>

      <h3>Une vision partagée de la sécurité et de la proximité</h3>

      <p>
        <a href="https://www.rgsystem.fr" target="_blank">
          RG System
        </a>
        , spécialiste de la supervision informatique, de la cybersécurité et de la sauvegarde des données, partage avec
        UpSignOn des valeurs essentielles : la simplicité d’usage, l’efficacité technique et la volonté de proposer des
        solutions 100% françaises.
      </p>

      <p>
        Ce rapprochement est bien plus qu'une acquisition. Il s'agit d'une synergie naturelle entre nos expertises :
      </p>
      <ul>
        <li>La gestion sécurisée des mots de passe,</li>
        <li>La supervision et la prise en main à distance des systèmes informatiques,</li>
        <li>Et une approche globale de la cybersécurité au service des entreprises françaises.</li>
      </ul>

      <h3>Une réponse concrète aux enjeux actuels</h3>

      <p>
        Les cybermenaces ne cessent de croître, et les entreprises doivent faire face à une pression constante pour
        protéger leurs accès critiques. Le rachat d'UpSignOn, avec son intégration dans l'offre RG System, permet
        d'apporter une réponse directe et concrète à ces enjeux tout en continuant à proposer UpSignOn en tant que
        solution autonome à destination des entreprises et des collectivités.
      </p>

      <p>
        Les utilisateurs bénéficieront ainsi d’une solution de gestion des mots de passe ergonomique, intuitive et
        conforme aux standards de protection des données les plus exigeants. Le tout dans un environnement 100%
        souverain.
      </p>

      <h3>Une ambition affirmée pour l'avenir</h3>

      <p>Comme le souligne Nadine Pilote, Directrice Générale de RG System :</p>

      <blockquote className={styles.blockquote}>
        Cette acquisition nous permet de répondre à un besoin exprimé de longue date par nos clients partenaires :
        disposer d’une réponse concrète à leurs besoins en matière de protection des accès et de cybersécurité globale.
      </blockquote>

      <p>De son côté, Gireg de Kerdanet, co-fondateur d’UpSignOn, se réjouit de cette union :</p>

      <blockquote className={styles.blockquote}>
        Nous partageons la même vision : proposer des solutions simples, performantes et hautement sécurisées, avec un
        engagement fort en matière de qualité et de proximité client.
      </blockquote>

      <h3>Une offre renforcée pour les professionnels de l’IT</h3>

      <p>
        Grâce à l'intégration d'UpSignOn, RG System propose un module supplémentaire à ses clients au sein de sa suite
        logicielle dédiée aux MSP, Entreprises de Services du Numérique et éditeurs de logiciels :
      </p>

      <ul style={{ marginBottom: 10 }}>
        <li>Supervision des infrastructures (RG RMM),</li>
        <li>Prise en main à distance (RG Assist),</li>
        <li>Sauvegarde et cybersécurité (RG Backup, RG Cyber),</li>
        <li>Et désormais gestion sécurisée des mots de passe avec UpSignOn.</li>
      </ul>

      <p>
        Ensemble, nous sommes déterminés à offrir aux entreprises une approche intégrée, performante et toujours plus
        sûre de la gestion de leurs systèmes d’information, tout en maintenant UpSignOn comme une solution indépendante
        disponible en vente directe pour toutes les organisations.
      </p>
    </>
  );
}
function ENArticle() {
  return (
    <>
      <h2>RG System by Septeo integrates UpSignOn: a new step to strengthen French-style cybersecurity</h2>

      <p>
        At UpSignOn, our mission has always been clear: to offer a simple, secure, and comprehensive solution for
        password management. Today, we are taking an exciting new step with our acquisition by RG System, a subsidiary
        of the Septeo group, a major player in software publishing in Europe.
      </p>

      <h3>A shared vision of security and proximity</h3>

      <p>
        <a href="https://www.rgsystem.fr" target="_blank">
          RG System
        </a>
        , a specialist in IT monitoring, cybersecurity, and data backup, shares essential values ​​with UpSignOn: ease
        of use, technical efficiency, and the commitment to offering 100% French solutions.{" "}
      </p>

      <p>This merger is much more than an acquisition. It represents a natural synergy between our expertise:</p>
      <ul>
        <li>Secure password management,</li>
        <li>Remote monitoring and control of IT systems,</li>
        <li>And a comprehensive approach to cybersecurity serving French businesses.</li>
      </ul>

      <h3>A concrete response to current challenges</h3>

      <p>
        Cyber ​​threats are constantly growing, and companies face constant pressure to protect their critical access.
        The acquisition of UpSignOn, with its integration into the RG System offering, provides a direct and concrete
        response to these challenges while continuing to offer UpSignOn as a standalone solution for businesses and
        local authorities.{" "}
      </p>

      <p>
        Users will benefit from a password management solution that is ergonomic, intuitive, and compliant with the most
        demanding data protection standards. All within a 100% sovereign environment.
      </p>

      <h3>A strong ambition for the future</h3>

      <p>As Nadine Pilote, CEO of RG System, emphasizes:</p>

      <blockquote className={styles.blockquote}>
        This acquisition allows us to address a long-standing need expressed by our client partners: having a concrete
        solution to their needs in terms of access protection and global cybersecurity.{" "}
      </blockquote>

      <p>For his part, Gireg de Kerdanet, co-founder of UpSignOn, is delighted with this partnership:</p>

      <blockquote className={styles.blockquote}>
        We share the same vision: to offer simple, efficient, and highly secure solutions, with a strong commitment to
        quality and customer proximity.{" "}
      </blockquote>

      <h3>A strengthened offering for IT professionals</h3>

      <p>
        Thanks to the integration of UpSignOn, RG System offers its customers an additional module within its software
        suite dedicated to MSPs, Digital Services Companies, and software publishers:
      </p>

      <ul style={{ marginBottom: 10 }}>
        <li>Infrastructure monitoring (RG RMM),</li>
        <li>Remote control (RG Assist),</li>
        <li>Backup and cybersecurity (RG Backup, RG Cyber),</li>
        <li>And now secure password management with UpSignOn.</li>
      </ul>

      <p>
        Together, we are committed to offering businesses an integrated, efficient, and increasingly secure approach to
        managing their information systems, while maintaining UpSignOn as an independent solution available for direct
        sale to all organizations.
      </p>
    </>
  );
}

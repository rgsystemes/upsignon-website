import Image from "next/image";
import { getDictionary } from "../../../../../translations/translations";
import styles from "../article.module.css";

import EmployeesPasswordsImg from "../../../../../public/articles/employeesPasswords.jpg";
import EmployeesPasswordsPostitsImg from "../../../../../public/articles/employeesPasswordsPostits.jpg";

export default function Article10({ params }: { params: { lang: string } }) {
  const t = getDictionary(params.lang);
  return (
    <div className={styles.content}>
      <div className={styles.backArrow}>
        <span>&lt;  </span>
        <a href="/resources/articles">{t.resources.articles}</a>
      </div>
      <article className={styles.article}>
        <h1>{t.articles[10].title}</h1>
        {/* <p className={styles.articleSummary}>
          <strong>{t.articles[10].summary}</strong>
        </p> */}
        {params.lang === "fr" ? <FRArticle /> : <ENArticle />}
      </article>
      <div className={styles.backArrow}>
        <span>&lt;  </span>
        <a href="/resources/articles">{t.resources.articles}</a>
      </div>
    </div>
  );
}

function FRArticle() {
  return (
    <>
      <p>
        En tant que RSSI, vous êtes garant de la sécurité informatique et du maintien de l’accès au numérique,
        indispensable au bon déroulement de l’activité de l’entreprise. Vous veillez donc au quotidien à ne pas devenir
        une cible pour les hackers : gestion du pare-feu, mise à jour des antivirus, supervision des mots de passe de
        vos collaborateurs… Quoi ? Ce dernier point ne fait pas encore partie de vos préoccupations ? Pourtant, on vous
        le confirme : le cassage de mots de passe fait bel et bien partie des cyberattaques les plus courantes dans les
        organisations. Et les collaborateurs ne sont pas forcément conscients de l’étendue des risques qu’ils font
        courir à l’entreprise en utilisant des mots de passe trop faibles ou en utilisant le même partout…
      </p>
      <h2>Les mots de passe : une faille de sécurité qui peut être évitée</h2>
      <Image src={EmployeesPasswordsPostitsImg} alt="" width="425" style={{ float: "right", marginLeft: 10 }} />
      <p>
        Chaque collaborateur possède plusieurs plateformes professionnelles auxquelles il a besoin de se connecter
        fréquemment à l’aide d’un mot de passe. Pour des raisons de sécurité, ce dernier doit impérativement être
        spécifique pour chaque compte. Comme il est décemment impossible de les retenir tous, les collaborateurs usent
        de diverses astuces de mémorisation qui constituent pour la plupart d’immenses failles de sécurité : utiliser le
        même mot de passe pour tous les comptes, choisir des mots de passe ultra basiques, les noter dans des fichiers
        Excel ou les laisser exposés dans les navigateurs… Ce sont autant de portes d’entrée pour les cybercriminels !
      </p>
      <p>
        <strong>
          Laisser certains de vos collaborateurs ne pas sécuriser leurs mots de passe met votre organisation à risque.
        </strong>
      </p>
      <p>
        À la lumière de ces enjeux,{" "}
        <strong>
          le rôle du RSSI est d’aider les collaborateurs à mettre en place et maintenir un niveau de sécurité suffisant
        </strong>
        . Sans alourdir leurs tâches quotidiennes, ni être trop intrusif… Ni même en ajoutant des contraintes fortes,
        qui jusqu’à présent était le seul recours du RSSI (ex. remplacer un mot de passe toutes les six semaines).
        Désormais, avec les outils de gestion avancés qui existent, le RSSI dispose de nouveaux moyens pour faire
        appliquer les règles de gestion de mots de passe par tous les collaborateurs, sans effort.
      </p>
      <h2>Comment accompagner les collaborateurs vers plus de sécurité ?</h2>
      <Image src={EmployeesPasswordsImg} alt="" width="425" style={{ float: "left", marginRight: 10 }} />
      <p>
        Votre objectif est d’<strong>emmener tout le monde vers l’adoption des bonnes pratiques</strong> essentielles de
        gestion de mots de passe. Chez UpSignOn, nous pensons que la clé, c’est d’offrir à vos collaborateurs un outil
        simple qu’ils auront envie d’utiliser, et de vous faire remonter les informations qui vous permettront de cibler
        vos actions de sensibilisation et d’accompagnement.
      </p>
      <p>
        Notre application agit déjà comme un premier outil de sensibilisation en tant que tel en affichant de façon
        explicite aux utilisateurs les mots de passe qu’il faut changer en priorité.
      </p>
      <p>
        Depuis la <strong>console de supervision</strong>, le RSSI et ses équipes peuvent suivre l’évolution des scores
        des mots de passe de tout le parc utilisateurs sans pour autant jamais accéder aux secrets (chiffrés de bout en
        bout) ; ils peuvent désormais détecter ceux qui conservent encore des mots de passe faibles ou réutilisés et
        mettre en place avec eux les actions correctives et accompagnements personnalisés nécessaires.
      </p>
    </>
  );
}
function ENArticle() {
  return (
    <>
      <p>
        As a CISO, you are responsible for IT security and maintaining digital access, which is essential for the smooth
        running of the company’s activity. So you take care on a daily basis not to become a target for hackers:
        managing the firewall, updating antiviruses, monitoring your employees’ passwords, etc. What? This last point is
        not yet one of your concerns? However, we confirm it to you: password breaking is indeed one of the most common
        cyberattacks in organizations. And employees are not necessarily aware of the extent of the risks they pose to
        the company by using passwords that are too weak or by using the same one everywhere...
      </p>
      <h2>Passwords: a security breach that can be avoided</h2>
      <Image src={EmployeesPasswordsPostitsImg} alt="" width="425" style={{ float: "right", marginLeft: 10 }} />
      <p>
        Each employee has several professional platforms to which they need to connect frequently using a password. For
        security reasons, the latter must be specific for each account. As it is quite impossible to remember them all,
        employees use various memorization tricks which, for the most part, constitute huge security vulnerabilities:
        using the same password for all accounts, choosing ultra-basic passwords, write them down in Excel files or
        leave them exposed in browsers... These are all entry points for cybercriminals!
      </p>
      <p>
        <strong>Letting some of your employees not secure their passwords puts your organization at risk.</strong>
      </p>
      <p>
        In light of these issues,{" "}
        <strong>the role of the CISO is to help employees implement and maintain a sufficient level of security</strong>
        . Without making their daily tasks heavier, nor being too intrusive... Nor even by adding strong constraints,
        which until now was the CISO’s only recourse (e.g. replacing a password every six weeks). Now, with the advanced
        management tools that exist, the CISO has new means to enforce password management rules by all employees,
        effortlessly.
      </p>
      <h2>How can we support employees towards greater security?</h2>
      <Image src={EmployeesPasswordsImg} alt="" width="425" style={{ float: "left", marginRight: 10 }} />
      <p>
        Your goal is to{" "}
        <strong>get everyone towards the adoption of essential password management best practices</strong>. At UpSignOn,
        we believe that the key is to offer your employees a simple tool that they will want to use, and to provide you
        with information that will allow you to target your awareness and support actions.
      </p>
      <p>
        Our application already acts as a first awareness tool as such by explicitly displaying to users the passwords
        that must be changed as a priority.
      </p>
      <p>
        From the <strong>supervision console</strong>, the CISO and his teams can monitor the evolution of the password
        scores of the entire user base without ever accessing the secrets (end-to-end encrypted); they can now detect
        those who still keep weak or reused passwords and implement the necessary corrective actions and personalized
        support with them.
      </p>
    </>
  );
}

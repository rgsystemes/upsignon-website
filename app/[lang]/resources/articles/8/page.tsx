import { Metadata } from "next";
import { getDictionary } from "../../../../../translations/translations";
import styles from "../article.module.css";

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const t = getDictionary(params.lang);
  return {
    title: t.articles[8].title,
    description: t.articles[8].metaDescription,
  };
}
export default function Article8({ params }: { params: { lang: string } }) {
  const t = getDictionary(params.lang);
  return (
    <div className={styles.content}>
      <div className={styles.backArrow}>
        <span>&lt;  </span>
        <a href="/resources/articles">{t.resources.articles}</a>
      </div>
      <article className={styles.article}>
        <h1>{t.articles[8].title}</h1>
        <p className={styles.articleSummary}>
          <strong>{t.articles[8].summary}</strong>
        </p>
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
      <h2>Une plus grande sécurité</h2>
      <p>
        Certains navigateurs ne vous demandent pas d’authentification pour accéder à vos mots de passe. Si vous laissez
        votre ordinateur déverrouillé sans surveillance (ce qui est certes une mauvaise pratique), une personne
        malveillante pourra facilement se connecter à vos sites. Avec UpSignOn, vos mots de passe ne sont pas
        utilisables tant que vous n’avez pas déverrouillé votre coffre-fort et celui-ci se verrouille automatiquement au
        bout d’un certain délai (paramétrable selon votre besoin).
      </p>

      <h2>Portabilité des données</h2>
      <p>
        Les gestionnaires de mots de passe intégrés des navigateurs sont conçus pour vous encourager à rester dans un
        écosystèmes (celui d’Apple, de Microsoft, ou de Google). Un utilisateur d’iPhone ne pourra pas synchroniser ses
        mots de passe vers son PC windows.
      </p>

      <h2>Partage de mots de passe</h2>
      <p>
        Un coffre-fort de mots de passe comme UpSignOn emporte des fonctionnalités avancées comme le partage de secrets,
        qui est une fonctionnalité fondamentale dans un contexte professionnel notamment.
      </p>

      <h2>Séparation pro / perso</h2>
      <p>
        La gestion des mots de passe dans les navigateurs ne permet pas de séparer les comptes professionnels des
        comptes personnels, ils sont tous stockés au même niveau. UpSignOn propose des coffres-forts PRO et PERSO.
      </p>

      <h2>Un offre-fort organisé et rangé, avec des notes et d’autres types de secrets</h2>
      <p>
        Les gestionnaires de mots de passe des navigateurs ont vocation à enlever la gestion à l’utilisateur et à
        s’afficher le moins possible à l’utilisateur (ce qui a la vertu de la simplicité, mais ce qui a l’inconvénient
        de cacher les problèmes sur la sécurité des mots de passe). Un coffre-fort de mots de passe dédié est conçu au
        contraire comme un outil du quotidien, que vous pouvez organiser, dans lequel vous pouvez ajouter des notes, des
        codes TOTP et des secrets qui ne sont pas forcément des mots de passe.
      </p>

      <h2>Une console de supervision</h2>
      <p>
        Les coffres-forts PRO d’UpSignOn sont supervisés pour permettre aux administrateurs (RSSI, DSI) de visualiser
        l’évolution de la force des mots de passe et d’identifier les personnes ayant besoin d’être accompagnées plus
        spécifiquement. Les coffres-forts de navigateur ne sont à l’inverse pas conçus pour les enjeux professionnels.
      </p>
    </>
  );
}
function ENArticle() {
  return (
    <>
      <h2>Greater security</h2>
      <p>
        Some browsers do not require authentication to access your passwords. If you leave your computer unlocked
        unattended (which is admittedly a bad practice), a malicious person can easily connect to your sites. With
        UpSignOn, your passwords cannot be used until you have unlocked your vault and it is automatically locked after
        a certain period of time (configurable according to your needs).
      </p>

      <h2>Data portability</h2>
      <p>
        Browsers’ built-in password managers are designed to encourage you to stay within one ecosystem (that of Apple,
        Microsoft, or Google). An iPhone user will not be able to synchronize their passwords to their Windows PC.
      </p>

      <h2>Password sharing</h2>
      <p>
        A password vault like UpSignOn provides advanced features such as sharing secrets, which is a fundamental
        feature in a professional context in particular.
      </p>

      <h2>Pro/perso separation</h2>
      <p>
        Password management in browsers does not allow professional accounts to be separated from personal accounts,
        they are all stored at the same level. UpSignOn offers PRO and PERSO vaults.
      </p>

      <h2>An organized and tidy vault, with notes and other types of secrets</h2>
      <p>
        Browser password managers are intended to remove management from the user and to appear as little as possible to
        the user (which has the virtue of simplicity, but which has the disadvantage of hiding password security
        issues). Instead, a dedicated password vault is designed as an everyday tool that you can organize, where you
        can add notes, TOTP codes and secrets that aren’t necessarily passwords.
      </p>

      <h2>A supervision console</h2>
      <p>
        UpSignOn’s PRO vaults are supervised to allow administrators (CISO, CIO) to view the evolution of password
        strength and identify people who need more specific support. Conversely, browser vaults are not designed for
        professional issues.
      </p>
    </>
  );
}

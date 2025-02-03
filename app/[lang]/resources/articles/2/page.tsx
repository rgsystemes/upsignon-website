import { Metadata } from "next";
import { getDictionary } from "../../../../../translations/translations";
import styles from "../article.module.css";
import Link from "next/link";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const t = getDictionary(lang);
  return {
    title: t.articles[2].title,
    description: t.articles[2].metaDescription,
    alternates: {
      canonical: "https://upsignon.eu/fr/resources/articles/2",
      languages: {
        fr: "https://upsignon.eu/fr/resources/articles/2",
        en: "https://upsignon.eu/en/resources/articles/2",
      },
    },
  };
}
export default async function Article2({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t = getDictionary(lang);
  return (
    <div className={styles.content}>
      <div className={styles.backArrow}>
        <span>&lt;  </span>
        <Link href="/resources/articles">{t.resources.articles}</Link>
      </div>
      <article className={styles.article}>
        <h1>{t.articles[2].title}</h1>
        <p className={styles.articleSummary}>
          <strong>{t.articles[2].summary}</strong>
        </p>
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
      <p>
        D’après une récente étude,
        <strong>59% des internautes utiliseraient le même mot de passe pour tous leurs comptes</strong>. La même part ne
        ferait d’ailleurs aucune distinction entre les mots de passe professionnels et personnels… En faites-vous
        partie ?
      </p>

      <p>
        Si oui, on peut imaginer que vous utilisez le même mot de passe pour l’ensemble de vos connexions par souci de
        simplicité : <strong>pour ne retenir qu’un seul mot de passe</strong> permettant de vous connecter à tous les
        sites ou plateformes que vous utilisez. De cette façon, vous vous épargnez les “mots de passe oubliés” source de
        perte de temps quand il faut en regénérer. Vous vous connectez de façon simple et immédiate à n’importe quel
        compte. Si vous êtes sensible aux questions de cybersécurité, vous aurez sans doute pris soin de choisir un mot
        de passe fort. Finalement, votre gestion des mots de passe semble à la fois pratique et sécurisée… Que demander
        de plus ?
      </p>

      <p>
        Et bien en réalité, même si le mot de passe choisi est robuste individuellement, le fait de l’utiliser sur
        plusieurs plateformes le rend très vulnérable ! Le problème ne vient pas tant du mot de passe lui-même que des
        sites sur lesquels vous saisissez votre mot de passe qui eux ne sont pas toujours bien sécurisés ou du réseau
        sur lequel vous vous connectez qui de même n’est pas toujours sécurisé. (Ne vous connectez jamais à un réseau
        public, réseau wifi d’aéroport par exemple, sans sécuriser votre connexion par VPN.)
      </p>

      <p>
        <strong>
          Lorsqu’un pirate réussit à voler vos identifiants sur un site, la première chose qu’il va faire sera de tester
          ces identifiants sur d’autres sites beaucoup plus sensibles.
        </strong>
      </p>

      <p>
        En réutilisant le même mot de passe partout, vous abaissez votre sécurité au site le moins sécurisé sur lequel
        vous avez saisi votre mot de passe. Et vu le nombre de sites que nous utilisons tous, vous seriez vraiment très
        chanceux qut tous ces sites soit parfaitement sécurisés...
      </p>
      <h2>Conclusion : utilisez un coffre-fort de mots de passe</h2>
      <p>
        Pour limiter les piratages en cascade, il est donc indispensable d’utiliser un mot de passe unique pour chaque
        site sur lequel vous vous connectez. Et comme cela va vite devenir compliqué à retenir, nous vous conseillons d’
        <strong>utiliser un coffre-fort de mots de passe</strong>. Non seulement cela renforcera fortement la sécurité
        de vos comptes et de vos données, mais cela vous rendra aussi la vie plus simple.
      </p>
    </>
  );
}
function ENArticle() {
  return (
    <>
      <p>
        According to a recent study, <strong>59% of Internet users use the same password for all their accounts</strong>
        . The same part would also make no distinction between professional and personal passwords... Are you one of
        them?
      </p>

      <p>
        If yes, we can imagine that you use the same password for all of your connections for the sake of simplicity:
        <strong>to remember only one password</strong> allowing you to connect to any sites or platforms you use. This
        way, you avoid “forgotten passwords”, a source of time wastage when you have to regenerate them. You log in
        simply and immediately to any account. If you are sensitive to cybersecurity issues, you will undoubtedly have
        taken care to choose a strong password. Finally, your password management seems both practical and secure...
        What more could you ask for?
      </p>

      <p>
        Well in reality, even if the chosen password is individually strong, using it on multiple platforms makes it
        very vulnerable! The problem does not come so much from the password itself as from the sites on which you enter
        your password which are not always very secure or from the network on which you connect which is also not always
        secure. (Never connect to a public network, such as an airport WiFi network, without securing your connection
        using a VPN.)
      </p>

      <p>
        <strong>
          When a hacker succeeds in stealing your credentials on one site, the first thing he will do will be to test
          these credentials on other, much more sensitive sites.
        </strong>
      </p>

      <p>
        By reusing the same password everywhere, you lower your security to the least secure site where you entered your
        password. And given the number of sites we all use, you would be very lucky if all of these sites were perfectly
        secure...
      </p>
      <h2>Conclusion: Use a password vault</h2>
      <p>
        To limit cascading hacks, it is therefore essential to use a unique password for each site to which you connect.
        And as this will quickly become complicated to remember, we advise you to <strong>use a password vault</strong>.
        Not only will this greatly enhance the security of your accounts and data, but it will also make your life
        easier.
      </p>
    </>
  );
}

import { Metadata } from "next";
import { getDictionary } from "../../../../../translations/translations";
import styles from "../article.module.css";
import Link from "next/link";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const t = getDictionary(lang);
  return {
    title: t.articles[6].title,
    description: t.articles[6].metaDescription,
    alternates: {
      canonical: "https://upsignon.eu/fr/resources/articles/6",
      languages: {
        fr: "https://upsignon.eu/fr/resources/articles/6",
        en: "https://upsignon.eu/en/resources/articles/6",
      },
    },
  };
}
export default async function Article6({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t = getDictionary(lang);
  return (
    <div className={styles.content}>
      <div className={styles.backArrow}>
        <span>&lt;  </span>
        <Link href="/resources/articles">{t.resources.articles}</Link>
      </div>
      <article className={styles.article}>
        <h1>{t.articles[6].title}</h1>
        <p className={styles.articleSummary}>
          <strong>{t.articles[6].summary}</strong>
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
        Les fraudes sur internet et cyber attaques se sont multipliées ces dernières années, amenant les internautes à
        communiquer des données sensibles ou à ouvrir la porte, sans le savoir, à des logiciels malveillants. Pour
        limiter ces risques, il est indispensable de savoir repérer si un site web est sécurisé ou non. Voici 5 points
        de diagnostic à vérifier avant d’aller plus loin dans la navigation sur un site web.
      </p>
      <h2>Un design obsolète, des pages buggées</h2>
      <p>
        Un design trop “old school” dans le graphisme ou les choix typographiques, des liens cassés ou des pages qui
        refusent de s’afficher… Vous êtes très probablement face à un site qui n’a pas été mis à jour depuis quelques
        années et/ou qui manque cruellement de maintenance.
      </p>
      <p>
        Ces faiblesses induisent d’abord une mauvaise expérience utilisateur : vous aurez certainement envie de passer
        votre chemin ! Sachez ensuite qu’elles peuvent entraîner aussi des vulnérabilités de sécurité. Les mises à jour
        de sécurité sont importantes pour résoudre les vulnérabilités connues et améliorer la sécurité globale du site
        web. Par ailleurs, les pages buggées peuvent être exploitées par des attaquants pour compromettre le site web ou
        voler des informations sensibles. Certains d’entre eux utilisent effectivement des failles dans le code pour
        injecter des scripts malveillants ou accéder à des données confidentielles…
      </p>

      <h2>L’usage du protocole HTTP au lieu de HTTPS</h2>
      <p>
        L’utilisation du protocol http n’est quasiment plus possible aujourd’hui car les navigateurs modernes bloquent
        l’accès à ces sites et affichent un avertissement de sécurité. Mais si vous naviguez avec un navigateur ancien
        ou si vous choisissez de contourner le blocage en forçant l’affichage du site, sachez que vous tout le monde
        peut voir tout ce que vous écrivez sur le site, y compris vos mots de passe, vos informations de paiement, etc.!
      </p>
      <p>
        À l’inverse, le protocol https permet de chiffrer toutes les communications entre vous et le site. Ce n’est pas
        une garantie de sécurité parfaite, mais c’est vraiment le strict minimum que vous pouvez exiger d’un site!
      </p>
      <div className={styles.techNote}>
        <p>
          <strong>Note technique : plusieurs version de https</strong>
        </p>
        <p>
          Toutes les connexions https ne se valent pas. Le protocol a évolué au cours du temps. Les premières versions
          du procotol (SSLv2 puis SSLv3) ne sont plus considérées comme sûres. Le protocol TLS qui leur a succédé a lui
          aussi évolué: TLS 1.0 et TLS1.1 sont désormais obsolètes et seul TLS 1.2 et TLS 1.3 sont aujourd’hui
          recommandés. Or les vieux navigateurs ne sont pas compatibles avec ces protocoles.{" "}
          <strong>
            Pensez donc à mettre à jour vos navigateurs pour éviter d’utiliser des protocoles de sécurité obsolètes.
          </strong>
        </p>
      </div>
      <p>
        Attention, des liens https:// peuvent aussi ne pas être sûrs si le certificat associé n’est pas reconnu. Dans ce
        cas votre navigateur vous affichera un avertissement de sécurité et un cadenas barré.
      </p>
      <ul>
        <li>
          <strong>
            Évitez de cliquer sur des liens commançant par http://, ne cliquez que sur des liens commençants par
            https://
          </strong>
        </li>
        <li>
          <strong>
            N’ignorez pas les avertissements de sécurité de votre navigateur, sauf si vous savez vraiment ce que vous
            faites.
          </strong>
        </li>
      </ul>

      <h2>La composition de l’url d’un site web</h2>
      <p>
        Attention, un site web https:// sans alrte de sécurité n’est pas forcément le site web que vous vous attendiez
        vraiment à visiter. Imaginons que vous cherchiez à contacter le site de votre banque. Son url légitime serait
        par exemple ma-banque.com.
      </p>
      <h4>Étape 1 : identifier le nom de domaine</h4>
      <p>
        Dans une URL, le nom de domaine est tout ce qui se trouve après https:// et avant le premier caractère ‘/’ ou
        ‘#’ ou ‘?’.
        <br />
        Par exemple, dans https://ma-banque.com/login, le nom de domaine est ma-banque.com.
        <br />
        De même, dans https://login.ma-banque.com/fr, le nom de domaine est login.ma-banque.com.
      </p>
      <h4>Étape 2 : comprendre la notion de sous-domaine</h4>
      <p>
        Dans un nom de domaine, on peut ajouter un sous-domaine en ajoutant le nom du sous-domaine suivi d’un point
        AVANT le domaine principal. Par exemple, login.ma-banque.com est un sous-domaine de ma-banque.com et non
        l’inverse. On peut ajouter autant de sous(-sous)-domaines que l’on souhaite.
      </p>
      <h4>Étape 3 : ne pas confondre les domaines</h4>
      <p>Les pirates utilisent plusieurs méthodes pour vous tromper :</p>
      <ul>
        <li>utilisation d’un nom de domaine avec la mauvaise extension (.org au lieu de .com par exemple)</li>
        <li>
          utilisation d’un nom de domaine proche, par exemple en ajoutant un point au milieu, en remplaçant un caractère
          spécial par un autre, ou en changeant un ‘o’ en ‘0’. Cela pourrait donner :
          <ul>
            <li>https://ma.banque.com</li>
            <li>https://mabanque.com</li>
            <li>https://mabaqnue.com</li>
          </ul>
        </li>
        <li>
          utilisation d’un sous-domaine de leur domaine à eux correspondant à celui que vous cherchez, par exemple :
          <ul>
            <li>https://ma-banque.login.com</li>
            <li>https://ma-banque.secure-login.com</li>
          </ul>
        </li>
      </ul>
      <p>Ne vous y trompez pas ! vous n’êtes pas sur le bon site !</p>
      <p>
        <strong>
          Ce point est crucial car c’est le moyen le plus courant pour les hackers pour faire du hameçonnage !
        </strong>{" "}
        Avant de saisir vos données personnelles, vous devriez systématiquement vérifier que vous êtes bien sur la page
        officiel de l’organisme que vous recherchez, et d’autant plus si ce lien vous a été envoyé par mail ou sms.
      </p>

      <h2>Le renvoi d’un mot de passe par email</h2>
      <p>
        Les sites webs ne sont pas censés stockés vos mots de passe tels quels. Ils sont censés stocker seulement une
        empreinte de votre mot de passe pour être incapable de lire votre mot de passe eux-mêmes et pour qu’un pirate
        ayant pris le contrôle du site ne puisse pas non plus récupérer les mots de passe des utilisateurs.
      </p>
      <p>
        Lorsque vous utilisez la fonction de mot de passe oublié, le site doit vous faire cliquer sur un lien puis vous
        demander de choisir un nouveau mot de passe.
      </p>
      <p>
        <strong>
          Donc si un site vous renvoie votre mot de passe par email lorsque vous utilisez le bouton mot de passe oublié,
          c’est qu’il n’a absolument pas respecté ce principe de base.
        </strong>{" "}
        Fuyez et changez immédiatement votre mot de passe sur vos autres sites si vous avez eu la mauvaise idée de
        réutiliser le même partout.
      </p>

      <h2>La présence de publicités et pop-ups sur la page de connexion</h2>
      <p>
        Si le site que vous visitez affiche des publicités sur sa page de connexion, soyez très méfiant car c’est une
        très mauvaise pratique et cela peut générer des problèmes de sécurité critiques.
      </p>
    </>
  );
}
function ENArticle() {
  return (
    <>
      <p>
        Internet fraud and cyber attacks have increased in recent years, leading Internet users to communicate sensitive
        data or unknowingly open the door to malware. To limit these risks, it is essential to know how to identify
        whether a website is secure or not. Here are 5 diagnostic points to check before going any further in browsing a
        website.
      </p>
      <h2>Outdated design, buggy pages</h2>
      <p>
        A design that is too “old school” in the graphics or typographic choices, broken links or pages that refuse to
        display… You are most likely facing a site that has not been updated for some years and/or which is seriously
        lacking in maintenance.
      </p>
      <p>
        These weaknesses initially lead to a poor user experience: you will definitely want to move on! Then be aware
        that they can also lead to security vulnerabilities. Security updates are important to resolve known
        vulnerabilities and improve overall website security. Additionally, buggy pages can be exploited by attackers to
        compromise the website or steal sensitive information. Some of them actually use flaws in the code to inject
        malicious scripts or access confidential data…
      </p>
      <h2>Using the HTTP protocol instead of HTTPS</h2>
      <p>
        The use of the http protocol is almost no longer possible today because modern browsers block access to these
        sites and display a security warning. But if you are browsing with an older browser or if you choose to bypass
        the blocking by forcing the display of the site, know that everyone can see everything you write on the site,
        including your passwords, payment details, etc.!
      </p>
      <p>
        Conversely, the https protocol allows all communications between you and the site to be encrypted. It’s not a
        perfect security guarantee, but it’s really the bare minimum you can ask for from a site!
      </p>
      <div className={styles.techNote}>
        <p>
          <strong>Technical note: several versions of https</strong>
        </p>
        <p>
          Not all https connections are created equal. The protocol has evolved over time. The first versions of the
          procotol (SSLv2 then SSLv3) are no longer considered secure. The TLS protocol that succeeded them has also
          evolved: TLS 1.0 and TLS1.1 are now obsolete and only TLS 1.2 and TLS 1.3 are recommended today. However, old
          browsers are not compatible with these protocols.
          <strong>So remember to update your browsers to avoid using outdated security protocols.</strong>
        </p>
      </div>
      <p>
        Beware, https:// links can also be not secure if the associated certificated is not recognized. In that case,
        your browser will display a security warning and a barred padlock.
      </p>
      <ul>
        <li>
          <strong>Avoid clicking on links starting with http://, only click on links starting with https://</strong>
        </li>
        <li>
          <strong>Do not ignore your browser’s security warnings except if you really know what you are doing.</strong>
        </li>
      </ul>

      <h2>The composition of the URL of a website</h2>
      <p>
        Be careful, an https:// website without security alerts is not necessarily the website you really expected to
        visit. Let’s say you’re trying to contact your bank’s website. Its legitimate URL would be, for example,
        ma-banque.com.
      </p>
      <h4>Step 1: identify the domain name</h4>
      <p>
        In a URL, the domain name is everything after https:// and before the first character ‘/’ or ’#’ Or ’?’.
        <br />
        For example, in https://ma-banque.com/login, the domain name is ma-banque.com.
        <br />
        Likewise, in https://login.ma-banque.com/fr, the domain name is login.ma-banque.com.
      </p>
      <h4>Step 2: understand the notion of subdomain</h4>
      <p>
        In a domain name, you can add a subdomain by adding the name of the subdomain followed by a period BEFORE the
        main domain. For example, login.ma-banque.com is a subdomain of ma-banque.com and not the other way around. You
        can add as many sub(-sub)domains as you want.
      </p>
      <h4>Step 3: don’t confuse the domains</h4>
      <p>Hackers use several methods to trick you:</p>
      <ul>
        <li>use of a domain name with the wrong extension (.org instead of .com for example)</li>
        <li>
          using a similar domain name, for example by adding a period in the middle, replacing a special character with
          another, or changing an ’o’ to ’0’. This could result in:
          <ul>
            <li>https://ma.banque.com</li>
            <li>https://mabanque.com</li>
            <li>https://mabaqnue.com</li>
          </ul>
        </li>
        <li>
          use a subdomain of their domain corresponding to the one you are looking for, for example:
          <ul>
            <li>https://ma-banque.login.com</li>
            <li>https://ma-banque.secure-login.com</li>
          </ul>
        </li>
      </ul>
      <p>Make no mistake! you are on the wrong site!</p>
      <p>
        <strong>This point is crucial because it is the most common way for hackers to phish!</strong> Before entering
        your personal data, you should systematically check that you are on the official page of the organization you
        are looking for, and even more so if this link was sent to you by email or text message.
      </p>

      <h2>Resending a password by email</h2>
      <p>
        Websites are not supposed to store your passwords as is. They are supposed to only store a fingerprint of your
        password so that they are unable to read your password themselves and so that a hacker who has taken control of
        the site cannot recover user passwords either.
      </p>
      <p>
        When you use the forgotten password procedure, the site must send you a link then let you chose a new password.
      </p>
      <p>
        <strong>
          So if a site sends you your password by email when you use the forgotten password button, it is because it has
          absolutely not respected this basic principle.{" "}
        </strong>{" "}
        Run away and immediately change your password on your other sites if you had the bad idea of reusing the same
        one everywhere.
      </p>

      <h2>The presence of advertisements and pop-ups on the login page</h2>
      <p>
        If the site you are visiting displays advertisements on its login page, be very suspicious because this is a
        very bad practice and can cause critical security issues.
      </p>
    </>
  );
}

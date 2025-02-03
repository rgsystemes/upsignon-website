import { Metadata } from "next";
import { getDictionary } from "../../../../../translations/translations";
import styles from "../article.module.css";
import Link from "next/link";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const t = getDictionary(lang);
  return {
    title: t.articles[5].title,
    description: t.articles[5].metaDescription,
    alternates: {
      canonical: "https://upsignon.eu/fr/resources/articles/5",
      languages: {
        fr: "https://upsignon.eu/fr/resources/articles/5",
        en: "https://upsignon.eu/en/resources/articles/5",
      },
    },
  };
}
export default async function Article5({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t = getDictionary(lang);
  return (
    <div className={styles.content}>
      <div className={styles.backArrow}>
        <span>&lt;  </span>
        <Link href="/resources/articles">{t.resources.articles}</Link>
      </div>
      <article className={styles.article}>
        <h1>{t.articles[5].title}</h1>
        <p className={styles.articleSummary}>
          <strong>{t.articles[5].summary}</strong>
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
      <h2>Préambule : Les 3 familles d’authentification</h2>
      <p>Il existe trois grandes familles de facteur d’authentification :</p>
      <ul>
        <li>
          <strong>Le facteur de connaissance</strong> (ce que je sais et que je suis le seul à connaître) : mots de
          passe, codes PIN, questions secrètes.
        </li>
        <li>
          <strong>Le facteur inhérent</strong> (ce que je suis) : empreinte digitale, reconnaissance faciale ou vocale,
          mais aussi des dispositifs plus élaborés comme l’empreinte palmaire, la reconnaissance de l’iris, de
          l’haleine, l’ADN, le réseau de veines, certains comportements comme la façon de taper sur un clavier… Tous ces
          éléments sont des marqueurs biologiques et sont donc uniques pour chaque individu sur Terre.
        </li>
        <li>
          <strong>Le facteur de possession</strong> (ce que je détiens) : téléphone (SMS ou appli), carte à puce,
          certificat, clé…
        </li>
      </ul>
      <p></p>
      <div className={styles.techNote}>
        <h4>Identification vs. Authentification</h4>
        <ul>
          <li>
            <strong>L’identification</strong> consiste à reconnaître un individu unique par son état civil (nom, prénom,
            date de naissance, nationalité, etc.). Présenter une carte d’identité ou un passeport permet d’être
            identifié.
          </li>
          <li>
            <strong>L’authentification</strong> est le fait de vérifier la légitimité d’une personne ou d’un système à
            accéder à une ressource. Selon le contexte, il sera nécessaire ou non de s’identifier pour être authentifié.
            Pour ouvrir un compte en banque, vous devrez être identifié, mais pour accéder à l’espace client d’un site
            de e-commerce, votre identité ne sera pas exigée. Autrement dit, ne pas confondre identifiant avec identité.
          </li>
        </ul>
      </div>

      <h2>L’authentification multifacteur (MFA ou 2FA)</h2>
      <p>
        L’authentification multifacteur (MFA) est le fait de demander plusieurs preuves d’authentification pour
        renforcer la sécurité en cas de compromission de l’un des facteurs. Quand seulement 2 preuves sont utilisées on
        parle aussi de 2FA (2-Factor Authentication en anglais).
      </p>
      <p>
        Les 2 preuves doivent appartenir à des catégories différentes d’authentification (cf préambule). Lorsque deux
        preuves du même type sont demandées, on parle plutôt de double authentification. Par abus de langage, certaines
        personnes parlent de double authentification à la place d’authentification à deux facteurs qui est plus précis.
      </p>
      <p>
        Typiquement, un facteur de connaissance et un facteur de possession seront combinés. Par exemple possession
        d’une carte bleue + connaissance d’un code PIN, ou connaissance d’un mot de passe + possession d’une ligne
        téléphonique pour recevoir un SMS.
      </p>

      <h2>L’authentification forte</h2>
      <p>
        Il ne faut pas confondre l’authentification forte avec l’authentification multifacteurs. La notion
        d’authentification forte correspond à un système souvent à base de cryptographie et qui répond à certains
        critères de sécurité bien précis{" "}
        <Link
          target="_blank"
          href="https://www.ssi.gouv.fr/uploads/2021/10/anssi-guide-authentification_multifacteur_et_mots_de_passe.pdf"
        >
          définis par l’ANSSI ainsi :
        </Link>
      </p>
      <ul>
        <li>
          <strong>résistance aux attaques par écoute</strong> qui consistent pour un attaquant à passivement écouter ou
          observer le canal de communication entre le prouveur et le vérifieur : par exemple un code PIN d’immeuble
          n’est pas résistant à ce type d’attaque car quelqu’un qui vous observe peut voir le secret que vous tapez et
          rentrer dans l’immeuble. La plupart des systèmes d’authentification à base de facteur de connaissance, comme
          le mot de passe, ne résistent pas aux attaques par écoute (du moins pas sans l’utilisation d’un autre système
          de sécurité) et sont donc des systèmes d’authentification faibles.
        </li>
        <li>
          <strong>résistance aux attaques par rejeu</strong> qui consistent pour un attaquant à rejouer une séquence
          d’authentification qu’ils ont observé. Le mot de passe par exemple ne résiste pas à ce genre d’attaque car le
          même mot de passe est utilisé pour se connecter à chaque session. À l’inverse, un lien à usage unique pour
          réinitialiser un mot de passe ou un code TOTP n’est valide qu’une seule fois et ne peut donc pas être rejoué.
        </li>
        <li>
          <strong>résistance aux attaques de l’homme du milieu</strong> qui consistent pour un attaquant à intercepter
          et modifier les communications se déroulant entre le prouveur et le vérifieur lors de l’authentification sans
          être détecté. Si un pirate vous appelle et prétend être votre banquier pour vous demander votre mot de passe,
          rien ne vous empêche techniquement de le lui donner. Un système d’authentification forte vous empêcherait de
          divulguer votre secret à la mauvaise personne à votre insu.
        </li>
        <li>
          <strong>non-forgeabilité</strong>: l’observation par un attaquant de plusieurs échanges d’authentification
          d’un prouveur ne doit pas lui permettre d’usurper son identité dans un nouvel échange d’authentification.
        </li>
      </ul>

      <p>
        Les facteurs utilisés dans une MFA, bien que multiples, ne sont pas forcément considérés comme étant forts
        individuellement. L’exemple typique étant un mot de passe associé à un code temporaire reçu par SMS, une
        combinaison peu sécurisée, car très facile à pirater !
      </p>

      <p>
        Un système d’authentification forte n’a en théorie pas besoin d’être multi-facteurs. En pratique, les systèmes
        d’authentification forte reposent le plus souvent sur un facteur de possession lui-même verrouillé par un mot de
        passe ou par biométrie pour qu’il ne soit pas compromis en cas de vol.
      </p>

      <p>Les exemples de systèmes d’authentification forte reposant sur un facteur de possession sont :</p>
      <ul>
        <li>l’authentification par certificat (sur carte à puce ou sur clé usb)</li>
        <li>les protocles FIDO2 et FIDO U2F</li>
        <li>les protocles TOTP</li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        Le choix d’un type d’authentification doit se faire en rapport avec la criticité des données, du contexte dans
        lequel s’effectue l’authentification et des profils d’utilisateurs concernés. Ainsi, en 2021, l’ANSSI
        recommandait dans un grand nombre de cas de privilégier l’utilisation de l’authentification multifacteur,
        d’adapter la robustesse d’un mot de passe à son contexte d’utilisation et d’utiliser un coffre-fort de mots de
        passe.
      </p>
    </>
  );
}
function ENArticle() {
  return (
    <>
      <h2>Preamble: The 3 authentication families</h2>
      <p>There are three main families of authentication factors:</p>
      <ul>
        <li>
          <strong>The knowledge factor</strong> (what I know and that only I know): passwords, PIN codes, secret
          questions.
        </li>
        <li>
          <strong>The inherent factor</strong> (what I am): fingerprint, facial or voice recognition, but also more
          sophisticated systems such as palm print, iris recognition, breath, DNA, the network of veins, certain
          behaviors such as the way of typing on a keyboard… All these Elements are biological markers and are therefore
          unique for each individual on Earth.
        </li>
        <li>
          <strong>The possession factor</strong> (what I have): telephone (SMS or app), smart card, certificate, key…
        </li>
      </ul>
      <p></p>
      <div className={styles.techNote}>
        <h4>Identification vs. Authentication</h4>
        <ul>
          <li>
            <strong>Identification</strong> consists of recognizing a unique individual by their civil status (surname,
            first name, date of birth, nationality, etc.). Presenting an identity card or passport allows you to be
            identified.
          </li>
          <li>
            <strong>Authentication</strong> is the act of verifying the legitimacy of a person or system to access a
            resource. Depending on the context, it will be necessary or not to identify oneself to be authenticated. To
            open a bank account, you will need to be identified, but to access the customer profile of an ecommerce
            website, your identity will not be required. In other words, do not confuse identifier with identity.
          </li>
        </ul>
      </div>
      <h2>Multi-factor authentication (MFA or 2FA)</h2>
      <p>
        Multi-factor authentication (MFA) is the act of requesting several authentication proofs to strengthen security
        in the event of compromise of one of the factors. When only 2 proofs are used we also talks about 2FA (2-Factor
        Authentication in English).
      </p>
      <p>
        The 2 proofs must belong to different authentication categories (see preamble). When two proofs of the same type
        are requested, we rather speak of double authentication. By abuse of language, some People talk about double
        authentication instead of two-factor authentication which is more precise.
      </p>
      <p>
        Typically, a knowledge factor and a possession factor will be combined. For example possession a credit card +
        knowledge of a PIN code, or knowledge of a password + possession of a line telephone to receive an SMS.
      </p>

      <h2>Strong authentication</h2>
      <p>
        Strong authentication should not be confused with multi-factor authentication. The concept of strong
        authentication corresponds to a system often based on cryptography and which meets certain very specific
        security criteria{" "}
        <Link
          target="_blank"
          href="https://www.ssi.gouv.fr/uploads/2021/10/anssi-guide-AUTH_multifacteur_et_mots_de_passe.pdf"
        >
          defined by ANSSI as follows:
        </Link>
      </p>
      <ul>
        <li>
          <strong>resistance to eavesdropping attacks</strong> which consist of an attacker passively listening or
          observing the communication channel between the prover and the verifier: for example a building PIN code is
          not resistant to this type of attack because someone observing you can see the secret you are typing and enter
          the building. Most knowledge-based authentication systems, such as passwords, are not resistant to
          eavesdropping attacks (at least not without the use of another system security) and are therefore weak
          authentication systems.
        </li>
        <li>
          <strong>resistance to replay attacks</strong> which consist of an attacker replaying a sequence authentication
          that they observed. The password for example does not resist this type of attack because the Same password is
          used to log in to each session. Conversely, a single-use link for resetting a password or TOTP code is only
          valid once and therefore cannot be replayed.
        </li>
        <li>
          <strong>resistance to man-in-the-middle attacks</strong> which consist of an attacker intercepting and modify
          the communications taking place between the prover and the verifier during authentication without being
          detected. If a hacker calls you and pretends to be your banker to ask for your password, Nothing technically
          stops you from giving it to him. A strong authentication system would prevent you from disclosing your secret
          to the wrong person without your knowledge.
        </li>
        <li>
          <strong>non-forgeability</strong>: the observation by an attacker of several authentication exchanges of a
          prover must not allow him to usurp his identity in a new authentication exchange.
        </li>
      </ul>

      <p>
        The factors used in an MFA, although multiple, are not necessarily considered strong individually. The typical
        example being a password associated with a temporary code received by SMS, which is not a secure protocol at
        all.
      </p>

      <p>
        A strong authentication system does not, in theory, need to be multi-factor. In practice, strong authentication
        systems are most often based on a possession factor itself locked by a password or biometrics so that it is not
        compromised in the event of theft.
      </p>

      <p>Examples of strong authentication systems based on a possession factor are:</p>
      <ul>
        <li>certificate authentication (on a smart card or USB key)</li>
        <li>the FIDO2 and FIDO U2F protocols</li>
        <li>TOTP protocols</li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        The choice of a type of authentication must be made in relation to the criticality of the data, the context in
        which authentication is carried out and the target user profiles. Thus, in 2021, ANSSI recommended in a large
        number of cases to favor the use of multi-factor authentication, to adapt the strength of a password to its
        context and use a password vault.
      </p>
    </>
  );
}

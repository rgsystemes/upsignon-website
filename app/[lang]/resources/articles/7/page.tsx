import { Metadata } from "next";
import { getDictionary } from "../../../../../translations/translations";
import styles from "../article.module.css";

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const t = getDictionary(params.lang);
  return {
    title: t.articles[7].title,
    description: t.articles[7].metaDescription,
    alternates: {
      canonical: "https://upsignon.eu/fr/resources/articles/7",
      languages: {
        fr: "https://upsignon.eu/fr/resources/articles/7",
        en: "https://upsignon.eu/en/resources/articles/7",
      },
    },
  };
}
export default function Article7({ params }: { params: { lang: string } }) {
  const t = getDictionary(params.lang);
  return (
    <div className={styles.content}>
      <div className={styles.backArrow}>
        <span>&lt;  </span>
        <a href="/resources/articles">{t.resources.articles}</a>
      </div>
      <article className={styles.article}>
        <h1>{t.articles[7].title}</h1>
        <p className={styles.articleSummary}>
          <strong>{t.articles[7].summary}</strong>
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
      <p>
        Plus de 30 milliards de données personnelles ont fait l’objet de violations en 2020. Pour une partie d’entre
        elles, la faille de sécurité émanait du mot de passe. Si vous y avez échappé jusqu’ici, il ne faut pas pour
        autant vous penser totalement hors de danger. Même si vous avez l’impression de n’avoir rien à cacher, vos
        données intéressent les hackers… Voici pourquoi.
      </p>
      <h2>Vous n’avez rien à cacher ?</h2>
      <p>
        Dans leur usage privé du numérique, les internautes se sentent globalement peu concernés par les problèmes liés
        à la cybersécurité. Certains sont très peu avertis sur les cyber-risques et les comportements à adopter sur le
        web, tandis que d’autres pensent : “Je n’ai rien à cacher, pourquoi les hackers s’en prendraient-ils à moi ?” Et
        on ne peut pas leur en vouloir, la sécurité informatique revêt des aspects parfois assez techniques, voire
        complexes, difficiles d’accès pour les néophytes.
      </p>
      <p>
        Pour autant, chaque année, ce sont des milliards de données qui sont compromises dans le monde par des
        cybercriminels. Une grande part d’entre elles proviennent des pratiques digitales privées d’internautes qui
        n’ont a priori pas grand-chose à cacher… en apparence ! Car, en réalité, peu importe la “valeur” présumée de vos
        données, l’important est de saisir les motivations des hackers lorsqu’ils les dérobent. Vous comprendrez ainsi
        pourquoi, dans les faits, toutes les données personnelles peuvent avoir de la valeur à leurs yeux.
      </p>

      <h2>Vos données personnelles intéressent pourtant les hackers !</h2>
      <p>
        Avec quelques informations personnelles dérobées, les cybercriminels peuvent vous faire beaucoup de tort. En
        voici des exemples concrets.
      </p>
      <h3>L’usurpation d’identité</h3>
      <p>
        Les pirates peuvent chercher à utiliser vos informations personnelles (nom, prénom, adresse, date de naissance,
        numéro de carte bancaire…) pour essayer d’obtenir des services en votre nom, par exemple effectuer des achats en
        ligne ou obtenir un prêt bancaire.
      </p>
      <p>
        Beaucoup de standards téléphoniques vont vous autoriser à faire des demandes simplement en vérifiant vos
        informations personnelles de base (nom, prénom, date de naissance). C’est donc tout ce dont un hacker a besoin
        pour faire la même chose.
      </p>
      <h3>La vente sur le Dark Web</h3>
      <p>
        Certains hackers vendent vos données à d’autres cybercriminels sur le Dark Web. Les acheteurs peuvent ensuite
        les utiliser à leurs propres fins criminelles. Cela leur permet d’être moins facilement identifiables eux-mêmes.
      </p>
      <h3>Essayer d’accéder à votre compte bancaire</h3>
      <p>
        Si le pirate connaît votre numéro de téléphone, le nom de votre banque voire le nom de votre conseiller
        bancaire, il peut tenter de se faire passer pour votre conseiller pour vous conduire à lui confier vos données
        confidentielles et accéder à vos comptes bancaires.
      </p>
      <h3>Attaques dirigées contre vos proches</h3>
      <p>
        À partir d’informations personnelles volées, les hackers ciblent vos proches en se faisant passer pour vous.
        Vous avez peut-être déjà vu passer ces mails disant : “Je suis à l’étranger et j’ai un gros problème. C’est
        compliqué, je t’expliquerai plus tard. J’ai besoin de 3000€ très vite, peux-tu me faire un virement stp ? Je te
        rembourserai dès mon retour.” De cette façon, les victimes sont amenées à envoyer de l’argent aux hackers en
        pensant rendre service à la personne en difficulté…
      </p>
      <h3>Attaques dirigées contre vos collègues</h3>
      <p>
        Certains hackers ciblent le personnel d’une entreprise pour le pousser à divulguer des informations sensibles ou
        à effectuer des paiements. Quand ces attaques par phishing visent un individu ou un groupe restreint spécifique,
        elles portent le nom de « spear-phishing ». L’exemple typique est la fraude au CEO. Le pirate commence par
        récupérer autant d’informations que possible sur le dirigeant d’une entreprise, ses fournisseurs, sa situation
        économique, les personnes qui ont la main sur les paiements, etc. Puis il crée une boite mail au nom du CEO,
        envoie un mail à la personne habilitée à faire des virements depuis le compte de l’entreprise et justifie une
        opération secrète, dont il ne faut pas parler au bureau, liée au projet en cours pour faire faire un virement à
        la victime. Plus l’attaquant aura d’informations personnelles non secrètes sur les employés et l’entreprise,
        plus cette attaque aura de chances de réussir.
      </p>
    </>
  );
}
function ENArticle() {
  return (
    <>
      <p>
        More than 30 billion pieces of personal data were breached in 2020. For some of them, the security breach came
        from the password. If you have escaped it so far, you should not think you are completely out of danger. Even if
        you feel like you have nothing to hide, your data is of interest to hackers... Here’s why.
      </p>
      <h2>You have nothing to hide?</h2>
      <p>
        In their private use of digital technology, Internet users generally feel little concerned by problems related
        to cybersecurity. Some people are very little informed about cyber risks and the behavior to adopt on the web,
        while others think: “I have nothing to hide, why would hackers come after me?” And we can’t blame them, computer
        security sometimes has aspects that are quite technical, even complex, difficult to access for beginners.
      </p>
      <p>
        However, every year, billions of pieces of data are compromised around the world by cybercriminals. A large part
        of it come from the private digital practices of Internet users who a priori do not have much to hide...
        apparently! Because, in reality, no matter the presumed “value” of your data, the important thing is to
        understand the motivations of hackers when they steal it. You will thus understand why, in fact, all personal
        data can have value in their eyes.
      </p>

      <h2>Your personal data is of interest to hackers!</h2>
      <p>
        With a few stolen personal information, cybercriminals can do you a lot of harm. Here are concrete examples.
      </p>
      <h3>Identity theft</h3>
      <p>
        Hackers may seek to use your personal information (last name, first name, address, date of birth, credit card
        number, etc.) to try to obtain services in your name, for example making online purchases or obtaining a bank
        loan.
      </p>
      <p>
        Many telephone switchboards will allow you to make requests simply by verifying your basic personal information
        (last name, first name, date of birth). So that’s all a hacker needs to do the same thing.
      </p>
      <h3>Selling on the Dark Web</h3>
      <p>
        Some hackers sell your data to other cybercriminals on the Dark Web. Buyers can then use them for their own
        criminal purposes. This makes them less easily identifiable themselves.
      </p>
      <h3>Try to access your bank account</h3>
      <p>
        If the hacker knows your telephone number, the name of your bank or even the name of your bank advisor, he may
        try to impersonate your advisor to lead you to entrust him with your confidential data and access your bank
        accounts.
      </p>
      <h3>Attacks against your loved ones</h3>
      <p>
        Using stolen personal information, hackers target your loved ones by pretending to be you. You may have already
        seen those emails saying: “I’m abroad and I have a big problem. It’s complicated, I’ll explain to you later. I
        need €3000 very quickly, can you send me a transfer please? I’ll pay you back when I get back.” In this way,
        victims are led to send money to hackers thinking they are doing a service to the person in difficulty…
      </p>
      <h3>Attacks against your colleagues</h3>
      <p>
        Some hackers target a company’s staff to pressure them into disclosing sensitive information or making payments.
        When these phishing attacks target a specific individual or small group, they are called “spear-phishing”. The
        typical example is CEO fraud. The hacker begins by recovering as much information as possible about the manager
        of a company, its suppliers, its economic situation, the people who have control over payments, etc. Then he
        creates an email box in the name of the CEO, sends an email to the person authorized to make transfers from the
        company account and justifies a secret operation, which should not be discussed in the office, linked to the
        current project to make a transfer to the victim. The more non-secret personal information about employees and
        the company the attacker has, the more likely this attack will be successful.
      </p>
    </>
  );
}

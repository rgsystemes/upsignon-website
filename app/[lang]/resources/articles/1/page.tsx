import { Metadata } from "next";
import { getDictionary } from "../../../../../translations/translations";
import styles from "../article.module.css";

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const t = getDictionary(params.lang);
  return {
    title: t.articles[1].title,
    description: t.articles[1].metaDescription,
  };
}

export default function Article1({ params }: { params: { lang: string } }) {
  const t = getDictionary(params.lang);
  return (
    <div className={styles.content}>
      <div className={styles.backArrow}>
        <span>&lt;  </span>
        <a href="/resources/articles">{t.resources.articles}</a>
      </div>
      <article className={styles.article}>
        <h1>{t.articles[1].title}</h1>
        <p className={styles.articleSummary}>
          <strong>{t.articles[1].summary}</strong>
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

function getMetricTime(t: number, lang: string): { t: string; c: string } {
  const minute = 60;
  const hour = 3600;
  const day = 3600 * 24;
  const month = 3600 * 24 * 30;
  const year = 3600 * 24 * 365;
  const millionYears = year * 1000000;
  const billionYears = millionYears * 1000;
  const trad = getDictionary(lang);

  let T = "";
  if (t < Math.pow(10, -3)) {
    T = trad.articles[1].instantly;
  } else if (t < 1) {
    T = `${Math.round(t * 1000)} ms`;
  } else if (t < minute) {
    T = `${Math.round(t)} s`;
  } else if (t < hour) {
    T = `${Math.round(t / minute)} min`;
  } else if (t < day) {
    T = `${Math.round((t / hour) * 10) / 10} h`;
  } else if (t < month) {
    T = `${Math.round((t / day) * 10) / 10} ${trad.articles[1].day}`;
  } else if (t < year) {
    T = `${Math.round((t / month) * 10) / 10}${trad.articles[1].month}`;
  } else if (t < year * 1000) {
    T = `${Math.round(t / year)} ${trad.articles[1].years}`;
  } else if (t < millionYears) {
    T = `${Math.round(t / year / 1000)} 000 ${trad.articles[1].years}`;
  } else if (t < billionYears) {
    T = `${Math.round(t / millionYears)} ${trad.articles[1].mYears}`;
  } else {
    T = `${Math.round(t / billionYears)} ${trad.articles[1].bYears}`;
  }

  // 1min -> rgb(189,47,39)
  // 6mois -> rgb(85,131,46)
  let c = "";
  if (t < minute) {
    c = "rgb(189,47,39)"; // red
  } else if (t < day) {
    c = "rgb(200,93,83)"; // light red
  } else if (t < month) {
    c = "rgb(221,117,59)"; // orange
  } else if (t < year * 100) {
    c = "rgb(136,179,98)"; // light green
  } else {
    c = "rgb(85,131,46)"; // green
  }

  return { t: T, c };
}
function getTableBody(lang: string) {
  const testsPerSeconds = 2 * Math.pow(10, 14);
  return (
    <tbody>
      {[4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map((n) => (
        <tr key={n}>
          <th>{n}</th>
          {[10, 26, 52, 62, 90].map((a) => {
            const { t, c } = getMetricTime(Math.pow(a, n) / 2 / testsPerSeconds, lang);
            return (
              <td key={a} style={{ backgroundColor: c }} className={styles.timeCell}>
                {t}
              </td>
            );
          })}
        </tr>
      ))}
    </tbody>
  );
}
function FRArticle() {
  return (
    <>
      <p>La force d’un mot de passe correspond au temps qu’un pirate mettra en moyenne pour le trouver.</p>
      <p>Quelques exemples :</p>
      <ul>
        <li>
          Si vous utilisez le mot de passe “123456“, le pirate le trouvera immédiatement car c’est le mot de passe le
          plus utilisé au monde, et c’est donc le premier mot de passe qu’il testera.
        </li>
        <li>
          Si vous utilisez une information personnelle (date de naissance, prénom d’un enfant, nom de la ville où vous
          passez vos vacances), votre mot de passe sera également très facile à deviner car ces informations peuvent
          être trouvées facilement sur internet.
        </li>
      </ul>
      <h2>Les différentes techniques de piratage</h2>

      <h3>Cas théorique : attaque par force brute</h3>
      <p>
        Prenons le cas théorique d’un pirate pas très malin qui souhaite trouver le mot de passe que vous utilisez sur
        un site en testant chaque mot de passe possible un par un. Évidemment, il ne fait pas cela manuellement, il
        utilise un script qui peut tester un très grand nombre de mots de passe par seconde.
      </p>
      <p>
        Le nombre N de mots de passe de longueur L qu’on peut former à partir d’un nombre C de caractères différents est
        N=C^L. Par exemple, le nombre de mots de passe de 5 caractères ne contenant que des lettres minuscules (26
        lettres) est 26^5 = 11 881 376.
      </p>
      <p>
        En moyenne, le pirate devra tester la moitié des mots de passe avant de trouver le bon (après en avoir testé la
        moitié, il a plus de chance d’avoir déjà trouvé le mot de passe que de ne pas l’avoir déjà trouvé). Le nombre de
        tests que le pirate devra faire est donc C^L/2.
      </p>
      <p>
        La question est de savoir combien de mots de passe le pirate peut tester par secondes. Cela dépendra de
        plusieurs conditions, de la puissance de calcul du pirate, du mode de stockage du mot de passe, mais prenons
        pour l’exemple le cas d’un pirate utilisant un ordinateur moderne. Cet ordinateur possède 8 coeurs tournant à
        2.6 GHz. Il peut donc effectuer grossièrement 20 milliards de tests par seconde dans les meilleures conditions.
        Les pirates les plus organisés auront probablement des puissances de calcul 10000 fois plus élevées. On obtient
        alors les temps de cassage suivants :
      </p>
      <figure className={styles.figure}>
        <figcaption>Temps requis pour extraire un mot de passe à partir d’un hash par force brute</figcaption>
        <div className={styles.pwdCrackTable}>
          <table>
            <thead>
              <tr>
                <th>Nombre de caractères</th>
                <th>Chiffres seulement (10 car.)</th>
                <th>Lettres minuscules (26 car.)</th>
                <th>Lettres minuscules et majuscules (52 car.)</th>
                <th>Chiffres, lettres minuscules et majuscules (62 car.)</th>
                <th>Symboles, chiffres, lettres minuscules et majuscules (90 car.)</th>
              </tr>
            </thead>
            {getTableBody("fr")}
          </table>
        </div>
      </figure>
      <p>
        Si vous partez d’un mot de passe à 9 caractères alphanumériques c’est à dire sans caractères spéciaux
        (résistance 33 secondes), il est plus efficace de rajouter un dixième caractère (résistance 35 minutes) que de
        remplacer un caractère dans le mot de passe par un caractère spécial (résistance 2 minutes).
      </p>
      <p>
        <strong>
          Un bon mot de passe doit aujourd’hui contenir au moins 12 caractères alphanumériques et spéciaux.
        </strong>
        C’est d’ailleurs ce que recommandent les agences étatiques, comme l’ANSSI en France.
      </p>
      <p>
        <strong>
          Un mot de passe de 16 caractères contenant des caractères alphanumériques sera très fort, même si le pirate
          est un million de fois plus puissant que l’hypothèse que nous avons prise
        </strong>
        (ça couterait très très cher d’avoir autant de puissance de calcul...)
      </p>
      <p>
        Évidemment, moins un mot de passe permet d’accéder à des ressources sensibles, moins le pirate a d’intérêt
        économique à le hacker et plus vous pouvez en théorie vous permettre de le choisir faible.
      </p>

      <h3>Cas réel : attaque par dictionnaire</h3>
      <p>
        En pratique les pirates utilisent rarement la force brute car il existe une technique beaucoup plus efficace :
        l’attaque par dictionnaire. L’idée est simple, plutôt que de tester les mots de passe de façon aléatoire, le
        pirate utilise des listes de mots de passe qui ont déjà fuité. Ces listes contiennent plusieurs centaines de
        millions de mots de passe réellement utilisés par des internautes et triés par nombre d’occurence. Le pirate va
        donc commencer par tester le mot de passe le plus utilisé du monde, c’est-à-dire “123456”. Puis il va tester
        “123456789”, puis “azerty”, etc. Si vous utilisez l’un de ces mots de passe, c’est vraiment que vous cherchez
        les problèmes.
      </p>
      <p>
        <strong>
          Le cybercriminel teste ensuite des variantes de ces mots de passe, avec les mécanismes classiques de
          remplacement de lettre par des chiffres ou symboles.
        </strong>
        Par exemple, un a devient un @, un o devient un 0, etc. Sont également testés les mots de passe composés de
        suites, tels que abcd, 1234, azerty, ou avec une racine comportant le nom du site ou des informations
        personnelles.
      </p>
      <p>
        Avec cette technique, même un mot de passe assez long et complexe peut ne pas être assez fort… Le mot de passe
        <em>P@$$w0rd!</em> est donc à pein plus fort que le mot de passe <em>password</em>.
      </p>

      <h2>Comment rendre son mot de passe “fort” ?</h2>
      <p>
        Bien qu’un mot de passe soit toujours <em>cassable</em>, il est heureusement possible de limiter et ralentir ces
        attaques. Voici quelques solutions efficaces pour renforcer vos mots de passe et éviter ces intrusions.
      </p>
      <h3>Utilisez idéalement des mots de passe aléatoires et longs</h3>
      <p>
        L’idéal est bien sûr d’utiliser un générateur de mot de passe aléatoire. Ce type de mot de passe est insensible
        à une attaque par dictionnaire et le hacker doit donc utiliser la force brute, ce qui est totalement
        rédhibitoire car le mot de passe généré sera par ailleurs souvent très long. Ce type de mot de passe rend
        obligatoire l’utilisation d’un coffre-fort de mot de passe car ils sont impossibles à retenir.
      </p>
      <h3>Et pour des mots de passe forts mais faciles à mémoriser</h3>
      <p>
        Les techniques suivantes génèrent des mots de passe plus faciles à mémoriser, plus forts qu’un code habituel
        mais moins qu’un mot de passe aléatoire. Elles sont adaptées notamment pour les mots de passe de session Windows
        et le mot de passe maître de votre coffre-fort de mots de passe.
      </p>
      <p>
        <strong>Les phrases de passe</strong>
      </p>
      <p>
        Dans le cas où vous avez besoin de mémoriser vous-mêmes votre mot de passe, vous pouvez utiliser la technique de
        la phrase de passe. L’idée est d’associer des mots divers, avec ou sans espace, pour constituer une suite de
        caractères. Dans l’idéal, votre phrase doit contenir 4 mots et 15 caractères au minimum. À éviter : les
        citations célèbres et expressions. Une phrase de passe ressemblerait à : bureaufeutreplanterideau.
      </p>
      <p>
        <strong>La simplification d’une phrase</strong>
      </p>
      <p>
        Une autre technique permettant de générer des mots de passe relativement forts est de partir d’une phrase assez
        longue et de choisir les initiales ou des écritures phonétiques des mots de cette phrase. Par exemple, partons
        de la phrase « Voici un mot de passe contenant des caractères spéciaux et des chiffres. ». Cela pourrait donner
        le mot de passe suivant : « V1m2pcdcs&dc ».
      </p>
      <p>
        En pratique, utilisez une phrase qui n’est pas une citation célèbre et qui aboutit à un mot de passe contenant
        une combinaison de tous les caractères pour que votre mot de passe remplissent les critères habituels exigés par
        les sites. Ce genre de mots de passe est probablement légèrement plus difficile à taper que ceux de la méthode
        précédente, mais est en théorie plus fort qu’une phrase de passe.
      </p>

      <h2>Conclusion</h2>
      <p>
        Retenez que la meilleure façon d’obtenir un mot de passe fort est d’utiliser un générateur de mot de passe
        aléatoire et de choisir une longueur supérieure à 16.
      </p>
      <p>
        Évidemment, cela suppose l’utilisation d’un coffre-fort de mots de passe comme UpSignOn pour les enregistrer.
      </p>
    </>
  );
}
function ENArticle() {
  return (
    <>
      <p>The strength of a password corresponds to the average time it will take a hacker to find it.</p>
      <p>Some examples:</p>
      <ul>
        <li>
          If you use the password “123456“, the hacker will find it immediately because it is the most used password in
          the world, and therefore it is the first password he will test.
        </li>
        <li>
          If you use personal information (date of birth, first name of a child, name of the city where you are
          vacationing), your password will also be very easy to guess because this information can be easily found on
          the internet.
        </li>
      </ul>
      <h2>The different hacking techniques</h2>

      <h3>Theoretical case: brute force attack</h3>
      <p>
        Let’s take the theoretical case of a not-so-smart hacker who wants to find the password you use on a site by
        testing each possible password one by one. Obviously he doesn’t do this manually, he uses a script that can test
        a very large number of passwords per second.
      </p>
      <p>
        The number N of passwords of length L that can be formed from a number C of different characters is N=C^L. For
        example, the number of 5-character passwords containing only lowercase letters (26 letters) is 26^5 =
        11,881,376.
      </p>
      <p>
        On average, the hacker will have to test half of the passwords before finding the right one (after having tested
        half of them, he is more likely to have already found the password than to have not already found it). The
        number of tests that the hacker will have to do is therefore C^L/2.
      </p>
      <p>
        The question is how many passwords the hacker can test per second. This will depend on several conditions (the
        computing power of the hacker, the storing method for the password), but let’s take for example the case of a
        hacker using modern computers. Each computer has 8 cores running at 2.6 GHz. It can therefore perform roughly 20
        billion tests per second under the best conditions. The most organized hackers will probably have computing
        powers 10,000 times higher. We then obtain the following breaking times:
      </p>
      <figure className={styles.figure}>
        <figcaption>Time required to extract a password from a hash by brute force</figcaption>
        <div className={styles.pwdCrackTable}>
          <table>
            <thead>
              <tr>
                <th>Number of characters</th>
                <th>Digits only (10 chars.)</th>
                <th>Lowercase letters (26 chars.)</th>
                <th>Lowercase and uppercase letters (52 chars.)</th>
                <th>Numbers, lowercase and uppercase letters (62 chars.)</th>
                <th>Symbols, numbers, lowercase and uppercase letters (90 chars.)</th>
              </tr>
            </thead>
            {getTableBody("en")}
          </table>
        </div>
      </figure>
      <p>
        If you start from a password with 9 alphanumeric characters, i.e. without special characters (resistance 33
        seconds), it is more effective to add a tenth character (resistance 35 minutes) than to replace a character in
        the password with a special character (resistance 2 minutes).
      </p>
      <p>
        <strong> A good password today must contain at least 12 alphanumeric and special characters.</strong> This is
        also what state agencies, such as ANSSI in France, recommend.
      </p>
      <p>
        <strong>
          A 16-character password containing alphanumeric characters will be very strong, even if the hacker is a
          million times stronger than the assumption we made
        </strong>
        (it would be very, very expensive to have so much computing power...).
      </p>
      <p>
        Obviously, the less a password allows access to sensitive resources, the less economic interest the hacker has
        in hacking it and the more you can theoretically afford to choose it weak.
      </p>

      <h3>Real case: dictionary attack</h3>
      <p>
        In practice, hackers rarely use brute force because there is a much more effective technique: the dictionary
        attack. The idea is simple: rather than testing passwords randomly, the hacker uses lists of passwords that have
        already leaked. These lists contain several hundred million passwords actually used by Internet users and sorted
        by number of occurrences. The hacker will therefore start by testing the most used password in the world, that
        is to say “123456”. Then it will test “123456789”, then “azerty”, etc. If you’re using one of these passwords,
        you’re really asking for trouble.
      </p>
      <p>
        <strong>
          The cybercriminal then tests variations of these passwords, with the classic mechanisms of replacing letters
          with numbers or symbols.
        </strong>
        For example, an “a“ becomes an “@“, an “o“ becomes a “0“, etc. Passwords composed of sequences, such as abcd,
        1234, azerty, or with a root containing the name of the site or personal information are also tested.
      </p>
      <p>
        With this technique, even a fairly long and complex password may not be strong enough... The password
        <em>P@$$w0rd!</em> is therefore barely stronger than the password <em>password</em>.
      </p>
      <h2>How to make your password “strong”?</h2>
      <p>
        Although a password is always <em>breakable</em>, fortunately it is possible to limit and slow down these
        attacks. Here are some effective solutions to strengthen your passwords and avoid these intrusions.
      </p>
      <h3>Ideally use random and long passwords</h3>
      <p>
        The ideal is of course to use a random password generator. This type of password is insensitive to dictionary
        attacks and the hacker must therefore use brute force, which is completely unacceptable because the password
        generated will often be very long. This type of password makes it mandatory to use a password vault because they
        are impossible to remember.
      </p>
      <h3>And for strong but easy to remember passwords</h3>
      <p>
        The following techniques generate passwords that are easier to remember, stronger than a regular code but less
        than a random password. They are particularly suitable for Windows session passwords and the master password of
        your password vault.
      </p>
      <p>
        <strong>Passphrases</strong>
      </p>
      <p>
        In case you need to remember your password yourself, you can use the passphrase technique. The idea is to
        combine various words, with or without spaces, to form a series of characters. Ideally, your sentence should
        contain 4 words and 15 characters at least. Avoid: famous quotes and expressions. A passphrase would look like:
        officefeltplantcurtain.
      </p>
      <p>
        <strong>Simplifying a sentence</strong>
      </p>
      <p>
        Another technique for generating relatively strong passwords is to start with a fairly long sentence and choose
        the initials or phonetic spellings of the words in that sentence. For example, let’s start with the sentence
        “Here is a password containing special characters and numbers.“. This could result in the following password:
        “Hia$csc&nbs”.
      </p>
      <p>
        In practice, use a phrase that is not a famous quote and that results in a password containing a combination of
        all the characters so that your password meets the usual criteria required by sites. These kinds of passwords
        are probably slightly more difficult to type than those in the previous method, but are in theory stronger than
        a passphrase.
      </p>

      <h2>Conclusion</h2>
      <p>
        Remember that the best way to get a strong password is to use a random password generator and choose a length
        greater than 16.
      </p>
      <p>Obviously, this involves using a password vault like UpSignOn to store them.</p>
    </>
  );
}

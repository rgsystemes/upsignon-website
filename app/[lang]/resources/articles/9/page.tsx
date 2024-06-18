import Image from "next/image";
import { getDictionary } from "../../../../../translations/translations";
import styles from "../article.module.css";

export default function Article9({ params }: { params: { lang: string } }) {
  const t = getDictionary(params.lang);
  return (
    <div className={styles.content}>
      <div className={styles.backArrow}>
        <span>&lt;  </span>
        <a href="/resources/articles">{t.resources.articles}</a>
      </div>
      <article className={styles.article}>
        <h1>{t.articles[9].title}</h1>
        <p className={styles.articleSummary}>
          <strong>{t.articles[9].summary}</strong>
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
        Nous assistons, ces dernières années, à une prise de conscience globale du rôle majeur de la protection des mots
        de passe dans la sécurité informatique des entreprises. En témoigne la hausse de 50 % de l’utilisation de
        gestionnaires de mots de passe observée par le LINC (Laboratoire d’innovation numérique de la CNIL) et
        Médiamétrie entre 2018 et 2019 (1). Tandis que les autorités compétentes telles que l’ANSSI prodiguent bons
        conseils et guides pratiques pour aider les professionnels à adopter les bons réflexes, certains freins
        persistent. C’est par exemple le cas de ces quatre contraintes que l’on retrouve encore fréquemment dans les
        formulaires de mots de passe… et qui n’aident pas à engager les collaborateurs dans des pratiques plus
        sécurisées.
      </p>
      <h2>1- Imposer un nombre maximum de caractères</h2>
      <p>
        Aujourd’hui encore, de nombreux formulaires de mots de passe limitent la saisie à un certain nombre de
        caractères, parfois 8 ou 12 caractères seulement ! Cette restriction provient peut-être d’une volonté d’éviter
        les attaques par déni de service (2) via l’envoi de contenus de plusieurs mégabits voire gigabits. Elle découle
        peut-être aussi de l’idée que l’utilisateur ne sera pas en capacité de retenir le mot de passe s’il est trop
        long.
      </p>
      <p>
        Le problème est que cette contrainte empêche les utilisateurs de choisir des mots de passe vraiment forts et
        générés aléatoirement. Donc cette pratique est un frein majeur à l’adoption des coffres-forts de mots de passe
        et produit donc l’effet inverse de l’effet désiré sur la sécurité de l’utilisateur !
      </p>
      <p>
        <strong>
          Pour répondre au deux enjeux (éviter les attaques par déni de service et permettre l’utilisation des
          coffre-forts de mots de passe), définissez la longueur maximal d’un champ mot de passe à 500 caractères. C’est
          largement suffisant dans les deux cas.
        </strong>
      </p>
      <h2>2- Imposer au moins 8 caractères, une minuscule, une majuscule, un chiffre, un caractère spécial</h2>
      <p>
        Bien connues, les jauges du type “Veuillez saisir au moins 8 caractères, une minuscule, une majuscule, un
        chiffre et un caractère spécial” sont fréquentes dans les formulaires de mots de passe. Le principe est fondé
        puisqu’en effet, plus le mot de passe contiendra de caractères différents, plus il sera complexe à déchiffrer
        pour un hacker.
      </p>
      <p>
        Le problème, c’est que cela n’a pas un gros effet sur la sécurité des mots de passe car les utilisateurs vont
        utiliser des mécanismes de substitution évidents qui ralentiront à peine les pirates. Par exemple ’i’ deviendra
        ’1’, ’a’ deviendra ’@’ et ’s’ deviendra ’$’.
      </p>
      <p>
        Comme nous l’expliquons dans notre article{" "}
        <a href="/resources/articles/1">“Qu’est-ce qu’un mot de passe fort ?“</a>, la force d’un mot de passe dépend
        avant tout de sa longueur.
      </p>
      <p>
        <strong>
          Notre conseil est donc d’imposer surtout une longueur de mots de passe d’au moins 12 caractères (voire 14) et
          d’afficher à l’utilisateur une évaluation de la force de son mot de passe grâce à des librairies comme zxcvbn.
        </strong>{" "}
        Imposez aussi d’utiliser tous les types de caractères puisque les utilisateurs y sont habitués et que ça ne fait
        pas de mal.
      </p>
      <h2>3- Imposer un renouvellement régulier des mots de passe de vos collaborateurs</h2>
      <p>
        Le renouvellement des mots de passe est un sujet qui divise. Certains préfèrent imposer le changement régulier
        des mots de passe, partant du principe qu’en cas de fuite de données, le renouvellement du mot de passe fera
        perdre l’accès au pirate via l’ancien mot de passe devenu obsolète.
      </p>
      <p>Cette règle est selon nous peu pertinente, car</p>
      <ul>
        <li>
          En cas de fuite de données, changer son mot de passe plusieurs semaines ou mois plus tard sera probablement
          déjà beaucoup trop tard.
        </li>
        <li>
          Le fait de sursolliciter les utilisateurs en leur imposant de changer leurs mots de passe trop souvent risque
          de les décourager ou de créer chez eux des comportements qui n’arrêteront aucun hacker, comme le fait
          d’ajouter une date ou un numéro à la fin du mot de passe existant par exemple…
        </li>
        <li>
          Sans compter qu’imposer un renouvellement fréquent des mots de passe génère bien souvent de la perte de temps
          en termes de gestion des mots de passe oubliés pour les responsables informatiques…
        </li>
        <li>
          Par ailleurs, si le site a détecté la fuite de données, il pourra en avertir ses utilisateurs qui devront
          alors effectivement modifier leur mot de passe immédiatement (et non plusieurs semaines plus tard). Mais si le
          site n’a pas détecté la fuite de données, alors tant que la faille ne sera pas corrigée, le pirate pourra
          recommencer son attaque et accéder au mot de passe modifié. Bref, dans les faits, cette règle a probablement
          un effet limité en termes de sécurité.
        </li>
      </ul>
      <p></p>
      <p>
        <strong>
          Forcer vos collaborateurs à utiliser un coffre-fort de mots de passe aura en revanche beaucoup plus d’effet
          positif sur la sécurité.
        </strong>{" "}
        En effet, l’utilisateur sera en mesure de définir un mot de passe aléatoire ce qui empêche le pirate d’extraire
        le mot de passe de sa version hashée (sauf si le site qui se fait pirater stocke le mot de passe en clair, mais
        là, ce n’est pas la faute de vos utilisateurs, c’est de la vôtre).
      </p>
      <p>
        L’autre intérêt d’un coffre-fort de mots de passe est de{" "}
        <strong>
          permettre à l’utilisateur de ne jamais réutiliser ses mots de passe professionnels dans sa vie personnelle.
        </strong>{" "}
        Cette pratique induit pour le coup un risque assez élevé que l’utilisateur finisse par saisir son mot de passe
        sur un site très mal sécurisé et que le pirate parvienne à réutiliser ce mot de passe pour attaquer
        l’entreprise.
      </p>
      <p>
        Imposer un changement de mots de passe régulièrement à vos collaborateurs, oui, mais commencez par imposer
        l’utilisation d’un coffre-fort de mots de passe !
      </p>

      <h2>4- Essayer d’empêcher les robots de remplir votre formulaire</h2>
      <p>
        Certains site tentent d’empêcher des robots de remplir les formulaires de mots de passe pour une ou plusieurs
        des raisons suivantes:
      </p>
      <ul>
        <li>Éviter les attaques par scripts automatiques</li>
        <li>Forcer l’utilisateur à saisir son mot de passe pour qu’il ne l’oublie pas</li>
      </ul>
      <p>
        Certains sites empêchent également de copier-coller une valeur dans les formulaires de choix d’un nouveau mot de
        passe pour minimiser les chances peut-être que l’utilisateur ait mal saisi son premier mot de passe et se
        retrouve ensuite coincé.
      </p>

      <p>Toutes ces raisons sont de mauvaises raisons car</p>
      <ul>
        <li>
          les attaques par script peuvent être bloquées au niveau du serveur, tout simplemnet par une temporisation
          après plus de 3 essais échoués pour le même utilisateur
        </li>
        <li>
          si l’utilisateur oublie son mot de passe ou l’a mal saisi, sauf cas spécifique, vous devez lui proposer un
          système de mot de passe oublié
        </li>
      </ul>
      <p></p>
      <p>
        Mais ce qui est le plus gênant, c’est que ces mécanismes anti-robot empêchent les coffres-fort de mot de passe
        de bien fonctionner lors du remplissage automatiquement les formulaires, ce qui est extrêmement frustrant pour
        les utilisateurs.{" "}
        <strong>
          En utilisant ces méthodes, vous rendez encore plus difficle l’adoption d’un coffre-fort de mots de passe et
          contribuez à rendre le web moins sûr.
        </strong>
      </p>
      <p>
        Notre recommandation est donc au contraire de laisser les robots légitimes faire leur travail et d’
        <strong>adopter les bonnes pratiques suivantes :</strong>
      </p>
      <ul style={{ fontWeight: "bold" }}>
        <li>ne pas interdir le copier-coller dans un champ mot de passe</li>
        <li>
          ne pas refuser les événements javascript émis par les robots (ie ne pas refuser les événements ayant
          l’attribut “trusted“ à faux)
        </li>
        <li>
          utiliser systématiquement les attributs sémantiques “type“ et “autocomplete“ standards sur les champs input
          <ul>
            <li>
              <pre>{`<input type="text" autocomplete="username"/>`}</pre>
            </li>
            <li>
              <pre>{`<input type="password" autocomplete="current-password"/>`}</pre>
            </li>
            <li>
              <pre>{`<input type="password" autocomplete="new-password"/>`}</pre>
            </li>
          </ul>
        </li>
        <li>déplacer les mécanismes anti-robots côté serveur</li>
      </ul>
      <h2>Conclusion</h2>
      <p>
        Pour résumer, les formulaires de mots de passe trop contraignants ou restrictifs sont une barrière à l’usage de
        coffres-forts de mots de passe qui sont pourtant indispensables pour accompagner durablement les utilisateurs
        vers les meilleures pratiques en termes de sécurité des mots de passe. Mieux le coffre-fort de mot de passe peut
        accomplir ses missions (remplissage automatique, génération de mots de passe forts…), plus la sécurité des mots
        de passe sera assurée et plus les utilisateurs seront satisfaits d’y prendre part, sans contraintes ni efforts
        considérables. À bon entendeur !
      </p>
      <aside style={{ fontSize: "0.8em", marginTop: 50 }}>
        <p>
          (1) Source : https://linc.cnil.fr/fr/barometre-linc-2019-les-pratiques-de-protection-des-donnees-progressent
        </p>
        <p>
          (2) Une attaque par déni de service est une cyberattaque dans laquelle l’auteur cherche à rendre une machine
          ou une ressource réseau indisponible pour ses utilisateurs prévus en perturbant temporairement ou indéfiniment
          les services d’un hôte connecté à un réseau. (Source : Wikipédia)
        </p>
      </aside>
    </>
  );
}
function ENArticle() {
  return (
    <>
      <p>
        In recent years, we have witnessed a global awareness of the major role of password protection in corporate IT
        security. This is evidenced by the 50% increase in the use of password managers observed by the LINC (CNIL
        Digital Innovation Laboratory) and Médiamétrie between 2018 and 2019 (1). While competent authorities such as
        ANSSI provide good advice and practical guides to help professionals adopt the right reflexes, some obstacles
        persist. This is for example the case of these four constraints which are still frequently found in password
        forms... and which do not help to engage employees in more secure practices.
      </p>
      <h2>1- Impose a maximum number of characters</h2>
      <p>
        Even today, many password forms limit entry to a certain number of characters, sometimes only 8 or 12
        characters! This restriction perhaps comes from a desire to avoid denial of service attacks (2) by sending
        content of several megabits or even gigabits. It perhaps also stems from the idea that the user will not be able
        to remember the password if it is too long.
      </p>
      <p>
        The problem is that this constraint prevents users from choosing truly strong, long and randomly generated
        passwords. So this practice is a major barrier to the adoption of password vaults and therefore produces the
        opposite of the desired effect on user security!
      </p>
      <p>
        <strong>
          To address both issues (avoid denial of service attacks and enable the use of password vaults), set the
          maximum length of a password field to 500 characters. This is more than sufficient in both cases.
        </strong>
      </p>
      <h2>2- Require at least 8 characters, a lowercase letter, an uppercase letter, a number, a special character</h2>
      <p>
        Well known gauges such as “Please enter at least 8 characters, a lowercase letter, an uppercase letter, a number
        and a special character” are common in password forms. The principle is well-founded since in fact, the more
        different characters the password contains, the more complex it will be for a hacker to decipher.
      </p>
      <p>
        The problem is that this doesn’t have a big effect on password security in real-life because users will use
        obvious substitution mechanisms that will barely slow down hackers. For example ’i’ will become ’1’, ’a’ will
        become ’@’ and ’s’ will become ’$’.
      </p>
      <p>
        As we explain in our article <a href="/resources/articles/1">“What is a strong password?“</a>, the strength of a
        password depends primarily on its length.
      </p>
      <p>
        <strong>
          Our advice is therefore to impose a password length of at least 12 characters (or even 14) and to display to
          the user an evaluation of the strength of their password using libraries like zxcvbn.
        </strong>{" "}
        Also impose the use of all types of characters since users are used to it and it doesn’t hurt.
      </p>
      <h2>3- Require regular renewal of your employees’ passwords</h2>
      <p>
        Renewing passwords is a divisive topic. Some prefer to impose regular password changes, based on the principle
        that in the event of a data leak, renewing the password will cause the hacker to lose access via the old
        password that has become obsolete.
      </p>
      <p>This rule is, in our opinion, of little relevance, because</p>
      <ul>
        <li>
          In the event of a data leak, changing your password several weeks or months later will probably already be far
          too late.
        </li>
        <li>
          Over-demanding users by requiring them to change their passwords too often risks discouraging them or creating
          behaviors in them that won’t stop any hacker, such as adding a date or number at the end of the existing
          password for example…
        </li>
        <li>
          Not to mention that requiring frequent password renewal often results in wasted time in terms of managing
          forgotten passwords for IT managers...
        </li>
        <li>
          Furthermore, if the site has detected the data leak, it will be able to notify its users who will then have to
          effectively change their password immediately (not several weeks later). But if the data leak has not been
          detected, then as long as the flaw is not corrected, the hacker will be able to repeat his attack and access
          the changed password. In short, in reality, this rule probably has a limited effect in terms of security.
        </li>
      </ul>
      <p></p>
      <p>
        <strong>
          Forcing your employees to use a password vault, on the other hand, will have a much more positive effect on
          security.
        </strong>{" "}
        Indeed, the user will be able to define a random password which prevents the hacker from extracting the password
        from its hashed version (unless the site being hacked stores the password in clear text, but there, it’s not
        your users’ fault, it’s yours).
      </p>
      <p>
        The other benefit of a password vault is to{" "}
        <strong>allow the user to never reuse their professional passwords in their personal life.</strong> This
        practice therefore leads to a fairly high risk that the user ends up entering their password on a very poorly
        secured site and that the hacker manages to reuse this password to attack the business.
      </p>
      <p>
        Requiring your employees to change their passwords regularly, yes, but start by imposing the use of a password
        vault!
      </p>

      <h2>4- Try to prevent robots from filling out your form</h2>
      <p>
        Some sites attempt to prevent bots from filling out password forms for one or more of the following reasons:
      </p>
      <ul>
        <li>Avoid automatic scripted attacks</li>
        <li>Force the user to enter their password so they don’t forget it</li>
      </ul>
      <p>
        Some sites also prevent copying and pasting a value into new password forms to minimize the chance that perhaps
        the user entered their first password incorrectly and then gets stuck.
      </p>

      <p>All these reasons are bad reasons because</p>
      <ul>
        <li>
          scripted attacks can be blocked at the server level, quite simply by a timeout after more than 3 failed
          attempts for the same user
        </li>
        <li>
          if the user forgets their password or enters it incorrectly, except in specific cases, you must offer them a
          forgotten password system
        </li>
      </ul>
      <p></p>
      <p>
        But what’s most annoying is that these anti-bot mechanisms prevent password vaults from working properly when
        autofilling forms, which is extremely frustrating for users.{" "}
        <strong>
          By using these methods, you are making it even more difficult to adopt password vaults and you contribute to
          make the web less secure.
        </strong>
      </p>
      <p>
        Our recommendation is therefore on the contrary to let legitimate robots do their work and
        <strong>adopt the following good practices:</strong>
      </p>
      <ul style={{ fontWeight: "bold" }}>
        <li>do not prohibit copying and pasting into a password field</li>
        <li>
          do not refuse javascript events emitted by robots (ie do not refuse events with the “trusted“ attribute set to
          false)
        </li>
        <li>
          systematically use the standard “type” and “autocomplete” semantic attributes on input fields
          <ul>
            <li>
              <pre>{`<input type="text" autocomplete="username"/>`}</pre>
            </li>
            <li>
              <pre>{`<input type="password" autocomplete="current-password"/>`}</pre>
            </li>
            <li>
              <pre>{`<input type="password" autocomplete="new-password"/>`}</pre>
            </li>
          </ul>
        </li>
        <li>move anti-bot mechanisms to the server side</li>
      </ul>
      <h2>Conclusion</h2>
      <p>
        To summarize, password forms that are too restrictive or constraining are a barrier to the use of password
        vaults which are nevertheless essential to sustainably support users towards best practices in terms of password
        security. The better the password vault can accomplish its missions (automatic filling, generation of strong
        passwords, etc.), the more password security will be ensured and the more users will bet satisfied to take part,
        without constraints or considerable efforts. Word to the wise!
      </p>
      <aside style={{ fontSize: "0.8em", marginTop: 50 }}>
        <p>
          (1) Source: https://linc.cnil.fr/fr/barometre-linc-2019-les-pratiques-de-protection-des-donnees-progressent
        </p>
        <p>
          (2) A denial of service attack is a cyberattack in which the perpetrator seeks to make a machine or network
          resource unavailable to its intended users by temporarily or indefinitely disrupting the services of a host
          connected to a network. (Source: Wikipedia)
        </p>
      </aside>
    </>
  );
}

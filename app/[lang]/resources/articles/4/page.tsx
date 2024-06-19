import { Metadata } from "next";
import { getDictionary } from "../../../../../translations/translations";
import styles from "../article.module.css";

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const t = getDictionary(params.lang);
  return {
    title: t.articles[4].title,
  };
}

export default function Article4({ params }: { params: { lang: string } }) {
  const t = getDictionary(params.lang);
  return (
    <div className={styles.content}>
      <div className={styles.backArrow}>
        <span>&lt;  </span>
        <a href="/resources/articles">{t.resources.articles}</a>
      </div>
      <article className={styles.article}>
        <h1>{t.articles[4].title}</h1>
        <p className={styles.articleSummary}>
          <strong>{t.articles[4].summary}</strong>
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
        On entend souvent qu’aucun système n’est infaillible et que les pirates trouveront toujours une faille à
        exploiter. L’idée de cet article est de vous expliquer pourquoi il faut être prudent avec ce genre
        d’affirmations et pourquoi vous pouvez vraiment faire confiance à certains systèmes.
      </p>

      <p>On distingue 4 objectifs de sécurité :</p>
      <ul>
        <li>la confidentialité des données (le fait qu’une personne non autorisée ne puisse pas lire les données) ;</li>
        <li>
          l’authenticité des données (le fait de pouvoir garantir que les données proviennent bien d’une personne ou
          entité en particulier) ;
        </li>
        <li>l’intégrité des données (le fait que les données ne pourront pas être altérées) ;</li>
        <li>
          la disponibilité des données (le fait que les données soient toujours accessibles lorsque l’utilisateur en
          fait la demande).
        </li>
      </ul>

      <p>
        Toute attaque informatique a pour objectif de nuire à l’un ou plusieurs de ces 4 objectifs. Selon le contexte,
        certains objectifs seront plus secondaires que d’autres. Par exemple l’objectif de disponibilité n’est pas
        toujours très critique. Si votre compte Fnac n’est plus accessible pendant quelques heures (indisponibilité),
        cela n’aura pas beaucoup d’impact sur votre vie. Si votre adresse postale est remplacée par un poème dans la
        base de données de Fnac (non-intégrité), vous n’en ferez pas un drame non plus. Mais si UpSignOn fait fuiter vos
        mots de passe (non-confidentialité), vous viendrez vous plaindre.
      </p>

      <p>Alors voici 4 concepts ou modèles de sécurité à connaître et à distinguer.</p>

      <h2>La sécurité logique</h2>
      <p>
        La sécurité logique repose sur des règles algorithmiques. L’accès à telle ou telle ressource n’est autorisé que
        pour un utilisateur ayant des droits suffisants tels qu’enregistrés dans une base de données. En cas de bug,
        cette sécurité peut être compromise. Un administrateur peut modifier les droits simplement. En bref, cette
        sécurité repose sur la confiance dans les développeurs et dans les administrateurs. Toute personne ayant
        suffisamment de droits peut compromettre cette sécurité, et des erreurs de logique pouvant compromettre la
        sécurité sont vite arrivées.
      </p>

      <h2>La sécurité cryptographique</h2>
      <p>
        Contrairement à la sécurité logique, la cryptographie permet de garantir certaines propriétés qui ne sont pas
        modifiables après coup, y compris par quelqu’un qui aurait un accès complet au système. Ces propriétés sont le
        plus souvent mathématiquement prouvables. La cryptographie est utilisée aujourd’hui dans de nombreux domaines,
        du plus stratégique - défense, industrie, technologies de l’information – au plus personnel, avec la protection
        de la vie privée. Elle sécurise la transmission des messages, qui sont inintelligibles pour une personne tierce.
      </p>

      <p>
        La cryptographie est l’ensemble des algorithmes mathématiques qui permettent de garantir la confidentialité,
        l’authenticité et l’intégrité des données (chiffrement, hachage et signature numérique).
      </p>

      <p>
        Notez que la sécurité cryptographique repose sur le fait qu’avec les connaissances mathématiques actuelles, il
        faudrait en pratique des millions d’années de calcul, même en regroupant tous les ordinateurs du monde, pour
        casser une protection. Donc personne n’y parviendra jamais dans la vraie vie, sauf à obtenir la clé
        cryptographique par d’autres moyens.
      </p>
      <p>
        Des erreurs d’implémentation peuvent être faite par les développeurs qui codent ces algorithmes
        cryptographiques, mais comme l’enjeu est élevé, les algorithmes en question sont relus et challengés en
        permanence par des chercheurs experts. Seuls des gouvernenements ou des organisations de grande envergure
        peuvent donc éventuellement découvrir et exploiter des vulnérabilités dans ces algorithmes.
      </p>

      <p>UpSignOn fait évidemment un usage extensif d’algorithmes cryptographiques.</p>

      <h2>Le principe de confiance nulle</h2>
      <p>
        Un système à confiance nulle est conçu en partant du principe que le pirate réussira à obtenir tous les droits
        administrateurs (ou qu’un administrateur deviendra hostile). Même dans ces conditions, cela ne serait pas
        suffisant pour lui permettre d’extraire des données sensibles. En clair, la seule personne de confiance est le
        propriétaire des données. Toute autre personne est considérée comme hostile. Si le système est conçu ainsi, vous
        pouvez lui faire confiance. Évidemment, la plupart des fonctionnalités d’UpSignOn sont conçues suivant ce
        principe.
      </p>

      <h2>Le principe de connaissance nulle</h2>
      <p>
        Une conception à connaissance nulle vise à ne transmettre aucune information personnelle à l’éditeur ou aux
        administrateurs en clair. Les seules données envoyées au serveur sont totalement chiffrées et inexploitables.
        Par exemple, l’application UpSignOn n’envoie aucune adresse email au serveur UpSignOn pour faire fonctionner les
        coffres-forts personnels. Même nous, éditeur, ne connaissons pas nos utilisateurs ! Donc il n’y a tout
        simplement rien à voler sur nos serveurs.
      </p>

      <h2> Conclusion</h2>
      <p>
        La sécurité logique est faible, même si elle est nécessaire dans beaucoup de cas et abondamment utilisée.
        L’idéal est de concevoir des systèmes à connaissance et confiance nulles (qui vont le plus souvent s’appuyer sur
        de la cryptographie) pour garantir qu’aucune fuite de données ne soit possible (ce qui ne veut pas dire qu’un
        pirate ne peut pas nuire d’une autre façon, par exemple en paralysant le système).
      </p>

      <p>
        Retenez l’idée que ce n’est pas parce que la presse annonce qu’une attaque est en cours que vos données vont
        nécessairement fuiter. Ce n’est pas non plus parce que certaines données ont fuité que tous vos secrets ont
        fuité. Il se peut aussi que des données chiffrées fuitent, sans que cela ne soit un problème si le système était
        conçu en respectant la philosophie de la confiance nulle.
      </p>
    </>
  );
}
function ENArticle() {
  return (
    <>
      <p>
        We often hear that no system is infallible and that hackers will always find a loophole to exploit. The idea of
        ​this article is to explain to you why you should be careful with these kinds of claims and why you can really
        trust certain systems.
      </p>

      <p>There are 4 security objectives:</p>
      <ul>
        <li>data confidentiality (the fact that an unauthorized person cannot read the data);</li>
        <li>data authenticity (being able to guarantee that the data comes from a particular person or entity);</li>
        <li>data integrity (the fact that the data cannot be modified);</li>
        <li>data availability (the fact that the data is always accessible when the user requests it).</li>
      </ul>

      <p>
        Any computer attack aims to harm one or more of these 4 objectives. Depending on the context, some objectives
        will be more secondary than others. For example, the availability objective is not always very critical. If your
        Fnac account is no longer accessible for a few hours (unavailability), this will not have much impact on your
        life (although it will have potentially a high impact on their business). If your postal address is replaced by
        a poem in the Fnac database (non-integrity), you won’t make a big deal out of it either. But if UpSignOn leaks
        your passwords (non-confidentiality), you will come and complain.
      </p>
      <p>So here are 4 security concepts or models to know and distinguish.</p>
      <h2>Logical security</h2>
      <p>
        Logical security is based on algorithmic rules. Access to this or that resource is only authorized for a user
        with sufficient rights as recorded in a database. In the event of a bug, this security may be compromised. An
        administrator can modify the rights simply. In short, this security relies on trust in developers and
        administrators. Anyone with sufficient rights can compromise this security, and logical errors that could
        compromise security can quickly occurr.
      </p>
      <h2>Cryptographic security</h2>
      <p>
        Unlike logical security, cryptography makes it possible to guarantee certain properties which cannot be modified
        afterwards, including by someone who has full access to the system. These properties are most often
        mathematically provable. Cryptography is used today in many areas, from the most strategic - defense, industry,
        information technology - to the most personal, with the protection of privacy. It secures the transmission of
        messages, which are unintelligible to a third parties.
      </p>
      <p>
        Cryptography is the set of mathematical algorithms that guarantee the confidentiality, authenticity and
        integrity of data (encryption, hashing and digital signature).
      </p>
      <p>
        Note that cryptographic security is based on the fact that with current mathematical knowledge, it would in
        practice take millions of years of calculation, even if all the computers in the world were combined, to break a
        protection. So no one will ever achieve this in real life unless they obtain the cryptographic key by other
        means.
      </p>
      <p>
        Implementation errors can be made by the developers who code these cryptographic algorithms, but as the stakes
        are high, the algorithms in question are constantly reread and challenged by expert researchers. Only
        governments or large scale organizations can possibly discover and exploit vulnerabilities in these algorithms.
      </p>
      <p>UpSignOn obviously makes extensive use of cryptographic algorithms.</p>
      <h2>Zero-trust principle</h2>
      <p>
        A zero-trust system is designed under the assumption that the hacker will succeed in gaining full administrator
        rights (or that an administrator will become hostile). Even under these conditions, this would not be sufficient
        to allow him to extract sensitive data. In other words, the only person you can trust is the owner of the data.
        Any other person is considered hostile. If the system is designed like this, you can trust it. Of course, most
        UpSignOn features are designed following this principle.
      </p>
      <h2>Zero-knowledge principle</h2>
      <p>
        A zero knowledge design aims at not giving any personal information to the publisher or administrators in plain
        text. The only data sent to the server is completely encrypted and unusable. For example, the UpSignOn
        application does not send any email address to the UpSignOn server to operate personal vaults. Even we, the
        publisher, don’t know our users! So there is simply nothing to steal from our servers.
      </p>
      <h2>Conclusion</h2>
      <p>
        Logical security is weak, although it is necessary in many cases and widely used. The ideal is to design
        zero-knowledge and zero-trust systems (which will most often rely on cryptography) to guarantee that no data
        leak is possible (which does not mean that a hacker cannot harm in any other way, for example by paralyzing the
        system).
      </p>
      <p>
        Remember the idea that just because the press announces that an attack is in progress does not mean that your
        data will necessarily leak. It’s also not because some data has leaked that all your secrets have been leaked.
        It is also possible for encrypted data to leak, but this would not be a problem if the system was designed
        following the zero-trust principles.
      </p>
    </>
  );
}

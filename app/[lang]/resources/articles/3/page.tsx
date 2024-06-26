import Image from "next/image";
import { getDictionary } from "../../../../../translations/translations";
import styles from "./page.module.css";
import passwordManagerImg from "../../../../../public/articles/passwordManager.png";
import dataSecuritySvg from "../../../../../public/articles/dataSecurity.svg";
import itChartSVG from "../../../../../public/articles/itChart.svg";
import customerSatisfactionSvg from "../../../../../public/articles/customerSatisfaction.svg";
import featuresSvg from "../../../../../public/articles/features.svg";
import vaultSvg from "../../../../../public/articles/vault.svg";
import lockSvg from "../../../../../public/articles/lock.svg";
import pwdFormSvg from "../../../../../public/articles/pwdForm.svg";
import sharingSvg from "../../../../../public/articles/sharing.svg";
import keySvg from "../../../../../public/articles/key.svg";
import checkTickSVG from "../../../../../public/articles/tick.svg";
import forUsersImg from "../../../../../public/articles/for-users.png";
import forAdminImg from "../../../../../public/articles/responsable.png";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const t = getDictionary(params.lang);
  return {
    title: t.articles[3].title,
    description: t.articles[3].metaDescription,
  };
}
export default function Article3({ params }: { params: { lang: string } }) {
  const t = getDictionary(params.lang);
  return (
    <div className={styles.content}>
      <div className={styles.backArrow}>
        <span>&lt;  </span>
        <a href="/resources/articles">{t.resources.articles}</a>
      </div>
      <article className={styles.article}>{params.lang === "fr" ? <FRArticle /> : <ENArticle />}</article>
      <div style={{ backgroundColor: "white", padding: 10 }}>
        <div className={styles.backArrow}>
          <span>&lt;  </span>
          <a href="/resources/articles">{t.resources.articles}</a>
        </div>
      </div>
    </div>
  );
}

function FRArticle() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerImgContainer}>
          <Image src={passwordManagerImg} alt="" className={styles.headerImg} />
        </div>
        <h1 className={styles.articleTitle}>
          Pourquoi utiliser un <span className={styles.green}>gestionnaire de mots de passe</span> ?
        </h1>
      </header>
      <section className={styles.whiteSection}>
        <div className={styles.whiteSectionContent}>
          <p>
            La question de la sécurité informatique est désormais prise à bras le corps dans la grande majorité des PME.
            Les services IT mettent en place des stratégies de cybersécurité de plus en plus élaborées pour éviter toute
            faille de sécurité et notamment :
          </p>
          <div className={styles.col3}>
            <div>
              <div className={styles.col3IlluContainer}>
                <Image src={dataSecuritySvg} alt="" />
              </div>
              <strong>Garantir l’intégrité et la confidentialité des données</strong>
            </div>
            <div>
              <div className={styles.col3IlluContainer}>
                <Image src={itChartSVG} alt="" />
              </div>
              <strong>Maintenir le bon fonctionnement du système d’information</strong>
            </div>
            <div>
              <div className={styles.col3IlluContainer}>
                <Image src={customerSatisfactionSvg} alt="" />
              </div>
              <strong>Assurer l’accès aux ressources aux seules personnes autorisées</strong>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.greySection}>
        <p>
          Ceci dit, il faut garder en tête que la première faille de sécurité des PME reste entre les mains des
          salariés.
        </p>
        <div className={styles.col3}>
          <div>
            <div className={styles.col3IlluContainer}>
              <span>20%</span>
            </div>
            <div>d’entre eux avouent ouvrir régulièrement des e-mails de sources inconnues</div>
          </div>
          <div>
            <div className={styles.col3IlluContainer}>
              <span>26%</span>
            </div>
            <div>admettent utiliser des applications sans l’aval du service informatique</div>
          </div>
          <div>
            <div className={styles.col3IlluContainer}>
              <span>54%</span>
            </div>
            <div>sont conscients d’adopter des pratiques peu sécurisées pour leurs mots de passe</div>
          </div>
        </div>

        <p>
          Aussi, les responsables de la sécurité IT auront beau sécuriser au maximum les instances et les outils,
          difficile de contrôler le comportement de tous les collaborateurs…
        </p>
        <p>
          Heureusement, tout n’est pas totalement hors de contrôle ! Les responsables informatiques peuvent (et doivent
          autant que possible !) encadrer certaines pratiques. C’est notamment le cas des mots de passe des
          collaborateurs !
        </p>
      </section>
      <section className={styles.pwdManagerSection}>
        <div className={styles.pwdManageSectionBackgroundLayer}>
          <div className={styles.pwdManagerContent}>
            <h2>Qu’est-ce qu’un gestionnaire de mot de passe ?</h2>
            <p>
              Un gestionnaire de mots de passe (ou coffre-fort de mots de passe) est un outil numérique qui centralise
              l’ensemble des identifiants et mots de passe d’un utilisateur dans une même base de données. Celui-ci y
              accède via un mot de passe maître (qui sera donc le seul à retenir). La solution permet de gérer et
              mémoriser les mots de passe, et surtout d’en renforcer la sécurité en générant très facilement des mots de
              passe robustes et uniques pour chaque compte.
            </p>
            <div className={styles.quinconce3col}>
              <div className={`${styles.quinconceCard} ${styles.featuresCard}`}>
                <Image src={featuresSvg} alt="" width={80} height={80} />
                <p>Les principales fonctionnalités</p>
              </div>
              <div className={styles.quinconceCard}>
                <Image src={vaultSvg} alt="" width={80} height={80} />
                <p>Stockage de mots de passe dans des coffres-forts (partagés ou non).</p>
              </div>
              <div className={styles.quinconceCard}>
                <Image src={lockSvg} alt="" width={80} height={80} />
                <p>Génération automatique de mots de passe robustes.</p>
              </div>
              <div className={styles.quinconceCard}>
                <Image src={pwdFormSvg} alt="" width={80} height={80} />
                <p>Saisie automatique des identifiants et mots de passe sur les formulaires web.</p>
              </div>
              <div className={styles.quinconceCard}>
                <Image src={sharingSvg} alt="" width={80} height={80} />
                <p>Partage sécurisé de certains mots de passe avec gestion de droits d’accès</p>
              </div>
              <div className={styles.quinconceCard}>
                <Image src={keySvg} alt="" width={80} height={80} />
                <p>Supervision de la sécurité des mots de passe à l’échelle de l’entreprise.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.whiteSection}>
        <div className={styles.whiteSectionContent}>
          <h2>
            <span className={styles.green}>Gestionnaire de mots de passe :</span>
            <br />
            de forts enjeux de sécurité dans les PME
          </h2>
          <p>
            Au début des années 2000, les salariés n’avaient que quelques mots de passe à retenir pour accéder aux
            systèmes et logiciels de l’entreprise. Aujourd’hui, les outils numériques s’étant allègrement multipliés,
            les mots de passe à mémoriser se comptent par dizaines. Si ce n’est plus.
          </p>
          <div className={styles.greenCard}>
            <div>
              <p>
                Et il y a de quoi attirer les hackers : bien que conscients des risques encourus, la plupart des
                salariés des PME privilégient la simplicité et la praticité en ce qui concerne leurs mots de passe.
              </p>
              <p>
                64% d’entre eux préfèrent conserver un mot de passe facile à retenir plutôt qu’un code plus sécurisé.
                Les études autour des mots de passe des employés révèlent d’autres chiffres alarmants :
              </p>
            </div>
            <div className={styles.greenCardNumbersContainer}>
              <div className={styles.greenCardNumber}>
                <div>59%</div>
                <div>utilisent le même code pour tous leurs comptes</div>
              </div>
              <div className={styles.greenCardNumber}>
                <div>53%</div>
                <div>n’ont pas changé leur mot de passe au cours des 12 derniers mois</div>
              </div>
              <div className={styles.greenCardNumber}>
                <div>59%</div>
                <div>utilisent un mot de passe professionnel et personnel identique</div>
              </div>
            </div>
          </div>
          <p>
            De leur côté, les hackeurs ont affiné leurs techniques pour dérober les données confidentielles des
            entreprises, et en particulier les mots de passe. Parmi les méthodes de piratage les plus efficaces, on
            retrouve le hameçonnage (ou phishing), qui consiste à créer un faux site web reprenant l’apparence d’un
            service légitime, et à inciter l’utilisateur à s’y connecter. Son mot de passe, en clair, peut alors être
            volé sans aucune difficulté. Les hackers utilisent également l’attaque par force brute (ou bruteforce)
            consistant à tester automatiquement des milliers de mots de passe par seconde. Les mots de passe courts et
            sans caractères spéciaux sont ainsi percés en un rien de temps. On peut aussi citer l’attaque par l’homme du
            milieu (ou man-in-the-middle), très utilisée pour glaner les mots de passe saisis sur le web. Le principe
            est simple : les hackers compromettent par exemple un point d’accès Wifi public et observent le trafic qui
            passe par celui-ci. Enfin, les fuites de données — qui n’ont jamais coûté aussi cher aux entreprises d’après
            un récent rapport d’IBM Security — sont particulièrement redoutées dans les PME.
          </p>
          <p>
            Au fil de l’intensification des cyber-attaques, les PME ont pris conscience de l’importance de sécuriser les
            mots de passe à l’échelle de l’entreprise. Ceci dit, elles ne savent pas toujours comment procéder ni par où
            commencer. Utiliser un gestionnaire de mots de passe partagé par tous apparaît comme la solution la plus
            fiable et la plus sécurisée.
          </p>
        </div>
      </section>
      <section className={styles.greySection}>
        <h2>
          <span className={styles.green}>Pourquoi utiliser</span> un gestionnaire de mots de passe ?
        </h2>
        <p>
          Personne n’a envie de gérer des mots de passe. Ce n’est pas un but en soi. Le but est d’avoir des mots de
          passe forts et uniques sur chaque site web, et ça, c’est impossible sans outil. Un gestionnaire de mots de
          passe ne sert qu’à ça : avoir des mots de passe forts et uniques. Le coffre-fort de mots de passe ne sert pas
          à vous simplifier la vie. Il n’y a rien de plus simple que d’utiliser toujours le même mot de passe. Bien
          entendu, l’outil fait tout pour rendre l’usage aussi simple que possible, y compris dans les cas de secrets
          partagés.
        </p>
        <p>
          N’oubliez pas que les hackers s’en prennent d’abord aux cibles les moins protégées. C’est bien parce qu’ils
          voient une porte ouverte qu’ils y entrent. C’est beaucoup plus rentable que d’essayer de défoncer une porte
          blindée.{" "}
          <strong>
            Utiliser un gestionnaire de mots de passe est donc l’un des moyens les plus efficaces pour ne pas devenir la
            première cible des hackers.
          </strong>{" "}
          C’est un outil fondamental d’une bonne politique de cyber-sécurité en entreprise.
        </p>
        <p>
          L’outil seul bien sûr ne fait pas tout. Aussi simple soit-il, l’adoption d’un coffre-fort de mots de passe par
          tous les collaborateurs reste un enjeu fort. Les personnes les moins à l’aise avec le numérique auront
          toujours un peu d’appréhension à adopter un nouvel outil. Elles peuvent avoir le sentiment de perdre le
          contrôle de leurs mots de passe et avoir peur de ne plus savoir se connecter sur leurs sites et applications.
          C’est pourquoi l’accompagnement initial à la prise en main de l’outil reste très important pour ces personnes.
          Dans tous les cas, un effort initial doit être fait par chacun pour importer tous ses mots de passe dans son
          coffre-fort. Par la suite, la possibilité pour le responsable informatique de superviser l’usage de l’outil et
          de suivre la robustesse des mots de passe devient un facteur clé de succès.
        </p>

        <div className={styles.checkTickParagraph}>
          <Image src={checkTickSVG} alt="" className={styles.tick} />
          <p>
            Mots de passe uniques : réutiliser le même mot de passe partout, c’est comme dire “si vous pouvez crocheter
            ma boîte aux lettres, alors vous pouvez ouvrir ma porte d’entrée, ma voiture, mon coffre à bijoux, mon
            compte en banque.“
          </p>
        </div>
        <div className={styles.checkTickParagraph}>
          <Image src={checkTickSVG} alt="" className={styles.tick} />
          <p>
            Mots de passe forts : la force d’un mot de passe, c’est le temps qu’il faut à un hacker pour le trouver.
            “P@$$w0rd!“ n’est pas du tout un mot de passe fort, bien qu’il respecte tous les critères habituels. En
            pratique, les mots de passe les plus forts sont les mots de passe générés aléatoirement, comme
            HCTGkN-bJzEE4-A8mqdK-rPWXnw
          </p>
        </div>
      </section>
      <section className={styles.whiteSection}>
        <div className={styles.whiteSectionContentLarge}>
          <h2>
            <span className={styles.green}>Gestionnaire de mots de passe :</span>
            <br />
            quels bénéfices en attendre ?
          </h2>
          <div className={styles.forUserAdvantages}>
            <div className={styles.forUserIlluContainer}>
              <Image src={forUsersImg} alt="" />
            </div>
            <div className={styles.greenSectionCard}>
              <h3>Pour les utilisateurs</h3>
              <p>
                Le gestionnaire de mots de passe est aujourd’hui le seul outil fiable pour générer et mémoriser des mots
                de passe robustes, aléatoires et jamais utilisés par ailleurs. Il apporte aux collaborateurs des PME un
                réel confort grâce à la <strong>saisie automatique</strong> des mots de passe. Exit donc les mots de
                passe conçus par les équipes et enregistrés dans des fichiers hébergés dans le Cloud ou écrits sur des
                post-it. Un seul mot de passe est à retenir — le mot de passe maître — qui permet d’accéder à la
                solution. La bonne nouvelle, c’est que celui-ci peut se permettre d’être moins sécurisé car
                l’application intègre des mécanismes de sécurité (c’est son métier) qui permettent de rendre le tout
                sécurisé même en cas de mots de passe un peu faibles.
              </p>
              <p>
                <strong>Le partage</strong> est lui aussi sécurisé via le coffre fort, ce qui permet de tourner
                définitivement la page des données confidentielles divulguées en clair entre collègues sur le chat de
                l’entreprise ou par e-mail.
              </p>
              <p>
                Enfin, dans un gestionnaire de mots de passe, <strong>les données stockées sont chiffrées</strong> et
                protégées par divers mécanismes.
              </p>
            </div>
          </div>
          <div className={styles.forAdminAdvantages}>
            <div className={styles.forUserIlluContainer}>
              <Image src={forAdminImg} alt="" />
            </div>
            <div className={styles.greenSectionCard}>
              <h3>Pour les responsables de la sécurité IT</h3>
              <p>
                La mise en place d’un outil dédié permet aux responsables de la sécurité informatique des PME de
                clarifier et de partager la politique de sécurité des mots de passe en interne. Ils pourront ainsi
                veiller à ce que les bonnes pratiques soient comprises et appliquées par tous. La solution leur
                permettra de suivre efficacement <strong>le renforcement des mots de passe</strong> à l’échelle de
                l’entreprise.
              </p>
              <p>
                Les responsables IT peuvent également espérer gagner du temps, en limitant les demandes des
                collaborateurs quant à la gestion de leurs passwords (mots de passe oubliés, non renouvelés, etc.). Ils
                pourront de cette façon accorder plus de temps à <strong>la sensibilisation des salariés</strong> les
                moins impliqués dans la démarche commune initiée.
              </p>
              <p>
                Enfin… tout ceci est uniquement possible en choisissant un gestionnaire de mots de passe permettant{" "}
                <strong>le pilotage et la supervision</strong>. La fonctionnalité de supervision permet aux
                administrateurs de s’assurer de l’adhésion des utilisateurs et du renforcement effectif de la sécurité.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
function ENArticle() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerImgContainer}>
          <Image src={passwordManagerImg} alt="" className={styles.headerImg} />
        </div>
        <h1 className={styles.articleTitle}>
          Why use a <span className={styles.green}>password manager</span>?
        </h1>
      </header>
      <section className={styles.whiteSection}>
        <div className={styles.whiteSectionContent}>
          <p>
            The issue of IT security is now being tackled head-on by the vast majority of SMEs. IT departments are
            implementing increasingly sophisticated cybersecurity strategies to prevent security breaches, including :
          </p>
          <div className={styles.col3}>
            <div>
              <div className={styles.col3IlluContainer}>
                <Image src={dataSecuritySvg} alt="" />
              </div>
              <strong>Guaranteeing data integrity and confidentiality</strong>
            </div>
            <div>
              <div className={styles.col3IlluContainer}>
                <Image src={itChartSVG} alt="" />
              </div>
              <strong>Keeping the information system running smoothly</strong>
            </div>
            <div>
              <div className={styles.col3IlluContainer}>
                <Image src={customerSatisfactionSvg} alt="" />
              </div>
              <strong>Ensuring that only authorised people have access to resources</strong>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.greySection}>
        <p>
          That said, it should be kept in mind that the main security vulnerability in SMEs remains in the hands of
          employees.
        </p>
        <div className={styles.col3}>
          <div>
            <div className={styles.col3IlluContainer}>
              <span>20%</span>
            </div>
            <div>admit to regularly opening emails from unknown sources</div>
          </div>
          <div>
            <div className={styles.col3IlluContainer}>
              <span>26%</span>
            </div>
            <div>admit to using applications without IT department approval</div>
          </div>
          <div>
            <div className={styles.col3IlluContainer}>
              <span>54%</span>
            </div>
            <div>are aware of adopting insecure password practices</div>
          </div>
        </div>

        <p>
          So, no matter how hard IT security managers try to secure their systems and tools, it is difficult to control
          the behaviour of all their employees...
        </p>
        <p>
          Fortunately, not everything is totally out of control! IT managers can (and should as far as possible!)
          control certain practices. This applies in particular to employee passwords!
        </p>
      </section>
      <section className={styles.pwdManagerSection}>
        <div className={styles.pwdManageSectionBackgroundLayer}>
          <div className={styles.pwdManagerContent}>
            <h2>What is a password manager?</h2>
            <p>
              A password manager (or password vault) is a digital tool that centralises all logins and passwords of a
              user in a single database. The user accesses the database via a master password (which is the only one
              that needs to be remembered). The solution makes it possible to manage and memorise passwords, and above
              all strengthen security by easily generating strong and unique passwords for each account.
            </p>
            <div className={styles.quinconce3col}>
              <div className={`${styles.quinconceCard} ${styles.featuresCard}`}>
                <Image src={featuresSvg} alt="" width={80} height={80} />
                <p>Main features</p>
              </div>
              <div className={styles.quinconceCard}>
                <Image src={vaultSvg} alt="" width={80} height={80} />
                <p>Storage of passwords in vaults (shared or not).</p>
              </div>
              <div className={styles.quinconceCard}>
                <Image src={lockSvg} alt="" width={80} height={80} />
                <p>Automatic generation of strong passwords.</p>
              </div>
              <div className={styles.quinconceCard}>
                <Image src={pwdFormSvg} alt="" width={80} height={80} />
                <p>Automatic filling of logins and passwords on web forms.</p>
              </div>
              <div className={styles.quinconceCard}>
                <Image src={sharingSvg} alt="" width={80} height={80} />
                <p>Secure sharing of certain passwords with access rights management.</p>
              </div>
              <div className={styles.quinconceCard}>
                <Image src={keySvg} alt="" width={80} height={80} />
                <p>Company-wide supervision of password security.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.whiteSection}>
        <div className={styles.whiteSectionContent}>
          <h2>
            <span className={styles.green}>Password manager:</span>
            <br />
            high security challenges for SMEs
          </h2>
          <p>
            In the early 2000s, employees only had to remember a few passwords to access company systems and software.
            Today, with the proliferation of digital tools, there are dozens of passwords to remember. If not more.
          </p>
          <div className={styles.greenCard}>
            <div>
              <p>
                And there is plenty to attract hackers: although aware of the risks involved, most employees of SMEs
                prefer simplicity and convenience when it comes to their passwords.
              </p>
              <p>
                64% of them prefer to keep a password that is easy to remember rather than a more secure code. Studies
                around employee passwords reveal other alarming figures:
              </p>
            </div>
            <div className={styles.greenCardNumbersContainer}>
              <div className={styles.greenCardNumber}>
                <div>59%</div>
                <div>use the same password for all their accounts</div>
              </div>
              <div className={styles.greenCardNumber}>
                <div>53%</div>
                <div>have not changed their password in the last 12 months</div>
              </div>
              <div className={styles.greenCardNumber}>
                <div>59%</div>
                <div>use the same professional and personal password</div>
              </div>
            </div>
          </div>
          <p>
            For their part, hackers have refined their techniques to steal confidential company data, and in particular
            passwords. Among the most effective hacking methods is phishing, which consists of creating a fake website
            resembling a legitimate service and tricking the user into connecting to it. His password, in clear text,
            can then be stolen without any difficulty. Hackers also use the brute force attack, which consists of
            automatically testing thousands of passwords per second. Short passwords without special characters are
            cracked in no time. We can also cite the man-in-the-middle attack, widely used to glean passwords entered on
            the web. The principle is simple: hackers compromise, for example, a public WiFi access point and observe
            the traffic passing through it. Finally, data leaks – which have never cost businesses so much according to
            a recent report from IBM Security – are particularly feared in SMEs.
          </p>
          <p>
            As cyberattacks have intensified, SMBs have realized the importance of securing passwords across the
            enterprise. That said, they do not always know how to proceed or where to start. Using a password manager
            shared by everyone appears to be the most reliable and secure solution.
          </p>
        </div>
      </section>
      <section className={styles.greySection}>
        <h2>
          <span className={styles.green}>Why use</span> a password manager?
        </h2>
        <p>
          Nobody wants to manage passwords. It is not a goal in itself. The goal is to have strong and unique passwords
          on each website, and that is impossible without a tool. A password manager is just for that: having strong and
          unique passwords. The Password Vault is not there to make your life easier. There is nothing simpler than
          always using the same password. Of course, the tool does everything to make use as simple as possible,
          including in cases of shared secrets.
        </p>
        <p>
          Remember that hackers go after the least protected targets first. It is because they see an open door that
          they enter it. It iss much more cost-effective than trying to break down an armored door.{" "}
          <strong>
            Using a password manager is therefore one of the most effective ways to avoid becoming the first target of
            hackers.
          </strong>{" "}
          It is a fundamental tool for a good corporate cybersecurity policy.
        </p>
        <p>
          The tool alone of course does not do everything. As simple as it is, the adoption of a password safe by all
          employees remains a major challenge. People who are less comfortable with digital technology will always be a
          little apprehensive about adopting a new tool. They may feel like they are losing control of their passwords
          and are afraid of not knowing how to log in to their sites and applications. This is why initial support in
          getting started with the tool remains very important for these people. In any case, an initial effort must be
          made by everyone to import all their passwords into their vault. Subsequently, the ability for the IT manager
          to supervise the use of the tool and monitor the strength of the passwords becomes a key success factor.
        </p>

        <div className={styles.checkTickParagraph}>
          <Image src={checkTickSVG} alt="" className={styles.tick} />
          <p>
            Unique passwords: Reusing the same password everywhere is like saying “if you can hack my mailbox, then you
            can open my front door, my car, my jewelry box, my bank account.“
          </p>
        </div>
        <div className={styles.checkTickParagraph}>
          <Image src={checkTickSVG} alt="" className={styles.tick} />
          <p>
            Strong passwords: the strength of a password is the time it takes a hacker to find it. “P@$$w0rd!” is not a
            strong password at all, although it meets all the usual criteria. In practice, the strongest passwords are
            randomly generated passwords, like HCTGkN-bJzEE4-A8mqdK-rPWXnw.
          </p>
        </div>
      </section>
      <section className={styles.whiteSection}>
        <div className={styles.whiteSectionContentLarge}>
          <h2>
            <span className={styles.green}>Password managers:</span>
            <br />
            what benefits to expect?
          </h2>
          <div className={styles.forUserAdvantages}>
            <div className={styles.forUserIlluContainer}>
              <Image src={forUsersImg} alt="" />
            </div>
            <div className={styles.greenSectionCard}>
              <h3>For users</h3>
              <p>
                what benefits can you expect? The password manager is today the only reliable tool for generating and
                memorizing strong, random passwords that are never otherwise used. It provides SME employees with real
                comfort thanks to <strong>automatic entry</strong> of passwords. So no more passwords designed by teams
                and saved in files hosted in the Cloud or written on post-it notes. Only one password must be remembered
                – the master password – which allows access to the solution. The good news is that it can afford to be
                less secure because the application integrates security mechanisms (that is its job) which make
                everything secure even in the case of passwords that is a little weak.
              </p>
              <p>
                <strong>Sharing</strong> is also secure via the safe, which allows you to definitively turn the page on
                confidential data disclosed in plain text between colleagues on the company chat or by e-mail.
              </p>
              <p>
                Finally, in a password manager, <strong>stored data is encrypted</strong> and protected by various
                mechanisms.
              </p>
            </div>
          </div>
          <div className={styles.forAdminAdvantages}>
            <div className={styles.forUserIlluContainer}>
              <Image src={forAdminImg} alt="" />
            </div>
            <div className={styles.greenSectionCard}>
              <h3>For IT security managers</h3>
              <p>
                The implementation of a dedicated tool allows IT security managers of SMEs to clarify and share the
                password security policy internally. They will thus be able to ensure that good practices are understood
                and applied by everyone. The solution will enable them to effectively track{" "}
                <strong>password strengthening</strong> across the enterprise.
              </p>
              <p>
                IT managers can also hope to save time by limiting requests from employees regarding the management of
                their passwords (forgotten passwords, non-renewed passwords, etc.). In this way, they will be able to
                devote more time to raising awareness among employees who are least involved in the joint process
                initiated.
              </p>
              <p>
                Finally… all this is only possible by choosing a password manager allowing{" "}
                <strong>control and supervision</strong>. The monitoring functionality allows administrators to ensure
                user buy-in and effective security reinforcement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

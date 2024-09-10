import { Metadata } from "next";
import { getDictionary } from "../../../../../translations/translations";
import styles from "../../page.module.css";

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const t = getDictionary(params.lang);
  const template = {
    alternates: {
      canonical: "https://upsignon.eu/fr/resources/tech-articles/browser-extension-security",
      languages: {
        fr: "https://upsignon.eu/fr/resources/tech-articles/browser-extension-security",
        en: "https://upsignon.eu/en/resources/tech-articles/browser-extension-security",
      },
    },
  };
  if (params.lang === "fr") {
    return {
      title: t.resources.browserExtensionSecurity,
      description: "Explications détaillées du fonctionnement et de la sécurité de l'extension de navigateur.",
      ...template,
    };
  } else {
    return {
      title: t.resources.browserExtensionSecurity,
      description: "Detailed explanations of the functionning and security of the browser extension.",
      ...template,
    };
  }
}

export default function BrowserExtensionSecurity({ params }: { params: { lang: string } }) {
  const t = getDictionary(params.lang);
  return (
    <div className={styles.content}>
      <div className={styles.backArrow}>
        <span>&lt;  </span>
        <a href="/resources/tech-articles">{t.resources.technicalExplanations}</a>
      </div>
      {params.lang === "fr" ? <FRArticle /> : <ENArticle />}
      <div className={styles.backArrow}>
        <span>&lt;  </span>
        <a href="/resources/tech-articles">{t.resources.technicalExplanations}</a>
      </div>
    </div>
  );
}

function FRArticle() {
  return (
    <article className={styles.article}>
      <header>
        <h1>Principes de fonctionnement et de sécurité de l'extension de navigateur</h1>
      </header>

      <h2>Compatibilité</h2>
      <p>
        L'extension de navigateur est compatible avec la plupart des navigateurs couramments utilisés sur MacOS, Windows
        et Linux (voir <a href="https://upsignon.eu/downloads">la page de téléchargements</a> pour plus de détails).
      </p>
      <p>
        L'extension de navigateur n'est pas compatible avec iOS et Android. Sur ces plateformes, UpSignOn propose le
        remplissage automatique intégré au système d'exploitation. Suivez les indications de la page paramètres pour
        configurer cette fonctionnalité.
      </p>

      <h2>Connexion à l’application</h2>
      <p>
        Dans tout ce qui suit nous appellerons <em>application</em> le logiciel de bureau (ou client lourd) UpSignOn et{" "}
        <em>extension de navigateur</em> le logiciel (ou addon) installé spécifiquement dans chaque navigateur (Google
        Chrome, Firefox, Microsoft Edge, etc.)
      </p>
      <p>
        Pour maximimer la sécurité de vos données, nous avons conçu l'extension de navigateur comme une brique
        supplémentaire, non autonome. L'application UpSignOn (le logiciel de bureau) doit obligatoirement être installé
        pour que l'extension de navigateur puisse fonctionner.
      </p>
      <p>
        Toutes les opérations cryptographiques sur les coffres-forts sont faites dans l'application. L'extension ne peut
        que refléter l'état de verrouillage ou de déverrouillage d'un coffre-fort dans l'application. L'extension
        profite ainsi des fonctionnalités de verrouillage automatique en cas d'inactivité et en cas de verrouillage de
        session.
      </p>
      <h3>Communication en websocket</h3>
      <p>
        Concrètement, l'extension de navigateur se connecte en websocket à l'application qui écoute les requêtes
        provenant uniquement de l'ordinateur (localhost).
      </p>
      <h3>Chiffrement des communications</h3>
      <p>
        Tous les échanges entre l'application et l'extension sont chiffrés pour qu'aucune autre application installée
        sur votre ordinateur ne puisse avoir accès aux données échangées. L'algorithme de chiffrement utilisé est
        AES-CBC-256 + HMAC-SHA256. NB, ces algorithmes ont été choisis en fonction des normes cryptographiques actuelles
        et des implémentations disponibles dans les navigateurs.
      </p>
      <h3>Procédure d'autorisation</h3>
      <p>
        Les clés de chiffrement et d'authentification utilisées pour ces échanges sont configurées lors de la procédure
        initiale d'autorisation de l'extension de navigateur.
        <br />
        L'autorisation d'une extension de navigateur nécessite le déverrouillage d'un coffre-fort (n'importe lequel).
      </p>
      <h3>Révocation</h3>
      <p>
        À tout moment, l'utilisateur peut décider de révoquer l'autorisation d'une extension depuis la page dédiée dans
        les paramètres de l'application.
        <br />
        Par ailleurs, l'autorisation d'une extension est associée au coffre-fort utilisé à l'initialisation. Lorsque ce
        coffre-fort est supprimé dans l'application, les extensions associées sont immédiatement révoquées.
      </p>
      <h3>Cas particulier des serveurs Windows RDS</h3>
      <p>
        Sur les serveurs Windows RDS où plusieurs utilisateurs peuvent utiliser UpSignOn simultanément, chaque
        utilisateur voit un état de l'application et de l'extension qui lui est propre. Chaque utilisateur doit
        autoriser son extension de navigateur. L'extension utilise un port différent pour chaque utilisateur et
        l'échange de données entre l'extension et l'application de sessions utilisateur différentes n'est pas possible.
      </p>
      <h3>Cas particulier de Linux</h3>
      <p>
        La configuration des extensions de navigateur nécessite que le protocole <em>upsignon:</em> soit associé à
        l'application UpSignOn et fonctionne correctement. Voir les instructions d'installation sur la{" "}
        <a href="https://upsignon.eu/downloads/linux">page dédiée à Linux</a>.
      </p>

      <h2>Sécurité et limitations du remplissage automatique</h2>
      <p>
        Dans ce qui suit, nous appelerons <em>popup</em> la fenêtre de l'extension de navigateur qui s'ouvre lorsqu'on
        clique sur l'icône UpSignOn dans la barre de menu du navigateur. Nous appelerons <em>contenu injecté</em> les
        bulles affichant du contenu ajouté par l'extension UpSignOn dans une page web.
      </p>
      <h3>Principe du juste-à-temps</h3>
      <p>
        L'extension de navigateur, que ce soit sa popup ou son contenu injecté, n'a accès aux mots de passe réels qu'au
        moment où un champ mot de passe doit être renseigné. Autrement dit, lorsque que l'extension affiche '*******'
        pour un mot de passe, le navigateur et la page web ne voient pas le véritable mot de passe sous-jacent qui reste
        donc protégé.
      </p>
      <h3>Conditions du remplissage automatique</h3>
      <p>
        Le remplissage du formulaire d'un site web n'est totalement automatique (c'est-à-dire sans action de
        l'utilisateur) que dans les cas suivants :
      </p>
      <ul>
        <li>il n'y a qu'un seul compte dans votre coffre-fort qui pourrait correspondre à ce formulaire</li>
        <li>l'URL du compte enregistré pour ce site dans votre coffre-fort est valide</li>
        <li>
          le nom de domaine de la page est strictement le même domaine ou un sous-domaine de l'URL enregistrée pour ce
          compte dans votre coffre-fort. NB : l'extension sait reconnaître les domaines racines, y compris ceux qui sont
          composés de plusieurs racines et ne remplira pas un mot de passe si le nom de domaine du compte enregistré
          n'est composé que de domaines racines.
        </li>
      </ul>
      <h3>Cas de non-remplissage</h3>
      <p>
        L'extension de navigateur ne remplira pas un formulaire de façon automatique ou semi-automatique (c'est-à-dire
        déclenchée par une action de l'utilisateur), si :
      </p>
      <ul>
        <li>
          le formulaire est ajouté dans la page via une iframe qui n'est pas un enfant direct de la page principale
        </li>
        <li>
          le formulaire est ajouté dans la page via une iframe dont le nom de domaine n'est pas identique au nom de
          domaine de la page principale (ce cas pose des problèmes de sécurité et n'est pas encore géré)
        </li>
        <li>si la façon dont est codé le formulaire ne permet pas l'identification des champs login et mot de passe</li>
        <li>
          si l'éditeur du site web a mis en place des mécanismes destinés à empêcher le remplissage automatique par des
          robots
        </li>
      </ul>
      <p>
        Nous conseillons au développeurs de consulter{" "}
        <a href="https://upsignon.eu/resources/articles/9">nos recommandations sur les formulaires de connexion</a>.
      </p>
      <p>
        Lorsque ni le remplissage automatique ni le remplissage forcé ne fonctionne, l'utilisateur a toujours la
        possibilité de copier-coller le login et le mot de passe à partir de la popup de l'extension.
      </p>
    </article>
  );
}

function ENArticle() {
  return (
    <article className={styles.article}>
      <header>
        <h1>Operating and security principles of the browser extension</h1>
      </header>

      <h2>Compatibility</h2>
      <p>
        The browser extension is compatible with most commonly used browsers on MacOS, Windows and Linux (see{" "}
        <a href="https://upsignon.eu/downloads">the downloads page</a> for more details).
      </p>
      <p>
        The browser extension is not compatible with iOS and Android. On these platforms, UpSignOn offers the autofill
        built into the operating system. Follow the instructions on the settings page to configure this feature.
      </p>

      <h2>Connecting to the application</h2>
      <p>
        In all that follows we will call <em>application</em> the UpSignOn desktop software (or heavy client) and{" "}
        <em>browser extension</em> the software (or addon) installed specifically in each browser (Google Chrome,
        Firefox, Microsoft Edge, etc.)
      </p>
      <p>
        To maximize the security of your data, we have designed the browser extension as an additional, non-standalone
        brick. The UpSignOn application (the desktop software) must be installed for the browser extension to work.
      </p>
      <p>
        All cryptographic operations on vaults are performed in the application. The extension can only reflect the
        locked or unlocked status of a vault in the application. The extension thus benefits from the automatic locking
        features in case of inactivity and in case of session locking.
      </p>
      <h3>Websocket communication</h3>
      <p>
        Concretely, the browser extension connects via websocket to the application that listens to requests coming only
        from the computer (localhost).
      </p>
      <h3>Communication encryption</h3>
      <p>
        All exchanges between the application and the extension are encrypted so that no other application installed on
        your computer can have access to the data exchanged. The encryption algorithm used is AES-CBC-256 + HMAC-SHA256.
        NB, these algorithms were chosen according to current cryptographic standards and the implementations available
        in browsers.
      </p>

      <h3>Authorization procedure</h3>
      <p>
        The encryption and authentication keys used for these exchanges are configured during the initial authorization
        procedure of the browser extension.
        <br />
        Authorizing a browser extension requires unlocking a vault (any vault).
      </p>
      <h3>Revocation</h3>
      <p>
        At any time, the user can decide to revoke the authorization of an extension from the dedicated page in the
        application settings.
        <br />
        In addition, the authorization of an extension is associated with the vault used at initialization. When this
        vault is deleted in the application, the associated extensions are immediately revoked.
      </p>
      <h3>Special case of Windows RDS servers</h3>
      <p>
        On Windows RDS servers where multiple users can use UpSignOn simultaneously, each user sees a status of the
        application and of the extension that is specific to him. Each user must authorize his browser extension. The
        extension uses a different port for each user and data exchange between the extension and the application of
        different user sessions is not possible.
      </p>
      <h3>Special case of Linux</h3>
      <p>
        Configuring browser extensions requires the <em>upsignon:</em> protocol to be associated with the UpSignOn
        application and to be working correctly. See installation instructions on{" "}
        <a href="https://upsignon.eu/downloads/linux">the page dedicated to Linux</a>.
      </p>

      <h2>Security and limitations of autofill</h2>
      <p>
        In the following, we will call <em>popup</em> the browser extension window that opens when clicking on the
        UpSignOn icon in the browser menu bar. We will call <em>injected content</em> the bubbles displaying content
        added by the UpSignOn extension in a web page.
      </p>
      <h3>Just-in-time principle</h3>
      <p>
        The browser extension, whether its popup or its injected content, only has access to the real passwords when a
        password field must be filled in. In other words, when the extension displays '*******' for a password, the
        browser and the web page do not see the real underlying password, which therefore remains protected.{" "}
      </p>
      <h3>Autofill conditions</h3>
      <p>Filling in a website form is fully automatic (i.e. without user action) only in the following cases:</p>
      <ul>
        <li>there is only one account in your vault that could match this form</li>
        <li>the URL of the account registered for this site in your vault is valid</li>

        <li>
          the domain name of the page is strictly the same domain or a subdomain of the URL registered for this account
          in your vault. NB: the extension can recognize root domains, including those composed of multiple roots and
          will not fill in a password if the domain name of the registered account is composed only of root domains.
        </li>
      </ul>
      <h3>Non-filling cases</h3>
      <p>
        The browser extension will not fill a form automatically or semi-automatically (i.e. triggered by a user
        action), if:
      </p>
      <ul>
        <li>the form is added to the page via an iframe that is not a direct child of the main page</li>
        <li>
          the form is added to the page via an iframe whose domain name is not identical to the domain name of the main
          page (this case poses security issues and is not yet handled)
        </li>
        <li>if the way the form is coded does not allow the login and password fields to be identified</li>
        <li>if the website publisher has implemented mechanisms to prevent automatic filling by robots</li>
      </ul>
      <p>
        We advise developers to consult{" "}
        <a href="https://upsignon.eu/resources/articles/9">our recommendations on login forms</a>.{" "}
      </p>
      <p>
        When neither autofill nor forcefill works, the user still has the option to copy-paste the login and password
        from the extension popup.
      </p>
    </article>
  );
}

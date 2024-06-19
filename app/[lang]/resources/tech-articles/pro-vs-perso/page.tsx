import { Metadata } from "next";
import { getDictionary } from "../../../../../translations/translations";
import styles from "../../page.module.css";

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  if (params.lang === "fr") {
    return {
      title: "Principes de fonctionnement des coffres-forts PERSO et PRO",
      description:
        "Explications détaillées de la conception et du fonctionnement des fonctionnalités suivantes des coffres-forts PERSO et PRO : ajout de nouveaux appareils, synchronisation, partage, sauvegardes, stockage et chiffrement.",
    };
  } else {
    return {
      title: "Operating principles of PERSO and PRO vaults",
      description:
        "Detailed explanations of the design and operation of the following features of the PERSO and PRO vaults: adding new devices, synchronisation, sharing, backups, storage and encryption.",
    };
  }
}

export default function ProVsPerso({ params }: { params: { lang: string } }) {
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
        <h1>
          Principes de fonctionnement
          <br />
          des coffres-forts PERSO et PRO
        </h1>
      </header>
      <p>
        <em>
          Vous retrouverez le détail des algorithmes cryptographiques utilisés{" "}
          <a href="#cryptoAlgo">à la fin de cette page.</a>
        </em>
      </p>
      <h2>Principe de fonctionnement des coffres-forts PERSO</h2>
      <h3>Stockage local</h3>
      <p>
        Les coffres-forts PERSO sont conçus comme un fichier stocké localement et de façon chiffrée sur votre appareil.
        La clé de chiffrement utilisée est dérivée de votre mot de passe maître.
      </p>

      <h3>Appairage de nouveaux appareils</h3>
      <p>
        Afin d’obtenir une copie synchronisée de votre coffre-fort sur tous vos appareils, vous devez faire un appairage
        entre un appareil où vous avez déjà votre coffre-fort et le nouvel appareil. Cela ne fonctionne pas comme un
        compte web où il suffirait de saisir son adresse email et son mot de passe.
      </p>
      <p>
        L’appareil à partir duquel vous avez créé votre coffre-fort demande un identifiant aléatoire auprès du serveur
        et génère une clé secrète aléatoire. Ces deux informations sont enregistrées dans le coffre-fort et ne seront
        jamais manipulées par l’utilisateur directement.
      </p>
      <p>
        L’appairage d’un nouvel appareil consiste à transférer cet identifiant et cette clé de chiffrement de façon
        sécurisée au nouvel appareil. Pour que ce transfert soit sécurisé, une information est transférée{" "}
        <em>physiquement</em> d’un appareil à un autre (soit par scan d’un QR code, soit par recopie manuelle). Il est
        donc <em>physiquement</em> impossible que cette information soit interceptée (sauf à se trouver derrière vous ou
        à avoir installé un virus sur votre ordinateur mais dans ce cas vous avez déjà perdu). Par ailleurs,
        l’information n’est utilisable qu’une seule fois. Le nouvel appareil obtient ainsi un identifiant et une clé
        secrète en commun avec l’appareil source.
      </p>

      <h3>Synchronisation entre appareils</h3>
      <p>
        Une fois que l’identifiant et la clé sont partagés entre les deux appareils, ils peuvent échanger des
        informations de façon totalement sécurisée via n’importe quel canal de communication (même non sécurisé) en
        chiffrant les messages avec leur clé secrète. Chacun envoie alors aux autres appareils les modifications qu’il
        effectue dans le coffre-fort pour que les autres appareils puissent également les appliquer sur leur coffre-fort
        local.
      </p>
      <p>
        L’avantage de ce système est que le serveur ne connaît aucune information sur vous (il ne connaît pas votre
        adresse email par exemple) et n’a aucun moyen de déchiffrer vos données. Si le serveur est compromis, le pirate
        ne récupère aucune information utilisable. S’il efface des données, l’application les recréra automatiquement
        lors de la prochaine synchronisation à partir du coffre-fort local.
      </p>

      <h3>Sauvegarde de données chez un contact de confiance</h3>
      <p>
        L’inconvénient (ou la force) de ce système est que si vous perdez tous vos appareils, alors vous perdez votre
        coffre-fort. Pour résoudre ce problème, UpSignOn vous propose de confier une sauvegarde de vos données à un ou
        plusieurs contacts de confiance (voir ci-dessous).
      </p>
      <p>
        Techniquement, votre contact de confiance conservera dans son coffre-fort un petit fichier chiffré par votre mot
        de passe maître contenant votre identifiant et votre clé secrète de coffre-fort. Il ne peut donc pas récupérer
        lui-même vos données même s’il essayait, car il ne connaît pas votre mot de passe maître.
      </p>

      <h3>Contacts de confiance</h3>
      <p>
        Un contact de confiance est une personne que vous connaissez et avec laquelle vous partagez une clé secrète
        (différente évidemment de la clé secrète de votre coffre-fort). Cette clé secrète est stockée dans chacun de vos
        coffres-forts respectifs et s’échange initialement selon le même principe sécurisé que pour l’appairage
        d’appareils.
      </p>
      <p>
        Grâce à cette clé secrète commune, vous disposez d’un canal d’échange sécurisé (chiffré de bout en bout) avec
        vos contacts de confiance. Ce canal d’échange vous permet d’envoyer des sauvegardes ou des coffres-forts
        partagés.
      </p>

      <h3>Sauvegarde de mot de passe maître chez un contact de confiance</h3>
      <p>
        L’autre force du système de synchronisation des coffres-forts PERSO et que le serveur ne reçoit jamais votre mot
        de passe maître ni un dérivé de celui-ci. Ce mot de passe maître ne sert qu’au déchiffrement de votre
        coffre-fort local.
      </p>
      <p>
        Si vous oubliez votre mot de passe maître, nous n’avons aucun moyen de vous aider à le réinitialiser. Si c’était
        le cas, cela voudrait dire que nous serions en mesure de déchiffrer votre coffre-fort PERSO, ce qui n’est pas
        souhaité.
      </p>
      <p>
        Pour résoudre ce problème, nous avons donc conçu un système de sauvegarde de votre mot de passe maître auprès
        d’un ou plusieurs contacts de confiance. Concrètement, une clé secrète de sauvegarde (encore une différente bien
        sûr) est confiée à vos contacts de confiance désignés. Cette clé est utilisée sur chacun de vos appareils pour
        chiffrer votre mot de passe maître et stocker le résultat chiffré dans un fichier local.
      </p>
      <p>
        Si vous oubliez votre mot de passe maître, l’un de vos contacts de confiance peut vous renvoyer votre clé pour
        que vous puissiez déchiffrer votre mot de passe maître puis votre coffre-fort. La sécurité repose sur le fait
        que votre contact, parce qu’il vous connaît, est capable de vous identifier et que le fichier chiffré de votre
        mot de passe n’est disponible que sur les appareils qui vous appartiennent.
      </p>
      <span>Remarquez que</span>
      <ul>
        <li>
          le système de sauvegarde de vos données repose sur le fait que vous seul connaissez votre mot de passe maître
          ;
        </li>
        <li>
          le système de sauvegarde de votre mot de passe maître repose sur le fait que vous ayez accès à l’un de vos
          appareils.
        </li>
      </ul>
      <p>
        Par conséquent, si vous oubliez votre mot de passe maître et que vous avez en plus perdu tous vos appareils, vos
        données seront définitivement perdues.
      </p>

      <h3>Partage de mots de passe</h3>
      <p>
        Le partage de mots de passe dans les coffres-forts PERSO n’est possible qu’avec des contacts de confiance.
        Techniquement, un mini coffre-fort est créé avec son propre identifiant et sa clé secrète. Ces informations sont
        stockées dans votre coffre-fort et également envoyées à vos contacts de confiance destinataires du partage via
        le canal de communication sécurisé que vous avez avec chacun de vos contacts (cf ci-dessus).
      </p>
      <blockquote>
        Attention, une fois le partage effectué, la suppression d’un contact de confiance ne le supprime pas en tant que
        destinataire du partage. Cette opération doit être réalisée à part.
      </blockquote>

      <h2>Principe de fonctionnement des coffres-forts PRO</h2>

      <h3>Stockage cloud</h3>
      <p>
        Les coffres-forts PRO sont conçus dans la logique inverse des coffres-forts PERSO. Le serveur joue le rôle de
        source de vérité unique et stocke le coffre-fort chiffré de l’utilisateur. Bien que certaines informations
        soient transmises au serveur pour les besoins de la supervision, les mots de passe et autres secrets stockés
        dans le coffre-fort restent inaccessibles sans le mot de passe maître de l’utilisateur.
      </p>
      <p>
        Chaque coffre-fort est par ailleurs associé à une adresse email pour que son propriétaire puisse être identifié
        par les administrateurs.
      </p>

      <h3>Une banque par client</h3>
      <p>
        Chaque organisation cliente dispose de sa propre banque (zone de stockage des coffres-forts PRO) indépendante
        des autres banques. Ces banques peuvent même être hébergées sur des serveurs différents (cas de
        l’auto-hébergement par exemple). À chaque banque est donc associé une url différente.
      </p>

      <h3>Autorisation de nouveaux appareils</h3>
      <p>
        Pour ajouter un nouvel appareil, l’utilisateur commencera par y saisir l’url de la banque correspondant à son
        entreprise. Puis il saisira son adresse email sur laquelle il recevra un code d’autorisation à usage unique. En
        saisissant ce code dans l’application, l’utilisateur confirme sa propriété sur l’adresse email en question, ce
        qui permet au serveur de reconnaître la légitimité de l’appareil.
      </p>
      <p>
        Techniquement, une paire de clé asymétrique est générée et stockée sur l’appareil. La partie publique de cette
        clé est envoyée au serveur. Cette clé sert ensuite à chaque connexion à prouver l’identité de l’appareil via un
        protocole de défi-réponse.
      </p>

      <h3>Déverrouillage du coffre-fort</h3>
      <p>Pour déverrouiller son coffre-fort, l’utilisateur devra ensuite saisir son mot de passe maître.</p>
      <p>
        Ce mot de passe maître sert ici non seulement pour le déchiffrement des données, mais également comme deuxième
        facteur d’authentification auprès du serveur.
      </p>
      <p>
        Le mot de passe maître n’est pas pour autant simplement envoyé au serveur comme pour une authentification par
        mot de passe classique. Il est utilisé dans le cadre d’un protocole de défi-réponse afin de ne jamais être
        envoyé au serveur.
      </p>

      <h3>Synchronisation des appareils</h3>
      <p>
        Dans ce système, il n’y a pas vraiment de sens à parler de synchronisation entre appareils comme pour les
        coffres-forts PERSO. En effet, à chaque ouverture du coffre-fort, après authentification de l’appareil et de
        l’utilisateur, l’intégralité du coffre-fort chiffré est récupérée auprès du serveur.
      </p>
      <p>
        Lorsque l’utilisateur effectue des modifications dans son coffre-fort, le coffre-fort entier est chiffré à
        nouveau puis envoyé au serveur pour stockage. (NB, la modification simultanée du coffre-fort sur deux appareils
        est parfaitement bien gérée par l’application).
      </p>

      <h3>Mode hors-connexion</h3>
      <p>
        Lorsque l’utilisateur n’a pas accès à internet, il peut consulter le contenu de son coffre-fort via une copie
        locale de ses données (qu’il faudra tout de même déchiffrer avec le mot de passe maître) mais ne peut pas
        apporter de modifications à son coffre-fort.
      </p>
      <p>
        Cette fonctionnalité peut-être désactivée dans les paramétrages de la console de supervision par
        l’administrateur.
      </p>

      <h3>Sauvegarde de données transparente pour l’utilisateur</h3>
      <p>
        Cette conception fait que même en cas de perte de tous ses appareils, un utilisateur peut récupérer son
        coffre-fort simplement en autorisant un nouvel appareil et en récupérant son coffre-fort depuis le serveur.
        Comme pour les coffres-forts PERSO, cela suppose néanmoins que l’utilisateur n’ait pas oublié son mot de passe
        maître.
      </p>

      <h3>Pas de notion de contact de confiance</h3>
      <p>
        Les coffres-forts PRO ne proposent pas la notion de contact de confiance car elle n’est pas utile. Les
        fonctionnalités de sauvegardes et de partage sont gérées différemment, ce qui les rend plus simples.
      </p>

      <h3>Sauvegarde de mot de passe maître automatique auprès du serveur</h3>
      <p>
        La fonction de réinitialisation du mot de passe maître fonctionne de façon assez classique via l’envoi d’un
        email.
      </p>
      <p>
        Chaque appareil génère et stocke localement une paire de clé asymétrique dédiée à la fonctionnalité de mot de
        passe oublié. La clé privée est stockée sur l’appareil uniquement, tandis que la clé publique est enregistrée
        dans le coffre-fort.
      </p>
      <p>
        Lorsque l’utilisateur modifie son mot de passe maître, celui-ci est chiffré par les clés publiques de tous les
        appareils autorisés et les résultats sont envoyés au serveur pour stockage.
      </p>
      <p>
        En cas d’oubli du mot de passe maître, l’utilisateur sollicite l’envoi d’un code à usage unique par email. Ce
        code permet au serveur de l’authentifier temporairement et d’autoriser l’envoi de la sauvegarde chiffrée du mot
        de passe maître à l’application. L’application peut ensuite déchiffrer cette sauvegarde avec sa clé privée
        stockée localement pour récupérer le mot de passe maître de l’utilisateur et lui proposer d’en choisir un
        nouveau.
      </p>
      <p>
        En cas de raquet de votre téléphone, le voleur pourrait tenter d’utiliser la fonction de mot de passe oublié et
        d’aller consulter vos emails qui sont souvent synchronisés sur votre téléphone. Pour contrer cette attaque,
        l’envoi du mail de réinitialisation est par défaut soumis à validation manuelle d’un administrateur.
      </p>
      <p>
        Remarquez que, comme pour les coffres-fort PERSO, puisque le système de sauvegarde de votre mot de passe maître
        repose sur le fait que vous ayez accès à l’un de vos appareils autorisé, la même contrainte s’applique: si vous
        oubliez votre mot de passe maître et que vous avez en plus perdu tous vos appareils, vos données seront
        définitivement perdues.
      </p>

      <h3>Partage de mots de passe</h3>
      <p>
        Dans le cas des coffres-forts PRO, pour que le partage de mots de passe soit plus fluide et plus adapté à de
        grandes équipes, nous n’utilisons pas le concept de contacts de confiance (cf coffres-forts PERSO). Dans
        l’application, il vous suffit de saisir les adresses emails des collègues à qui vous souhaitez partager des
        secrets.
      </p>
      <p>
        Techniquement, chaque coffre-fort PRO est associé à une paire de clé asymétrique dédiée au partage : la clé
        secrète est conservée en sécurité dans le coffre-fort, tandis que la clé publique est stockée par le serveur.
      </p>
      <p>
        Lors d’un partage, un mini coffre-fort est créé avec son propre identifiant et sa clé secrète. Cette clé secrète
        est chiffrée par la clé publique de chaque destinataire du partage puis les résultats sont envoyés au serveur
        pour stockage.
      </p>
      <p>
        Pour afficher le contenu d’un coffre-fort partagé, l’application en récupère la clé secrète chiffrée auprès du
        serveur, la déchiffre avec la clé privée de partage de l’utilisateur (récupérée dans le coffre-fort principal de
        l’utilisateur), et l’utilise enfin pour déchiffrer le contenu du coffre-fort partagé.
      </p>

      <h2 id="cryptoAlgo">Détails des algorithmes cryptographiques utilisés</h2>
      <p>
        Librairie utilisée :{" "}
        <a className={styles.link} target="_blank" href="https://doc.libsodium.org/">
          libsodium
        </a>
      </p>
      <ul>
        <li>
          <strong>Dérivation de mot de passe :</strong>{" "}
          <mark>
            <a target="_blank" href="https://libsodium.gitbook.io/doc/password_hashing/default_phf#key-derivation">
              Argon2ID
            </a>
          </mark>
          <ul>
            <li>dérivation des mot de passe maître PRO et PERSO</li>
          </ul>
        </li>
        <li>
          <strong>Chiffrement symétrique authentifié :</strong>{" "}
          <a target="_blank" href="https://libsodium.gitbook.io/doc/secret-key_cryptography/secretbox">
            secret box de libsodium
          </a>{" "}
          (<mark>XSalsa20 + Poly1305 MAC</mark>)
          <ul>
            <li>chiffrement des coffres-forts PRO et PERSO après dérivation du mot de passe maître</li>
            <li>chiffrement des coffres-forts partagés PRO et PERSO</li>
            <li>synchronisation zero-trust PERSO</li>
            <li>échanges de données zero-trust (chiffrée de bout en bout) entre contacts de confiance PERSO</li>
            <li>chiffrement des sauvegardes de données PERSO après dérivation du mot de passe maître</li>
            <li>chiffrement des sauvegardes de mot de passe maître PERSO</li>
          </ul>
        </li>
        <li>
          <strong>Chiffrement asymétrique :</strong>{" "}
          <a target="_blank" href="https://libsodium.gitbook.io/doc/public-key_cryptography/sealed_boxes">
            sealed box de libsodium
          </a>{" "}
          (<mark>X25519 + XSalsa20-Poly1305</mark>)
          <ul>
            <li>chiffrement des clés secrètes de coffres-forts partagés PRO</li>
            <li>sauvegarde de mots de passe maître PRO</li>
          </ul>
        </li>
        <li>
          <strong>Signature :</strong>{" "}
          <mark>
            <a
              target="_blank"
              href="https://libsodium.gitbook.io/doc/public-key_cryptography/public-key_signatures#algorithm-details"
            >
              Ed25519
            </a>
          </mark>
          <ul>
            <li>authentification forte d’appareil PRO</li>
          </ul>
        </li>
        <li>
          <strong>Authentification de challenges :</strong>{" "}
          <mark>
            <a target="_blank" href="https://libsodium.gitbook.io/doc/advanced/hmac-sha2#hmac-sha-512-256">
              HMAC-SHA-256
            </a>
          </mark>
          <ul>
            <li>
              authentification du mot de passe maître PRO par défi-réponse (pour que le mot de passe maître soit vérifié
              sans être jamais envoyé au serveur)
            </li>
          </ul>
        </li>
      </ul>
    </article>
  );
}

function ENArticle() {
  return (
    <article className={styles.article}>
      <header>
        <h1>
          Operating principles
          <br />
          of PERSO and PRO vaults
        </h1>
      </header>
      <p>
        <em>
          You will find the details of the cryptographic algorithms used{" "}
          <a href="#cryptoAlgo">at the end of this page.</a>
        </em>
      </p>
      <h2>Operating principles of PERSO vaults</h2>
      <h3>Local storage</h3>
      <p>
        PERSO vaults are designed as a file stored locally and encrypted on your device. The encryption key used is
        derived from your master password.
      </p>

      <h3>Pairing new devices</h3>
      <p>
        In order to get a synchronized copy of your vault on all your devices, you must pair a device where you already
        have your vault and the new device. It does not work like a web account where you just have to enter your email
        address and password.
      </p>
      <p>
        The device from which you created your vault requests a random ID from the server and generates a random secret
        key. These two pieces of information are saved in the vault and will never be manipulated by the user directly.
      </p>
      <p>
        Pairing a new device involves transferring this identifier and encryption key securely to the new device. For
        this transfer to be secure, information is transferred <em>physically</em> from one device to another (either by
        scanning a QR code, or by manual copying). It is therefore <em>physically</em> impossible for this information
        to be intercepted (unless being behind your back or having installed a virus on your computer but in this case
        you have already lost). Furthermore, the information can only be used once. The new device thus obtains an
        identifier and a secret key in common with the source device.
      </p>

      <h3>Syncing between devices</h3>
      <p>
        Once the ID and key are shared between the two devices, they can exchange information completely securely over
        any communication channel (even unsecured ones) by encrypting messages with their secret key. Each device then
        sends the changes it makes in the vault to other devices so that other devices can also apply them to their
        local vault.
      </p>
      <p>
        The advantage of this system is that the server does not know any information about you (it does not know your
        email address for example) and has no way of decrypting your data. If the server is compromised, the hacker does
        not recover any usable information. If it erases data, the app will automatically recreate it the next time it
        syncs from the local vault.
      </p>

      <h3>Data backup with a trusted contact</h3>
      <p>
        The downside (or strength) of this system is that if you lose all your devices, then you lose your vault. To
        resolve this problem, UpSignOn lets you entrust a backup of your data to one or more trusted contacts (see
        below).
      </p>
      <p>
        Technically, your trusted contact will keep a small file in their vault encrypted by your master password
        containing your username and your secret vault key. So he cannot recover your data himself even if he tried,
        because he does not know your master password.
      </p>
      <h3>Trusted Contacts</h3>
      <p>
        A trusted contact is someone you know and with whom you share a secret key (obviously different from your
        vault’s secret key). This secret key is stored in each of your respective vaults and is initially exchanged
        according to the same secure principle as for device pairing.
      </p>
      <p>
        Thanks to this common secret key, you have a secure exchange channel (end-to-end encrypted) with your trusted
        contacts. This exchange channel allows you to send backups or shared vaults.
      </p>

      <h3>Master password backup with a trusted contact</h3>
      <p>
        The other strength of the PERSO vault synchronization system is that the server never receives your master
        password or a derivative thereof. This master password is only used to decrypt your local vault.
      </p>
      <p>
        If you forget your master password, we have no way to help you reset it. If so, that would mean we would be able
        to decrypt your PERSO vault, which is not desired.
      </p>
      <p>
        To solve this problem, we have therefore designed a system for saving your master password with one or more
        trusted contacts. Concretely, a secret backup key (yet a different one of course) is entrusted to your
        designated trusted contacts. This key is used on each of your devices to encrypt your master password and store
        the encrypted result in a local file.
      </p>
      <p>
        If you forget your master password, one of your trusted contacts can send your key back to you so you can
        decrypt your master password and then your vault. The security is based on the fact that your contact, because
        he knows you, is able to identify you and that your encrypted password file is only available on devices that
        belong to you.
      </p>
      <span>Note that</span>
      <ul>
        <li>the system for saving your data relies on the fact that only you know your master password;</li>
        <li>the system for saving your master password relies on you having access to one of your devices.</li>
      </ul>
      <p>
        Therefore, if you forget your master password and have also lost all your devices, your data will be permanently
        lost.
      </p>

      <h3>Password sharing</h3>
      <p>
        Sharing passwords in PERSO vaults is only possible with trusted contacts. Technically, a mini vault is created
        with its own ID and secret key. This information is stored in your vault and also sent to your trusted contacts
        who are recipients of the sharing via the secure communication channel that you have with each of your contacts
        (see above).
      </p>
      <blockquote>
        Please note, once sharing has been completed, deleting a trusted contact does not remove them as recipient of
        the sharing. This operation must be carried out separately.
      </blockquote>

      <h2>Operating principles of PRO vaults</h2>

      <h3>Cloud storage</h3>
      <p>
        PRO vaults are designed in the opposite logic to PERSO vaults. The server acts as a single source of truth and
        stores the user’s encrypted vault. Although some information is transmitted to the server for monitoring
        purposes, passwords and other secrets stored in the vault remain inaccessible without the user’s master
        password.
      </p>
      <p> Each vault is also associated with an email address so that its owner can be identified by administrators.</p>

      <h3>One bank per customer</h3>
      <p>
        Each client organization has its own bank (PRO vault storage area) independent of other banks. These banks can
        even be hosted on different servers (case of self-hosting for example). Each bank is therefore associated with a
        different URL.
      </p>

      <h3>Authorization of new devices</h3>
      <p>
        To add a new device, the user will start by entering the URL of the bank corresponding to their company. Then he
        will enter his email address on which he will receive a one-time authorization code. By entering this code in
        the application, the user confirms their ownership of the email address in question, which allows the server to
        recognize the legitimacy of the device.
      </p>
      <p>
        Technically, an asymmetric key pair is generated and stored on the device. The public part of this key is sent
        to the server. This key is then used at each connection to prove the identity of the device via a
        challenge-response protocol.
      </p>

      <h3>Unlocking the vault</h3>
      <p>To unlock their vault, the user will then need to enter their master password.</p>
      <p>
        This master password serves here not only for data decryption, but also as a second factor for authentication
        with the server.
      </p>
      <p>
        The master password is not simply sent to the server as for traditional password authentication. It is used as
        part of a challenge-response protocol so that it is never sent to the server.
      </p>

      <h3>Device synchronization</h3>
      <p>
        In this system, there is no real sense in talking about synchronization between devices as with PERSO vaults.
        Indeed, each time the vault is opened, after authentication of the device and the user, the entire encrypted
        vault is retrieved from the server.
      </p>
      <p>
        When the user makes changes to their vault, the entire vault is re-encrypted and then sent to the server for
        storage. (NB, modifying the vault simultaneously on two devices is perfectly managed by the application).
      </p>

      <h3>Offline mode</h3>
      <p>
        When the user does not have access to the internet, he can consult the contents of his vault via a local copy of
        his data (which must still be decrypted with the master password) but not cannot make changes to their vault.
      </p>
      <p> This functionality can be deactivated in the supervision console settings by the administrator.</p>

      <h3>Transparent data backup for the user</h3>
      <p>
        This design means that even if all their devices are lost, a user can recover their vault simply by authorizing
        a new device and retrieving their vault from the server. As with PERSO vaults, this nevertheless assumes that
        the user has not forgotten their master password.
      </p>

      <h3>No concept of trusted contact</h3>
      <p>
        PRO vaults do not offer the concept of trusted contact because it is not useful. The backup and sharing features
        are managed differently, which makes them simpler.
      </p>

      <h3>Automatic master password backup to server</h3>
      <p> The master password reset function works in a fairly traditional way by sending an email.</p>
      <p>
        Each device generates and locally stores an asymmetric key pair dedicated to the forgotten password
        functionality. The private key is stored on the device only, while the public key is saved in the vault.
      </p>
      <p>
        When the user changes their master password, it is encrypted by the public keys of all authorized devices and
        the results are sent to the server for storage.
      </p>
      <p>
        If the master password is forgotten, the user requests the sending of a one-time code by email. This code allows
        the server to temporarily authenticate it and allow the encrypted backup of the master password to be sent to
        the application. The application can then decrypt this backup with its locally stored private key to recover the
        user’s master password and ask them to choose a new one.
      </p>
      <p>
        If your phone is hacked, the thief could try to use the forgotten password function and check your emails which
        are often synchronized on your phone. To counter this attack, sending the reset email is by default subject to
        manual validation by an administrator.
      </p>
      <p>
        Note that, as with PERSO vaults, since the backup system for your master password relies on you having access to
        one of your authorized devices, the same constraint applies: if you forget your master password and you have
        also lost all your devices, your data will be permanently lost.
      </p>

      <h3>Password sharing</h3>
      <p>
        In the case of PRO vaults, to make password sharing more fluid and more suitable for large teams, we do not use
        the concept of trusted contacts (see PERSO vaults). In the application, all you have to do is enter the email
        addresses of colleagues with whom you want to share secrets.
      </p>
      <p>
        Technically, each PRO vault is associated with an asymmetric key pair dedicated to sharing: the secret key is
        kept secure in the vault, while the public key is stored by the server.
      </p>
      <p>
        When sharing, a mini vault is created with its own identifier and secret key. This secret key is encrypted by
        the public key of each sharing recipient and then the results are sent to the server for storage.
      </p>
      <p>
        To display the contents of a shared vault, the application retrieves the encrypted secret key from the server,
        decrypts it with the user’s private sharing key (retrieved from the user’s main vault), and finally uses it to
        decrypt the contents of the shared vault.
      </p>

      <h2 id="cryptoAlgo">Details of the cryptographic algorithms used</h2>
      <p>
        Library used:{" "}
        <a className={styles.link} target="_blank" href="https://doc.libsodium.org/">
          libsodium
        </a>
      </p>
      <ul>
        <li>
          <strong>Password derivation:</strong>{" "}
          <mark>
            <a target="_blank" href="https://libsodium.gitbook.io/doc/password_hashing/default_phf#key-derivation">
              ARGON2ID
            </a>
          </mark>
          <ul>
            <li>derivation of PRO and PERSO master password</li>
          </ul>
        </li>
        <li>
          <strong>Authenticated symmetric encryption:</strong>{" "}
          <a target="_blank" href="https://libsodium.gitbook.io/doc/secret-key_cryptography/secretbox">
            libsodium secret box
          </a>{" "}
          (<mark>XSalsa20 + Poly1305 MAC</mark>)
          <ul>
            <li>encryption of PRO and PERSO vaults after derivation of the master password</li>
            <li>encryption of PRO and PERSO shared vaults</li>
            <li>zero-trust PERSO synchronization</li>
            <li>zero-trust data exchange (end-to-end encrypted) between PERSO trusted contacts</li>
            <li>encryption of PERSO data backups after derivation of the master password</li>
            <li>encryption of PERSO master password backups</li>
          </ul>
        </li>
        <li>
          <strong>Asymmetric encryption:</strong>{" "}
          <a target="_blank" href="https://libsodium.gitbook.io/doc/public-key_cryptography/sealed_boxes">
            libsodium sealed box
          </a>{" "}
          (<mark>X25519 + XSalsa20-Poly1305</mark>)
          <ul>
            <li>encryption of PRO shared vault secret keys</li>
            <li>PRO master password backup</li>
          </ul>
        </li>
        <li>
          <strong>Signature:</strong>{" "}
          <mark>
            <a
              target="_blank"
              href="https://libsodium.gitbook.io/doc/public-key_cryptography/public-key_signatures#algorithm-details"
            >
              Ed25519
            </a>
          </mark>
          <ul>
            <li>strong PRO device authentication</li>
          </ul>
        </li>
        <li>
          <strong>Challenge authentication:</strong>{" "}
          <mark>
            <a target="_blank" href="https://libsodium.gitbook.io/doc/advanced/hmac-sha2#hmac-sha-512-256">
              HMAC-SHA-256
            </a>
          </mark>
          <ul>
            <li>
              PRO master password authentication by challenge-response (so that the master password is verified without
              ever being sent to the server)
            </li>
          </ul>
        </li>
      </ul>
    </article>
  );
}

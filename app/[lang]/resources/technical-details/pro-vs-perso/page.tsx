export default function ProVsPerso() {
  return (
    <article className="page sans">
      <header>
        <h1 className="page-title">Principes de fonctionnement des coffres-forts PERSO et PRO</h1>
        <p className="page-description"></p>
      </header>
      <div className="page-body">
        <h1 id="056a171c-ed71-4fdc-9dbd-dce10489b130" className="">
          Principe de fonctionnement des coffres-forts PERSO
        </h1>
        <p id="b99bb2c9-e9d2-428c-b437-3d1c419629e6" className="">
          <strong>Stockage local</strong>
        </p>
        <p id="ceb3b8d5-8451-413d-b74a-c685f9b89a92" className="">
          Les coffres-forts PERSO sont conçus comme un fichier stocké localement et de façon chiffrée sur votre
          appareil.
        </p>
        <blockquote id="f19283b2-8554-4488-a5af-58e92319ef01" className="">
          Pour les détails encore plus techniques sur le chiffrement utilisé, consultez{" "}
          <span style={{ borderBottom: "0.05em solid" }}>cette page</span>.
        </blockquote>
        <p id="6d3e6312-cc8e-4c0b-b1f0-f4c07f8f6020" className="">
          <strong>Appairage de nouveaux appareils</strong>
        </p>
        <p id="a0b3c4fc-3431-4b71-b3cc-8e6b374c45d8" className="">
          Afin d’obtenir une copie synchronisée de votre coffre-fort sur tous vos appareils, vous devez faire un
          appairage entre un appareil où vous avez déjà votre coffre-fort et le nouvel appareil. Cela ne fonctionne pas
          comme un compte web où il suffirait de saisir son adresse email et son mot de passe.
        </p>
        <p id="81f7f62d-0053-4029-af57-8a45fc9ca55d" className="">
          L’appareil à partir duquel vous avez créé votre coffre-fort demande un identifiant aléatoire auprès du serveur
          et génère une clé secrète également aléatoire. Ces deux informations sont enregistrées dans le coffre-fort et
          ne seront jamais manipulée par l’utilisateur directement.
        </p>
        <p id="e7209440-7de5-4f85-b4fa-b908cd84ef7b" className="">
          L’appairage d’un nouvel appareil consiste à transférer cet identifiant et cette clé de chiffrement de façon
          sécurisée au nouvel appareil. Pour que ce transfert soit sécurisé, une information est transférée{" "}
          <em>physiquement</em> d’un appareil à un autre (soit par scan d’un QR code, soit par recopie manuelle). Il est
          donc <em>physiquement</em> impossible que cette information soit interceptée (sauf à se trouver derrière vous
          ou à avoir installé un virus sur votre ordinateur mais dans ce cas vous avez déjà perdu). Par ailleurs,
          l’information n’est utilisable qu’une seule fois. Le nouvel appareil obtient ainsi un identifiant et une clé
          secrète en commun avec l’appareil source.
        </p>
        <blockquote id="17dd150e-3785-4b76-92ce-a8ff78a6e8fb" className="">
          Pour comprendre le détail du protocole technique, consultez{" "}
          <span style={{ borderBottom: "0.05em solid" }}>cette page</span>.
        </blockquote>
        <p id="3c97cbcc-1fe1-4540-b887-f537ee59b163" className="">
          <strong>Synchronisation entre appareils</strong>
        </p>
        <p id="e8003bd2-240d-41ae-b1a4-1945625cc335" className="">
          Une fois que l’identifiant et la clé sont partagés entre les deux appareils, ils peuvent échanger des
          informations de façon totalement sécurisée via n’importe quel canal de communication (même non sécurisé) en
          chiffrant les messages avec leur clé secrète. Chacun envoie alors aux autres appareils les modifications qu’il
          effectue dans le coffre-fort pour que les autres appareils puissent également les appliquer sur leur
          coffre-fort local.
        </p>
        <p id="d68c5b2f-8bf9-4d68-aa32-879ba3a6d2b3" className="">
          L’avantage de ce système est que le serveur ne connaît aucune information sur vous (il ne connaît pas votre
          adresse email par exemple) et n’a aucun moyen de déchiffrer vos données. Si le serveur est compromis, le
          pirate ne récupère aucune information utilisable. S’il efface des données, l’application les recréra
          automatiquement lors de la prochaine synchronisation à partir du coffre-fort local.
        </p>
        <p id="840f08b3-e864-4e8e-8297-0c6b944a7565" className="">
          <strong>Sauvegarde de données chez un contact de confiance</strong>
        </p>
        <p id="c0875281-30d7-484c-bb88-dd1ec5a1109e" className="">
          L’inconvénient (ou la force) de ce système est que si vous perdez tous vos appareils, alors vous perdez votre
          coffre-fort. Pour résoudre ce problème, UpSignOn vous propose de confier une sauvegarde de vos données à un ou
          plusieurs contacts de confiance (voir ci-dessous).
        </p>
        <blockquote id="3a13ebbd-43a6-4e1c-b982-e2ae6f2a231d" className="">
          Techniquement, votre contact de confiance conservera dans son coffre-fort un petit fichier chiffré par votre
          mot de passe maître contenant votre identifiant et votre clé secrète de coffre-fort. Il ne peut donc pas
          récupérer lui-même vos données même s’il essayait, car il ne connaît pas votre mot de passe maître.
        </blockquote>
        <p id="33418e34-8840-4ea3-9dc4-902f7c84cbd0" className="">
          <strong>Contacts de confiance</strong>
        </p>
        <p id="05cae7c6-e507-4ca5-910c-fd251894930a" className="">
          Un contact de confiance est une personne que vous connaissez et avec laquelle vous partagez une clé secrète
          (différente évidemment de la clé secrète de votre coffre-fort). Cette clé secrète est stockée dans chacun de
          vos coffres-forts respectifs et s’échange initialement selon le même principe sécurisé que pour l’appairage
          d’appareils.
        </p>
        <p id="36fe1c5f-f449-4097-a869-f59d4948a7df" className="">
          Grâce à cette clé secrète commune, vous disposez d’un canal d’échange sécurisé (chiffré de bout en bout) avec
          vos contacts de confiance. Ce canal d’échange vous permet d’envoyer des sauvegardes ou des coffres-forts
          partagés.
        </p>
        <p id="3f5f4c15-781e-4d75-b950-e2b0978e33d4" className="">
          <strong>Sauvegarde de mot de passe maître chez un contact de confiance</strong>
        </p>
        <p id="64ba85aa-ba19-42bc-a88d-2e9c419392b7" className="">
          L’autre force du système de synchronisation des coffres-forts PERSO et que le serveur ne reçoit jamais votre
          mot de passe maître ni un dérivé de celui-ci. Ce mot de passe maître ne sert qu’au déchiffrement de votre
          coffre-fort local.
        </p>
        <p id="ab3fff8f-3b03-4b48-b7f9-f3a0f73f7fca" className="">
          Si vous oubliez votre mot de passe maître, nous n’avons aucun moyen de vous aider à le réinitialiser. Si
          c’était le cas, cela voudrait dire que nous serions en mesure de déchiffrer votre coffre-fort PERSO pour le
          re-chiffrer avec un nouveau mot de passe. Or par principe, la seule et unique façon de déchiffrer votre
          coffre-fort, c’est de connaître le mot de passe maître que vous avez utilisé.
        </p>
        <p id="e8c7f2c7-8f4c-4ff2-8952-3221c149257c" className="">
          Pour résoudre ce problème, nous avons donc conçu un système de sauvegarde de votre mot de passe maître auprès
          d’un ou plusieurs contacts de confiance. Concrètement, une clé secrète de sauvegarde (encore une différente
          bien sûr) est confiée à vos contacts de confiance désignés. Cette clé est utilisée sur chacun de vos appareils
          pour chiffrer votre mot de passe maitre et stocker le résultat chiffré dans un fichier local.
        </p>
        <p id="7f1049ee-0831-42f2-bef1-a6731bd8eb10" className="">
          Si vous oubliez votre mot de passe maître, l’un de vos contacts de confiance peut vous renvoyer votre clé pour
          que vous puissiez déchiffrer votre mot de passe maître puis votre coffre-fort. La sécurité repose sur le fait
          que votre contact, parce qu’il vous connaît, est capable de vous identifier et que le fichier chiffré de votre
          mot de passe n’est disponible que sur les appareils qui vous appartiennent.
        </p>
        <p id="76a39ce7-a7bf-4b7a-af2a-f7c194a52329" className=""></p>
        <blockquote id="4e1f0489-8a5e-473a-819b-970c7ff65312" className="">
          Remarquez que
          <ul id="a9fd4714-b4a4-4b07-9503-a8b0c89e3c0c" className="bulleted-list">
            <li style={{ listStyleType: "disc" }}>
              le système de sauvegarde de vos données repose sur le fait que vous seul connaissez votre mot de passe
              maître
            </li>
          </ul>
          <ul id="f3338eb4-2827-4a45-b047-c8b6bfbb2281" className="bulleted-list">
            <li style={{ listStyleType: "disc" }}>
              le système de sauvegarde de votre mot de passe maître repose sur le fait que vous ayez accès à l’un de vos
              appareils
            </li>
          </ul>
          <p id="90c6f2eb-5d69-48f5-b193-5365e0dc18f9" className="">
            Par conséquent, si vous oubliez votre mot de passe maître et que vous avez en plus perdu tous vos appareils,
            vos données seront définitivement perdues.
          </p>
        </blockquote>
        <p id="f99509fe-dbdf-4262-8a98-3d216b01387a" className=""></p>
        <p id="61914c9c-eb00-4e18-bee7-3c9f6a6f54a0" className="">
          <strong>Partage de mots de passe</strong>
        </p>
        <p id="cbd0fec4-f975-4f52-91b6-8147a036cf7f" className="">
          Le partage de mots de passe dans les coffres-forts PERSO n’est possible qu’avec des contacts de confiance.
          Techniquement, un mini coffre-fort est créé avec son propre identifiant et sa clé secrète. Ces informations
          sont stockées dans votre coffre-fort et également envoyées à vos contacts de confiance destinataires du
          partage via le canal de communication sécurisé que vous avez avec chacun de vos contacts (cf ci-dessus).
        </p>
        <blockquote id="8f0ae337-31f4-4d73-aa06-09fc45be8792" className="">
          Attention, une fois le partage effectué, la suppression d’un contact de confiance ne le supprime pas en tant
          que destinataire du partage. Cette opération doit être réalisée à part.
        </blockquote>
        <p id="9b565301-948d-40ca-b182-53909e463c5b" className=""></p>
        <h1 id="d3ee8778-ccd4-4ae5-8c1e-105394bed19c" className="">
          Principe de fonctionnement des coffres-forts PRO
        </h1>
        <p id="703feb3b-0349-4dc1-ad52-2307251f9015" className="">
          <strong>Stockage cloud</strong>
        </p>
        <p id="80b90049-50bd-497a-8d0b-441f4a795663" className="">
          Les coffres-forts PRO sont conçus dans la logique inverse des coffres-forts PERSO. Le serveur joue le rôle de
          source de vérité unique et stocke le coffres-fort chiffré de l’utilisateur. Bien que certaines informations
          soient transmises au serveur pour les besoins de la supervision, les mots de passe et autres secrets stockés
          dans le coffre-fort restent inaccessibles sans le mot de passe maître de l’utilisateur.
        </p>
        <p id="de529f90-c276-4d87-8d0c-607e0e43ae92" className="">
          Chaque coffre-fort est par ailleurs associé à une adresse email pour que son propriétaire puisse être
          identifié par les administrateurs.
        </p>
        <p id="6897baac-d4b5-4ed8-a33d-57308b7d81f8" className="">
          <strong>Une banque par client</strong>
        </p>
        <p id="ceabcc89-5cbc-4910-9024-3a57d1fb1f6d" className="">
          Chaque organisation cliente dispose de sa propre banque (zone de stockage des coffres-forts PRO) indépendante
          des autres banques. Ces banques peuvent même être hébergées sur des serveurs différents (cas de
          l’auto-hébergement par exemple). À chaque banque est donc associé une url différente.
        </p>
        <p id="9a44a870-0aff-4ba5-a01b-379499afe716" className="">
          <strong>Autorisation de nouveaux appareils</strong>
        </p>
        <p id="4666035e-d5b5-47f9-8d62-b7a4d3e09fd1" className="">
          Pour ajouter un nouvel appareil, l’utilisateur commencera par y saisir l’url de la banque correspondant à son
          entreprise. Puis il saisira son adresse email sur laquelle il recevra un code d’autorisation à usage unique.
          En saisissant ce code dans l’application, l’utilisateur confirme sa propriété sur l’adresse email en question,
          ce qui permet au serveur de reconnaître la légitimité de l’appareil.
        </p>
        <blockquote id="f917d692-cf0d-4425-a592-cf2967bc701a" className="">
          Techniquement, une paire de clé asymétrique est générée et stockée sur l’appareil. La partie publique de cette
          clé est envoyée au serveur. Cette clé sert ensuite à chaque connexion à prouver l’identité de l’appareil via
          un protocole de défi-réponse.
        </blockquote>
        <p id="98422087-0e07-489f-a09d-c1c148e025bc" className="">
          <strong>Déverrouillage du coffre-fort</strong>
        </p>
        <p id="3f839e5d-2724-4d94-b00e-ee30717b928c" className="">
          Pour déverrouiller son coffre-fort, l’utilisateur devra ensuite saisir son mot de passe maître.
        </p>
        <p id="450dd365-30b1-4aa0-8449-b798e75ccca3" className="">
          Ce mot de passe maître sert ici non seulement pour le déchiffrement des données, mais également comme deuxième
          facteur d’authentification auprès du serveur.
        </p>
        <blockquote id="15a8980b-3f25-4c97-a12c-0571c0e84ce9" className="">
          Le mot de passe maître n’est pas pour autant simplement envoyé au serveur comme pour une authentification par
          mot de passe classique. Il est utilisé dans le cadre d’un protocole de défi-réponse afin de ne jamais être
          envoyé au serveur. <span style={{ borderBottom: "0.05em solid" }}>Voir les détails de ce système</span>.
        </blockquote>
        <p id="fda9bf11-7a19-435d-9f88-992f85665623" className="">
          <strong>Synchronisation des appareils</strong>
        </p>
        <p id="82196984-bd66-4643-8f85-d23ea5ce7697" className="">
          Dans ce système, il n’y a pas vraiment de sens à parler de synchronisation entre appareils comme pour les
          coffres-forts PERSO. En effet, à chaque ouverture du coffre-fort, après authentification de l’appareil et de
          l’utilisateur, l’intégralité du coffre-fort chiffré est récupérée auprès du serveur.
        </p>
        <p id="1866d5a5-3c32-4178-b2a7-b96f13d8b0cb" className="">
          Lorsque l’utilisateur effectue des modifications dans son coffre-fort, le coffre-fort entier est chiffré à
          nouveau puis envoyé au serveur pour stockage. (NB, la modification simultanée du coffre-fort sur deux
          appareils ne pose aucun problème, c’est parfaitement bien géré par l’application).
        </p>
        <p id="480aa63f-5ae6-40cc-b948-48c62a77e9ca" className="">
          <strong>Mode hors-connexion</strong>
        </p>
        <p id="15f160c7-baf5-4d15-9d34-d533e09666fe" className="">
          Lorsque l’utilisateur n’a pas accès à internet, il peut consulter le contenu de son coffre-fort via une copie
          locale de ses données (qu’il faudra tout de même déchiffrer avec le mot de passe maître) mais ne peut pas
          apporter de modifications à son coffre-fort.
        </p>
        <p id="12e13612-2a80-45f6-850c-b048e1569b2a" className="">
          Cette fonctionnalité peut-être désactivée dans les paramétrages de la console de supervision par
          l’administrateur.
        </p>
        <p id="0fef20af-5894-46d2-9a15-61904a5be698" className="">
          <strong>Sauvegarde de données transparente pour l’utilisateur</strong>
        </p>
        <p id="9912affb-85f8-4970-9046-83178cbf306f" className="">
          Cette conception fait que même en cas de perte de tous ses appareils, un utilisateur peut récupérer son
          coffre-fort simplement en autorisant un nouvel appareil et en récupérant son coffre-fort depuis le serveur.
          Comme pour les coffres-forts PERSO, cela suppose néanmoins que l’utilisateur n’ait pas oublié son mot de passe
          maître.
        </p>
        <p id="9ec81d3e-2c9b-495d-941c-1fe07a724641" className="">
          <strong>Pas de notion de contact de confiance</strong>
        </p>
        <p id="41eb5e54-5713-4595-aae8-178d42844cd9" className="">
          Les coffres-forts PRO ne proposent pas la notion de contact de confiance car elle n’est pas utile. Les
          fonctionnalités de sauvegardes et de partage sont gérées différemment, ce qui les rend plus simples.
        </p>
        <p id="4a5bbd35-23a1-427f-b761-0f9f19efff1b" className="">
          <strong>Sauvegarde de mot de passe maître automatique auprès du serveur</strong>
        </p>
        <p id="2954ac2d-1624-42a5-887c-7bc483aa1072" className="">
          La fonction de réinitialisation du mot de passe maître fonctionne de façon assez classique via l’envoi d’un
          email.
        </p>
        <p id="3a122ae0-152c-4ebb-a244-9e1473045125" className="">
          Chaque appareil génère et stocke localement une paire de clé asymétrique dédiée à la fonctionnalité de mot de
          passe oublié. La clé privée est stockée sur l’appareil uniquement, tandis que la clé publique est enregistrée
          dans le coffre-fort.
        </p>
        <p id="0ca27dd1-4bd5-4f0e-ba3b-83555408745d" className="">
          Lorsque l’utilisateur modifie son mot de passe maître, celui-ci est chiffré par les clés publiques de tous les
          appareils autorisés et les résultats sont envoyés au serveur pour stockage.
        </p>
        <p id="22d2a09a-d377-4c2d-a2cd-984c2fa757ff" className="">
          En cas d’oubli du mot de passe maître, l’utilisateur sollicite l’envoi d’un code à usage unique par email. Ce
          code permet au serveur de l’authentifier temporairement et d’autoriser l’envoi de la sauvegarde chiffrée du
          mot de passe maître à l’application. L’application peut ensuite déchiffrer cette sauvegarde avec sa clé privée
          stockée localement pour récupérer le mot de passe maître de l’utilisateur et lui proposer d’en choisir un
          nouveau.
        </p>
        <p id="160e2049-3c28-4d87-8721-66200a39531c" className="">
          En cas de raquet de votre téléphone, le voleur pourrait tenter d’utiliser la fonction de mot de passe oublié
          et d’aller consulter vos emails qui sont souvent synchronisés sur votre téléphone. Pour contrer cette attaque,
          l’envoi du mail de réinitialisation est par défaut soumis à validation manuelle d’un administrateur.
        </p>
        <p id="b98966e3-fa7e-44e0-aa83-0b0e590d70e4" className=""></p>
        <blockquote id="15137447-23d3-4a30-86dc-f676a150eeaa" className="">
          Remarquez que, comme pour les coffres-fort PERSO, puisque le système de sauvegarde de votre mot de passe
          maître repose sur le fait que vous ayez accès à l’un de vos appareils autorisé, la même contrainte s’applique:
          si vous oubliez votre mot de passe maître et que vous avez en plus perdu tous vos appareils, vos données
          seront définitivement perdues.
        </blockquote>
        <p id="ff985571-46cb-4cef-a727-6888265b6521" className=""></p>
        <p id="8f2e3651-24f5-484c-9f61-7d3f12a5d439" className="">
          <strong>Partage de mots de passe</strong>
        </p>
        <p id="ff4ea4f0-0ea2-448a-bf9a-ae8fc3f8584b" className="">
          Dans le cas des coffres-forts PRO, pour que le partage de mots de passe soit plus fluide et plus adapté à de
          grandes équipes, nous n’utilisons pas le concept de contacts de confiance (cf coffres-forts PERSO). Dans
          l’application, il vous suffit de saisir les adresses emails des collègues à qui vous souhaitez partager des
          secrets.
        </p>
        <p id="341d78b4-5832-4374-aaca-a2ad2a22309c" className="">
          Techniquement, chaque coffre-fort PRO est associé à une paire de clé asymétrique dédiée au partage : la clé
          secrète est conservée en sécurité dans le coffre-fort, tandis que la clé publique est stockée par le serveur.
        </p>
        <p id="57d5b9dc-a480-4b28-9ca7-427e9a6916a3" className="">
          Lors d’un partage, un mini coffre-fort est créé avec son propre identifiant et sa clé secrète. Cette clé
          secrète est chiffrée par la clé publique de chaque destinataire du partage puis les résultats sont envoyés au
          serveur pour stockage.
        </p>
        <p id="73f98f04-3631-4224-9fc2-b9c549ffea20" className="">
          Pour afficher le contenu d’un coffre-fort partagé, l’application en récupère la clé secrète chiffrée auprès du
          serveur, la déchiffre avec la clé privée de partage de l’utilisateur (récupérée dans le coffre-fort principal
          de l’utilisateur), et l’utilise enfin pour déchiffrer le contenu du coffre-fort partagé.
        </p>
        <p id="271ef171-4acb-4e53-b4e3-495952ee2554" className=""></p>
        <p id="cc4b01a2-5a5e-409d-847d-31491895dc68" className=""></p>
        <h1 id="99a160cd-5360-439a-a24a-68d4b18dade4" className="">
          Détails des algorithmes cryptographiques utilisés
        </h1>
        <p id="f417df99-f558-428e-b130-8647e35bddf6" className="">
          Librairie utilisée : <a href="https://doc.libsodium.org/">libsodium</a>
          <div className="indented">
            <ul id="ffafaf55-3220-46c2-9dfc-49e63adbe891" className="bulleted-list">
              <li style={{ listStyleType: "disc" }}>
                Dérivation de mot de passe :{" "}
                <mark className="highlight-teal_background">
                  <a href="https://libsodium.gitbook.io/doc/password_hashing/default_phf#key-derivation">Argon2ID</a>
                </mark>
                <ul id="d9c833bd-cb19-49c2-b7f7-d923518d222e" className="bulleted-list">
                  <li style={{ listStyleType: "circle" }}>dérivation des mot de passe maître PRO et PERSO</li>
                </ul>
              </li>
            </ul>
            <ul id="bca59a0a-34b8-49db-9437-4fc5f6b98193" className="bulleted-list">
              <li style={{ listStyleType: "disc" }}>
                Chiffrement symétrique authentifié :{" "}
                <a href="https://libsodium.gitbook.io/doc/secret-key_cryptography/secretbox">secret box de libsodium</a>{" "}
                (<mark className="highlight-teal_background">XSalsa20 + Poly1305 MAC</mark>)
                <ul id="b679369e-7d37-48f7-bbc0-87edee435ee5" className="bulleted-list">
                  <li style={{ listStyleType: "circle" }}>
                    chiffrement des coffres-forts PRO et PERSO après dérivation du mot de passe maître
                  </li>
                </ul>
                <ul id="82a5a873-dec9-40ff-9c9e-31e8ec27d1c4" className="bulleted-list">
                  <li style={{ listStyleType: "circle" }}>chiffrement des coffres-forts partagés PRO et PERSO</li>
                </ul>
                <ul id="09a81bf5-b158-4a65-ba0e-c882360021f3" className="bulleted-list">
                  <li style={{ listStyleType: "circle" }}>synchronisation zero-trust PERSO</li>
                </ul>
                <ul id="a10c671d-b612-415e-bf61-c239f4b9a314" className="bulleted-list">
                  <li style={{ listStyleType: "circle" }}>
                    échanges de données zero-trust (chiffrée de bout en bout) entre contacts de confiance PERSO
                  </li>
                </ul>
                <ul id="5a1575b9-9b8f-4f48-9517-a24d36532bcb" className="bulleted-list">
                  <li style={{ listStyleType: "circle" }}>
                    chiffrement des sauvegardes de données PERSO après dérivation du mot de passe maître
                  </li>
                </ul>
                <ul id="faf1a317-da67-4c0c-95eb-f0e80cea5c16" className="bulleted-list">
                  <li style={{ listStyleType: "circle" }}>chiffrement des sauvegardes de mot de passe maître PERSO</li>
                </ul>
              </li>
            </ul>
            <ul id="e47f0fb1-24d0-4be1-9e76-c0520000a723" className="bulleted-list">
              <li style={{ listStyleType: "disc" }}>
                Chiffrement asymétrique :{" "}
                <a href="https://libsodium.gitbook.io/doc/public-key_cryptography/sealed_boxes">
                  sealed box de libsodium
                </a>{" "}
                (<mark className="highlight-teal_background">X25519 + XSalsa20-Poly1305</mark>)
                <ul id="2e644cfa-92fe-4cf0-8bf2-decc1a1b74d0" className="bulleted-list">
                  <li style={{ listStyleType: "circle" }}>
                    chiffrement des clés secrètes de coffres-forts partagés PRO
                  </li>
                </ul>
                <ul id="a0636e2f-3ca6-408e-8f1f-aa845a4ebe80" className="bulleted-list">
                  <li style={{ listStyleType: "circle" }}>sauvegarde de mots de passe maître PRO</li>
                </ul>
              </li>
            </ul>
            <ul id="0a0c2f3a-ceb1-4dfe-90ea-458071ea703e" className="bulleted-list">
              <li style={{ listStyleType: "disc" }}>
                Signature :{" "}
                <mark className="highlight-teal_background">
                  <a href="https://libsodium.gitbook.io/doc/public-key_cryptography/public-key_signatures#algorithm-details">
                    Ed25519
                  </a>
                </mark>
                <ul id="44d736bc-4d27-4baf-b924-6cb514e41e30" className="bulleted-list">
                  <li style={{ listStyleType: "circle" }}>authentification forte d’appareil PRO</li>
                </ul>
              </li>
            </ul>
            <ul id="ed6cf952-e701-4708-a2d9-b1e440636818" className="bulleted-list">
              <li style={{ listStyleType: "disc" }}>
                Authentification de challenges :{" "}
                <mark className="highlight-teal_background">
                  <a href="https://libsodium.gitbook.io/doc/advanced/hmac-sha2#hmac-sha-512-256">HMAC-SHA-256</a>
                </mark>
                <ul id="f1f23ae3-a575-4736-a790-a9db5eca7835" className="bulleted-list">
                  <li style={{ listStyleType: "circle" }}>
                    authentification du mot de passe maître PRO par défi-réponse (pour que le mot de passe maître soit
                    vérifié sans être jamais envoyé au serveur)
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </p>
        <p id="77a8ba41-e972-46f7-8508-555c6edafbaa" className=""></p>
      </div>
    </article>
  );
}

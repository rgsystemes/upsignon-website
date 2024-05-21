const translations = {
  menu: {
    features: "Fonctionnalités",
  },
  features: {
    pageTitle: "Fonctionnalités",
    tags: {
      pro: "PRO",
      perso: "PERSO",
      availableFor: (pro: boolean) => `Disponible pour les coffres-forts ${pro ? "pro" : "perso"}`,
      unavailableFor: (pro: boolean) => `Non disponible pour les coffres-forts ${pro ? "pro" : "perso"}`,
      availableWithWarningFor: (pro: boolean) =>
        `Support partiel ou optionnel pour les coffres-forts ${pro ? "pro" : "perso"}`,
    },
    compatibilityTable: {
      summary: "Table de compatibilité",
      header: {
        os: "OS",
        minTheoreticalVersion: "Version minimum théorique",
        testedVersion: "Version testée",
        arch: "Architectures",
      },
      untested: "Non testé",
    },
    featurePlatforms: {
      availableOn: (p: string): string => `Disponible sur ${p}`,
      unavailableOn: (p: string): string => `Non disponible sur ${p}`,
      availableWithWarningFor: (p: string): string => `Disponible sous conditions sur ${p}`,
    },
    techFocus: "Focus technique :",
    generalSubtitle: "Généralités",
    proPerso: {
      title: "Coffres-forts PRO & PERSO",
      details: [
        "UpSignOn vous propose deux types de coffres-forts, tous les deux semblables dans leur interface utilisateur, mais différents techniquement.",
        "Le coffre-fort PERSO est conçu pour votre usage privé, non professionnel. Il est totalement sécurisé et privé par conception. En revanche, son système de partage de secrets n’est pas adapté aux équipes de plus de quelques personnes.",
        "Les coffres-forts PRO sont proposés par votre employeur ou responsable de la sécurité informatique pour vous donner les moyens d’atteindre 100% de mots de passe forts et uniques. Votre DSI ou RSSI peut suivre l’avancement de cet objectif depuis la console de supervision qui lui donne accès à la force des mots de passe enregistrés dans les coffres-forts PRO. Cette console ne donne bien sûr pas accès à vos mots de passe et autres secrets directement. Par ailleurs, avec les coffres-forts PRO, il vous sera beaucoup plus facile de partager des secrets avec vos collègues en saisissant simplement leur adresse email.",
      ],
      imageAlt: "Capture d'écran montrant les coffres-forts PRO et PERSO dans l'application.",
      techFocusTitle: "Coffres-forts PRO vs coffres-forts PERSO",
    },
    crossPlatform: {
      title: "Disponible sur smartphones, tablettes et ordinateurs",
      details: [
        "Accédez à vos mots de passe en toute sécurité sur tous vos appareils. L'interface reste exactement la même sur toutes les tailles d'écran.",
      ],
      imageAlt: "Captures d'écran de l'application sur un smartphone, une tablette et un ordinateur.",
    },
    syncing: {
      title: "Synchronisation automatique entre vos appareils",
      details: [
        "Les modifications que vous faites sur un appareil sont automatiquement synchronisées avec vos autres appareils autorisés. Il n’y a pas de limite au nombre d’appareils autorisés.",
      ],
      imageAlt: "",
    },
    dataSubtitle: "Gérez vos mots de passe, TOTP et données bancaires",
    unlimitedAccounts: {
      title: "Ajout de comptes internet illimité",
      details: [
        "Dans UpSignOn, vous pouvez ajouter autant de comptes internet que vous le souhaitez, y compris dans les coffres-forts PERSO qui sont gratuits. Typiquement, vous y enregistrerez le mot de passe et l’adresse de chacun de vos sites web.",
      ],
    },
    unlimitedCodes: {
      title: "Ajout de codes illimité",
      details: [
        "Vous pouvez également enregistrer des codes dans votre coffre-fort (code d’immeuble, de cadenas, d’alarme, etc.) Leur affichage est plus simple que celui des comptes internet.",
      ],
    },
    quickView: {
      title: "Vue rapide ergonomique, toutes les actions à portée de main",
      details: [
        "Votre coffre-fort affiche la liste de vos mots de passe et codes de façon assez condensée de façon à garder une interface simple et adaptée aux petits écrans.",
        "Vous pouvez consulter le contenu de vos informations de façon très intuitive et ergonomique sans changer de page. Toutes les actions que vous pourriez vouloir faire sont à portée de main. Copier un mot de passe, ouvrir un site dans votre navigateur, consulter vos notes.",
      ],
      imageAlt: "Capture d'écran de la vue rapide d'un compte",
    },
    passwordStrength: {
      title: "Évaluation de la force des mots de passe",
      details: [
        "Enregistrer vos mots de passe dans un coffre pour ne pas les oublier, c’est bien, mais utiliser des mots de passe forts et uniques, c’est mieux ! Lisez notre article sur le sujet.",
        "UpSignOn calcul un score de sécurité sur chacun de vos mots de passe (rouge, orange ou vert). Ce score tient compte d’une part de la résistance intrinsèque du mot de passe à une tentative d’extraction, et d’autre part du nombre d’occurrences du même mot de passe dans vos autres comptes. (Plus de détails techniques ici).",
        "Les mots de passe qui méritent d’être changés vont apparaître en rouge ou en orange dans votre coffre-fort. Passez tous vos mots de passe en vert. Ce n’est pas un gros effort mais cela aura un énorme impact positif sur votre cyber-sécurité !",
      ],
      imageAlt: "Capture d'écran des scores de différents mots de passe évalués par l'application.",
    },
    passwordGenerator: {
      title: "Générateur de mots de passe et de phrases de passe",
      details: [
        "Pour vraiment renforcer vos mots de passe, l’idéal est d’utiliser des mots de passe aléatoires, générés par UpSignOn.",
        "UpSignOn vous permet donc de générer plusieurs types de mots de passe aléatoires en vous laissant choisir leur longueur. L’ANSSI recommande désormais au moins 12 caractères. UpSignOn est paramétré par défaut sur 16 caractères mais surtout n’hésitez pas à augmenter cette longueur, votre mot de passe n’en sera que plus robuste.",
        "UpSignOn vous propose également un générateur de phrases de passe, c’est-à-dire une suite de mots choisis au hasard dans le dictionnaire. L’intérêt d’une phrase de passe est qu’il y a beaucoup de caractères (donc c’est très résistant), tout en étant relativement facile à mémoriser. Nous vous conseillons d’utiliser une phrase de passe notamment pour votre session Windows / Apple et pour votre mot de passe maître de coffre-fort.",
      ],
      imageAlt: "Capture d'écran du générateur de mots de passe.",
    },
    passwordHistory: {
      title: "Historique des mots de passe",
      details: [
        "N’ayez plus peur des mauvaises manipulations ! UpSignOn conserve l’historique de vos mots de passe. Donc si quelque chose s’est mal passé, vous pouvez facilement revenir sur une version précédente de votre mot de passe.",
      ],
      imageAlt: "Capture d'écran de l'historique des mots de passe",
    },
    multiUrls: {
      title: "Gestion de plusieurs URLs (adresses internet)",
      details: [
        "UpSignOn vous permet d’associer plusieurs urls à un même compte. C’est pratique dans beaucoup de cas, par exemple pour que votre compte Google soit associé à l’url de Gmail, mais aussi à l’url de Google Drive, etc.",
        "Votre coffre-fort UpSignOn vous sert donc aussi de liste de favoris et de raccourcis !",
      ],
      imageAlt: "Capture d'écran d'un compte ayant enregistré plusieurs URLs.",
    },
    notes: {
      title: "Champ notes (texte libre) pour chaque compte ou code",
      details: [
        "Pour chaque compte et code de votre coffre-fort, vous pouvez ajouter des notes libres. Ces notes sont donc sécurisées et vous pouvez y stocker des informations secrètes, comme par exemple des codes de récupération, ou tout autre information utile.",
      ],
      imageAlt: "Capture d'écran d'une note.",
    },
    totp: {
      title: "Gestion des TOTP",
      details: [
        "Les TOTP (Timed-One-Time-Passwords) sont un système de génération de codes à usage unique souvent utilisé comme deuxième facteur d’authentification. Le protocole TOTP est très sécurisé car il repose sur une preuve de possession (vous possédez votre smartphone).",
        "En vous permettant d’enregistrer des TOTP dans votre coffre-fort, UpSignOn vous permet non seulement d’avoir un seul outil pour gérer vos mots de passe et vos TOTP, mais également de ne plus être dépendant de votre smartphone lorsqu’on vous demande une validation sur votre ordinateur.",
      ],
      imageAlt: "Capture d'écran d'un TOTP.",
    },
    paymentData: {
      title: "Gestion de vos informations bancaires",
      details: [
        "Facilitez le remplissage des formulaires de paiement sur le web en enregistrant vos RIB et les détails de vos cartes bancaires dans votre coffre-fort UpSignOn.",
      ],
      imageAlt: "Capture d'écran de la page données bancaires.",
    },
    sharingSubtitle: "Partagez vos identifiants",
    trustedContacts: {
      title: "(PERSO) Gestion de contacts de confiance",
      details: [
        "Les coffres-forts PERSO vous permettent d'enregistrer des contacts de confiance.",
        "Ce sont d'autres utilisateurs d'UpSignOn avec lesquels vous pouvez partager des comptes et des codes et auxquels vous pouvez confier des sauvegardes de vos données et de votre mot de passe maître.",
        "NB : Cette fonctionnalité n'est pas nécessaire pour les coffres-forts PRO car le partage et les sauvegardes fonctionnent différemment.",
      ],
      imageAlt: 'Capture d\'écran de la page "Contacts de confiance".',
    },
    sharing: {
      title: "Partage sécurisé en famille ou entre collègues",
      details: [
        "Le partage d'identifiants entre membres d'une même famille ou entre collègues est une pratique courante qui conduit malheureusement souvent à utiliser des mots de passe faibles (que tout le monde connaît) et à réutiliser le même mot de passe sur tous les comptes partagés.",
        "UpSignOn vous permet de partager des identifiants uniques ou des dossiers entiers avec vos contacts de confiance (coffres-forts PERSO) ou avec les autres utilisateurs de votre banque (coffres-forts PRO) de façon simple et sécurisée.",
        "Les éléments partagés se synchronisent automatiquement entre les différents utilisateurs. Il n'y a pas de limite au nombre d'éléments partagés ou au nombre de destinataires.",
      ],
      imageAlt: "Capture d'écran d'un coffre-fort contenant des éléments et des dossiers partagés",
    },
    rightsManagement: {
      title: "Gestion de niveau d'accès sur les éléments partagés",
      details: [
        "Dans la page de gestion des destinataires d'un coffre-fort partagé, vous pouvez attribuer plusieurs niveaux de droits aux destinataires de votre partage :",
      ],
      rightLevels: {
        readOnly: {
          title: "Lecture seule :",
          def: "le destinataire ne peut rien modifier dans l'élément partagé.",
        },
        editor: {
          title: "Éditeur :",
          def: "le destinataire peut modifier le contenu de l'élément partagé.",
        },
        owner: {
          title: "Propriétaire :",
          def: "le destinataire a les mêmes droits que vous sur l'élément partagé et peut en administrer les destinataires.",
        },
      },
      imageAlt: "Capture d'écran de la page de gestion des destinataires d'un dossier partagé.",
    },
    autofillAutosaveSubtitle: "Remplissage et enregistrement automatique",
    autofill: {
      title: "Remplissage automatique des formulaires",
      desktopTitle: "Remplissage automatique sur Windows/MacOS avec l'extension de navigateur",
      desktopDetails: [
        "Installez notre extension de navigateur pour qu'UpSignOn remplisse automatiquement la plupart des formulaires de connexion lors de votre navigation sur Internet.",
        "Cette extension est disponible pour tous les navigateurs Chromium (Google Chrome, Microsoft Edge, Brave), pour Firefox et pour Safari sur MacOS.",
        "NB : l'extension pour Safari est livrée directement avec l'application, mais vous devez l'activer manuellement via le menu Réglages de Safari.",
      ],
      desktopImageAlt: "Capture d'écran de l'extension UpSignOn",
      iosTitle: "Remplissage semi-automatique des identifiants sur iOS",
      iosDetails: [
        "UpSignOn s'intègre au clavier pour vous proposer le remplissage semi-automatique des identifiants enregistrés dans votre coffre-fort dans les formulaires de connexion que vous rencontrez, aussi bien en naviguant sur internet que dans vos applications.",
        'Cette fonctionnalité s\'active depuis l\'application Réglages, menu "Mots de passe", menu "Options de mots de passe".',
      ],
      iosImageAlt: "Capture d'écran d'un clavier sur iOS proposant le remplissage d'un formulaire via UpSignOn.",
      androidTitle: "Remplissage semi-automatique des identifiants sur Android",
      androidDetails: [
        "UpSignOn s'intègre à Android pour vous proposer le remplissage semi-automatique des identifiants enregistrés dans votre coffre-fort dans les formulaires de connexion que vous rencontrez, aussi bien en naviguant sur internet que dans vos applications.",
        "Cette fonctionnalité s'active directement depuis la page réglages d'UpSignOn.",
      ],
      androidImageAlt:
        "Capture d'écran d'un formulaire web sur Android affichant l'interface de remplissage automatique d'UpSignOn.",
    },
    autosaveDesktop: {
      title: "Enregistrement automatique des mots de passe via l'extension de navigateur",
      details: [
        "Notre extension de navigateur détecte également les mots de passe que vous saisissez manuellement et vous permet de les enregistrement directement dans votre coffre-fort sans effort.",
      ],
      imageAlt: "Capture d'écran de l'extension UpSignOn proposant l'enregistrement d'un nouveau mot de passe.",
    },
    searchFilterOrganizeSubtitle: "Cherchez, filtrez, organisez",
    search: {
      title: "Recherche par nom de compte, nom de domaine, email, nom de dossier",
      details: [
        "Le champ de recherche vous aide à retrouver un compte rapidement dans votre liste. Servez-vous-en sans modération !",
      ],
      imageAlt: "Capture d'écran d'un coffre-fort montrant une recherche en cours.",
    },
    filter: {
      title: "Filtres par type et force de mot de passe",
      details: [
        "En complément de la recherche, vous pouvez filtrer votre coffre-fort par type de secret (compte ou code), par force de mot de passe, ou n'afficher que les éléments partagés. Vous pouvez également choisir de cacher les éléments du dossier racine si vous en avez beaucoup.",
      ],
      imageAlt: "Capture d'écran de l'application montrant les différents filtres disponibles.",
    },
    organize: {
      title: "Organisation par dossiers et sous-dossiers",
      details: [
        "Nous aimons tous que les choses soient bien rangées. Organisez votre coffre-fort grâce aux dossiers. Vous pouvez inclure des dossiers dans des dossiers sans limite de profondeur.",
      ],
      imageAlt: "Capture d'écran d'un coffre-fort contenant une arborescence en dossiers et sous-dossiers.",
    },
    importExportSubtitle: "Import & Export de vos données",
    csvImport: {
      title: "Import CSV & XML",
      details: [
        "Vous avez des mots de passe enregistrés dans votre navigateur ou dans un autre outil ? Exportez-les au format .csv puis importez-les en quelques clics dans votre coffre-fort UpSignOn !",
        "NB : pour transférer vos données depuis KeePass utilisez plutôt le format XML pour conserver l'aborescence de vos dossiers.",
        "Attention, pensez à effacer complètement le fichier CSV (ou XML) après avoir terminé l’import pour que vos secrets ne restent pas accessibles dans un format non protégé !",
      ],
      imageAlt: "Capture d'écran de la page d'import CSV.",
    },
    csvExport: {
      title: "Export CSV",
      details: [
        "Si vous décidez de changer d’outil, vous pouvez à tout moment exporter vos mots de passe au format .csv pour les réimporter dans un autre outil.",
        "Attention, cette fonctionnalité n’est pas conçue pour faire une sauvegarde de vos données. Nous vous proposons des mécanismes dédiés et sécurisés pour cela.",
      ],
      warningPro:
        "NB coffres-forts PRO : cette fonctionnalité est désactivée par défaut et ne peut être activée que par un administrateur depuis la console de supervision (voir plus bas).",
      imageAlt: "Capture d'écran du bouton d'export CSV.",
    },
    securityFeaturesSubtitle: "Fonctionnalités de sécurité",
    endToEndEncryption: {
      title: "Chiffrement de bout en bout, confiance nulle, connaissance nulle",
      details: [
        "UpSignOn recherche la sécurité par conception. Nous appliquons les principes de confiance et de connaissance nulle dès qu'une fonctionnalité le permet (c'est-à-dire presque toutes).",
        "Les données ne peuvent être chiffrées et déchiffrées que sur vos appareils. Lorsque les données transitent par nos serveurs - comme par exemple dans les cas de la synchronisation, du partage, des sauvegardes - nous n'avons aucun moyen d'en lire le contenu par conception.",
        "Les coffres-forts PERSO respectent les principes de confiance et de connaissance nulle sans exception. Nous ne connaissons même pas votre adresse email ! Cela implique que nous n'avons absolument aucun moyen de vous aider à récupérer votre coffre-fort si vous avez oublié votre mot de passe maître et n'aviez pas configuré de sauvegarde de mot de passe maître ou si vous perdez tous vos appareils et n'aviez pas configuré de sauvegarde de vos données. C'est le prix de la sécurité.",
        "Les coffres-forts PRO sont conçus pour permettre le partage en équipe par adresse email et la supervision par votre DSI ou RSSI. Cela implique que certaines informations sont enregistrées sur le serveur et sont lisibles par les administrateurs (adresse email profesionnelle, statistiques sur vos mots de passe, données permettant d'identifier vos appareils autorisés). En revanche vos secrets (mots de passe, codes, TOTP, notes, coordonnées bancaires) restent illisibles.",
      ],
    },
    passwordLocking: {
      title: "Verrouillage par mot de passe maître",
      details: [
        "Votre mot de passe maître est le dernier mot de passe que vous devez retenir. C'est grâce à lui que sont chiffrées vos données.",
        "Concrètement, votre mot de passe est dérivé en une clé de chiffrement qui est ensuite utilisée pour les opérations cryptographiques. L'opération de dérivation, bien que quasiment immédiate du point de vue de l'utilisateur, est suffisamment complexe pour ralentir fortement un piate qui tenterait de trouver votre mot de passe maître par force brute. Donc, du moment que vous ne choisissez pas un mot de passe trop simple ou contenant des informations personnelles, ce système est une protection très efficace.",
      ],
    },
    mfaByDesign: {
      title: "Authentification multi-facteurs (MFA) par conception",
      details: [
        "Le déverrouillage de votre coffre-fort nécessite toujours deux facteurs d'authentification : votre mot de passe maître et un appareil autorisé.",
        "Le simple fait d'utiliser l'un de vos appareils est une première preuve d'authentification. Vous n'avez besoin que de saisir votre mot de passe maître pour déverrouiller votre coffre-fort.",
      ],
    },
    biometricUnlock: {
      title: "Déverrouillage biométrique (reconnaissance faciale, empreinte digitale, Windows Hello)",
      details: [
        "Gagnez du temps en activant cette option. Le déverrouillage biométrique remplace la saisie de votre mot de passe maître.",
        "Attention, la saisie de votre mot de passe maître restera obligatoire pour l'enrollement d'un nouvel appareil ou pour utiliser l'option de récupération de vos données à partir d'une sauvegarde chez un contact de confiance.",
        "NB : sur Windows, cette option active Windows Hello. Cela signifie que n'importe quelle option de déverrouillage de Windows Hello fonctionnera pour déverrouiller votre coffre-fort.",
      ],
    },
    forgottenPassword: {
      title: "Mot de passe oublié",
      details: [
        "UpSignOn intègre des mécanismes sécurisés pour vous permettre de réinitialiser votre mot de passe maître en cas d'oubli. Attention, ces mécanismes ne fonctionnent qu'à partir d'un appareil autorisé.",
        "Pour les coffres-forts PRO, ce mécanisme s'active sur chaque appareil autorisé après la première saisie du mot de passe maître sur l'appareil et ne peut pas être désactivé. En cas d'oubli de votre mot de passe maître, la demande de réinitialisation doit être validée un administrateur de votre banque.",
        "Pour les coffres-forts PERSO, vous devez manuellement activer cette option auprès d'un ou plusieurs contact(s) de confiance. En cas d'oubli de votre mot de passe maître, l'un de ces contacts de confiance peut vous aider à le réinitialiser.",
        "Dans les deux cas, ni l'administrateur PRO ni le contact de confiance n'est en mesure de récupérer votre mot de passe.",
      ],
    },
    deviceRevocation: {
      title: "Gestion et révocation des appareils",
      details: [
        'La page "Appareils synchronisés" vous permet de consulter la liste de tous vos appareils autorisés et si besoin de les révoquer à distance.',
        "Un appareil révoqué ne recevra plus les modifications de votre coffre-fort.",
        "Dans le cas PRO, l'appareil auto-effacera ses données locales à la prochaine ouverture de l'application.",
        "Dans le cas PERSO, votre coffre-fort restera disponible en lecture seule sur cet appareil pour éviter que vous ne perdiez tout votre coffre-fort si la personne qui vous vole votre appareil déverrouillé révoquait vos autres appareils. Ainsi, vous avez toujours la possibilité d'exporter vos données au format CSV et de les réimporter dans un nouveau coffre-fort. Dans tous les cas, que vous soyiez sur l'appareil qui révoque ou sur l'appareil révoqué, le changement de tous vos mots de passe s'impose.",
      ],
      imageAlt: "Capture d'écran de la page des appareils synchronisés",
    },
    offlineAcess: {
      title: "Accès hors-connexion",
      details: [
        "Même sans accès à internet, vous avez toujours accès à vos données !",
        "Par conception, les coffres-forts PERSO sont accessibles hors-connexion sur tous vos appareils. Si vous effectuez une modification sur votre coffre-fort en étant hors-ligne, cette modification sera enregistrée sur votre appareil et sera synchronisée lorsque la connexion sera à nouveau disponible.",
        "Les coffres-forts PRO sont conçus en mode cloud. Par défaut, vos données sont également accessibles hors-ligne depuis vos appareils autorisés, mais les administrateurs peuvent désactiver ce comportement depuis la console de supervision.",
      ],
      techFocusTitle: "Principes de fonctionnement des coffres-forts PERSO et PRO.",
      imageAlt: "Capture d'écran d'un coffre-fort PRO en mode hors-ligne.",
    },
    dataBackup: {
      title: "Sauvegarde & récupération du coffre-fort",
      details: [
        "Récupérez l'accès à votre coffre-fort même si vous n'avez plus accès à aucun de vos appareils autorisés.",
        "En mode PRO, vous pouvez simplement réenroller un nouvel appareil.",
        "En mode PERSO, vous pouvez manuellement configurer une sauvegarde auprès de l'un de vos contacts de confiance, ce qui est fortement recommandé.",
        "Dans les deux cas, la récupération de votre coffre-fort nécessite la saisie de votre mot de passe maître pour que personne d'autre ne puisse utiliser la fonction de récupération.",
      ],
    },
    autolock: {
      title: "Verrouillage automatique",
      details: [
        "Lorsque l’application est en arrière-plan ou minimisée, UpSignOn verrouille votre coffre-fort au bout d’un délai par défaut de 30 secondes sur smartphone et de 5 minutes sur ordinateur sauf si vous réouvrez l’application ou si vous effectuez une action dans l’extension de navigateur. Ce délai de verrouillage est paramétrable coffre-fort par coffre-fort et appareil par appareil.",
        "UpSignOn peut également en option verrouiller automatiquement votre coffre-fort lorsque votre écran ou votre session utilisateur est verrouillée.",
      ],
      byPlatformBehaviourTable: {
        title: "Voici le détail du comportement du verrouillage automatique par plateforme :",
        header: {
          platform: "Plateforme",
          onInactivityBackground: "Délai d'inactivité en arrière-plan",
          onInactivityMinimized: "Délai d'inactivité en fenêtre réduite",
          onSessionLock: "Au verrouillage de la session",
          onScreenLock: "Au verrouillage de l'écran",
        },
        yesAlways: "OUI (toujours)",
        yesOptional: "OUI (optionnel)",
        minutesDefaultDesktop: "5 minutes par défaut",
        minutesDefaultMobile: "30 secondes par défaut",
      },
      imageAlt: "Capture d'écran du menu de configuration du verrouillage automatique.",
    },
    protectedClipboard: {
      title: "Presse-papier sécurisé",
      details: [
        "UpSignOn vous permet de copier les informations que vous y stockez pour pouvoir les coller facilement là où vous en avez besoin. Afin de limiter le risque que des données sensibles ne soient récupérées à votre insu par une application ou un site malveillant, UpSignOn efface le presse-papier automatiquement au bout de 45 secondes (sauf sur Android).",
        "Vous avez la possibilité de désactiver cette protection depuis l’application.",
        "Attention, le comportement exact de cette fonctionnalité diffère selon les plateformes et les versions de système d’exploitation (détails de fonctionnement dans le lien ci-dessous).",
      ],
    },
    screenshotProtection: {
      title: "Protection contre les captures et le partage d'écran",
      details: [
        "Les captures et le partage d'écran de l'application sont bloqués par défaut.",
        "Pour éviter des difficultés lors d'éventuelles sessions de support utilisateur, cette protection ne s'active qu'après le déverrouillage d'un coffre-fort.",
        "Vous pouvez désactiver cette protection pour une durée limitée (configurable) à partir de la page réglages.",
      ],
    },
    supervisionSubtitle: "Console de supervision et d'administration UpSignOn PRO",
    supervisionGeneralExplanation:
      "Dans une interface de navigateur, les DSI et RSSI peuvent suivre le déploiement et l'utilisation des coffres-forts UpSignOn PRO de leurs utilisateurs, ainsi que configurer et contrôler certaines fonctionnalités de sécurité.",
    bankManagement: {
      title: "Gestion des banques de coffres-forts (superadmin)",
      details: [
        "Une banque UpSignOn PRO est un groupe de coffres-forts isolés. Les utilisateurs ne peuvent partager des secrets qu'avec d'autres utilisateurs de la même banque.",
        "Vous pouvez être administrateur de plusieurs banques. Si vous êtes superadministrateur (cas de l'auto-hébergement uniquement), vous pouvez gérer vous-mêmes la création de banques, ce qui est utile dans le cas de grands groupes ayant plusieurs entités indépendantes ou dans le cas de revendeurs.",
      ],
      imageAlt: "Capture d'écran de l'interface de gestion des banques dans la console de supervision.",
    },
    passwordStrengthEvolutionCurve: {
      title: "Courbe d'évolution de la force des mots de passe",
      details: ["Visualisez l'évolution du nombre de mots de passe forts, moyens, faibles et dupliqués."],
      imageAlt: "Capture d'écran de la page \"Vue d'ensemble\" de la console de supervision.",
    },
    userManagement: {
      title: "Gestion des coffres-forts / utilisateurs",
      details: [
        "Retrouvez la liste des coffres-forts et pour chacun les méta-données associées.",
        "Modifiez les réglages de sécurité utilisateur par utilisateur.",
        "Recherchez par adresse email, triez par vulnérabilité ou par date de dernière session.",
      ],
      imageAlt: 'Capture d\'écran de la page "Utilisateurs" de la console de supervision.',
    },
    deviceManagement: {
      title: "Suivi et révocation des appareils",
      details: [
        "Affichez la liste des appareils associés à chaque coffre-fort.",
        "Révoquez les appareils compromis ou hors-service.",
      ],
      imageAlt:
        'Capture d\'écran de la page "Utilisateurs" de la console de supervision, avec la vue des appareils ouvertes pour un utilisateur.',
    },
    sharedVaultsManagement: {
      title: "Suivi et gestion des coffres-forts partagés",
      details: [
        "Affichez la liste des coffres-forts partagés et leurs destinataires.",
        "Révoquez certains destinataires si besoin et réassignez les administrateurs des coffres-forts partagés.",
      ],
      imageAlt: 'Capture d\'écran de la page "Coffres-forts partagés" de la console de supervision.',
    },
    passwordResetApproval: {
      title: "Approbation des demandes de réinitialisation de mot de passe",
      details: [
        "Affichez toutes les demandes de réinitialisation de mot de passe.",
        "Approuvez ou refusez manuellement les demandes de réinitialisation de mot de passe. Vous pouvez désactiver la validation manuelle dans les réglages de sécurité.",
      ],
      imageAlt:
        "Capture d'écran de la page “Demandes de réinitialisation de mot de passe” de la console de supervision.",
    },
    sharedDeviceVisibility: {
      title: "Affichage des appareils partagés",
      details: ["Affichez tous les appareils sur lesquels plusieurs coffres-forts sont enregistrés."],
      imageAlt: "Capture d'écran de la page “Appareils partagés” de la console de supervision.",
    },
    securitySettings: {
      title: "Réglages de sécurité",
      details: [
        "Désactivez le mode hors-connexion, activez l'export CSV, choisissez les plateformes autorisées, exigez une validation manuelle pour l'enrollement d'un deuxième appareil.",
      ],
      imageAlt: "Capture d'écran des options de banque de la console de supervision.",
    },
    adminManagement: {
      title: "Gestion des administrateurs",
      details: [
        "En tant qu'administrateur d'une banque ou en tant que superadministrateur, invitez d'autres administrateurs.",
      ],
      imageAlt: "Capture d'écran du tableau de la page superadministrateur de gestion des administrateurs.",
    },
    prefilledWebsites: {
      title: "Sites webs pré-renseignés",
      details: [
        "Afin de simplifier l'ajout manuel de comptes dans l'application, pré-configurez ici les sites web utilisés dans votre entreprise. Ces sites web seront proposés en pré-remplissage dans la page d'ajout d'un compte aux utilisateurs de votre banque.",
      ],
      imageAlt: "Capture d'écran du tableau des sites webs prérenseignés.",
    },
    msEntra: {
      title: "Connexion Microsoft Entra",
      details: [
        "Connectez votre banque UpSignOn PRO à votre environnement Microsoft Entra pour gérer les utilisateurs autorisés à ouvrir un coffre-fort UpSignOn PRO directement dans Microsoft Entra. En cas de départ d'un collaborateur ou si vous le supprimez du groupe UpSignOn, son coffre-fort sera automatiquement désactivé.",
      ],
      imageAlt: "Capture d'écran de l'interface de configuration de Microsoft Entra dans la console de supervision.",
    },
    passwordAwarenessCampaigns: {
      title: "Aide aux campagnes de renforcement des mots de passe",
      details: [
        "Récupérez les adresses emails des utilisateurs qui ont encore des mots de passe faibles ou qui n'utilisent pas leur coffre-fort et envoyez-leur des campagnes de sensibilisation ciblées.",
      ],
      imageAlt: 'Capture d\'écran de la page "Autres requêtes" de la console de supervision.',
    },
  },
  techResources: {
    protectedClipboardBehaviour: {
      title: "Détail de fonctionnement du presse-papier sécurisé",
      ios: "L’information sensible ajoutée au presse-papier s’efface automatiquement au bout de 45 secondes, même si l’application est éteinte.",
      desktop:
        "L’information sensible ajoutée au presse-papier s’efface automatiquement au bout de 45 secondes, sous réserve que l’application ne soit pas éteinte (elle peut être minimisée ou en arrière plan).",
      android: {
        intro:
          "Le presse-papier d’Android contient une vingtaine d’éléments d’historique. Par ailleurs, Android ne permet pas de cibler l’information à effacer. Nous avons donc fait les choix de conception suivants :",
        intro_1: "la protection du presse-papier est désactivée par défaut sur Android ;",
        intro_2:
          "lorsque l’utilisateur décide de l’activer, l’historique entier du presse-papier est effacé au bout de 45 secondes et l’élément le plus récent obtient la valeur “UpSignOn security” afin de rappeler à l’utilisateur pourquoi son historique a disparu ;",
        intro_3:
          "à partir d’Android N, les informations ajoutées au presse-papier par UpSignOn sont marquées “sensibles”, ce qui indique à Android de ne pas les afficher à l’écran lors de l’utilisation du presse-papier.",
        remark:
          "Notez que l’application ne doit pas être complètement fermée pour que cela fonctionne. Elle peut en revanche être en arrière plan.",
      },
    },
  },
};

export default translations;

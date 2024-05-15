const translations = {
  menu: {
    features: "Fonctionnalités",
  },
  features: {
    pageTitle: "Fonctionnalités",
    tags: {
      pro: "PRO",
      perso: "PERSO",
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
    },
    techFocus: "Focus technique :",
    proPerso: {
      title: "Coffres-forts PRO & PERSO",
      summary:
        "UpSignOn vous propose deux types de coffres-forts, tous les deux semblables dans leur interface utilisateur, mais différents techniquement.",
      details: [
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
    },
    dataSubtitle: "Gestion de vos mots de passe, TOTP et données bancaires",
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
    },
    passwordStrength: {
      title: "Évaluation de la force des mots de passe",
      summary:
        "Enregistrer vos mots de passe dans un coffre pour ne pas les oublier, c’est bien, mais utiliser des mots de passe forts et uniques, c’est mieux ! Lisez notre article sur le sujet.",
      details: [
        "UpSignOn calcul un score de sécurité sur chacun de vos mots de passe (rouge, orange ou vert). Ce score tient compte d’une part de la résistance intrinsèque du mot de passe à une tentative d’extraction, et d’autre part du nombre d’occurrences du même mot de passe dans vos autres comptes. (Plus de détails techniques ici).",
        "Les mots de passe qui méritent d’être changés vont apparaître en rouge ou en orange dans votre coffre-fort. Passez tous vos mots de passe en vert. Ce n’est pas un gros effort mais cela aura un énorme impact positif sur votre cyber-sécurité !",
      ],
      imageAlt: "Capture d'écran des scores de différents mots de passe évalués par l'application.",
    },
    passwordGenerator: {
      title: "Générateur de mots de passe et de phrases de passe",
      summary:
        "Pour vraiment renforcer vos mots de passe, l’idéal est d’utiliser des mots de passe aléatoires, générés par UpSignOn.",
      details: [
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
    },
    sharing: {
      title: "Partage sécurisé en famille ou entre collègues",
    },
    rightsManagement: {
      title: "Gestion des droits (lecture seule ou gestionnaire)",
    },
    autofillAutosaveSubtitle: "Remplissage et enregistrement automatique",
    autofillSmartphones: {
      title: "Remplissage automatique sur smartphones et tablettes",
    },
  },
};

export default translations;

import fr from "./fr";

const translations: typeof fr = {
  anchorCopyTitle: "Copy the link to this paragraph.",
  anchorCopied: "Link copied",
  successMessage: "Request sent",
  menu: {
    features: "Features & demos",
    pricing: "Pricing",
    downloads: "Downloads",
    resources: "Resources",
  },
  actions: {
    contactUs: "Let's talk about it!",
    callMeBackLater: "Be contacted later",
    cancel: "Cancel",
    close: "Close",
    freeTrial: "Tester 1 mois gratuitement",
    calendarLink: "Book a slot in my calendar",
  },
  callBackForm: {
    nameLabel: "Your name",
    companyLabel: "Name of your organisation",
    emailLabel: "Email adress",
    telLabel: "Phone number",
    callbackDate: "When do you wish to be contacted?",
    submit: "Send",
  },
  freeTrialForm: {
    nameLabel: "Your name",
    companyLabel: "Name of your organisation",
    siret: "SIRET",
    emailLabel: "Email adress",
    telLabel: "Phone number",
    submit: "Send",
  },
  legalNotice: {
    seeButton: "See legal notice",
    pageTitle: "Legal notice",
    metaDescription: "Legal notice for the website upsignon.eu",
    editor: {
      title: "Editor",
      intro:
        'This website, accessible from the URL address https://upsignon.eu (hereinafter referred to as the "Site") is a publication of the company:',
      name: "RG SYSTEMES",
      mainLocationTitle: "Head office:",
      mainLocationContent: "194 avenue de la Gare Sud de France, Font de la Banquière, 34970 LATTES (France)",
      statusTitle: "Status or legal form:",
      statusContent: "Société par Actions Simplifiée (SAS)",
      capitalTitle: "Share capital:",
      capitalContent: "408 568 euros",
      rcsTitle: "RCS:",
      rcsContent: "508 920 683 Montpellier",
      siretTitle: "Head office SIRET:",
      siretContent: "508 920 683 00077",
      registerLocationTitle: "Registering location:",
      registerLocationContent: "Montpellier (Hérault) - France",
      apeTitle: "Head office APE code:",
      apeContent: "6201Z",
      fiscalIDTitle: "Fiscal identifier code:",
      fiscalIDContent: "FR06508920683 (or VAT number)",
      phoneTitle: "Phone number:",
      phoneContent: "+33 (0)4 11 93 42 00",
      emailTitle: "Email:",
      emailContent: "contact@rgsystem.septeo.com",
      representedByTitle: "Represented by:",
      representedByContent: "SEVEN TOPCO (RCS Montpellier 888 802 988)",
    },
    intellectualProperty: {
      title: "Sign ownership",
      intro: "The UpSignOn brand is the property of RG SYSTEMES.",
    },
    publicationDirector: {
      title: "Publishin director",
    },
    hosting: {
      title: "Website hosting",
      name: "Vercel Inc.",
      addressTitle: "Address:",
      addressContent: "340 S Lemon Ave #4133, Walnut, CA 91789, USA",
    },
    websiteCreation: {
      title: "Website design and referencing",
      url: "https://www.rgsystem.fr",
    },
    footer1: "The entire site is subject to French legislation on copyright and intellectual property.",
    footer2:
      "All rights of reproduction, representation and making available to the public are reserved. Unless otherwise expressly authorized in writing by RG SYSTEMES.",
  },
  footer: {
    nav: {
      t: "Quick links",
      home: "Home",
    },
    contactUs: "Contact us",
    followUs: "Follow us",
    legalNotice: "Legal notices",
    publisher: "Publisher",
    hostedBy: "Website hosted by",
    copyright: "all rights reserved",
  },
  languageFlags: {
    french: "French",
    english: "English",
  },
  pitch: {
    metaDescription:
      "Discover UpSignOn, our user-friendly, secure and multi-platform password management solution. Secure and forget your passwords. Get an overview of the passwords in your company and share them with colleagues.",
    moto: "UpSignOn, the STRONG PASSWORD vault\nfor private and professional use.",
    subtitle: "Save, secure and forget\nyour passwords!",
    prezVideoTitle: "UpSignOn presentation video",
    french: "Made and hosted in France",
    privacyByDesign: "Security and privacy by design",
    crossPlatform: "Cross-platform (Windows, Linux, macOS, iOS, Android)",
    saas: "SaaS",
    onprem: "On-Premise",
    keyMetrics: {
      sectionTitle: "Passwords, a key challenge",
      t1: "80% of corporate hacks are linked to weak passwords.",
      d1: "Weak passwords, reused passwords, or passwords obtained through phishing are involved in 80% of successful attacks. So this is a major issue for your company, association or local authority! The financial consequences of a hacking attack are often catastrophic for the victim organisation.",
      t2: "59% of people use the same password for all their accounts, whether professional or personal.",
      d2: "Reusing the same password is one of the worst practices because if one of your sites suffers a data leak, that compromises in chain your accounts on all your other sites.",
    },
    advantages: {
      sectionTitle: "The advantages of our password vault",
      1: {
        t: "All your passwords in one secure place, synchronised across all your devices",
        d: [
          'Do you have the same password for all your sites? Do you use the "forgot password" function every time you log on? Do you write down all your passwords in a notebook or Excel file? Stop! Not only is this inefficient, it\'s also a major security risk!',
          "With UpSignOn, forget your passwords! The application saves them for you and lets you use them on all your devices with the greatest of ease. UpSignOn is compatible with all platforms (iOS, Android, MacOS, Windows, Linux).",
        ],
      },
      2: {
        t: "Have only very strong passwords",
        d: [
          'The most commonly used password is still the famous "123456". Hackers know this and will test this password first! The best practice is therefore to use a strong password, ideally randomly generated (this is the most resistant to brute force attempts).',
          "Hackers also know that most people reuse the same password everywhere. If this is the case for you, there's a good chance that this unique password has been leaked on at least one of your sites and is stored in a database that can easily be bought on the dark web.",
          "To help you have very strong and unique passwords on each site, UpSignOn includes a password generator and random passphrases. UpSignOn also displays a security score for each password to help you quickly identify your most vulnerable passwords.",
        ],
      },
      3: {
        t: "Share passwords securely",
        d: [
          "We all share passwords. But, without a tool, this inevitably leads to using the worst practices: using a password that is too simple, displaying the password on a wall, never changing the password. With UpSignOn, the passwords you share can remain unique and strong, and can be changed and synchronised across all recipients effortlessly.",
        ],
      },
      4: {
        t: "Automatically fill in and save your passwords",
        d: [
          "With UpSignOn, you don't even need to type in your passwords. They are automatically filled in for you by the application (smartphones) or browser extension (computers).",
          "The browser extension also detects passwords you enter manually and saves them in your vault.",
        ],
      },
      5: {
        t: "Simple and user-friendly ergonomics, easy to learn",
        d: [
          "Not everyone is at the same level of comfort with computers. The key to adoption is therefore the application's ergonomics and ease of use.",
          "We designed UpSignOn not to optimise the power of its functions, but to make them as usable as possible for people who are less tech-savvy. For example, we chose to have exactly the same interface on all screen sizes and platforms so users don't have to get used to having several different interfaces. We've also kept the number of buttons in the interface to a minimum, even if it means that some of the more advanced functions can't be accessed with just one click.",
        ],
      },
      6: {
        t: "PRO - Visibility for administrators",
        d: [
          "Deploying a password manager for your employees is fine, but being able to ensure that it is being used and that it actually enables passwords to be strengthened is even better!",
          "Thanks to our supervision console, you can gain visibility over the status of passwords in your company and adjust certain security parameters to suit your needs.",
        ],
      },
      7: {
        t: "Available in several languages",
        d: [
          "The app, the browser extension and the supervision console are available in french and english. If you would like UpSignOn to be translated into another language, please send us an email.",
        ],
      },
    },
    proVsPerso: {
      sectionTitle: "One app, two types of vaults",
      perso: {
        tTag: "UpSignOn PERSO",
        t: "free, unlimited and private",
        p1: "PERSO vaults are designed for private use and family sharing. They are free and unlimited. They are designed to maximize security. The UpSignOn company does not receive any personal data, not even your email address!",
      },
      pro: {
        tTag: "UpSignOn PRO",
        t: "adapted to professional challenges",
        p1: "As responsible for the IT security of your organization you must ensure that all your colleagues apply good practices in managing their passwords. Your goal is to have 100% strong passwords. Deploying a tool is not enough. You need to be able to track its adoption and verify that it is paying off.",
        p2: "UpSignOn PRO therefore gives you access to a supervision console for the evolution of the strength of passwords, identifying the people who need to be supported and controlled or adjust the most sensitive functionalities (for example export, master password reset, authorized platforms, offline mode, etc.).",
      },
    },
    demo: {
      appDemo: "Presentation of the application's interface - PERSO and PRO vaults",
      extensionDemo: "Presentation of the browser extension - autofill and autosave",
      consoleDemo: "Presentation of the supervision dashboard - overview, support and security options",
    },
    securityByDesign: {
      sectionTitle: "Security by design",
      e2eEnc: {
        t: "Cryptographic protection, end-to-end encryption",
        p1: "All sensitive data is encrypted before being stored or transferred over the internet. The only way to decrypt it is to know the encryption key (e.g. your master password). The algorithms and settings we have selected are designed so that hackers would take several decades, even hundreds of years to decrypt your data, which is a complete financial disincentive for them.",
        p2: 'We designed UpSignOn to respect as much as possible the so-called "zero trust" principle: the system remains secure even if our servers are compromised.',
      },
      mfa: {
        t: "Multi-factor authentication by design",
        p1: "Before you can attempt to decrypt your data, you must have access to the raw files. To do this, a hacker must necessarily have access to one of your authorized devices, either to obtain the encrypted file directly, or to prove to the server that it has access to one of your authorized devices. So decrypting your data always requires proof of possession (the authorized device) and proof of knowledge (your master password).",
      },
      zeroKnowledge: {
        t: "Limitation of personal data stored on the cloud - zero knowledge principle",
        p1: 'Only strictly essential data is stored in the clear on the servers. In the case of PRO vaults, for supervision purposes, this is your professional email address, your authorized devices and information on the strength of your vault\'s passwords. PERSO vaults completely respect the so-called "zero knowledge" principle: absolutely no personal data is transmitted to the server, not even your email address.',
      },
    },
    customerList: {
      sectionTitle: "They trust us",
    },
  },
  pricing: {
    metaDescription: "Get our clear and transparent pricing and receive a quote by email.",
    persoPricing: {
      t: "PERSO",
      free: "0€",
      details:
        "Our PERSO vaults are entirely free and unlimited. But a good rating on stores and publicity among your relatives and your social will be of great value to us!",
      downloadAction: "Download UpSignOn",
    },
    proPricing: {
      t: "PRO",
      contactUs: "Contact us",
      licencePriceUnit: "per vault per month. Billed annually.",
      saasDetails: "SAAS hosting is included in the licence price.",
      onPremOption: "Self hosting option (Linux): 1.000€ / year",
      onPremDetails:
        "The self-hosting package covers technical support costs and is independent of the number of licences.",
    },
    simu: {
      priceSimulator: "Simulator",
      nbLicences: "Number of UpSignOn PRO licences",
      years3: "3 years (-10%)",
      selfHosting: "Self hosting option (Linux)",
      article: "Item",
      units: "Number of units",
      years: "Number of years",
      unitPrice: "Unit price / year",
      sumPrice: "Total price",
      sumDiscounts: "Including discount",
      licences1: "Licences 1 to $to",
      licences2: "Licences $from to $to (-5%)",
      licences3: "Licences $from and beyond (-20%)",
      discount3Years: "3-year order discount (-10%)",
      totalLicences: "Licences total",
      selfHostingPacakge: "Self-hosting support package (Linux)",
      total: "Total excl tax",
      vat: "VAT",
      totalInclTax: "Total incl tax",
      singlePayment: "Payable in one instalment",
    },
    getQuote: {
      button: "Get this quote by email (in French)",
      companyName: "Organisation name",
      companySiret: "SIRET",
      companyVAT: "VAT number",
      companyAddress1: "Address line 1",
      companyAddress2: "Address line 2",
      companyAddress3: "Address line 3",
      contactName: "Your firstname and name",
      contactEmail: "Your email address",
      contactPhone: "Your phone number",
      submit: "Get the quote",
      success: "Quote sent",
    },
    distribTitle: "Are you a reseller?",
    distribDetails: "We have a win-win deal for you.",
  },
  downloads: {
    metaDescription:
      "Download UpSignOn and its browser extensions on Windows, macOS, Linux, iOS and Android and on Chrome, Edge, Firefox and Safari.",
    pageTitle: "Donwloads (free)",
    appTitle: "1 - Download the app",
    windowsOtherOptions: "Other download options & GPO",
    linuxOtherOptions: "Instructions and versions",
    browserExtensionTitle: "2 - Download the browser extension",
    chromiumBrowsers: "Chromium browsers",
    safariIncludedInApp: "Shipping with the macOS app.",
    extensionGPO: "Extensions GPO deployment",
  },
  features: {
    metaDescription:
      "Discover and view the almost exhaustive list of features of our application, our browser extension and our supervision console.",
    pageTitle: "Features & demos",
    questions: "A question? A specific need?",
    tags: {
      pro: "PRO",
      perso: "PERSO",
      availableFor: (pro: boolean) => `Available for ${pro ? "pro" : "perso"} vaults`,
      unavailableFor: (pro: boolean) => `Not available for ${pro ? "pro" : "perso"} vaults`,
      availableWithWarningFor: (pro: boolean) => `Partial support or optional for ${pro ? "pro" : "perso"} vaults`,
    },
    compatibilityTable: {
      summary: "Compatibility table",
      header: {
        os: "OS",
        minTheoreticalVersion: "Theoretical minimum version",
        testedVersion: "Tested versions",
        arch: "Architectures",
      },
      untested: "Untested",
    },
    featurePlatforms: {
      availableOn: (p: string) => `Available on ${p}`,
      unavailableOn: (p: string) => `Not available on ${p}`,
      availableWithWarningFor: (p: string) => `Conditionally available on ${p}`,
    },
    techFocus: "Technical focus:",
    generalSubtitle: "Pro, perso, cross-platform",
    proPerso: {
      title: "PRO & PERSO vaults",
      details: [
        "UpSignOn offers you two types of vaults, both similar in their user interface, but technically different.",
        "The PERSO vault is designed for your private, non-business use. It is totally secure and private by design. However, its secret-sharing system is not suitable for teams of more than a few people.",
        "PRO vaults are offered by your employer or IT security manager to give you the means to achieve 100% strong, unique passwords. Your CIO or CISO can monitor progress towards this objective from the supervision console, which gives him/her access to the strength of the passwords stored in the PRO vaults. This console does not, of course, give direct access to your passwords and other secrets. What's more, with the PRO vaults, it will be much easier for you to share secrets with your colleagues simply by entering their email address.",
        "You can add as many PRO and PERSO vaults as wanted.",
      ],
      imageAlt: "Screenshot showing the PRO and PERSO vaults in the application.",
      techFocusTitle: "PRO vs PERSO vaults",
    },
    crossPlatform: {
      title: "Available on smartphones, tablets and computers",
      details: [
        "Access your passwords securely on all your devices. The interface remains exactly the same on all screen sizes.",
      ],
    },
    syncing: {
      title: "Automatic synchronisation between your devices",
      details: [
        "Changes you make on one device are automatically synchronised with your other authorised devices. There is no limit to the number of authorised devices.",
      ],
    },
    dataSubtitle: "Manage your passwords, TOTP and bank details",
    unlimitedAccounts: {
      title: "Add unlimited internet accounts",
      details: [
        "In UpSignOn, you can add as many internet accounts as you like, including PERSO vaults which are free. Typically, you'll store the password and address for each of your websites.",
      ],
      imageAlt: "Screenshot of the add account page.",
    },
    unlimitedCodes: {
      title: "Add unlimited codes",
      details: [
        "You can also save codes in your vault (building code, lock code, alarm code, etc.) Their display is simpler than that of internet accounts.",
      ],
      imageAlt: "Screenshot of the add code page.",
    },
    quickView: {
      title: "Ergonomic quick view, all actions at your fingertips",
      details: [
        "Your vault displays the list of your passwords and codes in a fairly condensed way so as to keep the interface simple and suitable for small screens.",
        "You can consult the contents of your information in a very intuitive and ergonomic way without having to change pages. All the actions you might want to perform are at your fingertips. Copy a password, open a site in your browser, consult your notes.",
      ],
      imageAlt: "Screenshot of an account's quick view",
    },
    passwordStrength: {
      title: "Evaluation of password strength",
      details: [
        "Saving your passwords in a vault so you don't forget them is great, but using strong, unique passwords is better! Read our article on the subject.",
        "UpSignOn calculates a security score for each of your passwords (red, orange or green). This score takes into account both the intrinsic resistance of the password to an extraction attempt and the number of occurrences of the same password in your other accounts. (More technical details here).",
        "Passwords that need changing will appear in red or orange in your vault. Change all your passwords to green. It's not a big effort but it will have a huge positive impact on your cyber security!",
      ],
      imageAlt: "Screenshot of the scores of different passwords evaluated by the application.",
    },
    passwordGenerator: {
      title: "Password and passphrase generator",
      details: [
        "To really strengthen your passwords, the ideal is to use random passwords, generated by UpSignOn.",
        "UpSignOn allows you to generate several types of random passwords and lets you choose their length. ANSSI now recommends at least 12 characters. UpSignOn's default setting is 16 characters, but don't hesitate to increase this length, as your password will be even more robust.",
        "UpSignOn also offers a passphrase generator, i.e. a series of words chosen at random from the dictionary. The advantage of a passphrase is that there are a lot of characters (so it's very strong), while being relatively easy to remember. We recommend that you use a passphrase for your Windows/Apple session and for your vault master password in particular.",
      ],
      imageAlt: "Screenshot of the password generator",
    },
    passwordHistory: {
      title: "Password history",
      details: [
        "Don't be afraid of mishandling! UpSignOn keeps a history of your passwords. So if something has gone wrong, you can easily go back to a previous version of your password.",
      ],
      imageAlt: "Screenshot of the password history",
    },
    multiUrls: {
      title: "Manage multiple URLs (internet addresses)",
      details: [
        "UpSignOn allows you to associate multiple urls with a single account. This is practical in many cases, for example so that your Google account is associated with the Gmail url, but also with the Google Drive url, etc.",
        "Your UpSignOn vault also serves as a list of favourites and shortcuts!",
      ],
      imageAlt: "Screenshot of an account that has saved several URLs",
    },
    notes: {
      title: "Notes field (free text) for each account or code",
      details: [
        "For each account and code in your vault, you can add free text notes. These notes are therefore secure and you can store secret information in them, such as recovery codes, or any other useful information.",
      ],
      imageAlt: "Screenshot of a note",
    },
    totp: {
      title: "TOTP management",
      details: [
        "TOTPs (Timed-One-Time-Passwords) are a system for generating single-use codes often used as a second authentication factor. The TOTP protocol is very secure because it relies on proof of possession (you own your smartphone).",
        "By allowing you to save TOTPs in your vault, UpSignOn not only gives you a single tool for managing your passwords and TOTPs, but also lets you be no longer dependent on your smartphone when you are asked for validation on your computer.",
      ],
      imageAlt: "Screenshot of a TOTP",
    },
    paymentData: {
      title: "Managing your bank details",
      details: [
        "Make filling out payment forms on the web easier by storing your bank and bank card details in your UpSignOn vault.",
      ],
      imageAlt: "Screenshot of the bank details page",
    },
    sharingSubtitle: "Share your login details",
    trustedContacts: {
      title: "(PERSO) Management of trusted contacts",
      details: [
        "PERSO vaults allow you register trusted contacts.",
        "They are other users of UpSignOn with whom you can share accounts and codes and to whom you can entrust backups of your data and master password.",
        "NB : This feature is not necessary for PRO vaults because sharing and backups work differently.",
      ],
      imageAlt: 'Screenshot of the "Trusted contacts" page.',
    },
    sharing: {
      title: "Secure sharing with family or colleagues",
      details: [
        "Sharing login details between family members or colleagues is a common practice that unfortunately often leads to the use of weak passwords (that everyone knows) and the reuse of the same password on all shared accounts",
        "UpSignOn allows you to share single identifiers or entire folders with your trusted contacts (PERSO vaults) or with other users of your bank (PRO vaults) simply and securely.",
        "Shared items are automatically synchronised between different users. There is no limit to the number of items shared or the number of recipients.",
      ],
      imageAlt: "Screenshot of a vault containing shared items and folders.",
    },
    rightsManagement: {
      title: "Mangement of access level on shared elements",
      details: [
        "In the recipients management page of a shared vault, you can grant several levels of access to the recipients of your shared element:",
      ],
      rightLevels: {
        blind: {
          title: "Blind reading: (PRO only)",
          def: "the recipient can use the password via autofill but cannot show it or copy it.",
        },
        readOnly: {
          title: "Read only:",
          def: "the recipient can not change anything in the shared element.",
        },
        editor: {
          title: "Editor: (PRO only)",
          def: "the recipient can change the content of the shared element.",
        },
        owner: {
          title: "Owner:",
          def: "the recipient has the same rights as you on the shared element and can manage its recipients.",
        },
      },
      imageAlt: "Screenshot of the recipients management page of a shared folder.",
    },
    autofillAutosaveSubtitle: "Autofill and autosave",
    autofill: {
      title: "Automatic form filling",
      desktopTitle: "Windows/MacOS (with browser extension)",
      desktopDetails: [
        "Install our browser extension to have UpSignOn auto-fill most login forms as you browse the Internet.",
        "This extension is available for all Chromium browsers (Google Chrome, Microsoft Edge, Brave), for Firefox and for Safari on macOS.",
        "NB: the Safari extension ships directly with the application, but you need to activate it manually via the Safari Settings menu.",
      ],
      desktopImageAlt: "Screenshot of the UpSignOn extension",
      iosTitle: "iOS",
      iosDetails: [
        "UpSignOn integrates with the iOS keyboard to offer you semi-automatic filling of credentials saved in your vault in the login forms you encounter, both when browsing the internet and in your apps.",
        'This feature is activated from the Settings application, "Passwords" menu, "Password options" menu',
      ],
      iosImageAlt: "Screenshot of a keyboard on iOS offering form filling via UpSignOn.",
      androidTitle: "Android",
      androidDetails: [
        "UpSignOn integrates with Android to offer you semi-automatic filling of the credentials saved in your vault in the login forms you encounter, both when browsing the internet and in your applications.",
        "This feature can be activated directly from the UpSignOn settings page.",
      ],
      androidImageAlt: "Screenshot of a web form on Android displaying UpSignOn's autofill interface.",
    },
    autosaveDesktop: {
      title: "Automatic saving of passwords via the browser extension",
      details: [
        "Our browser extension also detects passwords you manually type and lets you save them directly to your vault effortlessly.",
      ],
      imageAlt: "Screenshot of the UpSignOn extension suggesting to save a new password.",
    },
    searchFilterOrganizeSubtitle: "Search, filter, organize",
    search: {
      title: "Search by account name, domain name, email, folder name",
      details: ["The search field helps you find an account quickly in your list. Use it without moderation!"],
      imageAlt: "Screenshot of a vault showing a search in progress.",
    },
    filter: {
      title: "Filters by type and password strength",
      details: [
        "In addition to searching, you can filter you vault by secret type (account or code), by password strength, or display only shared elements. You can choose the fields to which the search applies, typically for instance to search inside your notes. You can also choose to hide elements of the root folder if you have many of them.",
      ],
      imageAlt: "Screenshot of the application showing the various filters that are available.",
    },
    organize: {
      title: "Organisation by folders and subfolders",
      details: [
        "We all like things to be tidy. Organise your vault using folders. You can include folders within folders with no depth limit.",
      ],
      imageAlt: "Screenshot of a vault containing a tree structure of folders and subfolders.",
    },
    importExportSubtitle: "Import & Export your data",
    csvImport: {
      title: "CSV, XLSX, JSON & XML (Keepass) import",
      details: [
        "You have passwords saved in your browser or in another tool? Export them in .csv format and import them into your UpSignOn vault in just a few clicks!",
        "NB : to transfer your date from KeePass, prefer to use the XML format to preserver the tree structure of your folders.",
        "Remember to completely erase the CSV (or XML) file once you have finished importing so that your secrets are not accessible in an unprotected format!",
      ],
      imageAlt: "Screenshot of the import page.",
    },
    csvExport: {
      title: "CSV, XLSX, JSON & PDF export",
      details: [
        "If you decide to change tools, you can export your passwords in .csv or .xlsx format at any time and re-import them into another tool.",
        "Please note that this function is not designed to back up your data. We offer dedicated and secure mechanisms for this purpose.",
      ],
      warningPro:
        "NB PRO vaults: this feature is disabled by default and can only be activated by an administrator from the supervision console (see below).",
      imageAlt: "Screenshot of the export button.",
    },
    securityFeaturesSubtitle: "Security features",
    endToEndEncryption: {
      title: "End-to-end encryption, zero trust, zero knowledge",
      details: [
        "UpSignOn pursues security by design. We apply the principles of zero-trust and zero-knowledge whenever a feature allows it (which is almost all of them).",
        "Data can only be encrypted and decrypted on your devices. When data passes through our servers - as in the case of synchronisation, sharing, backups - we have no way of reading the content by design.",
        "PERSO vaults respect the principles of zero-trust and zero knowledge with no exception. We don't even know your email address! This means that we have absolutely no way of helping you recover your vault if you have forgotten your master password and had not set up a master password backup or if you lose all your devices and had not set up a backup of your data. That's the price of security",
        "PRO vaults are designed to allow team sharing by email address and supervision by your CIO or CISO. This means that certain information is stored on the server and can be read by the administrators (professional email address, password statistics, data identifying your authorised devices). On the other hand, your secrets (passwords, codes, TOTP, notes, bank details, etc.) remain unreadable.",
      ],
    },
    passwordLocking: {
      title: "Master password locking",
      details: [
        "Your master password is the last password you need to remember. It is used to encrypt your data.",
        "In practical terms, your password is derived into an encryption key which is then used for cryptographic operations. The derivation operation, although almost immediate from the user's point of view, is sufficiently complex to greatly slow down a hacker trying to find your master password by brute force. So, as long as you don't choose a password that is too simple or contains personal information, this system is a very effective protection.",
      ],
      imageAlt: "Screenshot of the master password entry window when unlocking a vault.",
    },
    mfaByDesign: {
      title: "Multi-factor authentication (MFA) by design",
      details: [
        "Unlocking your vault always requires two authentication factors: your master password and an authorised device",
        "Simply using one of your devices is one first proof of authentication. You only need to enter your master password to unlock your vault.",
      ],
      imageAlt: "Screenshot of a deactivated PRO vault.",
    },
    biometricUnlock: {
      title: "Biometric unlocking (facial recognition, fingerprint, Windows Hello)",
      details: [
        "Save time by activating this option. Biometric unlocking replaces the need to enter your master password.",
        "Please note that you will still need to enter your master password to enrol a new device or to use the option to recover your data from a backup with a trusted contact.",
        "NB: on Windows, this option activates Windows Hello. This means that any Windows Hello unlock option will work to unlock your vault.",
      ],
      imageAlt: "Screenshot of a biometric unlock on macOS.",
    },
    forgottenPassword: {
      title: "Forgotten password",
      details: [
        "UpSignOn incorporates secure mechanisms to allow you to reset your master password if you forget it. This mechanisms only work from an authorised device.",
        "For PRO vaults, this mechanism is activated on each authorised device after the master password is first entered on the device and cannot be deactivated. If you forget your master password, the reset request must be validated by an administrator of your bank.",
        "For PERSO vaults, you must manually activate this option with one or more trusted contact(s). If you forget your master password, one of these trusted contacts can help you reset it.",
        "In both cases, neither the PRO administrator nor the trusted contact is able to recover your password.",
      ],
      imageAlt: "Screenshot of the forgotten password page for a PRO vault.",
    },
    deviceRevocation: {
      title: "Device management and revocation",
      details: [
        'The "Synchronised devices" page lets you view the list of all your authorised devices and, if necessary, revoke them remotely.',
        "A revoked device will no longer receive changes about your vault.’",
        "In the PRO case, the device will automatically delete its local data the next time you open the application.",
        "In the PERSO case, your vault will remain available in read-only mode on this device to prevent you from losing your entire vault if the person who steals your unlocked device revokes your other devices. You always have the option of exporting your data in CSV format and re-importing it into a new vault. In all cases, whether you are on the revoking device or on the revoked device, you need to change all your passwords.",
      ],
      imageAlt: "Screenshot of the synchronised devices page",
    },
    offlineAcess: {
      title: "Offline access",
      details: [
        "Even without internet access, you always have access to your data!",
        "By design, PERSO vaults are accessible offline on all your devices. If you make a change to your vault while offline, this change will be saved on your device and will be synchronised when the connection is available again.",
        "PRO vaults are designed in cloud mode. By default, your data is also accessible offline from your authorised devices, but administrators can disable this behaviour from the supervision console.",
      ],
      techFocusTitle: "Design principles of PERSO and PRO vaults.",
      imageAlt: "Screenshot of a PRO vault in offline mode.",
    },
    dataBackup: {
      title: "Vault backup and recovery",
      details: [
        "Recover access to your vault even if you no longer have access to any of your authorised devices.",
        "In PRO mode, you can simply register a new device.",
        "In PERSO mode, you can manually set up a backup with one of your trusted contacts, which is highly recommended.",
        "In both cases, you will need to enter your master password to recover your vault so that no one else can use the recovery method.",
      ],
      imageAlt: "Screenshot of the PERSO vault creation page where recovery mode is selected.",
    },
    autolock: {
      title: "Automatic locking",
      details: [
        "When the application is in the background or minimized, UpSignOn locks your vault after a default delay of 30 seconds on smartphone and 5 minutes on computer unless you reopen the application or perform an action in the browser extension. This locking time can be set vault by vault and device by device",
        "UpSignOn can also lock your vault automatically when your screen or user session is locked.",
      ],
      byPlatformBehaviourTable: {
        title: "Here are the details of the automatic locking behaviour by platform:",
        header: {
          platform: "Platform",
          onInactivityBackground: "Inactivity timeout in background",
          onInactivityMinimized: "Inactivity timeout in reduced window",
          onSessionLock: "On session lock",
          onScreenLock: "On screen lock",
        },
        yesAlways: "YES (always)",
        yesOptional: "YES (optional)",
        minutesDefaultDesktop: "5 minutes by default",
        minutesDefaultMobile: "30 seconds by default",
      },
      imageAlt: "Screenshot of the automatic locking configuration menu",
    },
    protectedClipboard: {
      title: "Secure clipboard",
      details: [
        "UpSignOn lets you copy the information you store on it so you can easily paste it wherever you need it. To limit the risk of sensitive data being retrieved without your knowledge by a malicious application or site, UpSignOn automatically deletes the clipboard after 45 seconds (except on Android).",
        "You can deactivate this protection from within the application.",
        "Please note that the exact behaviour of this feature differs depending on the platform and operating system version (see the link below for details).",
      ],
      imageAlt: "Screenshot of the menu for activating clipboard protection.",
    },
    screenshotProtection: {
      title: "Protection against screenshots and screen sharing",
      details: [
        "Screenshots and screen sharing of the application are bloqued by default to avoid accidental data leak.",
        "To avoid difficulties during potential user support sessions, this protection is only activated after a vault has been unlocked.",
        "You can disable this protection for a limited time (configurable) from the settings page.",
      ],
      imageAlt: "Screenshot of the application appearing black when sharing the screen on Windows.",
    },
    supervisionSubtitle: "UpSignOn PRO supervision and administration dashboard",
    supervisionGeneralExplanation:
      "In a browser interface, CIOs and CISOs can monitor the deployment and use of their users’ UpSignOn PRO vaults, as well as configure and control some security features.",
    bankManagement: {
      title: "Management of vault banks (superadmin)",
      details: [
        "An UpSignOn PRO bank is a group of isolated vaults. Users can only share secrets with other users in the same bank.",
        "You can be administrator of several banks. If you are a superadministrator (in the case of self-hosting only), you can manage the creation of banks yourself, which is useful in the case of large groups with several independent entities or in the case of resellers.",
      ],
      imageAlt: "Screenshot of the bank management interface in the supervision console.",
    },
    passwordStrengthEvolutionCurve: {
      title: "Password strength evolution curve",
      details: ["View the evolution of the number of strong, medium, weak and duplicate passwords."],
      imageAlt: "Screenshot of the “Overview” page of the supervision console.",
    },
    userManagement: {
      title: "Vault / user management",
      details: [
        "Find the list of vaults and the associated metadata for each one.",
        "Modify general security settings user by user.",
        "Search by email adress, sort by vulnerability or by last session date.",
        "If necessary, you can esaily update a vault's email address.",
      ],
      imageAlt: "Screenshot of the “Users” page from the supervision console.",
    },
    deviceManagement: {
      title: "Device tracking and revocation",
      details: ["View a list of devices associated with each vault.", "Revoke compromised or decommissioned devices."],
      imageAlt: "Screenshot of the “Users” page of the supervision console, with the view of devices open for a user.",
    },
    sharedVaultsManagement: {
      title: "Monitoring and management of shared vaults",
      details: [
        "View the list of shared vaults and their recipients.",
        "Revoke certain recipients if necessary and reassign shared vaults administrators.",
      ],
      imageAlt: "Screenshot of the “Shared vaults” page from the supervision console.",
    },
    passwordResetApproval: {
      title: "Approval of password reset requests",
      details: [
        "View all password reset requests.",
        "Manually approve or deny password reset requests. You can disable manual validation in the security settings.",
      ],
      imageAlt: "Screenshot of the “Password reset requests” page from the supervision console.",
    },
    sharedDeviceVisibility: {
      title: "Display shared devices",
      details: ["Display all devices on which more than one vault is registered."],
      imageAlt: "Screenshot of the “Shared devices” page from the supervision console",
    },
    securitySettings: {
      title: "Security settings",
      a: "Enable/disable manual validation by an administrator for password reset requests (enabled by default)",
      b: "Enable/disable offline mode on desktops (enabled by default)",
      c: "Enable/disable offline mode on phones and tablets (enabled by default)",
      d: "Enable/disable CSV export (disabled by default)",
      e: "Allow/disallow certain platforms (all allowed by default)",
      f: "Enable/disable manual validation by an administrator for the addition of more than one device (disabled by default)",
      imageAlt: "Screenshot of bank settings from the supervision console.",
    },
    adminManagement: {
      title: "Administrator management",
      details: ["As administrator of a bank or as superadministrator, invite other administrators."],
      imageAlt: "Screenshot of the table on the superadministrator page of administrator management",
    },
    prefilledWebsites: {
      title: "Pre-filled websites",
      details: [
        "To simplify the manual addition of accounts in the application, pre-configure here the websites used in your company. These websites will be offered for pre-filling on the page for adding an account to your bank's users.",
      ],
      imageAlt: "Screenshot of the table of pre-set websites",
    },
    msEntra: {
      title: "Microsoft Entra connection",
      details: [
        "Connect your UpSignOn PRO bank to your Microsoft Entra environment to manage users authorised to open an UpSignOn PRO vault directly in Microsoft Entra. If an employee leaves or is removed from the UpSignOn group, their vault will be automatically deactivated.",
      ],
      imageAlt: "Screenshot of the Microsoft Entra configuration interface in the supervision console.",
    },
    passwordAwarenessCampaigns: {
      title: "Help with password awareness campaigns",
      details: [
        "Get the email addresses of users who still have weak passwords or don't use their vault and send them targeted awareness campaigns.",
      ],
      imageAlt: "Screenshot of the “Other requests” page in the supervision console.",
    },
  },
  resources: {
    tutorials: "Tutorials",
    technicalExplanations: "Technical explanations",
    technicalExplanationsMetaDesc: "All our articles to help you understand the inner workings of UpSignOn.",
    onPremDoc: "Linux self-hosting : installation documentation",
    generalDesignPrinciples: "How the PERSO and PRO vaults work",
    browserExtensionSecurity: "Operation and security principles of the browser extension",
    releaseNotes: "Release notes",
    articles: "Blog",
    contractualCommitments: "Our contractual commitments",
  },
  techResources: {
    protectedClipboardBehaviour: {
      metaDescription:
        "Explanation of the behavior differences of the clipboard protection function on different platforms.",
      title: "Details of how the secure clipboard works",
      ios: "Sensitive information added to the clipboard is automatically deleted after 45 seconds, even if the application is turned off.",
      desktop:
        "Sensitive information added to the clipboard is automatically deleted after 45 seconds, provided the app is not turned off (it can be minimized or in the background).",
      android: {
        intro:
          "Android's clipboard contains around twenty history items. What's more, Android doesn't allow you to target the information to be deleted. We have therefore made the following design choices:",
        intro_1: "clipboard protection is disabled by default on Android;",
        intro_2:
          "when the user decides to enable it, the entire clipboard history is erased after 45 seconds and the most recent item gets the value “UpSignOn security” to remind the user why their history has disappeared;",
        intro_3:
          "as of Android N, information added to the clipboard by UpSignOn is marked “sensitive”, which tells Android not to display it on the screen when using the clipboard.",
        remark:
          "Note that the application does not have to be completely closed for this to work. It can, however, be in the background.",
      },
    },
  },

  releaseNotes: {
    metaDescription:
      "Detailed release notes for the various components of UpSignOn (application, browser extension, PRO server, PRO supervision console).",
    app: "Application",
    extension: "Browser extension",
    server: "PRO server",
    dashboard: "PRO supervision console",
  },
  articles: {
    metaDescription: "All our articles to better understand the password and cybersecurity world.",
    readArticle: "read article",
    1: {
      metaDescription:
        "Understand what a strong password really is, what a brute force attack and a dictionary attack are and their implications on how to create hacker resistant passwords.",
      title: "What is a strong password?",
      summary:
        "A password that contains special characters? Yes and no. It's actually the size that matters most. Explanations.",
      instantly: "Instantly",
      day: "d",
      month: "month",
      years: "years",
      mYears: "M years",
      bYears: "Billion years",
    },
    2: {
      metaDescription:
        "Understand why it's urgent that you use different passwords on all your accounts and what you can do in practice to achieve this.",
      title: "Are you using the same password everywhere?",
      summary: "Stop! This is a really bad idea! We'll explain why.",
    },
    3: {
      metaDescription:
        "Discover the full range of password security issues and understand how adopting a password vault in your business can address them.",
      title: "Why use a password manager?",
      summary: "The strong case for using a password vault.",
    },
    4: {
      metaDescription:
        "Let's dig into the concepts of logical security, cryptographic security, zero-trust design and zero-knowledge design.",
      title: "Focus on 4 concepts of computer security",
      summary: "We often hear that no system is infallible. It depends on what we're talking about...",
    },
    5: {
      metaDescription:
        "Get a good understanding of the different authentication factors (knowledge, inherence, possession) and what MFA, 2FA and strong authentication really are.",
      title: "MFA, 2FA, strong authentication: what are the differences?",
      summary: "Definitions and explanations of these fundamental concepts.",
    },
    6: {
      metaDescription:
        "A practical guide to adopting the right reflexes when surfing the Internet to avoid falling victim to scams and phishing.",
      title: "How to detect insecure websites?",
      summary: "Practical guide to adopting good reflexes when browsing the internet.",
    },
    7: {
      metaDescription:
        "Your personal data, which you often think is harmless, can in fact be used to steal your identity, your money or the money of your loved ones!",
      title: "Do you think that your personal data is of no interest to hackers?",
      summary: "Here's why your data is worth gold to them.",
    },
    8: {
      metaDescription:
        "Use a dedicated password vault for greater security, portability, to be able to share your secrets, keep your pro and personal passwords well separated, add notes and TOTP, and supervise passwords across your business.",
      title: "Browser vs. dedicated password vault",
      summary: "What's the point of using a dedicated password vault when your browser already offers a built-in tool?",
    },
    9: {
      metaDescription:
        "Developers, stop making these common mistakes: imposing a maximum number of characters that is too low, imposing passwords that are too complex, imposing password changes that are too frequent and preventing robots from filling in your forms.",
      title: "Developers: common misconceptions about login forms",
      summary:
        "Require the use of special characters, limit the length of passwords, force passwords to be changed regularly...",
    },
    10: {
      metaDescription:
        "Your employees are the weak link in your cyber defence, particularly via their passwords. Find out why and how to help them strengthen their passwords.",
      title: "Cyber threats, what if we talked about your employees' passwords?",
      summary: "Summary of the issues.",
    },
  },
};

export default translations;

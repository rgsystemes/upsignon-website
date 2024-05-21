import fr from "./fr";

const translations: typeof fr = {
  menu: {
    features: "Features",
  },
  features: {
    pageTitle: "Features",
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
    generalSubtitle: "General",
    proPerso: {
      title: "PRO & PERSO vaults",
      details: [
        "UpSignOn offers you two types of vaults, both similar in their user interface, but technically different.",
        "The PERSO vault is designed for your private, non-business use. It is totally secure and private by design. However, its secret-sharing system is not suitable for teams of more than a few people.",
        "PRO vaults are offered by your employer or IT security manager to give you the means to achieve 100% strong, unique passwords. Your CIO or CISO can monitor progress towards this objective from the supervision console, which gives him/her access to the strength of the passwords stored in the PRO vaults. This console does not, of course, give direct access to your passwords and other secrets. What's more, with the PRO vaults, it will be much easier for you to share secrets with your colleagues simply by entering their email address.",
      ],
      imageAlt: "Screenshot showing the PRO and PERSO vaults in the application.",
      techFocusTitle: "PRO vs PERSO vaults",
    },
    crossPlatform: {
      title: "Available on smartphones, tablets and computers",
      details: [
        "Access your passwords securely on all your devices. The interface remains exactly the same on all screen sizes.",
      ],
      imageAlt: "Screenshots of the application on a smartphone, tablet and computer",
    },
    syncing: {
      title: "Automatic synchronisation between your devices",
      details: [
        "Changes you make on one device are automatically synchronised with your other authorised devices. There is no limit to the number of authorised devices.",
      ],
      imageAlt: "",
    },
    dataSubtitle: "Manage your passwords, TOTP and bank details",
    unlimitedAccounts: {
      title: "Add unlimited internet accounts",
      details: [
        "In UpSignOn, you can add as many internet accounts as you like, including PERSO vaults which are free. Typically, you'll store the password and address for each of your websites.",
      ],
    },
    unlimitedCodes: {
      title: "Add unlimited codes",
      details: [
        "You can also save codes in your vault (building code, lock code, alarm code, etc.) Their display is simpler than that of internet accounts.",
      ],
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
        readOnly: {
          title: "Read only:",
          def: "the recipient can not change anything in the shared element.",
        },
        editor: {
          title: "Editor:",
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
    autofillDesktop: {
      title: "Automatic filling in of forms via the browser extension",
      details: [
        "Install our browser extension to have UpSignOn automatically fill out most login forms as you browse the Internet.",
        "This extension is available for all Chromium browsers (Google Chrome, Microsoft Edge, Brave), for Firefox and for Safari on macOS.",
        "NB: the Safari extension ships directly with the application, but you need to activate it manually via the Safari Settings menu.",
      ],
      imageAlt: "Screenshot of a the UpSignOn extension",
    },
    autosaveDesktop: {
      title: "Automatic saving of passwords via the browser extension",
      details: [
        "Our browser extension also detects passwords you manually type and lets you save them directly to your vault effortlessly.",
      ],
      imageAlt: "Screenshot of the UpSignOn extension suggesting to save a new password.",
    },
    autofillIOS: {
      title: "Semi-automatic filling in of identifiers on iOS",
      details: [
        "UpSignOn integrates with the keyboard to offer you semi-automatic filling in of the identifiers stored in your vault in the login forms you encounter, both when browsing the Internet and in your applications.",
        'This feature can be activated from the Settings application, menu "Passwords", menu "Password options"',
      ],
      imageAlt: "Screenshot of a keyboard on iOS proposing filling in a form using UpSignOn.",
    },
    autofillAndroid: {
      title: "Semi-automatic filling in of identifiers on Android",
      details: [
        "UpSignOn integrates with Android to offer you semi-automatic filling in of the identifiers stored in your vault in the login forms you encounter, both when browsing the Internet and in your applications.",
        "This feature can be activated directly from the settings page of UpSignOn",
      ],
      imageAlt: "Screenshot of a web login forl on Android displaying UpSignOn's autofill interface.",
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
        "In addition to searching, you can filter you vault by secret type (account or code), by password strength, or display only shared elements. You can also choose to hide elements of the root folder if you have many of them.",
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
      title: "CSV & XML import",
      details: [
        "You have passwords saved in your browser or in another tool? Export them in .csv format and import them into your UpSignOn vault in just a few clicks!",
        "NB : to transfer your date from KeePass, prefer to use the XML format to preserver the tree structure of your folders.",
        "Remember to completely erase the CSV (or XML) file once you have finished importing so that your secrets are not accessible in an unprotected format!",
      ],
      imageAlt: "Screenshot of the CSV import page.",
    },
    csvExport: {
      title: "CSV export",
      details: [
        "If you decide to change tools, you can export your passwords in .csv format at any time and re-import them into another tool.",
        "Please note that this function is not designed to back up your data. We offer dedicated and secure mechanisms for this purpose.",
      ],
      warningPro:
        "NB PRO vaults: this feature is disabled by default and can only be activated by an administrator from the supervision console (see below).",
      imageAlt: "Screenshot of the CSV export button.",
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
    },
    mfaByDesign: {
      title: "Multi-factor authentication (MFA) by design",
      details: [
        "Unlocking your vault always requires two authentication factors: your master password and an authorised device",
        "Simply using one of your devices is one first proof of authentication. You only need to enter your master password to unlock your vault.",
      ],
    },
    biometricUnlock: {
      title: "Biometric unlocking (facial recognition, fingerprint, Windows Hello)",
      details: [
        "Save time by activating this option. Biometric unlocking replaces the need to enter your master password.",
        "Please note that you will still need to enter your master password to enrol a new device or to use the option to recover your data from a backup with a trusted contact.",
        "NB: on Windows, this option activates Windows Hello. This means that any Windows Hello unlock option will work to unlock your vault.",
      ],
    },
    forgottenPassword: {
      title: "Forgotten password",
      details: [
        "UpSignOn incorporates secure mechanisms to allow you to reset your master password if you forget it. This mechanisms only work from an authorised device.",
        "For PRO vaults, this mechanism is activated on each authorised device after the master password is first entered on the device and cannot be deactivated. If you forget your master password, the reset request must be validated by an administrator of your bank.",
        "For PERSO vaults, you must manually activate this option with one or more trusted contact(s). If you forget your master password, one of these trusted contacts can help you reset it.",
        "In both cases, neither the PRO administrator nor the trusted contact is able to recover your password.",
      ],
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
    },
    screenshotProtection: {
      title: "Protection against screenshots and screen sharing",
      details: [
        "Screenshots and screen sharing of the application are bloqued by default.",
        "To avoid difficulties during potential user support sessions, this protection is only activated after a vault has been unlocked.",
        "You can disable this protection for a limited time (configurable) from the settings page.",
      ],
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
      details: [
        "Deactivate offline mode, activate CSV export and choose the authorised platforms, require manual validation for enrolling a second device.",
      ],
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
  techResources: {
    protectedClipboardBehaviour: {
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
};

export default translations;

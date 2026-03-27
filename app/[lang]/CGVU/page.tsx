import { Metadata } from "next";
import { getDictionary } from "../../../translations/translations";
import styles from "./page.module.css";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const t = getDictionary(lang);
  return {
    title: t.CGVU.pageTitle,
    description: t.CGVU.metaDescription,
    alternates: {
      canonical: "https://upsignon.eu/fr/CGVU",
      languages: {
        fr: "https://upsignon.eu/fr/CGVU",
        en: "https://upsignon.eu/en/CGVU",
      },
    },
  };
}
export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = getDictionary(lang);
  return lang === "fr" ? CGVUFr(t) : CGVUEn(t);
}

function CGVUFr(t: ReturnType<typeof getDictionary>) {
  return (
    <div className={styles.content}>
      <header className={styles.header}>
        <h1>{t.CGVU.pageTitle}</h1>
        <p>SEPTEO IT SOLUTIONS</p>
        <p className={styles.headerAppName}>UPSIGNON by Septeo</p>
        <p>
          <strong>Version en vigueur le 24-07-2025</strong>
        </p>
      </header>
      <nav aria-label="Sommaire">
        <h2>Sommaire</h2>
        <ol>
          <li>
            <a href="#preambule">Préambule</a>
          </li>
          <li>
            <a href="#definitions">Définitions</a>
          </li>
          <li>
            <a href="#objet">Objet</a>
          </li>
          <li>
            <a href="#acces">Accès à UpSignOn</a>
          </li>
          <li>
            <a href="#duree">Durée</a>
          </li>
          <li>
            <a href="#modalites-financieres">Modalités financières</a>
          </li>
          <li>
            <a href="#obligations-client">Obligations du Client</a>
          </li>
          <li>
            <a href="#support">Support</a>
          </li>
          <li>
            <a href="#mises-a-jour">Mises à jour</a>
          </li>
          <li>
            <a href="#hebergement">Hébergement</a>
          </li>
          <li>
            <a href="#propriete-intellectuelle">
              Droits de propriété intellectuelle – Licence d’utilisation
            </a>
          </li>
          <li>
            <a href="#garantie-responsabilite">Garantie – Responsabilité</a>
          </li>
          <li>
            <a href="#resiliation">Résiliation</a>
          </li>
          <li>
            <a href="#reversibilite">Réversibilité</a>
          </li>
          <li>
            <a href="#donnees-personnelles">
              Protection des données à caractère personnel
            </a>
          </li>
          <li>
            <a href="#force-majeure">Force majeure</a>
          </li>
          <li>
            <a href="#sous-traitance">Sous-traitance</a>
          </li>
          <li>
            <a href="#confidentialite">Confidentialité</a>
          </li>
          <li>
            <a href="#droit-litiges">Langue – Droit applicable – Litiges</a>
          </li>
          <li>
            <a href="#formulaire-retractation">
              Modèle de formulaire de rétractation
            </a>
          </li>
        </ol>
      </nav>
      <article>
        <section id="preambule">
          <h2>1. Préambule</h2>

          <p>
            À titre liminaire il est rappelé que le produit UpSignOn by Septeo
            est essentiellement adressé à des professionnels. Le Client déclare
            reconnaître que dans l’hypothèse où il remplirait les conditions de
            l’article L 221-3 du Code de la Consommation, il bénéficie d’un
            droit de rétractation de 14 jours au moyen du formulaire annexé.
          </p>

          <p>
            Les présentes conditions générales (ci-après dénommées{" "}
            <strong>CG</strong>) sont applicables à toute souscription
            d’Abonnement au produit UpSignOn de SEPTEO IT SOLUTIONS.
          </p>

          <p>
            Elles constituent une partie intégrante du Contrat établi entre
            SEPTEO IT SOLUTIONS et le Client et prévalent sur toutes autres
            dispositions contractuelles et commerciales quelles qu’elles soient,
            y compris celles figurant sur les documents commerciaux du Client,
            l’acceptation des présentes par le Client emportant pour autant que
            de besoin renonciation à invoquer ses propres conditions générales
            si elles existent.
          </p>

          <p>
            Sauf disposition expresse contraire, en cas de contrats successifs,
            la disposition contractuelle la plus récente annule la précédente
            lorsque ces deux dispositions sont contradictoires.
          </p>
        </section>

        <section id="definitions">
          <h2>2. Définitions</h2>

          <dl>
            <dt>ABONNEMENT</dt>

            <dd>
              Désigne la modalité d’accès aux services UpSignOn souscrite par le
              Client.
            </dd>

            <dt>ADMINISTRATEUR</dt>

            <dd>
              Désigne toute personne placée sous la responsabilité directe ou
              indirecte du Client, ayant accès à la Console de supervision.
            </dd>

            <dt>ANOMALIES</dt>

            <dd>
              Désigne tout dysfonctionnement dégradant ou paralysant
              l’exploitation des Services ou une ou plusieurs de leurs
              fonctionnalités.
            </dd>

            <dt>APPLICATION</dt>

            <dd>
              Désigne l’application mobile ou de bureau « UpSignOn by Septeo ».
            </dd>

            <dt>CLIENT</dt>

            <dd>
              Désigne la personne physique ou morale qui souscrit un Abonnement.
            </dd>

            <dt>COFFRE-FORT de mot de passe</dt>

            <dd>
              Désigne un conteneur sécurisé, disponible via l’Application, dédié
              à un Utilisateur, dans lequel sont enregistrées les informations
              saisies par l’Utilisateur ou partagées par un autre Utilisateur.
            </dd>

            <dt>COMPTE (PERSONNEL)</dt>

            <dd>
              Désigne les comptes des Utilisateurs sur les sites ou applications
              tiers dont les codes d’accès sont susceptibles d’être enregistrés
              dans un Coffre-fort, ainsi que plus largement, les différents
              codes enregistrés par l’Utilisateur dans son Coffre-fort de mot de
              passe.
            </dd>

            <dt>CONSOLE DE SUPERVISION</dt>

            <dd>
              Désigne l’interface web mise à la disposition des Administrateurs
              désignés par le Client afin d’accéder aux données concernant sa ou
              ses Banques et les Coffres-forts qu’elles contiennent et
              permettant d’en assurer la gestion.
            </dd>

            <dt>DOCUMENTATION</dt>

            <dd>
              Désigne l’ensemble des manuels et/ou aides en ligne, Prérequis
              Techniques, rédigés en langue française fournis sur support(s)
              papier et/ou électronique, décrivant les fonctionnalités de
              UPSIGNON.
            </dd>

            <dt>DONNÉES</dt>

            <dd>
              Désignent tous contenus, informations, documents et d’une manière
              générale toutes données du Client, de ses Utilisateurs et/ou
              stockées sur les appareils ayant installé UpSignOn.
            </dd>

            <dt>ÉVOLUTION</dt>

            <dd>
              Désigne toute nouvelle version du Produit comprenant une ou
              plusieurs nouvelles fonctionnalités.
            </dd>

            <dt>EXTENSION DE NAVIGATEUR</dt>

            <dd>
              Désigne le programme/extension/plugin/addon « UpSignOn » installé
              au sein d’un navigateur permettant notamment d’interagir avec le
              contenu des pages web visitées par l’Utilisateur.
            </dd>

            <dt>HÉBERGEMENT</dt>

            <dd>
              Désigne l’infrastructure technique commune permettant le
              fonctionnement du Produit.
            </dd>

            <dt>IDENTIFIANTS</dt>

            <dd>
              Désigne l’identifiant technique et le mot de passe permettant
              l’accès à un Coffre-fort.
            </dd>

            <dt>PRÉREQUIS TECHNIQUES</dt>

            <dd>
              Désigne la liste des matériels et dispositifs requis ou préconisés
              par SEPTEO IT SOLUTIONS pour l’utilisation du Produit et décrits
              dans la Documentation.
            </dd>

            <dt>PRODUIT</dt>

            <dd>
              Désigne l’ensemble des composants et programmes mis à la
              disposition du Client par SEPTEO IT SOLUTIONS suivant souscription
              d’un Abonnement et permettant de délivrer les Services au Client
              et à ses Utilisateurs. Il s’agit notamment de l’Application, de
              l’Extension de navigateur et de la Console de supervision.
            </dd>

            <dt>SERVICES</dt>

            <dd>
              Désigne les services de coffre-fort de mots de passe proposés par
              le Produit.
            </dd>

            <dt>SUPPORT</dt>

            <dd>
              Désigne les prestations de support fournies par SEPTEO IT
              SOLUTIONS. Les modalités précises de mise en œuvre de la
              maintenance sont décrites dans la Documentation.
            </dd>

            <dt>TICKET D’INTERVENTION</dt>

            <dd>
              Désigne la consignation informatique de tout appel et/ou demande
              d’intervention du Client ainsi que toute intervention de SEPTEO IT
              SOLUTIONS.
            </dd>

            <dt>UTILISATEUR</dt>

            <dd>
              Désigne toute personne placée sous la responsabilité directe ou
              indirecte du Client, utilisant le Produit.
            </dd>
          </dl>
        </section>

        <section id="objet">
          <h2>3. Objet</h2>

          <p>
            Les présentes conditions générales ont pour objet de définir les
            conditions et modalités suivant lesquelles UPSIGNON est mis à la
            disposition du Client dans le cadre d’un Abonnement.
          </p>

          <p>
            Le Client se porte fort du respect des présentes conditions par tous
            les Utilisateurs.
          </p>
        </section>

        <section id="acces">
          <h2>4. Accès à UPSIGNON</h2>

          <p>
            Les procédures d’accès aux composants du Produit, de création de
            Coffre-fort et de connexion, décrites dans la Documentation doivent
            être strictement respectées par le Client.
          </p>

          <p>
            La création préalable d’un Coffre-fort est nécessaire à
            l’utilisation du Produit. Le Client est responsable de la
            confidentialité de ses Identifiants.
          </p>

          <p>
            Le Coffre-fort donne accès aux Comptes et aux Données de
            l’Utilisateur et à la possibilité de disposer des Services. Les
            Identifiants de Coffre-fort sont destinés à réserver l’accès aux
            Données contenues dans le Coffre-fort à l’Utilisateur ayant créé
            ledit Coffre-fort.
          </p>

          <p>
            Toute connexion ou opération effectuée via les Identifiants d’un
            Utilisateur est réputée effectuée par lui.
          </p>

          <p>
            SEPTEO IT SOLUTIONS ne sera en aucun cas responsable de l’accès au
            contenu d’un Coffre-fort par un tiers au moyen des Identifiants
            personnels des Utilisateurs du Client.
          </p>
        </section>

        <section id="duree">
          <h2>5. Durée</h2>

          <p>
            Les Abonnements sont souscrits pour la durée prévue dans la
            proposition commerciale. Ils sont renouvelés par tacite reconduction
            pour une ou plusieurs périodes de même durée, sauf à l'une des
            parties à résilier unilatéralement par notification effectuée par
            lettre recommandée avec avis de réception au moins un (1) mois avant
            la date anniversaire du Contrat.
          </p>
        </section>

        <section id="modalites-financieres">
          <h2>6. Modalités financières</h2>

          <section>
            <h3>6.1 Prix</h3>

            <p>
              Le Service est fourni suivant les tarifs en vigueur indiqués dans
              la proposition commerciale.
            </p>
          </section>

          <section>
            <h3>6.2 Révision des prix</h3>

            <p>
              SEPTEO IT SOLUTIONS peut faire évoluer tout ou partie des prix au
              cours de l’Abonnement. Dans ce cas, le Client en est informé par
              tout moyen écrit a minima deux mois avant l’entrée en vigueur des
              nouveaux prix. Si le Client bénéficie d’un abonnement annuel, le
              changement de prix interviendra à la date anniversaire du Contrat.
            </p>

            <p>
              À défaut d’accord, le Client pourra résilier l’Abonnement suivant
              les modalités de l’article « Résiliation » sans aucune pénalité.
            </p>
          </section>

          <section>
            <h3>6.3 Modalités de facturation</h3>

            <p>
              Sauf disposition contraire, toute facture doit être payée à
              l’adresse du siège social de SEPTEO IT SOLUTIONS figurant sur la
              facture au plus tard 30 jours à compter de la date d’émission de
              la facture. Aucun escompte ne sera consenti en cas de paiement
              anticipé.
            </p>

            <p>
              Tout retard de paiement emportera de plein droit, passé un délai
              de quinze jours à compter de la réception par le Client d’une
              lettre de mise en demeure restée sans effet, d’un intérêt de
              retard calculé sur le montant Hors Taxes de l’impayé du jour de
              son échéance au jour du règlement au taux de 1,5 % par mois. Tout
              mois commencé est dû en entier.
            </p>

            <p>
              SEPTEO IT SOLUTIONS aura droit également à une indemnité
              forfaitaire pour frais de recouvrement de 40 euros.
            </p>

            <p>
              Lorsque les frais de recouvrement seront supérieurs au montant de
              l’indemnité forfaitaire, SEPTEO IT SOLUTIONS pourra demander une
              indemnisation complémentaire sur justification.
            </p>

            <p>
              L’absence de contestation d’une facture dans un délai de quinze
              jours présume de son acceptation. Toute contestation doit être
              adressée par lettre recommandée ou par une voie électronique
              équivalente permettant de s’assurer de l’envoi, de la réception et
              du contenu du message.
            </p>

            <p>
              En cas de litige survenant entre parties, quelle que soit la
              source du litige et nonobstant son existence, les factures non
              contestées au moment de la survenance du litige doivent être
              payées. Il ne peut y avoir de compensation entre d’éventuels
              dommages et intérêts réclamés par le Client et les factures non
              contestées.
            </p>
          </section>

          <section>
            <h3>6.4 Incidents de paiement</h3>

            <p>
              En cas de défaut de paiement à échéance, les sommes dues par le
              Client donneront lieu au paiement d’une indemnité forfaitaire pour
              frais de recouvrement d’un montant de quarante (40) euros et font
              courir intérêt à compter de la date d’échéance à un taux égal à
              trois (3) fois le taux d’intérêt légal en vigueur, calculé prorata
              temporis et ceci par jour, décompté de date à date, de l’échéance
              jusqu’au jour du paiement.
            </p>

            <p>
              Suivant mise en demeure restée infructueuse dans le délai indiqué,
              SEPTEO IT SOLUTIONS pourra suspendre le Service ; le cas échéant,
              SEPTEO IT SOLUTIONS s'engage à rétablir le Service dans les plus
              brefs délais suivant régularisation des arriérés de paiement et
              éventuels intérêts de retard et pénalités.
            </p>

            <p>
              Dans le cas où la régularisation du Client n’intervienne pas dans
              un délai de soixante (60) jours suivant la date d’échéance de la
              facture correspondante, SEPTEO IT SOLUTIONS se réserve le droit,
              sans notification supplémentaire du Client, d’externaliser le
              recouvrement de sa créance et de prendre les dispositions
              nécessaires à la réparation de son préjudice.
            </p>
          </section>
        </section>

        <section id="obligations-client">
          <h2>7. Obligations du Client</h2>

          <p>Le Client s’engage à :</p>

          <ul>
            <li>
              Se conformer à la Documentation ainsi qu’aux prérequis techniques
              et de sécurité ;
            </li>

            <li>
              Utiliser le Produit conformément à toutes les réglementations en
              vigueur lui étant applicables ;
            </li>

            <li>
              Ne pas traiter, via le Produit, d’informations dont le contenu ou
              l’exploitation seraient susceptibles de violer un droit de
              propriété intellectuelle ou industrielle ou tout autre droit
              privatif ;
            </li>

            <li>
              Collaborer avec SEPTEO IT SOLUTIONS et son personnel notamment en
              fournissant toutes les informations et documents utiles à la bonne
              exécution des prestations prévues au titre du Contrat et notamment
              s’agissant du support ;
            </li>

            <li>
              Prévenir SEPTEO IT SOLUTIONS de tous bogues, failles ou risques de
              sécurité qu’il pourrait subir ou détecter sur le Produit ;
            </li>

            <li>
              Accepter et collaborer à l’installation de toutes les mises à jour
              ou autres correctifs de toute sorte et de toute nature,
              nécessaires pour le bon fonctionnement et/ou la sécurité du
              Produit.
            </li>
          </ul>

          <p>
            En tout état de cause, le Client reconnaît qu’il assume l’entière
            responsabilité de toutes les actions entreprises par lui et/ou
            Utilisateurs, portant, directement ou indirectement, sur le Produit.
          </p>
        </section>

        <section id="support">
          <h2>8. Support</h2>

          <p>
            SEPTEO IT SOLUTIONS apporte au Client, pendant toute la durée du
            Contrat, un service de support.
          </p>

          <p>
            Tout Utilisateur peut signaler à SEPTEO IT SOLUTIONS toute Anomalie,
            par téléphone <a href="tel:+33411803715">04 11 80 37 15</a> du lundi
            au vendredi de 9h à 12h30 et de 13h45 à 18h ou par mail à{" "}
            <a href="mailto:help-ITsolutions@septeo.com">
              help-ITsolutions@septeo.com
            </a>
            .
          </p>

          <p>Il doit décrire avec précision les circonstances de l’Anomalie.</p>

          <p>
            En cas d’Anomalies, sauf dans les cas pour lesquels sa
            responsabilité ne saurait être engagée et en dehors des périodes
            d’indisponibilité liées aux interruptions de ligne et des heures non
            ouvrées, SEPTEO IT SOLUTIONS s’engage à mettre en œuvre tous les
            moyens dont il dispose pour assurer la continuité des Services dans
            les meilleurs délais à compter du signalement effectué par le
            Client, les heures ouvrées s’entendant des heures d’accessibilité à
            la maintenance visée ci-dessus, le Client autorisant expressément
            SEPTEO IT SOLUTIONS à intervenir sur le Produit dès détection d'une
            anomalie. Cette prestation est réalisée à distance.
          </p>

          <p>
            Le Client d'une part coopérera de façon loyale et honnête avec
            SEPTEO IT SOLUTIONS et d'autre part se comportera de façon
            raisonnable et ce dans le but de permettre à SEPTEO IT SOLUTIONS
            d'analyser et de corriger l'Anomalie dans les meilleures conditions.
          </p>

          <p>
            SEPTEO IT SOLUTIONS ne sera pas responsable du support dans les cas
            suivants : refus du Client de collaborer dans la résolution de
            l’Anomalie et notamment de répondre aux questions et demandes de
            renseignement, utilisation du Produit de manière non conforme à sa
            destination ou à la Documentation, manquement du Client à ses
            obligations contractuelles, défaillance des réseaux de communication
            électronique et électrique ; acte volontaire de dégradation,
            malveillance, sabotage ; détérioration due en cas de force majeure
            ou à une mauvaise utilisation du Produit par le Client.
          </p>
        </section>

        <section id="mises-a-jour">
          <h2>9. Mises à jour</h2>

          <p>
            L’Application, l’Extension de navigateur et la Console de
            supervision font l’objet d’une maintenance régulière afin d’en
            garantir le bon fonctionnement.
          </p>

          <p>
            SEPTEO IT SOLUTIONS tiendra compte des remontées d'informations et
            attentes exprimées par les Utilisateurs et s'engage à mettre en
            œuvre les moyens dont il dispose pour faire évoluer les Services en
            ligne et les Applications dont il est l'auteur et pour tenir compte
            de l'évolution des meilleurs standards techniques et des besoins du
            marché. SEPTEO IT SOLUTIONS s'engage à maintenir les fonctionnalités
            et caractéristiques des Services.
          </p>

          <p>
            SEPTEO IT SOLUTIONS n’est cependant en aucun cas tenu de fournir,
            dans le cadre de son obligation de maintenance, la nouvelle version
            de ses Applications ou ses nouvelles options qui feront alors
            l’objet d’une nouvelle offre commerciale auprès du Client.
          </p>

          <p>
            SEPTEO IT SOLUTIONS se réserve le droit de modifier à tout moment
            les différents composants du Produit, y compris de publier des
            mises-à-jour non rétro-compatibles avec les anciennes versions du
            même ou des autres composants. SEPTEO IT SOLUTIONS se réserve
            également le droit d’imposer une version minimum de chaque
            composant.
          </p>

          <p>
            SEPTEO IT SOLUTIONS se réserve également le droit de procéder, lors
            de ces mises-à-jour, à des changements de structure interne des
            données qui seront dans la mesure du possible opérés de façon
            transparente pour les utilisateurs dès l’application de la
            mise-à-jour du ou des composants. Cependant, la nature de ces
            changements implique nécessairement que la connaissance de l’ancien
            et du nouveau format soit maintenue dans le code des différents
            composants impliqués pour permettre la bonne migration des données.
          </p>

          <p>
            SEPTEO IT SOLUTIONS se réserve le droit, au cours d’une mise-à-jour
            majeure, de supprimer dans le code de ses logiciels tous les
            algorithmes et fonctions permettant de lire et de migrer les données
            d’un ancien format jugé obsolète depuis suffisamment longtemps,
            cette durée relevant de sa seule appréciation.
          </p>

          <p>
            Le Client s’engage donc à appliquer, auprès de tous ses
            utilisateurs, toutes les mises-à-jour des composants dans un délai
            raisonnable après leur publication et à demander à tous les
            utilisateurs de procéder au déverrouillage de tous leurs
            coffres-forts enregistrés dans l’application après chaque
            mise-à-jour afin de garantir la bonne migration des données. SEPTEO
            IT SOLUTIONS décline toute responsabilité en cas de perte de données
            résultant de la non-application de cette règle, et notamment si le
            Client procède à un saut de version majeure.
          </p>
        </section>

        <section id="hebergement">
          <h2>10. Hébergement</h2>

          <p>Les serveurs de SEPTEO IT SOLUTIONS sont localisés en France.</p>

          <p>
            SEPTEO IT SOLUTIONS s'engage à prendre les mesures physiques,
            logiques et organisationnelles raisonnables et conformes à l'état de
            l'art et de la technique de nature à préserver l’intégrité des
            données et du Produit.
          </p>

          <p>
            Le Client est informé que le réseau internet peut présenter des
            aléas techniques et des risques de sécurité extérieurs aux moyens
            techniques mis en œuvre par SEPTEO IT SOLUTIONS.
          </p>

          <p>
            SEPTEO IT SOLUTIONS ne sera pas responsable des défaillances des
            fournisseurs d’accès ou autres opérateurs de réseaux de transport de
            données tiers (notamment défaillance dans les liaisons câblées «
            cross connect », défaut de fiabilité des lignes de connexion,
            fluctuation de la bande passante, interruptions, etc.), y compris
            des conséquences de telles défaillances, notamment lorsqu’elles
            entraînent une indisponibilité et/ou une discontinuité de la
            disponibilité du Produit.
          </p>

          <p>
            En outre, les coûts d’accès au Produit sont également à la charge
            exclusive du Client, qui fait son affaire personnelle de souscrire
            ou faire souscrire les abonnements de télécommunication nécessaires.
          </p>
        </section>

        <section id="propriete-intellectuelle">
          <h2>
            11. Droits de propriété intellectuelle – Licence d’utilisation
          </h2>

          <section>
            <h3>11.1 Propriété du Produit</h3>

            <p>
              SEPTEO IT SOLUTIONS conserve les droits exclusifs de propriété
              intellectuelle du Produit et de la Documentation et de toutes les
              informations associées, ainsi que toutes les prérogatives se
              rattachant au Produit, tant dans sa version initiale que dans ses
              versions ultérieures.
            </p>

            <p>
              Il est expressément précisé par SEPTEO IT SOLUTIONS que le Client,
              en dehors des droits concédés sur le Produit au titre des
              présentes, n’est pas autorisé à :
            </p>

            <ul>
              <li>
                Procéder ou faire procéder à l'ingénierie à rebours, au
                désassemblage, ou à la décompilation des composants du Produit ;
              </li>

              <li>
                Traduire, dupliquer, adapter, arranger, modifier, copier,
                transformer les composants du Produit, et ce, pour quelque
                raison que ce soit ;
              </li>

              <li>
                Vendre, louer, sous-licencier, mettre à disposition, prêter,
                distribuer de quelque façon que ce soit, le Produit, que ce soit
                à titre gratuit ou onéreux ;
              </li>
            </ul>

            <p>
              Le Client n'acquiert sur le Produit aucun autre droit que ceux qui
              lui sont expressément concédés aux termes du Contrat. Il
              n'acquerra notamment aucun droit de propriété à quelque moment que
              ce soit.
            </p>

            <p>
              Toute autre utilisation du Produit, non expressément autorisée par
              les présentes sera constitutive d’une faute contractuelle et d’un
              acte de contrefaçon, conformément aux textes et à la jurisprudence
              en vigueur.
            </p>

            <p>
              Le Client bénéficie sur le Produit, d’une licence personnelle
              d’utilisation non cessible, que ce soit à titre gratuit ou
              onéreux, et non exclusive, pour la durée de l’Abonnement souscrit
              ; ce, à l’exclusion de tout droit de propriété.
            </p>
          </section>

          <section>
            <h3>11.2 Propriété des signes distinctifs</h3>

            <p>
              Les marques de SEPTEO IT SOLUTIONS, ainsi que l’ensemble des
              marques, illustrations, logos, images figurant sur le Produit ou
              sur la Documentation, et, de manière générale, sur tous les
              documents transmis au Client par SEPTEO IT SOLUTIONS, sont et
              demeurent la propriété exclusive de ce dernier.
            </p>

            <p>
              Toute reproduction totale ou partielle, modification ou
              utilisation de ces marques, illustrations, images et logotypes,
              pour quelque motif et sur quelque support que ce soit, sans accord
              exprès et préalable de SEPTEO IT SOLUTIONS, est strictement
              interdite.
            </p>

            <p>
              Il en est de même de toute combinaison ou conjonction avec toute
              autre marque, symbole, logotype et plus généralement tout signe
              distinctif destiné à former un logo composite.
            </p>

            <p>
              Il en est de même pour tout droit d'auteur, dessin, modèle et
              brevet qui sont la propriété de SEPTEO IT SOLUTIONS ou sur
              lesquels il détient des droits de propriété intellectuelle.
            </p>
          </section>

          <section>
            <h3>11.3 Propriété des Données</h3>

            <p>
              Les Données appartiennent au Client et restent sa propriété
              exclusive.
            </p>

            <p>
              La reproduction ou l'utilisation des Données par SEPTEO IT
              SOLUTIONS, à d'autres fins que l'exécution du Contrat est
              strictement interdite sans l'autorisation préalable et écrite du
              Client.
            </p>
          </section>
        </section>

        <section id="garantie-responsabilite">
          <h2>12. Garantie – Responsabilité</h2>

          <section>
            <h3>12.1 Garantie</h3>

            <p>
              SEPTEO IT SOLUTIONS garantit la conformité du Produit aux
              définitions fonctionnelles et techniques figurant dans la
              Documentation.
            </p>

            <p>
              Cependant, SEPTEO IT SOLUTIONS ne garantit pas que le Produit soit
              exempt de tout défaut mais s'engage à faire ses meilleurs efforts
              pour remédier, avec toute la diligence raisonnablement possible,
              aux dysfonctionnements reproductibles constatés par rapport à sa
              Documentation.
            </p>
          </section>

          <section>
            <h3>12.2 Responsabilité</h3>

            <p>
              En cas de manquement par l’une ou l’autre des Parties à leurs
              obligations contractuelles, la responsabilité de la Partie
              défaillante pourra être engagée conformément aux présentes
              dispositions contractuelles.
            </p>

            <p>
              À ce titre, SEPTEO IT SOLUTIONS est toujours soumis à une
              obligation de moyens, sauf s’il en est expressément mentionné
              autrement pour une obligation précise, et sans que cette mention
              ne puisse s’étendre à d’autres obligations même liées.
            </p>

            <p>
              La responsabilité de SEPTEO IT SOLUTIONS ne peut être engagée
              qu'en cas de faute prouvée dans l'exécution de ses obligations et
              sera limitée aux préjudices directs du Client.
            </p>

            <p>
              La responsabilité de SEPTEO IT SOLUTIONS ne peut jamais être
              recherchée dans les cas suivants : quand les dommages invoqués par
              le Client résultent, même en partie, d’une mauvaise exécution ou
              d’une inexécution totale ou partielle des obligations lui
              incombant ; quand les dommages résultent d’une utilisation non
              conforme ; quand les dommages résultent dans leur origine ou leur
              étendue, des effets d’un virus informatique ; quand les dommages
              sont liés à l’indisponibilité ou à la perturbation du réseau du
              Client (LAN), du câblage ou du réseau de télécommunication ; quand
              les dommages sont liés à des éléments de l’installation
              informatique Hardware ou Software du Client sur lesquels SEPTEO IT
              SOLUTIONS n’intervient pas.
            </p>

            <p>
              SEPTEO IT SOLUTIONS n’est jamais tenu de réparer le préjudice
              indirect du Client (tel que le manque à gagner ou la perte de
              chance ou de bénéfices espérés, la perte d'informations ou les
              conséquences financières d'actions ou réclamations éventuellement
              engagées par des tiers à l'encontre du Client).
            </p>

            <p>
              Dans tous les cas de mise en cause de sa responsabilité, il est
              expressément convenu que le montant total des indemnités que
              SEPTEO IT SOLUTIONS pourrait être amené à verser au Client pour
              quelque raison que ce soit, est limité aux sommes effectivement
              perçues au titre de l’Abonnement par SEPTEO IT SOLUTIONS, au cours
              des douze (12) mois ayant précédé l’incident.
            </p>
          </section>

          <section>
            <h3>12.3 Exclusion de responsabilité</h3>

            <p>
              La responsabilité de SEPTEO IT SOLUTIONS ne saurait, en aucun cas,
              être engagée notamment dans les cas suivants :
            </p>

            <ul>
              <li>
                Anomalie non imputable au Produit ou « fugitive », c’est-à-dire
                non reproductible par le Client en présence de SEPTEO IT
                SOLUTIONS ou par SEPTEO IT SOLUTIONS seul ;
              </li>

              <li>
                Mauvais usage du Produit ou utilisation du Produit non conforme
                à sa destination et/ou aux prérequis et instructions de SEPTEO
                IT SOLUTIONS ;
              </li>

              <li>
                Modification ou altération (ou tentative de) du Produit par le
                Client ou par un tiers sans l’accord écrit préalable de SEPTEO
                IT SOLUTIONS ;
              </li>

              <li>
                Perte, altération ou utilisation frauduleuse du Produit ou des
                Données, rendues possibles du fait d’une faille de sécurité dans
                l’environnement informatique du Client ou d’une défaillance ou
                négligence de ce dernier ou d’un site web tiers ;
              </li>

              <li>
                Dégradation de performance ou dysfonctionnements, notamment
                coupures de réseaux dues à des arrêts de services sur la partie
                réseau gérée par des tiers, soit au-delà de la plateforme
                d’hébergement.
              </li>
            </ul>
          </section>
        </section>

        <section id="resiliation">
          <h2>13. Résiliation</h2>

          <p>
            En cas de manquement grave ou répété de l’une des Parties à l’une
            quelconque de ses obligations au titre du Contrat (en ce compris ses
            annexes et éventuels avenants), non réparé(s) dans un délai de
            trente (30) jours à compter de la réception par la Partie
            défaillante d’une mise en demeure adressée par lettre recommandée
            avec accusé de réception, la Partie victime de ce manquement pourra
            résilier le Contrat de plein droit.
          </p>

          <p>
            La résiliation effective du Contrat interviendra alors à compter du
            lendemain de la première présentation, d’une nouvelle lettre
            recommandée avec accusé de réception adressée par la Partie lésée.
            Ceci est sans préjudice de tout dommage et intérêts auxquels la
            Partie victime de ce manquement pourrait prétendre par ailleurs.
          </p>

          <p>
            En cas de non-respect par le Client des délais de paiement, SEPTEO
            IT SOLUTIONS en informera le Client d'abord par courrier
            dématérialisé sept jours après la date d'échéance des factures non
            payées puis par relances téléphoniques. À défaut de règlement dans
            un délai de 60 jours de la date d'échéance de la facture, SEPTEO IT
            SOLUTIONS pourra suspendre ses Services en respectant un préavis de
            huit (8) jours à compter de l’envoi au Client d’une mise en demeure
            par lettre recommandée avec accusé de réception. La suspension sera
            maintenue jusqu'au règlement de toutes sommes dues ou jusqu'à
            l'exécution parfaite de l'obligation contractuelle.
          </p>
        </section>

        <section id="reversibilite">
          <h2>14. Réversibilité</h2>

          <p>
            SEPTEO IT SOLUTIONS s’engage à donner la possibilité à chaque
            Utilisateur d’exporter la liste de ses mots de passe au format CSV
            depuis l’Application. Dans ce format, les données apparaissent en
            clair et peuvent être facilement réimportées dans un autre outil de
            gestion de mot de passe.
          </p>

          <p>
            Le Client pourra exporter des statistiques brutes à partir de sa
            Console de supervision.
          </p>
        </section>

        <section id="donnees-personnelles">
          <h2>15. Protection des données à caractère personnel</h2>

          <p>
            Chaque partie respectera les engagements prévus par les textes
            relatifs à la protection des données personnelles et notamment le
            Règlement UE 2016/679 en date du 27 avril 2016 « Règlement Général
            sur la Protection des Données ».
          </p>
        </section>

        <section id="force-majeure">
          <h2>16. Force majeure</h2>

          <p>
            La responsabilité de l'une ou l'autre des Parties ne pourra être
            recherchée si l'exécution du Contrat est retardée ou empêchée en
            raison d'un cas de force majeure tel que défini par l’article 1218
            du Code Civil.
          </p>

          <p>
            La Partie souhaitant invoquer un cas de force majeure devra le
            notifier à l'autre Partie dès qu'elle aura connaissance de la
            survenance d'un tel événement.
          </p>

          <p>
            Pendant sa durée, l'événement de force majeure suspend l'exécution
            des obligations des Parties. Dans tous les cas, la Partie affectée
            par l'événement de force majeure devra faire tout ce qui est en son
            pouvoir afin d'éviter, éliminer ou réduire les causes du retard et
            reprendre l'exécution de ses obligations dès que l'événement invoqué
            aura disparu.
          </p>

          <p>
            Si le cas de force majeure venait à excéder trente (30) jours ouvrés
            à compter de la notification visée ci-dessus, chaque Partie aura la
            faculté de notifier la résiliation de plein droit et sans indemnité
            du Contrat, sans autre formalité notamment judiciaire.
          </p>
        </section>

        <section id="sous-traitance">
          <h2>17. Sous-traitance</h2>

          <p>
            Le Client déclare accepter que SEPTEO IT SOLUTIONS puisse
            sous-traiter tout ou partie de l'exécution du Contrat à l'une
            quelconque des sociétés du groupe SEPTEO auquel appartient SEPTEO IT
            SOLUTIONS.
          </p>
        </section>

        <section id="confidentialite">
          <h2>18. Confidentialité</h2>

          <p>
            Chaque Partie s’engage à conserver le secret sur le contenu du
            Contrat ainsi que sur les informations confidentielles de l’autre
            Partie dont elle aura eu connaissance lors des négociations
            précontractuelles et à l’occasion de l’exécution du présent Contrat.
          </p>

          <p>
            Les Parties s’obligent expressément à tenir pour confidentielles et
            secrètes, à ne pas révéler aux tiers et à ne pas exploiter autrement
            que pour les besoins du Contrat, sous quelque forme que ce soit, la
            composition, l’état des systèmes informatiques de l’une ou l’autre
            des Parties, ainsi que tous les documents, éléments, données et
            informations qui seront transmis par le Client à SEPTEO IT SOLUTIONS
            ou vice-versa ou dont l’une ou l’autre des Parties pourra avoir
            connaissance dans l’exécution du Contrat.
          </p>

          <p>
            Sont également notamment par nature confidentielles toutes les
            informations relatives aux éléments commerciaux, techniques,
            financiers et structurels des Parties. Les programmes, Données et
            fichiers remis par le Client ou générés au cours des traitements
            exécutés par SEPTEO IT SOLUTIONS ainsi que leur mise à jour et les
            résultats issus des traitements constitueront des informations
            confidentielles, qu’ils soient ou non revêtus d’un avertissement de
            confidentialité.
          </p>

          <p>
            Cette obligation de confidentialité s’impose à l’une ou l’autre des
            Parties vis-à-vis de tout tiers. La présente obligation de
            confidentialité demeurera en vigueur pour une durée de deux (2) ans
            après l’expiration du présent Contrat, et ce, pour quelque cause que
            ce soit.
          </p>
        </section>

        <section id="droit-litiges">
          <h2>19. Langue – Droit applicable – Litiges</h2>

          <p>
            Les parties soumettent le présent contrat au droit français, à
            l’exclusion de toute autre législation. Il est rédigé en langue
            française ; dans le cas où il serait traduit en une ou plusieurs
            langues, seul le texte français ferait foi en cas de litige.
          </p>

          <p>
            Les parties s’efforceront de résoudre à l’amiable tout différend qui
            pourrait s’élever dans le cadre du contrat. À défaut, les tribunaux
            du siège de SEPTEO IT SOLUTIONS sont seuls et exclusivement
            compétents.
          </p>
        </section>
        <br />
        <br />
        <hr />
        <br />
        <br />

        <section
          id="formulaire-retractation"
          className="formulaire-retractation"
        >
          <h2>Modèle de formulaire de rétractation</h2>
          <p>
            <em>(à envoyer par LRAR)</em>
          </p>
          <div>
            <p>
              <strong>À l’attention de :</strong> SEPTEO IT SOLUTIONS
            </p>
            <p>
              <strong>Adresse :</strong> 194 avenue de la Gare Sud de France,
              34970 LATTES
            </p>
            <p>
              Je soussigné(e)
              ............................................................................
              souhaite par la présente notifier ma rétractation du contrat
              portant sur l’abonnement à UPSIGNON.
            </p>
            <p>
              <strong>Numéro de facture :</strong>{" "}
              ............................................................
            </p>
            <p>
              <strong>Date de la commande :</strong>{" "}
              ........................................................
            </p>
            <p>
              Je vous informe par la présente exercer mon droit de rétractation
              portant sur le contrat ci-dessus et sollicite le remboursement du
              montant payé.
            </p>

            <p>
              <strong>Date et signature du client :</strong>
            </p>
          </div>
        </section>
      </article>
    </div>
  );
}

function CGVUEn(t: ReturnType<typeof getDictionary>) {
  return (
    <div className={styles.content}>
      <header className={styles.header}>
        <h1>{t.CGVU.pageTitle}</h1>
        <p>SEPTEO IT SOLUTIONS</p>
        <p className={styles.headerAppName}>UPSIGNON by Septeo</p>
        <p>
          <strong>Version effective as of 24-07-2025</strong>
        </p>
      </header>
      <nav aria-label="Table of contents">
        <h2>Table of contents</h2>
        <ol>
          <li>
            <a href="#preambule">Preamble</a>
          </li>
          <li>
            <a href="#definitions">Definitions</a>
          </li>
          <li>
            <a href="#objet">Purpose</a>
          </li>
          <li>
            <a href="#acces">Access to UpSignOn</a>
          </li>
          <li>
            <a href="#duree">Term</a>
          </li>
          <li>
            <a href="#modalites-financieres">Financial terms</a>
          </li>
          <li>
            <a href="#obligations-client">Client obligations</a>
          </li>
          <li>
            <a href="#support">Support</a>
          </li>
          <li>
            <a href="#mises-a-jour">Updates</a>
          </li>
          <li>
            <a href="#hebergement">Hosting</a>
          </li>
          <li>
            <a href="#propriete-intellectuelle">
              Intellectual property rights – User license
            </a>
          </li>
          <li>
            <a href="#garantie-responsabilite">Warranty – Liability</a>
          </li>
          <li>
            <a href="#resiliation">Termination</a>
          </li>
          <li>
            <a href="#reversibilite">Reversibility</a>
          </li>
          <li>
            <a href="#donnees-personnelles">Protection of personal data</a>
          </li>
          <li>
            <a href="#force-majeure">Force majeure</a>
          </li>
          <li>
            <a href="#sous-traitance">Subcontracting</a>
          </li>
          <li>
            <a href="#confidentialite">Confidentiality</a>
          </li>
          <li>
            <a href="#droit-litiges">Language – Governing law – Disputes</a>
          </li>
          <li>
            <a href="#formulaire-retractation">Model withdrawal form</a>
          </li>
        </ol>
      </nav>
      <article>
        <section id="preambule">
          <h2>1. Preamble</h2>

          <p>
            As a preliminary matter, it is recalled that the UpSignOn by Septeo
            product is primarily intended for professionals. The Client
            acknowledges that, in the event it meets the conditions set out in
            article L 221-3 du Code de la Consommation, it benefits from a
            14-day withdrawal right by means of the attached form.
          </p>

          <p>
            These general terms and conditions (hereinafter referred to as{" "}
            <strong>GT&amp;C</strong>) apply to any Subscription to the UpSignOn
            product offered by SEPTEO IT SOLUTIONS.
          </p>

          <p>
            They form an integral part of the Contract entered into between
            SEPTEO IT SOLUTIONS and the Client and prevail over any other
            contractual and commercial provisions whatsoever, including those
            appearing on the Client&apos;s commercial documents, the
            Client&apos;s acceptance of these terms resulting, to the extent
            necessary, in a waiver of the right to rely on its own general terms
            and conditions, if any.
          </p>

          <p>
            Unless expressly provided otherwise, in the event of successive
            contracts, the most recent contractual provision cancels the
            previous one where those two provisions are contradictory.
          </p>
        </section>

        <section id="definitions">
          <h2>2. Definitions</h2>

          <dl>
            <dt>SUBSCRIPTION</dt>

            <dd>
              Means the method of access to UpSignOn services subscribed to by
              the Client.
            </dd>

            <dt>ADMINISTRATOR</dt>

            <dd>
              Means any person under the Client&apos;s direct or indirect
              responsibility, with access to the Supervision Console.
            </dd>

            <dt>ANOMALIES</dt>

            <dd>
              Means any malfunction impairing or preventing operation of the
              Services or one or more of their functionalities.
            </dd>

            <dt>APPLICATION</dt>

            <dd>
              Means the mobile or desktop application &ldquo;UpSignOn by
              Septeo&rdquo;.
            </dd>

            <dt>CLIENT</dt>

            <dd>
              Means the natural person or legal entity subscribing to a
              Subscription.
            </dd>

            <dt>PASSWORD VAULT</dt>

            <dd>
              Means a secure container, available through the Application,
              dedicated to a User, in which information entered by the User or
              shared by another User is stored.
            </dd>

            <dt>(PERSONAL) ACCOUNT</dt>

            <dd>
              Means Users&apos; accounts on third-party websites or applications
              whose access codes may be stored in a Vault, and more broadly, the
              various codes stored by the User in their Password Vault.
            </dd>

            <dt>SUPERVISION CONSOLE</dt>

            <dd>
              Means the web interface made available to Administrators appointed
              by the Client in order to access data relating to its Bank(s) and
              the Vaults they contain and enabling their management.
            </dd>

            <dt>DOCUMENTATION</dt>

            <dd>
              Means all manuals and/or online help, Technical Prerequisites,
              drafted in French and provided in paper and/or electronic format,
              describing UPSIGNON functionalities.
            </dd>

            <dt>DATA</dt>

            <dd>
              Means all content, information, documents and, generally, all
              Client data, data of its Users and/or data stored on devices on
              which UpSignOn is installed.
            </dd>

            <dt>EVOLUTION</dt>

            <dd>
              Means any new version of the Product including one or more new
              functionalities.
            </dd>

            <dt>BROWSER EXTENSION</dt>

            <dd>
              Means the &ldquo;UpSignOn&rdquo; program/extension/plugin/addon
              installed within a browser that notably allows interaction with
              the content of web pages visited by the User.
            </dd>

            <dt>HOSTING</dt>

            <dd>
              Means the shared technical infrastructure enabling operation of
              the Product.
            </dd>

            <dt>CREDENTIALS</dt>

            <dd>
              Means the technical identifier and password allowing access to a
              Vault.
            </dd>

            <dt>TECHNICAL PREREQUISITES</dt>

            <dd>
              Means the list of equipment and devices required or recommended by
              SEPTEO IT SOLUTIONS for use of the Product and described in the
              Documentation.
            </dd>

            <dt>PRODUCT</dt>

            <dd>
              Means all components and programs made available to the Client by
              SEPTEO IT SOLUTIONS following subscription to a Subscription and
              enabling delivery of the Services to the Client and its Users.
              These include, in particular, the Application, the Browser
              Extension and the Supervision Console.
            </dd>

            <dt>SERVICES</dt>

            <dd>Means the password vault services provided by the Product.</dd>

            <dt>SUPPORT</dt>

            <dd>
              Means support services provided by SEPTEO IT SOLUTIONS. Detailed
              support implementation arrangements are described in the
              Documentation.
            </dd>

            <dt>INTERVENTION TICKET</dt>

            <dd>
              Means the electronic record of any call and/or intervention
              request from the Client as well as any intervention by SEPTEO IT
              SOLUTIONS.
            </dd>

            <dt>USER</dt>

            <dd>
              Means any person under the Client&apos;s direct or indirect
              responsibility using the Product.
            </dd>
          </dl>
        </section>

        <section id="objet">
          <h2>3. Purpose</h2>

          <p>
            These general terms and conditions are intended to define the terms
            and conditions under which UPSIGNON is made available to the Client
            as part of a Subscription.
          </p>

          <p>The Client guarantees compliance with these terms by all Users.</p>
        </section>

        <section id="acces">
          <h2>4. Access to UPSIGNON</h2>

          <p>
            The procedures for accessing Product components, creating a Vault
            and logging in, as described in the Documentation, must be strictly
            complied with by the Client.
          </p>

          <p>
            Prior creation of a Vault is necessary to use the Product. The
            Client is responsible for keeping its Credentials confidential.
          </p>

          <p>
            The Vault provides access to the User&apos;s Accounts and Data and
            to the ability to use the Services. Vault Credentials are intended
            to reserve access to the Data contained in the Vault to the User who
            created said Vault.
          </p>

          <p>
            Any connection or operation performed via a User&apos;s Credentials
            is deemed to have been performed by that User.
          </p>

          <p>
            SEPTEO IT SOLUTIONS shall under no circumstances be liable for
            access by a third party to the content of a Vault by means of the
            personal Credentials of the Client&apos;s Users.
          </p>
        </section>

        <section id="duree">
          <h2>5. Term</h2>

          <p>
            Subscriptions are entered into for the duration provided for in the
            commercial proposal. They are renewed by tacit renewal for one or
            more periods of the same duration, unless one of the parties
            terminates unilaterally by notice sent by registered letter with
            acknowledgment of receipt at least one (1) month before the
            anniversary date of the Contract.
          </p>
        </section>

        <section id="modalites-financieres">
          <h2>6. Financial terms</h2>

          <section>
            <h3>6.1 Price</h3>

            <p>
              The Service is provided in accordance with the current pricing set
              out in the commercial proposal.
            </p>
          </section>

          <section>
            <h3>6.2 Price revision</h3>

            <p>
              SEPTEO IT SOLUTIONS may change all or part of the prices during
              the Subscription term. In that case, the Client is informed by any
              written means at least two months before the new prices take
              effect. If the Client has an annual subscription, the price change
              will take effect on the Contract anniversary date.
            </p>

            <p>
              Failing agreement, the Client may terminate the Subscription in
              accordance with the terms of the &ldquo;Termination&rdquo; article
              without any penalty.
            </p>
          </section>

          <section>
            <h3>6.3 Invoicing terms</h3>

            <p>
              Unless otherwise provided, any invoice must be paid to the
              registered office address of SEPTEO IT SOLUTIONS shown on the
              invoice no later than 30 days from the invoice issue date. No
              discount shall be granted in case of early payment.
            </p>

            <p>
              Any late payment shall automatically, after fifteen days from
              receipt by the Client of an unsuccessful formal notice letter,
              entail late interest calculated on the pre-tax amount outstanding
              from the due date to the payment date at a rate of 1.5% per month.
              Any month started is due in full.
            </p>

            <p>
              SEPTEO IT SOLUTIONS shall also be entitled to a fixed recovery
              costs indemnity of 40 euros.
            </p>

            <p>
              Where recovery costs exceed the amount of the fixed indemnity,
              SEPTEO IT SOLUTIONS may claim additional compensation upon
              justification.
            </p>

            <p>
              Absence of dispute of an invoice within fifteen days creates a
              presumption of acceptance. Any dispute must be sent by registered
              letter or by an equivalent electronic means allowing verification
              of dispatch, receipt and message content.
            </p>

            <p>
              In the event of a dispute arising between the parties, whatever
              its source and notwithstanding its existence, invoices not
              disputed at the time the dispute arises must be paid. There can be
              no setoff between any damages claimed by the Client and undisputed
              invoices.
            </p>
          </section>

          <section>
            <h3>6.4 Payment incidents</h3>

            <p>
              In case of non-payment on the due date, sums owed by the Client
              shall give rise to payment of a fixed recovery costs indemnity in
              the amount of forty (40) euros and shall bear interest from the
              due date at a rate equal to three (3) times the applicable legal
              interest rate, calculated pro rata temporis and per day, counted
              from date to date, from due date until payment.
            </p>

            <p>
              Following an unsuccessful formal notice within the stated
              timeframe, SEPTEO IT SOLUTIONS may suspend the Service; where
              applicable, SEPTEO IT SOLUTIONS undertakes to restore the Service
              as soon as possible after payment arrears and any late interest
              and penalties are settled.
            </p>

            <p>
              If regularization by the Client does not occur within sixty (60)
              days following the due date of the corresponding invoice, SEPTEO
              IT SOLUTIONS reserves the right, without further notice to the
              Client, to outsource recovery of its receivable and to take the
              measures necessary to remedy its damage.
            </p>
          </section>
        </section>

        <section id="obligations-client">
          <h2>7. Client obligations</h2>

          <p>The Client undertakes to:</p>

          <ul>
            <li>
              Comply with the Documentation as well as the technical and
              security prerequisites;
            </li>

            <li>
              Use the Product in accordance with all applicable regulations in
              force;
            </li>

            <li>
              Not process, through the Product, information whose content or use
              would be likely to infringe any intellectual or industrial
              property right or any other exclusive right;
            </li>

            <li>
              Cooperate with SEPTEO IT SOLUTIONS and its staff, notably by
              providing all information and documents useful for proper
              performance of the services provided under the Contract,
              especially with regard to support;
            </li>

            <li>
              Inform SEPTEO IT SOLUTIONS of any bugs, vulnerabilities or
              security risks it may suffer or detect on the Product;
            </li>

            <li>
              Accept and cooperate in the installation of all updates or other
              fixes of any kind and nature, necessary for proper operation
              and/or security of the Product.
            </li>
          </ul>

          <p>
            In any event, the Client acknowledges that it assumes full
            responsibility for all actions undertaken by it and/or Users,
            directly or indirectly concerning the Product.
          </p>
        </section>

        <section id="support">
          <h2>8. Support</h2>

          <p>
            SEPTEO IT SOLUTIONS provides the Client, throughout the term of the
            Contract, with a support service.
          </p>

          <p>
            Any User may report any Anomaly to SEPTEO IT SOLUTIONS by telephone
            at <a href="tel:+33411803715">04 11 80 37 15</a> from Monday to
            Friday, 9:00 a.m. to 12:30 p.m. and 1:45 p.m. to 6:00 p.m., or by
            email at{" "}
            <a href="mailto:help-ITsolutions@septeo.com">
              help-ITsolutions@septeo.com
            </a>
            .
          </p>

          <p>
            The User must describe the circumstances of the Anomaly precisely.
          </p>

          <p>
            In case of Anomalies, except in cases where its liability cannot be
            incurred and outside periods of unavailability linked to line
            interruptions and outside business hours, SEPTEO IT SOLUTIONS
            undertakes to use all means at its disposal to ensure continuity of
            the Services as quickly as possible from the report made by the
            Client, business hours meaning the support accessibility hours
            referred to above, the Client expressly authorizing SEPTEO IT
            SOLUTIONS to intervene on the Product upon detection of an anomaly.
            This service is provided remotely.
          </p>

          <p>
            The Client shall, on the one hand, cooperate loyally and honestly
            with SEPTEO IT SOLUTIONS and, on the other hand, behave reasonably
            in order to enable SEPTEO IT SOLUTIONS to analyze and correct the
            Anomaly under the best conditions.
          </p>

          <p>
            SEPTEO IT SOLUTIONS shall not be responsible for support in the
            following cases: refusal by the Client to cooperate in resolving the
            Anomaly and, in particular, to answer questions and requests for
            information; use of the Product in a way not in accordance with its
            intended purpose or the Documentation; failure by the Client to
            fulfill its contractual obligations; failure of electronic and
            electrical communication networks; intentional acts of damage,
            malice, sabotage; deterioration due to force majeure or improper use
            of the Product by the Client.
          </p>
        </section>

        <section id="mises-a-jour">
          <h2>9. Updates</h2>

          <p>
            The Application, Browser Extension and Supervision Console are
            subject to regular maintenance to ensure proper operation.
          </p>

          <p>
            SEPTEO IT SOLUTIONS shall take into account feedback and
            expectations expressed by Users and undertakes to use the means at
            its disposal to improve its online Services and Applications of
            which it is the author and to take into account evolving best
            technical standards and market needs. SEPTEO IT SOLUTIONS undertakes
            to maintain the functionalities and characteristics of the Services.
          </p>

          <p>
            However, SEPTEO IT SOLUTIONS is in no event required, under its
            maintenance obligation, to provide the new version of its
            Applications or new options, which will then be the subject of a new
            commercial offer to the Client.
          </p>

          <p>
            SEPTEO IT SOLUTIONS reserves the right to modify at any time the
            various components of the Product, including publishing updates that
            are not backward compatible with older versions of the same or other
            components. SEPTEO IT SOLUTIONS also reserves the right to impose a
            minimum version for each component.
          </p>

          <p>
            SEPTEO IT SOLUTIONS also reserves the right, during such updates, to
            make internal data structure changes which will, where possible, be
            carried out transparently for users once the update of one or more
            components is applied. However, the nature of these changes
            necessarily implies that knowledge of the old and new formats be
            maintained in the code of the various components involved to allow
            proper data migration.
          </p>

          <p>
            SEPTEO IT SOLUTIONS reserves the right, during a major update, to
            remove from the code of its software all algorithms and functions
            allowing reading and migration of data from an old format deemed
            obsolete for a sufficiently long period, such duration being at its
            sole discretion.
          </p>

          <p>
            The Client therefore undertakes to apply, to all its users, all
            component updates within a reasonable time after publication and to
            request that all users unlock all their vaults saved in the
            application after each update to ensure proper data migration.
            SEPTEO IT SOLUTIONS disclaims all liability in case of data loss
            resulting from failure to apply this rule, especially if the Client
            performs a major version skip.
          </p>
        </section>

        <section id="hebergement">
          <h2>10. Hosting</h2>

          <p>SEPTEO IT SOLUTIONS servers are located in France.</p>

          <p>
            SEPTEO IT SOLUTIONS undertakes to take physical, logical and
            organizational measures that are reasonable and in line with the
            state of the art and technology, intended to preserve data and
            Product integrity.
          </p>

          <p>
            The Client is informed that the internet network may present
            technical hazards and security risks external to the technical means
            implemented by SEPTEO IT SOLUTIONS.
          </p>

          <p>
            SEPTEO IT SOLUTIONS shall not be liable for failures of internet
            service providers or other third-party data transport network
            operators (in particular failure in cable &ldquo;cross
            connect&rdquo; links, connection line reliability defects, bandwidth
            fluctuations, interruptions, etc.), including consequences of such
            failures, notably when they result in unavailability and/or
            discontinuity in Product availability.
          </p>

          <p>
            In addition, access costs to the Product are also borne exclusively
            by the Client, which is solely responsible for subscribing or having
            subscribed the necessary telecommunications subscriptions.
          </p>
        </section>

        <section id="propriete-intellectuelle">
          <h2>11. Intellectual property rights – User license</h2>

          <section>
            <h3>11.1 Product ownership</h3>

            <p>
              SEPTEO IT SOLUTIONS retains exclusive intellectual property rights
              in the Product and Documentation and all associated information,
              as well as all prerogatives attached to the Product, both in its
              initial version and in subsequent versions.
            </p>

            <p>
              SEPTEO IT SOLUTIONS expressly states that, apart from the rights
              granted on the Product under these terms, the Client is not
              authorized to:
            </p>

            <ul>
              <li>
                Carry out or have carried out reverse engineering, disassembly,
                or decompilation of Product components;
              </li>

              <li>
                Translate, duplicate, adapt, arrange, modify, copy, transform
                Product components, for any reason whatsoever;
              </li>

              <li>
                Sell, rent, sublicense, make available, lend, or distribute the
                Product in any manner whatsoever, whether free of charge or for
                consideration;
              </li>
            </ul>

            <p>
              The Client acquires no rights in the Product other than those
              expressly granted to it under the Contract. In particular, it
              shall not acquire any ownership right at any time whatsoever.
            </p>

            <p>
              Any other use of the Product not expressly authorized herein shall
              constitute a contractual breach and an act of infringement, in
              accordance with applicable laws and case law.
            </p>

            <p>
              The Client is granted, for the Product, a personal,
              non-transferable (whether free of charge or for consideration),
              and non-exclusive user license, for the duration of the subscribed
              Subscription; excluding any ownership right.
            </p>
          </section>

          <section>
            <h3>11.2 Ownership of distinctive signs</h3>

            <p>
              SEPTEO IT SOLUTIONS trademarks, as well as all trademarks,
              illustrations, logos and images appearing on the Product or
              Documentation, and generally on all documents transmitted to the
              Client by SEPTEO IT SOLUTIONS, are and remain the exclusive
              property of the latter.
            </p>

            <p>
              Any total or partial reproduction, modification or use of these
              trademarks, illustrations, images and logos, for any reason and on
              any medium whatsoever, without prior express written agreement
              from SEPTEO IT SOLUTIONS, is strictly prohibited.
            </p>

            <p>
              The same applies to any combination or conjunction with any other
              trademark, symbol, logo and, more generally, any distinctive sign
              intended to form a composite logo.
            </p>

            <p>
              The same applies to any copyright, design, model and patent that
              are owned by SEPTEO IT SOLUTIONS or over which it holds
              intellectual property rights.
            </p>
          </section>

          <section>
            <h3>11.3 Data ownership</h3>

            <p>
              Data belongs to the Client and remains its exclusive property.
            </p>

            <p>
              Reproduction or use of Data by SEPTEO IT SOLUTIONS, for purposes
              other than performance of the Contract, is strictly prohibited
              without the Client&apos;s prior written authorization.
            </p>
          </section>
        </section>

        <section id="garantie-responsabilite">
          <h2>12. Warranty – Liability</h2>

          <section>
            <h3>12.1 Warranty</h3>

            <p>
              SEPTEO IT SOLUTIONS warrants that the Product complies with the
              functional and technical definitions set out in the Documentation.
            </p>

            <p>
              However, SEPTEO IT SOLUTIONS does not warrant that the Product is
              free from all defects but undertakes to use its best efforts to
              remedy, with all reasonably possible diligence, reproducible
              malfunctions observed in relation to its Documentation.
            </p>
          </section>

          <section>
            <h3>12.2 Liability</h3>

            <p>
              In case either Party breaches its contractual obligations, the
              defaulting Party&apos;s liability may be engaged in accordance
              with these contractual provisions.
            </p>

            <p>
              In this respect, SEPTEO IT SOLUTIONS is always bound by an
              obligation of means, unless expressly stated otherwise for a
              specific obligation, and without such statement extending to other
              obligations, even related ones.
            </p>

            <p>
              SEPTEO IT SOLUTIONS liability may only be engaged in case of
              proven fault in performing its obligations and shall be limited to
              the Client&apos;s direct losses.
            </p>

            <p>
              SEPTEO IT SOLUTIONS liability can never be sought in the following
              cases: when damage claimed by the Client results, even partly,
              from improper performance or total or partial non-performance of
              its own obligations; when damage results from non-compliant use;
              when damage, in its origin or extent, results from the effects of
              a computer virus; when damage is linked to unavailability or
              disruption of the Client&apos;s network (LAN), cabling or
              telecommunications network; when damage is linked to elements of
              the Client&apos;s Hardware or Software installation on which
              SEPTEO IT SOLUTIONS does not intervene.
            </p>

            <p>
              SEPTEO IT SOLUTIONS is never required to repair the Client&apos;s
              indirect loss (such as loss of profit or loss of opportunity or
              expected benefits, loss of information or financial consequences
              of actions or claims possibly brought by third parties against the
              Client).
            </p>

            <p>
              In all cases where its liability is engaged, it is expressly
              agreed that the total amount of compensation that SEPTEO IT
              SOLUTIONS may be required to pay to the Client for any reason
              whatsoever is limited to amounts actually received under the
              Subscription by SEPTEO IT SOLUTIONS during the twelve (12) months
              preceding the incident.
            </p>
          </section>

          <section>
            <h3>12.3 Exclusion of liability</h3>

            <p>
              SEPTEO IT SOLUTIONS liability shall, in no event, be engaged
              notably in the following cases:
            </p>

            <ul>
              <li>
                Anomaly not attributable to the Product or
                &ldquo;fleeting&rdquo; anomaly, i.e., not reproducible by the
                Client in SEPTEO IT SOLUTIONS presence or by SEPTEO IT SOLUTIONS
                alone;
              </li>

              <li>
                Improper use of the Product or use of the Product not in
                accordance with its intended purpose and/or SEPTEO IT SOLUTIONS
                prerequisites and instructions;
              </li>

              <li>
                Modification or alteration (or attempted modification or
                alteration) of the Product by the Client or a third party
                without SEPTEO IT SOLUTIONS prior written consent;
              </li>

              <li>
                Loss, alteration or fraudulent use of the Product or Data, made
                possible due to a security breach in the Client&apos;s IT
                environment or a failure or negligence by the latter or by a
                third-party website;
              </li>

              <li>
                Performance degradation or malfunctions, notably network outages
                due to service stoppages on the network part managed by third
                parties, i.e., beyond the hosting platform.
              </li>
            </ul>
          </section>
        </section>

        <section id="resiliation">
          <h2>13. Termination</h2>

          <p>
            In case of serious or repeated breach by either Party of any of its
            obligations under the Contract (including its appendices and any
            amendments), not remedied within thirty (30) days from receipt by
            the defaulting Party of a formal notice sent by registered letter
            with acknowledgment of receipt, the Party harmed by such breach may
            terminate the Contract as of right.
          </p>

          <p>
            Effective termination of the Contract shall then occur from the day
            following the first presentation of a new registered letter with
            acknowledgment of receipt sent by the harmed Party. This is without
            prejudice to any damages that the Party harmed by such breach might
            otherwise claim.
          </p>

          <p>
            In case of non-compliance by the Client with payment deadlines,
            SEPTEO IT SOLUTIONS will first inform the Client by dematerialized
            mail seven days after the due date of unpaid invoices and then by
            telephone reminders. Failing payment within 60 days from the invoice
            due date, SEPTEO IT SOLUTIONS may suspend its Services by observing
            a notice period of eight (8) days from sending the Client a formal
            notice by registered letter with acknowledgment of receipt. The
            suspension will be maintained until all sums due are paid or until
            full performance of the contractual obligation.
          </p>
        </section>

        <section id="reversibilite">
          <h2>14. Reversibility</h2>

          <p>
            SEPTEO IT SOLUTIONS undertakes to provide each User with the
            possibility to export their password list in CSV format from the
            Application. In this format, data appears in clear text and can be
            easily re-imported into another password management tool.
          </p>

          <p>
            The Client may export raw statistics from its Supervision Console.
          </p>
        </section>

        <section id="donnees-personnelles">
          <h2>15. Protection of personal data</h2>

          <p>
            Each party shall comply with the commitments provided by texts
            relating to personal data protection and in particular Règlement UE
            2016/679 dated 27 April 2016 &ldquo;Règlement Général sur la
            Protection des Données&rdquo;.
          </p>
        </section>

        <section id="force-majeure">
          <h2>16. Force majeure</h2>

          <p>
            Neither Party&apos;s liability may be sought if performance of the
            Contract is delayed or prevented due to a force majeure event as
            defined by article 1218 du Code Civil.
          </p>

          <p>
            The Party wishing to invoke force majeure must notify the other
            Party as soon as it becomes aware of such event.
          </p>

          <p>
            During its duration, the force majeure event suspends performance of
            the Parties&apos; obligations. In all cases, the Party affected by
            the force majeure event shall do everything in its power to avoid,
            eliminate or reduce the causes of delay and resume performance of
            its obligations as soon as the invoked event has disappeared.
          </p>

          <p>
            If the force majeure event exceeds thirty (30) business days from
            the above notification, each Party shall have the right to notify
            termination as of right and without compensation of the Contract,
            without any further formality, notably judicial.
          </p>
        </section>

        <section id="sous-traitance">
          <h2>17. Subcontracting</h2>

          <p>
            The Client declares that it accepts that SEPTEO IT SOLUTIONS may
            subcontract all or part of performance of the Contract to any of the
            companies of the SEPTEO group to which SEPTEO IT SOLUTIONS belongs.
          </p>
        </section>

        <section id="confidentialite">
          <h2>18. Confidentiality</h2>

          <p>
            Each Party undertakes to keep confidential the content of the
            Contract as well as the other Party&apos;s confidential information
            of which it became aware during pre-contractual negotiations and
            during performance of this Contract.
          </p>

          <p>
            The Parties expressly undertake to treat as confidential and secret,
            not to disclose to third parties and not to use other than for the
            needs of the Contract, in any form whatsoever, the composition and
            status of either Party&apos;s computer systems, as well as all
            documents, elements, data and information transmitted by the Client
            to SEPTEO IT SOLUTIONS or vice versa, or that either Party may
            become aware of in performing the Contract.
          </p>

          <p>
            Also confidential by nature are, in particular, all information
            relating to the Parties&apos; commercial, technical, financial and
            structural elements. Programs, Data and files provided by the Client
            or generated during processing carried out by SEPTEO IT SOLUTIONS,
            as well as their updates and processing results, constitute
            confidential information, whether or not they bear a confidentiality
            notice.
          </p>

          <p>
            This confidentiality obligation applies to either Party vis-à-vis
            any third party. This confidentiality obligation shall remain in
            force for a period of two (2) years after expiration of this
            Contract, whatever the cause.
          </p>
        </section>

        <section id="droit-litiges">
          <h2>19. Language – Governing law – Disputes</h2>

          <p>
            The parties subject this contract to French law, to the exclusion of
            any other legislation. It is drafted in French; in the event it is
            translated into one or more languages, only the French text shall
            prevail in case of dispute.
          </p>

          <p>
            The parties shall endeavor to resolve amicably any dispute that may
            arise under the contract. Failing that, the courts of the registered
            office of SEPTEO IT SOLUTIONS have sole and exclusive jurisdiction.
          </p>
        </section>
        <br />
        <br />
        <hr />
        <br />
        <br />

        <section
          id="formulaire-retractation"
          className="formulaire-retractation"
        >
          <h2>Model withdrawal form</h2>
          <p>
            <em>
              (to be sent by registered letter with acknowledgment of receipt)
            </em>
          </p>
          <div>
            <p>
              <strong>For the attention of:</strong> SEPTEO IT SOLUTIONS
            </p>
            <p>
              <strong>Address:</strong> 194 avenue de la Gare Sud de France,
              34970 LATTES
            </p>
            <p>
              I, the undersigned
              ............................................................................
              hereby wish to notify my withdrawal from the contract relating to
              the UPSIGNON subscription.
            </p>
            <p>
              <strong>Invoice number:</strong>{" "}
              ............................................................
            </p>
            <p>
              <strong>Order date:</strong>{" "}
              ........................................................
            </p>
            <p>
              I hereby inform you that I am exercising my withdrawal right in
              respect of the above contract and request reimbursement of the
              amount paid.
            </p>

            <p>
              <strong>Date and signature of the client:</strong>
            </p>
          </div>
        </section>
      </article>
    </div>
  );
}

import { Metadata } from "next";
import { getDictionary } from "../../../translations/translations";
import styles from "./page.module.css";

// This page exists only so Google Play Store accepts the link for privacy policy.
export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = getDictionary(lang);
  return lang === "fr" ? <FRDoc t={t} /> : <ENDoc t={t} />;
}

function FRDoc({ t }: { t: ReturnType<typeof getDictionary> }) {
  return (
    <div className={styles.content}>
      <h1>ANNEXE SUR LA PROTECTION DES DONNEES A CARACTERE PERSONNEL</h1>
      <article>
        <section className={styles.section}>
          <h2>Article 1. Objet</h2>
          <p>
            Dans le cadre de leurs relations contractuelles, les Parties
            s’engagent à respecter la réglementation en vigueur applicable au
            traitement de données à caractère personnel et, en particulier, le
            règlement (UE) 2016/679 du Parlement européen et du Conseil du 27
            avril 2016 (ci-après, « le Règlement européen sur la protection des
            données » ou « RGPD »).
          </p>
          <p>
            Les Parties sont donc convenues de définir les conditions et
            modalités relatives à la protection des données personnelles ainsi
            qu’il suit :
          </p>
        </section>
        <section className={styles.section}>
          <h2>Article 2. Description des traitements</h2>
          <p>
            Dans le cadre de l’exécution de ses prestations telles que définies
            ci-dessous, SEPTEO IT SOLUTIONS est susceptible de traiter des
            données personnelles au sens du RGPD relatives à ses prospects ou au
            Client et à ses Utilisateurs ; à ce titre, SEPTEO IT SOLUTIONS est
            Responsable de traitement pour son propre compte.
          </p>
          <p>
            Le Client demeure seul Responsable de traitement, au sens du RGPD,
            des données personnelles de ses propres clients et/ou employés,
            données qu’il traite dans l’exercice de son activité professionnelle
            et dont SEPTEO IT SOLUTIONS peut être amenée à en avoir accès. Dans
            ce cas, SEPTEO IT SOLUTIONS est alors Sous-traitant au sens de la
            Règlementation.
          </p>
          <h3>
            2.1. Liste des traitements pour lesquels SEPTEO IT SOLUTIONS agit en
            qualité de Responsable de traitement
          </h3>
          <div>
            <table className={styles.privacyPolicyTable}>
              <thead>
                <tr>
                  <th scope="col">
                    {t.privacyPolicy.section2.table.headers.purpose}
                  </th>
                  <th scope="col">
                    {t.privacyPolicy.section2.table.headers.data}
                  </th>
                  <th scope="col">
                    {t.privacyPolicy.section2.table.headers.legalBasis}
                  </th>
                  <th scope="col">
                    {t.privacyPolicy.section2.table.headers.retention}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Gestion de la relation contractuelle</td>
                  <td>
                    <ul>
                      <li>Nom, Prénom</li>
                      <li>Adresse électronique, numéro de téléphone</li>
                    </ul>
                  </td>
                  <td>Exécution du contrat</td>
                  <td>Durée de la relation contractuelle augmentée de 5 ans</td>
                </tr>
                <tr>
                  <td>
                    Utilisation des données à des fins d’amélioration des
                    produits et des services ;<br />
                    communication de statistiques ;<br />
                    anonymisation et agrégation des données
                  </td>
                  <td>
                    <ul>
                      <li>Nom, Prénom</li>
                      <li>Adresse électronique, numéro de téléphone</li>
                    </ul>
                  </td>
                  <td>Exécution du contrat</td>
                  <td>Durée de l’opération d’anonymisation</td>
                </tr>
                <tr>
                  <td>Prospection commerciale (Client)</td>
                  <td>
                    <ul>
                      <li>Nom, Prénom</li>
                      <li>Adresse électronique, numéro de téléphone</li>
                    </ul>
                  </td>
                  <td>Exécution du contrat</td>
                  <td>
                    3 ans après le dernier contact avec la personne
                    <br />
                    <br />
                    Exercice de son droit d’opposition par la personne
                    concernée.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3>
            2.2. Liste des traitements pour lesquels SEPTEO IT SOLUTIONS agit en
            qualité de Sous-traitant
          </h3>
          <div>
            <table className={styles.privacyPolicyTable}>
              <thead>
                <tr>
                  <th scope="col">
                    {t.privacyPolicy.section2.table.headers.purpose}
                  </th>
                  <th scope="col">
                    {t.privacyPolicy.section2.table.headers.data}
                  </th>
                  <th scope="col">
                    {t.privacyPolicy.section2.table.headers.legalBasis}
                  </th>
                  <th scope="col">
                    {t.privacyPolicy.section2.table.headers.retention}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Fourniture du service de prise de contrôle d’une machine à
                    distance
                  </td>
                  <td>
                    <ul>
                      <li>Nom, Prénom</li>
                      <li>Adresse électronique, numéro de téléphone</li>
                    </ul>
                  </td>
                  <td>Exécution du contrat</td>
                  <td>Durée du contrat</td>
                </tr>
                <tr>
                  <td>
                    Support Utilisateur
                    <br />
                    <br />
                    <em>
                      Traitement des demandes Utilisateurs liées à l’utilisation
                      des services
                    </em>
                  </td>
                  <td>
                    <ul>
                      <li>Nom, Prénom</li>
                      <li>Adresse électronique, numéro de téléphone</li>
                    </ul>
                  </td>
                  <td>Exécution du contrat</td>
                  <td>Durée de l’intervention</td>
                </tr>
                <tr>
                  <td>Hébergement des bases de données et applications</td>
                  <td>
                    <ul>
                      <li>Nom, Prénom</li>
                      <li>Adresse électronique, numéro de téléphone</li>
                    </ul>
                  </td>
                  <td>Exécution du contrat</td>
                  <td>Durée de la relation contractuelle avec le Client</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section>
          <h2>Article 3. Obligations des Parties</h2>
          <h3>3.1. Obligations de SEPTEO IT SOLUTIONS</h3>
          <p>SEPTEO IT SOLUTIONS en sa qualité de Sous-traitant s’engage à :</p>
          <ul>
            <li>
              Traiter les données uniquement pour les seules finalités qui font
              l’objet de la sous-traitance ;
            </li>
            <li>
              Traiter les données conformément aux instructions documentées du
              Responsable de traitement. Si le Sous-traitant considère qu’une
              instruction constitue une violation du règlement européen sur la
              protection des données ou de toute autre disposition du droit de
              l’Union ou du droit des Etats membres relative à la protection des
              données, il en informe immédiatement le Responsable de traitement
              ;
            </li>
            <li>
              Garantir la confidentialité des données à caractère personnel
              traitées dans le cadre du présent contrat ;
            </li>
            <li>
              Veillez à ce que les personnes autorisées à traiter les données à
              caractère personnel en vertu du présent contrat s’engagent à
              respecter la confidentialité ou soient soumises à une obligation
              légale appropriée de confidentialité et reçoivent la formation
              nécessaire en matière de protection des données à caractère
              personnel ;
            </li>
            <li>
              Prendre en compte, s’agissant de ses outils, produits,
              applications, les principes de protection des données dès la
              conception et de protection des données par défaut.
            </li>
            <li>
              Tenir un registre par écrit (y compris sous forme électronique) de
              toutes les catégories d’activités de traitement effectuées pour le
              compte du Responsable de Traitement.
            </li>
          </ul>
          <h3>3.2. Obligations du Client</h3>
          <p>
            Le Client s’engage, en sa qualité de Responsable de traitement à :
          </p>
          <ul>
            <li>
              Documenter par écrit toute instruction concernant le traitement
              des données par SEPTEO IT SOLUTIONS ;
            </li>
            <li>
              Veiller, au préalable et pendant toute la durée du traitement au
              respect des obligations prévues par le règlement européen sur la
              protection des données de la part du Sous-traitant ;
            </li>
            <li>
              Superviser le traitement, y compris réaliser les audits et les
              inspections auprès du Sous-traitant.
            </li>
          </ul>
        </section>
        <section>
          <h2>Article 4. Destinataire des données</h2>
          <p>
            SEPTEO IT SOLUTIONS peut faire appel à des sous-traitants pour la
            réalisation de la prestation du présent contrat (ci-après les «
            Sous-Traitants Ultérieurs »).
          </p>
          <p>
            Dans ce cas, SEPTEO IT SOLUTIONS s’engage à ce que chacun de ses
            Sous-Traitants Ultérieurs présente, conformément aux instructions du
            Client, les mêmes garanties suffisantes quant à la mise en oeuvre
            des mesures techniques et organisationnelles appropriées de manière
            à ce que le traitement réponde aux exigences du Règlement européen
            sur la protection des données.
          </p>
          <p>
            SEPTEO IT SOLUTIONS s’engage à imposer contractuellement à ses
            Sous-Traitants Ultérieurs le respect des obligations de la présente
            clause de sous-traitance.
          </p>
          <p>
            SEPTEO IT SOLUTIONS s’engage à ne faire appel uniquement à des
            Sous-Traitants Ultérieurs :
          </p>
          <ul>
            <li>Etablis dans un pays de l’Union Européenne ou,</li>
            <li>
              Etablis dans un pays présentant un niveau de protection dit
              adéquat au sens des autorités européennes de protection des
              données ou,
            </li>
            <li>
              Disposant de garanties appropriées en application de l’article 46
              du Règlement européen.
            </li>
          </ul>
          <p>
            La liste des Sous-Traitants Ultérieurs est mise à jour et tenue à la
            disposition du Client sur demande écrite de celui-ci. SEPTEO IT
            SOLUTIONS s’engage à informer le Client de l’ajout ou du changement
            de Sous-Traitant Ultérieur par courrier postal ou électronique dans
            les plus brefs délais. Le Client disposera alors d’un délai de 15
            jours pour s’opposer à un tel choix. Au-delà de ce délai et sans
            réponse de sa part, le Client reconnait avoir autorisé ledit
            Sous-Traitant Ultérieur.
          </p>
          <p>
            Pour la réalisation du présent contrat, SEPTEO IT SOLUTIONS a
            recours aux Sous-Traitants Ultérieurs suivants :
          </p>
          <table className={styles.privacyPolicyTable}>
            <thead>
              <tr>
                <th scope="col">Identité du sous-traitant</th>
                <th scope="col">Adresse du sous-traitant</th>
                <th scope="col">Motif de la sous-traitance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>PIPEDRIVE</td>
                <td>New York, US</td>
                <td>CRM</td>
              </tr>
              <tr>
                <td>OVHcloud</td>
                <td>
                  2 rue Kellermann
                  <br />
                  BP 80157
                  <br />
                  59053 ROUBAIX CEDEX 1<br />
                  France
                </td>
                <td>
                  Crédit SMS pour les notifications Stockage BDD des
                  informations collectées par la supervision
                </td>
              </tr>
              <tr>
                <td>IONOS</td>
                <td>
                  1&1 IONOS/UNETUN/UN-ET-UN/1ET1/ONEANDONE/ONE-AND-ONE 7 PLACE
                  DE LA GARE, 57200 SARREGUEMINES France
                </td>
                <td>Hébergement</td>
              </tr>
              <tr>
                <td>Sentry</td>
                <td>
                  45 Fremont Street, 8th Floor
                  <br />
                  San Francisco, CA 94105
                </td>
                <td>Outil de collecte de nos logs applicatifs</td>
              </tr>
              <tr>
                <td>HUBSPOT</td>
                <td>Cambridge, Massachusetts, Etats-Unis</td>
                <td>Outil d’envoi d’emailings Marketing</td>
              </tr>
              <tr>
                <td>ZENDESK</td>
                <td>
                  1019 Market St San Francisco, CA 94103
                  <br />
                  +1-888-670-4887
                </td>
                <td>Suivi tickets clients et base de connaissances</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section>
          <h2>Article 5. Sécurité des données</h2>
          <p>
            Conformément aux dispositions de l’article 32 du Règlement européen
            2016/679, compte tenu de l’état des connaissances, des couts de mise
            en oeuvre et de la nature, de la portée, du contexte et des
            finalités du traitement ainsi que des risques, dont le degré de
            probabilité et de gravité varie, pour les droits et libertés des
            personnes physiques, le Client et SEPTEO IT SOLUTIONS reconnaissent
            mettre en oeuvre les mesures techniques et organisationnelles
            appropriées afin de garantir un niveau de sécurité adapté au risque.
          </p>
          <p>
            Les mesures techniques et organisationnelles mises en oeuvre peuvent
            inclure (liste non exhaustive) :
          </p>
          <ul>
            <li>
              Des moyens permettant de garantir la confidentialité, l’intégrité,
              la disponibilité et la résilience constante des systèmes et des
              services de Traitement.
            </li>
            <li>
              Des moyens permettant de rétablir la disponibilité des Données et
              l’accès à celles-ci dans des délais appropriés en cas d’incident
              physique ou technique.
            </li>
            <li>
              Une procédure visant à tester, à analyser et à évaluer
              régulièrement l’efficacité des mesures techniques et
              organisationnelles pour assurer la sécurité des traitements.
            </li>
          </ul>
          <p>
            SEPTEO IT SOLUTIONS tient à la disposition du client sur demande
            écrite de ce dernier les documents relatifs à la sécurité de ses
            Données comprenant notamment la documentation technique nécessaire,
            les procédures en vigueur, les analyses de risques produites et la
            liste détaillée des mesures de sécurité mises en oeuvre.
          </p>
        </section>
        <section>
          <h2>Article 6. Contrôle et audit</h2>
          <p>
            Si le client estime raisonnablement nécessaire d’effectuer un audit
            de nature à vérifier la permanence des dispositifs et procédures de
            protection internes des données personnelles, SEPTEO IT SOLUTIONS
            accepte de se soumettre à un tel audit, dans la limite d’une fois
            par an, effectué par un auditeur indépendant, réputé et
            non-concurrent de ses activités.
          </p>
          <p>
            L'audit ne pourra porter que sur les seuls traitements effectués
            pour le compte du Client et dans le cadre de l'exécution du Contrat,
            à l'exclusion de toutes autres finalités ; à ce titre, il ne saurait
            comporter un accès aux systèmes, informations ou données non liées à
            l’exécution du présent Contrat.
          </p>
          <p>
            Toute sollicitation du Client en vue de la réalisation d’un audit se
            doit être justifiée et dûment documentée.
          </p>
          <p>
            L’audit ne peut être effectué que durant les heures d’ouverture de
            SEPTEO IT SOLUTIONS et d’une façon qui ne perturbe pas son activité.
          </p>
          <p>
            Le Client enverra à SEPTEO IT SOLUTIONS toute demande d’audit par
            lettre recommandée avec avis de réception adressée à son siège. La
            demande doit être motivée et présenter l’identité de la société
            auditrice souhaitée.
          </p>
          <p>
            Après réception de la demande, au moins 30 jours avant la date de
            démarrage souhaitée, SEPTEO IT SOLUTIONS et le Client confirmeront
            ensemble, dans le cadre d’un protocole d’accord signé par les
            Parties, l’identité de l’auditeur, le périmètre et la durée de
            l’audit ainsi que les contrôles de sécurité et de niveaux de
            confidentialité applicables à toute vérification.
          </p>
          <p>
            Le Client prend à sa charge tous les frais occasionnés par l’audit,
            incluant de manière non limitative les honoraires de l’auditeur et
            rembourse à SEPTEO IT SOLUTIONS toutes les dépenses et frais
            occasionnés par l’audit en fonction du taux moyen du personnel du
            prestataire ayant collaboré à l’audit.
          </p>
          <p>
            Un rapport d’audit sera rédigé par l’auditeur et remis gratuitement
            à chaque Partie.
          </p>
          <p>
            Les Parties se rapprocheront ensuite pour discuter des conséquences
            éventuelles à donner au rapport d’audit, notamment les actions
            correctrices préconisées, leur coût et la répartition de celui-ci.
            Les informations, fichiers ou documents collectés par le Client ou
            le cabinet d’audit, originaux ou copies, sont soumis à l’obligation
            de confidentialité prévue au Contrat.
          </p>
        </section>
        <section>
          <h2>Article 7. Coopération</h2>
          <p>
            SEPTEO IT SOLUTIONS s’engage à coopérer avec le Client et à l’aider
            à satisfaire aux exigences de la Règlementation qui incombe à ce
            dernier en sa qualité de Responsable de traitement notamment pour la
            réalisation d’analyse d’impact et des consultations préalables de
            l’autorité de contrôle. Sur demande du Client, SEPTEO IT SOLUTIONS
            fournira à ce titre toute information utile en sa possession.
          </p>
          <p>
            SEPTEO IT SOLUTIONS s’engage à adresser au Client dans les meilleurs
            délais après réception de toute demande de quelque nature qu’elle
            soit émanant de personne physique concernée par le traitement de ses
            données personnelles réalisé dans le cadre de l’exécution du
            contrat.
          </p>
          <p>
            Il appartient au Client, de par sa qualité de seul Responsable de
            traitement, d’apporter la réponse à la personne concernée, SEPTEO IT
            SOLUTIONS s’engage dans la mesure du possible à aider le Client à
            respecter son obligation de donner suite aux demandes d’exercice des
            droits des personnes concernées : accès, rectification, effacement,
            opposition, limitation et portabilité.
          </p>
        </section>
        <section>
          <h2>Article 8. Notification des violations de données</h2>
          <p>
            Le Sous-traitant notifiera au Responsable de traitement toute
            violation de données à caractère personnel dans les plus brefs
            délais après en avoir pris connaissance et par email adressé au
            Responsable de traitement, le cas échéant à l’administrateur. Cette
            notification sera accompagnée de toute documentation utile afin de
            permettre au responsable de traitement, si nécessaire de notifier
            cette violation à l’autorité de contrôle compétente.
          </p>
        </section>
        <section>
          <h2>Article 9. Exercice des droits</h2>
          <p>
            S’agissant des informations le concernant directement, le Client
            dispose d’un droit d’accès, de rectification, d’effacement, de
            limitation, de portabilité et d’opposition. Ce droit peut être
            exercé :
          </p>
          <ul>
            <li>Par mail : dpo@septeo.com</li>
            <li>
              Par courrier : DPO – Septeo, Font de la Banquière, 194 Avenue de
              la Gare Sud de France, 34970, LATTES
            </li>
          </ul>
          <p>
            L’auteur de cette demande doit indiquer ses coordonnées (nom,
            prénom, adresse) et un motif légitime lorsque celui-ci est exigé par
            la loi (notamment en cas d’opposition).
          </p>
        </section>
      </article>
    </div>
  );
}

function ENDoc({ t }: { t: ReturnType<typeof getDictionary> }) {
  return (
    <div className={styles.content}>
      <h1>PERSONAL DATA PROTECTION ADDENDUM</h1>
      <article>
        <section className={styles.section}>
          <h2>Article 1. Purpose</h2>
          <p>
            As part of their contractual relationship, the Parties undertake to
            comply with the regulations in force applicable to the processing of
            personal data and, in particular, Regulation (EU) 2016/679 of the
            European Parliament and of the Council of April 27, 2016
            (hereinafter, the “European Data Protection Regulation” or “GDPR”).
          </p>
          <p>
            The Parties have therefore agreed to define the terms and conditions
            relating to the protection of personal data as follows:
          </p>
        </section>
        <section className={styles.section}>
          <h2>Article 2. Description of processing operations</h2>
          <p>
            As part of the performance of its services as defined below, SEPTEO
            IT SOLUTIONS may process personal data, within the meaning of the
            GDPR, relating to its prospects or to the Client and its Users; in
            this respect, SEPTEO IT SOLUTIONS acts as Data Controller for its
            own purposes.
          </p>
          <p>
            The Client remains the sole Data Controller, within the meaning of
            the GDPR, of personal data relating to its own clients and/or
            employees, data which it processes in the course of its professional
            activity and to which SEPTEO IT SOLUTIONS may have access. In this
            case, SEPTEO IT SOLUTIONS acts as Data Processor within the meaning
            of the applicable regulations.
          </p>
          <h3>
            2.1. List of processing operations for which SEPTEO IT SOLUTIONS
            acts as Data Controller
          </h3>
          <div>
            <table className={styles.privacyPolicyTable}>
              <thead>
                <tr>
                  <th scope="col">
                    {t.privacyPolicy.section2.table.headers.purpose}
                  </th>
                  <th scope="col">
                    {t.privacyPolicy.section2.table.headers.data}
                  </th>
                  <th scope="col">
                    {t.privacyPolicy.section2.table.headers.legalBasis}
                  </th>
                  <th scope="col">
                    {t.privacyPolicy.section2.table.headers.retention}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Management of the contractual relationship</td>
                  <td>
                    <ul>
                      <li>Last name, First name</li>
                      <li>Email address, phone number</li>
                    </ul>
                  </td>
                  <td>Performance of the contract</td>
                  <td>Duration of the contractual relationship plus 5 years</td>
                </tr>
                <tr>
                  <td>
                    Use of data for product and service improvement purposes;
                    <br />
                    communication of statistics;
                    <br />
                    data anonymization and aggregation
                  </td>
                  <td>
                    <ul>
                      <li>Last name, First name</li>
                      <li>Email address, phone number</li>
                    </ul>
                  </td>
                  <td>Performance of the contract</td>
                  <td>Duration of the anonymization operation</td>
                </tr>
                <tr>
                  <td>Commercial prospecting (Client)</td>
                  <td>
                    <ul>
                      <li>Last name, First name</li>
                      <li>Email address, phone number</li>
                    </ul>
                  </td>
                  <td>Performance of the contract</td>
                  <td>
                    3 years after the last contact with the person
                    <br />
                    <br />
                    Exercise of the right to object by the data subject.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3>
            2.2. List of processing operations for which SEPTEO IT SOLUTIONS
            acts as Data Processor
          </h3>
          <div>
            <table className={styles.privacyPolicyTable}>
              <thead>
                <tr>
                  <th scope="col">
                    {t.privacyPolicy.section2.table.headers.purpose}
                  </th>
                  <th scope="col">
                    {t.privacyPolicy.section2.table.headers.data}
                  </th>
                  <th scope="col">
                    {t.privacyPolicy.section2.table.headers.legalBasis}
                  </th>
                  <th scope="col">
                    {t.privacyPolicy.section2.table.headers.retention}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Provision of remote machine control service</td>
                  <td>
                    <ul>
                      <li>Last name, First name</li>
                      <li>Email address, phone number</li>
                    </ul>
                  </td>
                  <td>Performance of the contract</td>
                  <td>Contract duration</td>
                </tr>
                <tr>
                  <td>
                    User support
                    <br />
                    <br />
                    <em>
                      Processing of User requests related to the use of the
                      services
                    </em>
                  </td>
                  <td>
                    <ul>
                      <li>Last name, First name</li>
                      <li>Email address, phone number</li>
                    </ul>
                  </td>
                  <td>Performance of the contract</td>
                  <td>Duration of the intervention</td>
                </tr>
                <tr>
                  <td>Hosting of databases and applications</td>
                  <td>
                    <ul>
                      <li>Last name, First name</li>
                      <li>Email address, phone number</li>
                    </ul>
                  </td>
                  <td>Performance of the contract</td>
                  <td>
                    Duration of the contractual relationship with the Client
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section>
          <h2>Article 3. Obligations of the Parties</h2>
          <h3>3.1. Obligations of SEPTEO IT SOLUTIONS</h3>
          <p>SEPTEO IT SOLUTIONS, acting as Processor, undertakes to:</p>
          <ul>
            <li>
              Process data only for the purposes that are the subject of the
              processing agreement;
            </li>
            <li>
              Process data in accordance with the documented instructions of the
              Data Controller. If the Processor considers that an instruction
              constitutes a violation of the European Data Protection Regulation
              or of any other provision of Union law or Member State law
              relating to data protection, it shall immediately inform the Data
              Controller;
            </li>
            <li>
              Guarantee the confidentiality of personal data processed under the
              present contract;
            </li>
            <li>
              Ensure that persons authorized to process personal data under this
              contract undertake to respect confidentiality or are subject to an
              appropriate legal obligation of confidentiality and receive the
              necessary training in personal data protection;
            </li>
            <li>
              Take into account, with regard to its tools, products and
              applications, the principles of data protection by design and data
              protection by default.
            </li>
            <li>
              Maintain a written register (including in electronic form) of all
              categories of processing activities carried out on behalf of the
              Data Controller.
            </li>
          </ul>
          <h3>3.2. Obligations of the Client</h3>
          <p>The Client undertakes, in its capacity as Data Controller, to:</p>
          <ul>
            <li>
              Document in writing any instruction concerning the processing of
              data by SEPTEO IT SOLUTIONS;
            </li>
            <li>
              Ensure, prior to and throughout the processing, compliance by the
              Processor with the obligations provided for by the European Data
              Protection Regulation;
            </li>
            <li>
              Supervise processing, including carrying out audits and
              inspections of the Processor.
            </li>
          </ul>
        </section>
        <section>
          <h2>Article 4. Data recipients</h2>
          <p>
            SEPTEO IT SOLUTIONS may engage processors for the performance of the
            services under this contract (hereinafter the “Sub-processors”).
          </p>
          <p>
            In this case, SEPTEO IT SOLUTIONS undertakes to ensure that each of
            its Sub-processors provides, in accordance with the Client’s
            instructions, sufficient guarantees regarding the implementation of
            appropriate technical and organizational measures so that processing
            meets the requirements of the European Data Protection Regulation.
          </p>
          <p>
            SEPTEO IT SOLUTIONS undertakes to contractually impose on its
            Sub-processors compliance with the obligations of this processing
            clause.
          </p>
          <p>SEPTEO IT SOLUTIONS undertakes to engage only Sub-processors:</p>
          <ul>
            <li>Established in a country of the European Union, or</li>
            <li>
              Established in a country offering an adequate level of protection
              within the meaning of European data protection authorities, or
            </li>
            <li>
              Providing appropriate safeguards pursuant to Article 46 of the
              GDPR.
            </li>
          </ul>
          <p>
            The list of Sub-processors is updated and made available to the
            Client upon written request. SEPTEO IT SOLUTIONS undertakes to
            inform the Client of any addition or change of Sub-processor by
            postal mail or email as soon as possible. The Client shall then have
            15 days to object to such choice. Beyond this period and without any
            response from the Client, the Client acknowledges having authorized
            the said Sub-processor.
          </p>
          <p>
            For the performance of this contract, SEPTEO IT SOLUTIONS uses the
            following Sub-processors:
          </p>
          <table className={styles.privacyPolicyTable}>
            <thead>
              <tr>
                <th scope="col">Identity of the sub-processor</th>
                <th scope="col">Address of the sub-processor</th>
                <th scope="col">Purpose of sub-processing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>PIPEDRIVE</td>
                <td>New York, US</td>
                <td>CRM</td>
              </tr>
              <tr>
                <td>OVHcloud</td>
                <td>
                  2 rue Kellermann
                  <br />
                  BP 80157
                  <br />
                  59053 ROUBAIX CEDEX 1<br />
                  France
                </td>
                <td>
                  SMS credits for notifications Database storage of information
                  collected through monitoring
                </td>
              </tr>
              <tr>
                <td>IONOS</td>
                <td>
                  1&1 IONOS/UNETUN/UN-ET-UN/1ET1/ONEANDONE/ONE-AND-ONE 7 PLACE
                  DE LA GARE, 57200 SARREGUEMINES France
                </td>
                <td>Hosting</td>
              </tr>
              <tr>
                <td>Sentry</td>
                <td>
                  45 Fremont Street, 8th Floor
                  <br />
                  San Francisco, CA 94105
                </td>
                <td>Application logs collection tool</td>
              </tr>
              <tr>
                <td>HUBSPOT</td>
                <td>Cambridge, Massachusetts, United States</td>
                <td>Marketing email sending tool</td>
              </tr>
              <tr>
                <td>ZENDESK</td>
                <td>
                  1019 Market St San Francisco, CA 94103
                  <br />
                  +1-888-670-4887
                </td>
                <td>Customer ticket tracking and knowledge base</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section>
          <h2>Article 5. Data security</h2>
          <p>
            In accordance with Article 32 of Regulation (EU) 2016/679, taking
            into account the state of the art, implementation costs, and the
            nature, scope, context and purposes of processing, as well as the
            risks, the likelihood and severity of which vary, for the rights and
            freedoms of natural persons, the Client and SEPTEO IT SOLUTIONS
            acknowledge that they implement appropriate technical and
            organizational measures to ensure a level of security appropriate to
            the risk.
          </p>
          <p>
            The technical and organizational measures implemented may include
            (non-exhaustive list):
          </p>
          <ul>
            <li>
              Means to ensure the confidentiality, integrity, availability and
              ongoing resilience of processing systems and services.
            </li>
            <li>
              Means to restore the availability of personal data and access to
              it in a timely manner in the event of a physical or technical
              incident.
            </li>
            <li>
              A procedure for regularly testing, analyzing and evaluating the
              effectiveness of technical and organizational measures to ensure
              processing security.
            </li>
          </ul>
          <p>
            SEPTEO IT SOLUTIONS shall make available to the Client, upon written
            request, documents relating to the security of its personal data,
            including in particular the necessary technical documentation,
            current procedures, risk analyses produced, and the detailed list of
            security measures implemented.
          </p>
        </section>
        <section>
          <h2>Article 6. Control and audit</h2>
          <p>
            If the Client reasonably considers it necessary to carry out an
            audit to verify the ongoing effectiveness of internal personal data
            protection systems and procedures, SEPTEO IT SOLUTIONS agrees to
            submit to such audit, limited to once per year, carried out by an
            independent, reputable auditor that is not a competitor of its
            business.
          </p>
          <p>
            The audit may concern only processing operations carried out on
            behalf of the Client and within the scope of the Contract, to the
            exclusion of all other purposes; as such, it shall not include
            access to systems, information, or data unrelated to the execution
            of this Contract.
          </p>
          <p>
            Any request by the Client to carry out an audit must be justified
            and duly documented.
          </p>
          <p>
            The audit may only be carried out during SEPTEO IT SOLUTIONS’
            opening hours and in a way that does not disrupt its activity.
          </p>
          <p>
            The Client shall send any audit request to SEPTEO IT SOLUTIONS by
            registered letter with acknowledgment of receipt to its head office.
            The request must be reasoned and include the identity of the desired
            auditing firm.
          </p>
          <p>
            After receipt of the request, at least 30 days before the desired
            start date, SEPTEO IT SOLUTIONS and the Client shall jointly
            confirm, through a memorandum of understanding signed by the
            Parties, the auditor’s identity, scope and duration of the audit, as
            well as the security checks and confidentiality levels applicable to
            any verification.
          </p>
          <p>
            The Client shall bear all costs incurred by the audit, including,
            without limitation, auditor’s fees, and shall reimburse SEPTEO IT
            SOLUTIONS for all expenses and costs generated by the audit based on
            the average rate of the provider’s staff involved in the audit.
          </p>
          <p>
            An audit report shall be drafted by the auditor and provided free of
            charge to each Party.
          </p>
          <p>
            The Parties shall then consult each other to discuss any
            consequences to be given to the audit report, in particular the
            recommended corrective actions, their cost and cost allocation.
            Information, files or documents collected by the Client or the audit
            firm, originals or copies, are subject to the confidentiality
            obligation provided for in the Contract.
          </p>
        </section>
        <section>
          <h2>Article 7. Cooperation</h2>
          <p>
            SEPTEO IT SOLUTIONS undertakes to cooperate with the Client and help
            it meet the requirements of the Regulation incumbent upon it in its
            capacity as Data Controller, in particular for carrying out data
            protection impact assessments and prior consultations with the
            supervisory authority. At the Client’s request, SEPTEO IT SOLUTIONS
            shall provide any useful information in its possession for this
            purpose.
          </p>
          <p>
            SEPTEO IT SOLUTIONS undertakes to forward to the Client, as soon as
            possible after receipt, any request of any nature from a natural
            person concerned by the processing of their personal data carried
            out in connection with the performance of the contract.
          </p>
          <p>
            It is the Client’s responsibility, as sole Data Controller, to
            respond to the data subject. SEPTEO IT SOLUTIONS undertakes, as far
            as possible, to assist the Client in complying with its obligation
            to respond to requests to exercise data subject rights: access,
            rectification, erasure, objection, restriction and portability.
          </p>
        </section>
        <section>
          <h2>Article 8. Data breach notification</h2>
          <p>
            The Processor shall notify the Data Controller of any personal data
            breach as soon as possible after becoming aware of it and by email
            addressed to the Data Controller, and where applicable to the
            administrator. This notification shall be accompanied by any useful
            documentation to enable the Data Controller, if necessary, to notify
            this breach to the competent supervisory authority.
          </p>
        </section>
        <section>
          <h2>Article 9. Exercise of rights</h2>
          <p>
            With regard to information concerning it directly, the Client has a
            right of access, rectification, erasure, restriction, portability
            and objection. This right may be exercised:
          </p>
          <ul>
            <li>By email: dpo@septeo.com</li>
            <li>
              By post: DPO – Septeo, Font de la Banquière, 194 Avenue de la Gare
              Sud de France, 34970, LATTES
            </li>
          </ul>
          <p>
            The author of this request must provide contact details (last name,
            first name, address) and a legitimate reason where required by law
            (in particular in case of objection).
          </p>
        </section>
      </article>
    </div>
  );
}

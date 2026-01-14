import { Metadata } from "next";
import { getDictionary } from "../../../translations/translations";
import styles from "./page.module.css";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const t = getDictionary(lang);
  return {
    title: t.privacyPolicy.pageTitle,
    description: t.privacyPolicy.metaDescription,
    alternates: {
      canonical: "https://upsignon.eu/fr/privacyPolicy",
      languages: {
        fr: "https://upsignon.eu/fr/privacyPolicy",
        en: "https://upsignon.eu/en/privacyPolicy",
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
  return (
    <div className={styles.content}>
      <header>
        <div>
          <h1>{t.privacyPolicy.pageTitle}</h1>
          <p>{t.privacyPolicy.subtitle}</p>
        </div>
      </header>
      <article>
        <section className={styles.section}>
          <h2>{t.privacyPolicy.preamble.title}</h2>
          <p>
            {t.privacyPolicy.preamble.paragraph1.before}
            <em>{t.privacyPolicy.preamble.paragraph1.em}</em>
            {t.privacyPolicy.preamble.paragraph1.after}
          </p>
          <p>{t.privacyPolicy.preamble.paragraph2}</p>
          <p>{t.privacyPolicy.preamble.paragraph3}</p>
          <p>{t.privacyPolicy.preamble.paragraph4}</p>
        </section>

        <section className={styles.section}>
          <h2>{t.privacyPolicy.section1.title}</h2>
          <p>{t.privacyPolicy.section1.paragraph1}</p>
        </section>

        <section className={styles.section}>
          <h2>{t.privacyPolicy.section2.title}</h2>
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
                  <td>{t.privacyPolicy.section2.table.row1.purpose}</td>
                  <td>
                    <ul>
                      <li>{t.privacyPolicy.section2.table.row1.data.item1}</li>
                      <li>{t.privacyPolicy.section2.table.row1.data.item2}</li>
                      <li>{t.privacyPolicy.section2.table.row1.data.item3}</li>
                      <li>{t.privacyPolicy.section2.table.row1.data.item4}</li>
                    </ul>
                  </td>
                  <td>{t.privacyPolicy.section2.table.row1.legalBasis}</td>
                  <td>{t.privacyPolicy.section2.table.row1.retention}</td>
                </tr>
                <tr>
                  <td>{t.privacyPolicy.section2.table.row2.purpose}</td>
                  <td>
                    <ul>
                      <li>{t.privacyPolicy.section2.table.row2.data.item1}</li>
                      <li>{t.privacyPolicy.section2.table.row2.data.item2}</li>
                      <li>{t.privacyPolicy.section2.table.row2.data.item3}</li>
                      <li>{t.privacyPolicy.section2.table.row2.data.item4}</li>
                    </ul>
                  </td>
                  <td>{t.privacyPolicy.section2.table.row2.legalBasis}</td>
                  <td>{t.privacyPolicy.section2.table.row2.retention}</td>
                </tr>
                <tr>
                  <td>{t.privacyPolicy.section2.table.row3.purpose}</td>
                  <td>{t.privacyPolicy.section2.table.row3.data}</td>
                  <td>{t.privacyPolicy.section2.table.row3.legalBasis}</td>
                  <td>{t.privacyPolicy.section2.table.row3.retention}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className={styles.section}>
          <h2>{t.privacyPolicy.section3.title}</h2>
          <p>{t.privacyPolicy.section3.paragraph1}</p>
          <ul>
            <li>{t.privacyPolicy.section3.list.item1}</li>
            <li>{t.privacyPolicy.section3.list.item2}</li>
            <li>{t.privacyPolicy.section3.list.item3}</li>
          </ul>
          <p>{t.privacyPolicy.section3.paragraph2}</p>
        </section>

        <section className={styles.section}>
          <h2>{t.privacyPolicy.section4.title}</h2>
          <p>{t.privacyPolicy.section4.paragraph1}</p>
          <p>{t.privacyPolicy.section4.paragraph2}</p>
          <p>{t.privacyPolicy.section4.paragraph3}</p>
          <p>{t.privacyPolicy.section4.paragraph4}</p>
          <p>{t.privacyPolicy.section4.paragraph5}</p>
          <p>{t.privacyPolicy.section4.paragraph6}</p>
          <p>{t.privacyPolicy.section4.paragraph7}</p>
          <p>{t.privacyPolicy.section4.paragraph8}</p>
        </section>

        <section className={styles.section}>
          <h2>{t.privacyPolicy.section5.title}</h2>
          <p>{t.privacyPolicy.section5.paragraph1}</p>
          <p>{t.privacyPolicy.section5.paragraph2}</p>
          <p>{t.privacyPolicy.section5.paragraph3}</p>
        </section>

        <section className={styles.section}>
          <h2>{t.privacyPolicy.section6.title}</h2>
          <p>{t.privacyPolicy.section6.paragraph1}</p>
          <ul>
            <li>
              <strong>{t.privacyPolicy.section6.rights.access.title}</strong>{" "}
              {t.privacyPolicy.section6.rights.access.description}
            </li>
            <li>
              <strong>
                {t.privacyPolicy.section6.rights.limitation.title}
              </strong>{" "}
              {t.privacyPolicy.section6.rights.limitation.description}
            </li>
            <li>
              <strong>
                {t.privacyPolicy.section6.rights.rectification.title}
              </strong>{" "}
              {t.privacyPolicy.section6.rights.rectification.description}
            </li>
            <li>
              <strong>
                {t.privacyPolicy.section6.rights.opposition.title}
              </strong>{" "}
              {t.privacyPolicy.section6.rights.opposition.description}
            </li>
            <li>
              <strong>
                {t.privacyPolicy.section6.rights.portability.title}
              </strong>{" "}
              {t.privacyPolicy.section6.rights.portability.description}
            </li>
            <li>
              <strong>
                {t.privacyPolicy.section6.rights.afterDeath.title}
              </strong>{" "}
              {t.privacyPolicy.section6.rights.afterDeath.description}
            </li>
            <li>
              <strong>{t.privacyPolicy.section6.rights.complaint.title}</strong>{" "}
              {t.privacyPolicy.section6.rights.complaint.description}
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>{t.privacyPolicy.section7.title}</h2>
          <p>{t.privacyPolicy.section7.paragraph1}</p>
          <ul>
            <li>
              <strong>{t.privacyPolicy.section7.contacts.email.label}</strong>{" "}
              <Link href="mailto:dpo@septeo.com">dpo@septeo.com</Link>
            </li>
            <li>
              <strong>{t.privacyPolicy.section7.contacts.mail.label}</strong>{" "}
              {t.privacyPolicy.section7.contacts.mail.value}
            </li>
          </ul>
          <p>{t.privacyPolicy.section7.paragraph2}</p>
          <p>{t.privacyPolicy.section7.paragraph3}</p>
          <p>
            {t.privacyPolicy.section7.paragraph4}{" "}
            <Link
              href="https://cnil.fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://cnil.fr
            </Link>
          </p>
          <p>{t.privacyPolicy.section7.paragraph5}</p>
        </section>
      </article>
    </div>
  );
}

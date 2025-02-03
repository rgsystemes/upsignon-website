"use client";

import Link from "next/link";
import { getDictionary } from "../../../../translations/translations";
import styles from "./footer.module.css";

export function Footer(p: { lang: string }) {
  const t = getDictionary(p.lang);
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.footerSections}>
        <nav className={styles.footerSection}>
          <h1>{t.footer.nav.t}</h1>
          <Link href="/">{t.footer.nav.home}</Link>
          <Link href="/features">{t.menu.features}</Link>
          <Link href="/pricing">{t.menu.pricing}</Link>
          <Link href="/downloads">{t.menu.downloads}</Link>
          <Link href="/downloads/windows">{t.downloads.windowsOtherOptions}</Link>
          <Link href="/resources/articles">{t.resources.articles}</Link>
          <Link href="https://upsignon.notion.site/Notice-d-utilisation-d-UpSignOn-de4f8ba200e14ec1adcaba2613b38340?pvs=4">
            {t.resources.tutorials}
          </Link>
          <Link href="/resources/tech-articles">{t.resources.technicalExplanations}</Link>
          <Link href="/resources/release-notes/app">{t.resources.releaseNotes}</Link>
          <Link href="/resources/commitments">{t.resources.contractualCommitments}</Link>
        </nav>
        <div className={styles.footerSection}>
          <section>
            <h1>{t.footer.contactUs}</h1>
            <address>
              <Link href="mailto:contact@upsignon.eu">contact@upsignon.eu</Link>
              <br />
              <Link href="tel:+33670743299">+33 6 70 74 32 99</Link>
            </address>
          </section>
          <section>
            <h1>{t.footer.followUs}</h1>
            <div className={styles.socialLinks}>
              <Link className={styles.socialLink} href="https://www.facebook.com/upsignon" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="white">
                  <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                </svg>
              </Link>
              <Link className={styles.socialLink} href="https://www.linkedin.com/company/upsignon/" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="white">
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                </svg>
              </Link>
            </div>
          </section>
        </div>
      </div>
      <div className={styles.footerSections}>
        <details className={styles.footerLegalNotice}>
          <summary>{t.footer.legalNotice}</summary>
          <div>
            <span className={styles.subsectionTitle}>SAS UPSIGNON </span>au capital de 11 834€
          </div>
          <div>121 rue Achille Viadieu, 31400 Toulouse, France</div>
          <div>RCS Toulouse 849 484 290</div>
          <div>
            <span className={styles.subsectionTitle}>{t.footer.publisher}</span>: Gireg de Kerdanet
          </div>
          <div>
            <span className={styles.subsectionTitle}>{t.footer.hostedBy} </span>Vercel Inc.
          </div>
          <div>340 S Lemon Ave #4133, Walnut, CA 91789, USA</div>
          <div>(559) 288-7060</div>
        </details>
      </div>
      <div className={styles.copyright}>
        UpSignOn - © {year} SAS UPSIGNON {t.footer.copyright}
      </div>
    </footer>
  );
}

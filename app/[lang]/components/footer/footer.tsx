"use client";

import Link from "next/link";
import Image from "next/image";
import { getDictionary } from "../../../../translations/translations";
import styles from "./footer.module.css";
import { FormModalButton } from "../formModal/formModal";
import logoITSolutions from "../../../../public/icons/logo-septeo-it-solution.png";

export function Footer(p: { lang: string }) {
  const t = getDictionary(p.lang);
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.footerSections}>
        <div className={styles.logoContainer}>
          <Image src={logoITSolutions} alt="Septeo IT Solutions" />
        </div>
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
        </nav>
        <div className={styles.footerSection}>
          <section>
            <h1>{t.footer.contactUs}</h1>
            <FormModalButton
              lang={p.lang}
              className={styles.contactUsBtn}
              buttonText={t.actions.contactUs}
              modalTitle={t.actions.contactUs}
              modalLinkValue="contact-us"
              isFreeTrialForm={false}
            />
          </section>
          <section>
            <h1>{t.footer.followUs}</h1>
            <div className={styles.socialLinks}>
              <Link className={styles.socialLink} href="https://www.linkedin.com/company/upsignon/" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="white">
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                </svg>
              </Link>
            </div>
          </section>
        </div>
      </div>
      <div className={styles.copyright}>
        © Septeo IT Solutions {year} {t.footer.copyright}
        <span className={styles.spacer} />
        <Link href="/legalNotice">{t.footer.legalNotice}</Link>
        <span className={styles.spacer} />
        <Link href="/docs/ANNEXE%20SUR%20LA%20PROTECTION%20DES%20DONNEES%20A%20CARACTERE%20PERSONNEL%20USO.pdf">
          {t.footer.privacyPolicy}
        </Link>
        <span className={styles.spacer} />
        <Link href="/docs/CGVU_directe_Upsignon_20250425.pdf">{t.footer.termsOfUse}</Link>
      </div>
    </footer>
  );
}

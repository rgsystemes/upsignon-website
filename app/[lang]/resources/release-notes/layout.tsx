"use client";
import { usePathname } from "next/navigation";
import { getDictionary } from "../../../../translations/translations";
import styles from "./layout.module.css";

export default function Page({ children, params }: { children: React.ReactNode; params: { lang: string } }) {
  const t = getDictionary(params.lang);
  const path = usePathname();
  const isAppPath = path.includes("/resources/release-notes/app");
  const isExtensionPath = path.includes("/resources/release-notes/extension");
  const isServerPath = path.includes("/resources/release-notes/server");
  const isDashboardPath = path.includes("/resources/release-notes/dashboard");
  return (
    <div className={styles.content}>
      <h1>{t.resources.releaseNotes}</h1>
      <nav className={styles.segmentNav}>
        <a href="/resources/release-notes/app" className={isAppPath ? styles.currentTab : styles.otherTab}>
          {t.releaseNotes.app}
        </a>
        <a href="/resources/release-notes/extension" className={isExtensionPath ? styles.currentTab : styles.otherTab}>
          {t.releaseNotes.extension}
        </a>
        <a href="/resources/release-notes/server" className={isServerPath ? styles.currentTab : styles.otherTab}>
          {t.releaseNotes.server}
        </a>
        <a href="/resources/release-notes/dashboard" className={isDashboardPath ? styles.currentTab : styles.otherTab}>
          {t.releaseNotes.dashboard}
        </a>
      </nav>
      {children}
    </div>
  );
}

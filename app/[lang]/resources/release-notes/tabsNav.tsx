"use client";
import { usePathname } from "next/navigation";
import styles from "./layout.module.css";
import { getDictionary } from "../../../../translations/translations";

export function TabsNav({ lang }: { lang: string }) {
  const t = getDictionary(lang);
  const path = usePathname();
  const isAppPath = path.includes("/resources/release-notes/app");
  const isExtensionPath = path.includes("/resources/release-notes/extension");
  const isServerPath = path.includes("/resources/release-notes/server");
  const isDashboardPath = path.includes("/resources/release-notes/dashboard");
  return (
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
  );
}

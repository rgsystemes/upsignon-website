"use client";

import Image from "next/image";
import logoImg from "../../../../public/icons/logo-upsignon-website.svg";
import styles from "./navBar.module.css";
import Link from "next/link";
import { getDictionary } from "../../../../translations/translations";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import { useEffect } from "react";

export function NavBar(p: { lang: string }) {
  const [unfolded, setUnfolded] = useState(false);
  const t = getDictionary(p.lang);
  const pathName = usePathname();
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logoAndNameContainer}>
        <Image src={logoImg} alt="UpSignOn logo" />
      </Link>
      <div className={styles.spacer} />
      <div className={styles.navMenuIcon} onClick={() => setUnfolded(!unfolded)}>
        {unfolded ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40px"
            viewBox="0 -960 960 960"
            width="40px"
            fill="currentColor"
          >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40px"
            viewBox="0 -960 960 960"
            width="40px"
            fill="currentColor"
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        )}
      </div>
      <div className={`${styles.menuItems} ${unfolded ? styles.unfolded : styles.folded}`}>
        <Link
          href="/features"
          className={`${styles.menuItem} ${pathName.includes("/features") ? styles.currentMenu : ""}`}
        >
          {t.menu.features}
        </Link>
        <Link
          href="/pricing"
          className={`${styles.menuItem} ${pathName.includes("/pricing") ? styles.currentMenu : ""}`}
        >
          {t.menu.pricing}
        </Link>
        <Link
          href="/downloads"
          className={`${styles.menuItem} ${pathName.includes("/downloads") ? styles.currentMenu : ""}`}
        >
          {t.menu.downloads}
        </Link>
        <ResourceMenu lang={p.lang} isCurrentMenu={pathName.includes("/resources")} />
      </div>
    </nav>
  );
}

function ResourceMenu(p: { lang: string; isCurrentMenu: boolean }) {
  const t = getDictionary(p.lang);
  const [folded, setFolded] = useState(true);
  const wrapperRef = useRef(null);
  const submenuRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setFolded(true);
      }
    }
    function handlePressEscape(event) {
      if (event.key === "Escape") {
        setFolded(true);
      }
    }
    function mouseLeave() {
      setFolded(true);
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handlePressEscape);
    submenuRef.current.addEventListener("mouseleave", mouseLeave);
    submenuRef.current.addEventListener("click", mouseLeave);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handlePressEscape);
      // submenuRef.current.removeEventListener("mouseleave", mouseLeave);
      // submenuRef.current.removeEventListener("click", mouseLeave);
    };
  }, [wrapperRef, submenuRef]);
  return (
    <div ref={wrapperRef} className={styles.menuOpener}>
      <div
        className={`${styles.menuItem} ${p.isCurrentMenu ? styles.currentMenu : null}  ${
          !folded ? styles.focusedMenu : null
        }`}
        onClick={() => setFolded(!folded)}
      >
        {t.menu.resources}
      </div>
      <div className={folded ? null : styles.foldspacer}></div>
      <div className={folded ? styles.hidden : styles.subMenu} ref={submenuRef}>
        <Link className={styles.subMenuItem} href="/resources/articles">
          {t.resources.articles}
        </Link>
        <Link
          className={styles.subMenuItem}
          href="https://upsignon.notion.site/Notice-d-utilisation-d-UpSignOn-de4f8ba200e14ec1adcaba2613b38340?pvs=4"
          target="_blank"
        >
          {t.resources.tutorials}
        </Link>
        <Link className={styles.subMenuItem} href="/resources/tech-articles">
          {t.resources.technicalExplanations}
        </Link>
        <Link className={styles.subMenuItem} href="/resources/release-notes/app">
          {t.resources.releaseNotes}
        </Link>
        <Link className={styles.subMenuItem} href="/resources/commitments">
          {t.resources.contractualCommitments}
        </Link>
      </div>
    </div>
  );
}

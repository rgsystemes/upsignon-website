"use client";

import Image from "next/image";
import logoImg from "../../public/icons/logo-round.svg";
import styles from "./navBar.module.css";
import Link from "next/link";
import { getDictionary } from "../../translations/translations";
import { useState } from "react";

export function NavBar(p: { lang: string }) {
  const [unfolded, setUnfolded] = useState(false);
  const t = getDictionary(p.lang);
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logoAndNameContainer}>
        <Image src={logoImg} alt="UpSignOn logo" />
        <span>UpSignOn</span>
      </Link>
      <div className={styles.spacer} />
      <div className={styles.navMenuIcon} onClick={() => setUnfolded(!unfolded)}>
        {unfolded ? (
          <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="white">
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="white">
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        )}
      </div>
      <div className={`${styles.menuItems} ${unfolded ? styles.unfolded : styles.folded}`}>
        <Link href="/features" className={styles.menuItem}>
          {t.menu.features}
        </Link>
        <Link href="/pricing" className={styles.menuItem}>
          {t.menu.pricing}
        </Link>
        <Link href="/downloads" className={styles.menuItem}>
          {t.menu.downloads}
        </Link>
        <Link href="/resources" className={styles.menuItem}>
          {t.menu.resources}
        </Link>
      </div>
    </nav>
  );
}

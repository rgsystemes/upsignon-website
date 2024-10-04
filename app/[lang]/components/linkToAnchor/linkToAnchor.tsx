"use client";
import { defaultLocale, getDictionary } from "../../../../translations/translations";
import styles from "./linkToAnchor.module.css";
import { MouseEventHandler } from "react";
import { usePathname } from "next/navigation";
import { Slide, toast } from "react-toastify";

export function LinkToAnchor(p: { id: string; children: string }) {
  const pathname = usePathname();
  const locale = pathname?.split("/")?.[1] || defaultLocale;
  const t = getDictionary(locale);

  var copyLink: MouseEventHandler<HTMLAnchorElement> = (ev) => {
    const link = `${window.location.href.split("#")[0]}#${p.id}`;
    navigator.clipboard.writeText(link);
    toast(t.anchorCopied, {
      position: "bottom-center",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "light",
      transition: Slide,
      style: { textAlign: "center" },
    });
  };
  return (
    <span id={p.id} onClick={copyLink} className={styles.anchorContainer} title={t.anchorCopyTitle}>
      {p.children} <span className={styles.anchorHash}>#</span>
    </span>
  );
}

"use client";
import { Slide, toast } from "react-toastify";
import { getDictionaryFromLocationLocale } from "../../../../translations/translations";
import styles from "./linkToAnchor.module.css";
import { MouseEventHandler } from "react";

export function LinkToAnchor(p: { id: string; children: string }) {
  const t = getDictionaryFromLocationLocale();
  var link = `${window.location.href.split("#")[0]}#${p.id}`;
  var copyLink: MouseEventHandler<HTMLAnchorElement> = (ev) => {
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
    <span
      id={p.id}
      onClick={copyLink}
      className={styles.anchorContainer}
      title={t.anchorCopyTitle.replaceAll("$link", link)}
    >
      {p.children} <span className={styles.anchorHash}>#</span>
    </span>
  );
}

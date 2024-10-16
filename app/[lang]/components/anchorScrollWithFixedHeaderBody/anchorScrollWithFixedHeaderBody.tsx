"use client";
import { ReactNode, useEffect } from "react";
import styles from "./anchorScrollWithFixedHeaderBody.module.css";

export function AnchorScrollWithFixedHeaderBody(p: { fixedComponent: ReactNode; children: ReactNode }) {
  useEffect(() => {
    const resizingFixedElement = document.getElementById("fixedComponentContainer");
    const fixedElementSpacePlaceholder = document.getElementById("fixedComponentSpacer");
    const resizeSpacer = () => {
      const newSize = resizingFixedElement.offsetHeight;
      fixedElementSpacePlaceholder.style.height = `${newSize}px`;
    };
    const observer = new ResizeObserver(resizeSpacer);
    observer.observe(resizingFixedElement);
    resizeSpacer();
    return observer.disconnect();
  }, []);
  return (
    /* set an id for Modal accessibility */
    <body id="body" className={styles.body} aria-hidden={false}>
      <div id="fixedComponentContainer" className={styles.fixedContainer}>
        {p.fixedComponent}
      </div>
      <div id="fixedComponentSpacer" className={styles.spacer}></div>
      <div className={styles.contentContainer}>{p.children}</div>
    </body>
  );
}

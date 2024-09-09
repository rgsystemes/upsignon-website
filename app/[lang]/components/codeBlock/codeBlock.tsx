"use client";
import { Code } from "@geist-ui/core";
import styles from "./codeBlock.module.css";

export const CodeBlock = (p: { name?: string; children: React.ReactNode }) => {
  return (
    <Code block classic name={p.name} className={styles.code}>
      {p.children}
    </Code>
  );
};

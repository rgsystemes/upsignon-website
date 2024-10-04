"use client";
import Link from "next/link";
import { MouseEventHandler, ReactNode } from "react";

export function LinkToAnchor(p: { id: string; children: ReactNode }) {
  var copyLink: MouseEventHandler<HTMLAnchorElement> = (ev) => {
    navigator.clipboard.writeText(`${window.location.href.split("#")[0]}#${p.id}`);
  };
  return (
    <Link id={p.id} onClick={copyLink} href={`#${p.id}`}>
      {p.children} <span>#</span>
    </Link>
  );
}

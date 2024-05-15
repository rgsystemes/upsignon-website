import Link from "next/link";
import React from "react";
import { getDictionary } from "../../translations/translations";

export default function Page({ params }: { params: { lang: string } }) {
  const t = getDictionary(params.lang);
  return (
    <div>
      <h1>Hello, Next.js!</h1>
      <Link href="/features">{t.menu.features}</Link>
    </div>
  );
}

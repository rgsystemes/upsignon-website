"use client";
import Image from "next/image";

import FranceFlag from "../../../../public/flags/France.svg";
import UKFlag from "../../../../public/flags/UK.svg";
import { getDictionary } from "../../../../translations/translations";
import styles from "./languageFlags.module.css";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Tooltip } from "@geist-ui/core";

export const LanguageFlags = (p: { lang: string }) => {
  const t = getDictionary(p.lang);
  return (
    <div className={styles.flagsContainer}>
      <FlagWithHover img={FranceFlag} title={t.languageFlags.french} />
      <FlagWithHover img={UKFlag} title={t.languageFlags.english} />
    </div>
  );
};

const flagHeight = 30;
const FlagWithHover = (p: { img: StaticImport; title: string }) => {
  return (
    <Tooltip text={p.title} enterDelay={0} leaveDelay={0}>
      <Image src={p.img} alt={p.title} height={flagHeight} />
    </Tooltip>
  );
};

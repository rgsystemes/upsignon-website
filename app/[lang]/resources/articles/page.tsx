import Image, { StaticImageData } from "next/image";
import styles from "./page.module.css";

import acquisitionBySepteo from "../../../../public/articles/acquisitionBySepteo.png";
import authenticationMini from "../../../../public/articles/authentificationMini.jpg";
import unsecureWebsitesMini from "../../../../public/articles/unsecureWebsitesMini.jpg";
import privacyMini from "../../../../public/articles/privacyMini.jpg";
import securityModelsMini from "../../../../public/articles/securityModelsMini.jpeg";
import navVSPwdManagersMini from "../../../../public/articles/navVSPwdManagersMini.jpeg";
import pwdFormsMini from "../../../../public/articles/pwdFormsMini.jpeg";
import samePwdMini from "../../../../public/articles/samePwdMini.jpeg";
import strongPwdMini from "../../../../public/articles/strongPwdMini.jpg";
import pwdMini from "../../../../public/articles/pwdMini.jpeg";
import passwordManagerImg from "../../../../public/articles/passwordManager.png";
import newDesign from "../../../../public/articles/12/Image-Page-Accueil-USO-Nouvelle-UI.jpg";
import { getDictionary } from "../../../../translations/translations";
import { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const t = getDictionary(lang);
  return {
    title: t.resources.articles,
    description: t.articles.metaDescription,
    alternates: {
      canonical: "https://upsignon.eu/fr/resources/articles",
      languages: {
        fr: "https://upsignon.eu/fr/resources/articles",
        en: "https://upsignon.eu/en/resources/articles",
      },
    },
  };
}

export default async function ArticlesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t = getDictionary(lang);
  return (
    <div className={styles.contentBackground}>
      <section className={styles.content}>
        <h1>{t.resources.articles}</h1>
        <div className={styles.gridList2}>
          <div />
          <Article
            link="/resources/articles/upsignon-rejoint-rg-system-groupe-septeo"
            lang={lang}
            image={acquisitionBySepteo}
            title={t.articles.upsignonJoinsRG.title}
          />
          <div />
        </div>
        <div className={styles.gridList}>
          <Article
            link="/resources/articles/1"
            lang={lang}
            image={strongPwdMini}
            title={t.articles[1].title}
            summary={t.articles[1].summary}
          />
          <Article
            link="/resources/articles/2"
            lang={lang}
            image={samePwdMini}
            title={t.articles[2].title}
            summary={t.articles[2].summary}
          />
          <Article
            link="/resources/articles/3"
            lang={lang}
            image={passwordManagerImg}
            title={t.articles[3].title}
            summary={t.articles[3].summary}
          />
          <Article
            link="/resources/articles/4"
            lang={lang}
            image={securityModelsMini}
            title={t.articles[4].title}
            summary={t.articles[4].summary}
          />
          <Article
            link="/resources/articles/5"
            lang={lang}
            image={authenticationMini}
            title={t.articles[5].title}
            summary={t.articles[5].summary}
          />
          <Article
            link="/resources/articles/6"
            lang={lang}
            image={unsecureWebsitesMini}
            title={t.articles[6].title}
            summary={t.articles[6].summary}
          />
          <Article
            link="/resources/articles/7"
            lang={lang}
            image={privacyMini}
            title={t.articles[7].title}
            summary={t.articles[7].summary}
          />
          <Article
            link="/resources/articles/8"
            lang={lang}
            image={navVSPwdManagersMini}
            title={t.articles[8].title}
            summary={t.articles[8].summary}
          />
          <Article
            link="/resources/articles/9"
            lang={lang}
            image={pwdFormsMini}
            title={t.articles[9].title}
            summary={t.articles[9].summary}
          />
          <Article
            link="/resources/articles/10"
            lang={lang}
            image={pwdMini}
            title={t.articles[10].title}
            summary={t.articles[10].summary}
          />
          <Article
            link="/resources/articles/11"
            lang={lang}
            image={acquisitionBySepteo}
            title={t.articles.upsignonJoinsRG.title}
          />
          <Article
            link="/resources/articles/12"
            lang={lang}
            image={newDesign}
            title={t.articles[12].title}
            summary={t.articles[12].summary}
          />
        </div>
      </section>
    </div>
  );
}

function Article(p: { image: StaticImageData; title: string; summary?: string; lang: string; link: string }) {
  const t = getDictionary(p.lang);
  return (
    <Link className={styles.articleLink} href={p.link}>
      <div className={styles.miniature}>
        <Image src={p.image} alt="" unoptimized />
      </div>
      <h2>{p.title}</h2>
      {p.summary && <p>{p.summary}</p>}
      <p className={styles.readButton}>
        {t.articles.readArticle}
        <span className={styles.readArrow}>➜</span>
      </p>
    </Link>
  );
}

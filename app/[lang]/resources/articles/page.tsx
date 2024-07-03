import Image, { StaticImageData } from "next/image";
import styles from "./page.module.css";

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
import { getDictionary } from "../../../../translations/translations";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const t = getDictionary(params.lang);
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

export default function ArticlesPage({ params }: { params: { lang: string } }) {
  const t = getDictionary(params.lang);
  return (
    <section className={styles.content}>
      <h1>{t.resources.articles}</h1>
      <div className={styles.gridList}>
        <Article
          link="/resources/articles/1"
          lang={params.lang}
          image={strongPwdMini}
          title={t.articles[1].title}
          summary={t.articles[1].summary}
        />
        <Article
          link="/resources/articles/2"
          lang={params.lang}
          image={samePwdMini}
          title={t.articles[2].title}
          summary={t.articles[2].summary}
        />
        <Article
          link="/resources/articles/3"
          lang={params.lang}
          image={passwordManagerImg}
          title={t.articles[3].title}
          summary={t.articles[3].summary}
        />
        <Article
          link="/resources/articles/4"
          lang={params.lang}
          image={securityModelsMini}
          title={t.articles[4].title}
          summary={t.articles[4].summary}
        />
        <Article
          link="/resources/articles/5"
          lang={params.lang}
          image={authenticationMini}
          title={t.articles[5].title}
          summary={t.articles[5].summary}
        />
        <Article
          link="/resources/articles/6"
          lang={params.lang}
          image={unsecureWebsitesMini}
          title={t.articles[6].title}
          summary={t.articles[6].summary}
        />
        <Article
          link="/resources/articles/7"
          lang={params.lang}
          image={privacyMini}
          title={t.articles[7].title}
          summary={t.articles[7].summary}
        />
        <Article
          link="/resources/articles/8"
          lang={params.lang}
          image={navVSPwdManagersMini}
          title={t.articles[8].title}
          summary={t.articles[8].summary}
        />
        <Article
          link="/resources/articles/9"
          lang={params.lang}
          image={pwdFormsMini}
          title={t.articles[9].title}
          summary={t.articles[9].summary}
        />
        <Article
          link="/resources/articles/10"
          lang={params.lang}
          image={pwdMini}
          title={t.articles[10].title}
          summary={t.articles[10].summary}
        />
      </div>
    </section>
  );
}

function Article(p: { image: StaticImageData; title: string; summary: string; lang: string; link: string }) {
  const t = getDictionary(p.lang);
  return (
    <a className={styles.articleLink} href={p.link}>
      <div className={styles.miniature}>
        <Image src={p.image} alt="" />
      </div>
      <h2>{p.title}</h2>
      <p>{p.summary}</p>
      <p className={styles.readButton}>{`${t.articles.readArticle} »`}</p>
    </a>
  );
}

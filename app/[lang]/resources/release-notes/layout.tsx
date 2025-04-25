import { getDictionary } from "../../../../translations/translations";
import styles from "./layout.module.css";
import { TabsNav } from "./tabsNav";

export default async function Page({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = getDictionary(lang);
  return (
    <div className={styles.contentBackground}>
      <div className={styles.content}>
        <h1>{t.resources.releaseNotes}</h1>
        <TabsNav lang={lang} />
        {children}
      </div>
    </div>
  );
}

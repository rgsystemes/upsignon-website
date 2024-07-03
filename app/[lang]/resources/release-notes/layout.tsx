import { getDictionary } from "../../../../translations/translations";
import styles from "./layout.module.css";
import { TabsNav } from "./tabsNav";

export default function Page({ children, params }: { children: React.ReactNode; params: { lang: string } }) {
  const t = getDictionary(params.lang);
  return (
    <div className={styles.content}>
      <h1>{t.resources.releaseNotes}</h1>
      <TabsNav lang={params.lang} />
      {children}
    </div>
  );
}

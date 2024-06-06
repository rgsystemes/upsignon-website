import styles from "../notes.module.css";

export default function ExtensionNotes({ params }: { params: { lang: string } }) {
  return <section className={styles.article}>ExtensionNotes</section>;
}

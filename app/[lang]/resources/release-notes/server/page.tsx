import styles from "../notes.module.css";

export default function ServerNotes({ params }: { params: { lang: string } }) {
  return <section className={styles.article}>ServerNotes</section>;
}

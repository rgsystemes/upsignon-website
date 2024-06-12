"use client";

import { useState } from "react";
import Modal from "react-modal";
import { getDictionary } from "../../../translations/translations";
import styles from "./contactLaterButton.module.css";

Modal.setAppElement("#body");
export function ContactLaterButton(p: { lang: string; className?: string | null }) {
  const [isOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const t = getDictionary(p.lang);

  return (
    <>
      <button onClick={openModal} className={p.className ?? styles.actionButton}>
        {t.actions.callMeBackLater}
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel={t.actions.callMeBackLater}
        preventScroll
        shouldReturnFocusAfterClose={false}
        className={styles.modal}
      >
        <ContactLaterForm lang={p.lang} onRequestClose={closeModal} />
      </Modal>
    </>
  );
}

function ContactLaterForm(p: { lang: string; onRequestClose: () => void }) {
  const t = getDictionary(p.lang);
  function submit(ev) {
    ev.preventDefault();
    const name = ev.target[0].value;
    const company = ev.target[1].value;
    const email = ev.target[2].value;
    const tel = ev.target[3].value;
    const date = ev.target[4].value;
    const subject = t.callBackForm.mailSubject;
    const body = t.callBackForm.mailBody
      .replaceAll("$info", `${name}\n${company}\n${email}\n${tel}`)
      .replaceAll("$date", date);
    window.open(`mailto:contact@upsignon.eu?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
    p.onRequestClose();
  }
  return (
    <div className={styles.modalContent}>
      <h1>{t.actions.callMeBackLater}</h1>
      <form onSubmit={submit} className={styles.form}>
        <label htmlFor="name">{t.callBackForm.nameLabel}</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="company">{t.callBackForm.companyLabel}</label>
        <input type="text" id="company" name="company" required />

        <label htmlFor="email">{t.callBackForm.emailLabel}</label>
        <input type="text" id="email" name="email" required />

        <label htmlFor="tel">{t.callBackForm.telLabel}</label>
        <input type="tel" id="tel" name="tel" required />

        <label htmlFor="date">{t.callBackForm.callbackDate}</label>
        <input type="text" id="date" name="date" required />

        <input type="submit" value={t.callBackForm.submit} />
      </form>
      <button onClick={p.onRequestClose} className={styles.cancelButton}>
        {t.actions.cancel}
      </button>
    </div>
  );
}

"use client";

import { useState } from "react";
import Modal from "react-modal";
import { getDictionary } from "../../../translations/translations";
import styles from "./freeTrial.module.css";

Modal.setAppElement("#body");
export function FreeTrialButton(p: { lang: string; className?: string | null }) {
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
        {t.actions.freeTrial}
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel={t.actions.freeTrial}
        preventScroll
        shouldReturnFocusAfterClose={false}
        className={styles.modal}
      >
        <FreeTrialForm lang={p.lang} onRequestClose={closeModal} />
      </Modal>
    </>
  );
}

function FreeTrialForm(p: { lang: string; onRequestClose: () => void }) {
  const t = getDictionary(p.lang);
  function submit(ev) {
    ev.preventDefault();
    const name = ev.target[0].value;
    const company = ev.target[1].value;
    const siret = ev.target[2].value;
    const email = ev.target[3].value;
    const tel = ev.target[4].value;
    const subject = t.freeTrialForm.mailSubject;
    const body = t.freeTrialForm.mailBody.replaceAll("$info", `${name}\n${company}\nSIRET:${siret}\n${email}\n${tel}`);
    window.open(`mailto:contact@upsignon.eu?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
    p.onRequestClose();
  }
  return (
    <div className={styles.modalContent}>
      <h1>{t.actions.freeTrial}</h1>
      <form onSubmit={submit} className={styles.form}>
        <label htmlFor="name">{t.freeTrialForm.nameLabel}</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="company">{t.freeTrialForm.companyLabel}</label>
        <input type="text" id="company" name="company" required />

        <label htmlFor="siret">{t.freeTrialForm.siret}</label>
        <input type="text" id="siret" name="siret" required />

        <label htmlFor="email">{t.freeTrialForm.emailLabel}</label>
        <input type="text" id="email" name="email" required />

        <label htmlFor="tel">{t.freeTrialForm.telLabel}</label>
        <input type="tel" id="tel" name="tel" required />

        <input type="submit" value={t.freeTrialForm.submit} />
      </form>
      <button onClick={p.onRequestClose} className={styles.cancelButton}>
        {t.actions.cancel}
      </button>
    </div>
  );
}

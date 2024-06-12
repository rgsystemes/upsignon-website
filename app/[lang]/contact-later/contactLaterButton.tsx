"use client";

import { useState } from "react";
import Modal from "react-modal";
import { getDictionary } from "../../../translations/translations";
import styles from "./contactLaterButton.module.css";

Modal.setAppElement("#body");
export function ContactLaterButton(p: { lang: string }) {
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
      <button onClick={openModal} className={styles.actionButton}>
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
    var req = new XMLHttpRequest();
    req.open("POST", "https://app.upsignon.eu/contact-later", true);
    req.setRequestHeader("Content-Type", "application/json");
    req.onreadystatechange = function () {
      if (req.readyState === 4) {
        if (req.status === 200) {
          ev.target.reset();
          alert(t.callBackForm.success);
          p.onRequestClose();
        } else {
          alert(t.callBackForm.fail);
        }
      }
    };
    req.send(
      JSON.stringify({
        name: ev.target[0].value,
        company: ev.target[1].value,
        email: ev.target[2].value,
        tel: ev.target[3].value,
        date: ev.target[4].value,
      })
    );
  }
  return (
    <div className={styles.modalContent}>
      <h1>{t.actions.callMeBackLater}</h1>
      <form onSubmit={submit} className={styles.form}>
        <label htmlFor="name">{t.callBackForm.nameLabel}</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="name">{t.callBackForm.companyLabel}</label>
        <input type="text" id="company" name="company" required />
        <label htmlFor="name">{t.callBackForm.emailLabel}</label>
        <input type="text" id="email" name="email" required />
        <label htmlFor="name">{t.callBackForm.telLabel}</label>
        <input type="tel" id="tel" name="tel" required />
        <label htmlFor="name">{t.callBackForm.callbackDate}</label>
        <input type="text" id="date" name="date" required />
        <input type="submit" value={t.callBackForm.submit} />
      </form>
      <button onClick={p.onRequestClose} className={styles.cancelButton}>
        {t.actions.cancel}
      </button>
    </div>
  );
}

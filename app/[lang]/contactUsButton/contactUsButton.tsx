"use client";

import { useState } from "react";
import Modal from "react-modal";
import { getDictionary } from "../../../translations/translations";
import styles from "./contactUsButton.module.css";
import Link from "next/link";
import plpImg from "../../../public/images/plp.jpeg";
import Image from "next/image";

Modal.setAppElement("#body");
export function ContactUsButton(p: { lang: string; className: string }) {
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
      <button onClick={openModal} className={p.className}>
        {t.actions.contactUs}
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel={t.actions.contactUs}
        preventScroll
        shouldReturnFocusAfterClose={false}
        className={styles.modal}
      >
        <ContactUsForm lang={p.lang} onRequestClose={closeModal} />
      </Modal>
    </>
  );
}

function ContactUsForm(p: { lang: string; onRequestClose: () => void }) {
  const t = getDictionary(p.lang);
  return (
    <div className={styles.modalContent}>
      <h1>{t.actions.contactUs}</h1>
      <Image src={plpImg} alt="" className={styles.photo} />
      <div>Pierre-Loïc</div>
      <Link href="mailto:contact@upsignon.eu" className={styles.link}>
        pierreloic.poirieux@upsignon.eu
      </Link>
      <Link href="tel:+33659290624" className={styles.link}>
        +33 6 59 29 06 24
      </Link>
      <Link href="https://calendly.com/upsignon" className={styles.link}>
        {t.actions.calendarLink}
      </Link>
      <button onClick={p.onRequestClose} className={styles.closeButton}>
        {t.actions.close}
      </button>
    </div>
  );
}

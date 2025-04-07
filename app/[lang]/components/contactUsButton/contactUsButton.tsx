"use client";

import { useState } from "react";
import Modal from "react-modal";
import { getDictionary } from "../../../../translations/translations";
import styles from "./contactUsButton.module.css";
import Link from "next/link";
import giregImg from "../../../../public/images/gireg.jpg";
import Image from "next/image";
import { ModalLinkOpener } from "../../../useModalLinkOpener";

Modal.setAppElement("#body");
export function ContactUsButton(p: { lang: string; className: string; text?: string }) {
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
      <button onClick={openModal} className={`${styles.modalDefaultButton} ${p.className}`}>
        {p.text ?? t.actions.contactUs}
      </button>
      <ModalLinkOpener modalLinkValue={"contact-us"} setIsOpen={setIsOpen} />
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
      <Image src={giregImg} alt="" className={styles.photo} />
      <div>Gireg</div>
      <Link href="mailto:contact@rgsystem.septeo.com" className={styles.link}>
        contact@rgsystem.septeo.com
      </Link>
      <Link href="tel:+33411934200" className={styles.link}>
        +33 4 11 93 42 99
      </Link>
      {/* <Link href="https://calendly.com/upsignon" className={styles.link} target="_blank">
        {t.actions.calendarLink}
      </Link> */}
      <button onClick={p.onRequestClose} className={styles.closeButton}>
        {t.actions.close}
      </button>
    </div>
  );
}

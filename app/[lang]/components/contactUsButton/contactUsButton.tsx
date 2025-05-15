"use client";

import { useState } from "react";
import Modal from "react-modal";
import { getDictionary } from "../../../../translations/translations";
import styles from "./contactUsButton.module.css";
import { ModalLinkOpener } from "../../../useModalLinkOpener";
import { useHubspotForm } from "next-hubspot";

Modal.setAppElement("#body");
export function ContactUsButton(p: {
  lang: string;
  className: string;
  text?: string;
}) {
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
      <HubspotForm />
    </div>
  );
}

const HubspotForm = () => {
  const { isFormCreated, isError, error } = useHubspotForm({
    portalId: "145668054",
    formId: "3fd5d5c6-2c01-4dc7-bace-d9f412f7bdbe",
    region: "eu1",
    target: "#hubspot-form-wrapper",
  });

  return <div id="hubspot-form-wrapper" />;
};

"use client";

import { useEffect, useRef, useState } from "react";
import Modal from "react-modal";
import { getDictionary } from "../../../../translations/translations";
import styles from "./formModal.module.css";
import { ModalLinkOpener } from "../../../useModalLinkOpener";
import { useHubspotForm } from "next-hubspot";

Modal.setAppElement("#body");
export function FormModalButton(p: {
  lang: string;
  className: string;
  buttonText: string;
  modalTitle: string;
  modalLinkValue: string;
  isFreeTrialForm?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <button
        onClick={openModal}
        className={`${styles.modalDefaultButton} ${p.className}`}
      >
        {p.buttonText}
      </button>
      <ModalLinkOpener
        modalLinkValue={p.modalLinkValue}
        setIsOpen={setIsOpen}
      />
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel={p.modalTitle}
        preventScroll
        shouldReturnFocusAfterClose={false}
        className={`${styles.modal} ${p.isFreeTrialForm ? styles.modalNoPadding : ""}`}
      >
        <Forms
          lang={p.lang}
          title={p.modalTitle}
          isFreeTrialForm={p.isFreeTrialForm}
        ></Forms>
      </Modal>
    </>
  );
}

function Forms(p: { lang: string; title: string; isFreeTrialForm: boolean }) {
  if (p.isFreeTrialForm) {
    return <TrialRequestIframe />;
  }

  const t = getDictionary(p.lang);
  const [isReseller, setIsReseller] = useState<boolean | null>(null);
  return (
    <div className={styles.modalContent}>
      <h1>{p.title}</h1>
      <div className={styles.activityForm}>
        <p>{t.contactUsForm.activity}</p>
        <div
          className={styles.choiceContainer}
          onClick={() => setIsReseller(true)}
        >
          <input
            type="radio"
            name="msp"
            value="yes"
            checked={isReseller === true}
            onChange={() => setIsReseller(true)}
          />
          <label htmlFor="msp">{t.contactUsForm.activityMSP}</label>
        </div>
        <div
          className={styles.choiceContainer}
          onClick={() => setIsReseller(false)}
        >
          <input
            type="radio"
            name="company"
            value="no"
            checked={isReseller === false}
            onChange={() => setIsReseller(false)}
          />
          <label htmlFor="company">{t.contactUsForm.activityEnterprise}</label>
        </div>
      </div>
      {isReseller === null ? null : (
        <div className={styles.hubspotFormContainer}>
          <HubspotForm
            isVisible={isReseller}
            id="contact-reseller"
            portalId="7012322"
            formId="82f08dec-7d52-4184-a1ce-a15143c4329f"
            region="na1"
          />
          <HubspotForm
            isVisible={!isReseller}
            id="contact-company"
            portalId="20410676"
            formId="56b2dec4-d8a0-43df-9454-0ec6e9bae2b2"
            region="na1"
          />
        </div>
      )}
    </div>
  );
}

const HubspotForm = (p: {
  id: string;
  portalId: string;
  formId: string;
  region: string;
  isVisible: boolean;
}) => {
  const htmlId = `hubspot-form-${p.id}`;
  const { isFormCreated, isError, error } = useHubspotForm({
    portalId: p.portalId,
    formId: p.formId,
    region: p.region,
    target: `#${htmlId}`,
  });

  return <div id={htmlId} style={p.isVisible ? null : { display: "none" }} />;
};

function TrialRequestIframe() {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [iframeHeight, setIframeHeight] = useState(200);

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (event.source !== iframeRef.current?.contentWindow) {
        return;
      }

      const nextHeight = Number(
        (event.data as { frameHeight?: unknown })?.frameHeight,
      );
      if (Number.isFinite(nextHeight)) {
        setIframeHeight(nextHeight);
      }
    }

    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  let iframeSrc = "https://admin-pro.upsignon.eu/trial-request";
  if (window.location.hostname === "localhost") {
    iframeSrc = "http://localhost:8090/trial-request";
  } else if (window.location.hostname.endsWith("upsignon.vercel.app")) {
    iframeSrc = "https://pro-staging.upsignon.eu/admin/trial-request";
  } else {
    iframeSrc = "https://admin-pro.upsignon.eu/trial-request";
  }
  return (
    <div className={styles.modalContent}>
      <iframe
        ref={iframeRef}
        src={iframeSrc}
        title="Trial request form"
        className={styles.trialRequestIframe}
        style={{ height: `${iframeHeight}px` }}
      />
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import Modal from "react-modal";
import { getDictionary } from "../../../../translations/translations";
import styles from "./formModal.module.css";
import { useModalLinkOpener } from "../../../useModalLinkOpener";

Modal.setAppElement("#body");
export function FormModalButton(p: {
  lang: string;
  className: string;
  buttonText: string;
  submitButtonText: string;
  modalTitle: string;
  fields: { t: string; k: string; r: boolean }[];
  onSubmit: (values: { [k: string]: string }) => Promise<void>;
  modalLinkValue?: string | null;
}) {
  const [isOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  useModalLinkOpener(p.modalLinkValue, setIsOpen);

  return (
    <>
      <button onClick={openModal} className={`${styles.modalDefaultButton} ${p.className}`}>
        {p.modalTitle}
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel={p.modalTitle}
        preventScroll
        shouldReturnFocusAfterClose={false}
        className={styles.modal}
      >
        <GetQuoteForm
          lang={p.lang}
          modalTitle={p.modalTitle}
          submitButtonText={p.submitButtonText}
          onSubmit={(values: { [k: string]: string }) => p.onSubmit(values)}
          close={closeModal}
          fields={p.fields}
        />
      </Modal>
    </>
  );
}

function GetQuoteForm(p: {
  lang: string;
  modalTitle: string;
  submitButtonText: string;
  onSubmit: (values: { [k: string]: string }) => Promise<void>;
  close: () => void;
  fields: { t: string; k: string; r: boolean }[];
}) {
  const lock = useRef(false);
  const submit = (ev) => {
    ev.preventDefault();
    if (lock.current) return;
    lock.current = true;
    var val = {};
    p.fields.forEach((f, i) => {
      val[f.k] = ev.target[i].value;
    });
    p.onSubmit(val)
      .then(() => {
        close();
      })
      .catch(() => {
        // ignore
      })
      .finally(() => {
        lock.current = false;
      });
  };
  const t = getDictionary(p.lang);
  return (
    <div className={styles.modalContent}>
      <h1>{p.modalTitle}</h1>
      <form onSubmit={submit} className={styles.form}>
        {p.fields.map((f) => {
          return <FieldInput key={f.k} t={f.t} k={f.k} r={f.r} />;
        })}

        <input type="submit" value={p.submitButtonText} />
      </form>
      <button onClick={p.close} className={styles.cancelButton}>
        {t.actions.cancel}
      </button>
    </div>
  );
}

function FieldInput(p: { t: string; k: string; r: boolean }) {
  const [v, setV] = useState<string>("");

  useEffect(() => {
    setV(localStorage.getItem(p.k));
  }, [p.k]);

  const onChange = (ev) => {
    setV(ev.target.value);
    localStorage.setItem(p.k, ev.target.value);
  };

  return (
    <>
      <label htmlFor={p.k} className={p.r ? styles.required : null}>
        {p.t}
      </label>
      <input type="text" id={p.k} name={p.k} required={p.r} value={v} onChange={onChange} />
    </>
  );
}

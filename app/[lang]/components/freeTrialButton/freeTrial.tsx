"use client";

import Modal from "react-modal";
import { getDictionary } from "../../../../translations/translations";
import { FormModalButton } from "../formModal/formModal";

Modal.setAppElement("#body");
export function FreeTrialButton(p: { lang: string; className: string }) {
  const t = getDictionary(p.lang);
  return (
    <FormModalButton
      lang={p.lang}
      className={p.className}
      buttonText={t.actions.freeTrial}
      submitButtonText={t.freeTrialForm.submit}
      modalTitle={t.actions.freeTrial}
      fields={[
        { t: t.freeTrialForm.nameLabel, k: "contactName", r: true },
        { t: t.freeTrialForm.companyLabel, k: "companyName", r: true },
        { t: t.freeTrialForm.siret, k: "companySiret", r: true },
        { t: t.freeTrialForm.emailLabel, k: "contactEmail", r: true },
        { t: t.freeTrialForm.telLabel, k: "contactPhone", r: true },
      ]}
      onSubmit={(values: { [k: string]: string }): Promise<void> => {
        const subject = t.freeTrialForm.mailSubject;
        const body = t.freeTrialForm.mailBody.replaceAll(
          "$info",
          `${values.contactName}\n${values.companyName}\nSIRET:${values.companySiret}\n${values.contactEmail}\n${values.contactPhone}`
        );
        window.open(
          `mailto:contact@upsignon.eu?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
        );
        return Promise.resolve();
      }}
    />
  );
}

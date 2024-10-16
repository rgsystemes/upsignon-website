"use client";

import Modal from "react-modal";
import { FormModalButton } from "../formModal/formModal";
import { getDictionary } from "../../../../translations/translations";
import { sendAppServerRequest } from "../helpers/sendAppServerRequest";

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
        return sendAppServerRequest("request-test", t.successMessage, {
          contactName: values.contactName,
          contactEmail: values.contactEmail,
          contactPhone: values.contactPhone,
          companyName: values.companyName,
          companySiret: values.companySiret,
        });
      }}
      modalLinkValue="free-trial"
    />
  );
}

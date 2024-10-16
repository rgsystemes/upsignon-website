"use client";

import { getDictionary } from "../../../../translations/translations";
import { FormModalButton } from "../formModal/formModal";
import { sendAppServerRequest } from "../helpers/sendAppServerRequest";

export function ContactLaterButton(p: { lang: string; className: string }) {
  const t = getDictionary(p.lang);
  return (
    <FormModalButton
      lang={p.lang}
      className={p.className}
      buttonText={t.actions.callMeBackLater}
      submitButtonText={t.actions.callMeBackLater}
      modalTitle={t.actions.callMeBackLater}
      fields={[
        { t: t.callBackForm.nameLabel, k: "contactName", r: true },
        { t: t.callBackForm.companyLabel, k: "companyName", r: true },
        { t: t.callBackForm.emailLabel, k: "contactEmail", r: true },
        { t: t.callBackForm.telLabel, k: "contactPhone", r: true },
        { t: t.callBackForm.callbackDate, k: "callbackDate", r: true },
      ]}
      onSubmit={(values: { [k: string]: string }): Promise<void> => {
        return sendAppServerRequest("contact-later", t.successMessage, {
          contactName: values.contactName,
          contactEmail: values.contactEmail,
          contactPhone: values.contactPhone,
          companyName: values.companyName,
          callbackDate: values.callbackDate,
        });
      }}
      modalLinkValue="contact-later"
    />
  );
}

"use client";

import { getDictionary } from "../../../translations/translations";
import { FormModalButton } from "../formModal/formModal";

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
      onSubmit={(values: { [k: string]: string }, close: () => void): Promise<void> | void => {
        const subject = t.callBackForm.mailSubject;
        const body = t.callBackForm.mailBody
          .replaceAll(
            "$info",
            `${values.contactName}\n${values.companyName}\n${values.contactEmail}\n${values.contactPhone}`
          )
          .replaceAll("$date", values.callbackDate);
        window.open(
          `mailto:contact@upsignon.eu?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
        );
        close();
      }}
    />
  );
}

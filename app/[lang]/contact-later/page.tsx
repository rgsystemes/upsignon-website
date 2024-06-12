"use client";

import { getDictionary } from "../../../translations/translations";
import styles from "./page.module.css";

export default function Page(p: { params: { lang: string } }) {
  const t = getDictionary(p.params.lang);
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
    <div className={styles.content}>
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
    </div>
  );
}

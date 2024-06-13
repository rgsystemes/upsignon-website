"use client";

import { useState } from "react";
import { getDictionary } from "../../../translations/translations";
import styles from "./priceSimulator.module.css";
import { useRef } from "react";
import { useEffect } from "react";
function f(n: number): string {
  return n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export function PriceSimulator(p: { lang: string }) {
  const t = getDictionary(p.lang);

  const licenceRef = useRef(null);
  useEffect(() => {
    const onMousewheel = function (e) {
      licenceRef.current?.blur();
    };
    const onKeydown = function (e) {
      var key = e.charCode || e.keyCode;
      // Disable Up and Down Arrows on Keyboard
      if (key == 38 || key == 40) {
        e.preventDefault();
      }
    };
    licenceRef.current?.addEventListener("mousewheel", onMousewheel);
    licenceRef.current?.addEventListener("keydown", onKeydown);
    return () => {
      licenceRef.current?.removeEventListener("mousewheel", onMousewheel);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      licenceRef.current?.removeEventListener("keydown", onKeydown);
    };
  }, [licenceRef]);

  const defaultLicences = 50;
  const [l, setL] = useState(defaultLicences);
  const l1 = Math.max(0, Math.min(l, 1000));
  const l2 = Math.max(1000, Math.min(l, 12000)) - 1000;
  const l3 = Math.max(12000, l) - 12000;
  const [selfHosting, setSelfHosting] = useState(false);
  const [y3, setY3] = useState(true);

  const nY = y3 ? 3 : 1;
  const p1 = 18;
  const p2 = p1 * 0.95;
  const p3 = p1 * 0.8;
  const tva = 1.2;
  const r3Y = -0.1;
  const c1 = nY * p1 * l1;
  const c1TTC = c1 * tva;
  const c2 = nY * p2 * l2;
  const c2TTC = c2 * tva;
  const reducC2 = -p1 * 0.05 * l2;
  const c3 = nY * p3 * l3;
  const c3TTC = c3 * tva;
  const reducC3 = -p1 * 0.2 * l3;
  const cTotalLicences = c1 + c2 + c3;
  const reduc3Y = (y3 ? 1 : 0) * cTotalLicences * r3Y;
  const reduc3YTTC = reduc3Y * tva;
  const totalLicences = c1 + c2 + c3 + reduc3Y;
  const totalLicencesTTC = totalLicences * tva;
  const totalLicencesReduc = reducC2 + reducC3 + reduc3Y;
  const pHost = 1000;
  const cHost = (selfHosting ? 1 : 0) * (y3 ? 3 : 1) * pHost;
  const cHostTTC = cHost * tva;
  const grandTotal = totalLicences + cHost;
  const grandTotalTTC = grandTotal * tva;
  const avgLicencePrice = l > 0 ? totalLicences / (l * nY) : null;
  return (
    <div className={styles.simulatorContainer}>
      <h2>{t.pricing.simu.priceSimulator}</h2>
      <div>
        <span>{t.pricing.simu.nbLicences}</span>
        <input
          ref={licenceRef}
          type="number"
          className={styles.licenceInput}
          min={0}
          onChange={(ev) => {
            setL(ev.target.value ? parseInt(ev.target.value) : 0);
          }}
          placeholder={`${defaultLicences}`}
        />
      </div>
      <div>
        <span>{t.pricing.simu.years3}</span>
        <input
          type="checkbox"
          className={styles.years3Checkbox}
          checked={y3}
          onChange={(ev) => {
            setY3(ev.target.checked);
          }}
        />
      </div>
      <div>
        <span>{t.pricing.simu.selfHosting}</span>
        <input
          type="checkbox"
          className={styles.selfHostingCheckbox}
          checked={selfHosting}
          onChange={(ev) => {
            setSelfHosting(ev.target.checked);
          }}
          placeholder={`${defaultLicences}`}
        />
      </div>
      {l > 0 && (
        <table className={styles.simulatorTable}>
          <thead>
            <tr>
              <th>{t.pricing.simu.article}</th>
              <th>{t.pricing.simu.units}</th>
              <th>{t.pricing.simu.years}</th>
              <th>{t.pricing.simu.unitPrice}</th>
              <th>{t.pricing.simu.sumPrice}</th>
              <th>{t.pricing.simu.sumPriceWithTaxes}</th>
              <th>{t.pricing.simu.sumDiscounts}</th>
            </tr>
          </thead>
          <tbody>
            {l1 > 0 && (
              <tr>
                <td>{t.pricing.simu.licences1.replaceAll("$to", (1000).toLocaleString())}</td>
                <td>{l1.toLocaleString()}</td>
                <td>{nY}</td>
                <td>{f(p1)}€</td>
                <td>{f(c1)}€</td>
                <td>{f(c1TTC)}€</td>
                <td>-</td>
              </tr>
            )}
            {l2 > 0 && (
              <tr>
                <td>
                  {t.pricing.simu.licences2
                    .replaceAll("$from", (1001).toLocaleString())
                    .replaceAll("$to", (12000).toLocaleString())}
                </td>
                <td>{l2.toLocaleString()}</td>
                <td>{nY}</td>
                <td>{f(p2)}€</td>
                <td>{f(c2)}€</td>
                <td>{f(c2TTC)}€</td>
                <td>{f(reducC2)}€</td>
              </tr>
            )}
            {l3 > 0 && (
              <tr>
                <td>{t.pricing.simu.licences3.replaceAll("$from", (12001).toLocaleString())}</td>
                <td>{l3.toLocaleString()}</td>
                <td>{nY}</td>
                <td>{f(p3)}€</td>
                <td>{f(c3)}€</td>
                <td>{f(c3TTC)}€</td>
                <td>{f(reducC3)}€</td>
              </tr>
            )}
            {y3 && (
              <tr>
                <td>{t.pricing.simu.discount3Years}</td>
                <td></td>
                <td></td>
                <td>-10%</td>
                <td>{f(reduc3Y)}€</td>
                <td>{f(reduc3YTTC)}€</td>
                <td>{f(reduc3Y)}€</td>
              </tr>
            )}
            <tr>
              <th>{t.pricing.simu.totalLicences}</th>
              <th>{l.toLocaleString()}</th>
              <th>{nY}</th>
              <th>{f(avgLicencePrice)}€</th>
              <th>{f(totalLicences)}€</th>
              <th>{f(totalLicencesTTC)}€</th>
              <th>{totalLicencesReduc < 0 ? `${f(totalLicencesReduc)}€` : "-"}</th>
            </tr>
            {selfHosting && (
              <tr>
                <td>{t.pricing.simu.selfHostingPacakge}</td>
                <td>1</td>
                <td>{nY}</td>
                <td>{f(pHost)}€</td>
                <td>{f(cHost)}€</td>
                <td>{f(cHostTTC)}€</td>
                <td>-</td>
              </tr>
            )}
            <tr>
              <th>{t.pricing.simu.total}</th>
              <th></th>
              <th></th>
              <th></th>
              <th className={styles.grandTotal}>{f(grandTotal)}€</th>
              <th>{f(grandTotalTTC)}€</th>
              <th></th>
            </tr>
          </tbody>
        </table>
      )}
      <div className={styles.cashPayment}>{t.pricing.simu.singlePayment}</div>
    </div>
  );
}

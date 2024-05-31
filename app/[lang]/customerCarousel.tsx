import Image from "next/image";
import styles from "./customerCarousel.module.css";

import adicoImg from "../../public/customerLogos/adico.jpg";
import caletreImg from "../../public/customerLogos/caletre.svg";
import cd11Img from "../../public/customerLogos/cd11.png";
import chambersignImg from "../../public/customerLogos/chambersign.svg";
import ecollectivitesImg from "../../public/customerLogos/ecollectivites.png";
import esigelecImg from "../../public/customerLogos/esigelec.png";
import gersNumeriqueImg from "../../public/customerLogos/gersNumerique.jpg";
import hauteGaronneNumeriqueImg from "../../public/customerLogos/hauteGaronneNumerique.svg";
import lafibre64Img from "../../public/customerLogos/lafibre64.png";
import limogesMetropoleImg from "../../public/customerLogos/limogesMetropole.svg";
import mancheNumeriqueImg from "../../public/customerLogos/mancheNumerique.png";
import orleansMetropoleImg from "../../public/customerLogos/orleansMetropole.svg";
import regionOccitanieImg from "../../public/customerLogos/regionOccitanie.svg";
import smicaImg from "../../public/customerLogos/smica.png";
import tisseoImg from "../../public/customerLogos/tisseo.png";
import urbasolarImg from "../../public/customerLogos/urbasolar.png";
import varImg from "../../public/customerLogos/var.png";
import wapliImg from "../../public/customerLogos/wapli.png";

export default function CustomerCarousel() {
  return (
    <div className={styles.carousel}>
      <div className={styles.customer}>
        <Image src={limogesMetropoleImg} alt="Limoges Métropole" height={150} />
      </div>
      <div className={styles.customer}>
        <Image src={hauteGaronneNumeriqueImg} alt="Haute Garonne Numérique" height={150} />
      </div>
      <div className={styles.customer}>
        <Image src={chambersignImg} alt="Chambersign" width={300} />
      </div>
      <div className={styles.customer}>
        <Image src={esigelecImg} alt="Esigelec" height={150} />
      </div>
      <div className={styles.customer}>
        <Image src={ecollectivitesImg} alt="E-Collectivités" width={300} />
      </div>
      <div className={styles.customer}>
        <Image src={cd11Img} alt="Conseil Départemental de l'Aude" height={150} />
      </div>
      <div className={styles.customer}>
        <Image src={tisseoImg} alt="Tisseo" height={150} />
      </div>
      <div className={styles.customer}>
        <Image src={orleansMetropoleImg} alt="Orléans-Métropole" height={150} />
      </div>
      <div className={styles.customer}>
        <Image src={mancheNumeriqueImg} alt="Manche-numérique" width={300} />
      </div>
      <div className={styles.customer}>
        <Image src={varImg} alt="Département du Var" height={150} />
      </div>
      <div className={styles.customer}>
        <Image src={wapliImg} alt="WAPLI" height={150} />
      </div>
      <div className={styles.customer} style={{ padding: 30, backgroundColor: "rgba(5, 31, 56)" }}>
        <Image src={urbasolarImg} alt="Urbasolar" width={300} />
      </div>
      <div className={styles.customer}>
        <Image src={adicoImg} alt="ADICO" height={120} />
      </div>
      <div className={styles.customer}>
        <Image src={lafibre64Img} alt="La Fibre 64" height={120} />
      </div>
      <div className={styles.customer}>
        <Image src={smicaImg} alt="SMICA" width={250} />
      </div>
      <div className={styles.customer}>
        <Image src={regionOccitanieImg} alt="La Région Occitanie" height={150} />
      </div>
      <div className={styles.customer}>
        <Image src={gersNumeriqueImg} alt="Gers Numérique" width={300} />
      </div>
      <div className={styles.customer}>
        <Image src={caletreImg} alt="Caletré" style={{ backgroundColor: "#261747", padding: 30 }} height={150} />
      </div>
    </div>
  );
}

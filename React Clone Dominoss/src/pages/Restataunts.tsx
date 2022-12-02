import React from "react";
import NavBar from "../components/navigation/NavBar";
import styles from "../scss/Restaraunt.module.scss";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import { useTheme } from "../hooks/useTheme";

const Restataunts: React.FC = () => {
  const { theme, setTheme } = useTheme();
  
  return (
    <>
      <section className={styles.container}>
        <div className={styles.pizzeriya}>
          <img src={img1} alt="cafe" />
          <div className={styles.content}>
            <h3 className={styles.text}>Domminos Restaraunt</h3>
            <div>
              <p className={styles.text__small}>Location: Vinnitsia</p>
              <button className={styles.btn__buy}>Detailes</button>
            </div>
          </div>
        </div>
        <div className={styles.pizzeriya}>
          <img src={img2} alt="cafe" />
          <div className={styles.content}>
            <h3 className={styles.text}>Domminos Restaraunt</h3>
            <div>
              <p className={styles.text__small}>Location: Kiyev</p>
              <button className={styles.btn__buy}>Detailes</button>
            </div>
          </div>
        </div>
      </section>
      <NavBar />
    </>
  );
};

export default Restataunts;

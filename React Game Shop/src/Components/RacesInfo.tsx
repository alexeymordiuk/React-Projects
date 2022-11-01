import React from "react";
import { racesProps } from "../dates/Races/races";
import styles from "../scss/racespage/Races.module.scss";

const RacesInfo: React.FC<racesProps> = ({
  id,
  title,
  img1,
  text1,
  head1,
  text2,
  head2,
  text3,
  head3,
  img2,
}) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.content}>
        <img src={img1} alt="race" />
        <div className={styles.about}>
          <h3>{head1}</h3>
          <p>{text1}</p>
          <h3>{head2}</h3>
          <p>{text2}</p>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.left}>
          <h3>{head3}</h3>
          <p>{text3}</p>
        </div>
        <img src={img2} alt="race" />
      </div>
    </div>
  );
};

export default RacesInfo;

import React from "react";
import { classes, shipsClass } from "../dates/Starships/SliderShips";
import { useParams } from "react-router-dom";
import styles from "../scss/shipspage/ShipsAbout.module.scss";
import Header from "./Header";
import { Link } from "react-router-dom";
import Bg from '../img/starships/bg.png'

const ShipsAbout: React.FC = () => {
  const { id } = useParams();
  const show: any = shipsClass.find((item: classes) => item.id === (id && +id));

  return (
    <>
      <Header />
      <div
        className={styles.root}
        style={{ backgroundImage: `url(${Bg})` }}
      >
        <div className={styles.container}>
          <img src={show.img} alt="img" className={styles.image} />
          <div className={styles.content}>
            <div className={styles.desc}>{show.desc}</div>
            <p>{show.about}</p>
            <div className={styles.desc}>{show.invent}</div>
            <p>{show.inventory}</p>
          </div>
          <Link to='/ships'>
              <button className={styles.btn}>Back</button>
            </Link>
        </div>
      </div>
    </>
  );
};

export default ShipsAbout;

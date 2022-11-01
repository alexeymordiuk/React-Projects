import React from "react";
import Header from "./Header";
import styles from "../scss/AboutGame.module.scss";
import bg1 from "../img/aboutgame/bg2.png";
import bg2 from "../img/aboutgame/b1.png";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { ImEarth } from "react-icons/im";
import { SiPlaystation } from "react-icons/si";
import { GiPlanetCore } from "react-icons/gi";
import { info } from "../dates/AboutGame/aboutgame";
import Footer from "./Footer";

const AboutGame: React.FC = () => {
  return (
    <>
      <Header />
      <section className={styles.about}>
        <div
          className={styles.first__content}
          style={{ backgroundImage: `url(${bg1})` }}
        >
          <div className={styles.container}>
            <div className={styles.content}>
              <h2>No Man's Sky</h2>
              <h4>SIE / Hello Games</h4>
              <div className={styles.ps4}>PS4</div>
              <span>UAH 1 4999,00</span>
              <div className={styles.buttons}>
                <button className={styles.add}>Add to Card</button>
                <button className={styles.like}>
                  <MdOutlineFavoriteBorder />
                </button>
              </div>
              <p className={styles.release}>Release date 09/08/2016</p>
              <div className={styles.play}>
                <div>
                  <SiPlaystation className={styles.icons} />
                  <p>PS Plus required to play online</p>
                </div>
                <div>
                  <ImEarth className={styles.icons} />
                  <p>Supports up to 4 online players with PS Plus</p>
                </div>
                <div>
                  <GiPlanetCore className={styles.icons} />
                  <p>Online play possible</p>
                </div>
              </div>
            </div>
            <div className={styles.pegi}>
              <div>7+</div>
              <p>Implied Violence, Mild Violence, Intimidation</p>
            </div>
          </div>
        </div>
        <div className={styles.info} style={{ backgroundImage: `url(${bg2})` }}>
          <h2>No Man's Sky Key Features</h2>
          <div className={styles.wrapper}>
            {info.map(({ id, img, text, title }) => (
              <div key={id}>
                <img src={img} alt="img" />
                <div className={styles.text__content}>
                  <h4>{title}</h4>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default AboutGame;

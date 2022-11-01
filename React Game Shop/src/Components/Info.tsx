import styles from "../scss/Info.module.scss";
import { motion } from "framer-motion";
import Bg1 from "../img/Info/bg1.png";
import Bg2 from "../img/Info/bg2.png";
import Bg3 from "../img/Info/bg3.png";
import Bg4 from "../img/Info/bg4.png";

export const BlockAnimation = {
  hidden: {
    x: -1000,
    opacity: 0,
  },
  visible: (custom: any) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.1 },
  }),
};

const Info = () => {
  return (
    <motion.section
      className={styles.info}
      initial="hidden"
      viewport={{ amount: 0.1 }}
      whileInView="visible"
    >
      <div className={styles.wrraper__video}>
        <div className={styles.video__content}>
          <h1>No mans Sky</h1>
          <h3>By Now On</h3>
          <div className={styles.game__buy}>
            <div>PS4</div>
            <div>PS5</div>
            <div>Steam</div>
            <div>XBOXONE</div>
            <div>Game Pass</div>
          </div>
        </div>
        <video
          loop
          muted
          autoPlay
          src="images/nmsvideo.mp4"
          className={styles.video__item}
        >
          <source src="images/nmsvideo.webm" type="video/webm" />
          <source src="images/nmsvideo.mp4" type="video/mp4" />
        </video>
      </div>
      <div
        style={{ backgroundImage: `url(${Bg1})` }}
        className={styles.bg}
      >
        <div className={styles.content}>
        <div className={styles.video__content}>
          <h1>No mans Sky</h1>
          <h3>By Now On</h3>
          <div className={styles.game__buy}>
            <div>PS4</div>
            <div>PS5</div>
            <div>Steam</div>
            <div>XBOXONE</div>
            <div>Game Pass</div>
          </div>
        </div>
        </div>
      </div>
      <motion.div
        className={styles.bg}
        style={{ backgroundImage: `url(${Bg2})` }}
      >
        <motion.div
          className={styles.container}
          initial="hidden"
          viewport={{ amount: 0.1 }}
          whileInView="visible"
        >
          <motion.div className={styles.content} variants={BlockAnimation}>
            <h2>Explore the worlds</h2>
            <h5>In a infinity worlds</h5>
            <p className={styles.text}>
              Be the first to land on beautiful, unknown planets teeming with
              life. Survive hazardous environments, where alien civilizations
              seek their fortune and outlaws take it by force.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        className={styles.bg}
        style={{ backgroundImage: `url(${Bg3})` }}
      >
        <motion.div
          className={styles.container}
          initial="hidden"
          viewport={{ amount: 0.1 }}
          whileInView="visible"
        >
          <motion.div className={styles.content} variants={BlockAnimation}>
            <h2>Build</h2>
            <h5>Base building, anywhere, on any planet</h5>
            <p className={styles.text}>
              Team up to build anything from small outposts to complex
              multi-planet colonies. Farm for resources, hire helpers, or build
              a mobile base in your freighter.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        className={styles.bg}
        style={{ backgroundImage: `url(${Bg4})` }}
      >
        <motion.div
          className={styles.container}
          initial="hidden"
          viewport={{ amount: 0.1 }}
          whileInView="visible"
        >
          <motion.div className={styles.content} variants={BlockAnimation}>
            <h2>MULTIPLAYER</h2>
            <h5>Explore, Build and Survive Together</h5>
            <p className={styles.text}>
              Experience up to 32 player multiplayer when you summon the social
              hub, the Space Anomaly, from anywhere in the universe. Form a
              group, go on inter-galactic missions together or visit each
              other’s bases.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Info;

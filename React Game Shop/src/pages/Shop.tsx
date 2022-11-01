import { Link } from "react-router-dom";
import Header from "../Components/Header";
import styles from "../scss/shipspage/Shop.module.scss";
import bg from "../img/starships/bg2.png";
import { motion } from "framer-motion";
import img1 from "../img/shopitem/ship.png";
import img2 from "../img/shopitem/transort.png";
import img3 from "../img/shopitem/items.png";
import img4 from "../img/shopitem/weapons.png";

const BlockAnimation = {
	hidden: {
		y: 100,
		opacity: 0,
	},
	visible: (custom: any) => ({
		y: 0,
		opacity: 1,
		transition: { delay: custom * 0.3 },
	}), 
}

const Shop: React.FC = () => {
  return (
    <>
      <Header />
      <motion.section
        className={styles.root}
        initial="hidden"
        viewport={{ amount: 0.1}}
        whileInView="visible"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <motion.div className={styles.container}>
          <motion.div
            variants={BlockAnimation}
            custom={1}
          >
            <img src={img1} alt="ship" />
            <Link to="/orderships">
              <button>Order ships</button>
            </Link>
          </motion.div>
          <motion.div 
            variants={BlockAnimation}
            custom={2}
          >
          <img src={img2} alt="ship" />
            <Link to="/orderships">
              <button>Order freighters</button>
            </Link>
          </motion.div>
          <motion.div
            variants={BlockAnimation}
            custom={3}
          >
          <img src={img3} alt="ship" />
            <Link to="/orderships">
              <button>Order items</button>
            </Link>
          </motion.div>
          <motion.div
            variants={BlockAnimation}
            custom={4}
          >
          <img src={img4} alt="ship" />
            <Link to="/orderships">
              <button>Order weapons</button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  );
};

export default Shop;

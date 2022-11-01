import React from "react";

import styles from "../scss/pagesShop/Assortiment.module.scss";

import { Link } from "react-router-dom";

import { MdKeyboardArrowRight } from "react-icons/md";

const Assortiment = () => {
  return (
    <section className={styles.assort}>
      <div className={styles.container}>
        <div>
          <img src="img/candy.png" alt="candy" />
          <div className={styles.inner}>
            <h3>Useful candy</h3>
            <Link to="/candy">
              <button className={styles.btn}>Assort<MdKeyboardArrowRight className={styles.left}/></button>
            </Link>
          </div>
        </div>

        <div>
          <img src="img/candy.png" alt="candy" />
          <div className={styles.inner}>
            <h3>Useful candy</h3>
            <Link to="/candy">
              <button className={styles.btn}>Assort<MdKeyboardArrowRight className={styles.left}/></button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Assortiment;

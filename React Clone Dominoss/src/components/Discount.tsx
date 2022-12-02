import React from "react";
import NavBar from "./navigation/NavBar";
import Products from "./navigation/Products";
import img from '../assets/discount.jpg'
import styles from "../scss/Orders.module.scss";

const Discount: React.FC = () => {
  return (
    <>
      <Products />
      <section className={styles.discount__inner}>
        <div className={styles.discount__cart}>
        <img src={img} alt="img" />
        <div className={styles.discount__content}>
          <p className={styles.text}>Come to Domminos for big or standart pizzas and get 10% discount</p>
          <button className={styles.btn__buy}>Activate</button>
        </div>
        </div>
      </section>
      <NavBar />
    </>
  );
};

export default Discount;

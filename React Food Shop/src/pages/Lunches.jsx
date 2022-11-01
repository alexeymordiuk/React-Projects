import React from "react";
import { Link } from "react-router-dom";
import HeadersSecond from "../components/HeadersSecond";
import LunchesFoods from "../components/LunchesFoods";
import Dishes from "../components/Dishes";
import Footer from "../components/Footer";
import Background from "../components/Background";

import items from "../dates/Lunches/lunches.json";

import { useSelector } from "react-redux";

import styles from "../scss/pagesShop/LunchesFood.module.scss";

const Lunches = () => {
  const lunches = items.map((obj) => <LunchesFoods key={obj.id} {...obj} />);
  const { totalPrice } = useSelector((state) => state.cart);

  return (
    <>
      <HeadersSecond />
      <main>
        <Background />
        <section className={styles.container}>
          <Link to="/cart">
            <div className={styles.cart}>
              <span>{totalPrice}</span>
              <span>UAH</span>
              <button className={styles.btn_primary}>Cart</button>
            </div>
          </Link>
          <div className={styles.foods}>{lunches}</div>
          <Dishes />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Lunches;

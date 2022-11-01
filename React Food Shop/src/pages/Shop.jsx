import React from "react";
import HeadersSecond from "../components/HeadersSecond";
import Footer from "../components/Footer";
import Assortiment from "../components/Assortiment";
import styles from '../scss/pagesShop/Assortiment.module.scss'



const Shop = () => {
  return (
    <>
    <div className={styles.main}>
      <HeadersSecond />
      <main className={styles.root}>
        <Assortiment />
      </main>
      </div>
      <Footer />
    </>
  );
};

export default Shop;

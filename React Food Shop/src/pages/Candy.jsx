import React from 'react'
import Background from '../components/Background'
import Goods from '../components/Goods'
import HeadersSecond from '../components/HeadersSecond'
import Dishes from '../components/Dishes'
import Footer from '../components/Footer'

import styles from '../scss/pagesShop/Goods.module.scss'

import { Link } from "react-router-dom";

import { AiOutlineLeft } from "react-icons/ai";
import { useSelector } from 'react-redux';
import items from "../dates/candysDates/candy.json";

const Candy = () => {
  const candys = items.map((obj) => <Goods key={obj.id} {...obj} />)

  const {totalPrice} = useSelector(state => state.cart);	

  return (
    <>
    <HeadersSecond/>
    <main>
        <Background/>
        <section className={styles.container}>
        <div className={styles.buttons}>
          <Link to="/shop">
            <div>
              <button className={styles.to__page}>
                <AiOutlineLeft />
              </button>
              <h4>Back</h4>
            </div>
          </Link>
          <Link to="/cart">
            <div className={styles.cart__price}>
              <p>{totalPrice} UAH</p>
              <button className={styles.btn_primary}>Cart</button>
            </div>
          </Link>
        </div>
        <div className={styles.prod}>
        {
          candys
        }
        </div>
        </section>
        <Dishes/>
    </main>
    <Footer/>
    </>
  )
}

export default Candy
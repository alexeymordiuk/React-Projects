import React from "react";
import { Link } from "react-router-dom";
import styles from "../scss/pagesShop/Cart.module.scss";
import { AiOutlineLeft } from "react-icons/ai";

const CartEmpty = () => {
  return (
    <div className={styles.cart}>
      <div className={styles.cart__inner}>
        <h2 className={styles.cart__title}>
          Cart Empty pls add on of the goods!
        </h2>
        <div className={styles.links}>
          <Link to="/candy">
            <div>
              <button className={styles.to__page}>
                <AiOutlineLeft />
              </button>
              <h2 className={styles.cart__title}>Back to assotiment</h2>
            </div>
          </Link>
          <Link to="/lunches">
            <div>
              <button className={styles.to__page}>
                <AiOutlineLeft />
              </button>
              <h2 className={styles.cart__title}>Back to lunches</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartEmpty;

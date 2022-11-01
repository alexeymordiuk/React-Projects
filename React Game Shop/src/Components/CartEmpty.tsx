import React from "react";
import gek from "../img/Gek.png";
import styles from "../scss/cart/Cart.module.scss";
import { Link } from "react-router-dom";

const CartEmpty: React.FC = () => {
  return (
    <div className={styles.empty}>
      <div
        className={styles.container}
        style={{ backgroundImage: `url(${gek})` }}
      >
        <h2>Cart Is empty</h2>
        <p>Please add one of the products to the card and angry gek will be gone!</p>
        <Link to='/orderships'>
          <button className={styles.btn__small}>Back to shop</button>
        </Link>
      </div>
    </div>
  );
};

export default CartEmpty;

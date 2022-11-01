import React from "react";
import CartItem from "../components/CartItem";
import styles from "../scss/pagesShop/Cart.module.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearItems } from "../redux/slices/cartSlice";

import { MdClear } from "react-icons/md";
import { AiOutlineLeft } from "react-icons/ai";
import CartEmpty from "../components/CartEmpty";

const Cart = () => {
  const dispatch = useDispatch();
  const { totalPrice, items } = useSelector((state) => state.cart);

  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  const onClickClear = () => {
    if (window.confirm("Clear all goods?")) {
      dispatch(clearItems());
    }
  };

  if (!totalPrice) {
    return <CartEmpty />;
  }

  return (
    <>
      <div className={styles.cart}>
        <div className={styles.container}>
          <button onClick={onClickClear} className={styles.clear}>
            <MdClear />
          </button>
          <div className={styles.inner}>
            {items.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </div>
          <div className={styles.btn__block}>
            <Link to="/order">
              <button className={styles.btn}>Online order</button>
            </Link>
            <div className={styles.total}>
              <p>{totalCount}/</p>
              <p>{totalPrice} UAH</p>
            </div>
            <Link to="/candy">
              <div className={styles.back}>
                <button className={styles.to__page}>
                  <AiOutlineLeft />
                </button>
                <h4>Back to Assortiment</h4>
              </div>
            </Link>
            <Link to="/lunches">
              <div className={styles.back}>
                <button className={styles.to__page}>
                  <AiOutlineLeft />
                </button>
                <h4>Back to Lunches</h4>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;

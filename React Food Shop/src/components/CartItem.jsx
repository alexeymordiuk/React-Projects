import React from "react";
import { useDispatch } from "react-redux";
import { addItems, minusItems } from "../redux/slices/cartSlice";
import { useSelector } from "react-redux";
import styles from "../scss/CartItem.module.scss";

import { BsPlus } from "react-icons/bs";
import { HiMinus } from "react-icons/hi";

const CartItem = ({ id, name, price }) => {
  const dispatch = useDispatch();

  const cartItem = useSelector((state) =>
    state.cart.items.find((obj) => obj.id === id)
  );

  const addedCount = cartItem ? cartItem.count : 0;

  const onClickPlus = () => {
    dispatch(
      addItems({
        id,
      })
    );
  };

  const onClickMinus = () => {
    dispatch(minusItems(id));
  };

  return (
    <div className={styles.inner}>
      <div className={styles.item}>
        <h3>{name}</h3>
        <div className={styles.bottom}>
          <div>
            <button onClick={onClickPlus} className={styles.to__page}><BsPlus/></button>
            <span>{addedCount}</span>
            <button onClick={onClickMinus} className={styles.to__page}><HiMinus/></button>
          </div>
          <span>{price} UAH</span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

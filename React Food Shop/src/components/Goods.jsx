import React from "react";
import { addItems } from "../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";

import styles from "../scss/pagesShop/Goods.module.scss";

import { minusItems } from "../redux/slices/cartSlice";

import { BsPlus } from "react-icons/bs";
import { HiMinus } from "react-icons/hi";

const Goods = ({
  id,
  name,
  img,
  text,
  price,
  about1,
  about2,
  about3,
  about4,
}) => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart.items.find((obj) => obj.id === id));

  const addedCount = cartItem ? cartItem.count : 0;

  const onClickMinus = () => {
    dispatch(minusItems(id));
  };
  
  const onClickAdd = () => {
    const item = {
      id,
      name,
      price
    };
    dispatch(addItems(item));
  };

  return (
    <div className={styles.card}>
      <img src={img} alt="img" />
      <div className={styles.content}>
        <h3>{name}</h3>
        <p>{text}</p>
        <div className={styles.bzy}>
          <b>{about1}</b>
          <b>{about2}</b>
          <b>{about3}</b>
          <b>{about4}</b>
        </div>
        <div className={styles.by}>
          <div>
            <button className={styles.to__page} onClick={onClickAdd}>
              <BsPlus />
            </button>
            <span>{addedCount}</span>
            <button className={styles.to__page} onClick={onClickMinus}>
              <HiMinus />
            </button>
            <span>{price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goods;

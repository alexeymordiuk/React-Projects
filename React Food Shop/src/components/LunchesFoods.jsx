import React from "react";

import { addItems } from "../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { minusItems } from "../redux/slices/cartSlice";

import styles from "../scss/pagesShop/LunchesFood.module.scss";

import { BsPlus } from "react-icons/bs";
import { HiMinus } from "react-icons/hi";

const LunchesFoods = ({
  id,
  name,
  img,
  text1,
  text2,
  text3,
  kl,
  gr,
  price,
}) => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) =>
    state.cart.items.find((obj) => obj.id === id)
  );

  const addedCount = cartItem ? cartItem.count : 0;

  const onClickMinus = () => {
    dispatch(minusItems(id));
  };

  const onClickAdd = () => {
    const item = {
      id,
      name,
      price,
    };
    dispatch(addItems(item));
  };

  return (
    <div className={styles.card}>
      <img src={img} alt="img" />
      <div className={styles.content}>
        <div className={styles.about}>
          <h2>{name}</h2>
          <span>{kl}</span>
          <span>{gr}</span>
        </div>
        <div className={styles.text}>
          <p>{text1}</p>
          <p>{text2}</p>
          <p>{text3}</p>
        </div>
        <div className={styles.buttons}>
          <button className={styles.to__page} onClick={onClickAdd}>
            <BsPlus />
          </button>
          <span>{addedCount}</span>
          <button className={styles.to__page} onClick={onClickMinus}>
            <HiMinus />
          </button>
          <span>1/{price} UAH</span>
        </div>
      </div>
    </div>
  );
};

export default LunchesFoods;

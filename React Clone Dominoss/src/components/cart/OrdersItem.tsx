import React from "react";
import {
  selectCartItemById,
  removeItems,
  plusItem,
  minusItems,
} from "../../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../scss/Orders.module.scss";
import { MdOutlineClose } from "react-icons/md";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { useTheme } from "../../hooks/useTheme";
import { ItemsCart } from "../../types/itemsCartTypes";

const OrdersItem: React.FC<ItemsCart> = ({
  id,
  name,
  price,
  types,
  sizes,
  imageUrl,
  count,
}) => {
  const cartItem = useSelector(selectCartItemById(id));
  const addedCount = cartItem ? cartItem.count : 0;
  const dispatch = useDispatch();
  const { theme, setTheme } = useTheme();

  const onClickRemove = () => {
    if (window.confirm("Delete products?")) {
      dispatch(removeItems(id));
    }
  };

  const onClickPlus = () => {
    dispatch(plusItem(id));
  };

  const onClickMinus = () => {
    dispatch(minusItems(id));
  };

  return (
    <div className={styles.card}>
      <div className={styles.card__half}>
        <button onClick={onClickRemove} className={styles.btn__delete}>
          <MdOutlineClose />
        </button>
        <img className={styles.pizza__img} src={imageUrl} alt="pizza" />
        <div className={styles.content}>
          <h4 className={styles.title}>{name}</h4>
          {types && (
            <div className={styles.item__inner}>
              <p className={styles.text}>Dough:</p>
              <p className={styles.text}>{types}</p>
            </div>
          )}
          {sizes && (
            <div className={styles.sizes__block}>
              <p className={styles.text}>Size: {sizes}</p>
            </div>
          )}
          <b className={styles.text__bold__black}>{price * count} Uah</b>
        </div>
      </div>
      <div className={styles.controllers}>
        <button
          onClick={onClickMinus}
          disabled={addedCount === 1}
          className={styles.btn__controlls}
        >
          <AiOutlineMinus />
        </button>
        <div className={styles.circle}>{addedCount}</div>
        <button onClick={onClickPlus} className={styles.btn__controlls}>
          <AiOutlinePlus />
        </button>
      </div>
    </div>
  );
};

export default OrdersItem;

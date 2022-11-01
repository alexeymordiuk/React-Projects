import React from "react";
import styles from "../scss/shipspage/ShipsOrder.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  ItemsCart,
  addItems,
  selectCartItemById,
} from "../redux/slices/CartSlice";

export type ByShipProps = {
  id: string;
  title: string;
  img: string;
  Img: string;
  classes: string;
  slots: string;
  price: number;
  text: string;
  count: number;
};

const ByShip: React.FC<ByShipProps> = ({
  id,
  title,
  img,
  classes,
  Img,
  slots,
  price,
  text
}) => {
  const dispatch = useDispatch();
  const cartItem = useSelector(selectCartItemById(id));

  const addedCount = cartItem ? cartItem.count : 0;

  const onClickAdd = () => {
    const item: ItemsCart = {
      id,
      title,
      img,
      classes,
      Img,
      slots,
      price,
      text,
      count: 0,
    };
    dispatch(addItems(item));
  };

  return (
    <div className={styles.about}>
      <h2>{title}</h2>
      <img src={img} alt="img" />
      <div className={styles.content}>
        <div className={styles.classes}>
          <p className={styles.ind}>{classes} class:</p>
          <img src={Img} alt="img" />
        </div>
        <p className={styles.slots}>Slots: {slots}</p>
        {addedCount > 1 && <p>{addedCount}</p>}
        <div className={styles.pricing}>
          <span>Price {price} units</span>
          <button
            disabled={addedCount === 1}
            className={styles.btn__small}
            onClick={onClickAdd}
          >
            {text}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ByShip;

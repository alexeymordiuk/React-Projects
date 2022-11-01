import React from "react";
import { useDispatch } from "react-redux";
import { ItemsCart, removeItems } from "../redux/slices/CartSlice";
import styles from "../scss/cart/Cart.module.scss";

const CartObjects: React.FC<ItemsCart> = ({
  id,
  img,
  title,
  classes,
  Img,
  slots,
  price,
  count,
}) => {
  const dispatch = useDispatch();

  const onClickRemove = () => {
    if (window.confirm("Are you sure that you want do delete the goods?")) {
      dispatch(removeItems(id));
    }
  };

  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <img src={img} alt="img" />
      <div className={styles.content__card}>
        <div className={styles.classes}>
          <h3>{classes} Class:</h3>
          <img src={Img} alt="icon" />
        </div>
        <p className={styles.slots}>Slots: {slots}</p>
        <div className={styles.price}>
          <p>Price: {price}</p>
          <button onClick={onClickRemove} className={styles.btn__small}>Remove</button>
        </div>
      </div>
    </div>
  );
};

export default CartObjects;

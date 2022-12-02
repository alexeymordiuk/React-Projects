import React from "react";
import NavBar from "../components/navigation/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { selectCart, clearItems } from "../redux/slices/cartSlice";
import OrdersItem from "../components/cart/OrdersItem";
import styles from "../scss/Orders.module.scss";
import { MdOutlineClose } from "react-icons/md";
import CartEmpty from "../components/cart/CartEmpty";
import { BsBasket3 } from "react-icons/bs";
import { useTheme } from "../hooks/useTheme";

const Orders: React.FC = () => {
  const dispatch = useDispatch();
  const { totalPrice, items } = useSelector(selectCart);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);
  const { theme, setTheme } = useTheme();

  const onClear = () => {
    dispatch(clearItems());
  };

  if (!totalPrice) {
    return <CartEmpty />;
  }

  return (
    <>
      <div className={styles.inner}>
        <div className={styles.rules}>
          <div className={styles.column}>
            <div className={styles.delete}>
              <p className={styles.text__bold}>{totalPrice} Uah</p>
            </div>
          </div>
          <div className={styles.delete}>
            <p className={styles.text__bold}>Delete All</p>
            <button onClick={onClear} className={styles.delete__white}>
              <MdOutlineClose />
            </button>
          </div>
          <div className={styles.counted}>
            <BsBasket3 className={styles.basket} />
            <p className={styles.text__bold}>{totalCount}</p>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        {items.map((item: any) => (
          <OrdersItem key={item.id} {...item} />
        ))}
      </div>

      <NavBar />
    </>
  );
};

export default Orders;

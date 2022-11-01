import React from "react";
import Header from "../Components/Header";
import { useDispatch, useSelector } from "react-redux";
import { clearItems, selectCart } from "../redux/slices/CartSlice";
import CartObjects from "../Components/CartObjects";
import CartEmpty from "../Components/CartEmpty";
import styles from "../scss/cart/Cart.module.scss";
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from "react-router-dom";
import bg from '../img/bgshop.png'


const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const { totalPrice, items } = useSelector(selectCart);

  const totalCount = items.reduce(
    (sum: number, item: any) => sum + item.count,
    0
  );

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
      <Header />
      <section className={styles.main} style={{ backgroundImage: `url(${bg})` }}>
        <div className={styles.container}>
          <div className={styles.total}>
            <div className={styles.count}>
              <p>All Items: {totalCount}</p>
              <p>All Units: {totalPrice}</p>
            </div>
            <div className={styles.buy}>
             <Link to='/orderships'><button className={styles.btn__small}>Сontinue shopping</button></Link>
             <button className={styles.btn__small}>Order</button>
            </div>
            <div className={styles.clear}>
              <p>Clear All</p>
              <button onClick={onClickClear}><AiOutlineClose/></button>
            </div>
          </div>
          <div className={styles.wrraper}>
            {items.map((item: any) => (
              <CartObjects key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;

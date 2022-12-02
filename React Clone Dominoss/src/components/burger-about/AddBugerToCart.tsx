import React, {useEffect} from "react";
import styles from "../../scss/Pizzas.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineClose } from "react-icons/md";
import { selectCartItemById } from "../../redux/slices/cartSlice";
import { minusItems, addItems, plusItem } from "../../redux/slices/cartSlice";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { ItemsCart } from "../../types/itemsCartTypes";
import { CartProps } from "../../types/cartTypes";

const AddBurgerToCart: React.FC<CartProps> = ({
  add,
  setAdd,
  name,
  price,
  id,
  imageUrl,
  count,
  about
}) => {
  const cartItem = useSelector(selectCartItemById(id));
  const addedCount = cartItem ? cartItem.count : 0;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickAddItems = () => {
    setAdd(!add);
    const item: ItemsCart = {
      id,
      name,
      price,
      imageUrl,
      count,
    };
    dispatch(addItems(item));
    navigate("/orders");
  };

  const onClickPlus = () => {
    dispatch(plusItem(id));
  };

  const onClickMinus = () => {
    dispatch(minusItems(id));
  };

  useEffect(() => {
    const container: HTMLElement | null = document.querySelector('.Burgers_container__SkG0V')

    if (!add) {
      if (container) container.style.overflow = 'hidden'
    } else {
      if (container) container.style.overflow = 'auto'
    }
  }, [add])

  return (
    <div
      className={`${styles.cart__menu} ${
        add ? styles.cart__menu : styles.active
      }`}
    >
      <div className={styles.content}>
        <div className={styles.top}>
          <h3 className={styles.text}>{name}</h3>
          <button onClick={() => setAdd(!add)} className={styles.close}>
            <MdOutlineClose />
          </button>
        </div>
        <p className={styles.text__normall}>{about}</p>
        <div className={styles.count}>
          <p className={styles.text}>Count:</p>
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
        <div className={styles.price}>
          <div className={styles.text}>{price * addedCount} Uah</div>
          <button
            className={styles.btn__buy}
            disabled={addedCount >= 1}
            onClick={onClickAddItems}
          >
            {addedCount ? 'In cart' :'Add to cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddBurgerToCart;

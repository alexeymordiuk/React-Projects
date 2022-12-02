import React, {useEffect} from "react";
import styles from "../../scss/Pizzas.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineClose } from "react-icons/md";
import { selectCartItemById } from "../../redux/slices/cartSlice";
import { minusItems, addItems, plusItem } from "../../redux/slices/cartSlice";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { ItemsCart } from "../../types/itemsCartTypes";
import { CartProps } from "../../types/cartTypes";

const typeNames = ["Thin", "Thick", "Philadelphia"];

const AddToCart: React.FC<CartProps> = ({
  add,
  setAdd,
  name,
  price,
  id,
  types,
  sizes,
  imageUrl,
  count,
  about
}) => {
  const [activeType, setActiveType] = React.useState(0);
  const [activeSizes, setActiveSizes] = React.useState(0);
  const cartItem = useSelector(selectCartItemById(id));
  const addedCount = cartItem ? cartItem.count : 0;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickAddItems = () => {
    setAdd(!add);
    document.body.style.overflow = "hidden"
    
    const item: ItemsCart = {
			id, 
			name,
			price,
			types: typeNames[activeType],
			sizes: sizes[activeSizes],
      imageUrl,
      count,
		};
		dispatch(addItems(item));
    navigate('/orders')
  }

  const onClickPlus = () => {
   dispatch(plusItem(id))
  } 

  const onClickMinus = () => {
    dispatch(minusItems(id));
  };

  useEffect(() => {
    const container: HTMLElement | null = document.querySelector('.Pizzas_container__uPuZo')

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
        <div className={styles.type__choose}>
          <p className={styles.text}>Вough</p>
          <p className={styles.text}>Sizes</p>
        </div>
        <div className={styles.options}>
          <ul className={styles.list}>
            {types.map((type) => (
              <li
                key={type}
                className={activeType === type ? styles.active__type : ""}
                onClick={() => setActiveType(type)}
              >
                {typeNames[type]}
              </li>
            ))}
          </ul>
          <ul className={styles.list}>
            {sizes.map((size, i) => (
              <li
                key={size}
                onClick={() => setActiveSizes(i)}
                className={activeSizes === i ? styles.active__type : ""}
              >
                {size} sm
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.count}>
          <p className={styles.text}>Count:</p>
          <div className={styles.controllers}>
            <button onClick={onClickMinus} disabled={addedCount === 1} className={styles.btn__controlls}><AiOutlineMinus/></button>
            <div className={styles.circle}>{addedCount}</div>
            <button onClick={onClickPlus} className={styles.btn__controlls}><AiOutlinePlus /></button>
          </div>
        </div>
        <div className={styles.price}>
          <div className={styles.text}>{price * addedCount} Uah</div>
          <button className={styles.btn__buy} disabled={addedCount >= 1} onClick={onClickAddItems}>{addedCount ? 'In cart' :'Add to cart'}</button>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;

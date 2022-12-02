import React, {useState} from "react";
import styles from "../../scss/Pizzas.module.scss";
import { useDispatch } from "react-redux";
import { selectCartItemById } from "../../redux/slices/cartSlice";
import { addItems } from "../../redux/slices/cartSlice";
import { useSelector } from "react-redux";
import { ItemsCart } from "../../types/itemsCartTypes";
import { CartPropsCosructor } from "../../types/cartTypes";

const typeNames = ["Thin", "Thick", "Philadelphia"];

const ConstructorProps: React.FC<CartPropsCosructor> = ({
  name,
  price,
  id,
  types,
  sizes,
  imageUrl,
  text,
  count,
}) => {
  const [activeType, setActiveType] = useState(0);
  const [activeSizes, setActiveSizes] = useState(0);
  const dispatch = useDispatch();
  const cartItem = useSelector(selectCartItemById(id));
  const addedCount = cartItem ? cartItem.count : 0;

  const onClickAddItems = () => {
    const item: ItemsCart = {
      id,
      count,
      price,
      imageUrl,
      name,
      text,
      types: typeNames[activeType],
      sizes: sizes[activeSizes],
    };
    dispatch(addItems(item));
  };

  return (
    <div>
      <div className={styles.options__constructor}>
        <ul className={styles.list__constructor}>
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
        <ul className={styles.list__constructor}>
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
      <div className={styles.add__constructor}>
        <button onClick={onClickAddItems} className={styles.btn__buy}>
          Add
        </button>
        <p>{addedCount * price} Uah</p>
      </div>
    </div>
  );
};

export default ConstructorProps;

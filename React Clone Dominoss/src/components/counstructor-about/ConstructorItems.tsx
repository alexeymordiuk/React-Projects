import React from "react";
import styles from "../../scss/Constructor.module.scss";
import { FiChevronRight } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { minusItems, addItems } from "../../redux/slices/cartSlice";
import { selectCartItemById } from "../../redux/slices/cartSlice";
import ConstructorProps from "./ConstructorProps";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { ItemsCart } from "../../types/itemsCartTypes";
import { constructorProps } from "../../types/constructorTypes";

const ConstructorItems: React.FC<constructorProps> = ({
  ingredients,
  images,
  count,
  id,
  price,
  imageUrl,
  name,
  text,
  sizes,
  types,
  pizzaPrice,
}) => {
  const [click, setClick] = React.useState(false);
  const cartItem = useSelector(selectCartItemById(id));
  const addedCount = cartItem ? cartItem.count : 0;
  const dispatch = useDispatch();

  const onClickAddItems = () => {
    const item: ItemsCart = {
      id,
      price,
      count,
      text,
    };
    dispatch(addItems(item));
  };

  const onClickMinus = () => {
    dispatch(minusItems(id));
  };

  const showMore = () => {
    setClick(!click);
  };

  return (
    <div>
      <div className={styles.block} onClick={showMore}>
        <h2>{ingredients}</h2>
        <FiChevronRight className={styles.delete__white} />
      </div>
      {click && (
        <div className={styles.items}>
          <div className={styles.ingridients}>
            <div className={styles.inner}>
              <div>
                <img src={images} alt="icon" />
              </div>
              <div className={styles.text__inner}>
                <p>{text}</p>
               
              </div>
            </div>
          </div>
        </div>
      )}
      <ConstructorProps
        price={price}
        id={id}
        name={name}
        types={types}
        sizes={sizes}
        count={count}
        imageUrl={imageUrl}
        text={text}
        pizzaPrice={pizzaPrice}
      />
    </div>
  );
};

export default ConstructorItems;

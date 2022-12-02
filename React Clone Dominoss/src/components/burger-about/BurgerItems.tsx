import React from "react";
import styles from "../../scss/Pizzas.module.scss";
import AddBurgerToCart from "./AddBugerToCart";
import { motion } from "framer-motion";
import { nav } from "../pizza-about/PizzaItems";
import { selectCartItemById } from "../../redux/slices/cartSlice";
import { useSelector } from "react-redux";
import { BurgerProps } from "../../types/burgerTypes";

const BurgerItems: React.FC<{ items: BurgerProps }> = ({ items }) => {
  const [click, setClick] = React.useState(false);
  const [add, setAdd] = React.useState(true);
  const cartItem = useSelector(selectCartItemById(items.id));
  const addedCount = cartItem ? cartItem.count : 0;

  const addPoducts = () => {
    setAdd(!add);
  };

  const showMore = () => {
    setClick(!click);
  };

  return (
    <motion.div className={styles.card}>
      <img
        src={items.imageUrl}
        alt="pizza"
        className={styles.pizza__img}
        onClick={showMore}
      />
      <p className={styles.about__burger}>{items.about}</p>
      {click && (
        <motion.div
          className={styles.ingredients}
          initial="hidden"
          viewport={{ amount: 0.2 }}
          whileInView="visible"
          variants={nav}
        >
          <p>{items.ingredients}</p>
          <div className={styles.inner}>
            <div className={styles.column}>
              <img src={items.img1} alt="img" className={styles.ingr} />
              <p>{items.text1}</p>
            </div>
            <div className={styles.column}>
              <img src={items.img2} alt="img" className={styles.ingr} />
              <p>{items.text2}</p>
            </div>
            <div className={styles.column}>
              <img src={items.img3} alt="img" className={styles.ingr} />
              <p>{items.text3}</p>
            </div>
            <div className={styles.column}>
              <img src={items.img4} alt="img" className={styles.ingr} />
              <p>{items.text4}</p>
            </div>
            <div className={styles.column}>
              <img src={items.img5} alt="img" className={styles.ingr} />
              <p>{items.text5}</p>
            </div>
          </div>
        </motion.div>
      )}
      <div className={styles.to__cart}>
        <h2>{items.name}</h2>
        <div className={styles.add}>
          <p className={styles.text}>
            from <span>{items.price}</span> Uah
          </p>
          <button className={styles.btn__buy} onClick={addPoducts}>
            {addedCount ? "In cart" : "Add to cart"}
          </button>
          <AddBurgerToCart
            add={add}
            setAdd={setAdd}
            price={items.price}
            id={items.id}
            name={items.name}
            types={items.types}
            sizes={items.sizes}
            count={items.count}
            imageUrl={items.imageUrl}
            about={items.about}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default BurgerItems;

import React from "react";
import styles from "../../scss/Pizzas.module.scss";
import AddToCart from "./AddToCart";
import { motion } from "framer-motion";
import { selectCartItemById } from "../../redux/slices/cartSlice";
import { useSelector } from "react-redux";
import { PizzaProps } from "../../types/pizzasTypes";

export const nav = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const PizzaItems: React.FC<{ items: PizzaProps }> = ({ items }) => {
  const [click, setClick] = React.useState(false);
  const [add, setAdd] = React.useState(true);
  const cartItem = useSelector(selectCartItemById(items.id));
  const addedCount = cartItem ? cartItem.count : 0;

  const addPoducts = () => {
    setAdd(!add);
    document.body.style.overflow = "hidden";
  };

  const showMore = () => {
    setClick(!click);
  };

  return (
    <motion.div
      className={styles.card}
      initial="hidden"
      viewport={{ amount: 0.2, once: true }}
      whileInView="visible"
      transition={{ delay: 0.6 }}
    >
      <img
        src={items.imageUrl}
        alt="pizza"
        className={styles.pizza__img}
        onClick={showMore}
      />
      <div className={styles.about}>
        <p className={styles.small__text}>{items.about}</p>
      </div>
      {click && (
        <motion.div
          initial="hidden"
          viewport={{ amount: 0.2 }}
          whileInView="visible"
          variants={nav}
          transition={{ delay: 0.1 }}
          className={styles.ingredients}
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
          <AddToCart
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

export default PizzaItems;

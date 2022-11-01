import React from "react";
import { Link } from "react-router-dom";

import styles from "../scss/pagesShop/Order.module.scss";

import { AiOutlineLeft } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";

const blocks = [
  {
    id: 0,
    text: "Time of delivery",
    variant1: "8:00 - 12:00",
    variant2: "12:00 - 16:00",
  },
  {
    id: 1,
    text: "Order days",
  },
  {
    id: 2,
    text: "Payment method",
    variant1: "Visa",
    variant2: "PayPall",
  },
  {
    id: 3,
    text: "Wishes",
    variant1: "I need appliances",
    variant2: "Dont need",
  },
  {
    id: 4,
    text: "How to contact you?",
    variant1: "Email",
    variant2: "Phone",
  },
];

const Order = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className={styles.inner}>
      <div className={styles.container}>
        <div className={styles.nav}>
          <div className={styles.correct}>Fill in all fields correctly</div>
          <Link to="/cart">
            <div className={styles.back}>
              <p>Back to cart</p>
              <button className={styles.to__page}>
                <AiOutlineLeft />
              </button>
            </div>
          </Link>
        </div>
        <form className={styles.wrraper}>
          <div className={styles.left}>
            <input placeholder="Name" className={styles.name} />
            <input type="tel" placeholder="098323442" className={styles.name} />
            <input type="email" placeholder="Email" className={styles.name} />
            <div className={styles.selector}>
              <div className={styles.half}>
                <p>Nutrition programs</p>
                <IoIosArrowForward />
              </div>
              <div className={styles.choose}>
                <p>Fit</p>
                <p>Fitness</p>
              </div>
            </div>
            <div className={styles.selector}>
              <div className={styles.half}>
                <p>Special programs</p>
                <IoIosArrowForward />
              </div>
              <div className={styles.choose}>
                <p>Fit</p>
                <p>Fitness</p>
              </div>
            </div>
            <div className={styles.adress}>
              <input type="text" placeholder="Street" className={styles.name} />
              <input
                type="number"
                placeholder="House"
                className={styles.name}
              />
              <input type="number" placeholder="Flat" className={styles.name} />
            </div>
          </div>

          <div className={styles.right}>
            {blocks.map(({ id, text, variant1, variant2 }) => {
              return (
                <div
                  className={styles.selector}
                  onClick={() => setOpen(id)}
                  key={id}
                >
                  <div className={styles.half}>
                    <p>{text}</p>
                    <IoIosArrowForward />
                  </div>
                  <div
                    className={`${styles.choose} ${
                      open === id ? styles.active : ""
                    }`}
                  >
                    <div>
                      <p>{variant1}</p>
                    </div>
                    <div>
                      <p>{variant2}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </form>
        <div className={styles.radio}>
          <div>
            <input type="radio" name="order" />
            <p>Test day! Get -30% discount?</p>
          </div>
          <div>
            <input type="radio" name="order" />
            <p>I agree with the terms of cooperation</p>
          </div>
        </div>
        <button className={styles.btn_primary}>Order</button>
      </div>
    </div>
  );
};

export default Order;

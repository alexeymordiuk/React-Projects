import React from "react";

import styles from "../scss/Cheked.module.scss";
import { IoIosArrowForward } from 'react-icons/io'

import { cheked } from "../dates/Cheked/cheked";


const Cheked = () => {
    const [click, setClick] = React.useState(false);

  return (
    <section className={styles.chek}>
      <div className={styles.container}>
        <div className={styles.orders}>
          <h2>Checkout</h2>
          <p className={styles.text}>
            Discuss all the details of the order by phone or specify all the
            details online
          </p>
          <form action="/">
            <p className={styles.green}>Name</p>
            <input id="formfield" type="text" className={styles.field} />
            <p className={styles.red}>Phone number</p>
            <input id="formfield" type="number" className={styles.field} />
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
            <div className={styles.post}>
              <div>
                <a href="/" className={styles.btn_border}>
                  Phone order
                </a>
              </div>
              <p>Or</p>
              <div>
                <a href="/" className={styles.btn_primary}>
                  Online order
                </a>
              </div>
            </div>
          </form>
        </div>
        <div className={styles.questions}>
          <h2>Frequently asked Questions</h2>

          {
            cheked.map(({id, title, text}) => {
                return(
                    <div className={styles.question} onClick={() => setClick(id)} key={id}>
                    <div className={styles.ask}>
                      <p>{title}</p>
                      <IoIosArrowForward/>
                    </div>
                    <div className={`${styles.answer} ${click === id ? styles.active : ''}`}>
                      <p>
                       {text}
                      </p>
                    </div>
                  </div>
                )
            })
          }


        </div>
      </div>
    </section>
  );
};

export default Cheked;

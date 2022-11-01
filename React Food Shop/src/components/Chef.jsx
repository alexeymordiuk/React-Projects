import React from "react";

import styles from "../scss/Chef.module.scss";

const Chef = () => {
  return (
    <section className={styles.next}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.content}>
            <h1>
              Hello! My name is <span>Kirill Kobylinskiy</span> and I am the <span>founder of
              GastroChef.</span>
            </h1>
            <p>
              I am the Master of Sports of Ukraine in weightlifting, and I was
              also a member of the Ukrainian national team.
            </p>
            <p>
              I have a higher education from the National University of Physical
              Education and sports of Ukraine (NFVSU), as well as in I am a
              professional fitness trainer in the past!
            </p>
            <p>And I want to tell you more about GastroChef.</p>
            <div className={styles.trial}>
              <div>
                <p></p>
                <small></small>
              </div>
            </div>
          </div>
          <div className={styles.left}>
            <div className={styles.circle}>
              <img
                src="img/slider/slide2.png"
                alt="slide"
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chef;

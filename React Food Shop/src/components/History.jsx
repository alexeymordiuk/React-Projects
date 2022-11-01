import React from "react";

import styles from "../scss/History.module.scss";

const History = () => {
  return (
    <section className={styles.history}>
      <div className={styles.container}>
        <div className={styles.left}>
          <img src="img/packet.png" alt="img" className={styles.picture} />
        </div>
        <div className={styles.right}>
          <h2>The history of GastroChef began over 6 years ago...</h2>
          <p>
            For a long time I watched people run out of time for proper and
            healthy nutrition, which is correct, just regular nutrition.
          </p>
          <p>
            They could have breakfast, eat something like shawarma or a snack in
            the afternoon, and in the evening, due to hunger, eat up, which had
            a bad effect on their metabolism and, of course, health.
          </p>
          <p>
            Me with my 17 years of experience in sports and prof. education,
            together with a nutritionist developed diets for proper nutrition
            with calorie counting (KBZHU).
          </p>
          <p>
            The desire to somehow change the situation and help people haunted
            me and I decided to open delivery eating proper nutrition.
          </p>
          <h3>Get acquainted! The Gastro Chef Team!</h3>
        </div>
      </div>
      <div
        className={styles.team}
        style={{ backgroundImage: `url(img/team.png)` }}
      ></div>

      <div className={styles.container}>
        <div className={styles.right}>
          <h2>"GastroChef - easy for the busy"</h2>
          <p>
            GastroChef - proper nutrition with home delivery, created to make
            life easier, free up time from cooking, unnecessary snacks, fast
            foods and give you the opportunity to feel light and full of energy,
            strength, for new achievements and victories.
          </p>
          <p>
            All products for the preparation of proper nutrition are purchased
            only with certificates, and the rations are prepared in a modern and
            safe kitchen the night before your arrival!
          </p>
          <p>
            Friends, if you have any questions, you can easily call us or write
            to me personally on Instagram or Facebook.
          </p>
          <h3>Sincerely, Kobylinsky Kirill.</h3>
        </div>
        <div className={styles.left}>
          <img src="img/dinner.png" alt="img" className={styles.dinner} />
        </div>
      </div>
    </section>
  );
};

export default History;

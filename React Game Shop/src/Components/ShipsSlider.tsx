import { Link } from "react-router-dom";
import styles from "../scss/shipspage/ShipsSlide.module.scss";
import { classes } from "../dates/Starships/SliderShips";

const ShipsSlider: React.FC<classes> = ({ id, title, text, img }) => {
  return (
    <section
      className={styles.main}
    >
      <div className={styles.inner}>
        <h2>{title}</h2>
        <img src={img} alt="ships" className={styles.images} />
      </div>
      <div className={styles.btn__pos}>
        <Link to={`/about/${id}`}>
          <button className={styles.btn}>{text}</button>
        </Link>
      </div>
    </section>
  );
};

export default ShipsSlider;

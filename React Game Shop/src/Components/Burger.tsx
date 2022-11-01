import styles from "../scss/Header.module.scss";
import { links } from "../dates/Header/links";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

type PaginationProps = {
  click: boolean;
  setClick: (active: boolean) => void;
};

const textAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom: any) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.1 },
  }),
};

const activeStyle = {
  color: "yellow",
  border: "1px solid yellow",
};

const Burger: React.FC<PaginationProps> = ({ click, setClick }) => {
  return (
    <motion.div
      className={`${styles.burger} ${click ? styles.burger : styles.active}`}
      onClick={() => setClick(false)}
    >
      <div>
        <motion.ul className={styles.menu}>
          {links.map(({ id, title, adress }) => {
            return (
              <NavLink
                to={adress}
                end
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              key={id}>
                <motion.li
                  initial="hidden"
                  whileInView="visible"
                  variants={textAnimation}
                  custom={id + 1}
                  className={styles.links}
                >
                  {title}
                </motion.li>
              </NavLink>
            );
          })}
        </motion.ul>
      </div>
    </motion.div>
  );
};

export default Burger;

import React from "react";
import { links } from "../dates/Header/links";
import styles from "../scss/Footer.module.scss";
import { Link } from "react-router-dom";
import bg from "../img/bg-header.png";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer} style={{ backgroundImage: `url(${bg})` }}>
      <div className={styles.container}>
        <ul className={styles.menu}>
          {links.map(({ id, adress, title }) => (
            <Link to={adress} key={id}>
              <li>{title}</li>
            </Link>
          ))}
        </ul>

        <address>
          <ul className={styles.social}>
            <li>
              <a href="/">Telegram</a>
            </li>
            <li>
              <a href="/">aleksejmoduk@gmail.com</a>
            </li>
            <li>
              <a href="/">0988968798</a>
            </li>
          </ul>
        </address>
      </div>
    </footer>
  );
};

export default Footer;

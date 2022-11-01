import React from "react";

import styles from "../scss/Footer.module.scss";
import { RiInstagramLine } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";
import { SiViber } from "react-icons/si";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footer__nav}>
          <ul>
            <li>Nutrition programs</li>
            <li>About Us</li>
            <li>Бизнес-ланчи</li>
            <li>Gastro Shop</li>
            <li>Блог</li>
          </ul>
        </div>

        <div className={styles.footer__logo}>
          <Link to='/blog'>
            <img src="img/logo.png" width={290} alt="logo" />
          </Link>
          <p>healthy food service</p>
        </div>

        <div className={styles.footer__contact}>
          <div>
            <p>Terms</p>
            <p>cooperation</p>
          </div>
          <p>FAQ</p>
          <ul>
            <li>
              <a href="/">
                <RiInstagramLine />
              </a>
            </li>
            <li>
              <a href="/">
                <FaTelegramPlane />
              </a>
            </li>
            <li>
              <a href="/">
                <SiViber />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

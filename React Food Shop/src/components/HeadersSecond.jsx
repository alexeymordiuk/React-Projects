import React from 'react'

import styles from '../scss/pagesShop/HeaderSecond.module.scss'

import { Link } from "react-router-dom";

import { MdOutlineClose } from "react-icons/md";
import { RiMenu3Line } from "react-icons/ri";
import { links } from "../dates/Header/links";

const HeadersSecond = () => {
  const [openBurger, setOpenBurger] = React.useState(false);
  const [clickLink, setClickLink] = React.useState(false);

  return (
   <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <div>
            <Link to="/">
              <img src="img/logo.png" width={200} alt="logo" />
            </Link>
          </div>
          <ul>
            {links.map(({ id, title, adress }, i) => {
              return (
                <Link to={adress} key={id}>
                  <li
                    onClick={() => setClickLink(id)}
                    className={clickLink === id ? styles.active__link : ""}
                    >
                    {title}
                  </li>
                </Link>
              );
            })}
          </ul>

          <div className={styles.contact}>
            <a href="/">+38 (068) 949 - 49 -19</a>
          </div>
        </nav>

        {/* BURGER */}

        <div className={styles.burger}>
          <Link to="/">
            <img
              src="img/logo.png"
              alt="logo"
              className={styles.burger__logo}
            />
          </Link>

          <div className={styles.call}>
            <img src="img/phone.svg" alt="phone" />
          </div>

          <div
            className={styles.buger__btn}
            onClick={() => setOpenBurger(!openBurger)}
          >
            <RiMenu3Line />
          </div>

          <div className={openBurger ? styles.black : ""}>
            <div
              className={
                openBurger ? styles.burger__menu : styles.burger__active
              }
            >
              <div className={styles.burger__half}>
                <ul>
                  <li>
                    <a href="/">Nutrition programs</a>
                  </li>
                  <li>
                    <a href="/">Business lunches</a>
                  </li>
                  <li>
                    <Link to="/shop">Gastro Shop</Link>
                  </li>
                  <li>
                    <Link to="/blog">About Us</Link>
                  </li>
                  <li>
                    <a href="/">Blog</a>
                  </li>
                </ul>
                <div
                  className={styles.burger__close}
                  onClick={() => setOpenBurger(!openBurger)}
                >
                  <MdOutlineClose />
                </div>
              </div>
              <div className={styles.contact}>
                <a href="/">+38 (068) 949 - 49 -19</a>
              </div>
            </div>
          </div>
        </div>

        {/* END BURGRR */}

        <div className={styles.circle}></div>
        <div className={styles.list}>
          <ul>
            <li>
              <img src="img/icons/icon1.svg" alt="icon" />
            </li>
            <li>
              <img src="img/icons/icon2.svg" alt="icon" />
            </li>
            <li>
              <img src="img/icons/icon3.svg" alt="icon" />
            </li>
            <li>
              <img src="img/icons/icon4.svg" alt="icon" />
            </li>
            <li>
              <img src="img/icons/icon5.svg" alt="icon" />
            </li>
            <li>
              <img src="img/icons/icon6.svg" alt="icon" />
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default HeadersSecond
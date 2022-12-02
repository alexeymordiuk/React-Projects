import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { productsLinks } from "../../dates/routes/productsrouts";
import styles from "../../scss/NavBar.module.scss";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { useTheme } from "../../hooks/useTheme";

const activeStyle = {
  color: "#ff0000",
};

const Products: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const handleLightSwitch = () => {
    setTheme("light");
  };

  const handleDarktSwitch = () => {
    setTheme("dark");
  };

  return (
    <div className={styles.top}>
      <div className={styles.container}>
        <ul>
          {productsLinks.map(({ link, title }) => (
            <li key={link}>
              <NavLink
                to={link}
                end
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                {title}
              </NavLink>
            </li>
          ))}
            <div className={styles.controlls}>
              <CiLight onClick={handleLightSwitch} className={styles.light}/>
              <CiDark onClick={handleDarktSwitch} className={styles.dark}/>
            </div>
        </ul>
      </div>
    </div>
  );
};

export default Products;

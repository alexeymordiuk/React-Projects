import React from "react";
import { NavLink } from "react-router-dom";
import { links } from "../../dates/routes/routes";
import styles from "../../scss/NavBar.module.scss";

const NavBar: React.FC = () => {

  const activeStyle = {
    color: "#ff0000",
  };

  return (
    <header className={styles.header}>
      <nav className={styles.container}>
        <ul>
          {links.map(({ link, title, img, id }) => (
            <li key={id} className={styles.text}>
              <NavLink
                to={link}
                end
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                {img}
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;

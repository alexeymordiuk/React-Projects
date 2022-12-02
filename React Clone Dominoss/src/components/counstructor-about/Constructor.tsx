import React from "react";
import NavBar from "../navigation/NavBar";
import styles from "../../scss/Constructor.module.scss";
import counstructorItem from "../../dates/ingridients.json";
import ConstructorItems from "./ConstructorItems";
import { useTheme } from "../../hooks/useTheme";

const Constructor: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const ingridients = counstructorItem.map((obj) => (
    <ConstructorItems key={obj.id} {...obj} />
  ));

  return (
    <>
      <section className={styles.container}>{ingridients}</section>
      <NavBar />
    </>
  );
};

export default Constructor;

import React, { useEffect, useState } from "react";
import NavBar from "../navigation/NavBar";
import Products from "../navigation/Products";
import BurgerItems from "./BurgerItems";
import styles from "../../scss/Burgers.module.scss";
import { BurgerProps } from "../../types/burgerTypes";
import { selectBurgerData } from "../../redux/slices/burgerSlice";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { fetchBurgers } from "../../redux/slices/fetchBurgers";
import { FaSpinner } from "react-icons/fa";

const Burgers: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, status } = useSelector(selectBurgerData);
  const burgers = items.map((items: BurgerProps) => (
    <BurgerItems key={items.id} items={items} />
  ));
  const [loading, setIsLoadign] = useState(true);

  useEffect(() => {
    const getBurgers = async () => {
      dispatch(fetchBurgers({}));
    };
    getBurgers();
    setIsLoadign(false);
  }, []);

  return (
    <>
      <Products />
      <section>
        {status === "loading" ? (
          <div className={styles.spinner}>
            <FaSpinner className={styles.spinner__loader} />
          </div>
        ) : (
          <div className={styles.container}>{burgers}</div>
        )}
      </section>
      <NavBar />
    </>
  );
};

export default Burgers;

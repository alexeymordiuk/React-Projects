import React, {useEffect, useState} from "react";
import NavBar from "../navigation/NavBar";
import Products from "../navigation/Products";
import PizzaItems from "./PizzaItems";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { selectPizzasData} from "../../redux/slices/pizzaSlice";
import { fetchPizzas } from "../../redux/slices/fetchPizzas";
import styles from "../../scss/Pizzas.module.scss";
import { FaSpinner } from "react-icons/fa";
import { PizzaProps } from "../../types/pizzasTypes";

const Pizzas: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, status } = useSelector(selectPizzasData);
  const pizzas = items.map((items: PizzaProps) => (
    <PizzaItems key={items.id} items={items} />
  ));
  
  const [loading, setIsLoadign] = useState(true);

  useEffect (() => {
    const getPizzas = async () => {
      dispatch(fetchPizzas({}));
    };
    getPizzas();
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
          <div className={styles.container}>{pizzas}</div>
        )}
      </section>
      <NavBar />
    </>
  );
};

export default Pizzas;

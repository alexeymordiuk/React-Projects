import React from "react";
import NavBar from "../navigation/NavBar";
import styles from "../../scss/Orders.module.scss";

const CartEmpty: React.FC = () => {
  return (
    <>
      <div className={styles.empty__cart}>
        <p>No one orders here <br /> Please add any of products</p>
      </div>
      <NavBar />
    </>
  );
};

export default CartEmpty;

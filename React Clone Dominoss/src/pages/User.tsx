import React from "react";
import NavBar from "../components/navigation/NavBar";
import styles from "../scss/Restaraunt.module.scss";
import { FaPizzaSlice } from "react-icons/fa";
import { Link } from "react-router-dom";
import { removeUser } from "../redux/slices/userSlice";
import { useAppDispatch } from "../hooks/reduxHooks";
import { useAuth } from "../hooks/userAuth";
import { Navigate } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { useTheme } from "../hooks/useTheme";

const User: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isAuth, email } = useAuth();
  const { theme, setTheme } = useTheme();

  const logOut = () => {
    if (window.confirm("Confirm log out")) {
      dispatch(removeUser())
    }
  };

  return isAuth ? (
    <>
      <section className={styles.wrraper}>
        <Link to="/constructor">
          <h2 className={styles.title}>
            <FaPizzaSlice /> Pizzas Constructor
          </h2>
        </Link>
        <div className={styles.log} onClick={logOut}>
          <div>
          <FaUserAlt className={styles.delete__white} />
            <p>Log out</p>
          </div>
          <button>{email}</button>
        </div>
      </section>
      <NavBar />
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default User;

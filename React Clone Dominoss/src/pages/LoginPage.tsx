import React from "react";
import Login from "../components/auth/Login";
import { Link } from "react-router-dom";
import styles from "../scss/Form.module.scss";
import logo from "../assets/logo.png";

const LoginPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <img src={logo} alt="logo" className={styles.logo}/>
      <Link to="/register" className={styles.link__inner}>
        <p>Or</p>
        <button className={styles.login__into}>Registration</button>
      </Link>
      <Login />
    </div>
  );
};

export default LoginPage;

import React from 'react'
import { Link } from 'react-router-dom'
import styles from "../scss/Form.module.scss";
import logo from "../assets/logo.png";
import Sign from '../components/auth/Siqn';

const RegistrPage: React.FC = () => {
  return (
    <div className={styles.container}>
        <img src={logo} alt="logo" className={styles.logo}/>
        <Link to='/login' className={styles.link__inner}>
          <p>Already have an account?</p>
          <button className={styles.login__into}>Login</button>
        </Link>
        <Sign/>
    </div>
  )
}

export default RegistrPage
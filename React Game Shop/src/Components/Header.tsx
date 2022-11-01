import React from "react";
import { useSelector } from "react-redux";
import styles from "../scss/Header.module.scss";
import { Link, NavLink } from "react-router-dom";
import { links } from "../dates/Header/links";
import { CgMenuGridR } from "react-icons/cg";
import Burger from "./Burger";
import logo from "../img/logo.png";
import { AiOutlineClose } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { selectCart } from "../redux/slices/CartSlice";
import Registration from "./Registration";

const Header: React.FC = () => {
  const [click, setClick] = React.useState(true);
  const [regist, setRegist] = React.useState(true);
  const { items } = useSelector(selectCart);

  const totalCount = items.reduce(
    (sum: number, item: any) => sum + item.count,
    0
  );

  const activeStyle = {
    border: '1px solid #ff8400',
    background: '#ff8400',
    padding: '5px'
  };

  return (
    <header
      className={styles.root}
      style={{ backgroundImage: "url('img/bg-header.png')" }}
    >
      <div className={styles.container}>
        <Link to="/">
          <img src={logo} alt="logo" className={styles.logo}/>
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.menu}>
            {links.map(({ id, adress, title }) => {
              return (
                <li key={id}>
                  <NavLink
                    to={adress}
                    end
                    className={styles.link}
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    {title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
        <Burger click={click} setClick={setClick} />
        {click ? (
          <button className={styles.btn} onClick={() => setClick(!click)}>
            <CgMenuGridR />
          </button>
        ) : (
          <AiOutlineClose
            className={styles.close}
            onClick={() => setClick(!click)}
          />
        )}
        <div className={styles.cart}>
          <Link to="/cart">
            <p>Cart: {totalCount}</p>
          </Link>
          <div>
            <button onClick={() => setRegist(!regist)} className={styles.user}>
              <BiUserCircle />
            </button>
          </div>
        </div>
        <Registration regist={regist} setRegist={setRegist} />
      </div>
    </header>
  );
};

export default Header;

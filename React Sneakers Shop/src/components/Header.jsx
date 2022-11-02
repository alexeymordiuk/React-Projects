import React from 'react'
import { Link } from "react-router-dom";
import { useCart } from '../hooks/useCart';
import { RiMenu3Line } from 'react-icons/ri'
import { FaTimes } from 'react-icons/fa'
import { motion } from "framer-motion"
import { IoMdCart } from 'react-icons/io'
import { AiFillHeart } from 'react-icons/ai'
import { FaUserAlt } from 'react-icons/fa'

const textAnimation = {
	hidden: {
		y: 100,
		opacity: 0,
	},
	visible: custom => ({
		y: 0,
		opacity: 1,
		transition: { delay: custom * 0.2 },
	}),
}

const textAnimationLinks = {
	hidden: {
		x: -100,
		opacity: 0,
	},
	visible: custom => ({
		x: 0,
		opacity: 1,
		transition: { delay: custom * 0.2 },
	}),
}

const nav = {
	hidden: {
		x: -100,
		opacity: 0,
	},
	visible: {
		x: 0,
		opacity: 0.9,
	},
	transition: { 
		delay: 1.2,
	},
}

function Header(props) {
	const [clickBurger, SetClickBurger] = React.useState(true);
	const { totalPrice } = useCart();

	return (
		<motion.header
			initial="hidden"
			viewport={{ amount: 0.2, once: true }}
			whileInView="visible"
			className="header container">
			<div className='header__container container'>
				<Link to="/">
					<motion.div className='header__logo'>
						<motion.h3 custom={1} variants={textAnimation}>Sneakers Shop</motion.h3>
						<motion.h5 custom={2} variants={textAnimation}>By Alex</motion.h5>
					</motion.div>
				</Link>

				<motion.div
					className='nav__burger'>
					<ul>
						<motion.li custom={6} variants={textAnimationLinks} className="header__cart" onClick={props.onClickCart}>
							<IoMdCart className='nav__cart' />
							<span>{totalPrice} UAH</span>
						</motion.li>
						<motion.li custom={7} variants={textAnimationLinks}>
							<Link to="/favourite">
								<AiFillHeart className='nav__heart' />
							</Link>
						</motion.li>
						<motion.li custom={8} variants={textAnimationLinks}>
							<Link to="/orders">
								<FaUserAlt className='cart__user-icon' />
							</Link>
						</motion.li>
					</ul>
					<RiMenu3Line onClick={() => SetClickBurger(!clickBurger)} className="nav__icon-menu"/>
					{clickBurger ? null : <motion.div
						initial="hidden"
						viewport={{ amount: 0.2 }}
						whileInView="visible"
						className='nav__burger--menu' variants={nav} transition={{delay: 0.3 }}>
						<motion.ul  className='nav__list-burger' >
							<li className='nav__close'><FaTimes onClick={() => SetClickBurger(!clickBurger)} /></li>
							<motion.li custom={1} variants={textAnimationLinks}><a href="#home">Home</a></motion.li>
							<motion.li custom={2} variants={textAnimationLinks}><a href="#about">About Us</a></motion.li>
							<motion.li custom={3} variants={textAnimationLinks}><a href="#prod">Products</a></motion.li>
							<motion.li custom={4} variants={textAnimationLinks}><a href="#contact">Contacts</a></motion.li>
							<motion.li custom={5} variants={textAnimationLinks}><a href="#footer">Social</a></motion.li>
						</motion.ul>
					</motion.div>}
				</motion.div>

				<motion.nav
					initial="hidden"
					viewport={{ amount: 0.2 }}
					whileInView="visible"
					className="nav">
					<motion.ul className="nav__list">
						<motion.li custom={1} variants={textAnimationLinks}><a href="#home">Home</a></motion.li>
						<motion.li custom={2} variants={textAnimationLinks}><a href="#about">About Us</a></motion.li>
						<motion.li custom={3} variants={textAnimationLinks}><a href="#prod">Products</a></motion.li>
						<motion.li custom={4} variants={textAnimationLinks}><a href="#contact">Contacts</a></motion.li>
						<motion.li custom={5} variants={textAnimationLinks}><a href="#footer">Social</a></motion.li>
					</motion.ul>

					<ul className="nav__icons-pages d-flex align-center">
						<li className="header__cart" onClick={props.onClickCart}>
							<IoMdCart className='nav__cart' />
							<span>{totalPrice} UAH</span>
						</li>
						<li>
							<Link to="/favourite">
								<AiFillHeart className='nav__heart' />
							</Link>
						</li>
						<li>
							<Link to="/orders">
								<FaUserAlt className='cart__user-icon' />
							</Link>
						</li>
					</ul>
				</motion.nav>
			</div>
		</motion.header>
	);
}

export default Header;
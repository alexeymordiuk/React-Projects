import React from 'react'
import styles from './Footer.module.scss'
import { FaTelegramPlane } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'
import { AiFillFacebook} from 'react-icons/ai'

const Footer = () => {
	return (
		<footer className={styles.footer} id='footer'>
			<div className={styles.inner}>
				<ul>
					<h3>Navigation</h3>
					<li><a href="#home">Home</a></li>
					<li><a href="#about">About Us</a></li>
					<li><a href="#prod">Products</a></li>
					<li><a href="#contact">Cotanct</a></li>
				</ul>

				<ul>
					<h3>City</h3>
					<li>London</li>
					<li>Rome</li>
					<li>Paris</li>
					<li>Los Angeles</li>
				</ul>

				<ul>
					<h3>Social networks</h3>
					<li className='net'><FaTelegramPlane/><a href="#">Telegram</a></li>
					<li className='net'><GrInstagram/><a href="#">Instagram</a></li>
					<li className='net'><AiFillFacebook/><a href="#">Facebook</a></li>
				</ul>
			</div>
			<div className={styles.copy}>&copy; By Alex Morduk 2022, <span>All rights reserved</span></div>
		</footer>
	)
}

export default Footer
import React from 'react'
import styles from './Contact.module.scss'
import { MdLocalMall } from 'react-icons/md'


const Contact = () => {
	return (
		<section style={{ backgroundImage: "url(/img//nike.jpg)" }} className={styles.contact} id='contact'>
			<div>
				<h3>Contact Us</h3>
					<p>Subscribe on our channel</p>
					<p>The 10 first users discount at 10%</p>
					<div className={styles.inner}>
						<a href="#">Subscribe</a>
						<div className={styles.mail}>
						<MdLocalMall className='contact__icon'/>
							<input type="text" placeholder='Mail'/>
						</div>
					</div>
			</div>
		</section>
	)
}

export default Contact
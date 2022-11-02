import React from 'react'
import styles from './About.module.scss'
import { motion } from "framer-motion"

const blockAnimation = {
	hidden: {
		y: -100,
		opacity: 0,
	},
	visible: custom => ({
		y: 0,
		opacity: 1,
	}),
}

const About = () => {
	return (
		<motion.section
			viewport={{ amount: 0.2 }}
			initial="hidden"
			animate="visible"
			transition={{delay: 0.5 }}
			className={styles.about} id="about" custom={1} variants={blockAnimation}>
			<motion.div className={styles.inner}  custom={2} variants={blockAnimation} transition={{delay: 0.8 }}>
				<motion.div className={styles.left}>
					<h3>Information</h3>
					<p>We have been dealing with sneakers since 2015,
						during our existence we have sold more than 4,000 pairs
						of shoes. We continue to expand the assortment as well
						as points of physical stores around the world. We will
						be glad if you continue to buy sneakers from us, discounts
						for new and regular customers.</p>
				</motion.div>
				<motion.div custom={3} variants={blockAnimation} transition={{delay: 1.2 }}>
					<img src="/img/about1.jpg" alt="about" />
				</motion.div>
			</motion.div>
		</motion.section>
	)
}

export default About
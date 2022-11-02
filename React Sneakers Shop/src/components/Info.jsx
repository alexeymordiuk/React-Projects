import React from 'react'
import AppContext from '../context';

const Info = ({ image, title,  description}) => {
	const { SetCartOpened } = React.useContext(AppContext);

	return (
			<div className="cart__empty d-flex align-center jusify-center flex-column flex">
				<img src={image} width={70} alt="empty" className="mb-20" />
				<h2>{title}</h2>
				<p className="opacity-6">{description}</p>
				<button onClick={() => SetCartOpened(false)} className="btn__primary">
					<img src="/img/arrow.svg" alt="arrow" />
					Back to main page
				</button>
			</div>
	)
}

export default Info;

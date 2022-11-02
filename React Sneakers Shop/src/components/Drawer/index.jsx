import React from 'react'
import axios from 'axios';
import Info from '../Info'
import styles from './Drawer.module.scss';

import { useCart } from '../../hooks/useCart';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({ onClose, onRemove, items = [], opened }) {
	const {cartItems, SetCartItems, totalPrice } = useCart();
	const [isOrderComplete, SetOrderIsComplete] = React.useState(false);
	const [orderId, SetOrderID] = React.useState(null);
	const [isLoading, SetIsLoading] = React.useState(false);

	const onCLickOrder = async () => {
		try {
			SetIsLoading(true);
			const { data } = await axios.post('https://631241f9b466aa9b0387460d.mockapi.io/orders/', 
			{items: cartItems,});
			SetOrderID(data.id);
			SetOrderIsComplete(true);
			SetCartItems([]);

			for (let i = 0; i < cartItems.length; i++) {
				const item = cartItems[i];
				await axios.delete('https://631241f9b466aa9b0387460d.mockapi.io/cart/' + item.id,);
				await delay(1000);
			}	

		} catch (error) {
			alert('Cant create the order, please try again later')
		}
		SetIsLoading(false);
	};

	return (
		<div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
			<div className={styles.drawer}>
				<h2 className="mb-30 d-flex justify-between">
					Cart <img onClick={onClose} src="/img/btn-remove.svg" alt="Remove" className="cart__item-remove" />
				</h2>

				{
					items.length > 0 ? (
						<div className={styles.items__wrapper}>
							<div className="items">
								{items.map((obj) => (
									<div key={obj.id} className="cart__item d-flex align-center mb-20">
										<div
											style={{ backgroundImage: `url(${obj.image})` }} className="cart__item-img">
										</div>
										<div className="mr-20">
											<p className="mb-5">{obj.name}</p>
											<b>{obj.price} UAH</b>
										</div>
										<img
											src="/img/btn-remove.svg"
											alt="Remove"
											className="cart__item-remove"
											onClick={() => onRemove(obj.id)} />
									</div>
								))}
							</div>
							<div className="cart__total-block">
								<ul>
									<li>
										<span>Total:</span>
										<div></div>
										<b>{totalPrice} UAH</b>
									</li>
									<li>
										<span>Tax 5%:</span>
										<div></div>
										<b>{totalPrice/100 *5} UAH</b>
									</li>
								</ul>
								<button disabled={isLoading} onClick={onCLickOrder} 
								className="btn__primary">Checkouting<img src="/img/arrow.svg" alt="arrow" />
								</button>
							</div>
						</div>
					) : (
						<Info
							title={isOrderComplete ? "Order is processed" : "Cart is empty"}
							description={isOrderComplete
								? `Your order №${orderId} has been transferred to the manager, waiting for a call`
								: "Please add at least one pair of sneakers"}
							image={isOrderComplete ? "/img/box.svg" : "/img/order.svg"}
						/>
					)}

			</div>
		</div>
	);
}

export default Drawer;
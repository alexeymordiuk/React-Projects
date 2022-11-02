import React from 'react';
import Card from '../components/Card'
import axios from 'axios';
import AppContext from '../context';

function Orders() {
	const { onAddFavourite } = React.useContext(AppContext);
	const [orders, SetOrders] = React.useState([]);
	const [isLoading, SetIsLoading] = React.useState(true);

	React.useEffect(() => {
		(async () => {
			try {
				const { data } = await axios.get('https://631241f9b466aa9b0387460d.mockapi.io/orders');
				SetOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
				SetIsLoading(false);
			} catch (error) {
				alert('Error in creating orders');
				console.error(error);
			}
		})();
	}, []);

	return (
		<section className="content p-40 container">
			<div className="d-flex aling-center mb-40 justify-between">
				<h1>My orders</h1>
			</div>

			<div className="card__inner">
				{
					orders.map((item, index) => (
						<Card
							key={index}
							loading={isLoading}
							{...item}
						/>
					))}
			</div>
		</section>
	)
}

export default Orders;
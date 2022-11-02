import React from 'react';
import AppContext from '../context';
import Card from '../components/Card'

function Favourite() {
	const { favourites, onAddFavourite } = React.useContext(AppContext);

	return (
		<section className="content p-40 container">
			<div className="d-flex aling-center mb-40 justify-between">
				<h1>My favourite</h1>
			</div>

			<div className="card__inner">
				{
					favourites.map((item, index) => (
						<Card
							key={index}
							favourited={true}
							onFavourite={onAddFavourite}
							{... item}
						/>
					))}
			</div>
		</section>
	)
}

export default Favourite;
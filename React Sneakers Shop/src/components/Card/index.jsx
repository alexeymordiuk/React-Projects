import React from 'react';
import ContentLoader from "react-content-loader";
import styles from './Card.module.scss';
import AppContext from '../../context';

function Card({ id, onFavourite, onPlus, name, image, price, favourited = false, loading = false }) {
	const { isItemAdded } = React.useContext(AppContext);
	const [isFavourite, SetIsFavourite] = React.useState(favourited);
	const obj = { id, name, parentId: id, image, price };

	const onClickPlus = () => {
		onPlus(obj);
	}

	const onClickFavourite = () => {
		onFavourite(obj);
		SetIsFavourite(!isFavourite);
	}

	return (
		<div className={styles.card}>
			{
				loading ? <ContentLoader
					speed={2}
					width={150}
					height={187}
					viewBox="0 0 150 187"
					backgroundColor="#f3f3f3"
					foregroundColor="#ecebeb">
					<rect x="0" y="0" rx="10" ry="10" width="150" height="91" />
					<rect x="0" y="107" rx="3" ry="3" width="150" height="15" />
					<rect x="0" y="126" rx="3" ry="3" width="93" height="15" />
					<rect x="0" y="163" rx="8" ry="8" width="80" height="24" />
					<rect x="118" y="155" rx="8" ry="8" width="32" height="32" />
				</ContentLoader> :
					<>
						{onFavourite && (<div className={styles.card__like} onClick={onFavourite}>
							<img alt="unlike" src={isFavourite ? '/img/like.svg' : '/img/unlike.svg'} onClick={onClickFavourite} />
						</div>)}
						<img width={133} height={112} src={image} alt="" />
						<p>{name}</p>
						<div className="d-flex justify-between align-center">
							<div className="d-flex flex-column">
								<span className='mb-5'>Price:</span>
								<b>{price} UAH</b>
							</div>
							<div>
								{onPlus && (<img width={32} height={32} 
								src={isItemAdded(id) ? '/img/cheked.svg' : '/img/btn-plus.svg'} 
								onClick={onClickPlus} 
								className={styles.plus} 
								alt="Plus"/>)}
							</div>
						</div>
					</>
			}
		</div>
	);
}

export default Card;
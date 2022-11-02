import React from 'react';
import axios from 'axios';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Home from './pages/Home';
import { Route } from "react-router-dom";
import Favourite from './pages/Favourite';
import AppContext from './context'
import Orders from './pages/Orders';

function App() {
	const [cartOpened, SetCartOpened] = React.useState(false);
	const [isLoading, SetIsLoading] = React.useState(true);
	const [items, SetItems] = React.useState([]);
	const [cartItems, SetCartItems] = React.useState([]);
	const [favourites, SetFavourites] = React.useState([]);
	const [searchValue, SetSearchValue] = React.useState('');

	React.useEffect(() => {
		async function fetchData() {
			try {
				const [cartResponce, favouriteResponce, itemsResponce] = await Promise.all([
					axios.get('https://631241f9b466aa9b0387460d.mockapi.io/cart'),
					axios.get('https://631241f9b466aa9b0387460d.mockapi.io/favourite'),
					axios.get('https://631241f9b466aa9b0387460d.mockapi.io/items')
				]);

				SetIsLoading(false);
				SetCartItems(cartResponce.data);
				SetFavourites(favouriteResponce.data);
				SetItems(itemsResponce.data);
			} catch (error) {
				alert('Error in Date')
				console.log(error);
			}
		}
		fetchData();
	}, []);

	const onRemoveItem = (id) => {
		try {
			axios.delete(`https://631241f9b466aa9b0387460d.mockapi.io/cart/${id}`);
			SetCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)));
		} catch (error) {
			alert('Erron in remove product from cart');
			console.log(error);
		}
	};

	const onAddToCart = async (obj) => {
		try {
			const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id));
			if (findItem ) {
				SetCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.id)));
				await axios.delete(`https://631241f9b466aa9b0387460d.mockapi.io/cart/${findItem.id}`);
			} else {
				SetCartItems((prev) => [...prev, obj]);
				const { data } = await axios.post('https://631241f9b466aa9b0387460d.mockapi.io/cart', obj);
				SetCartItems((prev) => prev.map(item => {
					if (item.parentId === data.parentId) {
						return {
							...item,
							id: data.id
						};
					}
					return item;
				}));
			}
		} catch (error) {
			console.log(error);
		}
	};

	const onAddFavourite = async (obj) => {
		try {
			if (favourites.find(favObj => Number(favObj.id) === Number(obj.id))) {
				axios.delete(`https://631241f9b466aa9b0387460d.mockapi.io/favourite/${obj.id}`);
				SetFavourites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
			} else {
				const { data } = await axios.post('https://631241f9b466aa9b0387460d.mockapi.io/favourite', obj);
				SetFavourites((prev) => [...prev, data]);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const onChangeSearchInput = (event) => {
		SetSearchValue(event.target.value);
	};

	const isItemAdded = (id) => {
		return cartItems.some((obj) => Number(obj.parentId) === Number(id))
	};

	return (
		<AppContext.Provider value={{ 
		items, cartItems, 
		favourites, searchValue, 
		isLoading, SetSearchValue, 
		isItemAdded, onAddFavourite, 
		onChangeSearchInput, onAddToCart, 
		SetCartOpened, SetCartItems }}
		>
			<div className='main'>
				<Drawer items={cartItems}
					onClose={() => SetCartOpened(false)}
					onRemove={onRemoveItem}
					opened={cartOpened}
				/>

				<Header onClickCart={() => SetCartOpened(true)} />

				<Route path="/" exact>
					<Home/>
				</Route>

				<Route path="/favourite" exact>
					<Favourite />
				</Route>

				<Route path="/orders" exact>
					<Orders />
				</Route>
			</div>
		</AppContext.Provider>
	);
}

export default App;

import React from 'react';
import Card from '../components/Card';
import AppContext from '../context';
import Slider from '../components/Slider/Slider';
import About from '../components/About us/About';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';


function Home() {
	const { items, searchValue, SetSearchValue, onChangeSearchInput, onAddFavourite, onAddToCart, isLoading } = React.useContext(AppContext);

	const renderItems = () => {
		return (
			isLoading
				? [...Array(12)]
				: items.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))
		).map((item, index) => (
			<Card
				key={index}
				onFavourite={(obj) => onAddFavourite(obj)}
				onPlus={(obj) => onAddToCart(obj)}
				loading={isLoading}
				{...item}
			/>
		));
	};

	return (
		<section className='products__container container' id='home'>
			<Slider />
			<h2 className='about__title'>About us</h2>
			<About/>
			<div className="content p-40">
				<div className="d-flex aling-center mb-40 justify-between search-block">
					<h1>{searchValue ? `Search: "${searchValue}"` : 'All Sneakers'}</h1>
					<div className="search__block d-flex">
						<img src="/img/search.svg" alt="Search" />
						{searchValue && <img onClick={() => SetSearchValue('')} src="/img/btn-remove.svg" alt="Clear" className="cart__item-remove clear" />}
						<input onChange={onChangeSearchInput} value={searchValue} placeholder="Search" />
					</div>
				</div>

				<div className="card__inner" id='prod'>
					{renderItems()}
				</div>
			</div>
			<h2 className='about__title'>Contact us</h2>
			<Contact/>
			<Footer/>
		</section>
	)
}

export default Home;
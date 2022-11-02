import React from 'react'
import AppContext from "../context";

export const useCart = () => {
	const { cartItems, SetCartItems, } = React.useContext(AppContext);
	const totalPrice = cartItems.reduce((sum, obj) => Number(obj.price) + sum, 0);

	return{ cartItems, SetCartItems, totalPrice };
};

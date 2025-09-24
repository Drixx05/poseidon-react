import { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cartCount, setCart] = useState(0);

	const addToCart = () => {
		setCart((previousCartCount) => previousCartCount + 1);
	};

	return (
		<CartContext.Provider value={{ cartCount, addToCart }}>
			{children}
		</CartContext.Provider>
	);
};

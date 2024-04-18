import { createContext, useState } from "react";


export const ShopContext = createContext(null);


const getDefaultCart = (data) => {
  let cart = {};
  for (let i = 1; i < data.length +1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export default function ShopContextProvider(props) {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    setCartItems((prev) => {
      // Si l'article existe déjà dans le panier, ajoute 1 à sa quantité
      if (prev[itemId]) {
        return { ...prev, [itemId]: prev[itemId] + 1 };
      } else {
        return { ...prev, [itemId]: 1 };
      }
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const contextValue = {cartItems, addToCart, removeFromCart};
  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  );
}

import { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

export const ShopContext = createContext(null);

export default function ShopContextProvider({ children }) {
  /* Les state qui contiennent les id des éléments du panier et des favoris */
  const [cartItems, setCartItems] = useState({});
  const [favItems, setFavItems] = useState({});

  /* Ajout au panier */

  const addToCart = (itemId) => {
    setCartItems((prev) => {
      // Si l'article existe déjà dans le panier, ajoute 1 à sa quantité
      if (prev[itemId]) {
        return { ...prev, [itemId]: prev[itemId] + 1 };
      }
      return { ...prev, [itemId]: 1 };
    });
  };

  /* Retirer du panier */
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  /* Ajout aux fav */
  const addToFav = (itemId) => {
    setFavItems((prev) => {
      if (prev[itemId]) {
        return { ...prev, [itemId]: prev[itemId] + 1 };
      }
      return { ...prev, [itemId]: 1 };
    });
  };

  /* Retrait des fav */
  const removeFromFav = (itemId) => {
    setFavItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const contextValue = useMemo(
    () => ({
      cartItems,
      favItems,
      addToCart,
      removeFromCart,
      addToFav,
      removeFromFav,
    }),
    [cartItems, favItems, addToCart, removeFromCart, addToFav, removeFromFav]
  );

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
}

ShopContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

import { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

export const ShopContext = createContext(null);

export default function ShopContextProvider({ children }) {
  /* Les state qui contiennent les id des éléments du panier et des favoris */
  const [cartItems, setCartItems] = useState({});
  const [favItems, setFavItems] = useState({});

  /* Ajout au panier 
  Cette fonction prend l'id d'un article en paramètre (on l'appelera dans les composants avec addToCart(id)) 
  Elle change l'état de notre cartItems (qui contient les produits du panier). 
  - prev sert à désigner l'état précédent de cartItems 
  - si dans cet état (donc dans l'objet cartItems) il existe déjà une entrée avec notre id, elle retourne prev et ajoute +1 à sa quantité. 
  - sinon elle créé une entrée itemId:1
  Pour prendre un exemple concrêt, si on a déjà ajouté la paire de chaussette 56 au panier une fois, le cartItems va être {56 :1}
  Si on rajoute une paire 56, cartItems va conserver son état précédent puis ajouter 1 à cartItems[itemsId] donc à cartItems[56]. 
  On aura donc {56:2}
  */

  const addToCart = (itemId) => {
    setCartItems((prev) => {
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

/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

export const ShopContext = createContext(null);

export default function ShopContextProvider({ children }) {

  const [showAlertCart, setShowAlertCart] = useState(false)

  const [showAlertFav, setShowAlertFav] = useState(false)

  /* Les states qui contiennent les id des éléments du panier et des favoris */
  const [cartItems, setCartItems] = useState({});
  const [favItems, setFavItems] = useState({});
  // State qui stocke la taille choisit pour l'ajout au panier
  const [chooseSize, setChooseSize] = useState("Votre taille");

  // State qui stocke l'état Ouvert/Fermé du composant ProductDetails
  const [visible, setVisible] = useState(false);

  const [countCart, setCountCart] = useState(0)
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
        setVisible(false);
        return {
          ...prev,
          [itemId]: { quantity: prev[itemId].quantity + 1, size: chooseSize },
        };
      }
      setVisible(false);
      return { ...prev, [itemId]: { quantity: 1, size: chooseSize } };
    });
    setShowAlertCart(true);
    setTimeout(() => {
      setShowAlertCart(false);
    }, 4000);
    setChooseSize("Votre taille");
    setCountCart(countCart+1)
  };

  /* Même fonction mais pour les boutons + du panier pour éviter le changement de taille */ 
  const incrementCart = (itemId, sizeSelect) => {
    setCartItems((prev) => {
      if (prev[itemId]) {
        setVisible(false);
        return {
          ...prev,
          [itemId]: { quantity: prev[itemId].quantity + 1, size: sizeSelect },
        };
      }
      setVisible(false);
      setCountCart(countCart+1)
      return { ...prev, [itemId]: { quantity: 1} };
    });
  };


  /* Retirer du panier */
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: { quantity: prev[itemId].quantity - 1, size: chooseSize },
    }));
    setCountCart(countCart-1)
  };

  /* Même fonction mais pour les boutons - du panier pour éviter le changement de taille */ 
  const decrementCart = (itemId, sizeSelect) =>{
    setCartItems((prev) => ({
      ...prev,
      [itemId]: { quantity: prev[itemId].quantity - 1, size: sizeSelect },
    }));
  };



  /* Ajout aux fav */
  const addToFav = (itemId) => {
    setFavItems((prev) => {
      if (prev[itemId]) {
        return { ...prev, [itemId]: prev[itemId] + 1 };
      }
      return { ...prev, [itemId]: 1 };
    });
    setShowAlertFav(true);
    setTimeout(() => {
      setShowAlertFav(false);
    }, 4000);
  };

  /* Retrait des fav */
  const removeFromFav = (itemId) => {
    setFavItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const [finalTotal, setFinalTotal] = useState(0);

  /* useMemo nous sert à la performance du site. Il est utile lorsque le calcul de la valeur du contexte est coûteux en termes de performances,
   car useMemo évite de recalculer la valeur du contexte à chaque rendu. useMemo va s'assurer que contextValue est recalculée uniquement 
   lorsque l'une des dépendances spécifiées change. */ 
   
  const contextValue = useMemo(
    () => ({
      countCart,
      setCountCart,
      finalTotal,
      setFinalTotal,
      chooseSize,
      setChooseSize,
      cartItems,
      favItems,
      addToCart,
      removeFromCart,
      addToFav,
      removeFromFav,
      visible,
      setVisible,
      incrementCart,
      decrementCart,
      showAlertCart,
      showAlertFav
    }),
    [countCart,
      setCountCart,
      finalTotal,
      setFinalTotal,
      chooseSize,
      setChooseSize,
      cartItems,
      favItems,
      addToCart,
      removeFromCart,
      addToFav,
      removeFromFav,
      visible,
      setVisible,
      incrementCart,
      decrementCart,
      showAlertCart,
      showAlertFav
    ]
  );

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
}

ShopContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

import { useState } from "react";
import "./Card.css";
import PropTypes from "prop-types";
import ButtonsList from "../Cart/ButtonsList"

function Card({ data, handleToggle, colorSection, addToCart}) {

  
  // const addToCart = (item) => {
  //   const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id); // check if the item is already in the cart
  //     if (isItemInCart) {
  //     setCartItems(
  //         cartItems.map((cartItem) => // if the item is already in the cart, increase the quantity of the item
  //         cartItem.id === item.id
  //             ? { ...cartItem, quantity: cartItem.quantity + 1 }
  //             : cartItem // otherwise, return the cart item
  //         )
  //   );
  //   } else {
  //   setCartItems([...cartItems, { ...item, quantity: 1 }]); // if the item is not in the cart, add the item to the cart
  //   }
  // }

  

 

  return (
    // ENLEVER LE ROLE BUTTON ET TABINDEX UNE FOIS QUE LE ONCLICK SERA SUR LES ELEMENTS QUI IRONS VERS LE PRODUCTDETAILS
    <div className="card">
      <div className="card-header" role='button' tabIndex={0} onClick={handleToggle} onKeyDown={handleToggle}>
        <img className="product-img" src={data.src} alt="" />
        {/* REMPLACER ICI LE BOUTON LIKE QUI APPARAIT DANS L'IMAGE */}
        <ButtonsList buttonIndex={3}/>     
         </div>
      <div className="card-content">
        <p>{data.name}</p>
        <div className="card-footer">
          <span style={{ color: `${colorSection}` }}>{data.price} €</span>
          {/* REMPLACER ICI LE BOUTON D'AJOUT RAPIDE AU PANIER */}
    
          <button className="buttonsNavBar searchInNav" onClick={addToCart}> <ButtonsList buttonIndex={2}/> </button>

      
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  data: PropTypes.shape({
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  handleToggle: PropTypes.func.isRequired,
  colorSection: PropTypes.string.isRequired,
};
export default Card;

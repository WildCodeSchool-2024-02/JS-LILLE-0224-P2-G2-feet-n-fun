import { useContext } from "react";
import "./Cart.css"
import {ShopContext} from "../../context/shop-context"

function CartCard({ product, quantity }) {
    const { id, name, price, src } = product; 
    const { addToCart, removeFromCart, cartItems } = useContext(ShopContext);
    return ( 
      <div className="cardContainerCart">
        <img className="imgSocksCart" src={src} alt="" />
        <div className="cardTextCart">
          <h4>{name}</h4> 
          <div className="sizeCart">
            <p> Taille : </p>
            <p> Quantité : {quantity} </p>
          </div>
          <div className="priceCart">
            <p>{price * quantity}€</p>
          </div>
        </div> 
        <div className="cardButtonsCard">
          <button type="button" onClick={() => removeFromCart(id)}> - </button> 
          <input value={cartItems[id]} />
          <button type="button" onClick={() => addToCart(id)}> +</button>
        </div> 
      </div>
    );
  }

export default CartCard
/* 
A faire : 
- Il faudra changer les boutons avec le composant buttons
import Buttons from "./Buttons.jsx"
<Buttons buttonIndex={4} />
<Buttons buttonIndex={3} /> 

- Props à ajouter :
    - totalPrice 
    - Quantity 
    - Size

- Modifier les props en fonciton de comment on appelle l'API 

- Attention le prix doit évoluer avec la quantité ! 
 */ 

import "./Cart.css"
import PropTypes from 'prop-types'; 

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

function CartCard({name, price, src}) {
  return (
    <div className="cardContainerCart">
       
            <img className="imgSocksCart" src={src} alt="" />
                
                <div className="cardTextCart">
                    <h4>{name}</h4> <div className="sizeCart">
                    <p> Taille : </p>
                    <p> Quantité : </p></div>

                    <div className="priceCart"><p>{price}€</p></div>
                </div> 
                <div className="cardButtonsCard">
                    <button label="Supprimer" type="button"><img alt="supprimer" src="./public/assets/images/icons/add-heart.svg"/></button>
                    <button label="Ajout Favoris" type="button"><img alt="ajoutFav" src="./public/assets/images/icons/trash-bin.svg"/></button>
                </div>
      
    </div>
  );
}

export default CartCard;

CartCard.propTypes  = {
    name : PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    src : PropTypes.string.isRequired,
    
} 
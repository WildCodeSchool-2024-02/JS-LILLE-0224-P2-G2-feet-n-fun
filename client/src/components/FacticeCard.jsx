import PropTypes from 'prop-types'; 
import Buttons from './Buttons';

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
                     <Buttons buttonIndex={4}/> 
                     <Buttons buttonIndex={3}/> </div>
      
    </div>
  );
}

export default CartCard;

CartCard.propTypes  = {
    name : PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    src : PropTypes.string.isRequired,
    
} 
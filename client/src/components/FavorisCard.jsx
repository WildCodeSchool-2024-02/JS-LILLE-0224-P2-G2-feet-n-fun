import "./favoris.css";
import PropTypes from "prop-types";

/* 
A faire : 
- Il faudra changer les boutons avec le composant buttons
import Buttons from "./Buttons.jsx"

- Modifier les props en fonciton de comment on appelle l'API 
 */

function FavorisCard({ name, price, src }) {
  return (
    <div className="cardContainerFav">
      <img className="imgSocksFav" src={src} alt="" />

      <div className="cardTextFav">
        <h4>{name}</h4>

        <div className="priceFav">
          <p>{price}€</p>
        </div>
      </div>
      <div className="cardButtonsFav">
        <button label="Supprimer" type="button">
          <img
            alt="Ajouter au Panier"
            src="./public/assets/images/icons/add-cart.svg"
          />
        </button>
        <button label="Ajout Favoris" type="button">
          <img
            alt="supprimer"
            src="./public/assets/images/icons/trash-bin.svg"
          />
        </button>
      </div>
    </div>
  );
}

export default FavorisCard;

FavorisCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
};

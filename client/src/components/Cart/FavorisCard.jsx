import "./favoris.css";
import PropTypes from "prop-types";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
/* 
A faire : 
- Il faudra changer les boutons avec le composant buttons
import Buttons from "./Buttons.jsx"

- Modifier les props en fonciton de comment on appelle l'API 
 */
function FavorisCard({ product }) {
  const { id, name, price, src } = product;
  const { removeFromFav, addToCart } = useContext(ShopContext);

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
        <button label="Supprimer" type="button" onClick={() => addToCart(id)}>
          <img
            alt="Ajouter au Panier"
            src="./public/assets/images/icons/add-cart.svg"
          />
        </button>
        <button
          label="Ajout Favoris"
          onClick={() => removeFromFav(id)}
          type="button"
        >
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
  product: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      src: PropTypes.string.isRequired,
    })
  ).isRequired,
};

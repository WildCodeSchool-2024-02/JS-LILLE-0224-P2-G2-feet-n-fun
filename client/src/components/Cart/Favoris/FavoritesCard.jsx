import "./favoris.css";
import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { ShopContext } from "../../../context/ShopContext";
import SizeListDekstop from "../../Shop/Card/ProductDetails/SizeList/SizeListDekstop";

function FavoritesCard({ product }) {
  const { id, name, price, src } = product;
  const { removeFromFav, addToCart, chooseSize } = useContext(ShopContext);

  const [sizeNotValidate, setSizeNotValidate] = useState(false);

  const launchAddToCart = (idSelect) => {
    if (chooseSize !== "Votre taille") {
      addToCart(idSelect);
      setSizeNotValidate(false);
    } else {
      setSizeNotValidate(true);
    }
  };

  return (
    <>
      <div className="cardContainerFav">
        <img className="imgSocksFav" src={src} alt="" />
        <div className="cardTextFav">
          <h4>{name}</h4>
          <div className="priceFav">
            <p>{price}€</p>
          </div>
        </div>
        <div className="cardButtonsFav">
          <button
            label="ajoutePanier"
            type="button"
            onClick={() => launchAddToCart(id)}
          >
            <img
              alt="Ajouter au Panier"
              src="./assets/images/icons/add-cart.svg"
            />
          </button>
          <button
            label="RetraitFavoris"
            onClick={() => removeFromFav(id)}
            type="button"
          >
            <img
              alt="supprimer"
              src="./assets/images/icons/trash-bin.svg"
            />
          </button>
        </div>
      </div>
      {sizeNotValidate && (
        <div className="chooze-sizes">
          <SizeListDekstop data={product} />{" "}
          <button
            type="button"
            className="add-to-cart primary-button"
            onClick={() => launchAddToCart(id)}
          >
            Ajouter au panier
          </button>
          
          </div>
      )} 
    </>
  );
}

export default FavoritesCard;
FavoritesCard.propTypes = {
  product: PropTypes.shape({  
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      src: PropTypes.string.isRequired,
  }).isRequired,
};

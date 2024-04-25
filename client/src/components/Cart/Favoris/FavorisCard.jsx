import "./favoris.css";
import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { ShopContext } from "../../../context/ShopContext";
import SizeListMobile from "../../Shop/Card/ProductDetails/SizeList/SizeListMobile";

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
        <>
          {" "}
          <p style={{ color: "red", paddingBottom: "0.5rem" }}>
            Veuillez sélectionner une taille
          </p>{" "}
          <SizeListMobile data={product} />{" "}
        </>
      )}
    </>
  );
}

export default FavoritesCard;
FavoritesCard.propTypes = {
  product: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      src: PropTypes.string.isRequired,
    })
  ).isRequired,
};

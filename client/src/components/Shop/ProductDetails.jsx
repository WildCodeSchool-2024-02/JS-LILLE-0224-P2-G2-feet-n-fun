import "./ProductDetails.css";
import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import SizeList from "./SizeList";

function ProductDetails({ data, colorSection, visible, handleToggle }) {
  const { id } = data;
  const { addToCart, chooseSize, addToFav } = useContext(ShopContext);

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
    <div className="product-details" id={!visible ? "close" : ""}>
      <button type="button" className="exit-btn" onClick={handleToggle}>
        <img
          src="../assets/images/icons/exit-btn-red.svg"
          alt="Bouton pour fermer la fenêtre des détails du produit."
        />
      </button>
      <div className="product-picture">
        <img src={data.src} alt="Aperçu du produit." />
      </div>
      <div className="product-content">
        <div className="product-desc">
          <h3>{data.name}</h3>
          <p>{data.desc}</p>
          <span style={{ color: `${colorSection}` }}>{data.price}€</span>
        </div>
        {sizeNotValidate && (
          <p style={{ color: "red", paddingBottom: "0.5rem" }}>
            Veuillez sélectionner une taille
          </p>
        )}
        <SizeList data={data} />
        <div className="product-footer">
          <button
            type="button"
            className="add-to-cart"
            onClick={() => launchAddToCart(id)}
          >
            Ajouter au panier
          </button>
          <button type="button" className="like" onClick={() => addToFav(id)}>
            A
          </button>
        </div>
      </div>
    </div>
  );
}

ProductDetails.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    size: PropTypes.arrayOf.isRequired,
    price: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
  }).isRequired,
  colorSection: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
};
export default ProductDetails;

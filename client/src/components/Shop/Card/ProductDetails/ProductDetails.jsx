import "./ProductDetails.css";
import PropTypes from "prop-types";
import { useState, useContext } from "react";
import { ShopContext } from "../../../../context/ShopContext";
import SizeListMobile from "./SizeList/SizeListMobile";
import SizeListDekstop from "./SizeList/SizeListDekstop";
/* à ajouter pour la dernière version onClick={() => addToFav(id)} avec useContext */
function ProductDetails({data, colorSection}) {

  const { id } = data;
  const { addToCart, visible, setVisible, chooseSize, addToFav } = useContext(ShopContext);
  // Function qui assigne la taille sélectionnéé au state chooseSize (dans le composant CardContainer) pour transmettre la taille lors de l'ajout au panier.

  const [sizeNotValidate, setSizeNotValidate] = useState(false);

  const launchAddToCart = (idSelect) => {
    if (chooseSize !== "Votre taille") {
      addToCart(idSelect);
      setSizeNotValidate(false);
    } else {
      setSizeNotValidate(true);
    }
  };

  const [isTheFirstOpening, setisTheFirstOpening] = useState(false);

  const isClose = isTheFirstOpening && !visible ? "close" : "";
  const isOpen = visible ? "open" : "";

  const closeProduct = () => {
    setVisible(!visible);
    setisTheFirstOpening(true);
  };

  return (
    <div className={`product-details ${isClose} ${isOpen}`}>
      <button type="button" className="exit-btn" onClick={closeProduct}>
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
          <h3 className="title-product">{data.name}</h3>
          <p>{data.desc}</p>
        </div>
        <div className="price">
          <span id="price" style={{ color: `${colorSection}` }}>
            {data.price}€
          </span>
          {sizeNotValidate && (
          <p style={{ color: "red", paddingBottom: "0.5rem" }}>
            Veuillez sélectionner une taille
          </p>
        )}
          <SizeListDekstop
            data={data}
          />
        </div>
        <SizeListMobile data={data} />
        <div className="product-footer">
          <button
            type="button"
            className="add-to-cart"
            onClick={() => launchAddToCart(id)}
          >
            Ajouter au panier
          </button>
          <button className="button-addToFav" type="button" onClick={() => addToFav(id)}>

            <img className="icon-addToFav" src="../assets/images/icons/add-heart.svg" alt="ajout aux favoris"/>
          </button>
        
        </div>
      </div>
    </div>
  );
}

ProductDetails.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    size: PropTypes.arrayOf(
      PropTypes.shape({
        size: PropTypes.string.isRequired,
        available: PropTypes.bool.isRequired,
      })
    ).isRequired,
    price: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    color: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  colorSection: PropTypes.string.isRequired,
};
export default ProductDetails;

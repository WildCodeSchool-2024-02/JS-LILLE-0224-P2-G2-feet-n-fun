import "./ProductDetails.css";
import PropTypes from "prop-types";
import SizeListMobile from "./SizeListMobile";
import SizeListDekstop from "./SizeListDekstop";

function ProductDetails({
  data,
  colorSection,
  visible,
  closeProduct,
  chooseSize,
  setChooseSize,
}) {
  // Function qui assigne la taille sélectionner au state chooseSize (dans le composant CardContainer) pour transmettre la taille lors de l'ajout au panier.
  const changeSize = (selectedIndex) => {
    setChooseSize(data.size[selectedIndex].size);
  };

  return (
    <div className="product-details" id={visible ? "open" : "close"}>
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
          <h3>{data.name}</h3>
          <p>{data.desc}</p>
        </div>
        <div className="price">
        <span id="price" style={{ color: `${colorSection}` }}>{data.price}€</span>
        <SizeListDekstop data={data} chooseSize={chooseSize} changeSize={changeSize} />
        </div>
        <div className="product-footer">
        <SizeListMobile data={data} chooseSize={chooseSize} changeSize={changeSize} />
        <div className="product-cart">
          <button type="button" className="add-to-cart">
            Ajouter au panier
          </button>
          <button type="button" className="like">
            ❤️
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}

ProductDetails.propTypes = {
  data: PropTypes.shape({
    size: PropTypes.arrayOf(PropTypes.shape({
      size: PropTypes.string.isRequired,
      available: PropTypes.bool.isRequired
    })).isRequired,
    price: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    color: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  colorSection: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  closeProduct: PropTypes.func.isRequired,
  chooseSize: PropTypes.string.isRequired,
  setChooseSize: PropTypes.func.isRequired,
};
export default ProductDetails;
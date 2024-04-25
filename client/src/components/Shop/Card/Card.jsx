import "./Card.css";
import PropTypes from "prop-types";
import { useContext } from "react";
import { ShopContext } from "../../../context/ShopContext";

function Card({ data, openProduct, colorSection }) {
  const { id } = data;
  const { addToFav } = useContext(ShopContext);
  return (
    <div className="card">
      <div className="card-header">
      <div className='eye-container' role='button' tabIndex={0} onClick={openProduct} onKeyDown={openProduct}>
        <img className='eye-img' src="../assets/images/icons/eye-hover.svg" alt="Clique ici pour plus de détails sur le produit"/>
      </div>
        <img className="product-img" src={data.src} alt="" />
        {/* REMPLACER ICI LE BOUTON LIKE QUI APPARAIT DANS L'IMAGE */}
        <button type="button" onClick={() => addToFav(id)}>
          <img
            src="../assets/images/icons/add-heart.svg"
            alt="Bouton d'ajout à la liste d'envie"
          />
        </button>
        </div>
        <div className="card-content">
        <div role='button' tabIndex={0} onClick={openProduct} onKeyDown={openProduct}>
          <p>{data.name}</p>
        </div>
        <div className="card-footer">
          <span style={{ color: `${colorSection}` }}>{data.price} €</span>
          <button type="button" className="buttonsNavBar searchInNav" onClick={openProduct}>
            <img
              src="../assets/images/icons/add-cart.svg"
              alt="Bouton d'ajout au panier"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
Card.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  colorSection: PropTypes.string.isRequired,
  openProduct: PropTypes.func.isRequired,
};
export default Card;
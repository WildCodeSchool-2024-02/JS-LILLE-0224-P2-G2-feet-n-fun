import "./Card.css";
import PropTypes from "prop-types";

function Card({ data, handleToggle, colorSection }) {
  return (
    // ENLEVER LE ROLE BUTTON ET TABINDEX UNE FOIS QUE LE ONCLICK SERA SUR LES ELEMENTS QUI IRONS VERS LE PRODUCTDETAILS
    <div className="card" role='button' tabIndex={0} onClick={handleToggle} onKeyDown={handleToggle}>
      <div className="card-header">
        <img className="product-img" src={data.src} alt="" />
        {/* REMPLACER ICI LE BOUTON LIKE QUI APPARAIT DANS L'IMAGE */}
        <button type="button">
          <img
            src="../assets/images/icons/add-heart.svg"
            alt="Bouton d'ajout à la liste d'envie"
          />
        </button>
      </div>
      <div className="card-content">
        <p>{data.name}</p>
        <div className="card-footer">
          <span style={{ color: `${colorSection}` }}>{data.price} €</span>
          {/* REMPLACER ICI LE BOUTON D'AJOUT RAPIDE AU PANIER */}
          <button type="button">
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
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  handleToggle: PropTypes.func.isRequired,
  colorSection: PropTypes.string.isRequired,
};
export default Card;

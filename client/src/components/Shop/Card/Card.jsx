import "./Card.css";
import PropTypes from "prop-types";

function Card({ data, openProduct, colorSection }) {
  return (
    <div className="card">
      <div className="card-header">
      <div className='eye-container' role='button' tabIndex={0} onClick={openProduct} onKeyDown={openProduct}>
        <img className='eye-img' src="../assets/images/icons/eye-hover.svg" alt="Clique ici pour plus de détails sur le produit"/>
      </div>
        <img className="product-img" src={data.src} alt="" />
        <button type="button">
          <img
            src="../assets/images/icons/add-heart.svg"
            alt="Bouton d'ajout à la liste d'envie"
            className="iconFavCard"
          />
        </button>
      </div>
      <div className="card-content">
        <div role='button' tabIndex={0} onClick={openProduct} onKeyDown={openProduct}>
          <p>{data.name}</p>
        </div>
        <div className="card-footer">
          <span style={{ color: `${colorSection}` }}>{data.price} €</span>
          <button type="button">
            <img
              src="../assets/images/icons/add-cart.svg"
              alt="Bouton d'ajout au panier"
              className="iconCartCard"
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
  openProduct: PropTypes.func.isRequired,
  colorSection: PropTypes.string.isRequired,
};
export default Card;

import "./Card.css";
import PropTypes from "prop-types";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

function Card({ data, handleToggle, colorSection }) {
  const { id, name, price, src } = data;
  const { addToCart, addToFav } = useContext(ShopContext);

  return (
    <div className="card">
      <div
        className="card-header"
        role="button"
        tabIndex={0}
        onKeyDown={handleToggle}
        onClick={handleToggle}
      >
        <img className="product-img" src={src} alt="" />
        <button type="button" onClick={() => addToFav(id)}>
          <img
            src="../assets/images/icons/add-heart.svg"
            alt="Bouton d'ajout à la liste d'envie"
          />
        </button>
      </div>
      <div className="card-content">
        <p>{name}</p>
        <div className="card-footer">
          <span style={{ color: colorSection }}>{price} €</span>
          <button
            type="button"
            className="buttonsNavBar searchInNav"
            onClick={() => addToCart(id)}
          >
            <img src="../assets/images/icons/add-cart.svg" alt="favoris" />
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
    id: PropTypes.number.isRequired,
  }).isRequired,
  handleToggle: PropTypes.func.isRequired,
  colorSection: PropTypes.string.isRequired,
};
export default Card;

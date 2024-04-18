import {useContext } from "react";
import "./Card.css";
import PropTypes from "prop-types";
import ButtonsList from "../Cart/ButtonsList";
import {ShopContext} from "../../context/shop-context"

function Card({ data, handleToggle, colorSection }) {
  const { id, name, price, src } = data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];

  return (
    <div className="card">
      <div label="oui"
        className="card-header"
        role="button"
        tabIndex={0}
        onClick={handleToggle}
        onKeyDown={handleToggle}
      >
        <img className="product-img" src={src} alt="" />
        <ButtonsList buttonIndex={3} />
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
            Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
          </button>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
  }).isRequired,
  handleToggle: PropTypes.func.isRequired,
  colorSection: PropTypes.string.isRequired,
};

export default Card;

import "./Cart.css";
import PropTypes from "prop-types";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

function CartCard({ product, quantity, size }) {
  const { id, name, price, src } = product;
  const { addToCart, removeFromCart } = useContext(ShopContext);

  const productPrice = (price * quantity).toFixed(2);

  return (
    <div className="cardContainerCart">
      <img className="imgSocksCart" src={src} alt="" />
      <div className="cardTextCart">
        <h4>{name}</h4>
        <div className="sizeCart">
          <p> Taille : {size} </p>
          <p> Quantité : {quantity} </p>
        </div>
        <div className="priceCart">
          <p>{productPrice}€</p>
        </div>
      </div>
      <div className="cardButtonsCard">
        <button type="button" onClick={() => removeFromCart(id)}>
          -
        </button>
        <input  type="number" min="1" value={quantity} />
        <button type="button" onClick={() => addToCart(id)}>
          +
        </button>
      </div>
    </div>
  );
}

export default CartCard;

CartCard.propTypes = {
  quantity: PropTypes.number.isRequired,
  size: PropTypes.string.isRequired,
  product: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      src: PropTypes.string.isRequired,
    })
  ).isRequired,
};

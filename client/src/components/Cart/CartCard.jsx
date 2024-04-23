import "./Cart.css";
import PropTypes from "prop-types";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

function CartCard({ product, quantity }) {
  const { id, name, price, src } = product;
  const { addToCart, removeFromCart, cartItems } = useContext(ShopContext);

  const prixProduit = price * quantity;
  const prixProduit2 = prixProduit.toFixed(2);
  return (
    <div className="cardContainerCart">
      <img className="imgSocksCart" src={src} alt="" />
      <div className="cardTextCart">
        <h4>{name}</h4>
        <div className="sizeCart">
          <p> Taille : </p>
          <p> Quantité : {quantity} </p>
        </div>
        <div className="priceCart">
          <p>{prixProduit2}€</p>
        </div>
      </div>
      <div className="cardButtonsCard">
        <button type="button" onClick={() => removeFromCart(id)}>
          {" "}
          -{" "}
        </button>
        <input value={cartItems[id]} />
        <button type="button" onClick={() => addToCart(id)}>
          {" "}
          +
        </button>
      </div>
    </div>
  );
}

export default CartCard;

CartCard.propTypes = {
  quantity: PropTypes.number.isRequired,
  product: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      src: PropTypes.string.isRequired,
    })
  ).isRequired,
};

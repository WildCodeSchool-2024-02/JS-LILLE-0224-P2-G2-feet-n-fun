import "./Cart.css";
import PropTypes from "prop-types";
import { useContext} from "react";
import { ShopContext } from "../../../context/ShopContext";

function CartCard({ product, quantity, size }) {
  const { id, name, price, src } = product;
  const {incrementCart, decrementCart, addToFav, setCountCart, countCart } = useContext(ShopContext);

  const productPrice = (price * quantity).toFixed(2);

  const itsTheLastProduct = () => {
    if (quantity === 1) {
      setCountCart(countCart -1)
    }
    decrementCart(id, size)
  }

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
  <div className="buttonsAddAndDelete">
        <button label="Ajout Favoris" type="button" onClick={()=> addToFav(id)}>
          <img
            alt="ajoutFav"
            src="./public/assets/images/icons/add-heart.svg"
          /> </button></div>
          <div className="quantityCart">
        <button type="button" onClick={() => itsTheLastProduct()}>
          -
        </button>
        <input value={quantity}/>
        <button type="button" onClick={() => incrementCart(id,size)}>
          +
          </button>
          </div>
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

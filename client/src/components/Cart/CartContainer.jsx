import "./Cart.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import CartCard from "./CartCard";
import { ShopContext } from "../../context/ShopContext";

/* A ajouter : 
- fonction pour quitter et revenir à la page précédente (continuer mes achats)  */
function CartContainer({ data }) {

  const { cartItems } = useContext(ShopContext);

  // Fonction pour trouver un produit par son ID et le faire correspondre à la data de notre API
  const findProductById = (productId) => {
    let foundProduct = null;
    
  // eslint-disable-next-line react/prop-types
    data.some((category) => {

      foundProduct = category.products.find(
        (product) => product.id === productId
      );
      return foundProduct !== undefined; // Sortir de la boucle si le produit est trouvé
    });

    return foundProduct; // Retourner le produit trouvé ou null s'il n'est pas trouvé
  };

  /* cartItems ressemble à : [{1:2, 33:4}].
1 c'est l'ID de l'item, 2 c'est la quantité. Loop dans chaque item qui sont dans cartItems pour voir si 
leur quantité est plus importante que 0,  ce qui signifie qu'il y en a au moins 1 dans le panier. S'ils sont dans le panier,
on prend la quantié et on multiplie par leur prix). */
  const getTotalCartAmount = () => {
    let totalAmount2 = 0;
    let totalAmount;
    Object.keys(cartItems).forEach((itemId) => {
      const product = findProductById(Number(itemId));
      if (product && cartItems[itemId] > 0) {
        totalAmount2 += cartItems[itemId] * product.price;
        totalAmount = `Total ${totalAmount2.toFixed(2)} €`;
      }
    });
    if (totalAmount2 === 0) {
      totalAmount = "Votre panier est vide !";
    }
    return totalAmount;
  };

  return (
    <section className="sectionCart">
      <button type="button" className="buttonCloseDeliveryPayment">
        <img src="./public/assets/images/icons/exit-btn-red.svg" alt="croix" />
      </button>
      <h2>Panier</h2>
      <div className="cardsContainerCart">
        {Object.entries(cartItems).map(([productId, quantity]) => {
          const product = findProductById(parseInt(productId, 10));
          if (product && quantity > 0) {
            return (
              <CartCard key={productId} product={product} quantity={quantity} />
            );
          }
          return null;
        })}
        <span className="totalCart">{getTotalCartAmount()}</span>
        <Link to="/livraison">
          {" "}
          <button type="button" className="cartValidationButton">
            Valider
          </button>
        </Link>
      </div>

    </section> 
  );
}

export default CartContainer;

CartContainer.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    products: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  some: PropTypes.func.isRequired,
};

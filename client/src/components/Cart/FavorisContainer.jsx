import "./favoris.css";
import { useContext } from "react";
import PropTypes from "prop-types";
import FavorisCard from "./FavorisCard";
import { ShopContext } from "../../context/ShopContext";

function FavorisContainer({ data }) {
  const { favItems } = useContext(ShopContext);

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
  
  return (
    <>
      <button type="button" className="buttonCloseDeliveryPayment">
        <img src="./public/assets/images/icons/exit-btn-red.svg" alt="croix" />
      </button>
      <h2>Favoris</h2>
      <div className="cardsContainerFav">
        {Object.entries(favItems).map(([productId, quantity]) => {
          const product = findProductById(parseInt(productId, 10));
          if (product && quantity > 0) {
            return (
              <FavorisCard
                key={productId}
                product={product}
                quantity={quantity}
              />
            );
          }
          return null;
        })}
      </div>
    </>
  );
}
FavorisContainer.propTypes = {
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

export default FavorisContainer;

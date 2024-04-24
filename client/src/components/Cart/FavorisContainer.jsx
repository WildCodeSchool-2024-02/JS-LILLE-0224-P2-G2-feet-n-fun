import "./favoris.css";
import { useContext } from "react";
import PropTypes from "prop-types";
import FavorisCard from "./FavorisCard";
import { ShopContext } from "../../context/ShopContext";

function FavoritesContainer({ data }) {
  const { favItems } = useContext(ShopContext);

  const findProductById = (productId) => {
    let foundProduct = null;
    // eslint-disable-next-line react/prop-types
    data.some((category) => {
      foundProduct = category.products.find(
        (product) => product.id === productId
      );
      return foundProduct !== undefined;
    });
    return foundProduct;
  };

  return (
    <>
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
FavoritesContainer.propTypes = {
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

export default FavoritesContainer;

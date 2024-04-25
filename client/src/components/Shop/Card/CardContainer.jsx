import "./CardContainer.css";
import PropTypes from "prop-types";
import { useState, useContext } from "react";
import Card from "./Card";
import ProductDetails from "./ProductDetails/ProductDetails";
import { ShopContext } from "../../../context/ShopContext";
import FilterButtonContainer from "./FilterButtonContainer/FilterButtonContainer";

function CardContainer({ data }) {
  const { visible, setVisible } = useContext(ShopContext);
  // State qui stock l'index du produit cliqué
  const [productSelected, setProductSelected] = useState(0);

  // Fonction qui change l'état de visible à true (Ouvre ProductDetails)
  // Qui assigne l'index du produit cliqué à ProductSelected (Pour obtenir les détails du bon produit)
  const openProduct = (indexOfProduct) => {
    setVisible(true);
    setProductSelected(indexOfProduct);
  }; 


  return (
    <>
      <FilterButtonContainer dataCategory={data.id} />
      <div
        className="card-container"
      >
        {/* .map() Pour générer toutes les cards d'une section */}
        {data.products.map((product, index) => (
          <Card
            key={`${product.id}.${product.name}`}
            data={product}
            colorSection={data.color}
            openProduct={() => openProduct(index)}
            setVisible={setVisible}
          />
        ))}
      </div>
      {/* Ouvre le composant ProductDetails lors ce que visible est true */}
      
        <ProductDetails
          data={data.products[productSelected]}
          colorSection={data.color}
          visible={visible}
        />
    </>
  );
}

CardContainer.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    products: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })).isRequired
  }).isRequired,
};
export default CardContainer;

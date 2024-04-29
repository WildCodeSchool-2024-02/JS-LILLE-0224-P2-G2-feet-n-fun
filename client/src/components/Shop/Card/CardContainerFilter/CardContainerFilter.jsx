import "../CardContainer.css";
import PropTypes from "prop-types";
import { useState, useContext } from "react";
import { ShopContext } from "../../../../context/ShopContext";
import Card from "../Card";
import ProductDetails from "../ProductDetails/ProductDetails";
import FilterButtonContainer from "../FilterButtonContainer/FilterButtonContainer";
import CategoryBar from "../../../Header/CategoryBar/CategoryBar";


function CardContainerFilter({ data, category }) {

  // State qui stock l'état Ouvert/Fermé du composant ProductDetails
  const { setVisible} = useContext(ShopContext);

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
    <CategoryBar/>
    <FilterButtonContainer dataCategory={category} /> 
      <div
        className="card-container"
      >
        {/* .map() Pour générer toutes les cards d'une section */}
        {data.length > 0 ? data.map((product, index) => (
          <Card
            key={`${product.id}.${product.name}`}
            data={product}
            openProduct={() => openProduct(index)}
            setVisible={setVisible}
          />
        )) : <h2>Aucun résultat correspondant</h2>}
      </div>
      {/* Ouvre le composant ProductDetails lors ce que visible est true */}
      {data.length > 0 &&
        <ProductDetails
          data={data[productSelected]}
        />}
    </>
  );
}

CardContainerFilter.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
  })).isRequired,
  category: PropTypes.number.isRequired,  
};
export default CardContainerFilter;

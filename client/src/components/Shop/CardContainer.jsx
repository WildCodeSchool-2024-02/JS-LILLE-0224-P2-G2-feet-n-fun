import "./CardContainer.css";
import PropTypes from "prop-types";
import { useState } from "react";
import Card from "./Card";
import ProductDetails from "./ProductDetails";

function CardContainer({ data, sectionSelected }) {
  // State qui stock l'état Ouvert/Fermé du composant ProductDetails
  const [visible, setVisible] = useState(false);

  // State qui stock l'index du produit cliqué
  const [productSelected, setProductSelected] = useState();

  // Fonction qui change l'état de visible true/false (Ouvre/Ferme ProductDetails)
  // Qui assigne l'index du produit cliqué à ProductSelected (Pour obtenir les détails du bon produit)
  const handleToggle = (indexOfProduct) => {
    setVisible(!visible);
    setProductSelected(indexOfProduct);
  };

  // State qui stock la taille choisit pour l'ajout au panier
  const [chooseSize, setChooseSize] = useState("Votre taille");

  return (
    <>
      <div className="card-container">
        {/* .map() Pour générer toutes les cards d'une section */}
        {data[sectionSelected].products.map((product, index) => (
          <Card
            key={`${product.id}.${product.name}`}
            data={product}
            colorSection={data[sectionSelected].color}
            handleToggle={() => handleToggle(index)}
          />
        ))}
      </div>
      {/* Ouvre le composant ProductDetails lors ce que visible est true */}
      {visible && (
        <ProductDetails
          data={data[sectionSelected].products[productSelected]}
          colorSection={data[sectionSelected].color}
          visible={visible}
          handleToggle={handleToggle}
          chooseSize={chooseSize}
          setChooseSize={setChooseSize}
        />
      )}
    </>
  );
}

CardContainer.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
  }).isRequired,
  sectionSelected: PropTypes.func.isRequired,
};
export default CardContainer;

import "./CardContainer.css";
import PropTypes from "prop-types";
import { useState } from "react";
import Card from "./Card";
import ProductDetails from "./ProductDetails";

function CardContainer({ data }) {
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
      <h2 className="titreCategorie">{data.name}</h2>
      <div className="card-container">
        {/* .map() Pour générer toutes les cards d'une section */}
        {data.products.map((product, index) => (
          <Card
            key={`${product.id}.${product.name}`}
            data={product}
            colorSection={data.color}
            handleToggle={() => handleToggle(index)}
          />
        ))}
      </div>
      {/* Ouvre le composant ProductDetails lors ce que visible est true */}
      {visible && (
        <ProductDetails
          data={data.products[productSelected]}
          colorSection={data.color}
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
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    products: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};
export default CardContainer;

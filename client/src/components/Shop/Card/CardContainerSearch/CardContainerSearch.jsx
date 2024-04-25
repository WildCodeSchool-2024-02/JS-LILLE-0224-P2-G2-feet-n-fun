import "../CardContainer.css";
import PropTypes from "prop-types";
import { useState } from "react";
import Card from "../Card";
import ProductDetails from "../ProductDetails/ProductDetails";

function CardContainerSearch({ data }) {
  // State qui stock l'état Ouvert/Fermé du composant ProductDetails
  const [visible, setVisible] = useState(false);

  // State qui stock l'index du produit cliqué
  const [productSelected, setProductSelected] = useState(0);

  // Fonction qui change l'état de visible à true (Ouvre ProductDetails)
  // Qui assigne l'index du produit cliqué à ProductSelected (Pour obtenir les détails du bon produit)
  const openProduct = (indexOfProduct) => {
    setVisible(true);
    setProductSelected(indexOfProduct);
  }; 

  // State qui stock la taille choisit pour l'ajout au panier
  const [chooseSize, setChooseSize] = useState("Votre taille");
  return (
    <>
      <div 
        className="card-container"
      >
        {/* .map() Pour générer toutes les cards d'une section */}
        {data.length > 0 ? data.map((product, index) => (
          <Card
            key={`${product.id}.${product.name}`}
            data={product}
            colorSection={data.color}
            openProduct={() => openProduct(index)}
            setVisible={setVisible}
          />
        ))
        : <h2>Aucun résultat correspondant</h2>
        }
      </div>
      {/* Ouvre le composant ProductDetails lors ce que visible est true */}
        {data.length > 0 && <ProductDetails
          data={data[productSelected]}
          colorSection={data.color}
          visible={visible}
          setVisible={setVisible}
          chooseSize={chooseSize}
          setChooseSize={setChooseSize}
        />}
    </>
  );
}

CardContainerSearch.propTypes = {
  data: PropTypes.shape({
    length: PropTypes.number.isRequired,
    map: PropTypes.func.isRequired,
    color: PropTypes.string.isRequired,
    products: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })).isRequired
  }).isRequired,
};
export default CardContainerSearch;

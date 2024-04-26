import "./favoris.css";
import { useContext } from "react";
import PropTypes from "prop-types";
import { ShopContext } from "../../../context/ShopContext";
import FavoritesCard from "./FavoritesCard"


function FavoritesContainer({ data }) {
  const { favItems } = useContext(ShopContext);


    /* findProductById sert à faire correspondre l'id du produit de la liste des faovris (favItems) 
  à l'id d'un produit de notre API (data), afin qu'on puisse récupérer les informations (img, prix etc. ) 
  
   - productId est l'identifiant du produit de favItems 
   - la variable foundProduct sert à stocker le produit trouvé (on l'initialise à null pour qu'elle ne retourne rien 
   s'il n'y a pas de produit dans le panier / pas de produit correspondant dans l'API)

Sur data : 
   -  on utilise la méthode some (qui permet de vérifier si au moins un élément de data passe le test de la fonction) 
    - on utilise ensuite la méthode find pour trouver si l'id stocké dans favItems (productId) correspond à un id de data (product.id) 
    On fait cette recherche dans chaque catégorie, comme notre API est sous le modèle 
    [ {cat1 : {produit 1}, {produit 2} ... , {cat2 :{produit 3}, {produit 4} ... }]). 
    - si un produit correspond, on lui dit de retourner le produit. 
     */

    const findProductById = (productId) => 
    data
      .flatMap((category) => category.products)
      .find((product) => product.id === productId);
  
  return (
    <>
      <h2 className="titleRubrique" >Favoris</h2>
      <div className="cardsContainerFav">
        {Object.entries(favItems).map(([productId, quantity]) => {
          const product = findProductById(Number(productId));
          if (product && quantity > 0) {
            return (
              <FavoritesCard
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
FavoritesContainer
.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      products: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};


export default FavoritesContainer;

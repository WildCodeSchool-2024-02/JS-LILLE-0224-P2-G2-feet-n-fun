import "./Cart.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import CartCard from "./CartCard";
import { ShopContext } from "../../../context/ShopContext";

function CartContainer({ data }) {
  const { cartItems, setFinalTotal } = useContext(ShopContext);
  /* findProductById sert à faire correspondre l'id du produit du panier (cartItems) 
  à l'id d'un produit de notre API (data), afin qu'on puisse récupérer les informations (img, prix etc. ) 
  
   - productId est l'identifiant du produit de cartItem 
   - la variable foundProduct sert à stocker le produit trouvé (on l'initialise à null pour qu'elle ne retourne rien 
   s'il n'y a pas de produit dans le panier / pas de produit correspondant dans l'API)

Sur data : 
   -  on utilise la méthode some (qui permet de vérifier si au moins un élément de data passe le test de la fonction) 
    - on utilise ensuite la méthode find pour trouver si l'id stocké dans cartItems (productId) correspond à un id de data (product.id) 
    On fait cette recherche dans chaque catégorie, comme notre API est sous le modèle 
    [ {cat1 : {produit 1}, {produit 2} ... , {cat2 :{produit 3}, {produit 4} ... }]). 
    - si un produit correspond, on lui dit de retourner le produit. 
     */
  const findProductById = (productId) =>
    data
      .flatMap((category) => category.products)
      .find((product) => product.id === productId);

  /* getTotalCartAmount sert à obtenir le total du prix des produits dans le panier. 
    - totalAmount : stocke le prix total du panier 
    - la méthode object.keys : permet de retourner un tableau contenant les clés de l'objet sur lequel il est appelé. 
    Il est ici appelé sur cartItems. Pour prendre un exemple pour comprendre la structure de cartItems, si on met dans le panier 
    deux fois la 37e chaussette et une fois la 56e, cartItems ressemblera à {37: 2, 56:1}
      Les clés ici sont 37 et 56 et object.keys retourne [37, 56]
    - on initie ensuite une boucle forEach qui itère sur ce tableau, qui contient donc les id des produits dans le panier. 
    itemId représente chacune de ces clés (donc ici nos itemId sont 37 et 56)
    - on appelle ensuite la fonction findProductById  pour trouver le produit correspondant à l'itemId dans le panier.
     La fonction Number est utilisée pour convertir l'itemId en un nombre entier au cas où il serait stocké sous forme de chaîne de caractères (comme parsInt)
     On stocke le résultat dans la constante product.  Dans notre exemple, il va aller chercher dans l'API le produit 37 et 56. 
     A ce stade, on a les informations provenant de l'API de chacun de nos produits dans le panier (ex : prix, image ...)

     - On initie ensuite une condition : si un produit a été trouvé et que la quantité de celui-ci est supérieure à zéro,
     on ajoute au total la quantité multipliée par le prix (récupéré de l'API, noté product.price)
     On a la quantité parce que cartItems.itemId va donner la "valeur" de itemId. Par exemple cartItems.37 est égal à 2. 

     - la dernière condition sert à afficher un message : si le total est égal à 0, un message "votre panier est vide" s'affiche. 
     Sinon, on affiche le Total arrondi à 2 chiffres derrière la virgule grace à .toFixed(2)

     */
  let totalAmount = 0;

  const getTotalCartAmount = () => {
    Object.keys(cartItems).forEach((itemId) => {
      const product = findProductById(Number(itemId));
      if (cartItems[itemId].quantity > 0) {
        totalAmount += cartItems[itemId].quantity * product.price;
      }
    });
    if (totalAmount > 0) {
      totalAmount = `Total : ${totalAmount.toFixed(2)} €`;
      setFinalTotal(totalAmount);
    } else {
      totalAmount = "Votre panier est vide !";
    }
    return totalAmount;
  };

  return (
    <>
      <h2 className="titleRubrique">Panier</h2>
      <section className="sectionCart">
        {/* On va mettre une condition pour afficher les cartes : 
      - la méthode object.entries() retourne un tableau contenant les paires clé-valeur d'un objet sous forme de tableau. 
      Par exemple si on fait un object.entries sur const obj = { a: 1, b: 2, c: 3 };, cela va renvoyer [ ["a", 1], ["b", 2], ["c", 3] ] 
      Ici on le fait sur cartItems. Si on reprend l'exemple plus haut, on a donc [[37,2], [56,1]] qui est retourné. 
      - on fait une map sur ce tableau, qui prend comme valeur nos deux éléments du tableau (l'id du produit et la quantité). 
      On va executer une fonction sur chacun de ses éléments 
      - on réutilise ici le const product qui a été déclaré localement plutot dans la fonction getTotalAmount 
      - si product est présent et la quantité est supérieur à 0 alors on affiche une card du produit dans le panier */
        /* product.size.filter((sizeProduct) => sizeProduct.size.includes(chooseSize)) */}

        <div className="totalCart">
          {" "}
          <span className="totalAmount">{getTotalCartAmount()}</span>
          <div className="buttonsContainerCart">
            {totalAmount !== "Votre panier est vide !" ? (
              <Link to="/livraison" className="link-primary-button">
                <p>Passer à la livraison</p>
              </Link>
            ) : (
              <span />
            )}

            <Link to="/categories/3" className="link-primary-button">
              <p>Continuer mes achats</p>
            </Link>
          </div>
        </div>
        {totalAmount !== "Votre panier est vide !" && (
          <div className="cardsContainerCart">
            {Object.entries(cartItems).map(([productId, item]) => {
              const product = findProductById(Number(productId));
              if (product && item.quantity > 0) {
                return (
                  <CartCard
                    key={productId}
                    product={product}
                    quantity={item.quantity}
                    size={item.size}
                  />
                );
              }
              return null;
            })}
          </div>
        )}
      </section>
    </>
  );
}

export default CartContainer;

CartContainer.propTypes = {
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

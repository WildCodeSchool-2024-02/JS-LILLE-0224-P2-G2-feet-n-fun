import "./favoris.css"
import { useLoaderData } from "react-router-dom";
import FavorisCard from "./FavorisCard"

function CartContainer () {
/* A ajouter : 
- fonction pour quand on clique sur une image ça affiche la fiche produit
- fonction pour quitter et revenir à la page précédente 
- fonction supprimer et ajouter au panier
⚠️ J'utilise un tableau ici pour tester le design, il faudra enelever avant de push sur dev, il faudra faire appel à l'API */ 
const data = useLoaderData();
  
    return (<>
    <button type="button" className="buttonCloseDeliveryPayment">
        <img src="./public/assets/images/icons/exit-btn-red.svg" alt="croix"/>
      </button>
        <h2>Favoris</h2>
        <div className="cardsContainerFav">
        {data[0].products.map((chaussette) => (<FavorisCard key={chaussette.id} name = {chaussette.name} src={chaussette.src} price={chaussette.price}/>))}
        
 </div>
        </>
    )

}


export default CartContainer
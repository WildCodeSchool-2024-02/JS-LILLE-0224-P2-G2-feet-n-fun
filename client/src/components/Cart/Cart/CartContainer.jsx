import "./Cart.css"
import { useLoaderData } from "react-router-dom";
import CartCard from "./CartCard"

function CartContainer () {
/* A ajouter : 
- fonction pour calculer le total des prix des produits
- fonction boutton on Click pour passer faire la page livraison 
- fonction pour quitter et revenir à la page précédente 

⚠️ J'utilise un tableau ici pour tester le design, il faudra enelever avant de push sur dev, il faudra faire appel à l'API */ 
  const data = useLoaderData();

    return (<>
    
        <h2 className="titleRubrique">Panier</h2>
        <div className="cartSection">
        <div className="cardsContainerCart">
        {data[3].products.map((chaussette) => (<CartCard key={chaussette.id} name = {chaussette.name} src={chaussette.src} price={chaussette.price}/>))}
        

 </div>
 <div className="totalCart">Total : 1111123 €
 <div className="buttonsContainerCart">
 <button type="button" className="cartValidationButton">Passer à la livraison</button>
 <button type="button" className="cartKeepShoppingButton">Continuer mes achats</button>
</div>
</div></div>
        </>
    )

}


export default CartContainer
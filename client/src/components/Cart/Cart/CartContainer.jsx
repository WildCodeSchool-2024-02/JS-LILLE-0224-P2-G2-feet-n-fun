import "./Cart.css"
import { useLoaderData } from "react-router-dom";
import CartCard from "./CartCard"

function CartContainer () {

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
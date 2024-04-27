import "./InformationBar.css";
import { useContext } from "react";
import { ShopContext } from "../../../context/ShopContext";
import Popup from "../../Other/Popup/Popup";

function InformationBar() {
  const { showAlertCart, showAlertFav } = useContext(ShopContext);

  return (
    <>
      <div className="information-bar">
        <p className="marquee one">Livraison offerte à partir de 25€ d'achat</p>
        <p className="marquee two">
          20% de reduction avec le code promo WCS2024
        </p>
      </div>
      {showAlertCart && (
        <Popup content="Votre article a bien été ajouter au panier !" />
      )}
      {showAlertFav&& (
        <Popup content="Votre article a bien été ajouter aux favoris !" />
      )}
    </>
  );
}

export default InformationBar;

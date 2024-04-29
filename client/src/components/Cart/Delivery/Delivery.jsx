/* props : totalPrice */
import { useState, useContext } from "react";
import "./deliverypayment.css";
import Payment from "./Payment";
import { ShopContext } from "../../../context/ShopContext";

function Delivery() {
  const { finalTotal } = useContext(ShopContext);

  /* display payment form once form is completed */
  const [showPayment, setShowPayment] = useState(false);
  const displayPayment = (event) => {
    event.preventDefault();
    setShowPayment(true);
  };
  /* change client name on final message  */
  const [clientName, setClientName] = useState("");
  const changeClientName = (event) => {
    setClientName(event.target.value);
  };
  /* same thing for the name */
  const [clienSurname, setClientSurname] = useState("");
  const changeClientSurname = (event) => {
    setClientSurname(event.target.value);
  };

  /* same thing for the mail */
  const [clientMail, setClientMail] = useState("");
  const changeClientMail = (event) => {
    setClientMail(event.target.value);
  };

  return (
    <>
      <h2 className="titleRubrique">Livraison</h2>
      <p className="deliveryDate">Délais de livraison : 3 à 5 jours ouvrés</p>
      <section className="deliverySection">
        <form className="deliveryForm">
          <h3 className="affichageTotal">
            {finalTotal !== "Votre panier est vide !" && finalTotal}
          </h3>

          <div className="deliveryFormContainer">
            <div className="contactContainer">
              <h3 className="contactTitle">Contact</h3>
              <label>
                Prénom
                <div>
                  <input
                    className="inputDelivery"
                    type="text"
                    name="name"
                    onChange={changeClientName}
                    required
                  />
                </div>
              </label>
              <label>
                Nom
                <div>
                  <input
                    className="inputDelivery"
                    type="text"
                    name="surname"
                    onChange={changeClientSurname}
                    required
                  />
                </div>
              </label>
              <label>
                Adresse e-mail
                <div>
                  <input
                    className="inputDelivery"
                    type="email"
                    name="email"
                    onChange={changeClientMail}
                    required
                  />
                </div>
              </label>
              <label>
                Numéro de téléphone
                <div>
                  <input
                    className="inputDelivery"
                    type="tel"
                    name="phone"
                    required
                  />
                </div>
              </label>
              <br />
            </div>
            <div className="adressContainer">
              <h3 className="contactTitle">Adresse de livraison</h3>
              <label>
                N°
                <div>
                  <input
                    className="numberInput"
                    type="number"
                    name="numberRoad"
                    required
                  />
                </div>
              </label>
              <label>
                Voie
                <div>
                  <input
                    className="inputDelivery"
                    type="text"
                    name="street"
                    required
                  />
                </div>
              </label>
              <label>
                Code Postal
                <div>
                  <input
                    className="inputDelivery"
                    type="number"
                    name="postalcode"
                    required
                  />
                </div>
              </label>
              <label>
                Ville
                <div>
                  <input
                    className="inputDelivery"
                    type="text"
                    name="postalcode"
                    required
                  />
                </div>
              </label>
              <label>
                Pays
                <div>
                  <input
                    className="inputDelivery"
                    type="text"
                    name="postalcode"
                    required
                  />
                </div>
              </label>
            </div>
          </div>
          <button
            onClick={displayPayment}
            className="primary-button"
            type="submit"
          >
            Passer au paiement
          </button>
        </form>
      </section>
      {showPayment && (
        <Payment
          clientName={clientName}
          clientSurname={clienSurname}
          clientMail={clientMail}
        />
      )}
    </>
  );
}

export default Delivery;

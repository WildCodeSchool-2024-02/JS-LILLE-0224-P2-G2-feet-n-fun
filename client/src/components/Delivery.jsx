/* props : totalPrice */
import { useState } from "react";
import "./deliverypayment.css";
import Payment from "./Payment";

function Delivery() {
  /* afficher la page paiement une fois le formulaire rempli */
  const [showPayment, setShowPayment] = useState(false);
  const displayPayment = (event) => {
    event.preventDefault();
    setShowPayment(true);
  };

  /* changer le prénom du client pour le message de fin */
  const [clientName, setClientName] = useState("");
  const changeClientName = (event) => {
    setClientName(event.target.value);
  };
  /* idem pour le nom */
  const [clienSurname, setClientSurname] = useState("");
  const changeClientSurname = (event) => {
    setClientSurname(event.target.value);
  };

  /* idem pour le mail */
  const [clientMail, setClientMail] = useState("");
  const changeClientMail = (event) => {
    setClientMail(event.target.value);
  };

  return (
    <>
      <button type="button" className="buttonCloseDeliveryPayment">
        <img src="./public/assets/images/icons/exit-btn-red.svg" alt="croix" />
      </button>
      <h2>Livraison</h2>
      <p className="deliveryDate">Délais de livraison : 3 à 5 jours ouvrés</p>
      <section className="deliverySection">
        <form className="deliveryForm">
          <h3>TOTAL : €</h3>
          <div className="deliveryFormContainer">
            <div>
              <h3>Contact</h3>
              <label>
                Prénom
                <div>
                  <input
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
                  <input type="tel" name="phone" required />
                </div>
              </label>
              <br />
            </div>
            <div>
              <h3>Adresse de livraison</h3>
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
                  <input type="text" name="street" required />
                </div>
              </label>
              <label>
                Code Postal
                <div>
                  <input type="number" name="postalcode" required />
                </div>
              </label>
              <label>
                Ville
                <div>
                  <input type="text" name="postalcode" required />
                </div>
              </label>
              <label>
                Pays
                <div>
                  <input type="text" name="postalcode" required />
                </div>
              </label>
            </div>
          </div>
          <button
            onClick={displayPayment}
            className="deliveryButton"
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

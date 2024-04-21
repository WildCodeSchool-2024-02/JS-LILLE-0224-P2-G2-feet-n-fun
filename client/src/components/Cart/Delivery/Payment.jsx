import { useState } from "react";
import "./deliverypayment.css";
import PropTypes from "prop-types";
import Payment2 from "./Payment2";

/* props to add : totalPrice, 
*/

function Payment({ clientName, clientSurname, clientMail }) {
  const [showFakeCards, setShowFakeCards] = useState(false);
  const displayPaymentCard = () => {
    setShowFakeCards(!showFakeCards);
  };

  return (
    <>
    
      <h2 className="titleRubrique">Paiement</h2>
      <section className="paymentSection">
        <div className="paymentForm">
          <h3 className="choixpaiement">Choisissez une méthode de paiement</h3>
          <div className="creditCards">
            <button
              className="buttonFakeCards"
              onClick={displayPaymentCard}
              type="button"
            >
              <img
                className="fakeCardsImg"
                src="./public/assets/images/fakecards/fakecard1.svg"
                alt="CB 1"
              />
            </button>
            <button
              className="buttonFakeCards"
              onClick={displayPaymentCard}
              type="button"
            >
              <img
                className="fakeCardsImg"
                src="./public/assets/images/fakecards/fakecard2.svg"
                alt="CB 2"
              />
            </button>
            <button
              className="buttonFakeCards"
              onClick={displayPaymentCard}
              type="button"
            >
              <img
                className="fakeCardsImg"
                src="./public/assets/images/fakecards/fakecard3.svg"
                alt="CB 3"
              />
            </button>
            <button
              className="buttonFakeCards"
              onClick={displayPaymentCard}
              type="button"
            >
              <img
                className="fakeCardsImg"
                src="./public/assets/images/fakecards/fakecard4.svg"
                alt="CB 4"
              />
            </button>
          </div>
        </div>

        {showFakeCards && (
          <Payment2
            clientName={clientName}
            clientSurname={clientSurname}
            clientMail={clientMail}
          />
        )}
      </section>
    </>
  );
}

Payment.propTypes = {
  clientName: PropTypes.string.isRequired,
  clientSurname: PropTypes.string.isRequired,
  clientMail: PropTypes.string.isRequired,
};

export default Payment;

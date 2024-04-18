import { useState } from "react";
import PropTypes from "prop-types";
import ConfirmationPayment from "./ConfirmationPayment";
import "./deliverypayment.css";

/* props to add : totalPrice */

function Payment2({ clientName, clientSurname, clientMail }) {
  const [showConfirmationMessage, setConfirmationMessage] = useState(false);
  const displayConfirmationMessage = (event) => {
    event.preventDefault();
    setConfirmationMessage(!showConfirmationMessage);
  };

  return (
    <>
      <h3>TOTAL : €</h3>
      <form className="paymentForm">
        <label>
          Numéro de Carte{" "}
          <div>
            <input type="tel" name="cardnumber" />
          </div>
        </label>
        <label>
          <div className="containerInputNumber">
            CVC
            <input
              className="numberInput"
              name="CVC"
              type="tel"
              pattern="\d{3,4}"
            />
            Date de validité
            <input
              className="numberInput"
              type="tel"
              name="dateValidity"
              pattern="\d\d/\d\d"
              placeholder="MM/YY"
            />{" "}
          </div>
        </label>
      </form>
      <button
        className="paymentButton"
        type="submit"
        onClick={displayConfirmationMessage}
      >
        Régler
      </button>

      {showConfirmationMessage && (
        <ConfirmationPayment
          clientName={clientName}
          clientSurname={clientSurname}
          clientMail={clientMail}
        />
      )}
    </>
  );
}

Payment2.propTypes = {
  clientName: PropTypes.string.isRequired,
  clientSurname: PropTypes.string.isRequired,
  clientMail: PropTypes.string.isRequired,
};

export default Payment2;

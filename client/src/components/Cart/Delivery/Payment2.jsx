import { useState, useContext } from "react";
import PropTypes from "prop-types";
import { ShopContext } from "../../../context/ShopContext";
import ConfirmationPayment from "./ConfirmationPayment";
import "./deliverypayment.css";

function Payment2({ clientName, clientSurname, clientMail }) {
  const [showConfirmationMessage, setConfirmationMessage] = useState(false);
  const displayConfirmationMessage = (event) => {
    event.preventDefault();
    setConfirmationMessage(!showConfirmationMessage);
  };
  const { finalTotal } = useContext(ShopContext);

  return (
    <>
      <h3 className="totalAffichage">{finalTotal}</h3>
      <form className="paymentForm">
        <label>
          Numéro de Carte{" "}
          <div>
            <input className="inputDelivery" type="number" name="cardnumber" />
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
        className="primary-button"
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

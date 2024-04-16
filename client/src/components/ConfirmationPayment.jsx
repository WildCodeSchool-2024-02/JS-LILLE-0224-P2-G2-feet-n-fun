import PropTypes from "prop-types";
import "./deliverypayment.css";

function ConfirmationPayment({ clientName, clientSurname, clientMail }) {
  return (
    <p className="confirmationMessagePayment">
      Merci pour votre commande
      <div className="infosClient">
        {clientName} {clientSurname} !
      </div>
      Un e-mail de confirmation vous a été envoyé à
      <div className="infosClient">{clientMail}</div>
    </p>
  );
}

ConfirmationPayment.propTypes = {
  clientName: PropTypes.string.isRequired,
  clientSurname: PropTypes.string.isRequired,
  clientMail: PropTypes.string.isRequired,
};

export default ConfirmationPayment;

/* eslint-disable jsx-a11y/label-has-associated-control */
import "./deliverypayment.css"
import { useState } from "react"
import PropTypes from "prop-types";
import ConfirmationPayment from "./ConfirmationPayment"

/* props : totalPrice */

function Payment2 ({clientName, clientSurname, clientMail}) {

const [showConfirmationMessage, setConfirmationMessage] = useState(false)
const displayConfirmationMessage = (event) => {event.preventDefault () ; 
    setConfirmationMessage (!showConfirmationMessage)}

    return(<>
    <h3>TOTAL : €</h3>
        <form className="paymentForm">
          

          <label>
            Numéro de Carte{" "}
            <div>
              <input type="number" name="cardnumber" />
            </div>
          </label>
          <label>
          
            <div className="containerInputNumber">
            CVC<input className ="numberInput" type="number" name="CVC" />
            Date de validité
            <input className = "numberInput" type='date' name="dateValid" /></div>
          </label>
        
          
        </form>
        <input
            className="paymentButton"
            type="submit"
            value="Régler"
            onClick={displayConfirmationMessage}
          />
        {showConfirmationMessage && <ConfirmationPayment clientName={clientName} clientSurname={clientSurname} clientMail={clientMail}/>}
        </>
        
    )
}

Payment2.propTypes = {
    clientName: PropTypes.string.isRequired,
    clientSurname: PropTypes.string.isRequired,
    clientMail: PropTypes.string.isRequired,
  };

export default Payment2
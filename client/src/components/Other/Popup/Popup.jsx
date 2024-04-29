import './Popup.css'
import PropTypes from "prop-types";
import { useContext } from 'react';
import { ShopContext } from '../../../context/ShopContext';

// Pour utiliser le popup, initialiser un state à false, mettre dans la fonction d'ajout au panier un changement du state à false
// en début de fonction et un passage à true en fin de fonction. 
function Popup ({ content }) {

    const { showAlertFav } = useContext(ShopContext) 

    return (
        <div className="notification" id={showAlertFav && "fav"}>
            <div className="notification__body">
                <img
                    src="/public/assets/images/icons/check-circle.svg"
                    alt="Success"
                    className="notification__icon"
                />
                {content} &#128640; 
            </div>
            <div className="notification__progress" id={showAlertFav ? "fav" : ""} />
        </div>
    )
}

Popup.propTypes = {
    content: PropTypes.string.isRequired,
};

export default Popup;
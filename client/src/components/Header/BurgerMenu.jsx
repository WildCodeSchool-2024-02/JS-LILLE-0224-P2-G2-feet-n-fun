import "./BurgerMenu.css";
import { useState } from "react";
import PropTypes from "prop-types";
import SearchBar from "./SearchBar";

function BurgerMenu({ setVisible, visible }) {
  const [isTheFirstOpening, setisTheFirstOpening] = useState(false);

  // si mon menu burger à déjà été ouvert par le user et que le menu burger est fermé je lui passe la class close, sinon je ne lui passe rien
  // ca évite le comportement du menu burger qui se ferme seul au premier render de page.
  // une fois que le menu a été ouvert une première fois, la class close dépend juste de l'état "visible" du menu burger
  const isClose = (isTheFirstOpening && !visible) ? "close" : "";
  const isOpen = visible ? "open" : "";

  const handleToggle = () => {
    setVisible(!visible);
    setisTheFirstOpening(true);
  };

  return (
    <div
      className={`burgerMenu ${isClose} ${isOpen}`}
    >
      <div className="burgerMenu-container">
        <button type="button" className="exit-btn" onClick={handleToggle}>
          <img
            src="../assets/images/icons/exit-btn-white.svg"
            alt="Bouton de sortie du Burger Menu"
          />
        </button>
        <SearchBar />
        <nav>
          <p>Nos catégories</p>
          <a href="http://google.fr/">Art</a>
          <a href="http://google.fr/">Sport</a>
          <a href="http://google.fr/">Geek</a>
          <a href="http://google.fr/">Animé</a>
          <a href="http://google.fr/">Festif</a>
        </nav>
        <nav>
          <p>Navigation</p>
          <a href="http://google.fr/">Accueil</a>
          <a href="http://google.fr/">A propos</a>
          <a href="http://google.fr/">Contact</a>
        </nav>
      </div>
    </div>
  );
}

BurgerMenu.propTypes = {
  visible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired,
};
export default BurgerMenu;

import "./BurgerMenu.css";
import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

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
          <Link to="/categories/4" onClick={handleToggle} onKeyDown={handleToggle}>Art</Link>
          <Link to="/categories/1" onClick={handleToggle} onKeyDown={handleToggle}>Sport</Link>
          <Link to="/categories/2" onClick={handleToggle} onKeyDown={handleToggle}>Geek</Link>
          <Link to="/categories/3" onClick={handleToggle} onKeyDown={handleToggle}>Animé</Link>
          <Link to="/categories/5" onClick={handleToggle} onKeyDown={handleToggle}>Festif</Link>
        </nav>
        <nav>
          <p>Navigation</p>
          <Link to="/" onClick={handleToggle} onKeyDown={handleToggle}>Accueil</Link>
          <Link to="/a-propos" onClick={handleToggle} onKeyDown={handleToggle}>A propos</Link>
          <Link to="/contact" onClick={handleToggle} onKeyDown={handleToggle}>Contact</Link>
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

import PropTypes from "prop-types";
import SearchBar from "./SearchBar";
import "./BurgerMenu.css";

function BurgerMenu({ handleToggle, visible }) {
  return (
    <div className="burgerMenu" id={!visible ? "close" : ""}>
      <div className="burgerMenu-container">
        <button type="button" className="exit-btn" onClick={handleToggle} onKeyDown={handleToggle} >
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
  handleToggle: PropTypes.func.isRequired,
};
export default BurgerMenu;

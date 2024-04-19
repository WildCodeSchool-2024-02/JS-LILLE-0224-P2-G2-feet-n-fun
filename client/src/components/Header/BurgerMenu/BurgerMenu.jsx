import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import "./BurgerMenu.css";

function BurgerMenu({ handleToggle, visible }) {
  return (
    <div className="burgerMenu" id={!visible ? "close" : ""}>
      <div className="burgerMenu-container">
        <button
          type="button"
          className="exit-btn"
          onClick={handleToggle}
          onKeyDown={handleToggle}
        >
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
  handleToggle: PropTypes.func.isRequired,
};
export default BurgerMenu;

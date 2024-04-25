import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import BurgerMenu from '../BurgerMenu/BurgerMenu'

function Navbar() {
  const [visible, setVisible] = useState(false);
  const handleToggle = () => {
    setVisible(!visible);
  };

  return ( 
    <nav className="navbar">
      <button
        type="button"
        label="true"
        onClick={handleToggle}
        className="bouton_menu_burger"
      >
        <img
          src="/assets/images/icons/burger-menu.svg"
          alt="picture_not_found"
        />
      </button>
      <BurgerMenu setVisible={setVisible} visible={visible}  />
      <img
        src="/assets/images/logo.svg"
        className="image_logo"
        alt="picture_not_found"
      />
      <div className="h1andButtonsContainer">
     <h1 className="h1FeetAndFun">
        Feet <span className="and">&</span> fun
      </h1>
      <div>
      <button type="button" className="buttonsNavBar searchInNav"><img className="buttonsNavBar" src="../public/assets/images/icons/search.svg" alt="recherche"/></button>
      <Link to="/favoris"><img className="buttonsNavBar" src="../public/assets/images/icons/heart4.svg" alt="favoris"/></Link>
      <Link to="/panier"><img className="buttonsNavBar" src="../public/assets/images/icons/cart4.svg" alt="panier"/></Link>
      </div>
      </div>
    </nav>
  );
}
export default Navbar;
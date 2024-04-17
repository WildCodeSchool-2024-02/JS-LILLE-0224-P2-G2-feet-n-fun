import "./Navbar.css";
import { useState } from "react";
import BurgerMenu from './BurgerMenu'
import ButtonsList from "../Cart/ButtonsList";
import CartContainer from "../Cart/CartContainer"

function Navbar() {
  const [visible, setVisible] = useState(false);
  const handleToggle = () => {
    setVisible(!visible);
  };

  const [showCart, setShowCart] = useState (false)
  const displayCart =
  (event) => {event.preventDefault();
  setShowCart(!showCart)}

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
      {visible && <BurgerMenu handleToggle={handleToggle} visible={visible} />}
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
      <button className="buttonsNavBar searchInNav" onClick={displayCart}><ButtonsList buttonIndex={5}/></button>
      <button className="buttonsNavBar" onClick={displayCart}><ButtonsList buttonIndex={1}/></button> 
      <button className="buttonsNavBar" onClick={displayCart}><ButtonsList buttonIndex={0}/></button></div>
 
      {showCart && <CartContainer/>}</div>
    </nav>
  );
}
export default Navbar;

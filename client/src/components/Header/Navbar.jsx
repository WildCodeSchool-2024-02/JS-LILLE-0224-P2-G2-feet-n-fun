import "./Navbar.css";
import { useState } from "react";
import BurgerMenu from './BurgerMenu'

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
      {/* {visible ? <BurgerMenu handleToggle={handleToggle} visible={visible} /> : <BurgerMenu handleToggle={handleToggle} visible={visible} />} */}
      <h1 className="h1FeetAndFun">
        Feet <span className="and">&</span> fun
      </h1>
      <img
        src="/assets/images/logo.svg"
        className="image_logo"
        alt="picture_not_found"
      />
    </nav>
  );
}
export default Navbar;

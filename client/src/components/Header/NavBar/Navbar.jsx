import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import SearchBar from "../SearchBar/SearchBar";

function Navbar() {
  const [visible, setVisible] = useState(false);
  const handleToggle = () => {
    setVisible(!visible);
  };

  return (
    <nav className="navigation">
      <div className="navbar">
        <button
          type="button"
          label="true"
          onClick={handleToggle}
          className="bouton_menu_burger"
        >
          <img
            className="imagetraitsburger"
            src="/assets/images/icons/burger-menu.svg"
            alt="picture_not_found"
          />
        </button>
        <BurgerMenu setVisible={setVisible} visible={visible} />

        <div className="h1andButtonsContainer">
          <div className="groupeBoutonsNav">
            <div className="searchInNav">
              <SearchBar/>
            </div>

            <Link to="/categories/4">
              <img
                className="buttonsNavBar shopNavBar "
                src="../public/assets/images/icons/shopicon.svg"
                alt="recherche"
              />
            </Link>

            <Link to="/favoris">
              <img
                className="buttonsNavBar"
                src="../public/assets/images/icons/heart4.svg"
                alt="favoris"
              />
            </Link>
            <Link to="/panier">
              <img
                className="buttonsNavBar cartButtons"
                src="../public/assets/images/icons/cart4.svg"
                alt="panier"
              />{" "}
            </Link>
          </div>
          <div className="itemsCountContainer">0</div>
        </div>
      </div>
      <div>
        <Link to="/">
          <h1 className="h1FeetAndFun">
            feet <span className="and">&</span> fun
          </h1>
        </Link>
        <p className="online-shop">ONLINE SHOP</p>
      </div>

      {/* <img
        src="/assets/images/logo.svg"
        className="image_logo"
        alt="picture_not_found"
      /> */}
    </nav>
  );
}
export default Navbar;

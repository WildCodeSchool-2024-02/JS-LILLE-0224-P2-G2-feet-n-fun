import "./SizeListMobile.css";
import PropTypes from "prop-types";
import { useState, useContext } from "react";
import { ShopContext } from "../../../../../context/ShopContext";


function SizeListMobile({ data }) {
  // State qui stock l'état Ouvert/Fermé de la liste des tailles
  const [isOpen, setIsOpen] = useState(false);
  const [isTheFirstOpening, setisTheFirstOpening] = useState(true);
  
  const {chooseSize, setChooseSize} = useContext(ShopContext)

  // Fonction qui change l'état de isOpen true/false (Ouvre/Ferme la liste des tailles)
  const handleClick = () => {
    setIsOpen(!isOpen);
    setisTheFirstOpening(true);
  };

  // Function qui assigne la taille sélectionner au state chooseSize (dans le composant CardContainer) pour transmettre la taille lors de l'ajout au panier.
  const changeSize = (selectedIndex) => {
    setChooseSize(data.size[selectedIndex].size);
  };


  const listIsClose = (isTheFirstOpening && !isOpen) ? "size-list close-list" : "";
  const listIsOpen = isOpen ? "size-list open-list" : "";

  return (
    <div className="sizelist">
      <button
        type="button"
        className={isOpen ? "choose-size open" : "choose-size"}
        onClick={handleClick}
      >
        {chooseSize}{" "}
        <img src="../assets/images/icons/arrow-bottom.png" alt="" />
      </button>
        <div
          className={` ${listIsClose} ${listIsOpen}`}
        >
          {data.size.map((size, index) => (
            <div key={size.size}>
              <hr />
              <button
                type="button"
                className={
                  size.available ? "size-select available" : "size-select"
                }
                disabled={!size.available}
                onClick={() => changeSize(index)}
              >
                <span className="size">{size.size}</span>
                {size.available ? (
                  <span className="available-true">disponible</span>
                ) : (
                  <span className="available-false">indisponible</span>
                )}
              </button>
            </div>
          ))}
        </div> 
    </div>
  );
}

SizeListMobile.propTypes = {
  data: PropTypes.shape({
    size: PropTypes.arrayOf(PropTypes.shape({
      size: PropTypes.string.isRequired,
      available: PropTypes.bool.isRequired
    })).isRequired,
  }).isRequired,
};
export default SizeListMobile;

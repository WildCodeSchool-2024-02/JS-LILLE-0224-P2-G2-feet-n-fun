import "./SizeListDekstop.css";
import PropTypes from "prop-types";
import { useContext } from "react";
import { ShopContext } from "../../../../../context/ShopContext";

function SizeListDekstop({ data }) {

  const {chooseSize, setChooseSize} = useContext(ShopContext)

  const changeSize = (selectedIndex) => {
    setChooseSize(data.size[selectedIndex].size);
  };

  return (
    <div className="sizelist-desktop">
      Sélectionnez votre taille :
      {data.size.map((size, index) => (
        <button
          type="button"
          key={size.size}
          onClick={() => changeSize(index)}
          id={
            (chooseSize === size.size ? "active" : "") ||
            (!size.available ? "disabled" : "")
          }
          disabled={!size.available}
        >
          {size.size}
        </button>
      ))}
    </div>
  );
}

SizeListDekstop.propTypes = {
  data: PropTypes.shape({
    size: PropTypes.arrayOf(
      PropTypes.shape({
        size: PropTypes.string.isRequired,
        available: PropTypes.bool.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default SizeListDekstop;

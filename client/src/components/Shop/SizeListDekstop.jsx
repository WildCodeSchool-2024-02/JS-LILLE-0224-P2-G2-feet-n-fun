import "./SizeListDekstop.css";
import PropTypes from "prop-types";

function SizeListDekstop({ data, chooseSize, changeSize }) {
  return (
    <div className="sizelist-desktop">
      Selectionner votre taille :
      {data.size.map((size, index) => (
        <button
          type="button"
          key={size.size}
          onClick={() => changeSize(index)}
          id={(chooseSize === size.size && "active") || (!size.available && "disabled")}
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
    size: PropTypes.arrayOf(PropTypes.shape({
      size: PropTypes.string.isRequired,
      available: PropTypes.bool.isRequired
    })).isRequired,
  }).isRequired,
  chooseSize: PropTypes.string.isRequired,
  changeSize: PropTypes.func.isRequired,
};

export default SizeListDekstop;

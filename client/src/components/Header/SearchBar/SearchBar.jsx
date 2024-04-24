import "./SearchBar.css";
import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function SearchBar({ handleToggle }) { 

  const navigate = useNavigate();
  // Fonction qui prend en paramètre la valeur de la recherche pour transmettre la bonne requête dans l'URL. 
  const handleSearch = (searchValue) => {
    navigate(`/recherche?query=${searchValue}`);
    handleToggle();
  };
  // Stocke la valeur de la recherche.
  const [ inputValue, setInputValue ] = useState()

  // Fonction qui permet de lancer la fonction handleSearch lorsque la touche entrée est pressée.
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch(inputValue)
    }
  };

  return (
      <div className="search-bar">
        <input  type="text" placeholder="Rechercher..." onChange={(e) => setInputValue(e.target.value)} onKeyDown={handleKeyPress} />
        <button type="button" className="btn-search" onClick={() => handleSearch(inputValue)}>
          <img
            src="../assets/images/icons/loupe-black.svg"
            alt="Bouton de recherche"
          />
        </button>
      </div>
  );
}

SearchBar.propTypes = {
 handleToggle: PropTypes.func.isRequired, 
};
export default SearchBar;

import "./SearchBar.css";
import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function SearchBar({ handleToggle }) {

  const navigate = useNavigate();

  const handleSearch = (searchValue) => {
    navigate(`/recherche?query=${searchValue}`);
    handleToggle();
  };

  const [ inputValue, setInputValue ] = useState()

  

  // const searchItem = (value) => {
  //   const searchValue = value.toLowerCase()
  //   let arrayProducts
  //   let arrayCombined = []
  //   // ici j'obtient un tableau contenant les 5 tableaux products de chaque cat
  //   arrayProducts = data.map((category) =>
  //       category.products
  //   )
  //   // ici j'obtient 1 seul tableau contenant tous les items
  //   arrayProducts.forEach((array) =>
  //     arrayCombined = arrayCombined.concat(array)
  //   )
  //   // ici je filtre le tableau pour obtenir les items correspondant
  //   arrayProducts = arrayCombined.filter((item) =>
  //     item.name.toLowerCase().includes(searchValue) ||
  //     item.desc.toLowerCase().includes(searchValue) 
  //   )
  //   arrayProducts.length > 0 ? setResult(arrayProducts) : setResult([])
  // }


  return (
      <div className="search-bar">
        <input  type="text" placeholder="Rechercher..." onChange={(e) => setInputValue(e.target.value)} />
        {/* <button type="button" className="btn-search" onClick={() => searchItem(inputValue)}> */}
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

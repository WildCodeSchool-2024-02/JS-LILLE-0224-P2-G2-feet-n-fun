import './SearchBar.css'

function SearchBar() {
  return (
    <div className="SearchBar">
      <input type="text" placeholder="Rechercher..." />
      <div className="btn-search">
        <img
          src="../assets/images/icons/loupe-black.svg"
          alt="Bouton de recherche"
        />
      </div>
    </div>
  );
}

export default SearchBar;

import './SearchBar.css'

function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Rechercher..." />
      <button type='button' className="btn-search">
        <img
          src="../assets/images/icons/loupe-black.svg"
          alt="Bouton de recherche"
        />
      </button>
    </div>
  );
}

export default SearchBar;

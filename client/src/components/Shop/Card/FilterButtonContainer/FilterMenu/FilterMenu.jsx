import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function FilterMenu({ visible, setVisible, dataCategory }) {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query");

  const navigate = useNavigate();

  // Si l'URL contient all (filtre pour rechercher dans toutes les catégories) l'état est true sinon false.
  const [allCategory, setAllCategory] = useState(false);
  // Stocke la taille sélectionnée pour le filtre
  const [size, setSize] = useState("");
  // Stocke le prix sélectionné pour le filtre (15€ étant le prix max, si "15", pas de filtre de prix selectionné).
  const [price, setPrice] = useState("15");
  // Stocke la couleur ou les couleurs sélectionnée(s) pour le filtre.
  const [color, setColor] = useState([]);
  // Stocke l'état du filtre selon l'URL si elle contient déjà une recherche ou pas.
  const [isNull, setIsNull] = useState(false);
  // Fonction qui prend en paramètre la couleur sélectionnée pour vérifier si elle est déjà contenue dans le state color.
  // Si la couleur est déjà inclue dans le state : -Copie le contenu du tableau color dans la constante array
    // -Retourne l'index dans le tableau de la couleur selectionnée. | -Via l'index la couleur est enlevée du tableau array.
    // -Puis re-assigne array à la place de color.
    // Sinon array copie le contenu de color et ajoute la couleur sélectionnée, puis re-assigne array à la place de color.
  const onChangeColor = (colorSelected) => {
    if (color.includes(colorSelected)) {
      const array = [...color];
      const indexColor = array.indexOf(colorSelected);
      array.splice(indexColor, 1);
      setColor(array);
    } else {
      const array = [colorSelected, ...color];
      setColor(array);
    }
  };
  // Fonction permettant de vérifier les filtres sélectionnés afin de definir la bonne URL de recherche.
  const filter = () => {
    switch(true) {
      case (size !== "" && price !== "15" && color.length > 0):
        return `price*${price}$color=${color},${size}`;
      case (size !== "" && price !== "15"):
        return `price*${price}$${size}`;
      case (size !== "" && color.length > 0):
        return `color=${color},${size}`;
      case (price !== "15" && color.length > 0):
        return `price*${price}$color=${color},`;
      case (price !== "15"):
        return `price*${price}$`;
      case (color.length > 0):
        return `color=${color},`;
      case (size !== ""):
        return `${size}`;
      default:
        return null;
    }
  };

  // Vérifie si c'est la première ouverture du menu.
  const [isTheFirstOpening, setisTheFirstOpening] = useState(true);
  // Les 2 constantes permettent de donner la classe au menu pour son animation d'ouverture, selon l'état de visible et firstOpening.
  const isClose = isTheFirstOpening && !visible ? "filter-menu close" : "";
  const isOpen = visible ? "filter-menu open" : "";
  // Fonction fermant le menu et passant l'état de firstOpening à true.
  const handleToggle = () => {
    setVisible(!visible);
    setisTheFirstOpening(true);
  };
  // Constante qui passe à true si l'URL contient déjà une recherche et si elle contient "all" (recherche toutes catégories).
  const queryContain = query && query.includes("all");
  // Fonction qui s'exécute via le bouton final pour submit la recherche, prend en paramètre la valeur pour l'URL de la recherche,
  // via la fonction filter plus haut et vérifie si la recherche est null ou pas, si la recherche est bonne, navigate permet
  // de donner la bonne URL pour effectuer la bonne requête dans Filter.jsx
  const filterItem = (filterValue) => {
    if(filterValue === null) {
        setIsNull(true)
    } else {
        navigate(
            `/filtre?query=${filterValue}-${queryContain || allCategory ? "all" : dataCategory}`
          );
    }

    if(isNull) {
        handleToggle()
    }
  };

  return (
    <div className={`${isClose} ${isOpen}`}>
        <button type="button" aria-label="exit" label="exit" className="exit-filter-btn" onClick={handleToggle}>
        <img
          src="/public/assets/images/icons/exit-btn-red.svg"
          alt=""
        />
      </button>
      <div className="filter-section">
        <div className="filter-price">
          <p>Filtre par prix</p>
          <hr />
          <div>
            <label htmlFor="price">Prix entre 0€ et {price}€</label>
            <input
              type="range"
              id="price"
              min="0"
              max="15"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>
        <hr className="mobile" />
        <div className="filter-size">
          <p>Filtre par tailles</p>
          <hr />
          <div className="filter">
            <label htmlFor="size-one">35-38</label>
            <input
              type="radio"
              name="size"
              id="size-one"
              value="size-one%"
              onChange={(e) => setSize(e.target.value)}
            /> 
          </div>
          <hr />
          <div className="filter">
            <label htmlFor="size-two">39-42</label>
            <input
              type="radio"
              name="size"
              id="size-two"
              value="size-two%"
              onChange={(e) => setSize(e.target.value)}
            />
          </div>
          <hr />
          <div className="filter">
            <label htmlFor="size-three">43-46</label>
            <input
              type="radio"
              name="size"
              id="size-three"
              value="size-three%"
              onChange={(e) => setSize(e.target.value)}
            />
          </div>
        </div>
        <hr className="mobile" />
        <div className="filter-color">
          <p>Filtre par couleur</p>
          <hr />
          <div className="filter">
            <input
              type="checkbox"
              id="green"
              value="green"
              onChange={(e) => onChangeColor(e.target.value)}
            />
            <input
              type="checkbox"
              id="blue"
              value="blue"
              onChange={(e) => onChangeColor(e.target.value)}
            />
            <input
              type="checkbox"
              id="yellow"
              value="yellow"
              onChange={(e) => onChangeColor(e.target.value)}
            />
            <input
              type="checkbox"
              id="orange"
              value="orange"
              onChange={(e) => onChangeColor(e.target.value)}
            />
            <input
              type="checkbox"
              id="red"
              value="red"
              onChange={(e) => onChangeColor(e.target.value)}
            />
          </div>
          <div className="filter">
            <input
              type="checkbox"
              id="pink"
              value="pink"
              onChange={(e) => onChangeColor(e.target.value)}
            />
            <input
              type="checkbox"
              id="brown"
              value="brown"
              onChange={(e) => onChangeColor(e.target.value)}
            />
            <input
              type="checkbox"
              id="black"
              value="black"
              onChange={(e) => onChangeColor(e.target.value)}
            />
            <input
              type="checkbox"
              id="grey"
              value="grey"
              onChange={(e) => onChangeColor(e.target.value)}
            />
            <input
              type="checkbox"
              id="white"
              value="white"
              onChange={(e) => onChangeColor(e.target.value)}
            />
          </div>
        </div>
        <hr className="mobile" />
        <div className="filter-category">
          <div className="all-category">
            <p>Rechercher dans toutes les catégories ?</p>
            <input
              type="checkbox"
              className="all-category-yes-no"
              checked={queryContain}
              onChange={() => setAllCategory(true)}
            />
          </div>
          <hr className="desktop" />
          <div>
            <button type="button" onClick={() => filterItem(filter())}>
              Voir les résultats
            </button>
          </div>
          {isNull && (
            <p
              style={{
                color: "red",
                position: "relative",
                marginTop: "0.5rem",
              }}
            >
              Au moins un filtre est nécessaire.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

FilterMenu.propTypes = {
  visible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired,
  dataCategory: PropTypes.number.isRequired,
};

export default FilterMenu;

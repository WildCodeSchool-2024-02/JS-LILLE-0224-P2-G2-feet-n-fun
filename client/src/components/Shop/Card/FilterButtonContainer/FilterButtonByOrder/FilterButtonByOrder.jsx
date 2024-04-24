import PropTypes from "prop-types";
import { useNavigate, useLocation } from "react-router-dom";

function FilterButtonByOrder({ dataCategory }) {
  // Récupère l'URL actuelle de la page
  const location = useLocation();
  // Parse les paramètres de recherche de l'URL en utilisant l'API URLSearchParams
  const searchParams = new URLSearchParams(location.search);
  // Récupère la valeur du paramètre "query" de l'URL, s'il existe
  const query = searchParams.get("query");

  // Constante qui passe à true si l'URL contient déjà une recherche et si elle contient "all" (recherche toutes catégories).
  const queryContain = query && query.includes("all");

  const navigate = useNavigate();
  // Fonction qui s'exécute une fois le filtre sélectionné pour la recherche, prend en paramètre la valeur du filtre selectionné
  // et il vérifie si l'URL contient all ou un nombre de catégorie pour savoir s'il doit rendre un rangement sur la catégorie
  // ou bien sur tous les produits. Il redirige ensuite vers la page filter.
  const handleSearch = (searchValue) => {
    navigate(
      `/filtre?query=${searchValue}-${queryContain ? "all" : dataCategory}`
    );
  };

  return (
    <select
      className="filter-button-by-order"
      onChange={(e) => handleSearch(e.target.value)}
    >
      <option value="">Trier par...</option>
      <option value="productsFilterAscending">Prix croissant</option>
      <option value="productsFilterDescending">Prix decroissant</option>
      <option value="productsFilterNew">Nouveauté</option>
    </select>
  );
}

FilterButtonByOrder.propTypes = {
  dataCategory: PropTypes.number.isRequired,
};

export default FilterButtonByOrder;

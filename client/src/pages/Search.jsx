import "./styles/Search.css";
import { useLoaderData, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import CardContainerSearch from "../components/Shop/Card/CardContainerSearch/CardContainerSearch";

function Search() {
  const data = useLoaderData();
  // Stocke le resultat du tableau final de recherche
  const [result, setResult] = useState([]);

  // Récupère l'URL actuelle de la page
  const location = useLocation();
  // Parse les paramètres de recherche de l'URL en utilisant l'API URLSearchParams
  const searchParams = new URLSearchParams(location.search);
  // Récupère la valeur du paramètre "query" de l'URL, s'il existe
  const query = searchParams.get("query");

  // Fonction qui effectue la recherche en fonction de la valeur de l'URL.
  const searchItem = (value) => {
    const searchValue = value.toLowerCase();
    let arrayProducts;
    let arrayCombined = [];
    // ici j'obtiens un tableau contenant les 5 tableaux products de chaque catégorie
    arrayProducts = data.map((category) => category.products);
    // ici j'obtiens 1 seul tableau contenant tous les items
    arrayProducts.forEach((array) => {
      arrayCombined = arrayCombined.concat(array);
    });
    // ici je filtre le tableau pour obtenir les items correspondants
    arrayProducts = arrayCombined.filter(
      (item) =>
        item.name.toLowerCase().includes(searchValue) ||
        item.desc.toLowerCase().includes(searchValue) ||
        item.key[0].toLowerCase().includes(searchValue)
    );
    if (arrayProducts.length > 0) {
      setResult(arrayProducts);
    } else {
      setResult([]);
    }
  };
  // Ici je lance la fonction de recherche dès le chargement de Search.jsx avec en paramètre la valeur de l'URL.
  useEffect(() => {
    searchItem(query);
  }, [query]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="search">
      <CardContainerSearch data={result} />
    </div>
  );
}
export default Search;

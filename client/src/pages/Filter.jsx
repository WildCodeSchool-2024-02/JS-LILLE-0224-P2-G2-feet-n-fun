import "./styles/Search.css";
import { useLoaderData, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import CardContainerFilter from "../components/Shop/Card/CardContainerFilter/CardContainerFilter";

function Filter() {
  const data = useLoaderData();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query");
  // Stock la catégorie de la recherche (contenu à la fin de l'URL)
  const [category, setCategory] = useState(query.charAt(query.length - 1) - 1);
  // Stock le tableau final de la recherche pour afficher le résultat dans CardContainerFilter
  const [filterBy, setFilterBy] = useState([]);

  // Fonction qui mélange les objets d'un tableau
  function mixArray() {
    return Math.random() - 0.5;
  }
  // Fonction qui effectue la recherche le paramètre value correspond à l'URL (Tous ce qui se trouve après query)
  const filterItem = (value) => {
    let array;
    let categorySelected = [];
    const section = query.charAt(query.length - 1) - 1
    // Si la valeur de l'URL contient all, je retourne un tableau contenant tous les produits.
    if (value.includes("all")) {
      let arrayCombined = [];
      // ici j'obtient un tableau contenant les 5 tableaux products de chaque catégorie
      const arrayProducts = data.map((categorySection) => categorySection.products);
      // Ici je boucle sur le tableau contenant tous les tableaux products via forEach, je fusionne le contenu dans arrayCombined
      // Je slice arrayCombined et je stock son résultat pour retourner seulement les produits de chaque tableau products
      // sort prend en paramètre la fonction mixArray pour mélanger les produits et je réassigne les produits à categorySelected
      arrayProducts.forEach((categorySection) => {
        arrayCombined = arrayCombined.concat(categorySection);
        arrayCombined = arrayCombined.slice().sort(mixArray);
        categorySelected = [...arrayCombined];
      });
      // Sinon j'assigne dans categorySelected le tableau products de la catégorie selectionnée pour la recherche
    } else {
      categorySelected = [...data[section].products];
    }

    // Selection par taille
    // Si l'URL contient one/two/three j'assigne dans array le résultat des produits ayant la taille disponible en filtrant categorySelected.
    if (value.includes("size")) {
      if (value.includes("one")) {
        array = categorySelected.filter((product) => product.size[0].available);
      } else if (value.includes("two")) {
        array = categorySelected.filter((product) => product.size[1].available);
      } else if (value.includes("three")) {
        array = categorySelected.filter((product) => product.size[2].available);
      }
    }

    // Selection par prix
    // Si l'URL contient price, je récupère l'index de * et $ pour slice sur l'URL et récupérer le prix selectionné
    let priceIndexStart = "";
    let priceIndexEnd = "";
    let price = "";
    if (value.includes("price")) {
      priceIndexStart = value.indexOf("*");
      priceIndexEnd = value.indexOf("$");
      price = value.slice(priceIndexStart + 1, priceIndexEnd);
          // Si l'URL contient price et size, j'effectue mon filter sur le tableau array étant déjà passer dans le script qui
          // filtre les tailles, sinon je filtre sur CategorySelected qui est le tableau d'origine.
      if (value.includes("size") && value.includes("price")) {
        array = array.filter((product) => product.price < price);
      } else {
        array = categorySelected.filter((product) => product.price < price);
      }
    }

    // Selection par couleur
    // Si l'URL contient 'color' je stock l'index de color= dans l'URL.
    if (value.includes("color")) {
      const colorFilterIndex = value.indexOf("color=");
      // Si le filtre contient prix et couleur, je filtre sur le tableau array étant déjà passer dans le script de filtre de prix.
      // Je stock dans colors toutes les couleurs séparer par une ',' se trouvant à la suite de color= via son index.

      if (value.includes("price") && value.includes("color")) {
  if (colorFilterIndex !== -1) {
    const colorFilter = value.substring(colorFilterIndex + 6); 
    const colors = colorFilter.split(",");
    array = array.filter((product) => colors.some((color) => product.color.includes(color)));
  }

      }

      // Sinon je filtre juste la couleur en filtrant sur le tableau d'origine categorySelected.
      else {
        const colorFilter = value.substring(colorFilterIndex + 6); 
            const colors = colorFilter.split(",");
        array = categorySelected.filter((product) => colors.some((color) => product.color.includes(color)));
      }
    }

    // Selection par odre 'croissant/decroissant/nouveauté'
    // Pour chaque filtre retourne dans array via slice() un tableau rangé selon le filtre selectionné 
    setCategory(section + 1);
    if (value.includes("productsFilterAscending")) {
      array = categorySelected.slice().sort((a, b) => a.price - b.price);
    } else if (value.includes("productsFilterDescending")) {
      array = categorySelected.slice().sort((a, b) => b.price - a.price);
    } else if (value.includes("productsFilterNew")) {
      array = categorySelected.filter((product) => product.new);
    }

    // Si le tableau contient des produits je le retourne, sinon je retourne un tableau vide.
    if (value.length > 0) {
      setFilterBy(array);
    } else {
      setFilterBy([]);
    }
  };
  // Permet de lancer la fonction de recherche avec l'URL dès le chargement de Filter.jsx
  useEffect(() => {
    filterItem(query);
  }, [query]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="search">
      <CardContainerFilter data={filterBy} category={category} />
    </div>
  );
}
export default Filter;

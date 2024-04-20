import './styles/Search.css'
import { useLoaderData, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import CardContainerSearch from "../components/Shop/Card/CardContainerSearch/CardContainerSearch";
import SearchBar from "../components/Header/SearchBar/SearchBar";

function Search() {
    const data = useLoaderData();
    const [ result, setResult ] = useState([])

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get("query");

    const searchItem = (value) => {
        const searchValue = value.toLowerCase()
        let arrayProducts
        let arrayCombined = []
        // ici j'obtient un tableau contenant les 5 tableaux products de chaque cat
        arrayProducts = data.map((category) =>
            category.products
        )
        // ici j'obtient 1 seul tableau contenant tous les items
        arrayProducts.forEach((array) => {
          arrayCombined = arrayCombined.concat(array)
        })
        // ici je filtre le tableau pour obtenir les items correspondant
        arrayProducts = arrayCombined.filter((item) =>
          item.name.toLowerCase().includes(searchValue) ||
          item.desc.toLowerCase().includes(searchValue) ||
          item.key[0].toLowerCase().includes(searchValue)
        )
        if(arrayProducts.length > 0) {
          setResult(arrayProducts)
        } else {
          setResult([])
        }  
    }

    useEffect(
        () =>  {
          searchItem(query)
        }, 
        [query]
    );

  return (
    <div className="search">
        <SearchBar data={data} setResult={setResult} result={result} />
        <CardContainerSearch data={result} />
    </div>
  )
}
export default Search;
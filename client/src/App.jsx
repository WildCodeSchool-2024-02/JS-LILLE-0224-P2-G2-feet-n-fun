import "./App.css";

import axios from "axios";
import { useEffect, useState } from "react";
import CardContainer from "./components/CardContainer";


function App() {

  // Ici le state qui va recevoir la data de l'API
  const [data, setData] = useState(null);

  // Le useEffect fait un appel d'API au démarrage de la page et stock le resultat dans le state "data"
  useEffect(() => {
    axios
      .get("https://fantinerudent.github.io/api-feet-n-fun/data.json")
      .then((response) => {
        setData(response.data);
      });
  }, []);

  // State qui stock l'index de la section, pour générer les cards des produits correspondant
  const [ sectionSelected, setSectionSelected ] = useState(0)

  const changeSection = (indexSectionSelected) => {
    setSectionSelected(indexSectionSelected)
  }

  return (

    <>

      {/* Le 'data &&' permet d'afficher le composant une fois la data récolté */}
      {data && (
        <>
          <h1>Feet & fun</h1>
          <nav>
            {data.map((categorie, index) =>
              <button type="button" key={categorie.id} onClick={() => changeSection(index)} onKeyDown={() => changeSection(index)}>{categorie.name}</button>
            )}
          </nav>
          <CardContainer data={data} sectionSelected={sectionSelected} />
        </>
      )}
    </>

  );
}

export default App;

import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./components/Header/Navbar";
import CategoryBar from "./components/Header/CategoryBar";
import CardContainer from "./components/Shop/CardContainer";
import ShopContextProvider from "./context/shop-context";
import CartContainer from "./components/Cart/CartContainer";
import Delivery from "./components/Cart/Delivery"

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://fantinerudent.github.io/api-feet-n-fun/data.json")
      .then((response) => {
        setData(response.data);
      });
  }, []);

  const [ sectionSelected, setSectionSelected ] = useState(3)

  const changeSection = (indexSectionSelected) => {
    setSectionSelected(indexSectionSelected)
  }
(console.log(`c'est laaaa ${data}`))

  return (
    <div> {data && (
      <ShopContextProvider >
          <Navbar />
          <CategoryBar />
          <nav>
            {data.map((categorie, index) =>
              <button type="button" key={categorie.id} onClick={() => changeSection(index)} onKeyDown={() => changeSection(index)}>{categorie.name}</button>
            )}
          </nav>
          <CardContainer  data={data} sectionSelected={sectionSelected}/>    
          <CartContainer  data={data} sectionSelected={sectionSelected}/>    
        </ShopContextProvider>
      )}
      </div>
    
  );
}

export default App;

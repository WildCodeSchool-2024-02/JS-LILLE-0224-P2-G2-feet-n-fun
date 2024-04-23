import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Header/Navbar";
import CategoryBar from "./components/Header/CategoryBar";
import ShopContextProvider from "./context/ShopContext";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        "https://fantinerudent.github.io/api-feet-n-fun/data.json"
      );
      const jsonData = await result.json();
      setData(jsonData);
    };

    fetchData();
  }, []);

  return (
    <ShopContextProvider>
      <Navbar />
      <CategoryBar />
      <main>{data && <Outlet data={data} />}</main>
    </ShopContextProvider>
  );
}

export default App;

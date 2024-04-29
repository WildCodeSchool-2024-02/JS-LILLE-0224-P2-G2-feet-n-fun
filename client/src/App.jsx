import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Header/NavBar/Navbar";
import Footer from "./components/Footer/Footer"
import InformationBar from "./components/Header/InformationBar/InformationBar";
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

    // eslint-disable-next-line no-console
    console.log(`
    ███████╗███████╗███████╗████████╗       ██╗       ███████╗██╗   ██╗███╗   ██╗
    ██╔════╝██╔════╝██╔════╝╚══██╔══╝       ██║       ██╔════╝██║   ██║████╗  ██║
    █████╗  █████╗  █████╗     ██║       ████████╗    █████╗  ██║   ██║██╔██╗ ██║
    ██╔══╝  ██╔══╝  ██╔══╝     ██║       ██╔═██╔═╝    ██╔══╝  ██║   ██║██║╚██╗██║
    ██║     ███████╗███████╗   ██║       ██████║      ██║     ╚██████╔╝██║ ╚████║
    ╚═╝     ╚══════╝╚══════╝   ╚═╝       ╚═════╝      ╚═╝      ╚═════╝ ╚═╝  ╚═══╝
    
    By Alexandre, Alexis, Emilie, Sébastien & Houari.
    `)

  }, []);

  return (
    <ShopContextProvider>
      <InformationBar />
      <Navbar />
      <main>{data && <Outlet data={data} />}</main>
      <Footer/>
    </ShopContextProvider>
  );
}

export default App;

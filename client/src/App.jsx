import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Header/NavBar/Navbar";
import CategoryBar from "./components/Header/CategoryBar/CategoryBar";
import Footer from "./components/Footer/Footer"
import InformationBar from "./components/Header/InformationBar/InformationBar";

function App () {

  return (<>  
  <InformationBar />
  <Navbar />
  <CategoryBar />
  <main>
  <Outlet />
  </main> 
  <Footer />
  </>
  );
}

export default App;

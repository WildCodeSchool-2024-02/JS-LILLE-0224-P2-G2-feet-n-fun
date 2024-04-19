import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Header/NavBar/Navbar";
import CategoryBar from "./components/Header/CategoryBar/CategoryBar";
import Footer from "./components/Footer/Footer"

function App () {

  return (<>  
  <Navbar />
  <CategoryBar />
  <main>
  <Outlet />
  </main> 
  <Footer />
  </>
  );
}
    
export default App 
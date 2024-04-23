import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Header/NavBar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;

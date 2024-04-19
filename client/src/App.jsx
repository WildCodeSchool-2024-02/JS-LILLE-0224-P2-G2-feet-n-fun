import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Header/Navbar";
import CategoryBar from "./components/Header/CategoryBar";
import ShopContextProvider from "./context/ShopContext";

function App() {
  return (
    <ShopContextProvider>
      <Navbar />
      <CategoryBar />
      <main>
        <Outlet />
      </main>
    </ShopContextProvider>
  );
}

export default App;

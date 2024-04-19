import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Header/Navbar";
import CategoryBar from "./components/Header/CategoryBar";

function App() {
  return (
    <>
      (
      <>
        <Navbar />
        <CategoryBar />
        <main>
          <Outlet />
        </main>
      </>
      )
    </>
  );
}

export default App;

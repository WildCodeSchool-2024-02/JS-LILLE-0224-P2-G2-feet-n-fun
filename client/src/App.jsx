import { useState } from "react";
import "./App.css";
import Buttons from "./components/Buttons"
import FacticePanier from "./components/FacticePanier";

function App() {
  const [showCart, setShowCart] = useState(false);
  const displayCart = () => {
    setShowCart(true);}

  return (<><h1>Feet & fun</h1>

<Buttons buttonIndex={0} onClick={displayCart}/> 

{showCart && <FacticePanier/>}


</>
    
  );
}

export default App;

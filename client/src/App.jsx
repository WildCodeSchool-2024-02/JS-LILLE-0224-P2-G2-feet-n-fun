import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouteLoaderData } from "react-router-dom";


import "./App.css";
import Navbar from "./components/Header/Navbar";
import CategoryBar from "./components/Header/CategoryBar";
import CartContainer from "./components/Cart/CartContainer";

function App () {


  const data = useRouteLoaderData("app");


  return (<> 

  ( 
    <>  
  <Navbar/>
  <CategoryBar />
  
  <main>
  <Outlet />
  <CartContainer/>
  </main> 
  </>

  )  </>
     
  );
}
    
export default App 



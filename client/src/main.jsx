import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

/* import Home from "./pages/Home"; */
import Favoris from "./pages/Favoris";
import Categories from "./pages/Categories";
import Panier from "./pages/Panier";
import App from "./App";
import Home from "./pages/Home";

// Le useEffect fait un appel d'API au démarrage de la page et stock le resultat dans le state "data"

const getData = () => {
  let data;
  axios
    .get("https://fantinerudent.github.io/api-feet-n-fun/data.json")
    .then((response) => {
      data = response.data;
    })
    .then(() => {
    });
};

console.log("data", getData());
const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>{ getData()}
        },

      {
        path: "/categories/:id",
        element: <Categories />,
      },
      { path: "/favoris", element: <Favoris /> },
      { path: "/panier", element: <Panier /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

// loader: ({ params }) => {
//   getData().filter((item) => parseInt(params) === item.id);
// },

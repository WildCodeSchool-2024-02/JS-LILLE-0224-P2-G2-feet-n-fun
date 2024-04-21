import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Favoris from "./pages/Favoris";
import Categories from "./pages/Categories";
import Panier from "./pages/Panier";
import App from "./App";
import Home from "./pages/Home";
import About from "./components/About";
import Contact from "./pages/Contact";
import Deliveries from "./pages/Deliveries";

// Le useEffect fait un appel d'API au démarrage de la page et stock le resultat dans le state "data"

const getData = async () => {
  const result = await fetch(
    "https://fantinerudent.github.io/api-feet-n-fun/data.json"
  );
  const datas = await result.json();
  return datas;
};

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => getData(),
      },

      {
        path: "/categories/:id",
        element: <Categories />,
        loader: async ({ params }) => {
          const datas = await getData();
          return datas[parseInt(params.id, 10) - 1];
        },
      },
      { path: "/favoris", element: <Favoris />, loader: () => getData() },
      { path: "/panier", element: <Panier />, loader: () => getData() },
      { path: "/a-propos", element: <About />, loader: () => getData() },
      { path: "/contact", element: <Contact />, loader: () => getData() },
      { path: "/livraison", element: <Deliveries />, loader: () => getData() },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

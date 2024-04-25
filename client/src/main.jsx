import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Favorites from "./pages/Favorites";
import Categories from "./pages/Categories";
import ShoppingCart from "./pages/ShoppingCart";
import App from "./App";
import Home from "./pages/Home";
import About from "./components/About";
import Contact from "./pages/Contact";
import Deliveries from "./pages/Deliveries";
import Search from "./pages/Search";
import Filter from "./pages/Filter";
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
      { path: "/favoris", element: <Favorites />, loader: () => getData() },
      { path: "/panier", element: <ShoppingCart />, loader: () => getData() },
      { path: "/a-propos", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/livraison", element: <Deliveries /> },
      { path: "/recherche", element: <Search />, loader: () => getData() },
      { path: "/filtre", element: <Filter />, loader: () => getData() },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

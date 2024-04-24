import { useLoaderData } from "react-router-dom";
import FavoritesContainer from "../components/Cart/FavorisContainer";

function Favorites () {
  const data = useLoaderData();
  return <FavoritesContainer data={data} />;
}

export default Favorites

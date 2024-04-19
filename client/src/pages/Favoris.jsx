import { useLoaderData } from "react-router-dom";
import FavorisContainer from "../components/Cart/FavorisContainer";

function Favoris() {
  const data = useLoaderData();
  return <FavorisContainer data={data} />;
}

export default Favoris;

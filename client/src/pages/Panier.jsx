import { useLoaderData } from "react-router-dom";
import CartContainer from "../components/Cart/CartContainer";

function Panier() {
  const data = useLoaderData();

  return data && <CartContainer data={data} />;
}
export default Panier;

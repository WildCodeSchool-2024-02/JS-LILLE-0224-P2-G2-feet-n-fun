import { useLoaderData } from "react-router-dom";
import CartContainer from "../components/Cart/Cart/CartContainer";

function ShoppingCart() {
  const data = useLoaderData();

  return data && <CartContainer data={data} />;
}
export default ShoppingCart;

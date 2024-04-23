import "./favoris.css";
import { useLoaderData } from "react-router-dom";
import FavorisCard from "./FavorisCard";

function CartContainer() {
  const data = useLoaderData();

  return (
    <>
      <h2 className="titleRubrique">Favoris</h2>
      <div className="cardsContainerFav">
        {data[0].products.map((chaussette) => (
          <FavorisCard
            key={chaussette.id}
            name={chaussette.name}
            src={chaussette.src}
            price={chaussette.price}
          />
        ))}
      </div>
    </>
  );
}

export default CartContainer;

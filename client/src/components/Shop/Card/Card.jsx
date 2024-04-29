import "./Card.css";
import PropTypes from "prop-types";
import { useContext } from "react";
import { ShopContext } from "../../../context/ShopContext";

function Card({ data, openProduct }) {
  const { id } = data;
  const { addToFav } = useContext(ShopContext);
  return (
    <div className="card">
      <div className="card-header">
        <div
          className={data.new ? "eye-container new" : "eye-container"}
          role="button"
          tabIndex={0}
          onClick={openProduct}
          onKeyDown={openProduct}
        >
          <img
            className="eye-img"
            src="../assets/images/icons/eye-hover.svg"
            alt="Clique ici pour plus de détails sur le produit"
          />
        </div>
        <img
          className={data.new ? "product-img new" : "product-img"}
          src={data.src}
          alt=""
        />
        <button type="button" onClick={() => addToFav(id)}>
          <img
            src="../assets/images/icons/add-heart.svg"
            alt="Bouton d'ajout à la liste d'envie"
            className="iconFavCard"
          />
        </button>
        {data.new && (
          <img
            src="/public/assets/images/icons/new.svg"
            alt="Nouveauté"
            id="new"
          />
        )}
      </div>
      <div className="card-content">
        <div
          role="button"
          tabIndex={0}
          onClick={openProduct}
          onKeyDown={openProduct}
        >
          <p>{data.name}</p>
        </div>
        <div className="card-footer">
          <span style={{ color: "black" }}>{data.price} €</span>
          <button
            type="button"
            className="buttonCardCart"
            onClick={openProduct}
          >
            <img
              src="../assets/images/icons/add-cart.svg"
              alt="Bouton d'ajout au panier"
              className="iconCartCard"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
Card.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    new: PropTypes.bool.isRequired,
  }).isRequired,
  openProduct: PropTypes.func.isRequired,
};
export default Card;

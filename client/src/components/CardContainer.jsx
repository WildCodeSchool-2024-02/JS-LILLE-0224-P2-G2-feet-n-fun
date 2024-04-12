import "./CardContainer.css";
import PropTypes from "prop-types";
import Card from "./Card";

function CardContainer({ data }) {
  return (
      <div className="card-container">
        {data[2].products.map((product) => (
          <Card key={`${product.id}.${product.name}`} data={product}/>
        ))}
      </div>
  );
}


CardContainer.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
export default CardContainer;

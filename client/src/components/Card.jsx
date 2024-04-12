import './Card.css'
import PropTypes from "prop-types";

function Card({ data }) {
    return (
        <div className="card">
                <div className="card-header">
                    <img className='product-img' src={data.src} alt="" />
                    {/* REMPLACER ICI LE BOUTON LIKE QUI APPARAIT DANS L'IMAGE */}
                    <button type='button'><img src="../assets/images/icons/add-heart.svg" alt="Bouton d'ajout à la liste d'envie" /></button>
                </div>
                <div className="card-content">
                    <p>{data.name}</p>
                    <div className="card-footer">
                        {/* MODIFIER LE JSON POUR AVOIR 1 COULEUR PAR CATEGORIE */}
                        <span style={{color: `${data.color[0]}`}}>{data.price} €</span>
                        {/* REMPLACER ICI LE BOUTON D'AJOUT RAPIDE AU PANIER */}
                        <button type='button'><img src="../assets/images/icons/add-cart.svg" alt="Bouton d'ajout au panier" /></button>
                    </div>
                </div>
        </div>
    )
}

Card.propTypes = {
    data: PropTypes.shape({
      src: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      color: PropTypes.arrayOf.isRequired,
      price: PropTypes.number.isRequired,
    }).isRequired,
  };
export default Card;
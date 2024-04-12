import PropTypes from "prop-types";
import "./Buttons.css";

/* pour appeler les boutons : 
- les import dans le composants
    <Buttons buttonIndex={4} /> pour le bouton enlever du panier (delete)
    <Buttons buttonIndex={3} /> pour le bouton ajout aux fav 
    <Buttons buttonIndex={2} /> pour le bouton ajout au panier
    <Buttons buttonIndex={1} /> pour le bouton favori
    <Buttons buttonIndex={0} /> pour le bouton panier*/

function Buttons({ buttonIndex }) {
  const buttonsArray = [
    { id: 0, src: "./public/assets/images/icons/cart4.svg", name: "cart" },
    { id: 1, src: "./public/assets/images/icons/heart4.svg", name: "fav" },
    {
      id: 2,
      src: "./public/assets/images/icons/add-cart.svg",
      name: "cartadd",
    },
    {
      id: 3,
      src: "./public/assets/images/icons/add-heart.svg",
      name: "heartadd",
    },
      {id:4,
       src: "./public/assets/images/icons/delete.svg",
       name: "delete",
  ];

  /* Fonction pour ajouter au "tableau" panier */

  /* Fonction pour ajouter au "tableau" favoris */

  return (
    <div>
      <button type="button">
        <img
          src={buttonsArray[buttonIndex].src}
          alt={buttonsArray[buttonIndex].src}
        />
      </button>
    </div>
  );
}

Buttons.propTypes = {
  buttonIndex: PropTypes.number.isRequired,
};

export default Buttons;

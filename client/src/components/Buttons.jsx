import PropTypes from "prop-types";
import "./Buttons.css";

/* pour appeler les boutons : 
- les import dans le composants
    <Buttons buttonIndex={3} />
    <Buttons buttonIndex={2} />
    <Buttons buttonIndex={1} />
    <Buttons buttonIndex={0} /> */

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

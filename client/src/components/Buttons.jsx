import PropTypes from "prop-types";
import "./Buttons.css";



/* pour appeler les boutons : 
- les import dans le composants
    <Buttons buttonIndex={4} /> pour le bouton enlever du panier (delete)
    <Buttons buttonIndex={3} /> pour le bouton ajout aux fav 
    <Buttons buttonIndex={2} /> pour le bouton ajout au panier
    <Buttons buttonIndex={1} /> pour le bouton favori
    <Buttons buttonIndex={0} /> pour le bouton panier */

function Buttons({ buttonIndex, onClick }) {

  /* Function to display cart window */ 
  /* const [showCart, setShowCart] = useState (false)
  const displayCart =
  (event) => {event.preventDefault();
  setShowCart(true)} */
  
  const buttonsArray = [
    { id: 0, src: "./public/assets/images/icons/cart4.svg", name: "cart", click : ""},
    { id: 1, src: "./public/assets/images/icons/heart4.svg", name: "fav", click : "" },
    {
      id: 2,
      src: "./public/assets/images/icons/add-cart.svg",
      name: "cartadd", click :""
    },
    {
      id: 3,
      src: "./public/assets/images/icons/add-heart.svg",
      name: "heartadd",click :""
    },
      {id:4,
       src: "./public/assets/images/icons/trash-bin.svg",
       name: "delete", click :""}
  ];

  /* Fonction pour ajouter au "tableau" panier */


  /* Fonction pour ajouter au "tableau" favoris */

  return (
    <div>
      <button type="button" onClick={onClick}>
        <img
          src={buttonsArray[buttonIndex].src}
          alt={buttonsArray[buttonIndex].src}
        />
      </button>

    </div>
  );
}

   /* {showCart && (
        <FacticePanier
        />
      )} */ 

      Buttons.propTypes = {
        buttonIndex: PropTypes.number.isRequired,
        onClick: PropTypes.func.isRequired
      };
      

export default Buttons;

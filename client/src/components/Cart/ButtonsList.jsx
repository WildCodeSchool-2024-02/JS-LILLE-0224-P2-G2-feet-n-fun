import PropTypes from 'prop-types';
import "./buttons.css"

function ButtonsList ({buttonIndex}) {
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
           name: "delete", click :""},
           {id:5,
        src:"./public/assets/images/icons/search.svg",
          name:"search", click:""}
      ];

      return (
        <div>
          <button type="button" className="buttonsCart">
            <img className="imgButtonCart"
              src={buttonsArray[buttonIndex].src}
              alt={buttonsArray[buttonIndex].src}
            />
          </button>
    
        </div>
      );
}

ButtonsList.propTypes = {
    buttonIndex: PropTypes.number.isRequired,
  };
  
export default ButtonsList

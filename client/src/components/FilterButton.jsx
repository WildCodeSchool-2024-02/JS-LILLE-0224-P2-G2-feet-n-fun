import "./FilterButton.css";
import { useState } from "react";

function FilterButton() {
  // { Bdd } a mettre dans les parametres de la fonction

  // cette constante récupère chaque objet du tableau dans Bdd.js depuis le props stoqué //////////////////////////////////////////////
  // dans le paramétre de cette fonction , il y en a 5 c'est pourquoi les variable son nommé ainsi ///////////////////////////////////
  // const [one] = Bdd;
  // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // ces constantes mettent a jour useState pour faire apparaitre et disparaitre les filtres en cliquant sur le bouton filtre
  const [display, setDisplay] = useState(false);
  const onDisplay = () => {
    setDisplay(!display);
  };

  // ceci est la recherche par prix ////////////////////////////////////////////////////////////////////////////////////////////////
  // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /*
  const filterPrice = (e) => {
    const filterTable = one.products.filter(
      (elem) =>
        elem.price >= e.target.value.split(" ")[0].split("-")[0] &&
        elem.price <= e.target.value.split(" ")[0].split("-")[1]
    );

    //console.log(filterTable);
  };
  // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  */
  return (
    <>
      <div className="block">
        <div className="first_block">
          <button type="button" onClick={onDisplay} className="one_off">
            <img
              src="./../../public/assets/images/icons/option-du-bouton-dinterface-trier-par-attributs.png"
              alt="not found"
              className="img_filter"
            />
            <span> &nbsp; trier</span>
          </button>
          <p> </p>
        </div>

        {display ? (
          <div className="last_block">
            <select className="select" /* onClick={filterPrice} */>
              <option>Prix</option>
              <option>5-10 €</option>
              <option>10-15 €</option>
              <option>15-20 €</option>
              <option>20-25 €</option>
            </select>

            <select className="select">
              <option>Taille</option>
              <option>35-38</option>
              <option>39-42</option>
              <option>43-46</option>
            </select>

            <select className="select">
              <option>Couleur</option>
              <option>Rouge</option>
              <option>Vert</option>
              <option>Bleu</option>
            </select>
          </div>
        ) : (
          ""
        )}
      </div>
      <p> </p>
    </>
  );
}
export default FilterButton;

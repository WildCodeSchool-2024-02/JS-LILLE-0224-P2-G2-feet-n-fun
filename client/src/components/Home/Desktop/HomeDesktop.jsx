import "./HomeDesktop.css";
import { Link } from "react-router-dom";

function HomeDesktop() {
  return (
    <div className="menu-desktop">
      <div className="fill-menu-desktop">.</div>
      <div className="section-new-desktop">
        <h2>Nouveautés</h2>
        <div className="figures-container">
          <div className="pokemon-figure figure-new">
            <h4> Collection 'Pokémon'</h4>
            <div className="img-poke-container-home-desktop">
              <img
                src="./public/assets/images/bulbi.jpeg"
                className="img-sock-home"
                alt=""
              />
              <img
                src="./public/assets/images/pika.jpeg"
                className="img-sock-home"
                alt=""
              />
              <img
                src="./public/assets/images/pokemonbannière.webp"
                className="img-illu-home"
                alt=""
              />
            </div>
            <Link to="/filtre?query=productsFilterNew-2">
              {" "}
              <button
                type="button"
                className="secondary-button bouton-pokemon-collec"
              >
                Découvrir
              </button>
            </Link>
          </div>
          <div className="art-figure figure-new">
            <h4> Collection 'Art contemporain'</h4>
            <div className="img-art-container-home-desktop">
              <img
                src="./public/assets/images/mondrian2.jpg"
                className="img-sock-home"
                alt=""
              />
              <img
                src="./public/assets/images/pollock1.jpeg"
                className="img-sock-home"
                alt=""
              />
              <img
                src="./public/assets/images/art-contempo.jpg"
                className="img-illu-home"
                alt=""
              />
            </div>
            <Link to="/filtre?query=productsFilterNew-4">
              {" "}
              <button
                type="button"
                className="secondary-button bouton-art-collec"
              >
                Découvrir
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeDesktop;

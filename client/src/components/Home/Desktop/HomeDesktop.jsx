import "./HomeDesktop.css";
import { Link } from "react-router-dom";

function HomeDesktop() {
  return (
    <div className="img-background-menu-group">
      <div className="section1-home">
        <img
          src="../public/assets/home1.svg"
          alt="background with site title"
          className="img-back1"
        />
      </div>

      <div className="section2-home">
        <h2 className="title-new">Nouveautés</h2>
        <img
          src="../public/assets/pokemoncollection.svg"
          alt="illustration cat art"
          className="img-pokemon-collection"
        />
        <p className="titre-collec-pokemon">Collection 'Pokémon'</p>
        <Link to="/filtre?query=productsFilterNew-2">
          {" "}
          <button type="button" className="eventButton bouton-pokemon-collec">
            Découvrir
          </button>
        </Link>
        <img
          src="../public/assets/artcollection.svg"
          alt="illustration cat art"
          className="img-arts-collection"
        />
        <img
          src="../public/assets/home2.svg"
          alt="background"
          className="img-back2"
        />
        <p className="titre-collec-art">Collection 'Art contemporain'</p>
        <Link to="/filtre?query=productsFilterNew-4">
          {" "}
          <button type="button" className="eventButton bouton-art-collec">
            Découvrir
          </button>
        </Link>
      </div>
      {/* <div className="section3-home">
        <h2 className="title-categories">
          Découvrez nos chaussettes <br /> par thématique !
        </h2>
        <Link to="/categories/4" className="cat-art-title cat-title">
          <p>Art</p>
        </Link>
        <Link to="/categories/1" className="cat-sport-title cat-title">
          <p>Sports</p>
        </Link>
        <Link to="/categories/2"  className="cat-geek-title cat-title">
          <p >Geeks</p>
        </Link>
        <Link to="/categories/3" className="cat-anime-title cat-title">
          <p>Animé</p>
        </Link>
        <Link to="/categories/5" className="cat-festif-title cat-title">
          <p >Fêtes</p>
        </Link>

        <img
          src="../public/assets/home3.svg"
          alt="background"
          className="img-back3"
        /> 
      </div> */}
    </div>
    
  );
}

export default HomeDesktop;

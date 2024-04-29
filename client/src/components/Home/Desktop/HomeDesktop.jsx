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
              <img src="./public/assets/images/bulbi.jpeg" className="img-sock-home" alt="" />
              <img src="./public/assets/images/pika.jpeg"  className="img-sock-home" alt="" />
              <img src="./public/assets/images/pokemonbannière.webp" className="img-illu-home" alt="" />
            </div>
            <Link to="/filtre?query=productsFilterNew-2">
              {" "}
              <button
                type="button"
                className="eventButton bouton-pokemon-collec"
              >
                Découvrir
              </button>
            </Link>
          </div>
          <div className="art-figure figure-new">
          <h4> Collection 'Art contemporain'</h4>
            <div className="img-art-container-home-desktop">
           
              <img src="./public/assets/images/mondrian2.jpg" className="img-sock-home" alt="" />
              <img src="./public/assets/images/pollock1.jpeg" className="img-sock-home" alt="" />
              <img src="./public/assets/images/art-contempo.jpg" className="img-illu-home" alt="" />
            </div>
            <Link to="/filtre?query=productsFilterNew-4">
              {" "}
              <button type="button" className="eventButton bouton-art-collec">
                Découvrir
              </button>
            </Link>
      
          </div>
        </div>
      </div>

      {/* <section className="section2-home">
        
        <img
          src="../public/assets/pokemoncollection.svg"
          alt="illustration cat art"
          className="img-pokemon-collection"
        />
        <p className="titre-collec-pokemon">Collection 'Pokémon'</p>
       
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
      
      </section>
       <section className="section3-home">
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
      </section> */}
    </div>
  );
}

export default HomeDesktop;

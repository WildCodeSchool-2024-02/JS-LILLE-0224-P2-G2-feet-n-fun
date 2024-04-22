import { Link } from "react-router-dom";
import "./MenuHome.css";

function MenuHome() {
  return (
    <div className="imgMenuHome">
      <div className="menuLink">
        <div className="catalogue">
          <p className="cataloguetitre">Notre catalogue par catégorie</p>
        </div>
      </div>
      <Link to="/categories/4" className="menuLink">
        <div className="fondMenuHome">
          <div className="fondMenuHome-inner">
            <div className="fondMenuHome-front">
              <img
                className="carréImageMenu"
                src="./public/assets/images/ArtCarré.jpg"
                alt="imageArt"
              />
            </div>
            <div className="fondMenuHome-back">
              <p className="MenuHomeCatTitle">Art</p>
            </div>
          </div>
        </div>
      </Link>
      <Link to="/categories/1" className="menuLink">
        <div className="fondMenuHome">
          <div className="fondMenuHome-inner">
            <div className="fondMenuHome-front">
              <img
                className="carréImageMenu"
                src="./public/assets/images/SportCarré.png"
                alt="imagesport"
              />
            </div>
            <div className="fondMenuHome-back">
              <p className="MenuHomeCatTitle">Sport</p>
            </div>
          </div>
        </div>
      </Link>
      <Link to="/categories/2" className="menuLink">
        <div className="fondMenuHome">
          <div className="fondMenuHome-inner">
          <div className="fondMenuHome-front">
              <img
                className="carréImageMenu"
                src="./public/assets/images/GeekCarré.jpg"
                alt="imagegeek"
              />
              </div>
            
            <div className="fondMenuHome-back">
              <p className="MenuHomeCatTitle">Geek</p>
            </div>
          </div>
        </div>
      </Link>
      <Link to="/categories/3" className="menuLink">
        <div className="fondMenuHome">
          <div className="fondMenuHome-inner">
            <div className="fondMenuHome-front">
              <img
                className="carréImageMenu"
                src="./public/assets/images/AnimeCarré.avif"
                alt="imageAnimé"
              />
            </div>
            <div className="fondMenuHome-back">
              <p className="MenuHomeCatTitle">Animé</p>
            </div>
          </div>
        </div>
      </Link>
      <Link to="/categories/5" className="menuLink">
        <div className="fondMenuHome">
          <div className="fondMenuHome-inner">
            <div className="fondMenuHome-front">
              <img
                className="carréImageMenu"
                src="./public/assets/images/FestifCarré.jpg"
                alt="imageFestif"
              />
            </div>
            <div className="fondMenuHome-back">
              <p className="MenuHomeCatTitle">Festif</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default MenuHome;

/* https://www.evolution-football.fr/wp-content/uploads/2019/03/football-1396740_960_720.jpg 

 <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;">
    </div>
    <div class="flip-card-back">
      <h1>John Doe</h1>
      <p>Architect & Engineer</p>
      <p>We love that guy</p>
    </div>
  </div>
</div>

*/

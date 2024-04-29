import { Link } from "react-router-dom";
import "./MenuHome.css";

function MenuHome() {
  return (
    <div className="imgMenuHome">
      <div className="menuLink">
        <div className="catalogue">
          <p className="cataloguetitre">Notre catalogue par thématique</p>
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

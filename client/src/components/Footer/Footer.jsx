import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-box"> 
      <div className="social-icon">
        <a href="www.facebook.com">
          <img
            className="icon"
            src="../src/assets/images/network/facebook.svg"
            alt="logo de facebook avec un lien vers le page facebook du site"
          />
        </a>
        <a href="www.instagram.com">
          <img
            className="icon"
            src="../src/assets/images/network/instagram.svg"
            alt="logo de instagram avec un lien vers le page instagram du site"
          />
        </a>
        <a href="www.twitter.com">
          <img
            className="icon"
            src="../src/assets/images/network/twitterx.svg"
            alt="logo de twiter avec un lien vers le page twitter du site"
          />
        </a>
      </div>
      <div className="end-navigation navigation-footer">
        <Link to="/categories/4" className="art-font  color-nav">
          ART
        </Link>
        <Link to="/categories/1" className="sports-font  color-nav">
          SPORTS
        </Link>
        <Link to="/categories/3" className="geek-font color-nav">
          GEEK
        </Link>
        <Link to="/categories/2" className="anime-font color-nav">
          ANIME{" "}
        </Link>
        <Link to="/categories/5" className="festif-font color-nav">
          FESTIF{" "}
        </Link>
      </div>
      <div className=" center copieright">
        <h6>
          © 2024<span> Feet & Fun </span> Tous droits réservés.
        </h6>
      </div>
    </div>
  );
}

export default Footer;

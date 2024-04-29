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
      <div className="navigation-footer">
        <Link to="/a-propos" className="links-footer">
          À propos
        </Link>
        <Link to="/contact" className="links-footer">
          Contact
        </Link>
      </div>
      <div className=" center copieright">
        <h6>
          © 2024<span> Feet & Fun </span> Wild Code School, créé par Alexandre, Alexis, Emilie, Sébastien & Houari.
        </h6>
      </div>
    </div>
  );
}

export default Footer;

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./CategoryBar.css";

function CategoryBar({ id }) {
  return (
    <div className="categories">
      <ul className="ulCategories">
        <li>
          <Link to="/">
            <img
              className="button_accueil"
              src="../public/assets/images/icons/iconAccueil.svg"
              alt="retour à l'accueil"
            />
          </Link>
        </li>

        <li>
          <Link to="/categories/4">
            <button
              type="button"
              className={id === 4 ? "button_art_active" : "button_art"}
            >
              ART
            </button>
          </Link>
        </li>
        <li>
          <Link to="/categories/1">
            <button
              type="button"
              className={id === 1 ? "button_sport_active" : "button_sport"}
            >
              SPORTS
            </button>{" "}
          </Link>
        </li>
        <li>
          <Link to="/categories/2">
            <button
              type="button"
              className={id === 2 ? "button_geek_active" : "button_geek"}
            >
              GEEKS
            </button>
          </Link>
        </li>
        <li>
          <Link to="/categories/3">
            <button
              type="button"
              className={id === 3 ? "button_anime_active" : "button_anime"}
            >
              ANIMÉ
            </button>{" "}
          </Link>
        </li>
        <li>
          <Link to="/categories/5">
            <button
              type="button"
              className={id === "5" ? "button_festif_active" : "button_festif"}
            >
              FESTIF
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
}
CategoryBar.propTypes = {
  id: PropTypes.number.isRequired,
};
export default CategoryBar;

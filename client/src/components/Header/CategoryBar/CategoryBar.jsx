import { Link } from "react-router-dom";
import "./CategoryBar.css";

function CategoryBar() {
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
              className="button_art"
            >
              Art
            </button>
          </Link>
        </li>
        <li>
          <Link to="/categories/1">
            <button
              type="button"
              className="button_sport"
            >
              Sports
            </button>{" "}
          </Link>
        </li>
        <li>
          <Link to="/categories/2">
            <button
              type="button"
              className="button_geek"
            >
              Geeks
            </button>
          </Link>
        </li>
        <li>
          <Link to="/categories/3">
            <button
              type="button"
              className="button_anime"
            >
              Animé
            </button>{" "}
          </Link>
        </li>
        <li>
          <Link to="/categories/5">
            <button
              type="button"
              className="button_festif"
            >
              Festif
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default CategoryBar;

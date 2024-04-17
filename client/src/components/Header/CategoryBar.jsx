import "./CategoryBar.css";
import PropTypes from "prop-types";

function CategoryBar({ sectionSelected, changeSection }) {
  return (
    <div className="categories">
      <ul className="ulCategories">
        <li>
          <button
            type="button"
            onClick={() => {
              changeSection(3);
            }}
            className={
              sectionSelected === 3 ? "button_art_active" : "button_art"
            }
          >
            {" "}
            ART{" "}
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => {
              changeSection(0);
            }}
            className={
              sectionSelected === 0 ? "button_sport_active" : "button_sport"
            }
          >
            SPORTS
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => {
              changeSection(1);
            }}
            className={
              sectionSelected === 1 ? "button_geek_active" : "button_geek"
            }
          >
            GEEKS
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => {
              changeSection(2);
            }}
            className={
              sectionSelected === 2 ? "button_anime_active" : "button_anime"
            }
          >
            ANIMÉ
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => {
              changeSection(4);
            }}
            className={
              sectionSelected === 4 ? "button_festif_active" : "button_festif"
            }
          >
            FESTIF
          </button>
        </li>
      </ul>
    </div>
  );
}

CategoryBar.propTypes = {
  sectionSelected: PropTypes.number.isRequired,
  changeSection: PropTypes.func.isRequired,
};

export default CategoryBar;

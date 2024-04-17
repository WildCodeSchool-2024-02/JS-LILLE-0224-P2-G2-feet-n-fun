import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./CategoryBar.css";

function CategoryBar({ sectionSelected, changeSection }) {
  return (
      <div className="categories">
        <ul className="ulCategories">
          <li>
          <Link to="/categories/art"><button
              type="button" className={
                sectionSelected === 3 ? "button_art_active" : "button_art"
              }
              onClick={() => {
                changeSection(3);
              }}
              >

              ART 
            </button></Link>
          </li>
          <li>
          <Link to="/categories/sports">
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
            </button> </Link>
          </li>
          <li>
          <Link to="/categories/geeks">
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
            </button></Link>
          </li>
          <li>
          <Link to="/categories/anime">
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
            </button> </Link>
          </li>
          <li>
          <Link to="/categories/festif">
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
            </button></Link>
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
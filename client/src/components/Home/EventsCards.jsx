import "./Events.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function EventsCards({ title, img1, img2, img3, link }) {
  return (
    <div className="cardAccueil">
      <div className="ContainerAccueil">
        <div className="imgContainerAccueil">
          <img className="image1Accueil" alt="" src={img1} />
          <img className="image2Accueil" alt="" src={img2} />
          <img className="image3Accueil" alt="" src={img3} />
        </div>

        <div className="eventContent">
          <h4 className="eventTitle">{title}</h4>
          <Link to={link}>
            <button type="button" className="eventButton">
              Découvrir
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

EventsCards.propTypes = {
  title: PropTypes.string.isRequired,
  img1: PropTypes.string.isRequired,
  img2: PropTypes.string.isRequired,
  img3: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default EventsCards;

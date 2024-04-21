import { Link } from "react-router-dom";
import "./MenuHome.css"

function MenuHome() {

        return (
            
          <div className="imgMenuHome">
          <div className="menuLink">
          <div className="catalogue"><p className="cataloguetitre">Notre catalogue par catégorie</p></div></div>
            <Link to="/categories/4" className="menuLink">
            <div className="fondMenuHome"><p className="MenuHomeCatTitle">Art</p></div>
            </Link>
            <Link to="/categories/1" className="menuLink">
              <div className="fondMenuHome"><p className="MenuHomeCatTitle">Sport</p></div>
              
            </Link>
            <Link to="/categories/2" className="menuLink">
            <div className="fondMenuHome"><p className="MenuHomeCatTitle">Geek</p></div>
            </Link>
            <Link to="/categories/3" className="menuLink">
            <div className="fondMenuHome"><p className="MenuHomeCatTitle">Animé</p></div>
            </Link>
            <Link to="/categories/5" className="menuLink">
            <div className="fondMenuHome"><p className="MenuHomeCatTitle">Festif</p></div>
            </Link>
          </div>
           );
      }
      

export default MenuHome;

/* https://www.evolution-football.fr/wp-content/uploads/2019/03/football-1396740_960_720.jpg */

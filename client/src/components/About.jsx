import "./About.css";

function About() {
  return (
    <div className="About">
      <h2 className="titleRubrique">A Propos</h2>
      <div className="Section-histoire">
       
        <div className="histoireContent">
        
          <img
            src="https://th.bing.com/th/id/OIG4.r2vzuVbYLSdx.E6UHD8s?pid=ImgGn"
            alt=""
            className="Img-history"
          /> 
          <p className="Text"><h3 className="History">Notre Histoire</h3>
            Tout a commencé avec une passion pour le style. En 1730, Mr Houari
            (alias Aziz) et son équipe ont lancé Feet & fun avec une mission
            simple : offrir des chaussettes de qualité supérieure qui allient
            confort et design. Depuis nos débuts dans le Massachusetts, nous
            avons grandi pour devenir une marque reconnue.
          </p>
        </div>
      </div>
      
      <div className="Section-philosophie">
        
        <div className="philoContent">
          <img
            src="https://th.bing.com/th/id/OIG2.fLiNzI1rxy7aCPJ_uxPE?pid=ImgGn"
            alt=""
            className="Img-history"
          />
          <p className="Text"><h3 className="History">Notre Philosophie</h3> 
            Chez Feet & fun, nous croyons que les petits détails font une grande
            différence. C’est pourquoi nous nous engageons à utiliser des
            matériaux de haute qualité et des techniques de fabrication
            responsables. Nos chaussettes ne sont pas seulement un accessoire,
            elles sont une expression de votre personnalité.
          </p>
        </div>
        
        
      </div>
      <div className="Section-équipe">
        
        <div className="equipeContent">
          <img
            src="https://th.bing.com/th/id/OIG2.kpVze6VzN9zbpp4HjAV0?pid=ImgGn"
            alt=""
            className="Img-history"
          />
          <p className="Text"><h3 className="History">Notre équipe</h3>
            Derrière chaque paire de chaussettes, il y a une équipe dévouée de
            créateurs, de designers et de techniciens qui travaillent avec
            passion pour vous apporter le meilleur. Nous sommes fiers de notre
            équipe et de la culture d’entreprise que nous avons bâtie ensemble.
          </p>
        </div>
      </div>
    </div>
  );
}
export default About;

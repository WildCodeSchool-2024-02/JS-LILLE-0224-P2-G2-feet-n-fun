import "./About.css";

function About() {
  return (
    <section className="container">
      <h2 className="titleRubrique">
        A Propos
      </h2>

      <div className="gallery-wrapper">
        <figure className="gallery-item">
          <img
            src="https://th.bing.com/th/id/OIG4.r2vzuVbYLSdx.E6UHD8s?pid=ImgGn"
            alt=""
            className="item-image"
          />
          <ficaption className="item-description">
            <h2 className="name">Notre Histoire</h2>
            <p className="role">
              {" "}
              Tout a commencé avec une passion pour le style. En 1730, Mr Houari
              (alias Aziz) et son équipe ont lancé Feet & fun avec une mission
              simple : offrir des chaussettes de qualité supérieure qui allient
              confort et design. Depuis nos débuts dans le Massachusetts, nous
              avons grandi pour devenir une marque reconnue
            </p>
          </ficaption>
        </figure>

        <figure className="gallery-item">
          <img
            src="https://th.bing.com/th/id/OIG1.YVhJydTOtVoVCSSf.dPV?pid=ImgGn"
            alt=""
            className="item-image"
          />
          <ficaption className="item-description">
            <h2 className="name">Notre Philosophie</h2>
            <p className="role">
              {" "}
              Chez Feet & fun, nous croyons que les petits détails font une
              grande différence. C’est pourquoi nous nous engageons à utiliser
              des matériaux de haute qualité et des techniques de fabrication
              responsables. Nos chaussettes ne sont pas seulement un accessoire,
              elles sont une expression de votre personnalité.
            </p>
          </ficaption>
        </figure>

        <figure className="gallery-item">
          <img
            src="https://th.bing.com/th/id/OIG2.kpVze6VzN9zbpp4HjAV0?pid=ImgGn"
            alt=""
            className="item-image"
          />
          <ficaption className="item-description">
            <h2 className="name">Notre Équipe</h2>
            <p className="role">
              {" "}
              Derrière chaque paire de chaussettes, il y a une équipe de créateurs, composée d'Alexandre, Alexis, Emilie, Houari et Sébastien,
               qui travaillent avec
              passion pour vous apporter le meilleur. Nous sommes fiers de notre
              équipe et de la culture d’entreprise que nous avons bâtie
              ensemble. 
            </p>
          </ficaption>
        </figure>
        </div>
    </section>
  );
}
export default About;

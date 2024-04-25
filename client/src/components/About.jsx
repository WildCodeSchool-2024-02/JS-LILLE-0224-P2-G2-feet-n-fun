import "./About.css";

function About() {
  return (
    <>
      <div className="About">
        <h1 className="About-h1">À Propos de Feet & fun</h1>
        <div className="Section-about">
          <p className="History">
            <u>Notre Histoire:</u>
          </p>
          <p className="Text">
            Tout a commencé avec une passion pour le style. <br />
            En 1730, Mr Houari (alias Aziz) et son équipe ont lancé Feet & fun
            avec une mission simple : offrir des chaussettes de qualité
            supérieure qui allient confort et design. Depuis nos débuts dans le
            massachusetts, nous avons grandi pour devenir une marque reconnue.
          </p>
          <div className="Column">
            <img
              src="https://c8.alamy.com/compfr/2cmkkwf/massachusetts-carte-politique-avec-la-capitale-boston-commonwealth-du-massachusetts-ma-etat-le-plus-peuple-de-la-region-de-la-nouvelle-angleterre-des-etats-unis-2cmkkwf.jpg"
              alt=""
              className="Img-history"
            />
            <img
              src="https://static.studyusa.com/school/cdn_sCJ7u8McyAOo9_-ztN7HTsPIedm6XTjj.jpg?format=webp"
              alt=""
              className="Img-history"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/VW_Wolfsburg.JPG/220px-VW_Wolfsburg.JPG"
              alt=""
              className="Img-history"
            />
          </div>
        </div>
        <div className="Section-about" id="Reverse">
          <p className="History" id="History-reverse">
            <u>Notre Philosophie:</u>
          </p>
          <p className="Text" id="text-reverse">
            Chez Feet & fun, nous croyons que les petits détails font une grande
            différence. C’est pourquoi nous nous engageons à utiliser des
            matériaux de haute qualité et des techniques de fabrication
            responsables. Nos chaussettes ne sont pas seulement un accessoire,
            elles sont une expression de votre personnalité.
          </p>
          <div className="Column" id="Column-reverse">
            <img
              src="https://www.votreimageenlumiere.fr/wp-content/uploads/2019/08/chaussettes-ecoresponsables-qnoop-usine-de-fabrication-au-portugal.jpg"
              alt=""
              className="Img-history2"
            />
            <img
              src="https://cdn-s-www.leprogres.fr/images/6373BFA0-E72B-41B8-831D-26F637297F7A/NW_raw/l-entreprise-de-saint-genest-va-desormais-egalement-produire-des-chaussettes-de-contention-photo-velpeau-1670256939.jpg"
              alt=""
              className="Img-history2"
            />
            <img
              src="https://blog.chaussettes.com/wp-content/uploads/2015/04/M%C3%A9tier-%C3%A0-tricoter-Kindy-2.jpg"
              alt=""
              className="Img-history2"
            />
          </div>
        </div>
        <div className="Section-about">
          <p className="History">
            <u>Notre équipe:</u>
          </p>
          <p className="Text">
            Derrière chaque paire de chaussettes, il y a une équipe dévouée de
            créateurs, de designers et de techniciens qui travaillent avec
            passion pour vous apporter le meilleur. Nous sommes fiers de notre
            équipe et de la culture d’entreprise que nous avons bâtie ensemble.
          </p>
          <div className="Column">
            <img
              src="https://hatch-event.com/wp-content/uploads/2022/02/cohesion-de-groupe-entreprise-agence-evenementielle.jpeg"
              alt=""
              className="Img-history"
            />
            <img
              src="https://gipe76.fr/wp-content/uploads/2021/04/gg-626x381.jpg"
              alt=""
              className="Img-history"
            />
            <img
              src="https://pedagogic.fr/wp-content/uploads/2022/06/gens-travail-equipe-pieces-puzzle_24877-54950-624x624-1.webp"
              alt=""
              className="Img-history"
            />
          </div>
        </div>
      </div>
      <p> </p>
    </>
  );
}
export default About;

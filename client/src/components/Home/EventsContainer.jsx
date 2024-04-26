import EventsCards from "./EventsCards";
import "./Events.css";

function EventsContainer() {
  const dataAccueil = [
    {
      id: 0,
      title: "Collection Pokémon",
      img1: "./public/assets/images/bulbi.jpeg",
      img2: "./public/assets/images/pokemonbannière.webp",
      img3: "../public/assets/images/pika.jpeg",
      link: "/filtre?query=productsFilterNew-2"
    },
    {
      id: 1,
      title: "Collection 'Art contemporain'",
      img1: "./public/assets/images/mondrian2.jpg",
      img2: "./public/assets/images/artcontempo.jpg",
      img3: "./public/assets/images/pollock1.jpeg",
      link :"/filtre?query=productsFilterNew-4"
    },
  ];

  return (
 
      <div className="nouveautésSection">
        <div className="nouveautés">
          <h2 className="titreNouveautés">Nouveautés</h2>
        </div>
        <div className="eventCard">
          {dataAccueil.map(({ id, title, img1, img2, img3,link }) => (
            <EventsCards
              key={id}
              title={title}
              img1={img1}
              img2={img2}
              img3={img3}
              link={link}
            />
          ))}
        </div>
      </div>
    
  );
}

export default EventsContainer;

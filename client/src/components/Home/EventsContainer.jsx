import EventsCards from "./EventsCards";

function EventsContainer() {
  const dataAccueil = [
    {
      id: 0,
      title: "Soldes Pokémon !",
      img1: "./public/assets/images/bulbi.jpeg",
      img2: "./public/assets/images/pokemonbannière.webp",
      img3: "../public/assets/images/pika.jpeg",
    },
    {
      id: 1,
      title: "New: collection 'Art contemporain'",
      img1: "./public/assets/images/mondrian2.jpg",
      img2: "./public/assets/images/artcontempo.jpg",
      img3: "./public/assets/images/pollock1.jpeg",
    },
  ];

  return (
    <div className="nouveautésSection">
      <div className="nouveautés">
        <h2 className="titreNouveautés">Nouveautés</h2>
      </div>
      <div className="eventCard">
        {dataAccueil.map(({ id, title, img1, img2, img3 }) => (
          <EventsCards
            key={id}
            title={title}
            img1={img1}
            img2={img2}
            img3={img3}
          />
        ))}
      </div>
    </div>
  );
}

export default EventsContainer;

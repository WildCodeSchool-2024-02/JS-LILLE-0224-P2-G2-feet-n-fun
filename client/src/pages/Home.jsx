import EventsContainer from "../components/Home/EventsContainer";
import MenuHome from "../components/Home/MenuHome";
import HomeDesktop from "../components/Home/Desktop/HomeDesktop";

function Home() {
  return (
    <>
    <HomeDesktop/>
      <EventsContainer />
      <MenuHome />
    </>
  );
}

export default Home;

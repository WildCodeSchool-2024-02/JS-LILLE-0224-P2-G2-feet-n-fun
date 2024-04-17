import { useLoaderData, useRouteLoaderData } from "react-router-dom";


function Home () {
    const toto = useLoaderData();
  
    console.log('toto dans home',toto)

    return (<h1>Bonjour </h1>)
}

export default Home 
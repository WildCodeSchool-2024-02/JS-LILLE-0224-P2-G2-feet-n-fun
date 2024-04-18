import { useLoaderData } from "react-router-dom";


function Home () {
    const data = useLoaderData();

    return (<h1>Bonjour {data[0].products[0].name} </h1>)
}

export default Home 
import { useLoaderData } from "react-router-dom";


function Delivery () {
    const data = useLoaderData();

    return (<h1>LIVRAISON{data[0].products[0].name}</h1>)
}

export default Delivery; 
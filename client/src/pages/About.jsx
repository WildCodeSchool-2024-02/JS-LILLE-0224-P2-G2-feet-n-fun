import { useLoaderData } from "react-router-dom";

function About() {
  const data = useLoaderData();
  return <h1>ABOUT{data[0].products[0].name}</h1>;
}

export default About;

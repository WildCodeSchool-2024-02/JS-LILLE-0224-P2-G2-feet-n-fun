import { useLoaderData } from "react-router-dom";

function Contact() {
  const data = useLoaderData();

  return <h1>CONTACT{data[0].products[0].name}</h1>;
}

export default Contact;

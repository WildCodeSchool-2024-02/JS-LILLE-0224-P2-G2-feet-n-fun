import { useLoaderData, useParams } from "react-router-dom";
import CardContainer from "../components/Shop/Card/CardContainer"

function Categories() {

  const {id} = useParams()
  const data = useLoaderData(id);


  return (
        <CardContainer data={data} />
  );
}

export default Categories;

import axios from "axios";
import { useEffect, useState } from "react";
import CardContainer from "../components/Shop/CardContainer";
import { useLoaderData, useParams } from "react-router-dom";

function Categories({data}) {
    const {id} = useParams()
    const toto = useLoaderData(id);
    
    console.log(toto)

  return (

      <CardContainer data={data} sectionSelected={sectionSelected} />
  );
}

export default Categories;

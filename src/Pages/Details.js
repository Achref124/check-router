import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import moviesData from "../Data";


function Details() {
 let {id}=useParams()
  const [detail,setDetail]=useState({})

  useEffect(() => {
   const movieDetail=moviesData.find((el)=>el.id==id)

  setDetail(movieDetail)
    
  }, [id])
  

  return (
    <div>
     {detail.description}
     <iframe src={detail.trailer}></iframe>
    </div>
  );
}

export default Details;
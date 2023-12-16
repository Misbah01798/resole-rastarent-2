import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DetailCard from "./DetailCard";


const FoodDetails = () => {
    const {_id} = useParams();
    const [details, setDetails] = useState();
    const detail =useLoaderData();
    useEffect(()=>{
        const product =detail?.find(details => details._id == _id)
        setDetails(product);
        
    }, [_id, detail])
  return (
    <div className="w-[1200px] mx-auto">
        <DetailCard details={details}></DetailCard>
      
    </div>
  )
}

export default FoodDetails

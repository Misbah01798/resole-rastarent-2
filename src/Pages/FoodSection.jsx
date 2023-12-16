import { useEffect, useState } from "react"
import FoodSectionCard from "./FoodSectionCard";
import img8 from '../assets/image/sec1.png'
import { Link } from "react-router-dom";


const FoodSection = () => {
    const [foodData, setFoodData] =useState([]);
    useEffect( ()=>{
        fetch('https://assignment-11-server-zeta-blush.vercel.app/allFoodItem')
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            setFoodData(data.slice(0,6))
        })
    }, [])
  return (
    <div className="w-[1200px] mx-auto">
          <div className='mx-auto mt-4 mb-4'><h1 className='text-center text-3xl font-bold'>Our Special Food</h1>
        <img src={img8} alt="" className='mx-auto' /></div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
       
      {
        foodData.map((food)=>(
            <FoodSectionCard key={food._id} food={food}></FoodSectionCard>
        ))
      }
    </div>
    <div className="mx-auto flex justify-center m-4">
    <button className="btn btn-secondary"><Link to='/allfood'>See All</Link></button>
    </div>
    </div>
  )
}

export default FoodSection

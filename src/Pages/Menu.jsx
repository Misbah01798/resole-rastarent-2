import { useEffect, useState } from "react";
import MenuCard from "./MenuCard";


const Menu = () => {
    const [foodMenu, setFoodMenu] =useState([]);
    useEffect( ()=>{
        fetch('https://assignment-11-server-zeta-blush.vercel.app/allFoodItem')
        .then(res => res.json())
        .then(data =>{
            setFoodMenu(data)
        })
    }, [])
  return (
    <div className="w-[1200px] mx-auto mt-6 mb-6">
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Origin</th>
        <th>Price</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        foodMenu.map((menu)=>(
            <MenuCard key={menu._id} menu={menu}></MenuCard>
        ))
      }


     
      
   
    
    </tbody>
    {/* foot */}
    
    
  </table>
</div>
    </div>
  )
}

export default Menu

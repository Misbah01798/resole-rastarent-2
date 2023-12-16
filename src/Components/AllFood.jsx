import { useLoaderData } from "react-router-dom"
import AllFoodCard from "./AllFoodCard";
import { useEffect, useState } from "react";
import Search from "../Pages/Search";
import { Helmet } from "react-helmet";


const AllFood = () => {
  const [foodItem, setFoodItem] =useState([]);
  const [itemPerpage, setItemPerPage] =useState(9);
  const [currentPage, setCurrentPage] =useState(0);
  const [filteredData, setFilteredData]=useState([]);
  const {count} = useLoaderData();
  

  const numberOffpages = Math.ceil(count/itemPerpage);

  const pages =[...Array(numberOffpages).keys()];

  useEffect(()=>{
    fetch(`https://assignment-11-server-zeta-blush.vercel.app/allFoodItem?pages=${currentPage}&size=${itemPerpage}`)
    .then(res => res.json())
    .then(data => {
      setFoodItem(data)
      setFilteredData(data)
    })
  }, [currentPage])
  const handleSearch =(searchTerm)=>{
      const filterItem = filteredData.filter((foods)=> foods.food_name.toLowerCase().includes(searchTerm.toLowerCase()));
      setFoodItem(filterItem);
  };
  
  return (
    <div className="mt-6 w-[1200px] mx-auto">
       <Helmet>
                <meta charSet="utf-8" />
                <title>All Food Item - Resoles</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <div className="form-control mx-auto m-6 w-1/3">
       <Search onSearch={handleSearch}></Search>
        <h1 className="text-3xl text-center m-4 font-bold">All Food Items Our Rastaurant</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          foodItem?.map((food) => (
            <AllFoodCard key={food._id} food={food}></AllFoodCard>
          ))
        }

      </div>
     
      <div className="join m-6 flex justify-center">
        {
          pages.map(page => <button onClick={()=>setCurrentPage(page)} key={page} className={currentPage === page && 'seleted join-item btn gap-2 btn-secondary p-4'}>{page}</button>)
        }
      </div>
    </div>
  )
}

export default AllFood;

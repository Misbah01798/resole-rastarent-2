import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth"
import MyItem from "./MyItem";


const MyaddedItem = () => {
  const { user } = useAuth();
  const [addItem, setAddItem] = useState([]);

  
  useEffect(() => {
    const url = `https://assignment-11-server-zeta-blush.vercel.app/allFoodItem?email=${user?.email}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setAddItem(data))
  }, [user])
  return (
    

      <div className="overflow-x-auto">
        <h1 className="text-2xl font-bold text-center">My Added Item</h1>
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
              <th>Email</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          
            {
              addItem.map(item =><MyItem key={item._id} item={item}></MyItem>)
            }


          </tbody>



        </table>
      </div>
    
  )
}

export default MyaddedItem;

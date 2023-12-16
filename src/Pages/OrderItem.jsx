import { useState } from "react";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";


const OrderItem = ({order}) => {
    const {user} =useAuth();
    const [orderFood, setOrderFood] =useState([]);
  const { _id, food_img, price, food_name, quantity, email, description, food_category, food_origin } = order;

  const handleDelete = id =>{
    const proceed = confirm('Are You sure you want delete');
    if(proceed){
        fetch(`https://assignment-11-server-zeta-blush.vercel.app/orderData/${id}`, {
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.deletedCount >0){
              Swal.fire({
                icon: 'success',
                title: 'Update Successful',
                text: 'You have successfully Deleted Data.'
            });
                const remaining = orderFood.filter(orders => orders._id !==id);
                setOrderFood(remaining)
            }
        })

    }
}
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={food_img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{food_name}</div>
            <div className="text-sm opacity-50">{price}</div>
          </div>
        </div>
      </td>
      <td>
        {email}

      </td>
      <td>{quantity}</td>
      <th>
        {/* The button to open modal */}
        
        <button onClick={() => handleDelete(_id)} className="btn btn-ghost btn-xs">delete</button>
      </th>
    </tr>
  )
}

export default OrderItem;

import React, { useEffect, useState } from 'react'
import useAuth from '../hooks/useAuth';
import OrderItem from './OrderItem';

const MyOrderItem = () => {
  const { user } = useAuth();
  const [orderItem, setOrderItem] = useState([]);


  
  useEffect(() => {
    const url = `https://assignment-11-server-zeta-blush.vercel.app/orderData?email=${user?.email}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setOrderItem(data))
  }, [user])
  return (
    <div className="overflow-x-auto mt-12">
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
          orderItem.map(order =><OrderItem key={order._id} order={order}></OrderItem>)
        }


      </tbody>



    </table>
  </div>
  )
}

export default MyOrderItem

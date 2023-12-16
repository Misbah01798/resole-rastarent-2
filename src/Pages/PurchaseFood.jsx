import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';
import Footer from '../Components/Footer';

const PurchaseFood = () => {
    const {user} =useAuth();
    const [foodimg, setFoodimg]=useState('');
    const [foodname, setFoodname]=useState('');
    const [prices, setPrices]=useState('');
    const [quantity, setQuntity]=useState('');
    const [bname, setBname]=useState('');
    const [email, setEmail]=useState('');
    const [date, setDate]=useState('');
    const purchase =useLoaderData();
    const { _id, food_img, food_name, food_category, user_email, price, description, food_origin } = purchase;
    console.log(purchase)
    const handleOrderdate =async (e)=>{
        e.preventDefault();
        
        const orderData ={
            food_img:foodimg, food_name:foodname, price:prices, quantity, bname, email, date
        };
        console.log(orderData)

        try {
            const res =await fetch('https://assignment-11-server-zeta-blush.vercel.app/orderData', {
                    method: "POST",
                    headers:{
                        "Content-Type":"application/json",
                    },
                    body:JSON.stringify(orderData)
                });
            const data =await res.json();
            console.log(data);
            if(data.acknowledged){
                Swal.fire({
                    icon: 'success',
                    title: 'Update Successful',
                    text: 'You have successfully Order Data.'
                });
            }
        } catch (error) {
            console.log(error)
            
        }
    }
  return (
    <div className='w-[1200px] mx-auto' style={{
        backgroundImage: `url(${food_img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100%',
    }}>
            <div >
                <h1 className='text-3xl text-center'>{food_name}</h1>
            <div className="w-[400px] md:w-[1000px] shadow-2xl bg-base-100 bg-opacity-50 rounded-lg mx-auto">
                    <form onSubmit={handleOrderdate} className="card-body grid grid-cols-1 md:grid-cols-2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Food Name</span>
                            </label>
                            <input onBlur={(e)=>setFoodname(e.target.value)} type="text" name="name" defaultValue={food_name} placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input onBlur={(e)=>setFoodimg(e.target.value)} type="text" defaultValue={food_img} name="photo" placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input onBlur={(e)=>setEmail(e.target.value)} type="email" name="email" placeholder='' defaultValue={user?.email} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Buyer Name</span>
                            </label>
                            <input type="text" onBlur={(e)=>setBname(e.target.value)} name="Bname" defaultValue={user?.name} placeholder="" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" onBlur={(e)=>setPrices(e.target.value)} name="price" defaultValue={price} placeholder="Price" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input type="number" name="quantity" placeholder="Quantity" onBlur={(e)=>setQuntity(e.target.value)} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" onBlur={(e)=>setDate(e.target.value)} name="date" placeholder="date" className="input input-bordered" required />
                        </div>

                        <div className="form-control mt-6 items-center">
                            <button type="submit" className="btn btn-primary">Purchase Order</button>
                        </div>


                    </form>
                </div>
            </div>
            
    </div>
    
  )
}

export default PurchaseFood;

import React from 'react'
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';

const MyItem = ({ item }) => {
  const {user} =useAuth();
  const { _id, food_img, price, food_name, quantity, email, description, food_category, food_origin } = item;
  const handleUpdate =async (e)=>{
    e.preventDefault();
    const form = e.target;
        const photo = form.photo.value;
        const name = form.name.value;
        const categary = form.categary.value;
        const email = user?.email;
        const price = form.price.value;
        const description = form.description.value;
        const quantity = form.quantity.value;
        const origin = form.origin.value;
        const updateData={ food_img: photo, food_name:name, food_category:categary, email, price, description, quantity, food_origin:origin

        }
    console.log(updateData)

    try {
        const res =await fetch(`https://assignment-11-server-zeta-blush.vercel.app/allFoodItem/${_id}`, {
                method: "PUT",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify(updateData)
            });
        const data =await res.json();
        console.log(data);
        if(data.acknowledged){
            Swal.fire({
                icon: 'success',
                title: 'Update Successful',
                text: 'You have successfully Update Data.'
            });
        }
    } catch (error) {
        console.log(error)
        
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
        <label htmlFor="my_modal_6" className="btn">Update</label>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my_modal_6" className="modal-toggle" />
        <div className="modal w-[1100px] mx-auto">
          <div className="">
            <div className="">
              <div className="text-center">
                <h1 className="text-5xl text-white font-bold">Update Food Items!</h1>
              </div>
              <div className="w-[400px] md:w-[1000px] shadow-2xl bg-base-100 bg-opacity-70 rounded-lg">
                <form onSubmit={handleUpdate} className="card-body grid grid-cols-1 md:grid-cols-2">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Food Name</span>
                    </label>
                    <input type="text" name="name" defaultValue={food_name} placeholder="Name" className="input input-bordered" required />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" name="photo" defaultValue={food_img} placeholder="Photo URL" className="input input-bordered" required />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder={user?.email} className="input input-bordered" required />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Food Categary</span>
                    </label>
                    <input type="text" name="categary" defaultValue={food_category} placeholder="Food Categary" className="input input-bordered" required />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Price</span>
                    </label>
                    <input type="text" defaultValue={price} name="price" placeholder="Price" className="input input-bordered" required />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Quantity</span>
                    </label>
                    <input type="number" defaultValue={quantity} name="quantity" placeholder="Quantity" className="input input-bordered" required />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Food Origin</span>
                    </label>
                    <input type="text" defaultValue={food_origin} name="origin" placeholder="Food Origin" className="input input-bordered" required />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Description</span>
                    </label>
                    <input type="text" defaultValue={description} name="description" placeholder="Description" className="input input-bordered" required />
                  </div>
                  <div className="form-control mt-6 items-center">
                    <button type="submit" className="btn btn-primary">Update Now</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="modal-action">
              <label htmlFor="my_modal_6" className="btn">Close!</label>
            </div>
          </div>
        </div>
      </th>
    </tr>

  )
}

export default MyItem;


import Swal from 'sweetalert2';
import bg from '../assets/image/ricefoo.jpg'
import useAuth from '../hooks/useAuth'
const AddFoodItem = () => {
    const {user} =useAuth();
    const handleAddItem = async (e) =>{
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
        const foodItem={ food_img: photo, food_name:name, food_category:categary, email, price, description, quantity, food_origin:origin

        }
        console.log(foodItem);
        try {
            const res =await fetch('https://assignment-11-server-zeta-blush.vercel.app/allFoodItem', {
                    method: "POST",
                    headers:{
                        "Content-Type":"application/json",
                    },
                    body:JSON.stringify(foodItem)
                });
            const data =await res.json();
            console.log(data);
            if(data.acknowledged){
                Swal.fire({
                    icon: 'success',
                    title: 'Add Product Successful',
                    text: 'You have successfully ADD Product.',
                });
            }
            
        } catch (error) {
            console.log(error);
            
        }
    }
    return (
        <div className="hero bg-base-200" style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '100%',
        }}>
            <div className="">
                <div className="text-center">
                    <h1 className="text-5xl text-white font-bold">Add Food Items!</h1>
                </div>
                <div className="w-[400px] md:w-[1000px] shadow-2xl bg-base-100 bg-opacity-50 rounded-lg">
                    <form onSubmit={handleAddItem} className="card-body grid grid-cols-1 md:grid-cols-2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Food Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
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
                            <input type="text" name="categary" placeholder="Food Categary" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name="price" placeholder="Price" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input type="number" name="quantity" placeholder="Quantity" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Food Origin</span>
                            </label>
                            <input type="text" name="origin" placeholder="Food Origin" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" name="description" placeholder="Description" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6 items-center">
                            <button type="submit" className="btn btn-primary">Add Now</button>
                        </div>


                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddFoodItem

import { Link } from "react-router-dom";


const DetailCard = ({ details }) => {
    const { _id, food_img, food_name, food_category, email, price, description, quantity, food_origin } = details || [];
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={food_img} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{food_name}
                    <div className="badge badge-secondary">{food_category}</div>
                    </h1>
                    <h1>Made By: {email}</h1>
                    <h1>Food Origin: {food_origin}</h1>
                    <p className="py-6">{description}</p>
                    <p className="py-6">Price:${price}</p>
                    <button className="btn btn-primary"><Link to={`/order/${_id}`}>Order Now</Link></button>
                </div>
            </div>
        </div>
    )
}

export default DetailCard

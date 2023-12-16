import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'

const AllFoodCard = ({ food }) => {
    const [clickCount, setClickCount] = useState(0);

    const {_id, food_img, food_name, food_category, user_email, price, description, quantity, food_origin } = food;
    

    const handleDetailsClick = () => {
        setClickCount(clickCount + 1);
    };
    return (
        
        <motion.div
        className="box"
        whileHover={{ scale: [null, 1.5, 1.4] }}
        transition={{ duration: 0.3 }}
      >
            <div className="card h-80 card-side bg-base-100 shadow-xl">
                <figure><img src={food_img} alt="Movie" className='h-full' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{food_name}
                    <div className="badge badge-secondary w-24">{food_category}</div>
                    </h2>
                    
                    <p>Price: {price}$</p>
                    <p>Quantity: {quantity}</p>
                    <p>Count:{clickCount}</p>
                    
                    <div className="card-actions justify-end">
                        <button onClick={handleDetailsClick} className="btn btn-secondary"><Link to={`/details/${_id}`}>Details</Link></button>
                    </div>
                </div>
            </div>
            </motion.div>
        
    )
}

export default AllFoodCard;

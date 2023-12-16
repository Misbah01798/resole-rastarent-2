import {motion} from 'framer-motion'

const FoodSectionCard = ({ food }) => {
    const { food_img, food_name, food_category, price } = food;
    return (
        <motion.div
      className="box"
      whileHover={{ scale: [null, 1.5, 1.4] }}
      transition={{ duration: 0.3 }}
    >
        {/* <div className=" w-[1200px] mx-auto"> */}
            <div className="card w-96 h-96 bg-base-100 shadow-xl">
                <figure className="w-full">
                    <img src={food_img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{food_name}</h2>
                    <p>{food_category}</p>
                    <p>Price: {price}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>
        {/* </div> */}
        </motion.div>
    )
}

export default FoodSectionCard

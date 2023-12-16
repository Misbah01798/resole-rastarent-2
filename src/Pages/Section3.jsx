import img1 from '../assets/image/wed.jpeg'
import img2 from '../assets/image/cat.jpeg'
import img3 from '../assets/image/dinn.png'
import img4 from '../assets/image/birth.png'
import img8 from '../assets/image/sec1.png'
import {motion} from 'framer-motion'


const Section3 = () => {
    return (
        <div className='h-[500px] w-[1200px] mx-auto mb-6'>
            <div className='mx-auto mt-4 mb-4'><h1 className='text-center text-3xl font-bold'>Our Strength</h1>
        <img src={img8} alt="" className='mx-auto' /></div>
            <div className="carousel h-full w-full">
            <motion.div
                    className="box"
                    /**
                     * Setting the initial keyframe to "null" will use
                     * the current value to allow for interruptable keyframes.
                     */
                    whileHover={{ scale: [null, 1.2, 1.1] }}
                    transition={{ duration: 0.3 }}
                >
                <div id="item1" className="carousel-item card w-96 h-56 bg-base-100 shadow-xl">
                    <div className="avatar">
                        <div className="w-full mask mask-hexagon">
                            <img src={img4} />
                        </div>
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">BIRTHDAY</h2>
                        <p>Birthdays are a very special day for everyone who celebrates it. Firstly, it makes the person feel loved when their close one does special things for them</p>
                       
                    </div>
                </div>
                </motion.div>
                <motion.div
                    className="box"
                    /**
                     * Setting the initial keyframe to "null" will use
                     * the current value to allow for interruptable keyframes.
                     */
                    whileHover={{ scale: [null, 1.2, 1.1] }}
                    transition={{ duration: 0.3 }}
                >
                <div id="item2" className="carousel-item card w-96 h-56 bg-base-100 shadow-xl">
                    <div className="avatar">
                        <div className="w-full mask mask-hexagon">
                            <img src={img1} />
                        </div>
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">WEDDING</h2>
                        <p>Birthdays are a very special day for everyone who celebrates it. Firstly, it makes the person feel loved when their close one does special things for them</p>
                       
                    </div>
                </div>
                </motion.div>
                <motion.div
                    className="box"
                    /**
                     * Setting the initial keyframe to "null" will use
                     * the current value to allow for interruptable keyframes.
                     */
                    whileHover={{ scale: [null, 1.2, 1.1] }}
                    transition={{ duration: 0.3 }}
                >
                <div id="item3" className="carousel-item card w-96 h-56 bg-base-100 shadow-xl">
                    <div className="avatar">
                        <div className="w-full mask mask-hexagon">
                            <img src={img2} />
                        </div>
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">CATERING</h2>
                        <p>Birthdays are a very special day for everyone who celebrates it. Firstly, it makes the person feel loved when their close one does special things for them</p>
                       
                    </div>
                </div>
                </motion.div>
                <motion.div
                    className="box"
                    /**
                     * Setting the initial keyframe to "null" will use
                     * the current value to allow for interruptable keyframes.
                     */
                    whileHover={{ scale: [null, 1.2, 1.1] }}
                    transition={{ duration: 0.3 }}
                >
                <div id="item4" className="carousel-item card w-96 h-56 bg-base-100 shadow-xl">
                    <div className="avatar">
                        <div className="w-full mask mask-hexagon">
                            <img src={img3} />
                        </div>
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">BIRTHDAY</h2>
                        <p>Birthdays are a very special day for everyone who celebrates it. Firstly, it makes the person feel loved when their close one does special things for them</p>
                       
                    </div>
                </div>
                </motion.div>
            </div>
          

        </div>
    )
}

export default Section3;

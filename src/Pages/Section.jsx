
import img1 from '../assets/image/bur1.jpeg'
import img2 from '../assets/image/bbq.jpeg'
import img3 from '../assets/image/bkilk.jpg'
import img4 from '../assets/image/download.jpeg'
import img5 from '../assets/image/burger2.jpeg'
import img6 from '../assets/image/ricefoo.jpg'
import img7 from '../assets/image/images.jpeg'
import img8 from '../assets/image/sec1.png'
import {motion} from 'framer-motion'
const Section = () => {
    return (
        <div className='mb-4 w-[1200px] mx-auto'>
            <div className='mx-auto mt-4 mb-4'><h1 className='text-center text-3xl font-bold'>Our Food Gallery</h1>
                <img src={img8} alt="" className='mx-auto' /></div>
            <div className='grid grid-cols-1 md:grid-cols-3 w-[1200px] mx-auto '>
                <motion.div
                    className="box"
                    /**
                     * Setting the initial keyframe to "null" will use
                     * the current value to allow for interruptable keyframes.
                     */
                    whileHover={{ scale: [null, 1.2, 1.1] }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="h-96 w-96 carousel carousel-vertical rounded-box">
                        <div className="carousel-item h-full w-full">
                            <img src={img1} />
                        </div>
                        <div className="carousel-item h-full w-full">
                            <img src={img2} />
                        </div>
                        <div className="carousel-item h-full w-full">
                            <img src={img3} />
                        </div>
                        <div className="carousel-item h-full w-full">
                            <img src={img4} />
                        </div>
                        <div className="carousel-item h-full w-full">
                            <img src={img5} />
                        </div>
                        <div className="carousel-item h-full w-full">
                            <img src={img6} />
                        </div>
                        <div className="carousel-item h-full w-full">
                            <img src={img7} />
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
                    <div className="h-96 w-96 carousel carousel-vertical rounded-box">
                        <div className="carousel-item h-full w-full">
                            <img src={img7} />
                        </div>
                        <div className="carousel-item h-full w-full">
                            <img src={img6} />
                        </div>
                        <div className="carousel-item h-full w-full">
                            <img src={img3} />
                        </div>
                        <div className="carousel-item h-full w-full">
                            <img src={img4} />
                        </div>
                        <div className="carousel-item h-full w-full">
                            <img src={img5} />
                        </div>
                        <div className="carousel-item h-full w-full">
                            <img src={img6} />
                        </div>
                        <div className="carousel-item h-full w-full">
                            <img src={img1} />
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
                    <div className="h-96 w-96 carousel carousel-vertical rounded-box">
                        <div className="carousel-item h-full w-full">
                            <img src={img3} />
                        </div>
                        <div className="carousel-item h-full w-full">
                            <img src={img2} />
                        </div>
                        <div className="carousel-item h-full w-full">
                            <img src={img1} />
                        </div>
                        <div className="carousel-item h-full w-full">
                            <img src={img4} />
                        </div>
                        <div className="carousel-item h-full w-full">
                            <img src={img5} />
                        </div>
                        <div className="carousel-item h-full w-full">
                            <img src={img6} />
                        </div>
                        <div className="carousel-item h-full w-full">
                            <img src={img7} />
                        </div>
                    </div>
                    </motion.div>
            </div>
        </div>
    )
}

export default Section

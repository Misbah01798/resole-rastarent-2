import bbq from '../assets/image/bbq.jpeg'
import bur1 from '../assets/image/bur1.jpeg'
import bur2 from '../assets/image/burger2.jpeg'
import text1 from '../assets/image/ban2text.png'
import text2 from '../assets/image/ban2t2.png'
import text3 from '../assets/image/bantext1.png'
import text4 from '../assets/image/text3.png'
import text5 from '../assets/image/bur1.png'
import text6 from '../assets/image/text4.png'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'


const Banner = () => {
    return (
        <motion.div
         className="box"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    >
        <div className='top-20'>
            <div className='w-[1200px] mx-auto '>
                <div className="carousel relative w-full h-[500px]">
                    <div id="slide1" className="carousel-item  w-full h-full" style={{
                        backgroundImage: `url(${bbq})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        width: '100%',
                        height: '100%',
                    }}>
                        <div className="hero-overlay bg-opacity-0"></div>
                        <div className="hero-content text-center text-neutral-content">
                    
                            <div className="top-48  right-32 block" animate={{ x: 100 }} initial={false}>
                                <img src={text1} alt="" />
                                <button className='btn bg-white p-3 text-xl font-bold'><Link to='/menu'>Details</Link></button>
                                
                                <div>
                                    <img src={text2} alt="" className='w-32 h-32' />
                                </div>
                            </div>

                        </div>
                        <div className=" flex absolute justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full h-full" style={{
                        backgroundImage: `url(${bur1})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        width: '100%',
                        height: '100%',
                    }}>
                        <div className="hero-overlay bg-opacity-0"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className=" items-center mr-80">
                                <img src={text3} alt="" />



                                <img src={text4} alt="" className='w-32 h-32' />
                                <button className='btn bg-white p-3 text-xl font-bold'><Link to='/menu'>Details</Link></button>
                            </div>
                        </div>
                        <div className=" flex absolute justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full h-full" style={{
                        backgroundImage: `url(${bur2})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        width: '100%',
                        height: '100%',
                    }}>
                        <div className="hero-overlay bg-opacity-0"></div>
                        <div className="">
                            <div className=" flex justify-between">
                                <img src={text5} alt="" className='' />
                                <button className='btn bg-white p-3 text-xl font-bold'><Link to='/menu'>Details</Link></button>

                            </div>
                        </div>
                        <div className=" flex absolute justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full h-full" style={{
                        backgroundImage: `url(${bbq})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        width: '100%',
                        height: '100%',
                    }}>
                        <div className="hero-overlay bg-opacity-0"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="">
                                <img src={text1} alt="" />
                                <button className='btn bg-white p-3 text-xl font-bold'><Link to='/menu'>Details</Link></button>

                                <div>
                                    <img src={text2} alt="" className='w-32 h-32' />
                                </div>
                            </div>
                        </div>
                        <div className=" flex absolute justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </motion.div>
    )
}

export default Banner

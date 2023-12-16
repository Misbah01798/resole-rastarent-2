import { Link } from 'react-router-dom';
import error from '../assets/image/error.jpg';
import Navber from '../Pages/Navber';

const Error = () => {
  return (
    <div className='relative mx-auto w-[1200px]'>
      <Navber></Navber>
      <img src={error} alt="" />
      <div className='absolute'><Link to='/'><button className='btn btn-secondary'>Go Home</button></Link></div>
    </div>
  )
}

export default Error

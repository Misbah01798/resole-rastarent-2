import propTypes from 'prop-types'
import { NavLink } from 'react-router-dom';
import Navber from './Navber';
import Sideber from './Sideber';
import Footer from '../Components/Footer';

const MainLayout = ({children}) => {
    return (
        
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className='sticky top-4 bottom-6 left-20'> <Navber ></Navber></div>
                    {/* Page content here */}
                    {children}
                    <div className='bottom-0'><Footer></Footer></div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <Sideber></Sideber>
                </div>
            </div>

        
    )
};
MainLayout.propTypes ={
    children: propTypes.node,
}

export default MainLayout

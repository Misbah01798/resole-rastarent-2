import { NavLink } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import logo from '../assets/icon/Borcelle.png'


const Navber = () => {
    const { user, logOut } = useAuth();
    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.5
          }
        }
      }
      
      const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
      }
    return (
        
        <div className="   w-[1200px] mx-auto justify-center">
            
            <div className="w-full navbar bg-black h-20 rounded-full">
            <div className="flex-none lg:hidden">
                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
            </div>
            <div className="avatar flex-1 ">
            <div className=" w-16 rounded-full"><img src={logo} alt="" /></div>
            </div>
            <div className="flex-none hidden lg:block top-4">
                <ul className="menu mt-12 menu-horizontal text-white">
                    {/* Navbar menu content here */}
                    <NavLink to='/' className={({ isActive }) => isActive ? 'btn top-4 btn-sm' : 'btn top-4 btn-ghost btn-sm'}>Home</NavLink>
                    <NavLink to='/allfood' className={({ isActive }) => isActive ? 'btn btn-sm' : 'btn btn-ghost btn-sm'}>All Food Items</NavLink>
                    <NavLink to='/blog' className={({ isActive }) => isActive ? 'btn btn-sm' : 'btn btn-ghost btn-sm'}>Blog</NavLink>
                    <NavLink to='/register' className={({ isActive }) => isActive ? 'btn btn-sm' : 'btn btn-ghost btn-sm'}>Register</NavLink>
                    {
                        user?.email ? <> <div className="flex-col">
                            <div className="mb-6">
                                <ul className="menu menu-horizontal px-1">
                                    <li><a className="btn btn-ghost btn-sm" onClick={logOut}>Log Out</a></li>
                                   
                                    <li className="">
                                        <details>
                                            <summary>
                                                <div className="flex">
                                                    <label tabIndex={0} className=" btn btn-ghost btn-circle avatar">
                                                        <div className="w-16 rounded-full">
                                                            <img src={user.photoURL} />
                                                        </div>
                                                    </label>
                                                </div>
                                            </summary>
                                            <ul className="p-2 w-48 bg-black">
                                                <li><p className="p-4 font-bold">{user.displayName}</p></li>
                                                <li><NavLink to='/addFoodItem'>Add Food Items</NavLink></li>
                                                <li><NavLink to='/myFood'>My Added Food Items</NavLink></li>
                                                <li><NavLink to='/myOrder'>My Ordered Food Items</NavLink></li>
                                            </ul>
                                        </details>
                                    </li>
                                    {/* <li><p className="p-4 text-white font-bold">{user.displayName}</p></li> */}
                                </ul>
                            </div>
                        </div></> :
                            <NavLink to='/login' className={({ isActive }) => isActive ? 'btn btn-sm' : 'btn btn-ghost btn-sm'}>Login</NavLink>

                    }

                    

                </ul>
            </div>
        </div>
        </div>
        
    )
}

export default Navber

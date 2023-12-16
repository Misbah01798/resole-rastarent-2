import { NavLink } from "react-router-dom"
import useAuth from "../hooks/useAuth"


const Sideber = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="menu p-4 w-48 min-h-full bg-base-200 block">
            {/* Sidebar content here */}
            <NavLink to='/' className={({ isActive }) => isActive ? 'btn btn-sm' : 'btn btn-ghost btn-sm'}>Home</NavLink>
            <NavLink to='/allfood' className={({ isActive }) => isActive ? 'btn btn-sm' : 'btn btn-ghost btn-sm'}>All Food Items</NavLink>
            <NavLink to='/blog' className={({ isActive }) => isActive ? 'btn btn-sm' : 'btn btn-ghost btn-sm'}>Blog</NavLink>
            {
                user?.email ? <div className="flex-col">
                    <div className="flex-none">
                        <ul className="menu menu-horizontal px-1">
                            <li><a className="btn btn-ghost btn-sm" onClick={logOut}>Log Out</a></li>

                            <li className="mb-4">
                                <details>
                                    <summary>
                                        <div className="flex">
                                            <label tabIndex={0} className=" btn btn-ghost btn-circle avatar">
                                                <div className="w-10 rounded-full">
                                                    <img src={user.photoURL} />
                                                </div>
                                            </label>
                                        </div>
                                    </summary>
                                    <ul className="p-2 bg-base-100">
                                        <li><p className="p-4 text-white font-bold">{user.displayName}</p></li>
                                        <li><NavLink to='/addFoodItem'>Add Food Items</NavLink></li>
                                        <li><NavLink to='/myFood'>My Added Food Items</NavLink></li>
                                        <li><NavLink to='/myOrder'>My Ordered Food Items</NavLink></li>
                                    </ul>
                                </details>
                            </li>
                            {/* <li><p className="p-4 text-white font-bold">{user.displayName}</p></li> */}
                        </ul>
                    </div>
                </div> :
                    <NavLink to='/login' className={({ isActive }) => isActive ? 'btn btn-sm' : 'btn btn-ghost btn-sm'}>Login</NavLink>

            }

            <NavLink to='/register' className={({ isActive }) => isActive ? 'btn btn-sm' : 'btn btn-ghost btn-sm'}>Register</NavLink>
        </div>
    )
}

export default Sideber

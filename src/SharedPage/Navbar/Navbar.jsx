
import { Link,NavLink } from "react-router-dom";

const NavBar = () => {

    const handleLogOut = () => {
    }

    const navOptions = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/menu">Our Menu</NavLink></li>
        <li><NavLink to="/order/salad">Order Food</NavLink></li>

        <li><NavLink to="/dashboard/adminhome">Dashboard</NavLink></li>
        <li><NavLink to="/dashboard/userhome">Dashboard</NavLink></li>
        <li>
            <NavLink to="/dashboard/mycart">
                <button className="">
                    <div className="badge badge-secondary">+</div>
                </button>
            </NavLink>
        </li>
        <li><NavLink onClick={handleLogOut} className="">LogOut</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>

    </>

    return (
        <>
            <div className="navbar text-white bg-blend-overlay bg-gradient-to-r from-[#00000097] via-[#00000097] to-[#00000097] container mx-auto fixed z-10 bg-opacity-30 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 text-black dark:text-white rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Food Terminal</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-sm">Get started</a>
                </div>
            </div>
        </>
    );
};

export default NavBar;
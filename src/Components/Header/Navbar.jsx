import React from 'react';
import { FaCartArrowDown, FaUser } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom'; // Correct import
import logo from '../../assets/assets/logo.png';
import { useAuth } from '../../ContextProvider/AuthContext';
import { FiLogOut } from "react-icons/fi";

import { MdSpaceDashboard } from 'react-icons/md';
import { FaGear } from 'react-icons/fa6';

const Navbar = () => {
    const { currentUser, logout } = useAuth(); // Use correct context values

    // Links for navigation
    const links = (
        <>
            <li className="uppercase font-semibold"><NavLink to="/">Home</NavLink></li>
            <li className="uppercase font-semibold"><NavLink to="/about">About</NavLink></li>
            <li className="uppercase font-semibold"><NavLink to="/contact">Contact</NavLink></li>
            <li className="uppercase font-semibold"><NavLink to="/menu">Our Menu</NavLink></li>
            <li className="uppercase font-semibold"><NavLink to="/shop">Our Shop</NavLink></li>
            <li className="uppercase font-semibold">
                <NavLink to="/dashboard">
                    <FaCartArrowDown />
                    <div className="badge badge-warning">+99</div>
                </NavLink>
            </li>
        </>
    );

    return (
        <div className="navbar bg-black text-white fixed z-10 max-w-[90%] mx-auto bg-opacity-80">
            {/* Navbar Start */}
            <div className="navbar-start">
                <div className="dropdown">
                    <button
                        tabIndex={0}
                        className="btn btn-ghost lg:hidden"
                        aria-label="Open navigation menu">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </button>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-black text-white rounded-box z-[1] mt-3 w-52 p-2 shadow opacity-80">
                        {links}
                    </ul>
                </div>
                <Link to="/" className="hidden md:block">
                    <p className="uppercase md:text-2xl font-bold">Bistro Boss</p>
                    <p className="uppercase text-sm">R e s t a u r a n t</p>
                </Link>
                <Link to="/" className="md:hidden block">
                    <img className="w-10" src={logo} alt="Logo" />
                </Link>
            </div>

            {/* Navbar Center */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{links}</ul>
            </div>

            {/* Navbar End */}
            <div className="navbar-end">
                {currentUser ? (
                    <div className="dropdown dropdown-end">
                        <button className="btn btn-ghost avatar" tabIndex={0}>
                            <div className="w-10 rounded-full">
                                <img src={currentUser.photoURL || "https://via.placeholder.com/40"} alt="User Avatar" />
                            </div>
                        </button>
                        <ul
                            tabIndex={0}
                            className="menu dropdown-content bg-orange-400 text-black rounded-box  w-52 p-2 shadow min-h-64 z-20">
                            <li><a href="#"><FaUser></FaUser> Profile</a></li>
                            <li>
                                <button ><MdSpaceDashboard></MdSpaceDashboard> Dashboard</button>
                            </li>
                            <li>
                                <button > <FaGear></FaGear> Settings</button>
                            </li>
                            <li className='mt-32'>
                                <button className='text-red-900 font-bold' onClick={logout}><FiLogOut></FiLogOut> Logout</button>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <Link to="/login">
                        <button className="uppercase font-bold text-orange-400 btn btn-outline">Log In</button>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;

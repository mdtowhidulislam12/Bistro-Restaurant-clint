import React from 'react';
import { FaCartArrowDown } from 'react-icons/fa';
import { Link, NavLink } from 'react-router';

const Navbar = () => {


    const links = (<>
        <li className='uppercase font-semibold'><NavLink to={'/'}>Home</NavLink></li>
        <li className='uppercase font-semibold'><NavLink to={'/about'}>About</NavLink></li>
        <li className='uppercase font-semibold'><NavLink to={'/contact'}>Contact</NavLink></li>
        <li className='uppercase font-semibold'><NavLink to={'/menu'}>Our Menu</NavLink></li>
        <li className='uppercase font-semibold'><NavLink to={'/shop'}>Our Shop</NavLink></li>
        <li className='uppercase font-semibold'><NavLink to={'/dashboard'}><FaCartArrowDown></FaCartArrowDown>
            <div className='badge badge-warning'>+99</div>
        </NavLink></li>

    </>)
    return (
        
            <div className="navbar bg-black text-white fixed z-10 max-w-[90%] mx-auto opacity-80">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-black text-white rounded-box z-[1] mt-3 w-52 p-2 shadow opacity-80">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <Link to={'/'} className="">
                        <p className='uppercase md:text-2xl font-bold'>Bistro Boss</p>
                        <p className='uppercase text-sm '>R e s t a u r a n t</p>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to={'/login'}><button className='uppercase font-bold text-orange-400 btn btn-outline'>log in</button></Link>
                </div>
            </div>
        
    );
};

export default Navbar;
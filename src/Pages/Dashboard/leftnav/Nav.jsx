import React from 'react';
import { FaHome, FaList, FaListAlt, FaUtensils } from 'react-icons/fa';
import { Link } from 'react-router';

const Nav = () => {
    return (
        <div>
           


            <ul className="menu bg-orange-400 min-h-screen w-56">
                <li><Link to={'/'}><FaHome></FaHome> Home</Link></li>
                <li><Link to={'/menus'}><FaListAlt></FaListAlt> Menu</Link></li>
                <li><Link to={'/dashboard/addmenuitem'}><FaUtensils></FaUtensils> Add Items</Link></li>
               
            </ul>
        </div>
    );
};

export default Nav;
import React from 'react';
import { Link, Outlet } from 'react-router';
import logo from '../../assets/assets/logo.png';
import Nav from './leftnav/Nav';

const Dashboard = () => {
    return (
        <div>

            <div className='bg-orange-400 p-6'>
            <Link to="/" className="hidden md:block">
                    <p className="uppercase md:text-2xl font-bold">Bistro Boss</p>
                    <p className="uppercase text-sm">R e s t a u r a n t</p>
                </Link>
                <Link to="/" className="md:hidden block">
                    <img className="w-10" src={logo} alt="Logo" />
                </Link>
            </div>

            <div className='flex flex-row gap-8'>

                {/* nav */}

                <div><Nav></Nav></div>

                {/* outlet */}

                <div>


                    <Outlet></Outlet>
                </div>


            </div>
        </div>
    );
};

export default Dashboard;
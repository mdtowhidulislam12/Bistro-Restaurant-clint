import React from 'react';
import { Link } from 'react-router';
import error from '/notfound.json'
import Lottie from 'lottie-react';

const Error = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            ERROR 404! page not found 
            <br />
            <div className='max-w-lg'>
            <Lottie loop={true} animationData={error}></Lottie>
            </div>
            
            <div className='p-10 btn bg-orange-400'>
            <Link to={'/'}>Go to home</Link>
            </div>
        </div>
    );
};

export default Error;
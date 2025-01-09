import React from 'react';

const Headding = ({ title, subtitle }) => {
    return (
        <div className='flex justify-center items-center my-10 '>
            <div className='text-center max-w-96'>
                <p className='text-orange-300'>---{subtitle}---</p>

                <div className="divider divide-error-content"></div>

                <h2 className='text-2xl font-semibold uppercase'>{title}</h2>
                <div className="divider divide-error-content"></div>
            </div>
        </div>
    );
};

export default Headding;
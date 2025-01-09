import React from 'react';

const Carts = ({ img,title,description}) => {
    return (
        <div className='mb-20'>
            <div className="card bg-base-100 w-full shadow-xl">
                <figure>
                    <img
                        className='h-40'
                        src={img}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{description}</p>
                    <div className="card-actions justify-center mt-10">
                        <button className='btn border-orange-400 border-b-4 uppercase'>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carts;
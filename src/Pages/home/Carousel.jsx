import React from 'react';
import slide1 from '../../../src/assets/assets/home/slide1.jpg';
import slide2 from '../../../src/assets/assets/home/slide2.jpg';
import slide3 from '../../../src/assets/assets/home/slide3.jpg';
import slide4 from '../../../src/assets/assets/home/slide4.jpg';
import slide5 from '../../../src/assets/assets/home/slide5.jpg';

const Carousel = () => {
    return (
        <div className=" relative carousel carousel-end rounded-box space-x-4">
            <div className="carousel-item">
                <img src={slide1} alt="Drink" />
                <h2 className='uppercase text-2xl z-10 absolute top-3/4 left-20 text-gray-700 font-semibold'>salads</h2>
            </div>
            <div className="relative carousel-item">
                <img src={slide2} alt="Drink" />
                <h2 className='uppercase text-2xl z-10 absolute top-3/4 left-20 text-gray-700 font-semibold'>pizzas</h2>
            </div>
            <div className="relative carousel-item">
            <img src={slide3} alt="Drink" />
            <h2 className='uppercase text-2xl z-10 absolute top-3/4 left-20 text-gray-700 font-semibold'>soups</h2>
            </div>
            <div className="relative carousel-item">
            <img src={slide4} alt="Drink" />
            <h2 className='uppercase text-2xl z-10 absolute top-3/4 left-20 text-gray-700 font-semibold'>desarts</h2>
            </div>
            <div className="relative carousel-item">
            <img src={slide5} alt="Drink" />
            <h2 className='uppercase text-2xl z-10 absolute top-3/4 left-20 text-gray-700 font-semibold'>drinks</h2>
            </div>
            <div className="relative carousel-item">
            <img src={slide5} alt="Drink" />
            <h2 className='uppercase text-2xl z-10 absolute top-3/4 left-20 text-gray-700 font-semibold'>drinks</h2>
            </div>
            <div className="relative carousel-item">
            <img src={slide5} alt="Drink" />
            <h2 className='uppercase text-2xl z-10 absolute top-3/4 left-20 text-gray-700 font-semibold'>drinks</h2>
            </div>
            <div className="relative carousel-item">
            <img src={slide5} alt="Drink" />
            <h2 className='uppercase text-2xl z-10 absolute top-3/4 left-20 text-gray-700 font-semibold'>drinks</h2>
            </div>
            <div className="relative carousel-item">
            <img src={slide5} alt="Drink" />
            <h2 className='uppercase text-2xl z-10 absolute top-3/4 left-20 text-gray-700 font-semibold'>drinks</h2>
            </div>
            <div className="relative carousel-item">
            <img src={slide5} alt="Drink" />
            <h2 className='uppercase text-2xl z-10 absolute top-3/4 left-20 text-gray-700 font-semibold'>drinks</h2>
            </div>
            <div className="relative carousel-item">
            <img src={slide5} alt="Drink" />
            <h2 className='uppercase text-2xl z-10 absolute top-3/4 left-20 text-gray-700 font-semibold'>drinks</h2>
            </div>
            
        </div>
    );
};

export default Carousel;
import React from 'react';
import image from '../../assets/assets/home/featured.jpg'

const BannerContent = () => {
    return (
        <div className='relative'>
            <div>
                <img className='hidden md:block opacity-70' src={image} alt="" />
            </div>
            <div className='md:flex justify-center items-center gap-6 md:absolute top-[40%] left-[16%] max-w-3xl'>
                <div>
                    <img src={image} alt="" />
                </div>
                <div>
                    <p className='text-black pt-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, sit sed officia quos harum, exercitationem obcaecati velit in assumenda nihil voluptates molestiae temporibus placeat. A asperiores temporibus ab iste libero.</p>
                    <div className='text-center py-6'>
                        <button className='btn border bg-black text-white border-orange-100 border-b-4 uppercase '>read more</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerContent;
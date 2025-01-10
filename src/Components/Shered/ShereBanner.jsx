import React from 'react';

const ShereBanner = ({ img, title, subtitle }) => {
    return (
         <div className='relative mb-10'>
             <img className='w-full' src={img} alt="" />
             <div className='bg-black bg-opacity-70 ml-16 z-10 -mt-28 p-4 md:py-16 md:px-32 absolute space-y-5  md:-mt-[40%] md:ml-[30%]'>
                 <h2 className='uppercase md:text-3xl font-bold text-center text-white '>{title}</h2>
                 <p className='uppercase text-center text-sm text-orange-400'>{subtitle}</p>
             </div>
         </div>

        // <div
        //     className=" min-h-screen relative">
        //         <img src={img} alt="" />
        //     <div className="hero-overlay "></div>
        //     <div className="hero-content text-neutral-content text-center absolute z-10">
        //         <div className=" bg-black bg-opacity-50 md:px-52 p-5 md:mt-[20%] mt-20">
        //             <h1 className="mb-5 text-5xl font-bold uppercase ">{title}</h1>
        //             <p className="mb-5 uppercase text-orange-400">
        //                {subtitle}
        //             </p>
                    
        //         </div>
        //     </div>
        // </div>
    );
};

export default ShereBanner;
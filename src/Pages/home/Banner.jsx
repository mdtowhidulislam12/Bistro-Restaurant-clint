import React from 'react';
import banner from '../../assets/assets/home/banner.jpg'

const Banner = () => {
    return (
        <div className="relative indicator w-full py-20">
            <span className="absolute p-5 text-center top-80 bg-slate-100  text-black max-w-2xl ml-[20%]">
                <h2 className='text-3xl font-mono uppercase font-bold'>Bistro Boss</h2>
                <br />
                <p className=' w-full hidden md:block'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad exercitationem, fuga natus optio obcaecati sint nam, minus recusandae adipisci at pariatur mollitia delectus voluptas dicta magni labore aliquid, commodi aliquam?</p>
            </span>
            <img className='w-full'
                alt="Tailwind CSS examples"
                src={banner} />
        </div>
    );
};

export default Banner;
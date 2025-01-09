import React from 'react';
import Headding from '../../Components/Shered/Headding';
import img from '../../assets/assets/menu/pizza-bg.jpg'

const Menu = () => {
    return (
        <div className=''>
            <Headding title={'From Our Menu'} subtitle={'Check it Out'}></Headding>
            <div className='grid md:grid-cols-2 md:gap-6'>
                <div className='flex items-center gap-5 py-5'>
                    <div>
                        <img className='w-20 h-16 rounded-tr-3xl rounded-b-3xl' src={img} alt="logo" />
                    </div>
                    <div>
                        <div className='flex items-center justify-between'>
                            <div><h2 className='uppercase text-2xl'>Roast duck breast</h2></div>
                            <div><span className='text-orange-400 font-semibold'>$12.5</span></div>
                        </div>
                        <div>
                            <p>Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce</p>
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-5 py-5'>
                    <div>
                        <img className='w-20 h-16 rounded-tr-3xl rounded-b-3xl' src={img} alt="logo" />
                    </div>
                    <div>
                        <div className='flex items-center justify-between'>
                            <div><h2 className='uppercase text-2xl'>Roast duck breast</h2></div>
                            <div><span className='text-orange-400 font-semibold'>$12.5</span></div>
                        </div>
                        <div>
                            <p>Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce</p>
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-5 py-5'>
                    <div>
                        <img className='w-20 h-16 rounded-tr-3xl rounded-b-3xl' src={img} alt="logo" />
                    </div>
                    <div>
                        <div className='flex items-center justify-between'>
                            <div><h2 className='uppercase text-2xl'>Roast duck breast</h2></div>
                            <div><span className='text-orange-400 font-semibold'>$12.5</span></div>
                        </div>
                        <div>
                            <p>Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce</p>
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-5 py-5'>
                    <div>
                        <img className='w-20 h-16 rounded-tr-3xl rounded-b-3xl' src={img} alt="logo" />
                    </div>
                    <div>
                        <div className='flex items-center justify-between'>
                            <div><h2 className='uppercase text-2xl'>Roast duck breast</h2></div>
                            <div><span className='text-orange-400 font-semibold'>$12.5</span></div>
                        </div>
                        <div>
                            <p>Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce</p>
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-5 py-5'>
                    <div>
                        <img className='w-20 h-16 rounded-tr-3xl rounded-b-3xl' src={img} alt="logo" />
                    </div>
                    <div>
                        <div className='flex items-center justify-between'>
                            <div><h2 className='uppercase text-2xl'>Roast duck breast</h2></div>
                            <div><span className='text-orange-400 font-semibold'>$12.5</span></div>
                        </div>
                        <div>
                            <p>Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce</p>
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-5 py-5'>
                    <div>
                        <img className='w-20 h-16 rounded-tr-3xl rounded-b-3xl' src={img} alt="logo" />
                    </div>
                    <div>
                        <div className='flex items-center justify-between'>
                            <div><h2 className='uppercase text-2xl'>Roast duck breast</h2></div>
                            <div><span className='text-orange-400 font-semibold'>$12.5</span></div>
                        </div>
                        <div>
                            <p>Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce</p>
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-5 py-5'>
                    <div>
                        <img className='w-20 h-16 rounded-tr-3xl rounded-b-3xl' src={img} alt="logo" />
                    </div>
                    <div>
                        <div className='flex items-center justify-between'>
                            <div><h2 className='uppercase text-2xl'>Roast duck breast</h2></div>
                            <div><span className='text-orange-400 font-semibold'>$12.5</span></div>
                        </div>
                        <div>
                            <p>Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce</p>
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-5 py-5'>
                    <div>
                        <img className='w-20 h-16 rounded-tr-3xl rounded-b-3xl' src={img} alt="logo" />
                    </div>
                    <div>
                        <div className='flex items-center justify-between'>
                            <div><h2 className='uppercase text-2xl'>Roast duck breast</h2></div>
                            <div><span className='text-orange-400 font-semibold'>$12.5</span></div>
                        </div>
                        <div>
                            <p>Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce</p>
                        </div>
                    </div>
                </div>
                
            </div>

           <div className='text-center mb-10'>
           <button className='btn border-slate-900 border-b-2 uppercase'>view full menu</button>
           </div>
        </div>
    );
};

export default Menu;
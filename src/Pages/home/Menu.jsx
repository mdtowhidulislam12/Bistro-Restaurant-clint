// import React, { useState } from 'react';
// import Headding from '../../Components/Shered/Headding';
// import img from '../../assets/assets/menu/pizza-bg.jpg'
// import { useAuth } from '../../ContextProvider/AuthContext';
// import axios from 'axios';

// const Menu = () => {

//     const {data} = useAuth();
//     const [menu,setMenu] = useState(null);

//     const menuData = async ()=>{

//         try {
//            const result = await axios.get(`${data}/menu`) ;
//            console.log(result.data)
//            setMenu(result.data)
//         } catch (error) {
//             console.error(error.message);
//         }
//     }



//     return (
//         <div className=''>
//             <Headding title={'From Our Menu'} subtitle={'Check it Out'}></Headding>
//             <div className='grid md:grid-cols-2 md:gap-6'>
//                 <div className='flex items-center gap-5 py-5'>
//                     <div>
//                         <img className='w-20 h-16 rounded-tr-3xl rounded-b-3xl' src={img} alt="logo" />
//                     </div>
//                     <div>
//                         <div className='flex items-center justify-between'>
//                             <div><h2 className='uppercase text-2xl'>Roast duck breast {menu.length}</h2></div>
//                             <div><span className='text-orange-400 font-semibold'>$12.5</span></div>
//                         </div>
//                         <div>
//                             <p>Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='flex items-center gap-5 py-5'>
//                     <div>
//                         <img className='w-20 h-16 rounded-tr-3xl rounded-b-3xl' src={img} alt="logo" />
//                     </div>
//                     <div>
//                         <div className='flex items-center justify-between'>
//                             <div><h2 className='uppercase text-2xl'>Roast duck breast</h2></div>
//                             <div><span className='text-orange-400 font-semibold'>$12.5</span></div>
//                         </div>
//                         <div>
//                             <p>Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='flex items-center gap-5 py-5'>
//                     <div>
//                         <img className='w-20 h-16 rounded-tr-3xl rounded-b-3xl' src={img} alt="logo" />
//                     </div>
//                     <div>
//                         <div className='flex items-center justify-between'>
//                             <div><h2 className='uppercase text-2xl'>Roast duck breast</h2></div>
//                             <div><span className='text-orange-400 font-semibold'>$12.5</span></div>
//                         </div>
//                         <div>
//                             <p>Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='flex items-center gap-5 py-5'>
//                     <div>
//                         <img className='w-20 h-16 rounded-tr-3xl rounded-b-3xl' src={img} alt="logo" />
//                     </div>
//                     <div>
//                         <div className='flex items-center justify-between'>
//                             <div><h2 className='uppercase text-2xl'>Roast duck breast</h2></div>
//                             <div><span className='text-orange-400 font-semibold'>$12.5</span></div>
//                         </div>
//                         <div>
//                             <p>Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='flex items-center gap-5 py-5'>
//                     <div>
//                         <img className='w-20 h-16 rounded-tr-3xl rounded-b-3xl' src={img} alt="logo" />
//                     </div>
//                     <div>
//                         <div className='flex items-center justify-between'>
//                             <div><h2 className='uppercase text-2xl'>Roast duck breast</h2></div>
//                             <div><span className='text-orange-400 font-semibold'>$12.5</span></div>
//                         </div>
//                         <div>
//                             <p>Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='flex items-center gap-5 py-5'>
//                     <div>
//                         <img className='w-20 h-16 rounded-tr-3xl rounded-b-3xl' src={img} alt="logo" />
//                     </div>
//                     <div>
//                         <div className='flex items-center justify-between'>
//                             <div><h2 className='uppercase text-2xl'>Roast duck breast</h2></div>
//                             <div><span className='text-orange-400 font-semibold'>$12.5</span></div>
//                         </div>
//                         <div>
//                             <p>Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='flex items-center gap-5 py-5'>
//                     <div>
//                         <img className='w-20 h-16 rounded-tr-3xl rounded-b-3xl' src={img} alt="logo" />
//                     </div>
//                     <div>
//                         <div className='flex items-center justify-between'>
//                             <div><h2 className='uppercase text-2xl'>Roast duck breast</h2></div>
//                             <div><span className='text-orange-400 font-semibold'>$12.5</span></div>
//                         </div>
//                         <div>
//                             <p>Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='flex items-center gap-5 py-5'>
//                     <div>
//                         <img className='w-20 h-16 rounded-tr-3xl rounded-b-3xl' src={img} alt="logo" />
//                     </div>
//                     <div>
//                         <div className='flex items-center justify-between'>
//                             <div><h2 className='uppercase text-2xl'>Roast duck breast</h2></div>
//                             <div><span className='text-orange-400 font-semibold'>$12.5</span></div>
//                         </div>
//                         <div>
//                             <p>Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce</p>
//                         </div>
//                     </div>
//                 </div>
                
//             </div>

//            <div className='text-center mb-10'>
//            <button className='btn border-slate-900 border-b-2 uppercase'>view full menu</button>
//            </div>
//         </div>
//     );
// };

// export default Menu;
import React, { useState, useEffect } from 'react';
import Headding from '../../Components/Shered/Headding';
import img from '../../assets/assets/menu/pizza-bg.jpg';
import axios from 'axios';  // Import axios for making API requests

const Menu = () => {
    const [menu, setMenu] = useState([]);  // State to store menu items
    const [loading, setLoading] = useState(true);  // Loading state for API call
    const [error, setError] = useState(null);  // Error state for API call

    // Fetch menu data
    const menuData = async () => {
        try {
            // Replace with your correct API URL
            const result = await axios.get('http://localhost:5000/menu');  // Fetch menu data from your API
            setMenu(result.data);  // Set the menu data into the state
            setLoading(false);  // Set loading state to false once data is fetched
        } catch (error) {
            setError('Error fetching menu data');  // If error occurs, set the error message
            setLoading(false);  // Set loading state to false even on error
        }
    };

    // Fetch menu data when component mounts
    useEffect(() => {
        menuData();  // Fetch the menu data when the component mounts
    }, []);  // Empty dependency array ensures this runs only once

    if (loading) {
        return <div>Loading menu...</div>;  // Display loading state while fetching data
    }

    if (error) {
        return <div>{error}</div>;  // Display error message if API call fails
    }

    return (
        <div className="">
            <Headding title={'From Our Menu'} subtitle={'Check it Out'}></Headding>
            <div className="grid md:grid-cols-2 md:gap-6 w-full">
                {menu.length === 0 ? (
                    <div>No menu items available.</div>  // Handle the case where no menu items are found
                ) : (
                    menu.map((item, index) => (
                        <div className="flex items-center gap-6 py-5 " key={index}>
                            <div>
                                <img
                                    className="w-20 h-16 rounded-tr-3xl rounded-b-3xl"
                                    src={item.image || img}  // Use dynamic image or fallback image
                                    alt={item.name}  // Descriptive alt text for images
                                />
                            </div>
                            <div>
                                <div className="flex items-center justify-between">
                                    <div><h2 className="uppercase text-2xl">{item.name}</h2></div>
                                    <div><span className="text-orange-400 font-semibold">${item.price}</span></div>
                                </div>
                                <div>
                                    <p>{item.description}</p>  // Description of the menu item
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            <div className="text-center mb-10">
                <button className="btn border-slate-900 border-b-2 uppercase">View full menu</button>
            </div>
        </div>
    );
};

export default Menu;

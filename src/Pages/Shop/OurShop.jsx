import React from 'react';
import ShereBanner from '../../Components/Shered/ShereBanner';
import BgImage from '../../assets/assets/shop/banner2.jpg'

const OurShop = () => {
    return (
        <div>
            <ShereBanner img={BgImage} title={'Our Shop'} subtitle={'Would you try for a dish?'}></ShereBanner>
        </div>
    );
};

export default OurShop;
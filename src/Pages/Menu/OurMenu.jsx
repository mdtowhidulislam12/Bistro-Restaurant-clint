import React from 'react';
import ShereBanner from '../../Components/Shered/ShereBanner';
import BgImage from '../../assets/assets/menu/banner3.jpg'

const OurMenu = () => {
    return (
        <div>
            <ShereBanner img={BgImage} title={"Our Menu"} subtitle={'Would you like to try a dish?'} ></ShereBanner>
        </div>
    );
};

export default OurMenu;
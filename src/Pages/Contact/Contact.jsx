import React from 'react';
import ShereBanner from '../../Components/Shered/ShereBanner';
import BgImage from '../../assets/assets/menu/pizza-bg.jpg'

const Contact = () => {
    return (
        <div>
            <ShereBanner img={BgImage} title={'contact us'} subtitle={'would you like to try a dish?'}></ShereBanner>
        </div>
    );
};

export default Contact;
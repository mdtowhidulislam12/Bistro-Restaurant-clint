import React from 'react';
import BgImage from '../../assets/assets/menu/dessert-bg.jpeg'
import ShereBanner from '../../Components/Shered/ShereBanner';

const About = () => {
    return (
        <div>
            <ShereBanner img={BgImage} title={'About us'} subtitle={'scrol down to know about us'}></ShereBanner>
        </div>
    );
};

export default About;
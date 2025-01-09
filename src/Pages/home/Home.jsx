import React from 'react';
import CarouselBanner from '../../Components/Carousel/Carousel';
import Headding from '../../Components/Shered/Headding';
import Carousel from './Carousel';
import Banner from './Banner';
import Menu from './Menu';
import Call from './Call';
import Carts from '../../Components/Shered/Carts';
import img from '../../assets/assets/home/chef-service.jpg'
import BannerContent from './BannerContent';

const Home = () => {
    return (
        <div className='pt-16 md:pt-0'>
            <CarouselBanner></CarouselBanner>

            <Headding title={'Order online'} subtitle={'11:00am to 10:00pm'}></Headding>

            <Carousel></Carousel>

            <Banner></Banner>

            <Menu></Menu>

            <Call></Call>

            <Headding title={'chef recomends'} subtitle={'Should try'}></Headding>

            <div className='grid md:grid-cols-3 gap-5'>
                <Carts img={img} title={'casear salad'} description={'Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.'}></Carts>
                <Carts img={img} title={'casear salad'} description={'Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.'}></Carts>
                <Carts img={img} title={'casear salad'} description={'Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.'}></Carts>
            </div>

            <div>
                <Headding title={'From Our menu'} subtitle={'Check it Out'}></Headding>
                <BannerContent></BannerContent>
            </div>
        </div>

        
    );
};

export default Home;
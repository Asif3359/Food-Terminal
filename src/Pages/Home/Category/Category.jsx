import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import category1 from "../../../assets/assets/home/slide1.jpg"
import category2 from "../../../assets/assets/home/slide2.jpg"
import category3 from "../../../assets/assets/home/slide3.jpg"
import category4 from "../../../assets/assets/home/slide4.jpg"
import category5 from "../../../assets/assets/home/slide5.jpg"
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <section className='my-10'>
            <SectionTitle
                subHeading="---From 11:00am to 10:00pm---"
                heading="ORDER ONLINE"
            ></SectionTitle>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper my-10"
            >
                <SwiperSlide>
                    <img src={category1} className='w-full' alt="" />
                    <h1 className='text-4xl text-center -mt-16 pb-3 uppercase text-white'>Salads</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={category2} className='w-full' alt="" />
                    <h1 className='text-4xl text-center -mt-16 pb-3 uppercase text-white'>Pizzas</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={category3} className='w-full' alt="" />
                    <h1 className='text-4xl text-center -mt-16 pb-3 uppercase text-white'>Soups</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={category4} className='w-full' alt="" />
                    <h1 className='text-4xl text-center -mt-16 pb-3 uppercase text-white'>desserts</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={category5} className='w-full' alt="" />
                    <h1 className='text-4xl text-center -mt-16 pb-3 uppercase text-white'>Salads</h1>
                </SwiperSlide>

            </Swiper>
        </section >
    );
};

export default Category;
import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FaQuoteLeft } from "react-icons/fa";
import 'swiper/css';
import 'swiper/css/navigation';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, [])
    return (
        <div className='my-10'>
            <SectionTitle
                subHeading="---What Our Clients Say---"
                heading="TESTIMONIALS"
            ></SectionTitle>
            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviews.map(item => <SwiperSlide key={item._id} item={item}>
                            <div className='mx-24 my-16 p-10 text-center space-y-3 flex flex-col items-center '>
                                <div className='flex justify-center items-center'>
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={item.rating}
                                        readOnly
                                    />
                                </div>
                                <p className='text-4xl'><FaQuoteLeft></FaQuoteLeft></p>
                                <p>{item.details}</p>
                                <h1 className='text-2xl text-yellow-600'>{item.name}</h1>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;

{/* <SwiperSlide>1</SwiperSlide>
<SwiperSlide>2</SwiperSlide>
<SwiperSlide>3</SwiperSlide> */}
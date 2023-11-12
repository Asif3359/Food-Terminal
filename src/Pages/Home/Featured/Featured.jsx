import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

import featured1 from "../../../assets/assets/home/featured.jpg"
import "./featured.css"

const Featured = () => {
    return (
        <div className='featured-item text-white mt-10 bg-fixed '>
            <div className='bg-gradient-to-r from-[#0000006b] to-[#0000006b] py-10'>
                <SectionTitle heading="FROM OUR MENU" subHeading="---Check it out---"></SectionTitle>
                <div className='md:flex justify-around items-center gap-16 p-4 lg:px-20 lg:py-10 '>
                    <div>
                        <img src={featured1} alt="" />
                    </div>
                    <div className='space-y-3 '>
                        <h1>March 20, 2023</h1>
                        <h1 className='text-3xl'>WHERE CAN I GET SOME?</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className='btn btn-outline btn-sm border-0 border-b-4'>Order Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Featured;
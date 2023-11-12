import React from 'react';

const MenuItem = ({ item }) => {

    const { name, recipe, image, category, price } = item;
    return (
        <div className='flex justify-start gap-5 items-start'>
            <img src={image} alt="" className=' w-[120px]  rounded-tr-full rounded-br-full rounded-bl-full' />
            <div className='flex-1'>
                <h1 className='uppercase'>{name}</h1>
                <p> {recipe}</p>
            </div>
            <p className='text-yellow-500'> $ {price}</p>
        </div>
    );
};

export default MenuItem;
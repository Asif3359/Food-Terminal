import React from 'react';

const FoodCard = ({ item }) => {
    const { name, recipe, image, category, price } = item;
    return (
        <div>
            <div className="card bg-base-200 md:h-[500px] ">
                <figure className='relative'>
                    <img src={image} alt="Shoes" className='w-full' />
                    <p className='absolute top-0 right-0 bg-black text-white px-5 py-1 rounded-lg m-4 '>$ {price}</p>
                </figure>
                <div className="card-body ">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        <button className='btn btn-sm btn-outline border-0 border-b-4 bg-base-300'>Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
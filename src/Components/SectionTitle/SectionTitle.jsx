import React from 'react';

const SectionTitle = ({children,heading , subHeading}) => {
    return (
        <div className='text-center w-full md:w-1/2 mx-auto'>
            <p className='text-yellow-600 py-1'>{subHeading}</p>
            <h1 className='text-4xl uppercase border-y-2 py-3'>{heading}</h1>
        </div>
    );
};

export default SectionTitle;
import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='text-center mt-20'>
            <p className='text-sm sm:text-base md:text-lg italic text-[#D99904] mb-4'>{subHeading}</p>
            <h3 className='text-xl sm:text-3xl md:text-[40px] uppercase border-y-4 inline-block p-5 mb-12'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;
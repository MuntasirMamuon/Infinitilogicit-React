import React from 'react';

const Banner = () => {
    return (
        <div className="lg:flex justify-around items-center  sm:flex-row ms-28">
        <div className="leading-tight">
            <h1 className="font-bold mb-5 text-white">BUILD DIGITAL BRAND WITH EXPERT</h1>
            <h1 className="text-white text-7xl font-bold mb-8 -tracking-tighter">DEVELOP <br /> THE DIGITAL <br /> UNIVERSE</h1>
            <button className="btn-style-one  text-white font-bold px-5 py-3 rounded-3xl">ABOUT US</button>
        </div>
        <div>
        <img className='mt-20' src="../../../public/image-1.png" alt="Image 1" />

            
        </div>
    </div>
    );
};

export default Banner;
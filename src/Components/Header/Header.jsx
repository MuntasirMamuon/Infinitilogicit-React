import React from 'react';
import Navbar from '../Navbar/Navbar';
import image from '../../../public/IMG-20230919-WA0011-removebg-preview.png'
const Header = () => {
    return (
        <div className='h-24 w-full '>
        <div className='flex justify-between mx-20 items-center'>
        <div>
            <img className='' src={image} alt='logo' width={200} height={100}/>
        </div>
        <div>
            <Navbar></Navbar>
        </div>
        </div>
    </div>
    );
};

export default Header;
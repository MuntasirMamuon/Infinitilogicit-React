import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown, FaBars, FaRegWindowClose } from 'react-icons/fa';
const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const [click, setClick] = useState(false);

    const content = <>
        <div className='bg-black text-white lg:hidden block absolute top-20 w-full left-0 right-0'>
            <ul className='text-center'>
           <li className='py-4 bg-black text-white font-bold hover:bg-blue-300'>
           <Link to={'/'}>Home</Link>
           </li>
           <li className=' py-4 bg-black text-white font-bold hover:bg-blue-300'>
           <Link to={'/about'}>About Us</Link>
           </li>
           <li className='py-4 bg-black text-white font-bold hover:bg-blue-300'>
           <Link to={'/'}>Services</Link>
           </li>
           <li className='py-4 bg-black text-white font-bold hover:bg-blue-300'>
           <Link to={'/'}>Projects</Link>
           </li>
           <li className=' py-4 bg-black text-white font-bold hover:bg-blue-300'>
           <Link to={'/'}>Blog</Link>
           </li>
           <li className=' py-4 bg-black text-white font-bold hover:bg-blue-300'>
           <Link to={'/contact'}>Contact</Link>
           </li>
            </ul>
        </div>
    
    </>


    const handleClick = () => {
        setClick(!click);
    }

    return (
        <nav className='w-full'>
        
        <ul className='lg:flex md:flex hidden justify-between  items-center gap-x-16'>
                   <div className='flex items-center justify-center gap-1'>
                   <li className='text-[15px] text-white font-bold hover:text-blue-500'>
                        <Link to={'/'}>Home</Link>
                    </li>
                   <span className='text-white cursor-pointer hover:text-blue-500'><FaAngleDown /></span>
                   </div>
                   <div className='flex items-center justify-center gap-1'>
                   <li className='text-[15px] text-white font-bold hover:text-blue-500'>
                        <Link to={'/about'}>About Us</Link>
                    </li>
                   <span className='text-white cursor-pointer hover:text-blue-500'><FaAngleDown /></span>
                   </div>
                   <div className='flex items-center justify-center gap-1'>
                   <li className='text-[15px] text-white font-bold hover:text-blue-500'>
                        <Link to={'/services'}>Services</Link>
                    </li>
                   <span className='text-white cursor-pointer hover:text-blue-500'><FaAngleDown /></span>
                   </div>
                   <div className='flex items-center justify-center gap-1'>
                   <li className='text-[15px] text-white font-bold hover:text-blue-500'>
                        <Link to={'/'}>Projects</Link>
                    </li>
                   <span className='text-white cursor-pointer hover:text-blue-500'><FaAngleDown /></span>
                   </div>
                   <div className='flex items-center justify-center gap-1'>
                   <li className='text-[15px] text-white font-bold hover:text-blue-500'>
                        <Link to={'/blog'}>Blog</Link>
                    </li>
                   <span className='text-white cursor-pointer hover:text-blue-500'><FaAngleDown /></span>
                   </div>
                   <div className='flex items-center justify-center gap-1'>
                   <li className='text-[15px] text-white font-bold hover:text-blue-500'>
                        <Link to={'/contact'}>Contact</Link>
                    </li>
                   <span className='text-white cursor-pointer hover:text-blue-500'><FaAngleDown /></span>
                   </div>
                 
                </ul>
                <div className='flex items-center justify-center gap-1 md:hidden'>
                    {
                        click && content
                    }
                   <button onClick={handleClick} className='text-[15px] text-white font-bold hover:text-blue-500'>
                    {
                        click ? (<FaRegWindowClose className='text-2xl'/>) : (<FaBars className='text-2xl'/>)
                    }
                    </button>
                   </div>

    </nav>
    );
};

export default Navbar;
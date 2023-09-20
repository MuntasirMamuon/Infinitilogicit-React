
import React from 'react';
import {  FaFacebook,  FaPhone, FaWhatsapp, FaLinkedin, FaDribbble } from 'react-icons/fa';
import {  AiOutlineMail} from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-gray-800 text-white w-full mt-12 py-8'>
            <div className='mx-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 py-6'>
              
               <div className=''>
               <h2 className=''>CONTACTS</h2><br/>
               <div className='flex md:flex-col gap-2'>
               
              <div className='flex gap-2 mt-2'>
              <span className='text-xl text-blue-500'><FaPhone></FaPhone></span> 
              <span> (+88)01823904551</span>
              </div>
              <div className='flex gap-2 mt-2'>
              <span className='text-xl text-blue-500'><FaWhatsapp></FaWhatsapp></span>
              <span>WhatsApp</span>
              <span></span>
              </div>
              <div className='flex gap-2 mt-2'>
              <span className='text-xl text-blue-500'><AiOutlineMail></AiOutlineMail></span>
              <span>info@infinitilogicit.com</span>
              </div>
                
               </div>
                </div>
                <div>
                <h2 className=''>COMPANY</h2><br/>
                <div className='flex flex-col'>
                <ul>
                    <li className='mt-2'>About US</li>
                    <li className='mt-2'>Career</li>
                    <li className='mt-2'>Blog</li>
                    <li className='mt-2'>Press</li>
                </ul>
                </div>
                </div>
                <div className=''>
                    <p className=''>FEATURES</p><br/>
                    <ul>
                    <li className='mt-2'>Meeting</li>
                    <li className='mt-2'>Blog</li>
                    <li className='mt-2'>Feature</li>
                    <li className='mt-2'>Press</li>
                </ul>
                </div>
                <div>
                    <h2>RESOURCES</h2><br/>
                    <ul>
                    <li className='mt-2'>Ui kit</li>
                    <li className='mt-2'>Apps</li>
                    <li className='mt-2'>Icons</li>
                    <li className='mt-2'>Illustration</li>
                </ul>
                </div>
                <div>
                    <h3 className='text-2xl font-bold leading-10'>Start working on a new project?</h3>
                    <button className='mt-6 text-sm px-30 rounded-md py-4 bg-transparent hover:bg-white hover:text-black text-white hover:font-bold border-b-4 border-l-4 border-blue-600'>
                        LET'S TALK ABOUT PROJECT
                     </button>
                </div>
               
               </div>
            <div className='mx-20'>
            <hr className='w-full mt-12'/>
               <div className='flex items-center justify-between mt-4 mb-4'>
                <div><small className=''>@copy2023 inifiniLogicIT All Rights Reserve</small></div>
                <div className='flex gap-2'>
                    <span className='text-2xl'><Link to={"https://www.facebook.com/infinitilogicit"}><FaFacebook /></Link></span>
                    <span className='text-2xl'> <Link to={"https://www.linkedin.com/company/infinitilogicit"}><FaLinkedin /></Link></span>
                    <span className='text-2xl'><FaDribbble /></span>
                </div>
            </div>
               </div>
            </div>
        
    );
};

export default Footer;
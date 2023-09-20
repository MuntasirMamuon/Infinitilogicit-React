import React from 'react';
import { BsChatDots, BsPerson, BsStopwatch } from 'react-icons/bs';
import blogimg from '../../../public/our-team/news-5.jpg';
import recentimg from '../../../public/our-team/news-4-150x150.jpg';
import recentimg1 from '../../../public/our-team/news-5-150x150.jpg';
import recentimg2 from '../../../public/our-team/news-6-150x150.jpg';
import { FaBullseye } from 'react-icons/fa';
const BlogTwo = () => {
    return (
        <div>
         <div className='lg:flex'>
            <div className='img-style w-[600px] mx-auto'>
                 <img className='rounded-lg mt-10' src={blogimg} width={800} height={500}/>
                    <div className='flex gap-8 mt-6'>
                        <div className='flex items-center font-bold gap-2'><BsPerson className='text-blue-500 text-xl'/><span>Infinity Logic IT</span></div>
                        <div className='flex items-center font-bold gap-2'><BsStopwatch className='text-blue-500 text-xl'/><span>October 30 2023</span></div>
                        <div className='flex items-center font-bold gap-2'><BsChatDots className='text-blue-500 text-xl'/><span>50</span></div>
                    </div>
                 <h1 className='text-2xl font-bold mt-5 mb-5'>Authoritatively reinvent functionaliz</h1>
                 <p className='text-justify w-[80%]'>UX design refers to the term “user experience design”, while UI stands for “user interface design”. Both elements are crucial to a product and work closely together. But despite their professional relationship, the roles themselves are quite different, referring to very different aspects of the product development process and the design discipline.</p>
                 <button className='btn-style-one mt-5'>Read more</button>
                </div>

                <div className='-mt-20 rounded-md services-card-bg ml-10 w-[30%] h-[40%] p-10 mr-8'>
                    <div className='flex gap-3 mb-6'>
                    <FaBullseye className='mt-2 text-xl text-blue-600'/>
                    <h1 className='text-2xl mb-3 text-center font-bold'>Recent Post</h1>
                    </div>
                 <div className='lg:flex-col'>
                 <div className='flex justify-evenly mb-4 gap-4'>
                    <img className='rounded-lg' src={recentimg} height={100} alt=""/>
                    <div>
                    <p>November 3 2023</p>
                    <p className='mt-8 font-bold'>Quickly Reinvent User Friendly Models</p>
                    </div>
                  </div>
                  <div className='flex justify-evenly mb-4 gap-4'>
                    <img className='rounded-lg' src={recentimg1} height={100} alt=""/>
                    <div>
                    <p>November 3 2023</p>
                    <p className='mt-8 font-bold'>Authoritatively Reinvent Functionaliz</p>
                    </div>
                  </div>
                  <div className='flex justify-evenly mb-4 gap-4'>
                    <img className='rounded-lg' src={recentimg2} height={100} alt=""/>
                    <div>
                    <p>November 3 2023</p>
                    <p className='mt-8 font-bold'>UX Checklists For Interface Designers</p>
                    </div>
                  </div>
                
                 </div>
                
                  </div>   
        </div>
        
       </div>
    );
};

export default BlogTwo;
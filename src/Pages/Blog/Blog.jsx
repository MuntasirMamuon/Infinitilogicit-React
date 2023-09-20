import React from 'react';
import { BsArrowRight } from "react-icons/bs";
import BlogTwo from '../../Components/BlogTwo/BlogTwo';
const Blog = () => {
    return (
        <div>
            <div className='bgServices relative'>
                <h1 className='text-white text-6xl font-bold absolute top-40 left-56'>Blog</h1>
            </div>



           




            <div className='lg:flex  '>
                <div className='img-style w-[600px] mx-auto'>
                 <img className='rounded-lg mt-10' src={"/news-6.jpg"} width={800} height={500}/>

                 <h1 className='text-2xl font-bold mt-5 mb-5'>Quickly reinvent user friendly models</h1>
                 <p className='text-justify w-[80%]'>UX design refers to the term “user experience design”, while UI stands for “user interface design”. Both elements are crucial to a product and work closely together. But despite their professional relationship, the roles themselves are quite different, referring to very different aspects of the product development process and the design discipline.</p>
                 <button className='btn-style-one mt-5'>Read more</button>
                </div>

                    
                  <div className='mt-10  services-card-bg ml-10 w-[30%] h-[40%] p-10 font-bold'>
                    <h1 className='text-2xl mb-3 text-center'>Services</h1>
                  <div className='flex justify-around mb-4 text-2xl services-item'>
                    <h1 >01</h1>
                    <div>UI /UX Design</div>
                    <p><BsArrowRight/></p>
                  </div>
                  <div className='flex justify-around mb-4 services-item text-2xl'>
                    <h1>02</h1>
                    <div>UI /UX Design</div>
                    <p><BsArrowRight/></p>
                  </div>
                  <div className='flex justify-around mb-4 services-item text-2xl'>
                    <h1>03</h1>
                    <div>UI /UX Design</div>
                    <p><BsArrowRight/></p>
                  </div>
                  <div className='flex justify-around mb-4 services-item text-2xl'>
                    <h1>04</h1>
                    <div>UI /UX Design</div>
                    <p><BsArrowRight/></p>
                  </div>
                  <div className='flex justify-around mb-4 services-item text-2xl'>
                    <h1>05</h1>
                    <div>UI /UX Design</div>
                    <p><BsArrowRight/></p>
                  </div>
                  <div className='flex justify-around mb-4 services-item text-2xl'>
                    <h1>06</h1>
                    <div>UI /UX Design</div>
                    <p><BsArrowRight/></p>
                  </div>
     
                  </div>
                
            </div>





            <BlogTwo />
        </div>
    );
};

export default Blog;
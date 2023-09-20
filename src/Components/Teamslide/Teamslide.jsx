import React from 'react';
import  { useEffect, useState } from 'react'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
const Teamslide = () => {
    const[data,setData]= useState([])
    useEffect(() => {
      async function fetchData() {
        try {
          const response = await fetch('/team.json'); // Replace with your API endpoint
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
  
          const result = await response.json();
          setData(result);
        } catch (error) {
          console.error('Error fetching data:', error);
          // Handle the error here
        }
      }
  
      fetchData(); // Call the async function here
    }, []);
    console.log(data)
    return (
        <div className='mt-10 '>
        <Swiper
           slidesPerView={3}
           spaceBetween={30}
           pagination={{
             clickable: true,
           }}
           modules={[Pagination]}
           className="mySwiper"
         >
           <SwiperSlide>
             <div>
               <div>
               <img src={'/team-19.jpg'} alt="" />
               </div>
               <h2 className='my-3 text-3xl font-bold'>Mamun Ahamed</h2>
               <p>Backend Developer</p>
             </div>
           </SwiperSlide>
           <SwiperSlide>
           <div>
               <div className='overflow-hidden'>
               <img className='duration-500 cursor-pointer hover:scale-110' src={'/team-20.jpg'} alt="" />
               </div>
               <h2 className='my-3 text-3xl font-bold'>Nabila Nair</h2>
               <p>App Developer</p>
             </div>
           </SwiperSlide>
           <SwiperSlide>
           <div>
               <div className='overflow-hidden'>
               <img src={'/team-21.jpg'} alt="people" />
               </div>
               <h2 className='my-3 text-3xl font-bold'>Mursalin Ahmed</h2>
               <p>Front End developer</p>
             </div>
           </SwiperSlide>
           <SwiperSlide>
           <div>
               <div>
               <img src={'/team-19.jpg'} alt="" />
               </div>
               <h2 className='my-3 text-3xl font-bold'>Mamun Ahamed</h2>
               <p>Backend Developer</p>
             </div>
           </SwiperSlide>
           
         </Swiper>
       </div>
    );
};

export default Teamslide;
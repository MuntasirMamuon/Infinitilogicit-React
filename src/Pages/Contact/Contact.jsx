import React from 'react';

const Contact = () => {
    return (
        <>
        <div>
            <div
              
              className=" bgServices"
            >
              <div className=" w-full absolute  bg-[#171e25] bg-opacity-0">
                <div className="flex flex-col  justify-end h-full w-full p-28 ">
                  <h1 className="text-6xl text-white font-extrabold">Contact</h1>
                  <p className="mt-7 text-white font-bold">{"Home > Contact Dark"}</p>
                </div>
              </div>
            </div>
          </div>
    
          <div className='mt-8'>
              <p  className='text-center text-gray-500 font-bold letter'>CONTACT US</p>
              <h2 className='text-center text-5xl font-bold mt-8'>Get A Free Quote Now</h2>
          </div>
    
          <form className='max-w-[1300px] mx-auto mt-10'>
            <div className='grid md:grid-cols-2 gap-5'>
                <div>
                    <label htmlFor="name" className='font-bold text-2xl'>Name *</label><br></br>
                    <input
                    className='mt-2 w-full  border p-4'
                    type="text" name="name" id="name" placeholder='Enter Your name' />
                </div>
                <div>
                    <label htmlFor="email" className='font-bold text-2xl'>Email *</label><br></br>
                    <input
                    className='mt-2 w-full p-4 border'
                    type="email" name="name" id="email" placeholder='Enter Your name' required />
                </div>
            </div>
            <div className='grid md:grid-cols-2 gap-5 mt-14'>
                <div>
                    <label htmlFor="number" className='font-bold text-2xl'>Phone Number *</label><br></br>
                    <input
                    className='mt-2 w-full  border p-4'
                    type="text" name="number" id="" placeholder='+94 0000 00000
                    ' />
                </div>
                <div>
                    <label htmlFor="subject" className='font-bold text-2xl'>Subject *</label><br></br>
                    <input
                    className='mt-2 w-full p-4 border'
                    type="text" name="subject" id="subject" placeholder='Web' required />
                </div>
            </div>
    
            <div className='mt-10'>
              <label htmlFor="message" className='font-bold text-2xl'>Message *</label><br></br>
              <textarea className='border w-full mt-2 p-4' name="message" id="message" cols="30" rows="10"
              placeholder='Simultaneously we had a problem
              '></textarea>
            </div>
            <div className='mt-10 text-center'>
              <button className='btn-style-one'> SEND MESSAGe</button>
            </div>
          </form>
        </>
    );
};

export default Contact;
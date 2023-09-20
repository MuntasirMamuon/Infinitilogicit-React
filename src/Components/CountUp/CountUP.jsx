import React from "react";
import CountUp from "react-countup";

const CountUP = () => {
    return (
        <div className=" flex flex-col md:flex-row justify-between max-w-[1100px] mx-auto mt-14">
        <div className="flex justify-center flex-col items-center">
       <div className="border border-gray-400 rounded-full flex justify-center flex-col items-center
         h-[200px] w-[200px]">
           <div className="text-4xl">
           <CountUp start={10} end={90} delay={1} />%  
         </div>
         
         </div>
         <p className="text-2xl mt-6 text-gray-500">Frontend</p>
       </div>
         <div className="flex justify-center flex-col items-center">
       <div className="border border-gray-400 rounded-full flex justify-center flex-col items-center
         h-[200px] w-[200px]">
           <div className="text-4xl" >
           <CountUp end={`${85}`} delay={1} />%  
         </div>
         
         </div>
         <p className="text-2xl mt-6 text-gray-500">Backend</p>
       </div>
         <div className="flex justify-center flex-col items-center">
       <div className="border border-gray-400 rounded-full flex justify-center flex-col items-center
        h-[200px] w-[200px]">
           <div className="text-4xl">
           <CountUp end={70} delay={1} />%  
         </div>
         
         </div>
         <p className="text-2xl mt-6 text-gray-500">UI / UX</p>
       </div>
       <div className="flex justify-center flex-col items-center">
       <div className="border border-gray-400 rounded-full flex justify-center flex-col items-center
         h-[200px] w-[200px]">
           <div className="text-4xl" >
           <CountUp end={90} delay={1}/>%  
         </div>
         
         </div>
         <p className="text-2xl mt-6 text-gray-500">Web Development</p>
       </div>
       </div>
    );
};

export default CountUP;
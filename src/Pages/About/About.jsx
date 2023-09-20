import React from "react";

import team from '../../../public/our-team/video-image.jpg'
import CountUP from "../../Components/CountUp/CountUP";
import Teamslide from "../../Components/Teamslide/Teamslide";



// style={{
//   backgroundImage: `url('/our-team/about.jpg')`,
//   backgroundSize: "cover",
//   backgroundPosition: "center",
// }}
const About = () => {
  return (
    <>
      <div>
        <div
          
          className=" bgServices"
        >
          <div className=" w-full absolute  bg-[#171e25] bg-opacity-0">
            <div className="flex flex-col  justify-end h-full w-full p-28 ">
              <h1 className="text-6xl text-white font-extrabold">About</h1>
              <p className="mt-7 text-white font-bold">{"Home > About"}</p>
            </div>
          </div>
        </div>
      </div>

      <div className=" max-w-[1300px] mx-auto text-black mt-28">
        <div className=" flex flex-col md:flex-row  justify-between items-center">
          <div>
            <div className="flex items-center gap-6">
              <p>About us</p>{" "}
              <span className="inline-block h-1 w-16 bg rounded-lg"></span>
            </div>
            <h2 className="text-4xl font-bold leading-[50px] mt-5">
              Product Devlopment For<br></br>
              Butter Business
            </h2>
          </div>
          <div className=" w-full md:w-[500px]">
            <p className="text-gray-500  leading-[30px]">
              In the current competitive scenario after globalization, product
              development process is a very challenging task as it depends on
              various factors.
            </p>
          </div>
        </div>

        <div className="mt-12 overflow-hidden">
          
          <img src={team} className="cursor-pointer hover:scale-105 duration-500"></img>
          
        </div>

        <div className="mt-28">
        <div className="flex justify-center items-center gap-6">
              <p>why choose us</p>{" "}
              <span className="inline-block h-1 w-16 bg rounded-lg"></span>
            </div>
            <h2 className="text-4xl font-bold leading-[50px] mt-5 text-center">
            Discover Revenue Growth<br></br>
            for Your Business
            </h2>

        <CountUP/>

        
        </div>
        
      </div>
      <div className="bg-[#101626] h-[115vh] mt-10">
          <div className="max-w-[1300px] mx-auto text-white py-32">
          <div className=" flex flex-col md:flex-row  justify-between items-center">
          <div>
            <div className="flex items-center gap-6">
              <p>Meet Our Expert</p>{" "}
              <span className="inline-block h-1 w-16 bg rounded-lg"></span>
            </div>
            <h2 className="text-4xl font-bold leading-[50px] mt-5">
            Proud of Our Experts<br></br>
            Team Members
            </h2>
          </div>
          <div className=" w-full mt-4 md:mt-0 text-center md:w-[250px]">
            <button className="btn-style-one "> See All Teams</button>
          </div>
        </div>

        <Teamslide/>
          </div>
          
        </div>
    </>
  );
};
export default About;
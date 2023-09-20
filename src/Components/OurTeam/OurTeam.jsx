import React from 'react';
import member1 from "../../../public/our-team/1.png";
import member2 from "../../../public/our-team/2.png";
import member3 from "../../../public/our-team/3.png";
import member4 from "../../../public/our-team/4.png";
import member5 from "../../../public/our-team/5.png";
import member6 from "../../../public/our-team/6.png";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const OurTeam = () => {
  return (
    <div className="bg-[#1B1C24] pt-[130px]">
      <div className="min-h-screen  max-w-[1300px] mx-auto  ">
        <div className="flex justify-between flex-col md:flex-row">
          <div>
            <h1 className="text-5xl text-white font-extrabold leading-[70px]">
              PEOPLE LOVED<br></br>
              OUR TEAM
            </h1>
            <button className="mt-10 primary-color bg rounded-xl text-white font-bold px-5 py-3 ">
              View All Members
            </button>
          </div>
          <div className="flex flex-col md:flex-row md:gap-10 mt-10 md:mt-0">
            <div className="relative overflow-hidden group">
              <img
                src={member1}
                className="rounded-xl w-full md:h-[330px] cursor-pointer"
                alt="Member 1"
              />
              <div
                className={`text-white flex flex-col justify-center items-center bg absolute
          top-0 left-0 w-full h-full rounded-xl cursor-pointer 
          inset-0
                -translate-x-full  opacity-0 group-hover:translate-x-0 opacity-100'
          duration-700 `}
              >
                <h3 className="text-3xl font-extrabold ">MARUN DITARXE</h3>
                <p className="my-10">UI/UX Designer</p>
                <div className="flex gap-10 text-3xl">
                  <FaFacebook />
                  <FaTwitter />
                  <FaLinkedin />
                </div>
              </div>
            </div>
            <div className=" relative overflow-hidden mt-10 md:mt-0 group">
              <img
                src={member2}
                className="rounded-xl w-full md:h-[330px]"
                alt="Member 2"
              />
              <div
                className={`text-white flex flex-col justify-center items-center bg absolute
          top-0 left-0 w-full h-full rounded-xl cursor-pointer 
          inset-0
                -translate-x-full  opacity-0 group-hover:translate-x-0 opacity-100'
          duration-700 `}
              >
                <h3 className="text-3xl font-extrabold ">MARUN DITARXE</h3>
                <p className="my-10">UI/UX Designer</p>
                <div className="flex gap-10 text-3xl">
                  <FaFacebook />
                  <FaTwitter />
                  <FaLinkedin />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid  md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
          <div className="relative overflow-hidden group">
            <img
              src={member3}
              className="rounded-xl w-full md:h-[330px]"
              alt="Member 3"
            />
            <div
              className={`text-white flex flex-col justify-center items-center bg absolute
          top-0 left-0 w-full h-full rounded-xl cursor-pointer 
          inset-0
                -translate-x-full  opacity-0 group-hover:translate-x-0 opacity-100'
          duration-700 `}
            >
              <h3 className="text-3xl font-extrabold ">MARUN DITARXE</h3>
              <p className="my-10">UI/UX Designer</p>
              <div className="flex gap-10 text-3xl">
                <FaFacebook />
                <FaTwitter />
                <FaLinkedin />
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden group">
            <img
              src={member4}
              className="rounded-xl w-full md:h-[330px]"
              alt="Member 4"
            />
            <div
              className={`text-white flex flex-col justify-center items-center bg absolute
          top-0 left-0 w-full h-full rounded-xl cursor-pointer 
          inset-0
                -translate-x-full  opacity-0 group-hover:translate-x-0 opacity-100'
          duration-700 `}
            >
              <h3 className="text-3xl font-extrabold ">MARUN DITARXE</h3>
              <p className="my-10">UI/UX Designer</p>
              <div className="flex gap-10 text-3xl">
                <FaFacebook />
                <FaTwitter />
                <FaLinkedin />
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden group">
            <img
              src={member5}
              className="rounded-xl w-full md:h-[330px]"
              alt="Member 5"
            />
            <div
              className={`text-white flex flex-col justify-center items-center bg absolute
          top-0 left-0 w-full h-full rounded-xl cursor-pointer 
          inset-0
                -translate-x-full  opacity-0 group-hover:translate-x-0 opacity-100'
          duration-700 `}
            >
              <h3 className="text-3xl font-extrabold ">MARUN DITARXE</h3>
              <p className="my-10">UI/UX Designer</p>
              <div className="flex gap-10 text-3xl">
                <FaFacebook />
                <FaTwitter />
                <FaLinkedin />
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden group">
            <img
              src={member6}
              className="rounded-xl w-full md:h-[330px]"
              alt="Member 6"
            />
            <div
              className={`text-white flex flex-col justify-center items-center bg absolute
          top-0 left-0 w-full h-full rounded-xl cursor-pointer 
          inset-0
                -translate-x-full  opacity-0 group-hover:translate-x-0 opacity-100'
          duration-700 `}
            >
              <h3 className="text-3xl font-extrabold ">MARUN DITARXE</h3>
              <p className="my-10">UI/UX Designer</p>
              <div className="flex gap-10 text-3xl">
                <FaFacebook />
                <FaTwitter />
                <FaLinkedin />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;

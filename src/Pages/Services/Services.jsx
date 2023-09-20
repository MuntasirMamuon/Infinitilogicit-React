import React from 'react';
import  { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
const Services = () => {
    const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("../../../public/card.json"); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle the error here
      }
    }

    fetchData(); // Call the async function here
  }, []);

    return (
        <div>
        <div className="bgServices relative">
          <h1 className="text-5xl font-bold text-white  absolute top-40 left-36 ">
            Services
          </h1>
          <p className="text-white w-[700px] absolute top-56 left-36">
            In the current competitive scenario after globalization, product
            development process is a very challenging task as it depends on
            various factors.
          </p>
        </div>
  
        <div className="flex items-center w-48 justify-between mt-40 ml-64 mb-10">
          <p>What We Do</p>
          <h1 className="w-16 bg-purple-700 h-1"></h1>
        </div>
  
        <div className="flex justify-around">
          <h1 className="text-3xl font-bold">
            Services We Can Do <br /> Help For You
          </h1>
          <button className="btn-style-one">See All Services</button>
        </div>
  
        <div className=" ml-20">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 ">
            {data?.map((dt) => (
              <>
                <div className="service-block-six w-[350px]">
                  <div className="inner-box ">
                    <div className="icon-box">
                      <span className="">
                        <img
                          className=""
                          src={dt.icon}
                          width={50}
                          height={30}
                          alt=""
                        />
                      </span>
                    </div>
                    <h1 className="text-white font-bold">{dt.name}</h1>
                    <p className="text-justify text-white">{dt.description}</p>
                    <Link to={`/services/${dt.id}`} className="read-more ">
                      READ MORE
                    </Link>
                    <div className="post-number ">{dt.id}</div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
  
        <div className="flex justify-around">
          <div className="">
            <img
              className="rounded-xl"
              src={"../../../public/services-image-01.jpg"}
              width={500}
              height={300}
              alt=""
            />
          </div>
  
          <div>
            <div className="flex items-center">
              <p>Why choose us</p>
              <p className="primary-color w-20 h-1 rounded-lg ml-5"></p>
            </div>
  
            <h1 className="text-5xl mt-5">
              Discover Revenue Growth for <br /> Your Business
            </h1>
            <ul className="list">
              <li>Hight Standards</li>
              <li className="mt-3">Different Thinking</li>
              <li className="mt-3">Business Innovation</li>
              <li className="mt-3">Focus On People</li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Services;
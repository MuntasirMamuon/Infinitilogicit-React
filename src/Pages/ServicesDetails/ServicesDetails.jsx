import React from 'react';
import  { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "/variants";
import { useParams } from 'react-router-dom';
const ServicesDetails = () => {

    const id=useParams()
    const [data, setData] = useState([]);
    const [matchedData, setMatchedData] = useState(null);
    useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch(`../../../public/card.json`);
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
    
            const result = await response.json();
            setData(result);
    
            // Find the data with matching id
            const item = result.find((item) => item.id === id.id);
            if (item) {
              setMatchedData(item);
            } else {
              setMatchedData(null);
            }
          } catch (error) {
            console.error("Error fetching data:", error);
            // Handle the error here
          }
        }
    
        fetchData();
      }, [id.id]);
    
    console.log(id);
    return (
        <div>
        {matchedData ? (
          <div>
            <div className="bgServices relative">
              <div>
                <motion.h1
                  variants={fadeIn("down", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.2 }}
                  className="text-5xl font-bold text-white absolute top-40 left-36 "
                >
                  {matchedData.name}
                </motion.h1>
                <p className="text-white w-[700px] absolute top-56 left-36">
                  {matchedData.description}
                </p>
              </div>
            </div>
            <div>
              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="show"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="flex md:ms-10 md:me-10"
              >
                <img
                  src={"../../../public/serviceImageDemo.jpg"}
                  width={400}
                  height={500}
                  alt=""
                ></img>

                <motion.p
                  variants={fadeIn("left", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.6 }}
                  className="m-10 text-2xl font-sans font-semibold text-justify"
                >
                  {matchedData.fulldescription}
                </motion.p>
              </motion.div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-screen">
            <p className="text-red-500 text-2xl">Loading...</p>
          </div>
        )}
      </div>
    );
};

export default ServicesDetails;
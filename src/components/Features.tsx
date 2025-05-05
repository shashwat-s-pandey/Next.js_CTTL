"use client";
import React, { useState } from "react";
import { LoginModal } from "./LoginModal";
import Image from "next/image";
import { ChevronsDown } from "lucide-react";

const Features = () => {
  const features = [
    { title: "1", description: "Drawing out of TTE links.", image: "/feature1.png" },
    { title: "2", description: "Accountal of duty hours.", image: "/feature2.png" },
    { title: "3", description: "Preparation of TA/night duty allowance bills.", image: "/feature3.png" },
    { title: "4", description: "EFT earning accountal.", image: "/feature4.png"},
  ];  

  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <section className="bg-transparent py-10">
      <div className="container mx-auto text-center">
        <h1 className="text-white font-semibold font-['Big_Shoulders'] text-[35px]">BENEFITS TO TTEs</h1>
        {/* Responsive Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 py-5 gap-x-[15px] gap-y-8 items-center">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white/80 rounded-md transform hover:-translate-y-2 ease-out duration-500 
                        shadow-md flex flex-col justify-center items-center 
                        h-[200px] md:h-[150px] w-[150px] md:w-auto text-sm md:text-lg"
            >
              <Image 
                src={feature.image} 
                alt={feature.title} 
                width={80} 
                height={80} 
                className="mt-2"
              />
              <button className="text-center text-[10px] lg:text-lg h-full md:text-[14px] font-semibold px-4">
                {feature.description}
              </button>
            </div>
          ))}
        </div>
        {/* Login Button */}
        <ChevronsDown className="animate-bounce drop-shadow-[0_0_3px_rgba(0,0,0,0.6)] mx-auto w-8 h-8 text-white mt-8" />
        <button 
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 
                     transition-transform duration-800 transform hover:scale-105 bg-gradient-to-r from-yellow-500 to-yellow-600 w-[120px text-[17px] shadow-lg font-bold"
          onClick={(e) => { 
            e.preventDefault();  
            setIsLoginOpen(true); 
          }}
        >
          Login
        </button>
      </div>
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </section>
  );
};

export default Features;

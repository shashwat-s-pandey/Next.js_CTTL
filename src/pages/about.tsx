"use client";
import React, { useEffect, useState } from 'react'
import "../app/globals.css";
import Footer from '@/components/Footer';
import Image from 'next/image';
import { motion } from "framer-motion";
import Link from 'next/link';

const About = () => {
  const text = "TTE Lobby";
    const [displayedText, setDisplayedText] = useState(""); // Initialize as empty string
  
    useEffect(() => {
      let index = 0;
  
      const interval = setInterval(() => {
        if (index < text.length) {
          setDisplayedText(text.slice(0, index + 1)); // Slice method prevents "undefined" issues
          index++;
        } else {
          clearInterval(interval); // Stop when text is fully displayed
        }
      }, 50); // Adjust typing speed
  
      return () => clearInterval(interval);
    }, []);
  return (
    <div className="flex flex-col min-h-screen">

        <motion.div
          initial={{ opacity: 0.1 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="z-[-1] absolute w-full h-[calc(100vh)]"
        >
          <Image 
            src="/irly.jpg" 
            alt="Background" 
            layout="fill"
            objectFit="cover"
            priority
            placeholder="blur" 
            blurDataURL="/cbvndb.jpeg" 
          />
        </motion.div>

        <div className='border-b-[0.1px] border-gray-300'>
          <motion.div className="h-[90px] sm:h-[80px] flex justify-between items-center text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            {/* Left Logo */}
            <Image className="pl-5" src={"/irlogo.svg"} alt="" width={90} height={90}></Image>
            {/* <img className="pl-2" src="./irlogo.png" alt="IR Logo" width={90} height={90} /> */}

            <ul className="flex font-bold text-sm lg:text-[18px] md:text-lg h-full items-center justify-center">
                {/* Typing Effect Heading */}
                <motion.h1
                  className="font-['Big_Shoulders'] pr-7 lg:text-4xl text-lg font-extrabold bg-gradient-to-r from-yellow-300 to-yellow-500 text-transparent bg-clip-text"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {displayedText}
                </motion.h1>
                <Link href="/" className="h-full flex items-center justify-center">
                  <button className="h-full text-white transform hover:-translate-y-1 duration-300 px-5">Home</button>
                </Link>
              </ul>

            <div className="flex items-center">
              
              {/* Right Logo */}
              <a className="pr-8" href="https://www.cris.org.in">
                <Image src={"/cris_logo.png"} alt="" width={150} height={100}></Image>
                {/* <img src="./cris_logo.png" alt="CRIS Logo" width={150} height={100} /> */}
              </a>
            </div>
            
          </motion.div>
        </div>

        <Footer/>
        <link
          href="https://fonts.googleapis.com/css2?family=Big+Shoulders:opsz,wght@10..72,100..900&display=swap"
          rel="stylesheet"
        />
    </div>
  )
}

export default About
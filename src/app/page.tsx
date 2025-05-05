"use client"
// import Carousel from "@/components/Carousel";
// import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
// import Nav from "@/components/Nav";
// import Sidebar from "@/components/Sidebar";
import Image from "next/image";
// import { useState } from "react";
import { motion } from "framer-motion";
import "./home.css"

export default function Home() {
  // const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <motion.div
        initial={{ opacity: 0.4 }}
        animate={{ opacity: 0.9 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="railway z-[-1] absolute w-full h-[calc(100vh+560px)] md:h-[calc(100vh)] lg:h-[calc(100vh)]"
      >
        <Image 
          src="/irly.jpg" 
          alt="Background" 
          layout="fill"
          objectFit=""
          priority
          placeholder="blur" 
          blurDataURL="/irly.jpeg" 
        />
      </motion.div>
      <motion.main className="flex-grow pt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}>
        <HeroSection />
      </motion.main>
      <Footer/>
    </div>
  );
}

"use client";
// import { useRouter } from "next/navigation";
import useAuth from "../hooks/useAuth";
import "../app/globals.css";
import "./dashboard.css";
// import { Menu } from "lucide-react";
import Image from "next/image";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import AboutHeader from "@/components/AboutHeader";

const Dashboard = () => {
  useAuth(); // Redirects if not logged in

  return (
    <div className="flex flex-col min-h-screen">

      <motion.div
        initial={{ opacity: 0.4 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="railway z-[-1] fixed w-full h-[calc(100vh+560px)] md:h-[calc(100vh)] lg:h-[calc(100vh)]"
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

      <AboutHeader/>

      <iframe
        src="https://osivamh5v2wvbf2.in.qlikcloud.com/single/?appid=b20f1dc4-904a-4307-8ac0-de82fe4d1752&sheet=FgyU&theme=horizon&opt=ctxmenu,currsel"
        style={{
          border: 'none',
          marginLeft: 'auto',   // Pushes it to the right
          marginRight: '50px',  // Adds space on the right
          marginTop: '100px',
          marginBottom: '10px',
          display: 'block',
          width: '80%',
          height: '600px'
        }}
        title="Qlik Dashboard"
        allowFullScreen
      />

      {/* Sidebar and Main Content Wrapper */}
      <div className="">
        {/* Sidebar below navbar */}

        {/* Main Content */}
        {/* <main className="flex-1 p-4">
          <div className="flex justify-center overflow-hidden">
            <h1 className="animate-marquee text-xl hover:text-bold">
              Welcome to Computerized TTE Lobby
            </h1>
          </div>
        </main> */}
      </div>

      {/* Footer (Fixed at Bottom) */}
      <Footer />
    </div>
  );
};

export default Dashboard;

"use client";
import React, { useState } from "react";
import Image from "next/image";
import { LoginModal } from "./LoginModal";
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";

const AboutHeader = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar toggle state

  const sidebarWidth = isSidebarOpen ? 187 : 77;

  return (
    <>
      {/* Sidebar controlled here */}
      <Sidebar isOpen={isSidebarOpen} />

      {/* Header with dynamic left and width */}
      <div
        className={`fixed bg-white/80 border-b-[0.1px] border-gray-300 transition-all duration-300`}
        style={{
          left: `${sidebarWidth}px`,
          width: `calc(100vw - ${sidebarWidth}px)`,
        }}
      >
        <div className="h-[90px] sm:h-[80px] flex justify-between items-center text-center">
          <button
            className="text-black hover:scale-110 p-2"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <Menu className="w-7 h-7" />
          </button>

          <div className="flex items-center">
            <a className="pr-8" href="https://www.cris.org.in">
              <Image src={"/cris_logo3.png"} alt="" width={150} height={100} />
            </a>
          </div>
        </div>

        <title>Computerised TTE Lobby</title>
        <meta name="description" content="A Next.js website built with TypeScript." />
        <link
          href="https://fonts.googleapis.com/css2?family=Big+Shoulders:opsz,wght@10..72,100..900&display=swap"
          rel="stylesheet"
        />
        <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      </div>
    </>
  );
};

export default AboutHeader;

"use client";
import React, { useState } from "react";
import Link from "next/link";
import { LayoutDashboard, Train, ClipboardList, Bell, Settings, LogIn, LogOutIcon } from "lucide-react";
import { LoginModal } from "./LoginModal";
import "./Sidebar.css"
import { useRouter } from "next/router";
import useAuth from "@/hooks/useAuth";
import Image from "next/image";

const Sidebar = ({ isOpen }: { isOpen: boolean }) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const router = useRouter();
    useAuth(); // Redirects if not logged in
  
    const handleLogout = () => {
      localStorage.removeItem("token");
      localStorage.removeItem("uid");
      router.push("/");
    };

  return (
    <div>
      {/* Login Modal */}
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />

      <aside
        className={`sidebar fixed left-0 top-0 w-[187px] transition-all duration-300 shadow-xl border-gray-200 bg-white/80 backdrop-blur-lg flex flex-col sm:min-h-[100%] md:min-h-[100%] lg:min-h-[100%] bottom-0 z-[100] ${
          isOpen ? "px-4" : "px-2 w-[77px]"
        }`}
        style={{ height: "calc(100vh - 125px)",
        }} // Ensures it doesn't overlap navbar
      >

        <ul className="mt-6 space-y-4">
          <div className="flex items-center">
            <Image className="pl-5" src={"/irlogo.svg"} alt="" width={90} height={90}></Image>
            {/* <img className="pl-2" src="./irlogo.png" alt="IR Logo" width={90} height={90} /> */}
          </div>

          <li className="text-black font-semibold">Welcome, admin</li>

          {/* Dashboard - Opens Login Modal */}
          <li>
            <button
              className="w-full flex items-center text-white bg-blue-500 hover:text-white p-3 rounded-lg transition-all"
            >
              <LayoutDashboard className="w-[28px] h-[28px] shrink-0" />
              <span className={`whitespace-nowrap overflow-hidden transition-all duration-300 ${isOpen ? "opacity-100 ml-3 w-auto" : "opacity-0 w-0"}`}>
                Dashboard
              </span>
            </button>
          </li>

          {/* Train Schedules */}
          <li>
            <Link href="/schedules" className="flex items-center text-gray-700 hover:bg-blue-500 hover:text-white p-3 rounded-lg transition-all">
              <Train className="w-[28px] h-[28px] shrink-0" />
              <span className={`whitespace-nowrap overflow-hidden transition-all duration-300 ${isOpen ? "opacity-100 ml-3 w-auto" : "opacity-0 w-0"}`}>
                Schedules
              </span>
            </Link>
          </li>

          {/* Duty Logs */}
          <li>
            <Link href="/duty-logs" className="flex items-center text-gray-700 hover:bg-blue-500 hover:text-white p-3 rounded-lg transition-all">
              <ClipboardList className="w-[28px] h-[28px] shrink-0" />
              <span className={`whitespace-nowrap overflow-hidden transition-all duration-300 ${isOpen ? "opacity-100 ml-3 w-auto" : "opacity-0 w-0"}`}>
                Duty Logs
              </span>
            </Link>
          </li>

          {/* Notifications */}
          <li>
            <Link href="/notifications" className="flex items-center text-gray-700 hover:bg-blue-500 hover:text-white p-3 rounded-lg transition-all">
              <Bell className="w-[28px] h-[28px] shrink-0" />
              <span className={`whitespace-nowrap overflow-hidden transition-all duration-300 ${isOpen ? "opacity-100 ml-3 w-auto" : "opacity-0 w-0"}`}>
                Notifications
              </span>
            </Link>
          </li>

          {/* About */}
          {/* <li>
            <Link href="/about" className="flex items-center text-gray-700 hover:bg-blue-500 hover:text-white p-3 rounded-lg transition-all">
              <Info className="w-[28px] h-[28px] shrink-0" />
              <span className={`whitespace-nowrap overflow-hidden transition-all duration-300 ${isOpen ? "opacity-100 ml-3 w-auto" : "opacity-0 w-0"}`}>
                About
              </span>
            </Link>
          </li> */}

          {/* Settings */}
          <li>
            <Link href="/settings" className="flex items-center text-gray-700 hover:bg-blue-500 hover:text-white p-3 rounded-lg transition-all">
              <Settings className="w-[28px] h-[28px] shrink-0" />
              <span className={`whitespace-nowrap overflow-hidden transition-all duration-300 ${isOpen ? "opacity-100 ml-3 w-auto" : "opacity-0 w-0"}`}>
                Settings
              </span>
            </Link>
          </li>

          <li>
            <Link href="/" className="flex items-center text-gray-700 hover:bg-blue-500 hover:text-white p-3 rounded-lg transition-all">
              <LogOutIcon className="w-[28px] h-[28px] shrink-0" />
              <button onClick={handleLogout} className={`whitespace-nowrap overflow-hidden transition-all duration-300 ${isOpen ? "opacity-100 ml-3 w-auto" : "opacity-0 w-0"}`}>
                Log Out
              </button>
            </Link>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;

import React from "react";
import Features from "./Features";

const HeroSection = () => {
  return (
    <section className="bg-transparent p-6 text-center flex flex-col items-center justify-center min-h-[40vh]">
      <h1 className="lg:text-4xl md:text-2xl sm:text-2xl text-2xl font-bold bg-gradient-to-r from-blue-100 to-yellow-400 text-transparent bg-clip-text">
        <span className="text-[40px]">W</span>
        <span className="-ml-1">elcome to the Traveling Ticket Examiner Lobby Application</span>
      </h1>
      {/* <p className="text-md md:text-lg sm:text-md font-bold text-gray mt-3 max-w-4xl leading-relaxed">
        Manage TTE sign-on/off efficiently for originating, terminating, and passing trains with ease.
      </p> */}
      <Features />
    </section>
  );
};

export default HeroSection;

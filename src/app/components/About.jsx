"use client";
import React from "react";
import { content } from "../data/content";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row justify-between items-center bg-black text-white pb-6 pt-0 px-4"
    >
      <div className="md:w-1/2 space-y-4">
        <h1 className="text-6xl font-medium">
          Hello, <span className="text-pink-500">{content.aboutTitle}</span>
        </h1>
        <h2 className="text-6xl font-semibold">{content.aboutTitle2}</h2>
        <h1 className="text-6xl font-medium">{content.aboutLocation}</h1>
        <p className="text-gray-400 text-lg">{content.about}</p>

        <div className="mt-6 flex space-x-4">
          <button
            onClick={() =>
              document.getElementById("contact").scrollIntoView({
                behavior: "smooth",
              })
            }
            className="bg-white text-black font-semibold py-2 px-6 rounded-full hover:bg-gray-300"
          >
            Get in Touch
          </button>
          <button
            onClick={() =>
              document.getElementById("projects").scrollIntoView({
                behavior: "smooth",
              })
            }
            className="bg-transparent border-2 border-white text-white font-semibold py-2 px-6 rounded-full hover:bg-gray-700"
          >
            View All Works
          </button>
        </div>
      </div>

      <div className="mt-10 md:mt-0 md:w-1/2 flex justify-end">
        <img
          src="images/profile.png"
          alt="Creative Designer"
          className="max-h-[522px] max-w-md rounded-2xl object-cover"
        />
      </div>
    </section>
  );
};

export default About;

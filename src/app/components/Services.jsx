import React from "react";
import { services } from "../data/content";

const Services = () => {
  return (
    <section
      id="services"
      className="py-10 px-4 bg-black text-white transition-colors duration-300"
    >
      <h2 className="text-3xl font-bold text-center mb-8">My Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {services?.map((service, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
import React from "react";
import { content } from "../data/content";
import { FaArrowRight } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-6 bg-black text-white">
      <h2 className="text-4xl font-bold text-center mb-12">My Works</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12">
        {content?.projects.map((project, index) => (
          <div
            key={index}
            className="relative bg-gray-800 rounded-xl shadow-lg overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
            />

            <div className="p-6 space-y-4 relative z-10">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
              <p className="text-sm uppercase tracking-wide text-teal-400">
                {project.category}
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center cursor-pointer mt-4 text-teal-400 font-semibold hover:text-teal-300"
              >
                View Work
                <FaArrowRight className="ml-2" />
              </a>
            </div>

            <div
              className={`absolute inset-0 z-0 transition-opacity duration-500 ${index % 2 === 0 ? "bg-gradient-to-r" : "bg-gradient-to-l"} from-teal-500 to-transparent opacity-20`}
            ></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

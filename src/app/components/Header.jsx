"use client";
import React, { useState } from "react";
import { content } from "../data/content";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header class="sticky top-0 bg-black text-white p-4 z-50 px-4 sm:px-8 md:px-16 lg:px-20">
      <div className="flex justify-between items-center">
        <div className="text-3xl font-bold">
          <img
            src={content.profileImage}
            alt="Profile"
            className="rounded-full h-16 w-16 mr-4 cursor-pointer"
          />
        </div>
        <nav className="hidden sm:flex sm:items-center sm:space-x-8">
          <ul className="flex space-x-6 text-lg">
            <li>
              <button
                onClick={() =>
                  document.getElementById("about").scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="hover:text-gray-400 cursor-pointer"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  document.getElementById("services").scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="hover:text-gray-400 cursor-pointer"
              >
                Services
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  document.getElementById("projects").scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="hover:text-gray-400 cursor-pointer"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  document.getElementById("about").scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="hover:text-gray-400 cursor-pointer"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  document.getElementById("faq").scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="hover:text-gray-400 cursor-pointer"
              >
                FAQ's
              </button>
            </li>
          </ul>
        </nav>

        <div>
          <button
            onClick={() =>
              document.getElementById("contact").scrollIntoView({
                behavior: "smooth",
              })
            }
            className="bg-white text-black font-semibold py-2 px-6 rounded-full hover:bg-gray-300 hidden md:block"
          >
            Let's Talk
          </button>
        </div>

        <div className="sm:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            className="text-3xl focus:outline-none"
          >
            {isMenuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden mt-4">
          <ul className="space-y-4 text-lg">
            <li>
              <button
                onClick={() =>
                  document.getElementById("about").scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="hover:text-gray-400 cursor-pointer"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  document.getElementById("services").scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="hover:text-gray-400 cursor-pointer"
              >
                Services
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  document.getElementById("projects").scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="hover:text-gray-400 cursor-pointer"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  document.getElementById("about").scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="hover:text-gray-400 cursor-pointer"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  document.getElementById("faq").scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="hover:text-gray-400 cursor-pointer"
              >
                FAQ's
              </button>
            </li>

            <li>
              <button
                onClick={() =>
                  document.getElementById("contact").scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="bg-white text-black font-semibold py-2 px-6 rounded-full hover:bg-gray-300"
              >
                Let's Talk
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;

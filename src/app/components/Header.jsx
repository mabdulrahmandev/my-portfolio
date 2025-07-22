"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { content } from "../data/content";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    if (window.location.pathname === "/") {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(`/#${id}`);
    }

    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash) {
        const target = document.querySelector(hash);
        if (target) {
          setTimeout(() => {
            target.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      }
    }
  }, [pathname]);

  return (
    <header className="sticky top-0 bg-black text-white p-4 z-50 px-4 sm:px-8 md:px-16 lg:px-20">
      <div className="flex justify-between items-center">
        <div className="text-3xl font-bold">
          <img
            src={content.profileImage}
            alt="Profile"
            className="rounded-full h-16 w-16 mr-4 cursor-pointer"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex sm:items-center sm:space-x-8">
          <ul className="flex space-x-6 text-lg">
            {[
              { id: "about", label: "Home" },
              { id: "services", label: "Services" },
              { id: "projects", label: "Projects" },
              { id: "about", label: "About" },
              { id: "faq", label: "FAQ's" },
            ].map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="hover:text-gray-400 cursor-pointer"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button (Desktop) */}
        <div>
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-white text-black font-semibold py-2 px-6 rounded-full hover:bg-gray-300 hidden md:block"
          >
            Let's Talk
          </button>
        </div>

        {/* Mobile Menu Toggle */}
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden mt-4">
          <ul className="space-y-4 text-lg">
            {[
              { id: "about", label: "Home" },
              { id: "services", label: "Services" },
              { id: "projects", label: "Projects" },
              { id: "about", label: "About" },
              { id: "faq", label: "FAQ's" },
              { id: "contact", label: "Let's Talk", isCTA: true },
            ].map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={
                    item.isCTA
                      ? "bg-white text-black font-semibold py-2 px-6 rounded-full hover:bg-gray-300"
                      : "hover:text-gray-400 cursor-pointer"
                  }
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;

import React from "react";
import {
  FaHome,
  FaUser,
  FaPhone,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center p-6">
      <div className="flex justify-center space-x-6 mb-4">
        <a
          href="#home"
          className="flex items-center space-x-2 hover:text-teal-400"
        >
          <FaHome />
          <span>Home</span>
        </a>
        <a
          href="#about"
          className="flex items-center space-x-2 hover:text-teal-400"
        >
          <FaUser />
          <span>About me</span>
        </a>
        <a
          href="#contact"
          className="flex items-center space-x-2 hover:text-teal-400"
        >
          <FaPhone />
          <span>Contact</span>
        </a>
      </div>

      <div className="flex justify-center space-x-4 mb-4">
        <a
          href="https://github.com/mabdulrahmandev"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-teal-400"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/abdul-rahman-819964373/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-teal-400"
        >
          <FaLinkedin size={24} />
        </a>
      </div>

      <p className="text-sm">
        © {new Date().getFullYear()} Abdul Rahman. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;

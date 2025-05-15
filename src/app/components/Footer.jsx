import React from "react";
import {
  FaHome,
  FaUser,
  FaPhone,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center p-6">
      <div className="flex justify-center space-x-6 mb-4">
        {/* Navigation Links */}
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
        {/* Social Media Icons */}
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-teal-400"
        >
          <FaFacebook size={24} />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-teal-400"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-teal-400"
        >
          <FaTwitter size={24} />
        </a>
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-teal-400"
        >
          <FaYoutube size={24} />
        </a>
      </div>

      <p className="text-sm">
        © {new Date().getFullYear()} Your Name. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;

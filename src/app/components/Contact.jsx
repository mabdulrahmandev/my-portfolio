import React from "react";
import { content } from "../data/content";
import { HiMiniPaperAirplane } from "react-icons/hi2";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-10 px-8 bg-black text-white flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-8"
    >
      <div className="lg:w-1/2 flex flex-col items-start">
        <h2 className="text-3xl lg:text-6xl font-bold mb-4">
          {content.contact.title}{" "}
          <span className="text-teal-400">{content.contact.title2}</span>
        </h2>
        <div className="w-full max-w-sm mx-auto">
          <img
            src="images/contact-illustration.png"
            alt="Contact Illustration"
            className="w-64 h-80"
          />
        </div>
      </div>

      <div className="lg:w-1/2 bg-black rounded-lg p-8 shadow-lg">
        <form>
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-base font-bold text-gray-300"
              >
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                className="mt-1 p-2 block w-full rounded-md bg-[#393E46] border-transparent focus:border-teal-500 focus:bg-gray-900 focus:ring-0 text-gray-100"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-base font-bold text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="mt-1 p-2 block w-full rounded-md bg-[#393E46] border-transparent focus:border-teal-500 focus:bg-gray-900 focus:ring-0 text-gray-100"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-base font-bold text-gray-300"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Message"
                className="mt-1 p-2 block w-full rounded-md bg-[#393E46] border-transparent focus:border-teal-500 focus:bg-gray-900 focus:ring-0 text-gray-100"
              ></textarea>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              className="bg-teal-500 flex items-center text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-teal-600 transition duration-300"
            >
              Send Message <HiMiniPaperAirplane  className="text-white ml-2 mt-1" size={18} />
              
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

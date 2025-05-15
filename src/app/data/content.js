export const content = {
  name: "Abdul Rahman",
  title: "Frontend Developer",
  profileImage: "/images/logo.webp",
  aboutTitle: "I'm Abdul Rahman.",
  aboutTitle2: "I'm a Developer",
  aboutLocation: "in Pakistan.",
  about:
    "Lorem ipsum dolor sit amet consectetur. At libero sit nec tincidunt eu at semper. Pharetra duis ipsum laoreet amet sem imperdiet cras feugiat. Lacinia feugiat duis pellentesque et nec ipsum est.",
  skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  projects: [
    {
      title: "Project 1",
      description: "Description of project 1.",
      link: "https://github.com/yourusername/project1",
      image: "/images/project1.png",
    },
    {
      title: "Project 2",
      description: "Description of project 2.",
      link: "https://github.com/yourusername/project2",
      image: "/images/project2.png",
    },
    {
      title: "Project 3",
      description: "Description of project 3.",
      link: "https://github.com/yourusername/project2",
      image: "/images/project3.png",
    },
  ],
  contact: {
    title: "Got a project in",
    title2: "mind?",
  },
};

import {
  FaCode,
  FaPencilRuler,
  FaHeadphones,
  FaGamepad,
  FaCamera,
  FaBullhorn,
} from "react-icons/fa";

export const services = [
  {
    icon: <FaCode className="text-teal-400" size={40} />,
    title: "Web Development",
    description: "Blog, E-Commerce",
  },
  {
    icon: <FaPencilRuler className="text-teal-400" size={40} />,
    title: "UI/UX Design",
    description: "Mobile App, Website Design",
  },
  {
    icon: <FaHeadphones className="text-teal-400" size={40} />,
    title: "Sound Design",
    description: "Voice Over, Beat Making",
  },
  {
    icon: <FaGamepad className="text-teal-400" size={40} />,
    title: "Game Design",
    description: "Character Design, Props & Objects",
  },
  {
    icon: <FaCamera className="text-teal-400" size={40} />,
    title: "Photography",
    description: "Portrait, Product Photography",
  },
  {
    icon: <FaBullhorn className="text-teal-400" size={40} />,
    title: "Advertising",
    description: "Marketing Campaigns, Digital Advertising",
  },
];

// src/data/content.js
export const content = {
  name: "Abdul Rahman",
  title: "Full-Stack JavaScript Developer",
  profileImage: "/images/logo.webp",

  aboutTitle: "I'm Abdul Rahman.",
  aboutTitle2: "I build web & mobile apps",
  aboutLocation: "based in Pakistan.",
  about: `
  I'm a JavaScript developer who turns ideas into fast, accessible products.
  On the web I reach for React + Next.js, on mobile for React Native, and on
  the server for Node/Express—all typed, tested, and shipped through GitHub-
  driven CI/CD. I sweat the details of performance and clean code so users
  (and future devs) stay happy.
`.trim(),

  skills: [
    "HTML5",
    "CSS3 / Sass",
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Next.js",
    "React Native",
    "Node.js",
    "Express.js",
    "Tailwind CSS",
    "Redux",
    "REST / GraphQL",
    "Git",
    "GitHub Actions",
    "Figma",
  ],

  projects: [
    {
      title: "Homematchx",
      description: "Description of project 1.",
      link: "https://homematchx.com/",
      image: "/images/project1.png",
    },
    {
      title: "Algomnia",
      description: "Description of project 2.",
      link: "https://algomnia.com/",
      image: "/images/project2.png",
    },
    {
      title: "No Contact Send",
      description: "Description of project 3.",
      link: "https://nocontactsend.com/",
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
  FaTools,
  FaMobileAlt,
  FaSyncAlt,
  FaPencilRuler,
  FaRocket
} from "react-icons/fa";

export const services = [
  {
    icon: <FaCode className="text-teal-400" size={40} />,
    title: "Web Development",
    description: "Next.js • Headless CMS • E-commerce",
  },
  {
    icon: <FaTools className="text-teal-400" size={40} />,
    title: "Site Maintenance",
    description: "Bug fixes • Security • Performance",
  },
  {
    icon: <FaMobileAlt className="text-teal-400" size={40} />,
    title: "App Development",
    description: "iOS & Android • Hybrid/Native",
  },
  {
    icon: <FaSyncAlt className="text-teal-400" size={40} />,
    title: "App Maintenance",
    description: "Feature updates • Version upgrades",
  },
  {
    icon: <FaPencilRuler className="text-teal-400" size={40} />,
    title: "UI / UX Design",
    description: "Wireframes • Prototypes • Design systems",
  },
  {
    icon: <FaRocket className="text-teal-400" size={40} />,
    title: "Performance Optimization",
    description: "Lighthouse audits • SEO core vitals",
  }
];

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

  faqData: [
    {
      question: "What is your process for starting a project?",
      answer: "I start by understanding your goals and requirements through discussions and research. Once I have a clear vision, I create a detailed project plan, followed by wireframing and designing. After approval, I move on to development and testing, and finally, deployment and maintenance.",
    },
    {
      question: "Do you provide ongoing support after the project is completed?",
      answer: "Yes, I offer ongoing support after the project is completed. This includes fixing bugs, adding new features, and ensuring the project stays up-to-date with the latest technologies.",
    },
    {
      question: "How long does it take to complete a project?",
      answer: "The timeline varies depending on the complexity and scope of the project. A basic web app could take a few weeks, while more complex applications may take a few months. I ensure to provide an estimated timeline upfront after understanding your requirements.",
    },
    {
      question: "What is the cost of your services?",
      answer: "The cost depends on the scope of the project, including its size, complexity, and specific requirements. I offer competitive pricing and will provide a quote after discussing your project in detail.",
    },
    {
      question: "Do you work with clients outside of Pakistan?",
      answer: "Yes, I work with clients globally. Communication is primarily handled through email, video calls, and project management tools to ensure smooth collaboration, regardless of your location.",
    },
    {
      question: "What is the difference between hybrid and native app development?",
      answer: "A hybrid app is built using web technologies like JavaScript and works on both iOS and Android, while a native app is developed specifically for one platform using platform-specific languages (Swift for iOS, Kotlin for Android). Hybrid apps are faster to develop and maintain, while native apps offer better performance and access to platform-specific features.",
    },
    {
      question: "How do you handle version control?",
      answer: "I use Git and GitHub for version control. This allows me to track changes, collaborate with other developers, and ensure that the code is always backed up and organized. It also enables efficient deployment through continuous integration pipelines.",
    },
    {
      question: "What do you mean by 'performance optimization'?",
      answer: "Performance optimization involves improving the speed, responsiveness, and overall performance of your web or mobile application. I focus on minimizing load times, optimizing code, improving SEO scores, and conducting regular audits to ensure your app delivers the best user experience.",
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

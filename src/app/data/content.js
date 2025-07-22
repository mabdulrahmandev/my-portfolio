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
      id: "homematchx",
      title: "Homematchx",
      overview: "A responsive React landing page for an online real‑estate matchmaking service, turning property search into a user‑friendly dating metaphor.",
      role: "Frontend Engineer",
      responsibilities: [
        "Translate Figma mockups into React with React‑Bootstrap + custom CSS",
        "Implement scroll‑spy navigation and smooth-scrolling hero sections",
        "Build reusable components: feature cards, animated counters, sign‑up modal"
      ],
      techStack: ["React", "React‑Bootstrap", "CSS3 (Flex, Grid)", "SVG Icons", "ARIA"],
      keyFeatures: [
        "Hero section with bold tagline and smooth scroll CTA",
        "Automated Offer Tracking, Buyer Behavior Analytics & Instant Inspection cards",
        "Animated number counters highlighting platform stats",
        "“How It Works” flow section with custom SVG icons",
        "Testimonials carousel with form‑validated user input",
        "Accessible sign‑up modal connected to backend API"
      ],
      challenges: [
        "Maintaining pixel‑perfect fidelity across breakpoints → solved with custom Bootstrap theming",
        "Ensuring keyboard/ARIA accessibility for modals and dynamic content"
      ],
      outcomes: [
        "Achieved 99% Lighthouse accessibility score",
        "Reduced initial TTFB by 40% via code‑splitting",
        "Increased demo sign‑ups by 25% in A/B tests"
      ],
      timeline: "Mar 2025 – May 2025",
      link: "https://homematchx.com/",
      category: "Landing Page / Real Estate",
      image: "/images/project1.png"
    },
    {
      id: "algomnia",
      title: "Algomnia",
      overview: "A static Next.js landing site for a trading analytics platform, emphasizing trust metrics and tiered pricing.",
      role: "Full‑Stack Developer (Frontend‑Heavy)",
      responsibilities: [
        "Build Next.js pages styled with a custom CSS design system",
        "Implement sticky header with contextual CSS tooltips",
        "Create reusable PricingTable, FAQ accordion, testimonial carousel components"
      ],
      techStack: ["Next.js", "React Hooks", "Custom CSS", "ARIA‑compliant markup"],
      keyFeatures: [
        "Animated counters for “+10,000 Traders Trust Us” and “72% Success Rate”",
        "Pricing table component with mobile‑first hover states",
        "FAQ accordion using client‑side React state",
        "High‑performance images via Next.js <Image> and code‑splitting"
      ],
      challenges: [
        "Animating counters without layout jank → optimized with requestAnimationFrame",
        "Ensuring mobile-first responsiveness down to 320 px widths"
      ],
      outcomes: [
        "Reduced LCP by 1.2s after image optimization",
        "Improved user engagement on Pricing page by 30%"
      ],
      timeline: "Jan 2025 – Feb 2025",
      link: "https://algomnia.com/",
      category: "Landing Page / FinTech",
      image: "/images/project2.png"
    },
    {
      id: "nocontactsend",
      title: "No Contact Send",
      overview: "A lightweight utility web app that lets anyone send WhatsApp messages without saving recipient numbers.",
      role: "Frontend Developer",
      responsibilities: [
        "Hand‑code semantic HTML5 and CSS3 for a minimalist form",
        "Implement WhatsApp URL‑scheme integration for Web & native",
        "Design accessible 3‑step “How It Works” illustrations with CSS Grid"
      ],
      techStack: ["HTML5", "CSS3 (Grid, Custom Properties)", "Vanilla JS"],
      keyFeatures: [
        "Simple form: phone input, message textarea, send button",
        "Dynamic URL scheme to open WhatsApp Web or native app",
        "FAQ preview grid with hover effects",
        "Fully accessible labels, focus states, and placeholders"
      ],
      challenges: [
        "Ensuring compatibility across WhatsApp Web and mobile app → tested URL schemes per platform",
        "Maintaining performant styles in a pure‑CSS design"
      ],
      outcomes: [
        "Under 50 KB total page weight → loads in <0.5 s on 3G",
        "Achieved WCAG AA compliance for form elements"
      ],
      timeline: "Nov 2024",
      link: "https://nocontactsend.com/",
      category: "Utility Web App",
      image: "/images/project3.png"
    },
    {
      id: "nimble",
      title: "Nimble (Snap, Pay & Go)",
      overview: "A React Native mobile screen for browsing recipes and ordering ingredients seamlessly within the app.",
      role: "Mobile Frontend Engineer",
      responsibilities: [
        "Convert Figma Recipes screen to React Native with StyleSheet API",
        "Build RecipeCard & IngredientItem components with hooks for state",
        "Integrate async/await REST APIs for cart & order management"
      ],
      techStack: ["React Native", "RESTful APIs", "Async/Await", "React Hooks"],
      keyFeatures: [
        "Scrollable recipe list with images, titles, descriptions",
        "Detail overlay: ingredient checklist & step‑by‑step instructions",
        "Persistent cart creation & order status polling",
        "Loading spinners, error alerts, and retry logic"
      ],
      challenges: [
        "Handling network latencies → implemented retry and exponential backoff",
        "State management for nested ingredient selection → optimized with memoization"
      ],
      outcomes: [
        "90% crash‑free users after release",
        "Reduced order‑flow errors by 60% via improved UX feedback"
      ],
      timeline: "Apr 2025 – Jun 2025",
      link: "https://play.google.com/store/apps/details?id=com.nimble.snap.pay",
      category: "Mobile App / React Native",
      image: "/images/project3.png"
    },
    {
      id: "techstone",
      title: "Techstone",
      overview: "A multi‑page Next.js/Tailwind corporate site for Techstone Global, showcasing services, case studies, blogs, and contact info.",
      role: "Lead Frontend Developer",
      responsibilities: [
        "Architect Next.js pages with Tailwind CSS utility classes",
        "Implement site‑wide sticky navbar and smooth‑scroll interactions",
        "Build filterable blog list, case studies grid, and contact form"
      ],
      techStack: ["Next.js", "Tailwind CSS", "React", "Leaflet (embedded map)"],
      keyFeatures: [
        "Services page with custom hover cards for 7 offerings",
        "Case Studies: responsive grid with category filters",
        "Blogs: dynamic tag filtering and pagination",
        "Contact form with embedded map and quick‑links footer"
      ],
      challenges: [
        "Maintaining consistent design tokens in Tailwind → extended config",
        "Optimizing blog images for SEO and performance"
      ],
      outcomes: [
        "SEO improved: +15% organic traffic in first month",
        "Time‑to‑interactive under 2s globally"
      ],
      timeline: "Feb 2025 – Apr 2025",
      link: "https://techstoneglobal.com/",
      category: "Corporate / Agency Website",
      image: "/images/project2.png"
    },
    {
      id: "hopdial-insight",
      title: "HopDial Insight",
      overview: "A React/Vite portal for filtering, playing, and analyzing client call recordings with dynamic charts and search.",
      role: "Frontend Developer",
      responsibilities: [
        "Set up Vite + React + Reactstrap project structure",
        "Create paginated, filterable Recordings list with inline player",
        "Integrate SWR‑based data fetching and Recharts for analytics"
      ],
      techStack: ["Vite", "React", "Reactstrap", "SWR", "Recharts"],
      keyFeatures: [
        "Searchable recordings table with date picker & dropdown filters",
        "Inline HTML5 audio player with metadata display",
        "Statistics dashboard: total calls, avg. duration, sentiment scores",
        "Loading/error states with spinners and alerts"
      ],
      challenges: [
        "Managing large audio lists → implemented virtual scrolling",
        "Ensuring chart responsiveness → configured dynamic resizing"
      ],
      outcomes: [
        "User satisfaction ↑ by 20% per internal survey",
        "Reduced load times on large datasets by 50% through caching"
      ],
      timeline: "May 2025 – Jul 2025",
      link: "https://insight.hopdial.com/",
      category: "Web App / Audio Records & Analytics",
      image: "/images/project1.png"
    }
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

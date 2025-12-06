import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "FindYourHouse",
    category: ["React.js", "Firebase"],
    description:
      "FindYourHouse is a modern web application built with React.js and Firebase, designed to help users search, filter, and book rental houses across different cities in Morocco.",
    image: "/Macbook-Air-localhost (2).png",
    github: "https://github.com/DEVLOPMENTPrg12/find-your-house",
    live: "https://find-your-house-udx1.vercel.app/",
  },
  {
    title: "Bilal Clothing",
    category: ["React.js", "Node.js", "Express.js", "MongoDB"],
    description:
      "Bilal Clothing is a full-featured e-commerce website for clothing, built with React.js for the frontend and Node.js + Express.js for the backend, using MongoDB as the database. The platform includes both a User Interface and a professional Admin Dashboard.",
    image: "/Macbook-Air-bilal-clothing-e8zn.vercel.app.png",
    github: "https://github.com/DEVLOPMENTPrg12/Bilal-Clothing",
    live: "https://bilal-clothing-e8zn.vercel.app/",
  },
  
  {
  title: "Supermarket Stock & Sales Management System",
  category: ["React.js", "Node.js", "Express.js", "MongoDB"],
  description:
"A complete stock and sales management system for a supermarket, featuring a dashboard, POS, inventory with barcode support, supplier/client tracking, expiration alerts, and role-based authentication.",
  image: "/Macbook-Air-localhost (3).png",
  github: "https://github.com/DEVLOPMENTPrg12/supermarket-management",
    live: "https://bilal-clothing-e8zn.vercel.app/",
  
}

];

export default function Projects({ darkMode }) {
  const sectionBg = darkMode ? "bg-gray-900" : "bg-gray-100";
  const textColor = darkMode ? "text-white" : "text-gray-900";
  const subText = darkMode ? "text-gray-300" : "text-gray-700";
  const cardBg = darkMode ? "bg-gray-800" : "bg-white";
  const cardHover = darkMode ? "hover:bg-gray-700" : "hover:bg-gray-200";
  const borderColor = darkMode ? "border-gray-700" : "border-gray-300";

  return (
    <section
      id="projects"
      className={`${sectionBg} ${textColor} py-24 px-6 md:px-20 transition-colors duration-300`}
    >
      {/* Section Header */}
      <div className="text-center mb-20 relative">
        <h1 className="text-[6rem] font-extrabold opacity-10 absolute inset-x-0 top-8 z-0 select-none text-gray-800">
          Projects
        </h1>
        <h2
          className={`text-4xl md:text-5xl font-bold mb-4 ${
            darkMode ? "text-blue-400" : "text-blue-500"
          } relative z-10`}
        >
          My Projects
        </h2>
        <p className={`${subText} relative z-10 max-w-2xl mx-auto`}>
          Here are some of the projects I've worked on — combining creativity,
          modern UI, and solid code.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className={`${cardBg} rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border ${borderColor} ${cardHover}`}
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Project Image */}
            <div className="relative w-full h-60 overflow-hidden">
              <img
                src={project.image}
                alt={`Screenshot of ${project.title}`}
                className="w-full h-full object-contain rounded-t-2xl bg-black/5"
              />
            </div>

            {/* Project Details */}
            <div className="p-6 flex flex-col justify-between h-[300px]">
              <div>
                <h3 className={`text-2xl font-semibold mb-2 ${textColor}`}>
                  {project.title}
                </h3>

                {/* Tech stack badges */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.category.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className={`${subText} text-sm mb-6 leading-relaxed`}>
                  {project.description}
                </p>
              </div>

              {/* Buttons — on the same line */}
              <div className="flex justify-between items-center mt-auto gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    darkMode
                      ? "bg-gray-700 hover:bg-gray-600 text-white"
                      : "bg-gray-200 hover:bg-gray-300 text-gray-900"
                  }`}
                  aria-label={`View ${project.title} code on GitHub`}
                >
                  <FaGithub className="text-lg" /> Code
                </a>
                {project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      darkMode
                        ? "bg-blue-500 hover:bg-blue-600 text-white"
                        : "bg-blue-500 hover:bg-blue-600 text-white"
                    }`}
                    aria-label={`View ${project.title} live demo`}
                  >
                    <FaExternalLinkAlt className="text-sm" /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

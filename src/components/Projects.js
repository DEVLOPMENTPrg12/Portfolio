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
      "Bilal Clothing is a full-featured e-commerce website for clothing, built with React.js for the frontend and Node.js + Express.js for the backend, using MongoDB as the database. Includes a professional Admin Dashboard.",
    image: "/Macbook-Air-bilal-clothing-e8zn.vercel.app.png",
    github: "https://github.com/DEVLOPMENTPrg12/Bilal-Clothing",
    live: "https://bilal-clothing-e8zn.vercel.app/",
  },
  {
    title: "Supermarket Management",
    category: ["React.js", "Node.js", "Express.js", "MongoDB"],
    description:
      "A complete stock and sales management system featuring a dashboard, POS, inventory with barcode support, supplier/client tracking, and role-based authentication.",
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
        <h1 className="text-[6rem] font-extrabold opacity-10 absolute inset-x-0 top-8 z-0 select-none text-gray-800 hidden md:block">
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
            className={`${cardBg} rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border ${borderColor} ${cardHover} flex flex-col h-full`}
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Project Image */}
            <div className="relative w-full h-52 md:h-60 overflow-hidden bg-black/5">
              <img
                src={project.image}
                alt={`Screenshot of ${project.title}`}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Project Details */}
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex-grow">
                <h3 className={`text-2xl font-semibold mb-2 ${textColor}`}>
                  {project.title}
                </h3>

                {/* Tech stack badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.category.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-bold px-2 py-1 rounded-md bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 uppercase tracking-tighter"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className={`${subText} text-sm mb-6 leading-relaxed`}>
                  {project.description}
                </p>
              </div>

              {/* Buttons Area - Always at the bottom */}
              <div className="flex justify-between items-center gap-4 mt-4 pt-4 border-t border-gray-700/10 dark:border-gray-200/10">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 flex-1 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    darkMode
                      ? "bg-gray-700 hover:bg-gray-600 text-white"
                      : "bg-gray-200 hover:bg-gray-300 text-gray-900"
                  }`}
                >
                  <FaGithub className="text-lg" /> Code
                </a>
                
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 flex-1 px-4 py-2.5 rounded-xl text-sm font-semibold bg-blue-500 hover:bg-blue-600 text-white shadow-md shadow-blue-500/20 transition-all duration-300"
                  >
                    <FaExternalLinkAlt className="text-xs" /> Live
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
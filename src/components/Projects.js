import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Beddelt l-icon l LinkedIn

const projects = [
  {
    title: "LOGISTICS PRO",
    category: ["MERN Stack", "RBAC", "Tailwind CSS"],
    description:
      "A comprehensive logistics solution with a dual-engine architecture: an Admin Command Center for total visibility and a Driver's Digital Hub for simplified delivery updates and earnings tracking.",
    image: "/Macbook-Air-localhost.png",
    github: "https://github.com/DEVLOPMENTPrg12/LOGISTICS-PRO",
    linkedin: "https://www.linkedin.com/posts/bilal-el-allam-468131371_fullstackdeveloper-webdevelopment-logisticstech-activity-7441971308332011520-Fbg6?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFwImFABm3dtZnPaXDeqSfh5RUyT9k84l4Y", // Zid l-link d l-post hna
  },
  {
    title: "Bilal Clothing",
    category: ["React.js", "Node.js", "Express.js", "MongoDB"],
    description:
      "A full-featured e-commerce platform for clothing, featuring a sleek user interface and a professional admin dashboard for managing inventory and orders.",
    image: "/Macbook-Air-bilal-clothing-e8zn.vercel.app.png",
    github: "https://github.com/DEVLOPMENTPrg12/Bilal-Clothing",
    linkedin: "#", 
  },
  {
    title: "Supermarket Management",
    category: ["React.js", "Node.js", "Express.js", "MongoDB"],
    description:
      "Complete stock and sales management system featuring a POS interface, barcode support, supplier tracking, and role-based authentication.",
    image: "/Macbook-Air-localhost (3).png",
    github: "https://github.com/DEVLOPMENTPrg12/supermarket-management",
    linkedin: "https://www.linkedin.com/posts/bilal-el-allam-468131371_reactjs-nodejs-mongodb-activity-7402816078755561472-d3w-?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFwImFABm3dtZnPaXDeqSfh5RUyT9k84l4Y",
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
          Check out my work—from full-stack systems to modern web applications.
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
                alt={project.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Project Details */}
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex-grow">
                <h3 className={`text-2xl font-semibold mb-2 ${textColor}`}>
                  {project.title}
                </h3>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.category.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-bold px-2 py-1 rounded-md bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 uppercase"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className={`${subText} text-sm mb-6 leading-relaxed`}>
                  {project.description}
                </p>
              </div>

              {/* Buttons Area */}
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
                
                {/* LinkedIn Button f blas l-Live Demo */}
                <a
                  href={project.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 flex-1 px-4 py-2.5 rounded-xl text-sm font-semibold bg-[#0077b5] hover:bg-[#005582] text-white shadow-md transition-all duration-300"
                >
                  <FaLinkedin className="text-lg" /> Watch Post
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
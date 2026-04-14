import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const projects = [
  {
    title: "LOGISTICS PRO",
    category: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    description:
      "A high-performance logistics solution featuring a dual-engine architecture for real-time delivery tracking and role-based management.",
    image: "/Macbook-Air-localhost.png",
    github: "https://github.com/DEVLOPMENTPrg12/LOGISTICS-PRO",
    linkedin: "https://www.linkedin.com/posts/bilal-el-allam-468131371_fullstackdeveloper-webdevelopment-logisticstech-activity-7441971308332011520-Fbg6",
  },
  {
    title: "Bilal Clothing",
    category: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    description:
      "A premium clothing store experience with a custom admin dashboard for seamless inventory control and sales analytics.",
    image: "/Macbook-Air-bilal-clothing-e8zn.vercel.app.png",
    github: "https://github.com/DEVLOPMENTPrg12/Bilal-Clothing",
    linkedin: "#",
  },
  {
    title: "Supermarket Management",
    category:["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    description:
      "Enterprise-grade stock management featuring barcode integration, automated reporting, and intuitive sales tracking.",
    image: "/Macbook-Air-localhost (3).png",
    github: "https://github.com/DEVLOPMENTPrg12/supermarket-management",
    linkedin: "https://www.linkedin.com/posts/bilal-el-allam-468131371_reactjs-nodejs-mongodb-activity-7402816078755561472-d3w-",
  }
];

export default function Projects({ darkMode }) {
  return (
    <section id="projects" className={`py-24 px-6 md:px-20 transition-colors duration-500 ${darkMode ? "bg-[#0b0f1a]" : "bg-gray-50"}`}>
      
      {/* Section Header with Gradient Underline */}
      <div className="text-center mb-20">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-blue-500 font-bold tracking-[0.2em] uppercase text-sm"
        >
          Portfolio
        </motion.span>
        <h2 className={`text-4xl md:text-6xl font-black mt-3 mb-6 ${darkMode ? "text-white" : "text-gray-900"}`}>
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Projects</span>
        </h2>
        <div className="h-1.5 w-24 bg-blue-500 mx-auto rounded-full"></div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`group relative rounded-3xl overflow-hidden border transition-all duration-500 ${
              darkMode 
                ? "bg-[#161b2c]/50 border-gray-800 hover:border-blue-500/50 shadow-2xl shadow-blue-500/5" 
                : "bg-white border-gray-200 hover:border-blue-400 shadow-xl"
            }`}
          >
            {/* Image Container with Overlay */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                 <p className="text-white text-sm font-medium">View detailed case study</p>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.category.map((tech, idx) => (
                  <span key={idx} className={`text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-wider ${
                    darkMode ? "bg-blue-500/10 text-blue-400" : "bg-blue-50 text-blue-600"
                  }`}>
                    {tech}
                  </span>
                ))}
              </div>

              <h3 className={`text-2xl font-bold mb-3 ${darkMode ? "text-white" : "text-gray-900"}`}>
                {project.title}
              </h3>
              
              <p className={`text-sm leading-relaxed mb-8 h-20 overflow-hidden ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                {project.description}
              </p>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all ${
                    darkMode 
                      ? "bg-gray-800 text-white hover:bg-gray-700" 
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  <FaGithub size={18} /> Source
                </a>
                <a
                  href={project.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 transition-all"
                >
                  <FaLinkedin size={18} /> Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
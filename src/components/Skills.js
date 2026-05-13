import { motion } from "framer-motion";
import { 
  FaReact, FaNodeJs, FaGitAlt, FaDatabase, FaCode, FaServer, FaPenNib, FaFileWord 
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiMysql, SiPostman, SiAdobephotoshop, SiCanva } from "react-icons/si";

const skillCategories = [
  {
    category: "Front-End Development",
    icon: <FaCode />,
    skills: [
      { name: "React.js", icon: <FaReact className="text-blue-400" />, tag: "Expert" },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" />, tag: "Advanced" },
      { name: "Responsive Design", icon: <div className="w-2 h-2 bg-blue-500 rounded-full" />, tag: "Fluent" },
    ],
  },
  {
    category: "Back-End & Databases",
    icon: <FaServer />,
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, tag: "Advanced" },
      { name: "SQL / MySQL", icon: <SiMysql className="text-blue-600" />, tag: "Expert" },
      { name: "MongoDB", icon: <SiMongodb className="text-emerald-500" />, tag: "Advanced" },
    ],
  },
  {
    category: "Tools & Workflow",
    icon: <FaGitAlt />,
    skills: [
      { name: "Git & GitHub", icon: <FaGitAlt className="text-orange-600" />, tag: "Proficient" },
      { name: "Postman API", icon: <SiPostman className="text-orange-500" />, tag: "Advanced" },
      { name: "RESTful APIs", icon: <div className="w-2 h-2 bg-orange-500 rounded-full" />, tag: "Expert" },
    ],
  },
  {
    category: "Design & Professional",
    icon: <FaPenNib />,
    skills: [
      { name: "Photoshop / Canva", icon: <SiAdobephotoshop className="text-blue-800" />, tag: "Creative" },
      { name: "MS Office Suite", icon: <FaFileWord className="text-blue-700" />, tag: "Specialist" },
    ],
  },
];

export default function Skills({ darkMode }) {
  return (
    <section
      id="skills"
      className={`py-24 px-6 md:px-20 transition-all duration-500 ${
        darkMode ? "bg-[#0b0f1a]" : "bg-gray-50"
      }`}
    >
      {/* Header */}
      <div className="text-center mb-20">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-blue-500 font-bold tracking-[0.2em] uppercase text-sm"
        >
          My Stack
        </motion.span>
        <h2 className={`text-4xl md:text-5xl font-black mt-3 mb-6 ${darkMode ? "text-white" : "text-gray-900"}`}>
          Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Expertise</span>
        </h2>
        <div className="h-1.5 w-20 bg-blue-500 mx-auto rounded-full"></div>
      </div>

      {/* Skills Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((cat, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={`p-6 rounded-3xl border transition-all duration-300 hover:scale-[1.02] ${
              darkMode 
                ? "bg-[#161b2c]/50 border-gray-800 hover:border-blue-500/50 shadow-2xl" 
                : "bg-white border-gray-100 hover:border-blue-300 shadow-xl"
            }`}
          >
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 text-2xl ${
              darkMode ? "bg-blue-500/10 text-blue-400" : "bg-blue-50 text-blue-600"
            }`}>
              {cat.icon}
            </div>

            <h3 className={`text-lg font-bold mb-6 ${darkMode ? "text-white" : "text-gray-900"}`}>
              {cat.category}
            </h3>

            <div className="space-y-4">
              {cat.skills.map((skill, index) => (
                <div key={index} className="flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <span className="text-xl transition-transform group-hover:scale-110">
                      {skill.icon}
                    </span>
                    <span className={`text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                      {skill.name}
                    </span>
                  </div>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                    darkMode ? "bg-gray-800 text-blue-400" : "bg-gray-100 text-blue-600"
                  }`}>
                    {skill.tag}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
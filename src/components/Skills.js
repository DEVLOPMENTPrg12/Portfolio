import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Front-End Development",
    skills: [
      { name: "React.js", level: 88, color: "from-blue-500 to-cyan-400" },
      { name: "Tailwind CSS", level: 90, color: "from-blue-400 to-indigo-500" },
    ],
  },
  {
    category: "Back-End & Databases",
    skills: [
      { name: "Node.js", level: 80, color: "from-green-500 to-emerald-400" },
      { name: "SQL / MySQL", level: 85, color: "from-blue-600 to-sky-400" },
      { name: "MongoDB", level: 75, color: "from-emerald-600 to-green-400" },
    ],
  },
  {
    category: "Tools & Collaboration",
    skills: [
      { name: "Git & GitHub", level: 90, color: "from-gray-700 to-gray-900" },
      { name: "Postman", level: 85, color: "from-orange-500 to-red-400" },
    ],
  },
  {
    category: "Design & Office",
    skills: [
      { name: "Photoshop / Canva", level: 85, color: "from-pink-500 to-purple-500" },
      { name: "Microsoft Office", level: 90, color: "from-blue-700 to-blue-500" },
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
          Expertise
        </motion.span>
        <h2 className={`text-4xl md:text-5xl font-black mt-3 mb-6 ${darkMode ? "text-white" : "text-gray-900"}`}>
          Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Skills</span>
        </h2>
        <div className="h-1.5 w-20 bg-blue-500 mx-auto rounded-full"></div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {skillCategories.map((cat, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`p-8 rounded-3xl border ${
              darkMode 
                ? "bg-[#161b2c]/50 border-gray-800 shadow-2xl shadow-blue-500/5" 
                : "bg-white border-gray-100 shadow-xl shadow-gray-200/50"
            }`}
          >
            <h3 className={`text-xl font-bold mb-8 flex items-center gap-3 ${
              darkMode ? "text-blue-400" : "text-blue-600"
            }`}>
              <span className="w-8 h-1 bg-current rounded-full"></span>
              {cat.category}
            </h3>

            <div className="space-y-8">
              {cat.skills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between items-end mb-3">
                    <span className={`font-bold tracking-wide transition-colors ${
                      darkMode ? "text-gray-200 group-hover:text-white" : "text-gray-700 group-hover:text-black"
                    }`}>
                      {skill.name}
                    </span>
                    <span className="text-xs font-black opacity-50">{skill.level}%</span>
                  </div>
                  
                  {/* Modern Thin Progress Bar */}
                  <div className={`w-full h-2 rounded-full overflow-hidden ${
                    darkMode ? "bg-gray-800" : "bg-gray-200"
                  }`}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color} relative shadow-[0_0_10px_rgba(59,130,246,0.5)]`}
                    >
                      {/* Animated Glow Tip */}
                      <div className="absolute right-0 top-0 h-full w-2 bg-white/30 blur-[2px]"></div>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
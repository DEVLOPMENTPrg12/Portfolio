import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Front-End Development",
    skills: [
      { name: "React.js", level: 88, color: "from-blue-400 to-blue-600" },
      { name: "Tailwind CSS", level: 90, color: "from-cyan-400 to-cyan-600" },
    ],
  },
  {
    category: "Back-End & Databases",
    skills: [
      { name: "Node.js", level: 80, color: "from-lime-400 to-lime-600" },
      { name: "SQL / MySQL", level: 85, color: "from-orange-400 to-orange-600" },
      { name: "MongoDB", level: 75, color: "from-emerald-400 to-emerald-600" },
    ],
  },
  {
    category: "Tools & Collaboration",
    skills: [
      { name: "Git & Git Bash", level: 90, color: "from-gray-500 to-gray-700" },
      { name: "GitHub", level: 90, color: "from-black to-gray-800" },
      { name: "Postman", level: 85, color: "from-orange-300 to-orange-500" },
    ],
  },
  {
    category: "Design & Multimedia",
    skills: [
      { name: "Photoshop", level: 80, color: "from-pink-400 to-pink-600" },
      { name: "Lightroom", level: 70, color: "from-purple-400 to-purple-600" },
      { name: "Canva", level: 85, color: "from-fuchsia-400 to-fuchsia-600" },
    ],
  },
  {
    category: "Other Skills",
    skills: [
      { name: "Excel", level: 85, color: "from-green-600 to-green-800" },
      { name: "Word", level: 90, color: "from-blue-600 to-blue-800" },
      { name: "PowerPoint", level: 88, color: "from-red-500 to-red-700" },
      { name: "Google Ads", level: 70, color: "from-yellow-400 to-yellow-600" },
    ],
  },
];

export default function Skills({ darkMode }) {
  const sectionBg = darkMode ? "bg-gray-900" : "bg-gray-100";
  const textColor = darkMode ? "text-white" : "text-gray-900";
  const textSub = darkMode ? "text-gray-300" : "text-gray-700";
  const cardBg = darkMode ? "bg-gray-800" : "bg-white";

  return (
    <section
      id="skills"
      className={`${sectionBg} ${textColor} py-24 px-6 md:px-20 transition-colors duration-300`}
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <h2
          className="text-5xl font-extrabold mb-4"
          style={{ color: darkMode ? "#60a5fa" : "#3b82f6" }}
        >
          My Skills
        </h2>
        <p className={`${textSub} max-w-xl mx-auto`}>
          A selection of my strongest skills with expertise levels. All crafted
          professionally and modernly.
        </p>
      </div>

      {/* Skills Categories */}
      <div className="space-y-10">
        {skillCategories.map((cat, idx) => (
          <div key={idx}>
            <h3 className={`text-xl font-bold mb-6 ${darkMode ? "text-blue-400" : "text-blue-500"}`}>
              {cat.category}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`${cardBg} p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow`}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">{skill.name}</span>
                    <span className="font-medium text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full h-4 rounded-full bg-gray-300 dark:bg-gray-700 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.2 }}
                      className={`h-4 rounded-full bg-gradient-to-r ${skill.color}`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

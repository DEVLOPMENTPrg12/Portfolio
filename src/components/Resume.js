import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Download, Calendar } from "lucide-react";

export default function Resume({ darkMode }) {
  const experience = [
    {
      position: "Marketing & Media Intern",
      company: "Be Artisan, Marrakech",
      year: "June 2025 – Present",
      details: "Managed social media ad campaigns, created visual content, and optimized marketing strategies to maximize ROI and reach.",
    },
    {
      position: "Intern Developer",
      company: "Laâyoune Hassan I Airport",
      year: "July – Aug 2024",
      details: "Developed a web and mobile application for airport management, focusing on operational tracking and internal organization.",
    },
    {
      position: "Web Developer Intern",
      company: "Commune El Marsa",
      year: "March 2024",
      details: "Designed employee management systems, integrating leave management and administrative workflow automation.",
    },
  ];

  const education = [
    {
      degree: "Digital Development - Full Stack Option",
      school: "ISGI, Laâyoune",
      year: "2022 - 2024",
      details: "Specialized in MERN stack, Laravel, and database architecture. Completed multiple end-to-end web projects.",
    },
    {
      degree: "Baccalaureate - Life and Earth Sciences",
      school: "Lycée Maarik Teggal, Laâyoune",
      year: "2021 - 2022",
      details: "Scientific background with a focus on natural sciences and introductory computing.",
    },
  ];

  return (
    <section id="resume" className={`py-24 px-6 md:px-20 transition-colors duration-500 ${
      darkMode ? "bg-[#0b0f1a]" : "bg-gray-50"
    }`}>
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-blue-500 font-bold tracking-[0.2em] uppercase text-sm">History</motion.span>
          <h2 className={`text-4xl md:text-5xl font-black mt-3 mb-6 ${darkMode ? "text-white" : "text-gray-900"}`}>
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Resume</span>
          </h2>
          <div className="h-1.5 w-20 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Experience Timeline */}
          <motion.div initial={{ x: -30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}>
            <h3 className={`flex items-center gap-3 text-2xl font-bold mb-10 ${darkMode ? "text-white" : "text-gray-900"}`}>
              <Briefcase className="text-blue-500" /> Professional Experience
            </h3>
            <div className="space-y-12 border-l-2 border-blue-500/20 ml-3">
              {experience.map((exp, idx) => (
                <div key={idx} className="relative pl-8 group">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-transform group-hover:scale-125"></div>
                  <div className={`p-6 rounded-2xl border transition-all duration-300 ${
                    darkMode ? "bg-[#161b2c]/50 border-gray-800 hover:border-blue-500/30 shadow-xl" : "bg-white border-gray-100 hover:border-blue-200 shadow-md"
                  }`}>
                    <div className="flex items-center gap-2 text-blue-500 text-xs font-bold mb-2">
                      <Calendar size={14} /> {exp.year}
                    </div>
                    <h4 className="text-lg font-bold mb-1">{exp.position}</h4>
                    <p className={`text-sm font-semibold mb-3 ${darkMode ? "text-gray-400" : "text-blue-600"}`}>{exp.company}</p>
                    <p className={`text-sm leading-relaxed ${darkMode ? "text-gray-400" : "text-gray-600"}`}>{exp.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div initial={{ x: 30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}>
            <h3 className={`flex items-center gap-3 text-2xl font-bold mb-10 ${darkMode ? "text-white" : "text-gray-900"}`}>
              <GraduationCap className="text-blue-500" /> Education
            </h3>
            <div className="space-y-12 border-l-2 border-blue-500/20 ml-3">
              {education.map((edu, idx) => (
                <div key={idx} className="relative pl-8 group">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-transform group-hover:scale-125"></div>
                  <div className={`p-6 rounded-2xl border transition-all duration-300 ${
                    darkMode ? "bg-[#161b2c]/50 border-gray-800 hover:border-blue-500/30 shadow-xl" : "bg-white border-gray-100 hover:border-blue-200 shadow-md"
                  }`}>
                    <div className="flex items-center gap-2 text-blue-500 text-xs font-bold mb-2">
                      <Calendar size={14} /> {edu.year}
                    </div>
                    <h4 className="text-lg font-bold mb-1">{edu.degree}</h4>
                    <p className={`text-sm font-semibold mb-3 ${darkMode ? "text-gray-400" : "text-blue-600"}`}>{edu.school}</p>
                    <p className={`text-sm leading-relaxed ${darkMode ? "text-gray-400" : "text-gray-600"}`}>{edu.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Action Button */}
        <div className="mt-20 text-center">
          <a
            href="/BilalElallam (2).pdf"
            className="inline-flex items-center gap-3 px-10 py-4 bg-blue-600 text-white font-black rounded-xl hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-500/30 transition-all active:scale-95"
          >
            <Download size={20} /> Download Full CV
          </a>
        </div>
      </div>
    </section>
  );
}
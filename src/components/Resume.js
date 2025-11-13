import { motion } from "framer-motion";

export default function Resume({ darkMode }) {
  const experience = [
    {
      position: "Marketing & Media Intern",
      company: "Be Artisan, Marrakech",
      year: "June 2025 – Present",
      details:
        "Managed social media ad campaigns, created visual content (ads, posters, videos), and optimized performance. Conducted analytics and adapted marketing strategies to maximize reach and return on investment.",
    },
    {
      position: "Intern Developer",
      company: "Laâyoune Hassan I Airport",
      year: "July – August 2024 (1 month)",
      details:
        "Developed a web and mobile application for airport management. Participated in the design, implementation, and optimization of key features to improve internal organization and operational tracking.",
    },
    {
      position: "Web Developer Intern",
      company: "Commune El Marsa",
      year: "March 2024 (1 month)",
      details:
        "Designed and developed websites dedicated to employee management, integrating features such as leave management and personnel data tracking. Contributed to improving administrative workflow efficiency.",
    },
  ];

  const education = [
    {
      degree: "Diploma in Digital Development - Full Stack Option",
      school: "Institut Spécialisé de Gestion et d’Informatique, Laâyoune",
      year: "2022 - 2024",
      details:
        "Training focused on full-stack web development including React, Laravel, PHP, and MySQL. Completed several practical projects integrating both front-end and back-end.",
    },
    {
      degree: "Baccalaureate - Life and Earth Sciences",
      school: "Lycée Maarik Teggal, Laâyoune",
      year: "2021 - 2022",
      details:
        "Scientific background emphasizing natural sciences and basic computing principles.",
    },
  ];

  const textColor = darkMode ? "text-gray-300" : "text-gray-800";
  const subTextColor = darkMode ? "text-gray-400" : "text-gray-600";
  const borderColor = darkMode ? "border-blue-400" : "border-blue-500";
  const bgColor = darkMode ? "bg-gray-900" : "bg-gray-100";

  return (
    <section
      id="resume"
      className={`${bgColor} ${textColor} py-24 px-6 md:px-20 transition-colors duration-300`}
    >
      <h2 className="text-4xl font-bold uppercase mb-16 text-center">
        Resume
      </h2>

      {/* EXPERIENCE FIRST */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-20"
      >
        <h3 className={`text-3xl font-bold mb-10 text-center ${borderColor}`}>
          Professional Experience
        </h3>

        <div className="grid md:grid-cols-2 gap-10">
          {experience.map((exp, index) => (
            <div
              key={index}
              className={`border-l-4 ${borderColor} pl-6 relative bg-opacity-10 rounded-lg`}
            >
              <span
                className={`absolute -left-3 top-3 w-3 h-3 ${borderColor} rounded-full`}
              ></span>
              <h4 className="font-bold text-xl">{exp.position}</h4>
              <p className={`${subTextColor} text-sm`}>
                {exp.company} — {exp.year}
              </p>
              <p className={`${subTextColor} mt-2`}>{exp.details}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* EDUCATION SECOND */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className={`text-3xl font-bold mb-10 text-center ${borderColor}`}>
          Education
        </h3>

        <div className="grid md:grid-cols-2 gap-10">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`border-l-4 ${borderColor} pl-6 relative rounded-lg`}
            >
              <span
                className={`absolute -left-3 top-3 w-3 h-3 ${borderColor} rounded-full`}
              ></span>
              <h4 className="font-bold text-xl">{edu.degree}</h4>
              <p className={`${subTextColor} text-sm`}>
                {edu.school} — {edu.year}
              </p>
              <p className={`${subTextColor} mt-2`}>{edu.details}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* DOWNLOAD BUTTON */}
      <div className="text-center mt-16">
        <a
          href="/BilalElallam.pdf"
          className={`py-4 px-8 rounded-lg font-semibold transition-colors duration-300 ${
            darkMode
              ? "bg-blue-400 hover:bg-blue-500 text-white"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
          download
        >
          Download CV
        </a>
      </div>
    </section>
  );
}

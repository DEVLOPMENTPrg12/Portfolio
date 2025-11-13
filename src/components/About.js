import { motion } from "framer-motion";

export default function About({ darkMode }) {
  return (
    <section
      id="about"
      className={`flex flex-col md:flex-row items-center justify-between min-h-screen px-8 md:px-20 pt-24 overflow-hidden ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Image */}
      <motion.div
        className="md:w-1/2 flex justify-center"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="relative">
          <div
            className={`absolute inset-0 blur-3xl rounded-full opacity-20 ${
              darkMode ? "bg-blue-400" : "bg-blue-500"
            }`}
          ></div>
          <img
            src="/Gemini_Generated_Image_qcr3e4qcr3e4qcr3.png"
            alt="about"
            className="relative w-72 h-72 md:w-96 md:h-96 rounded-full border-4 object-cover shadow-lg"
            style={{
              borderColor: darkMode ? "#60a5fa" : "#3b82f6", // Tailwind blue-400 / blue-500
            }}
          />
        </div>
      </motion.div>

      {/* Text */}
      <motion.div
        className="md:w-1/2 space-y-6 mt-10 md:mt-0"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2
          className={`text-4xl font-bold uppercase ${
            darkMode ? "text-blue-400" : "text-blue-500"
          }`}
        >
          About Me
        </h2>
        <h3 className={`${darkMode ? "text-gray-300" : "text-gray-700"} text-2xl font-semibold`}>
          I'm Bilal Elallam, a Web Developer
        </h3>
        <p className={`${darkMode ? "text-gray-400" : "text-gray-700"} leading-relaxed`}>
         I’m a passionate Full Stack Web Developer specializing in building modern, high-performance web applications using React.js for the frontend and Node.js for the backend. I focus on creating clean, maintainable code and delivering seamless user experiences. My goal is to transform ideas into scalable digital products that combine design, functionality, and efficiency.

        </p>

        {/* Info Grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-y-3 mt-4 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
          <p>
            <span className={darkMode ? "text-blue-400 font-semibold" : "text-blue-500 font-semibold"}>Name:</span> Bilal Elallam
          </p>
          <p>
            <span className={darkMode ? "text-blue-400 font-semibold" : "text-blue-500 font-semibold"}>Birthday:</span> 08 Mars 2004
          </p>
          <p>
            <span className={darkMode ? "text-blue-400 font-semibold" : "text-blue-500 font-semibold"}>Address:</span> Laayoune, Morocco
          </p>
          <p>
            <span className={darkMode ? "text-blue-400 font-semibold" : "text-blue-500 font-semibold"}>Email:</span> alallambilal13@gmail.com
          </p>
          <p>
            <span className={darkMode ? "text-blue-400 font-semibold" : "text-blue-500 font-semibold"}>Phone:</span> 0617858094
          </p>
          <p>
            <span className={darkMode ? "text-blue-400 font-semibold" : "text-blue-500 font-semibold"}>Freelance:</span> Available
          </p>
        </div>

        <a
          href="/BilalElallam (2).pdf"
          className={`inline-block mt-8 px-8 py-3 rounded-full font-medium transition ${
            darkMode
              ? "border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
              : "border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
          }`}
        >
          Download CV
        </a>
      </motion.div>
    </section>
  );
}

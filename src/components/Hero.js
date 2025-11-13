import { motion } from "framer-motion";

export default function Hero({ darkMode }) {
  return (
    <section
      id="home"
      className={`flex flex-col md:flex-row items-center justify-between min-h-screen px-8 md:px-20 pt-24 overflow-hidden ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Left Content */}
      <motion.div
        className="flex flex-col md:w-1/2 space-y-5 text-center md:text-left"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h3
          className={`text-lg ${darkMode ? "text-gray-400" : "text-gray-600"}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Hello, I'm
        </motion.h3>

        <motion.h1
          className="text-5xl md:text-6xl font-bold text-blue-500 uppercase tracking-wide"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Bilal Elallam
        </motion.h1>

        <motion.h2
          className={`text-2xl md:text-3xl font-semibold ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Full Stack Web Developer
        </motion.h2>

        <motion.p
          className={`max-w-md mx-auto md:mx-0 ${
            darkMode ? "text-gray-400" : "text-gray-700"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          Passionate about building modern, sleek, and high-performance websites.
          I help businesses enhance their online presence.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          <a
            href="#contact"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-full transition"
          >
            Contact Me
          </a>
          <a
  href="/BilalElallam (2).pdf"
  download="BilalElallam (2).pdf"
  className="border border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 font-medium px-6 py-3 rounded-full transition"
>
 Download CV
</a>

        </motion.div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="md:w-1/2 mt-10 md:mt-0 flex justify-center relative"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-blue-500 blur-3xl opacity-20"></div>
          <img
            src="/c42495dd-8a73-40e0-8d3d-ef9ad2ef84ed.jpeg"
            alt="Bilal"
            className="relative w-72 h-72 md:w-96 md:h-96 object-cover rounded-full shadow-lg border-4 border-blue-400"
          />
        </div>
      </motion.div>
    </section>
  );
}

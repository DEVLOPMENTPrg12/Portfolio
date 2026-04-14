import { motion } from "framer-motion";

export default function Hero({ darkMode }) {
  return (
    <section
      id="home"
      className={`relative flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-24 pt-20 overflow-hidden transition-colors duration-500 ${
        darkMode ? "bg-[#0b1120] text-white" : "bg-slate-50 text-slate-900"
      }`}
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-blue-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px]" />

      {/* Left Content */}
      <motion.div
        className="z-10 flex flex-col md:w-3/5 space-y-6 text-center md:text-left"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="space-y-2">
          <motion.span
            className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-blue-500/10 text-blue-500 border border-blue-500/20"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            Available for new projects
          </motion.span>
          
          <motion.h3
            className={`text-xl font-medium ${darkMode ? "text-gray-400" : "text-gray-500"}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Hello, I'm
          </motion.h3>

          <motion.h1
            className="text-6xl md:text-8xl font-extrabold tracking-tight italic"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-400">
              Bilal Elallam
            </span>
          </motion.h1>
        </div>

        <motion.h2
          className={`text-2xl md:text-4xl font-bold tracking-tight ${
            darkMode ? "text-slate-200" : "text-slate-800"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Full Stack Web Developer
        </motion.h2>

        <motion.p
          className={`max-w-lg leading-relaxed text-lg ${
            darkMode ? "text-slate-400" : "text-slate-600"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          Crafting high-performance digital experiences. I specialize in building 
          scalable, modern web applications that bridge the gap between design and functionality.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 justify-center md:justify-start pt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center px-8 py-3.5 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-500/25"
          >
            Work with me
          </a>
          <a
            href="/BilalElallam (2).pdf"
            download
            className={`group inline-flex items-center justify-center px-8 py-3.5 font-semibold transition-all duration-200 border-2 rounded-xl ${
              darkMode 
                ? "border-slate-700 hover:bg-slate-800 text-white" 
                : "border-slate-200 hover:bg-slate-100 text-slate-900"
            }`}
          >
            Download CV
          </a>
        </motion.div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="md:w-2/5 mt-16 md:mt-0 flex justify-center relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="relative group">
          {/* Animated Gradient Border - Pro look */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-blue-600 to-indigo-400 opacity-75 blur transition duration-1000 group-hover:duration-200 group-hover:opacity-100 animate-pulse"></div>
          
          <div className={`relative p-2 rounded-3xl ${darkMode ? "bg-[#0b1120]" : "bg-white"}`}>
            <img
              src="/Gemini_Generated_Image_9br8bc9br8bc9br8.png"
              alt="Bilal"
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-3xl grayscale-[20%] hover:grayscale-0 transition-all duration-500 shadow-2xl"
            />
          </div>
          
          {/* Floating Badge with glassmorphism */}
          <motion.div 
            className={`absolute -bottom-6 -right-6 p-4 rounded-2xl shadow-xl backdrop-blur-md border ${
              darkMode ? "bg-slate-800/80 border-slate-700" : "bg-white/80 border-slate-200"
            }`}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-ping" />
              <span className="text-sm font-bold tracking-tight">MERN Expert</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
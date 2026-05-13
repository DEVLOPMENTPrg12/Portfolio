import { motion } from "framer-motion";
import { FaUser, FaBirthdayCake, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaBriefcase } from "react-icons/fa";

export default function About({ darkMode }) {
  const info = [
    { icon: <FaUser />, label: "Name", value: "Bilal Elallam" },
    { icon: <FaBirthdayCake />, label: "Birthday", value: "08 Mars 2004" },
    { icon: <FaMapMarkerAlt />, label: "Address", value: "Laayoune, Morocco" },
    { icon: <FaEnvelope />, label: "Email", value: "alallambilal13@gmail.com" },
    { icon: <FaPhoneAlt />, label: "Phone", value: "0617858094" },
    { icon: <FaBriefcase />, label: "Freelance", value: "Available" },
  ];

  return (
    <section
      id="about"
      className={`relative py-24 px-6 md:px-20 overflow-hidden transition-colors duration-500 ${
        darkMode ? "bg-[#0b0f1a] text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
        
        {/* Image Side */}
        <motion.div
          className="lg:w-5/12 relative group"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Background Decoration */}
          <div className={`absolute -inset-4 blur-2xl rounded-full opacity-20 animate-pulse ${
            darkMode ? "bg-blue-400" : "bg-blue-600"
          }`}></div>
          
          <div className="relative">
            <img
              src="/Gemini_Generated_Image_8ugg0z8ugg0z8ugg.png"
              alt="Bilal Elallam"
              className={`w-full max-w-md mx-auto aspect-square rounded-2xl object-cover object-top border-2 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] ${
                darkMode ? "border-blue-500/30 shadow-blue-500/10" : "border-blue-100 shadow-gray-200"
              }`}
            />
            {/* Experience Badge */}
            <div className={`absolute -bottom-6 -right-6 p-6 rounded-2xl shadow-xl border backdrop-blur-md ${
              darkMode ? "bg-gray-900/90 border-gray-700" : "bg-white/90 border-gray-100"
            }`}>
              <p className="text-3xl font-bold text-blue-500">Full Stack</p>
              <p className="text-xs uppercase tracking-widest font-semibold opacity-70">Web Developer</p>
            </div>
          </div>
        </motion.div>

        {/* Text Side */}
        <motion.div
          className="lg:w-7/12 space-y-8"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div>
            <span className="text-blue-500 font-bold tracking-[0.2em] uppercase text-sm">Introduction</span>
            <h2 className="text-4xl md:text-5xl font-black mt-2">About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Me</span></h2>
          </div>

          <p className={`text-lg leading-relaxed ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
  I’m a passionate <span className="text-blue-500 font-semibold">Full Stack Web Developer</span> specializing in building modern, high-performance web applications. I focus on creating clean, maintainable code using <span className="italic">Modern Web Technologies</span> and delivering seamless user experiences that transform ideas into scalable digital products.
</p>
          {/* Optimized Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {info.map((item, index) => (
              <div key={index} className="flex items-center gap-4 group">
                <div className={`p-3 rounded-lg transition-colors ${
                  darkMode ? "bg-gray-800 text-blue-400 group-hover:bg-blue-500 group-hover:text-white" : "bg-blue-50 text-blue-600 group-hover:bg-blue-500 group-hover:text-white"
                }`}>
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider opacity-50 font-bold">{item.label}</p>
                  <p className="font-semibold text-sm md:text-base">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-6 flex flex-wrap gap-4">
            <a
              href="/BilalElallam (2).pdf"
              className="px-10 py-4 rounded-xl font-bold bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 transition-all active:scale-95"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className={`px-10 py-4 rounded-xl font-bold border-2 transition-all ${
                darkMode ? "border-gray-700 text-white hover:bg-gray-800" : "border-gray-200 text-gray-900 hover:bg-gray-50"
              }`}
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
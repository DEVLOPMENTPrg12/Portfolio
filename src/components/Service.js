import { motion } from "framer-motion";
import { Code, Palette, Server, Rocket } from "lucide-react";

export default function Services({ darkMode }) {
  const services = [
    {
      title: "Web Development",
      description:
        "Building responsive, modern, and high-performance websites using React, Tailwind CSS, and best development practices.",
      icon: <Code className="w-10 h-10" />,
      color: "from-blue-500 to-cyan-400",
    },
    {
      title: "UI/UX Design",
      description:
        "Designing intuitive and visually appealing interfaces with a focus on user-centered experience and accessibility.",
      icon: <Palette className="w-10 h-10" />,
      color: "from-pink-500 to-rose-400",
    },
    {
      title: "Backend Development",
      description:
        "Developing secure and scalable back-end systems using Node.js, Express, and MongoDB integration.",
      icon: <Server className="w-10 h-10" />,
      color: "from-green-500 to-emerald-400",
    },
    {
      title: "SEO Optimization",
      description:
        "Boosting your website’s visibility on search engines with advanced SEO strategies and performance enhancements.",
      icon: <Rocket className="w-10 h-10" />,
      color: "from-yellow-500 to-orange-400",
    },
  ];

  return (
    <section
      id="services"
      className={`py-24 px-6 md:px-20 transition-all duration-500 ${
        darkMode ? "bg-[#0b0f1a]" : "bg-gray-50"
      }`}
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-blue-500 font-bold tracking-[0.2em] uppercase text-sm"
        >
          What I Offer
        </motion.span>
        <h2 className={`text-4xl md:text-5xl font-black mt-3 mb-6 ${darkMode ? "text-white" : "text-gray-900"}`}>
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Services</span>
        </h2>
        <div className="h-1.5 w-20 bg-blue-500 mx-auto rounded-full"></div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`group relative p-8 rounded-3xl transition-all duration-500 border ${
              darkMode 
                ? "bg-[#161b2c]/50 border-gray-800 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10" 
                : "bg-white border-gray-100 hover:border-blue-400 hover:shadow-xl shadow-gray-200/50"
            }`}
          >
            {/* Animated Glow on Hover */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl bg-gradient-to-br ${service.color}`}></div>

            {/* Icon Circle */}
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 bg-gradient-to-br ${service.color} text-white shadow-lg`}>
              {service.icon}
            </div>

            {/* Content */}
            <h3 className={`text-xl font-bold mb-4 transition-colors duration-300 ${
              darkMode ? "text-white group-hover:text-blue-400" : "text-gray-900 group-hover:text-blue-600"
            }`}>
              {service.title}
            </h3>

            <p className={`text-sm leading-relaxed transition-colors duration-300 ${
              darkMode ? "text-gray-400 group-hover:text-gray-300" : "text-gray-600"
            }`}>
              {service.description}
            </p>

            {/* Subtle Arrow Icon */}
            <div className={`mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-[-10px] group-hover:translate-x-0 ${
              darkMode ? "text-blue-400" : "text-blue-600"
            }`}>
              Learn More <span className="text-lg">→</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
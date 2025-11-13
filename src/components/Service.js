import { motion } from "framer-motion";
import { Code, Palette, Server, Rocket } from "lucide-react"; // ✅ modern icons

export default function Services({ darkMode }) {
  const services = [
    {
      title: "Web Development",
      description:
        "Building responsive, modern, and high-performance websites using React, Tailwind CSS, and best development practices.",
      icon: <Code className="w-12 h-12 text-blue-500" />,
    },
    {
      title: "UI/UX Design",
      description:
        "Designing intuitive and visually appealing interfaces with a focus on user-centered experience and accessibility.",
      icon: <Palette className="w-12 h-12 text-pink-500" />,
    },
    {
      title: "Backend Development",
      description:
        "Developing secure and scalable back-end systems using Node.js, PHP, and MySQL integration.",
      icon: <Server className="w-12 h-12 text-green-500" />,
    },
    {
      title: "SEO Optimization",
      description:
        "Boosting your website’s visibility on search engines with advanced SEO strategies and performance enhancements.",
      icon: <Rocket className="w-12 h-12 text-yellow-500" />,
    },
  ];

  const bgSection = darkMode ? "bg-gray-900" : "bg-gray-100";
  const textColor = darkMode ? "text-white" : "text-gray-900";
  const textSub = darkMode ? "text-gray-300" : "text-gray-700";
  const cardBg = darkMode ? "bg-gray-800" : "bg-white";
  const borderColor = darkMode ? "border-blue-400" : "border-blue-500";

  return (
    <section
      id="services"
      className={`${bgSection} ${textColor} py-24 px-6 md:px-20 transition-colors duration-300`}
    >
      {/* Heading */}
      <div className="text-center pb-12">
        <motion.h2
          className={`text-4xl font-bold mb-4 ${
            darkMode ? "text-blue-400" : "text-blue-500"
          }`}
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Services
        </motion.h2>
        <motion.p
          className={`max-w-2xl mx-auto ${textSub}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          I provide high-quality services to design, develop, and grow your
          digital presence with creative and technical excellence.
        </motion.p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`relative p-8 ${cardBg} rounded-2xl border ${borderColor} shadow-lg hover:shadow-2xl transition-all duration-500 group overflow-hidden`}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Animated background glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-all duration-500 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 blur-3xl"></div>

            {/* Icon */}
            <div className="flex justify-center mb-6">{service.icon}</div>

            {/* Title */}
            <h3
              className={`text-xl font-semibold mb-3 text-center ${
                darkMode ? "text-blue-400" : "text-blue-600"
              }`}
            >
              {service.title}
            </h3>

            {/* Description */}
            <p className={`${textSub} text-center`}>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

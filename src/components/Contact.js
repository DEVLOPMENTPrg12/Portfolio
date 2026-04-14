import { useState } from "react";
import { FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact({ darkMode }) {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setIsSubmitting(true);
    // Simulate API
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
      setTimeout(() => setSubmitted(false), 4000);
    }, 2000);
  };

  const contactLinks = [
    { icon: <FaMapMarkerAlt />, label: "Location", value: "Laâyoune, Morocco", href: "#" },
    { icon: <FaPhone />, label: "Phone", value: "+212 617 858 094", href: "tel:+212617858094" },
    { icon: <FaEnvelope />, label: "Email", value: "alallambilal13@gmail.com", href: "mailto:alallambilal13@gmail.com" },
    { icon: <FaLinkedin />, label: "LinkedIn", value: "Bilal Elallam", href: "https://www.linkedin.com/in/bilal-alallam", target: "_blank" },
  ];

  return (
    <section id="contact" className={`py-24 px-6 md:px-20 transition-all duration-500 ${darkMode ? "bg-[#0b0f1a]" : "bg-gray-50"}`}>
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-blue-500 font-bold tracking-[0.2em] uppercase text-sm">Connection</motion.span>
          <h2 className={`text-4xl md:text-5xl font-black mt-3 mb-6 ${darkMode ? "text-white" : "text-gray-900"}`}>
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Touch</span>
          </h2>
          <div className="h-1.5 w-20 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Info (Left - 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className={`text-2xl font-bold mb-8 ${darkMode ? "text-white" : "text-gray-900"}`}>Contact Information</h3>
            {contactLinks.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                target={link.target || "_self"}
                className={`flex items-center gap-5 p-5 rounded-2xl border transition-all duration-300 group ${
                  darkMode ? "bg-[#161b2c]/50 border-gray-800 hover:border-blue-500/50" : "bg-white border-gray-100 hover:border-blue-400 shadow-sm"
                }`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 transition-colors group-hover:bg-blue-500 group-hover:text-white">
                  {link.icon}
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold opacity-50">{link.label}</p>
                  <p className={`font-semibold ${darkMode ? "text-gray-200" : "text-gray-700"}`}>{link.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Contact Form (Right - 7 cols) */}
          <motion.div 
            className={`lg:col-span-7 p-8 md:p-10 rounded-3xl border ${
              darkMode ? "bg-[#161b2c]/50 border-gray-800" : "bg-white border-gray-100 shadow-2xl shadow-gray-200/50"
            }`}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider opacity-60 ml-1">Full Name</label>
                  <input
                    type="text" name="name" value={formData.name} onChange={handleChange}
                    className={`w-full p-4 rounded-xl border outline-none transition-all ${
                      darkMode ? "bg-gray-900/50 border-gray-700 focus:border-blue-500" : "bg-gray-50 border-gray-200 focus:border-blue-500"
                    }`}
                    placeholder="Bilal Elallam"
                  />
                  {errors.name && <p className="text-red-500 text-[10px] font-bold ml-1">{errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider opacity-60 ml-1">Email Address</label>
                  <input
                    type="email" name="email" value={formData.email} onChange={handleChange}
                    className={`w-full p-4 rounded-xl border outline-none transition-all ${
                      darkMode ? "bg-gray-900/50 border-gray-700 focus:border-blue-500" : "bg-gray-50 border-gray-200 focus:border-blue-500"
                    }`}
                    placeholder="example@mail.com"
                  />
                  {errors.email && <p className="text-red-500 text-[10px] font-bold ml-1">{errors.email}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider opacity-60 ml-1">Message</label>
                <textarea
                  name="message" rows="5" value={formData.message} onChange={handleChange}
                  className={`w-full p-4 rounded-xl border outline-none transition-all resize-none ${
                    darkMode ? "bg-gray-900/50 border-gray-700 focus:border-blue-500" : "bg-gray-50 border-gray-200 focus:border-blue-500"
                  }`}
                  placeholder="How can I help you?"
                ></textarea>
                {errors.message && <p className="text-red-500 text-[10px] font-bold ml-1">{errors.message}</p>}
              </div>

              <button
                type="submit" disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-blue-600 text-white font-black uppercase tracking-widest text-sm hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
              >
                {isSubmitting ? "Sending..." : <><FaPaperPlane /> Send Message</>}
              </button>

              {submitted && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-500 text-sm font-bold text-center mt-4">
                  ✓ Message sent successfully!
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
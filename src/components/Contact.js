import { useState } from "react";
import { FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact({ darkMode }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear errors on change
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
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
    // Simulate API call (replace with real email service like EmailJS)
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
      setIsSubmitting(false);
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitted(false), 3000);
    }, 2000);
  };

  const cardBg = darkMode ? "bg-gray-800" : "bg-white";
  const hoverBg = darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100";
  const textSub = darkMode ? "text-gray-300" : "text-gray-700";
  const inputBg = darkMode ? "bg-gray-700 border-gray-600" : "bg-gray-50 border-gray-300";

  const contactLinks = [
    { icon: <FaMapMarkerAlt />, label: "Laâyoune, Morocco", href: "#" },
    { icon: <FaPhone />, label: "+212 617 858 094", href: "tel:+212617858094" },
    { icon: <FaEnvelope />, label: "alallambilal13@gmail.com", href: "mailto:alallambilal13@gmail.com" },
    { icon: <FaLinkedin />, label: "LinkedIn Profile", href: "https://www.linkedin.com/in/bilal-alallam", target: "_blank" },
  ];

  return (
    <section id="contact" className={`py-24 ${darkMode ? "bg-gray-900" : "bg-gradient-to-br from-gray-100 to-gray-200"} transition-colors duration-300`}>
  <div className="container mx-auto px-6 md:px-20 max-w-6xl">
    {/* Heading */}
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-blue-500 dark:text-blue-400 mb-4">
        Get in Touch
      </h2>
      <p className={`text-lg ${textSub} max-w-2xl mx-auto`}>
        I'm always open to discussing new opportunities, collaborations, or just saying hello. Let's connect!
      </p>
    </motion.div>

    {/* Grid: Form Left, Info Right */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      {/* Form Left */}
      <motion.form
        onSubmit={handleSubmit}
        className={`${cardBg} p-8 rounded-xl shadow-lg space-y-6 order-1 lg:order-1`}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Send a Message</h3>
        {/* Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input type="text" name="name" placeholder="Your Name *" value={formData.name} onChange={handleChange}
              className={`w-full ${inputBg} border p-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition`} required />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          <div>
            <input type="email" name="email" placeholder="Your Email *" value={formData.email} onChange={handleChange}
              className={`w-full ${inputBg} border p-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition`} required />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
        </div>

        <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange}
          className={`w-full ${inputBg} border p-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition`} />

        <textarea name="message" placeholder="Message *" value={formData.message} onChange={handleChange} rows="5"
          className={`w-full ${inputBg} border p-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none`} required></textarea>

        <button type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg text-sm transition flex items-center justify-center space-x-2">
          <FaPaperPlane />
          <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
        </button>

        {submitted && <p className="text-green-500 text-sm text-center mt-4">Thank you! Your message has been sent successfully.</p>}
      </motion.form>

      {/* Contact Info Right */}
      <motion.div
        className="space-y-6 order-2 lg:order-2"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Contact Information</h3>
        {contactLinks.map((link, i) => (
          <motion.a
            key={i}
            href={link.href}
            target={link.target || "_self"}
            rel={link.target ? "noopener noreferrer" : undefined}
            className={`${cardBg} p-6 rounded-xl shadow-lg flex items-center space-x-4 ${hoverBg} transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="text-3xl text-blue-500 flex-shrink-0">{link.icon}</div>
            <div>
              <p className="text-sm md:text-base font-medium text-gray-800 dark:text-white">{link.label}</p>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </div>
  </div>
</section>

  );
}

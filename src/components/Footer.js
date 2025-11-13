import { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaArrowUp, FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer({ darkMode }) {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      console.log("Newsletter signup:", newsletterEmail);
      setNewsletterSubmitted(true);
      setNewsletterEmail("");
      setTimeout(() => setNewsletterSubmitted(false), 3000);
    }
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const bg = darkMode ? "bg-gray-900" : "bg-gradient-to-t from-gray-100 to-gray-50";
  const text = darkMode ? "text-gray-300" : "text-gray-700";
  const hover = darkMode ? "hover:text-blue-400" : "hover:text-blue-600";
  const border = darkMode ? "border-gray-700" : "border-gray-300";
  const cardBg = darkMode ? "bg-gray-800" : "bg-white";

  return (
    <footer className={`${bg} py-20 transition-colors duration-300 relative`}>
      <div className="container mx-auto px-6 md:px-20 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          
          {/* About */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-bold text-blue-500 mb-4">Bilal Elallam</h2>
            <p className={`text-sm ${text} mb-6 leading-relaxed`}>
              Passionate full-stack developer crafting innovative web solutions. Let's build something amazing together.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="mb-6">
              <div className="flex">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Your email for updates"
                  className={`flex-1 ${cardBg} border ${border} p-3 rounded-l-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition`}
                  required
                />
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-r-lg transition" aria-label="Subscribe">
                  <FaPaperPlane />
                </button>
              </div>
              {newsletterSubmitted && <p className="text-green-500 text-sm mt-2">Subscribed successfully!</p>}
            </form>
            <div className="flex space-x-4 text-xl text-blue-500">
              <a href="#" className={`transition-colors ${hover}`} aria-label="Twitter"><FaTwitter /></a>
              <a href="#" className={`transition-colors ${hover}`} aria-label="Facebook"><FaFacebook /></a>
              <a href="#" className={`transition-colors ${hover}`} aria-label="Instagram"><FaInstagram /></a>
              <a href="https://www.linkedin.com/in/bilal-alallam" target="_blank" rel="noopener noreferrer" className={`transition-colors ${hover}`} aria-label="LinkedIn"><FaLinkedin /></a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}>
            <h2 className="text-xl font-bold text-blue-500 mb-4">Quick Links</h2>
            <ul className="space-y-3 text-sm">
              <li><a href="#home" className={`${hover} hover:underline`}>Home</a></li>
              <li><a href="#about" className={`${hover} hover:underline`}>About</a></li>
              <li><a href="#services" className={`${hover} hover:underline`}>Services</a></li>
              <li><a href="#portfolio" className={`${hover} hover:underline`}>Portfolio</a></li>
              <li><a href="#contact" className={`${hover} hover:underline`}>Contact</a></li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
            <h2 className="text-xl font-bold text-blue-500 mb-4">Services</h2>
            <ul className="space-y-3 text-sm">
              <li><a href="#web-design" className={`${hover} hover:underline`}>Web Design</a></li>
              <li><a href="#web-dev" className={`${hover} hover:underline`}>Web Development</a></li>
              <li><a href="#business-strategy" className={`${hover} hover:underline`}>Business Strategy</a></li>
              <li><a href="#data-analysis" className={`${hover} hover:underline`}>Data Analysis</a></li>
              <li><a href="#graphic-design" className={`${hover} hover:underline`}>Graphic Design</a></li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }}>
            <h2 className="text-xl font-bold text-blue-500 mb-4">Contact</h2>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center space-x-3"><FaMapMarkerAlt className="text-blue-400 flex-shrink-0" /><span className={text}>Laâyoune, Morocco</span></li>
              <li className="flex items-center space-x-3"><FaPhone className="text-blue-400 flex-shrink-0" /><a href="tel:+212617858094" className={`${hover} hover:underline`}>+212 617 858 094</a></li>
              <li className="flex items-center space-x-3"><FaEnvelope className="text-blue-400 flex-shrink-0" /><a href="mailto:alallambilal13@gmail.com" className={`${hover} hover:underline`}>alallambilal13@gmail.com</a></li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div className={`border-t ${border} pt-8 flex flex-col md:flex-row justify-between items-center text-sm ${text}`} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }}>
          <p>&copy; {new Date().getFullYear()} Bilal Elallam. All rights reserved.</p>
          <button onClick={scrollToTop} className="mt-4 md:mt-0 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition transform hover:scale-110" aria-label="Back to top">
            <FaArrowUp />
          </button>
        </motion.div>
      </div>
    </footer>
  );
}

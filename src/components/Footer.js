import { useState } from "react";
// Zdna l-icons li naqsin f-l-import bach l-build may-tbloquash
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer({ darkMode }) {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubmitted(true);
      setNewsletterEmail("");
      setTimeout(() => setNewsletterSubmitted(false), 4000);
    }
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const footerLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/DEVLOPMENTPrg12", label: "GitHub" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/bilal-alallam", label: "LinkedIn" },
  ];

  return (
    <footer className={`pt-20 pb-10 transition-all duration-500 border-t ${
      darkMode ? "bg-[#0b0f1a] border-gray-800" : "bg-white border-gray-100"
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Section */}
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-2xl font-black tracking-tighter italic">
              BILAL <span className="text-blue-500">ELALLAM</span>
            </h2>
            <p className={`text-sm leading-relaxed ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              Full Stack Web Developer crafting high-performance digital experiences. Transforming complex problems into elegant, scalable solutions.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                    darkMode ? "bg-gray-800 text-gray-400 hover:bg-blue-500 hover:text-white" : "bg-gray-100 text-gray-600 hover:bg-blue-500 hover:text-white"
                  }`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className={`text-sm font-black uppercase tracking-[0.2em] mb-6 ${darkMode ? "text-white" : "text-gray-900"}`}>Navigation</h3>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className={`text-sm transition-colors hover:text-blue-500 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Expertise */}
          <div className="text-center md:text-left">
            <h3 className={`text-sm font-black uppercase tracking-[0.2em] mb-6 ${darkMode ? "text-white" : "text-gray-900"}`}>Expertise</h3>
            <ul className="space-y-4 text-sm">
              {["MERN Stack", "UI/UX Design", "Backend Systems", "SEO Optimization"].map((item) => (
                <li key={item} className={darkMode ? "text-gray-400" : "text-gray-600"}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6 text-center md:text-left">
            <h3 className={`text-sm font-black uppercase tracking-[0.2em] mb-6 ${darkMode ? "text-white" : "text-gray-900"}`}>Stay Updated</h3>
            <form onSubmit={handleNewsletterSubmit} className="relative max-w-xs mx-auto md:mx-0">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Email address"
                className={`w-full p-4 pr-12 rounded-xl border text-sm outline-none transition-all ${
                  darkMode ? "bg-gray-900/50 border-gray-700 focus:border-blue-500" : "bg-gray-50 border-gray-200 focus:border-blue-500"
                }`}
                required
              />
              <button
                type="submit"
                className="absolute right-2 top-2 bottom-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
              </button>
            </form>
            {newsletterSubmitted && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-500 text-xs font-bold">
                ✓ You're on the list!
              </motion.p>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-6 ${
          darkMode ? "border-gray-800 text-gray-500" : "border-gray-100 text-gray-400"
        }`}>
          <p className="text-xs font-medium uppercase tracking-widest text-center md:text-left">
            &copy; {new Date().getFullYear()} Bilal Elallam. Built with MERN & Tailwind.
          </p>
          
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-xs font-black uppercase tracking-widest hover:text-blue-500 transition-colors"
          >
            Back to Top
            <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${
              darkMode ? "border-gray-800 group-hover:border-blue-500 group-hover:bg-blue-500 group-hover:text-white" : "border-gray-200 group-hover:border-blue-500 group-hover:bg-blue-500 group-hover:text-white"
            }`}>
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
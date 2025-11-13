import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Navbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
       { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
 

  ];

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-xl" : ""
      } bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-extrabold text-blue-500 dark:text-blue-400 hover:text-blue-400 dark:hover:text-blue-300 transition-colors cursor-pointer">
          Bilal Elallam
        </h1>

        <ul className="hidden md:flex space-x-8 text-lg">
          {menuItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 font-medium"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center space-x-4">
          {/* Toggle Dark/Light avec Hilal + Glow */}
          <div
            className={`hidden md:flex items-center cursor-pointer w-16 h-8 rounded-full p-1 transition-colors duration-500 ${
              darkMode ? "bg-blue-500" : "bg-yellow-400"
            }`}
            onClick={() => setDarkMode(!darkMode)}
          >
            <div
              className={`relative bg-white w-6 h-6 rounded-full shadow-lg flex items-center justify-center transform transition-transform duration-500 ${
                darkMode ? "translate-x-8" : "translate-x-0"
              }`}
            >
              {/* Glow effect */}
              <span
                className={`absolute w-10 h-10 rounded-full ${
                  darkMode ? "bg-blue-400/50 animate-ping" : "bg-yellow-400/50 animate-ping"
                }`}
              ></span>

              {/* Icon */}
              {darkMode ? (
                <FaMoon className="text-blue-700 z-10" />
              ) : (
                <FaSun className="text-yellow-500 z-10" />
              )}
            </div>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col justify-between w-6 h-5 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`block h-0.5 w-full bg-current transform transition duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-current transition-opacity duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-current transform transition duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-64 py-4" : "max-h-0"
        } bg-gray-100 dark:bg-gray-800`}
      >
        <ul className="flex flex-col items-center space-y-4">
          {menuItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-lg hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 font-medium"
              >
                {item.label}
              </a>
            </li>
          ))}

          <li>
            {/* Mobile toggle */}
            <div
              className={`flex items-center cursor-pointer w-16 h-8 rounded-full p-1 transition-colors duration-500 ${
                darkMode ? "bg-blue-500" : "bg-yellow-400"
              }`}
              onClick={() => setDarkMode(!darkMode)}
            >
              <div
                className={`relative bg-white w-6 h-6 rounded-full shadow-lg flex items-center justify-center transform transition-transform duration-500 ${
                  darkMode ? "translate-x-8" : "translate-x-0"
                }`}
              >
                <span
                  className={`absolute w-10 h-10 rounded-full ${
                    darkMode ? "bg-blue-400/50 animate-ping" : "bg-yellow-400/50 animate-ping"
                  }`}
                ></span>
                {darkMode ? (
                  <FaMoon className="text-blue-700 z-10" />
                ) : (
                  <FaSun className="text-yellow-500 z-10" />
                )}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

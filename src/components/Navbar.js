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
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg py-3" 
          : "bg-white dark:bg-gray-900 py-5"
      } text-gray-900 dark:text-white`}
    >
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Smiya kima kant */}
        <h1 className="text-2xl font-extrabold text-blue-500 dark:text-blue-400 cursor-pointer">
          Bilal Elallam
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8 text-lg font-medium">
            {menuItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Toggle Desktop */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-yellow-500 dark:text-blue-400 transition-all"
          >
            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center space-x-4 md:hidden">
          {/* Toggle Mobile - Bayn dima */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 transition-all"
          >
            {darkMode ? (
              <FaSun className="text-yellow-500" size={22} />
            ) : (
              <FaMoon className="text-blue-600" size={22} />
            )}
          </button>

          {/* Hamburger Menu */}
          <button
            className="flex flex-col justify-around w-6 h-6 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className={`w-6 h-0.5 bg-current transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-current transition-all ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-current transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute w-full left-0 bg-white dark:bg-gray-900 transition-all duration-300 ease-in-out border-b border-gray-200 dark:border-gray-800 ${
          isOpen ? "top-full opacity-100" : "top-[-400px] opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center py-8 space-y-6">
          {menuItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-xl font-semibold hover:text-blue-500 dark:hover:text-blue-400"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
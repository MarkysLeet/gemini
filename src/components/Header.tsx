"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone } from "lucide-react";

const navLinks = [
  { href: "/projects", label: "Проекты" },
  { href: "/services", label: "Услуги" },
  { href: "/contact", label: "Контакты" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    hidden: { opacity: 0, backdropFilter: "blur(0px)" },
    visible: {
      opacity: 1,
      backdropFilter: "blur(20px)",
      transition: { duration: 0.4, ease: "easeInOut" }
    },
    exit: {
      opacity: 0,
      backdropFilter: "blur(0px)",
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  };

  const linkVariants = {
      hidden: { opacity: 0, y: 40 },
      visible: (i: number) => ({
          opacity: 1,
          y: 0,
          transition: { delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }
      })
  }

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 md:px-12 md:py-6 transition-all duration-300 bg-black/30 backdrop-blur-md border-b border-white/10">
        <Link href="/" className="text-2xl font-bold z-50 relative" onClick={() => setIsOpen(false)}>
          Grozan Studio
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="relative hover:text-gray-300 transition-colors active:scale-95 inline-block">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:hidden z-50">
          <button onClick={toggleMenu} className="focus:outline-none p-2 active:scale-90 transition-transform">
            {/* Animated Burger/Close Icon */}
            <div className="w-6 h-5 flex flex-col justify-between items-center">
              <motion.span
                className="block w-full h-0.5 bg-white rounded-full"
                animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 9 : 0 }}
              ></motion.span>
              <motion.span
                className="block w-full h-0.5 bg-white rounded-full"
                animate={{ opacity: isOpen ? 0 : 1 }}
              ></motion.span>
              <motion.span
                className="block w-full h-0.5 bg-white rounded-full"
                animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -9 : 0 }}
              ></motion.span>
            </div>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col justify-between items-center pt-32 pb-12 bg-black/80"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Navigation Links */}
            <nav className="w-full">
              <ul className="flex flex-col items-center space-y-8 text-center">
                {navLinks.map((link, i) => (
                    <motion.li
                      key={link.href}
                      custom={i}
                      variants={linkVariants}
                      initial="hidden"
                      animate="visible"
                      className="w-full"
                    >
                        <Link
                          href={link.href}
                          onClick={toggleMenu}
                          className="text-4xl font-light tracking-wide hover:text-gray-300 transition-colors block w-full py-2 active:scale-95"
                        >
                            {link.label}
                        </Link>
                    </motion.li>
                ))}
              </ul>
            </nav>

            {/* Footer Info in Menu */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-col items-center space-y-4 text-gray-400"
            >
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <a href="mailto:grozantwink@gmail.com" className="hover:text-white transition-colors">grozantwink@gmail.com</a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <a href="tel:+905418462550" className="hover:text-white transition-colors">+90 541 846 25 50</a>
              </div>
              <div className="pt-4 flex space-x-6">
                {/* Social Placeholders */}
                <a href="#" className="text-sm uppercase tracking-widest hover:text-white transition-colors border-b border-transparent hover:border-white">Instagram</a>
                <a href="#" className="text-sm uppercase tracking-widest hover:text-white transition-colors border-b border-transparent hover:border-white">WhatsApp</a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

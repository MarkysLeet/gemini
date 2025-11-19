"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/projects", label: "Проекты" },
  { href: "/services", label: "Услуги" },
  { href: "/contact", label: "Контакты" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    hidden: { opacity: 0, y: "-100%" },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
  };

  const linkVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: (i: number) => ({
          opacity: 1,
          y: 0,
          transition: { delay: i * 0.1 + 0.3, ease: "easeInOut" }
      })
  }

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 p-4 md:p-8 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold z-50" onClick={() => setIsOpen(false)}>
          Grozan Studio
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:hidden z-50">
          <button onClick={toggleMenu} className="focus:outline-none">
            {/* Animated Burger/Close Icon */}
            <div className="w-6 h-5 flex flex-col justify-between items-center">
              <motion.span
                className="block w-full h-0.5 bg-white"
                animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
              ></motion.span>
              <motion.span
                className="block w-full h-0.5 bg-white"
                animate={{ opacity: isOpen ? 0 : 1 }}
              ></motion.span>
              <motion.span
                className="block w-full h-0.5 bg-white"
                animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
              ></motion.span>
            </div>
          </button>
        </div>
      </header>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black z-40 flex flex-col justify-center items-center"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <nav>
              <ul className="flex flex-col space-y-8 text-center text-3xl">
                {navLinks.map((link, i) => (
                    <motion.li key={link.href} custom={i} variants={linkVariants} initial="hidden" animate="visible">
                        <Link href={link.href} onClick={toggleMenu}>
                            {link.label}
                        </Link>
                    </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "SEO Tools", path: "/seotools" },
    { name: "Amazon Tools", path: "/amazontool", disabled: false},
    { name: "RDP/VPS", path: "/rdp-vps" },
    { name: "Other Services", path: "/services" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 text-white shadow-md fixed top-0 left-0 w-full z-50"
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.3 }}>
          <Link href="/">
            <Image
              src="/logo.jpeg"
              alt="Global SEO TOOLS Logo"
              width={60}
              height={20}
              className="cursor-pointer"
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-white">
          {navItems.map(({ name, path, disabled }, index) => (
            <Link key={index} href={disabled ? "#" : path} passHref>
              <motion.span
                whileHover={{ scale: 1.1, color: "#4F46E5" }}
                transition={{ duration: 0.2 }}
                className={`cursor-pointer ${
                  disabled ? "text-white cursor-not-allowed" : "hover:text-blue-600"
                }`}
              >
                {name}
              </motion.span>
            </Link>
          ))}
        </nav>

        {/* Members Login Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
          className="hidden md:block bg-red-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-red-600 transition-all"
        >
          <Link href="/login">Members Login</Link>
        </motion.button>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white-800 text-3xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-16 right-0 w-2/3 h-screen bg-gray-900 text-white shadow-lg flex flex-col space-y-6 py-6 px-6"
          >
            {navItems.map(({ name, path, disabled }, index) => (
              <Link key={index} href={disabled ? "#" : path} passHref>
                <motion.span
                  whileHover={{ scale: 1.1, color: "#4F46E5" }}
                  transition={{ duration: 0.2 }}
                  className="text-white text-lg cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  {name}
                </motion.span>
              </Link>
            ))}

            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
              className="bg-red-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-yellow-600 transition-all"
              onClick={() => setIsOpen(false)}
            >
              <Link href="/login">Members Login</Link>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;

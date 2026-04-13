import { motion, useScroll, useTransform } from "motion/react";
import { Heart } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.8)"]
  );
  const boxShadow = useTransform(
    scrollY,
    [0, 100],
    ["none", "0 10px 30px -10px rgba(255, 105, 180, 0.3)"]
  );

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      style={{ backgroundColor, boxShadow }}
      className="fixed top-0 left-0 right-0 z-40 backdrop-blur-sm transition-all duration-300"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <motion.a 
          href="#"
          whileHover={{ scale: 1.1 }}
          className="flex items-center gap-2 font-cursive text-3xl text-barbie-pink"
        >
          <Heart className="fill-barbie-pink" size={28} />
          Anjali Kumari
        </motion.a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              whileHover={{ scale: 1.1, color: "#ff1493" }}
              className="text-gray-600 font-display font-bold text-sm uppercase tracking-wider hover:text-barbie-pink transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 rounded-full bg-barbie-pink text-white font-display font-bold text-sm shadow-lg shadow-barbie-pink/20"
          >
            Hire Me!
          </motion.a>
        </div>

        {/* Mobile Menu Button (Simplified) */}
        <div className="md:hidden text-barbie-pink">
          <Heart size={24} />
        </div>
      </div>
      
      {/* Scroll Progress Bar */}
      <motion.div 
        className="h-1 bg-barbie-pink origin-left"
        style={{ scaleX: useTransform(scrollY, [0, 1000], [0, 1]) }}
      />
    </motion.nav>
  );
}

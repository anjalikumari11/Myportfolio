import { motion, useScroll, useTransform } from "motion/react";
import { Activity } from "lucide-react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(248, 250, 252, 0)", "rgba(248, 250, 252, 0.9)"]
  );
  
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
  ];

  return (
    <motion.nav
      style={{ backgroundColor }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-transparent transition-all duration-300"
    >
      <div className="container mx-auto px-6 py-5 flex items-center justify-between">
        <motion.a 
          href="#"
          whileHover={{ scale: 1.02 }}
          className="flex items-center gap-2 font-display text-2xl font-bold tracking-tight text-slate-900"
        >
          <div className="p-1.5 rounded-lg bg-primary/10">
            <Activity className="text-primary" size={20} strokeWidth={2.5} />
          </div>
          ANJALI <span className="text-primary">KUMARI</span>
        </motion.a>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="text-slate-600 font-display font-medium text-sm tracking-wide hover:text-primary transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-display font-semibold text-sm shadow-xl shadow-slate-900/10 hover:bg-slate-800 transition-all"
          >
            Start a Project
          </motion.a>
        </div>

        {/* Mobile Menu Placeholder */}
        <div className="md:hidden p-2 rounded-lg bg-slate-100">
           <div className="w-5 h-0.5 bg-slate-600 mb-1" />
           <div className="w-5 h-0.5 bg-slate-600 mb-1" />
           <div className="w-3 h-0.5 bg-slate-600" />
        </div>
      </div>
      
      {/* Scroll Progress Bar */}
      <motion.div 
        className="h-[2px] bg-primary origin-left"
        style={{ scaleX: useTransform(scrollY, [0, 1000], [0, 1]) }}
      />
    </motion.nav>
  );
}

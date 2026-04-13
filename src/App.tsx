/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingShapes from "./components/FloatingShapes";
import Loader from "./components/Loader";

export default function App() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        const json = await response.json();
        setData(json);
        // Simulate loading for aesthetic
        setTimeout(() => setLoading(false), 2000);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (loading || !data) {
    return <Loader />;
  }

  return (
    <div className="relative font-sans selection:bg-barbie-pink selection:text-white">
      {/* Custom Heart Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] hidden md:block"
        animate={{
          x: mousePos.x - 16,
          y: mousePos.y - 16,
          scale: [1, 1.2, 1],
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 250,
          mass: 0.5,
          scale: {
            duration: 0.5,
            repeat: Infinity,
          }
        }}
      >
        <div className="text-barbie-pink drop-shadow-[0_0_5px_rgba(255,105,180,0.5)]">
          <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
      </motion.div>

      <Navbar />
      <FloatingShapes />
      
      <main className="relative z-10">
        <Hero data={data} />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <About data={data} />
          <Projects data={data} />
          <Experience data={data} />
          <Education data={data} />
          <Contact data={data} />
        </motion.div>
      </main>

      <Footer />

      {/* Background Sparkles Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="sparkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

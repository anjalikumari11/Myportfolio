/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from "react";
import { motion } from "motion/react";
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
        const response = await fetch("data.json");
        const json = await response.json();
        setData(json);
        // Simulate loading for aesthetic
        setTimeout(() => setLoading(false), 1500);
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
    <div className="relative font-sans selection:bg-primary selection:text-white bg-slate-50">
      {/* Custom Minimalist Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 pointer-events-none z-[9999] hidden md:block"
        animate={{
          x: mousePos.x - 12,
          y: mousePos.y - 12,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 400,
          mass: 0.2,
        }}
      >
        <div className="w-full h-full bg-primary/20 rounded-full backdrop-blur-sm border border-primary/40 ring-4 ring-primary/5" />
      </motion.div>

      <Navbar />
      <FloatingShapes />
      
      <main className="relative z-10">
        <Hero data={data} />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-32 pb-32">
            <About data={data} />
            <Projects data={data} />
            <Experience data={data} />
            <Education data={data} />
            <Contact data={data} />
          </div>
        </motion.div>
      </main>

      <Footer />

      {/* Subtle Data Nodes Background Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="data-node"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

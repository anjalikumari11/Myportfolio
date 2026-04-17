import { motion } from "motion/react";
import { Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

interface HeroProps {
  data: any;
}

export default function Hero({ data }: HeroProps) {
  const [displayText, setDisplayText] = useState("");
  const fullText = data.role;

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplayText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, [fullText]);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 px-4 overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12 z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for visual strategies
          </motion.div>

          <h1 className="text-5xl md:text-8xl font-display font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.1]">
            Visualizing <span className="text-gradient">Impact</span>
          </h1>
          
          <div className="h-10 mb-8">
            <p className="text-2xl md:text-3xl font-display font-semibold text-slate-700/80">
              {displayText}<span className="text-primary animate-pulse">|</span>
            </p>
          </div>

          <p className="text-lg text-slate-600 mb-10 max-w-xl leading-relaxed">
            {data.tagline}
          </p>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-5 mb-12">
            <a 
              href={data.resume} 
              target="_blank" 
              rel="noreferrer"
              className="premium-button premium-gradient flex items-center gap-2 group"
            >
              View Portfolio <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <div className="flex items-center gap-3">
              <a href={data.socials.github} target="_blank" rel="noreferrer" className="p-3 rounded-xl glass-card text-slate-600 hover:text-primary transition-all duration-300">
                <Github size={22} />
              </a>
              <a href={data.socials.linkedin} target="_blank" rel="noreferrer" className="p-3 rounded-xl glass-card text-slate-600 hover:text-primary transition-all duration-300">
                <Linkedin size={22} />
              </a>
              <a href={`mailto:${data.socials.email}`} className="p-3 rounded-xl glass-card text-slate-600 hover:text-primary transition-all duration-300">
                <Mail size={22} />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring" }}
          className="relative"
        >
          <div className="w-72 h-72 md:w-[450px] md:h-[450px] relative z-10">
             {/* Decorative Elements */}
             <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/20 blur-3xl rounded-full" />
             <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 blur-3xl rounded-full" />
             
             {/* Main Image Container */}
             <div className="w-full h-full rounded-3xl border border-white/50 shadow-2xl overflow-hidden glass-card p-2 transform rotate-3 hover:rotate-0 transition-transform duration-700">
                <img 
                  src='/anjali.png' 
                  alt={data.name}
                  className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
                />
             </div>

             {/* Dynamic Data Overlay Mockup */}
             <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-8 top-1/4 glass-card p-4 rounded-2xl hidden lg:block z-20"
             >
                <div className="flex gap-2 items-end h-12">
                   <div className="w-3 bg-primary/60 rounded-t-sm h-1/2 animate-[grow_2s_infinite]" />
                   <div className="w-3 bg-secondary/60 rounded-t-sm h-full animate-[grow_2.5s_infinite]" />
                   <div className="w-3 bg-accent/60 rounded-t-sm h-3/4 animate-[grow_1.8s_infinite]" />
                </div>
             </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";
import { Github, Linkedin, Mail, Download } from "lucide-react";
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
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12 z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="inline-block px-4 py-1 rounded-full bg-barbie-pink/10 text-barbie-pink font-display font-bold text-sm mb-4"
          >
            Welcome to my pink world! 
          </motion.span>
          <h1 className="text-5xl md:text-7xl font-display font-extrabold text-gray-900 mb-4 tracking-tight">
            Hi, I'm <span className="text-barbie-pink">{data.name}</span>
          </h1>
          <div className="h-8 mb-6">
            <p className="text-2xl md:text-3xl font-display font-semibold text-barbie-deep/80">
              {displayText}<span className="animate-pulse">|</span>
            </p>
          </div>
          <p className="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
            {data.tagline}
          </p>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
            <a 
              href={data.resume} 
              target="_blank" 
              rel="noreferrer"
              className="barbie-button barbie-gradient flex items-center gap-2"
            >
              <Download size={20} /> Download Resume
            </a>
            <div className="flex items-center gap-4">
              <a href={data.socials.github} target="_blank" rel="noreferrer" className="p-3 rounded-full glass-card text-barbie-pink hover:bg-barbie-pink hover:text-white transition-all duration-300">
                <Github size={24} />
              </a>
              <a href={data.socials.linkedin} target="_blank" rel="noreferrer" className="p-3 rounded-full glass-card text-barbie-pink hover:bg-barbie-pink hover:text-white transition-all duration-300">
                <Linkedin size={24} />
              </a>
              <a href={`mailto:${data.socials.email}`} className="p-3 rounded-full glass-card text-barbie-pink hover:bg-barbie-pink hover:text-white transition-all duration-300">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-8 border-white shadow-2xl overflow-hidden relative z-10">
            <img 
              src='/anjali.png' 
              alt={data.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="absolute inset-0 bg-barbie-pink blur-3xl opacity-30 rounded-full animate-pulse"></div>
          
          <div className="absolute -inset-4 border-2 border-dashed border-barbie-pink/30 rounded-full animate-[spin_20s_linear_infinite]"></div>
          <div className="absolute -inset-8 border-2 border-dotted border-barbie-purple/30 rounded-full animate-[spin_30s_linear_infinite_reverse]"></div>
        </motion.div>
      </div>
    </section>
  );
}

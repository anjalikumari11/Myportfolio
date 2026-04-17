import { motion } from "motion/react";
import { Activity } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-16 px-4 border-t border-slate-200">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 font-display text-2xl font-bold tracking-tight text-slate-900">
            <div className="p-1.5 rounded-lg bg-primary/10 text-primary">
              <Activity size={20} strokeWidth={2.5} />
            </div>
            ANJALI <span className="text-primary">KUMARI</span>
          </div>
          
          <div className="text-slate-500 font-medium text-sm">
             Crafting Clarity through Visual Design
          </div>

          <div className="flex gap-8">
             <a href="#about" className="text-slate-400 hover:text-primary transition-colors text-sm font-bold uppercase tracking-wider">About</a>
             <a href="#projects" className="text-slate-400 hover:text-primary transition-colors text-sm font-bold uppercase tracking-wider">Projects</a>
             <a href="#contact" className="text-slate-400 hover:text-primary transition-colors text-sm font-bold uppercase tracking-wider">Contact</a>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Anjali Kumari. All visual assets are original works.
          </p>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-2 text-xs font-bold text-slate-300 uppercase tracking-widest"
          >
            Built with React + Framer Motion
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

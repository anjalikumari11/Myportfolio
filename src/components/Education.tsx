import { motion } from "motion/react";
import { GraduationCap, Award } from "lucide-react";

interface EducationProps {
  data: any;
}

export default function Education({ data }: EducationProps) {
  return (
    <section id="education" className="py-24 px-4 bg-slate-100/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <div className="text-accent font-display font-bold text-sm uppercase tracking-[0.2em] mb-4">Academic</div>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 leading-tight">
            Educational <span className="text-gradient">Foundation</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {data.education.map((edu: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-10 rounded-[3rem] relative group overflow-hidden border-white bg-white/40"
            >
              <div className="absolute -right-6 -top-6 text-slate-200 group-hover:text-primary/10 transition-colors duration-500">
                <GraduationCap size={160} />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                   <div className="p-3 rounded-2xl bg-white shadow-sm text-primary">
                      <Award size={24} />
                   </div>
                   <span className="text-sm font-bold text-slate-500 bg-slate-100 px-4 py-1.5 rounded-xl border border-slate-200/50">
                     {edu.year}
                   </span>
                </div>
                
                <h3 className="text-3xl font-display font-bold text-slate-900 mb-3 leading-tight">
                  {edu.degree}
                </h3>
                <p className="text-primary font-bold text-lg mb-6">
                  {edu.college}
                </p>
                
                <div className="inline-flex items-center gap-4 p-4 rounded-2xl bg-white/60 border border-slate-200/50">
                  <div className="w-1.5 h-8 bg-accent rounded-full"></div>
                  <div>
                     <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Results</div>
                     <div className="text-xl font-display font-bold text-slate-800 leading-none">{edu.grade}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

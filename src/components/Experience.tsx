import { motion } from "motion/react";
import { Briefcase, Calendar } from "lucide-react";

interface ExperienceProps {
  data: any;
}

export default function Experience({ data }: ExperienceProps) {
  return (
    <section id="experience" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 px-4">
          <div className="max-w-xl">
             <div className="text-secondary font-display font-bold text-sm uppercase tracking-[0.2em] mb-4">Background</div>
             <h2 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 leading-tight">
               Professional <span className="text-gradient">Experience</span>
             </h2>
          </div>
        </div>

        <div className="space-y-12">
          {data.experience.map((exp: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="glass-card p-10 rounded-[2.5rem] border-slate-200/50 bg-white hover:border-primary/30 transition-all duration-500 overflow-hidden">
                {/* Decorative Background Icon */}
                <div className="absolute -right-8 -bottom-8 opacity-[0.03] text-slate-900 group-hover:opacity-[0.05] transition-opacity duration-500 group-hover:scale-110">
                   <Briefcase size={200} />
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                  <div className="flex gap-6 items-start">
                    <div className="p-4 rounded-2xl bg-slate-100 text-slate-500 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      <Briefcase size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-display font-bold text-slate-900 mb-1">{exp.role}</h3>
                      <div className="text-primary font-bold mb-4">{exp.company}</div>
                      <p className="text-slate-600 max-w-2xl text-lg leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 text-slate-500 text-sm font-bold group-hover:bg-slate-200 transition-colors">
                    <Calendar size={16} />
                    {exp.duration}
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

import { motion } from "motion/react";
import { ExternalLink, ArrowRight } from "lucide-react";

interface ProjectsProps {
  data: any;
}

export default function Projects({ data }: ProjectsProps) {
  return (
    <section id="projects" className="py-24 px-4 bg-slate-100/50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary font-display font-bold text-sm uppercase tracking-[0.2em] mb-4"
            >
              Selected Works
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-display font-extrabold text-slate-900 leading-tight"
            >
              Visual <span className="text-gradient">Storytelling</span> in Action
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-600 max-w-md text-lg leading-relaxed md:pb-2"
          >
            I transform complex datasets into intuitive visual experiences that communicate meaning at a glance.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
          {data.projects.map((project: any, index: number) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden bg-white shadow-2xl shadow-slate-200/50 mb-8 p-3 border border-slate-200/50">
                <div className="w-full h-full rounded-[2rem] overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="p-5 bg-white rounded-full text-primary shadow-2xl hover:scale-110 transition-transform duration-300"
                    >
                      <ExternalLink size={24} strokeWidth={2.5} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="px-4">
                <div className="flex flex-wrap gap-3 mb-4">
                  {project.tech.map((t: string) => (
                    <span key={t} className="px-3 py-1 rounded-lg bg-slate-200/60 text-slate-600 text-[10px] font-bold uppercase tracking-widest border border-slate-300/30">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed line-clamp-2 text-lg">
                  {project.description}
                </p>
                <motion.a 
                  href={project.link}
                  className="inline-flex items-center gap-2 font-display font-bold text-primary group/link"
                >
                  Explore Project <ArrowRight size={18} className="transition-transform group-hover/link:translate-x-1" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

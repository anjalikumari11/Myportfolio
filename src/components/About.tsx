import { motion } from "motion/react";
import { PenTool, Target, Zap, Layers } from "lucide-react";

interface AboutProps {
  data: any;
}

export default function About({ data }: AboutProps) {
  const processItems = [
    { icon: Target, title: "Analysis", desc: "Understanding the data and the core message." },
    { icon: Layers, title: "Structure", desc: "Building the information architecture." },
    { icon: PenTool, title: "Design", desc: "Crafting the visual narrative and style." },
    { icon: Zap, title: "Iteration", desc: "Refining for maximum clarity and impact." },
  ];

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 mb-8 leading-tight">
              Design that speaks <span className="text-primary">louder than words.</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              {data.about}
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-slate-200">
               <div>
                  <div className="text-3xl font-display font-bold text-primary mb-1">50+</div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">Visual Projects</div>
               </div>
               <div>
                  <div className="text-3xl font-display font-bold text-secondary mb-1">100%</div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">Data Accuracy</div>
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="glass-card p-10 rounded-[3rem] border-slate-200/50 bg-white/50">
               <h3 className="text-2xl font-display font-bold text-slate-900 mb-10 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">01</span>
                  Core Proficiency
               </h3>
               <div className="flex flex-wrap gap-3 mb-12">
                  {data.skills.map((skill: string, index: number) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="px-5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 font-medium shadow-sm hover:border-primary hover:text-primary transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
               </div>

               <h3 className="text-2xl font-display font-bold text-slate-900 mb-8 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary text-sm font-bold">02</span>
                  Strategic Process
               </h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {processItems.map((item, i) => (
                    <div key={i} className="flex gap-4">
                       <div className="mt-1 p-2 rounded-lg bg-slate-100 text-slate-500">
                          <item.icon size={20} />
                       </div>
                       <div>
                          <h4 className="font-display font-bold text-slate-900">{item.title}</h4>
                          <p className="text-sm text-slate-500">{item.desc}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}

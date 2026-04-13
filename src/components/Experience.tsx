import { motion } from "motion/react";
import { Briefcase } from "lucide-react";

interface ExperienceProps {
  data: any;
}

export default function Experience({ data }: ExperienceProps) {
  return (
    <section id="experience" className="py-24 px-4 bg-white/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-gray-900">
            Professional <span className="text-barbie-purple">Journey</span> 
          </h2>
        </div>

        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-barbie-pink/50 before:to-transparent">
          {data.experience.map((exp: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-barbie-pink text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Briefcase size={18} />
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-[24px] hover:shadow-xl transition-all">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display font-bold text-xl text-gray-900">{exp.role}</h3>
                  <span className="text-xs font-bold text-barbie-pink bg-barbie-pink/10 px-3 py-1 rounded-full">
                    {exp.duration}
                  </span>
                </div>
                <div className="text-barbie-deep font-semibold mb-3">{exp.company}</div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";

interface AboutProps {
  data: any;
}

export default function About({ data }: AboutProps) {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 rounded-[40px] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <span className="font-cursive text-8xl text-barbie-pink">About</span>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
              About <span className="text-barbie-pink">Me</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              {data.about}
            </p>

            <h3 className="text-2xl font-display font-bold text-gray-900 mb-6">
              My <span className="text-barbie-purple">Superpowers</span> 
            </h3>
            <div className="flex flex-wrap gap-4">
              {data.skills.map((skill: string, index: number) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="px-6 py-3 rounded-2xl bg-white border-2 border-barbie-light/30 text-barbie-deep font-semibold shadow-sm hover:shadow-md hover:border-barbie-pink transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

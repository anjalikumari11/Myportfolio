import { motion } from "motion/react";
import { GraduationCap } from "lucide-react";

interface EducationProps {
  data: any;
}

export default function Education({ data }: EducationProps) {
  return (
    <section id="education" className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-gray-900">
            My <span className="text-barbie-pink">Education</span> 
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.education.map((edu: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-card p-8 rounded-[32px] relative group overflow-hidden"
            >
              <div className="absolute -right-4 -top-4 text-barbie-pink/10 group-hover:text-barbie-pink/20 transition-colors">
                <GraduationCap size={120} />
              </div>
              
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 rounded-full bg-barbie-purple/20 text-barbie-deep text-xs font-bold mb-4">
                  {edu.year}
                </span>
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
                  {edu.degree}
                </h3>
                <p className="text-barbie-pink font-semibold mb-4">
                  {edu.college}
                </p>
                <div className="flex items-center gap-2 text-gray-600 font-medium">
                  <div className="w-8 h-1 bg-barbie-light rounded-full"></div>
                  {edu.grade}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

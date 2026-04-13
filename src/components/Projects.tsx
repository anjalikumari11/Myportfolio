import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";

interface ProjectsProps {
  data: any;
}

export default function Projects({ data }: ProjectsProps) {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-display font-extrabold text-gray-900 mb-4"
          >
            My <span className="text-barbie-pink">Creations</span> 
          </motion.h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A collection of projects where I blend technology with creativity to build something beautiful.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {data.projects.map((project: any, index: number) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative glass-card rounded-[32px] overflow-hidden hover:shadow-2xl hover:shadow-barbie-pink/20 transition-all duration-500"
            >
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-barbie-pink/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div className="flex gap-4">
                    <a href={project.link} target="_blank" rel="noreferrer" className="p-3 bg-white rounded-full text-barbie-pink hover:scale-110 transition-transform">
                      <ExternalLink size={20} />
                    </a>
                    <a href="#" className="p-3 bg-white rounded-full text-barbie-pink hover:scale-110 transition-transform">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-3 group-hover:text-barbie-pink transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t: string) => (
                    <span key={t} className="px-3 py-1 rounded-full bg-barbie-light/20 text-barbie-deep text-xs font-bold uppercase tracking-wider">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

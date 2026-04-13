import { motion } from "motion/react";
import { Send, Github, Linkedin, Mail, Heart } from "lucide-react";

interface ContactProps {
  data: any;
}

export default function Contact({ data }: ContactProps) {
  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="glass-card rounded-[40px] overflow-hidden flex flex-col lg:flex-row">
          {/* Left Side - Info */}
          <div className="lg:w-2/5 barbie-gradient p-12 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-display font-extrabold mb-6">Let's <br />Connect! </h2>
              <p className="text-white/90 text-lg mb-12">
                I'm always open to new opportunities, collaborations, or just a friendly chat about design and tech.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs uppercase font-bold text-white/70">Email Me</p>
                    <p className="font-semibold">{data.socials.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <Linkedin size={24} />
                  </div>
                  <div>
                    <p className="text-xs uppercase font-bold text-white/70">LinkedIn</p>
                    <p className="font-semibold">Anjali Kumari</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-12 border-t border-white/20">
              <p className="flex items-center gap-2 font-cursive text-2xl">
                Stay Pink! <Heart className="fill-white" size={24} />
              </p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="lg:w-3/5 p-12 bg-white/50">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-2">Name</label>
                  <input 
                    type="text" 
                    placeholder="Your lovely name"
                    className="w-full px-6 py-4 rounded-2xl bg-white border-2 border-barbie-light/20 focus:border-barbie-pink focus:outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-2">Email</label>
                  <input 
                    type="email" 
                    placeholder="hello@example.com"
                    className="w-full px-6 py-4 rounded-2xl bg-white border-2 border-barbie-light/20 focus:border-barbie-pink focus:outline-none transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-2">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell me something sweet..."
                  className="w-full px-6 py-4 rounded-2xl bg-white border-2 border-barbie-light/20 focus:border-barbie-pink focus:outline-none transition-all resize-none"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full barbie-button barbie-gradient flex items-center justify-center gap-3 text-lg"
              >
                Send Message <Send size={20} />
              </motion.button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-barbie-pink/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-barbie-purple/10 blur-3xl rounded-full"></div>
    </section>
  );
}

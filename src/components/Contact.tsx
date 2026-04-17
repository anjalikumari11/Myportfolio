import { motion } from "motion/react";
import { Send, Linkedin, Mail, CheckCircle2, AlertCircle } from "lucide-react";
import { useState } from "react";

interface ContactProps {
  data: any;
}

export default function Contact({ data }: ContactProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch("https://formspree.io/f/xkokjlop", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden bg-slate-900 mx-4 rounded-[4rem] mb-12">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Side - Info */}
          <div className="lg:w-1/2 text-white">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary font-display font-bold text-sm uppercase tracking-[0.2em] mb-6"
            >
              Get in Touch
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-display font-extrabold mb-8 leading-tight">
              Let's build <br /><span className="text-secondary italic">something</span> <br />extraordinary.
            </h2>
            <p className="text-slate-400 text-xl leading-relaxed mb-12 max-w-md">
              I'm always open to new opportunities, collaborations, or discussing the next big thing in visual communication.
            </p>
            
            <div className="space-y-8">
              <a href={`mailto:${data.socials.email}`} className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                  <Mail size={28} className="text-primary group-hover:text-white" />
                </div>
                <div>
                  <p className="text-xs uppercase font-bold text-slate-500 tracking-widest mb-1">Email Me</p>
                  <p className="text-xl font-display font-bold group-hover:text-primary transition-colors">{data.socials.email}</p>
                </div>
              </a>
              <a href={data.socials.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-secondary group-hover:border-secondary transition-all duration-300">
                  <Linkedin size={28} className="text-secondary group-hover:text-white" />
                </div>
                <div>
                  <p className="text-xs uppercase font-bold text-slate-500 tracking-widest mb-1">Connect</p>
                  <p className="text-xl font-display font-bold group-hover:text-secondary transition-colors">LinkedIn Profile</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="lg:w-1/2 w-full">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-10 md:p-12 rounded-[3.5rem] bg-white/5 border-white/10 backdrop-blur-2xl"
            >
              {status === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} className="text-green-500" />
                  </div>
                  <h3 className="text-3xl font-display font-bold text-white mb-4">Message Sent!</h3>
                  <p className="text-slate-400 mb-8">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="text-primary font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form className="space-y-8" onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <label className="text-sm font-bold text-slate-400 uppercase tracking-widest ml-1">Your Name</label>
                      <input 
                        required
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        type="text" 
                        placeholder="Enter your name"
                        className="w-full px-8 py-5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                      <input 
                        required
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email" 
                        placeholder="hello@example.com"
                        className="w-full px-8 py-5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-bold text-slate-400 uppercase tracking-widest ml-1">Message</label>
                      <textarea 
                        required
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="How can I help you?"
                        className="w-full px-8 py-5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all resize-none"
                      ></textarea>
                    </div>
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-red-500 text-sm font-bold">
                      <AlertCircle size={16} /> Something went wrong. Please try again.
                    </div>
                  )}

                  <motion.button
                    disabled={status === 'submitting'}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full premium-button premium-gradient flex items-center justify-center gap-3 text-lg py-5 rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                    <Send size={20} className={status === 'submitting' ? 'animate-pulse' : ''} />
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-secondary/10 blur-[120px] rounded-full"></div>
    </section>
  );
}

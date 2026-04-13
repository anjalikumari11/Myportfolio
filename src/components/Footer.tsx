import { motion } from "motion/react";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-barbie-light/20">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="font-cursive text-3xl text-barbie-pink mb-2">
            Anjali Kumari
          </div>
          <p className="text-gray-500 flex items-center gap-2">
            Made by <Heart size={16} className="text-barbie-pink fill-barbie-pink" /> Anjali
          </p>
          <p className="text-xs text-gray-400 uppercase tracking-widest mt-4">
            &copy; {new Date().getFullYear()} • All Rights Reserved
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

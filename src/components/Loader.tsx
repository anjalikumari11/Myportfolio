import { motion } from "motion/react";
import { Heart } from "lucide-react";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-barbie-light/30 backdrop-blur-xl">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative"
      >
        <Heart className="text-barbie-pink fill-barbie-pink" size={80} />
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          <span className="font-cursive text-white text-xl">Barbie</span>
        </motion.div>
      </motion.div>
    </div>
  );
}

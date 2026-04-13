import { motion } from "motion/react";
import { Heart, Star, Sparkles } from "lucide-react";

export default function FloatingShapes() {
  const shapes = [
    { Icon: Heart, color: "text-barbie-pink", size: 24, top: "10%", left: "5%" },
    { Icon: Star, color: "text-barbie-purple", size: 20, top: "20%", left: "85%" },
    { Icon: Sparkles, color: "text-barbie-peach", size: 18, top: "40%", left: "15%" },
    { Icon: Heart, color: "text-barbie-light", size: 32, top: "60%", left: "80%" },
    { Icon: Star, color: "text-barbie-pink", size: 28, top: "80%", left: "10%" },
    { Icon: Sparkles, color: "text-barbie-purple", size: 22, top: "75%", left: "90%" },
    { Icon: Heart, color: "text-barbie-peach", size: 26, top: "30%", left: "50%" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className={`absolute ${shape.color} opacity-30`}
          style={{ top: shape.top, left: shape.left }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 15, -15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <shape.Icon size={shape.size} />
        </motion.div>
      ))}
    </div>
  );
}

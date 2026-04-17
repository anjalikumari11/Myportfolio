import { motion } from "motion/react";
import { MoveRight, Circle, Triangle, Square, Activity, Database, Share2 } from "lucide-react";

export default function FloatingShapes() {
  const shapes = [
    { Icon: Circle, color: "text-primary", size: 24, top: "10%", left: "5%" },
    { Icon: Share2, color: "text-accent", size: 20, top: "20%", left: "85%" },
    { Icon: Activity, color: "text-secondary", size: 18, top: "40%", left: "15%" },
    { Icon: Triangle, color: "text-primary", size: 32, top: "60%", left: "80%" },
    { Icon: Square, color: "text-accent", size: 28, top: "80%", left: "10%" },
    { Icon: Database, color: "text-secondary", size: 22, top: "75%", left: "90%" },
    { Icon: MoveRight, color: "text-primary", size: 26, top: "30%", left: "50%" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className={`absolute ${shape.color} opacity-20`}
          style={{ top: shape.top, left: shape.left }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8 + i,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <shape.Icon size={shape.size} strokeWidth={1.5} />
        </motion.div>
      ))}
    </div>
  );
}

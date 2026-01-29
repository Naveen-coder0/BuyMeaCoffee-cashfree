import { motion } from "framer-motion";
import { Coffee } from "lucide-react";

interface CoffeeCardProps {
  coffees: number;
  amount: number; // ✅ number (important)
  delay?: number;
  popular?: boolean;
  onClick: () => void; // ✅ added
}

const CoffeeCard = ({
  coffees,
  amount,
  delay = 0,
  popular = false,
  onClick,
}: CoffeeCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.23, 1, 0.32, 1],
      }}
      whileHover={{
        y: -12,
        transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
      }}
      className={`glass-card relative z-10 p-8 sm:p-10 text-center group pointer-events-auto ${
        popular ? "ring-2 ring-primary/25 shadow-glow" : ""
      }`}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
    >
      {/* Popular badge */}
      {popular && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
          className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20 px-5 py-1.5 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground text-xs font-semibold rounded-full shadow-lg"
        >
          Popular
        </motion.div>
      )}

      {/* Coffee icons */}
      <div className="flex items-center justify-center gap-2 mb-6">
        {Array.from({ length: coffees }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0, rotate: -20 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: delay + 0.15 * i,
              ease: [0.23, 1, 0.32, 1],
            }}
            whileHover={{ scale: 1.15, rotate: 5 }}
          >
            <Coffee
              className="w-9 h-9 sm:w-10 sm:h-10 text-primary drop-shadow-sm"
              strokeWidth={1.5}
            />
          </motion.div>
        ))}
      </div>

      {/* Amount */}
      <motion.p
        className="font-serif text-4xl sm:text-5xl mb-2"
        whileHover={{ scale: 1.05 }}
      >
        ₹{amount}
      </motion.p>

      <p className="text-sm sm:text-base text-muted-foreground mb-8">
        {coffees === 1 ? "A coffee" : `${coffees} coffees`}
      </p>

      {/* ✅ WORKING BUTTON */}
      <button
        type="button"
        onClick={onClick}
        className="btn-coffee w-full text-base cursor-pointer pointer-events-auto relative z-20"
      >
        Support
      </button>
    </motion.div>
  );
};

export default CoffeeCard;

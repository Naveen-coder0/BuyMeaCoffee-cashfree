import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles } from "lucide-react";

const GratitudeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section className="py-32 sm:py-40 px-6 sm:px-8 relative overflow-hidden" ref={ref}>
      {/* Background glow */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-3xl" />
      </motion.div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ 
            duration: 1, 
            ease: [0.23, 1, 0.32, 1]
          }}
        >
          {/* Sparkle icon */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: -10 }}
            animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
            transition={{ 
              duration: 0.8,
              ease: [0.23, 1, 0.32, 1]
            }}
            className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-br from-primary/15 to-primary/5 mb-10 shadow-soft floating-element"
          >
            <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 text-primary" strokeWidth={1.5} />
          </motion.div>

          {/* Thank you message */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ 
              duration: 0.8, 
              delay: 0.15,
              ease: [0.23, 1, 0.32, 1]
            }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl mb-8"
          >
            Thank you
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ 
              duration: 0.8, 
              delay: 0.25,
              ease: [0.23, 1, 0.32, 1]
            }}
            className="text-lg sm:text-xl text-muted-foreground max-w-lg mx-auto leading-relaxed mb-10"
          >
            Whether you choose to support or not, thank you for being here. 
            Your time and attention mean everything to me.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ 
              duration: 0.6, 
              delay: 0.4,
              ease: [0.23, 1, 0.32, 1]
            }}
            className="text-5xl sm:text-6xl"
          >
            💛
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GratitudeSection;

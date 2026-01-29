import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart } from "lucide-react";

const StorySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section className="py-24 sm:py-32 px-6 sm:px-8" ref={ref}>
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            duration: 1,
            ease: [0.23, 1, 0.32, 1]
          }}
          className="glass-card-hover p-8 sm:p-12 md:p-14"
        >
          {/* Icon with glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-accent/50 mb-8 shadow-soft"
          >
            <Heart className="w-7 h-7 text-accent-foreground" strokeWidth={1.5} />
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-serif text-2xl sm:text-3xl md:text-4xl mb-8"
          >
            A little about me
          </motion.h2>

          {/* Personal Story */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-5 text-muted-foreground text-base sm:text-lg leading-[1.8]"
          >
            <p>
              Hey there! I'm a passionate developer and creator who loves building 
              things that make a difference. Every project I work on is crafted with 
              care and a genuine desire to help others.
            </p>
            <p>
              If something I've created has helped you—whether it's a tutorial, 
              open-source project, or just some advice—this is a simple way to 
              show your appreciation. It means the world to me.
            </p>
          </motion.div>

          {/* Signature */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 pt-8 border-t border-border/30"
          >
            <p className="text-sm text-muted-foreground/70 mb-1">
              With gratitude,
            </p>
            <p className="font-serif text-xl">Naveen Maan</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default StorySection;

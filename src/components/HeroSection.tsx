import { motion } from "framer-motion";
import { Coffee } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-[100svh] flex items-center justify-center px-6 sm:px-8 py-24 relative overflow-hidden">
      {/* Ambient background layers */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[140%] h-[60%] bg-gradient-to-b from-primary/[0.04] to-transparent rounded-full blur-3xl"
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 2, delay: 0.3 }}
          className="absolute top-1/3 -right-48 w-96 h-96 bg-primary/[0.03] rounded-full blur-3xl"
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-1/4 -left-48 w-80 h-80 bg-accent/30 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        {/* Floating coffee icon with 3D depth */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 1, 
            ease: [0.23, 1, 0.32, 1]
          }}
          className="mb-10 sm:mb-12"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-br from-primary/15 to-primary/5 floating-element shadow-soft">
            <Coffee className="w-10 h-10 sm:w-12 sm:h-12 text-primary" strokeWidth={1.5} />
          </div>
        </motion.div>

        {/* Name / Handle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.2,
            ease: [0.23, 1, 0.32, 1]
          }}
          className="text-muted-foreground font-medium tracking-[0.2em] uppercase text-xs sm:text-sm mb-6"
        >
          @Naveen Maan
        </motion.p>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1, 
            delay: 0.3,
            ease: [0.23, 1, 0.32, 1]
          }}
          className="font-serif text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-8 text-balance px-2"
        >
          If my work helped you,{" "}
          <span className="text-gradient">buy me a coffee</span>{" "}
          <span className="inline-block">☕</span>
        </motion.h1>

        {/* Sub-text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.5,
            ease: [0.23, 1, 0.32, 1]
          }}
          className="text-lg sm:text-xl text-muted-foreground max-w-md mx-auto leading-relaxed"
        >
          A simple way to support my journey as a creator and developer.
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-muted-foreground/40"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut"
            }}
            className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-2"
          >
            <motion.div 
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-2 bg-current rounded-full" 
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

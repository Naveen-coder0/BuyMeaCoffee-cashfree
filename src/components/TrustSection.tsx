import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Heart, Lock, MessageCircle } from "lucide-react";

const TrustSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const trustPoints = [
    {
      icon: Shield,
      title: "Secure & Safe",
      description: "Your support is handled with care and transparency.",
    },
    {
      icon: Heart,
      title: "No Pressure",
      description: "Support is completely optional. No guilt, no strings attached.",
    },
    {
      icon: Lock,
      title: "No Spam",
      description: "Your email stays private. I respect your inbox.",
    },
    {
      icon: MessageCircle,
      title: "Always Honest",
      description: "Clear about how your support helps me grow.",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.23, 1, 0.32, 1] as const
      }
    }
  };

  return (
    <section className="py-24 sm:py-32 px-6 sm:px-8 relative overflow-hidden" ref={ref}>
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-secondary/20 to-transparent pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            duration: 0.8,
            ease: [0.23, 1, 0.32, 1]
          }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-5">
            Built on trust
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-md mx-auto">
            A few promises I make to you.
          </p>
        </motion.div>

        {/* Trust points grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5"
        >
          {trustPoints.map((point) => (
            <motion.div
              key={point.title}
              variants={itemVariants}
              whileHover={{ 
                y: -4, 
                transition: { duration: 0.3, ease: [0.23, 1, 0.32, 1] } 
              }}
              className="flex items-start gap-5 p-6 sm:p-8 rounded-3xl bg-background/60 backdrop-blur-sm border border-border/30 shadow-soft transition-shadow duration-300 hover:shadow-lift"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-accent/50 flex items-center justify-center shadow-soft">
                <point.icon className="w-6 h-6 text-accent-foreground" strokeWidth={1.5} />
              </div>
              <div className="pt-1">
                <h3 className="font-semibold text-lg sm:text-xl mb-2">{point.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;

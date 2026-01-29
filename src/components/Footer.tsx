
import { motion } from "framer-motion";
import { Coffee } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 sm:py-20 px-6 sm:px-8 border-t border-border/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: [0.23, 1, 0.32, 1],
          }}
          className="flex flex-col items-center gap-6 text-center"
        >
          {/* Logo/Icon */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-3 text-muted-foreground"
          >
            <div className="p-2 rounded-xl bg-accent/50">
              <Coffee className="w-5 h-5" strokeWidth={1.5} />
            </div>
            <span className="font-medium text-base tracking-wide">
              @Naveen Maan
            </span>
          </motion.div>

          {/* Policy Links (Cashfree required) */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground underline underline-offset-4">
            <a href="/contact" className="hover:text-primary">
              Contact Us
            </a>
            <a href="/terms" className="hover:text-primary">
              Terms & Conditions
            </a>
            <a href="/refunds" className="hover:text-primary">
              Refund & Cancellation
            </a>
          </div>

          {/* Made with love */}
          <p className="text-sm text-muted-foreground/60">
            Made with <span className="text-primary">❤️</span> and a lot of coffee
          </p>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground/40 tracking-wide">
            © {currentYear} All rights reserved
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

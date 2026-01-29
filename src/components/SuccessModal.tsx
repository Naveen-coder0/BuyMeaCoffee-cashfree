import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";

interface SuccessModalProps {
  open: boolean;
  onClose: () => void;
}

const SuccessModal = ({ open, onClose }: SuccessModalProps) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="bg-white rounded-3xl p-8 sm:p-10 text-center max-w-sm w-full shadow-2xl"
          >
            <CheckCircle className="mx-auto mb-4 w-14 h-14 text-green-500" />

            <h3 className="font-serif text-2xl mb-2">
              Thank you ☕
            </h3>

            <p className="text-muted-foreground mb-6">
              Your support truly means a lot.  
              Thanks for buying me a coffee!
            </p>

            <button
              onClick={onClose}
              className="w-full rounded-xl bg-accent py-3 font-medium text-white"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SuccessModal;

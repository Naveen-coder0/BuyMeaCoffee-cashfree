import { motion, AnimatePresence } from "framer-motion";
import { XCircle } from "lucide-react";

interface FailureModalProps {
  open: boolean;
  onClose: () => void;
  onRetry: () => void;
}

const FailureModal = ({ open, onClose, onRetry }: FailureModalProps) => {
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
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
            className="bg-white rounded-3xl p-8 sm:p-10 text-center max-w-sm w-full shadow-2xl"
          >
            <XCircle className="mx-auto mb-4 w-14 h-14 text-red-500" />

            <h3 className="font-serif text-2xl mb-2">
              Payment failed
            </h3>

            <p className="text-muted-foreground mb-6">
              Something went wrong or the payment was cancelled.
              You can try again anytime.
            </p>

            <div className="flex gap-3">
              <button
                onClick={onRetry}
                className="flex-1 rounded-xl bg-accent py-3 font-medium text-white"
              >
                Try again
              </button>

              <button
                onClick={onClose}
                className="flex-1 rounded-xl border py-3 font-medium"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FailureModal;

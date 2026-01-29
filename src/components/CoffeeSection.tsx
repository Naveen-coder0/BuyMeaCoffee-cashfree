import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import CoffeeCard from "./CoffeeCard";
import { Sparkles } from "lucide-react";
import { openCashfree } from "@/lib/cashfree";
import SuccessModal from "@/components/SuccessModal";
import FailureModal from "@/components/FailureModal";

const CoffeeSection = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  // ✅ MODAL STATES
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFailure, setShowFailure] = useState(false);
  const [retryAmount, setRetryAmount] = useState<number | null>(null);

  const coffeeOptions = [
    { coffees: 1, amount: 99 },
    { coffees: 2, amount: 199, popular: true },
    { coffees: 3, amount: 299 },
  ];

  const handlePayment = (amount: number) => {
    setRetryAmount(amount);

    openCashfree(
      amount,
      () => {
        setShowFailure(false);
        setShowSuccess(true);
      },
      () => {
        setShowSuccess(false);
        setShowFailure(true);
      }
    );
  };

  return (
    <>
      <section
        ref={ref}
        className="relative py-24 sm:py-32 px-6 sm:px-8 pointer-events-auto"
      >
        <div className="max-w-5xl mx-auto relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="text-center mb-16 sm:mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-accent/80 backdrop-blur-sm text-accent-foreground text-sm font-medium mb-8 shadow-soft"
            >
              <Sparkles className="w-4 h-4" />
              <span>Support Options</span>
            </motion.div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-5">
              Buy me a coffee
            </h2>

            <p className="text-muted-foreground text-base sm:text-lg max-w-lg mx-auto leading-relaxed">
              Choose how many coffees you'd like to treat me to.
              Every bit of support helps fuel my work.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
            {coffeeOptions.map((option, index) => (
              <CoffeeCard
                key={option.amount}
                coffees={option.coffees}
                amount={option.amount}
                popular={option.popular}
                delay={index * 0.12}
                onClick={() => handlePayment(option.amount)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ✅ SUCCESS MODAL */}
      <SuccessModal
        open={showSuccess}
        onClose={() => setShowSuccess(false)}
      />

      {/* ❌ FAILURE MODAL */}
      <FailureModal
        open={showFailure}
        onClose={() => setShowFailure(false)}
        onRetry={() => {
          if (retryAmount) {
            setShowFailure(false);
            handlePayment(retryAmount);
          }
        }}
      />
    </>
  );
};

export default CoffeeSection;

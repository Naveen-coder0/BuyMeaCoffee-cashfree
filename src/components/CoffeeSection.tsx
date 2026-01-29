import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import CoffeeCard from "./CoffeeCard";
import { Sparkles } from "lucide-react";
import SuccessModal from "@/components/SuccessModal";
import FailureModal from "@/components/FailureModal";
import { startCashfreePayment } from "@/lib/cashfree";

const CoffeeSection = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const [showSuccess, setShowSuccess] = useState(false);
  const [showFailure, setShowFailure] = useState(false);
  const [retryAmount, setRetryAmount] = useState<number | null>(null);

  const coffeeOptions = [
    { coffees: 1, amount: 10 },
    { coffees: 2, amount: 199, popular: true },
    { coffees: 3, amount: 299 },
  ];

  const handlePayment = async (amount: number) => {
    try {
      setRetryAmount(amount);
      await startCashfreePayment(amount);
      setShowSuccess(true); // local success
    } catch {
      setShowFailure(true);
    }
  };

  return (
    <>
      <section ref={ref} className="relative py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
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

      <SuccessModal open={showSuccess} onClose={() => setShowSuccess(false)} />

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

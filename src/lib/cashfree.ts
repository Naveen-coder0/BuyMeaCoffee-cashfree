import { load } from "@cashfreepayments/cashfree-js";

let cashfreeInstance: any = null;

const getCashfree = async () => {
  if (!cashfreeInstance) {
    cashfreeInstance = await load({ mode: "sandbox" });
  }
  return cashfreeInstance;
};

export const openCashfree = async (
  amount: number,
  onSuccess: () => void,
  onFailure: () => void
) => {
  try {
    const res = await fetch("http://localhost:4000/api/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount }),
    });

    const data = await res.json();

    if (!data.payment_session_id) {
      throw new Error("No payment session id");
    }

    const cashfree = await getCashfree();

    await cashfree.checkout({
      paymentSessionId: data.payment_session_id,
      redirectTarget: "_modal",
    });

    // ❗ DO NOT call onSuccess here
    // payment result is not confirmed yet
  } catch (err) {
    console.error("Cashfree error:", err);
    onFailure();
  }
};


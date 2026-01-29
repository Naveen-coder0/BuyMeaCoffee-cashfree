import { load } from "@cashfreepayments/cashfree-js";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export async function startCashfreePayment(amount: number) {
  const res = await fetch(`${BACKEND_URL}/create-order`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ amount }),
  });

  if (!res.ok) {
    throw new Error("Failed to create order");
  }

  const data = await res.json();

  const cashfree = await load({
    mode: "production", // 🔥 LIVE MODE
  });

  if (!cashfree) {
    throw new Error("Cashfree SDK failed to load");
  }

  cashfree.checkout({
    paymentSessionId: data.payment_session_id,
    redirectTarget: "_modal",
  });
}

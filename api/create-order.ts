export default async function handler(req: Request): Promise<Response> {
  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      { status: 405 }
    );
  }

  try {
    const { amount } = await req.json();

    if (!amount) {
      return new Response(
        JSON.stringify({ error: "Amount required" }),
        { status: 400 }
      );
    }

    const response = await fetch("https://sandbox.cashfree.com/pg/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-client-id": process.env.CASHFREE_CLIENT_ID!,
        "x-client-secret": process.env.CASHFREE_CLIENT_SECRET!,
        "x-api-version": "2023-08-01",
      },
      body: JSON.stringify({
        order_id: `order_${Date.now()}`,
        order_amount: Number(amount),
        order_currency: "INR",
        customer_details: {
          customer_id: "cust_001",
          customer_email: "test@example.com",
          customer_phone: "9999999999",
        },
      }),
    });

    const data = await response.json();

    if (!data.payment_session_id) {
      return new Response(
        JSON.stringify({ error: "Cashfree failed", data }),
        { status: 500 }
      );
    }

    return new Response(
      JSON.stringify({ payment_session_id: data.payment_session_id }),
      { status: 200 }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Server error" }),
      { status: 500 }
    );
  }
}

import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();

/* ------------------ MIDDLEWARE ------------------ */
app.use(cors());
app.use(express.json());

/* ------------------ CASHFREE CONFIG ------------------ */
const CASHFREE_ENV = process.env.CASHFREE_ENV || "SANDBOX";

const CASHFREE_BASE_URL =
  CASHFREE_ENV === "PROD"
    ? "https://api.cashfree.com/pg/orders"
    : "https://sandbox.cashfree.com/pg/orders";

/* ------------------ ROUTES ------------------ */

app.get("/", (req, res) => {
  res.send(`Cashfree backend running ✅ (${CASHFREE_ENV})`);
});

app.post("/create-order", async (req, res) => {
  try {
    const { amount } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({ error: "Invalid amount" });
    }

    const orderId = `order_${Date.now()}`;

    const response = await axios.post(
      CASHFREE_BASE_URL,
      {
        order_id: orderId,
        order_amount: amount,
        order_currency: "INR",
        customer_details: {
          customer_id: `coffee_${Date.now()}`,
          customer_phone: "9999999999"
        }
      },
      {
        headers: {
          "x-client-id": process.env.CASHFREE_CLIENT_ID,
          "x-client-secret": process.env.CASHFREE_CLIENT_SECRET,
          "x-api-version": "2023-08-01",
          "Content-Type": "application/json"
        }
      }
    );

    return res.json(response.data);
  } catch (err) {
    console.error(
      "Cashfree error:",
      err.response?.data || err.message
    );

    return res.status(500).json({
      error: "Cashfree order creation failed"
    });
  }
});

/* ------------------ SERVER ------------------ */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Backend running on http://localhost:${PORT} (${CASHFREE_ENV})`
  );
});

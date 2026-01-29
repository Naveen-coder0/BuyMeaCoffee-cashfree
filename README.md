# Buy Me a Coffee ☕

A modern "Buy Me a Coffee" web application with integrated **Cashfree payment gateway** for seamless support transactions.

This project features:
- Clean, modern, and responsive UI/UX
- Mobile-first responsive design
- Smooth interactions and animations
- **Full Cashfree payment integration** (production-ready)
- Multiple coffee tier options
- Success/Failure modals for payment feedback

This is a **portfolio project** showcasing full-stack development skills including payment processing.

---

## 🌐 Live Demo
(Coming soon)

---

## 🧠 Project Overview
This website allows visitors to:
- Learn about the creator through Hero, Story, and Gratitude sections
- Browse and select coffee support tiers via the Coffee Section
- Experience trust indicators through the Trust Section
- Complete secure payments via **Cashfree Payment Gateway**
- Receive real-time success/failure feedback

**Payments are fully enabled** with Cashfree integration for processing donations.

---

## 🛠 Tech Stack
This project is built using:

- **Vite** - Build tool and dev server
- **React 18** - UI framework
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - High-quality UI components
- **Cashfree Payments SDK** - Payment processing
- **React Query** - Data fetching and state management
- **React Router** - Client-side routing

---

## 📦 Key Dependencies

- `@cashfreepayments/cashfree-js` - Cashfree payment SDK
- `@tanstack/react-query` - Server state management
- `@radix-ui/*` - Accessible UI primitives
- `zod` - Schema validation
- `react-hook-form` - Form management

---

## 🚀 Running the Project Locally

### Prerequisites
- Node.js (v18+ recommended)
- npm or bun
- Cashfree API credentials (Client ID & Secret)

### Setup

```sh
# Clone the repository
git clone <YOUR_GIT_REPOSITORY_URL>

# Navigate into the project
cd cashfree

# Install dependencies
npm install

# Create .env file with Cashfree credentials
echo "CASHFREE_CLIENT_ID=your_client_id" > .env.local
echo "CASHFREE_CLIENT_SECRET=your_client_secret" >> .env.local

# Start development server
npm run dev

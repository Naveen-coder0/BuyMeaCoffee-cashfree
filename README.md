# Buy Me a Coffee ☕

A modern, full-stack "Buy Me a Coffee" web application with integrated Cashfree payment gateway. This project showcases a clean UI/UX paired with a functional payment processing backend.

**Features:**
- Clean, responsive, and modern UI/UX
- Mobile-first design with Tailwind CSS
- Full-stack implementation with Express backend
- Cashfree payment gateway integration (Sandbox & Production ready)
- Multiple coffee support tiers
- Hero, Story, Trust, and Gratitude sections
- Success/Failure payment modals

This is a **personal portfolio project** demonstrating full-stack development skills.

---

## 🌐 Live Demo
(Will be added after deployment)

---

## 🧠 Project Overview

### Frontend Pages
The application is a single-page website with the following sections:
- **Hero Section** - Eye-catching landing section
- **Story Section** - About the creator
- **Coffee Section** - Coffee tier selection with payment integration
- **Trust Section** - Testimonials and social proof
- **Gratitude Section** - Thank you message
- **Footer** - Navigation and links

### Backend API
Simple Express.js backend that handles:
- `/` - Health check endpoint
- `POST /create-order` - Creates Cashfree payment orders and returns payment session IDs

---

## 🛠 Tech Stack

### Frontend
- **Vite** - Fast build tool and dev server
- **React 18** - UI library
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - High-quality UI components
- **React Router** - Client-side routing
- **TanStack Query** - Data fetching and caching
- **Cashfree Payments SDK** - Payment gateway integration

### Backend
- **Node.js** - Runtime
- **Express.js** - Web framework
- **Axios** - HTTP client for Cashfree API
- Cashfree account credentials (optional, for live payments)

### Setup

**1. Clone the repository**
```sh
git clone <YOUR_GIT_REPOSITORY_URL>
cd <PROJECT_FOLDER_NAME>
```

**2. Install frontend dependencies**
```sh
npm install
```

**3. Install backend dependencies**
```sh
cd backend
npm install
cd ..
```

**4. Configure environment variables**
Create a `.env` file in the `backend/` folder:
```
CASHFREE_CLIENT_ID=your_client_id
CASHFREE_CLIENT_SECRET=your_client_secret
CASHFREE_ENV=SANDBOX
PORT=5000
```

**5. Start the backend server**
```sh
cd backend
npm run dev
```

**6. Start the frontend dev server** (in a new terminal)
```sh
npm run dev
```

The app will be available at `http://localhost:5173` (Vite default)

---

## 📦 Available Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm test` - Run tests once
- `npm run test:watch` - Run tests in watch mode

### Backend
- `npm run dev` - Start backend server (from backend folder)

---

## 💳 Payment Integration

The application uses **Cashfree** payment gateway:
- Sandbox mode enabled by default (safe for testing)
- Supports both Sandbox and Production environments
- Coffee tiers are wired up to initiate payments
- Success/Failure modals display payment results

To enable live payments:
1. Upgrade your Cashfree account to production
2. Update `CASHFREE_ENV=PROD` in `.env`
3. Add your production credentials

---

## 📂 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── ui/             # shadcn/ui components
│   └── [Page Sections] # HeroSection, CoffeeSection, etc.
├── pages/              # Route pages
├── lib/                # Utilities (cashfree.ts)
├── hooks/              # Custom React hooks
└── App.tsx             # Main app component

backend/
└── index.js            # Express server with Cashfree integration
# Clone the repository
git clone <YOUR_GIT_REPOSITORY_URL>

# Navigate into the project
cd <PROJECT_FOLDER_NAME>

# Install dependencies
npm install

# Start development server
npm run dev

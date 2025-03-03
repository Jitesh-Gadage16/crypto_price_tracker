# Crypto Price Tracker

## **📌 Project Overview**

Crypto Price Tracker is a web application that displays live cryptocurrency prices using the **CoinGecko API**. The application features real-time updates, a search bar for filtering cryptocurrencies, and a refresh button for manually updating prices.

### **🌟 Features:**

- 🚀 **Live Cryptocurrency Prices** (Bitcoin, Ethereum, Dogecoin, Cardano, Solana)
- 🔄 **Auto-refresh every 60 seconds** (Using React Query)
- 🔍 **Search functionality** to filter cryptocurrencies
- 🌐 **Responsive UI** (Optimized for Desktop & Mobile)
- 🎨 **Modern Tailwind CSS Styling** with a gradient theme

---

## **⚡ Setup Instructions**

### **📌 Prerequisites**

- **Node.js** (v16 or later)
- **npm** or **yarn**

### **📥 Installation**

Clone the repository and install dependencies:

```sh
git clone https://github.com/your-repo/crypto-price-tracker.git
cd crypto-price-tracker
npm install
```

### **🚀 Running the Project**

Start the Next.js development server:

```sh
npm run dev
```

- The app will be available at `http://localhost:3000`

### **📦 Building for Production**

To create a production build:

```sh
npm run build
npm start
```

---

## **🛠️ API Integration**

- Fetching data from **CoinGecko API**:

```sh
https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin,cardano,solana&vs_currencies=usd
```

- API response format:

```json
{
  "bitcoin": { "usd": 45000 },
  "ethereum": { "usd": 3200 },
  "dogecoin": { "usd": 0.25 }
}
```

- **Data is refreshed every 60 seconds** using React Query.

---

## **📌 State Management (React Query)**

```tsx
const { data, isLoading, isError, refetch } = useQuery(
  "cryptoPrices",
  fetchCryptoPrices,
  {
    refetchInterval: 60000,
    staleTime: 30000,
    cacheTime: 300000,
    retry: 2,
  }
);
```

---

## **📌 Folder Structure**

```
crypto-price-tracker/
│── src/
│   ├── app/
│   │   ├── components/        # UI Components
│   │   ├── hooks/             # Custom Hooks
│   │   ├── styles/            # Global Styles
│   │   ├── pages/             # Application Pages
│   │   ├── layout.tsx         # Main Layout
│   ├── public/                # Static Assets
│   ├── docs/                  # Documentation
│── tailwind.config.js         # Tailwind CSS Configuration
│── postcss.config.js          # PostCSS Configuration
│── package.json               # Project Dependencies
│── README.md                  # Project Overview & Setup
```

---

## **📌 Challenges & Solutions**

✅ **Hydration Errors in Next.js** → Fixed by ensuring client-only execution using `useEffect` and `"use client"`.
✅ **Handling API Rate Limits** → Used **React Query Caching** & limited refresh interval to **60 seconds**.
✅ **Mobile Responsiveness** → Used **Tailwind CSS Grid & Flex utilities**.
✅ **Browser Extensions Interfering with Hydration** → Added **CSS rules to hide unwanted attributes**.

---

## **📌 Contributing**

Feel free to fork this repository and submit pull requests with improvements or bug fixes! 😊

---

## **📌 License**

This project is open-source and available under the **MIT License**.

🚀 **Happy Coding!** 🎉

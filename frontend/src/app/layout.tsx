import "./styles/globals.css"; // Ensure Tailwind is imported
import QueryProvider from "./providers/QueryProvider";
import Navbar from "./components/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Crypto Price Tracker</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
        <QueryProvider>
          <Navbar />
          <main className="container mx-auto p-6">{children}</main>
        </QueryProvider>
      </body>
    </html>
  );
}

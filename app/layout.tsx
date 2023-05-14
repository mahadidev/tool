import { Footer, Navigation } from "@/components";
import "./globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
      </head>
      <body className={`${inter.className} min-h-screen`}>
        <header>
          <Navigation />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Augova | Your AI Receptionist",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <link href="https://cdn.jsdelivr.net/npm/jetbrains-mono@1.0.6/css/jetbrains-mono.min.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/geist@1.3.0/dist/fonts.css" rel="stylesheet" />
      </head>
      <body className="selection:bg-primary selection:text-background">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

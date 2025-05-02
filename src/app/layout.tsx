import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });
export const metadata = {
  title: "Riderly Rides - Easy Bike & Auto Booking",
  description: "Instantly book affordable bike and auto rides across India with Riderly Rides. Reliable, safe, and convenient travel at your fingertips. Download the app!",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={poppins.className}>
      <body className="min-h-screen bg-background text-foreground antialiased">

          {children}

          <Toaster />
      </body>
    </html>
  );
}

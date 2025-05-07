"use client";

import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from 'sonner';
import { Poppins } from 'next/font/google';
import { useEffect, useState } from 'react';
import { Loader } from '@/components/ui/loader';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export default function ClientRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for demonstration purposes
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <html lang="en" suppressHydrationWarning className={poppins.className}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="ZiplyRide Rides - Book Bike & Auto Rides in India" />
        <meta property="og:description" content="ZiplyRide Rides: Your go-to app for fast, safe, and affordable bike and auto rides across India. Book your next ride in minutes or sign up to drive!" />
        <meta property="og:image" content="https://img.freepik.com/free-vector/romantic-getaway-illustration-concept_114360-765.jpg?semt=ais_hybrid&w=740" />
        <meta property="og:url" content="https://www.riderlyrides.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="ZiplyRide Rides" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ZiplyRide Rides - Book Bike & Auto Rides in India" />
        <meta name="twitter:description" content="ZiplyRide Rides: Your go-to app for fast, safe, and affordable bike and auto rides across India. Book your next ride in minutes or sign up to drive!" />
        <meta name="twitter:image" content="https://img.freepik.com/free-vector/romantic-getaway-illustration-concept_114360-765.jpg?semt=ais_hybrid&w=740" />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <Loader isLoading={isLoading} />
        <Toaster />
        {children}
      </body>
    </html>
  );
}

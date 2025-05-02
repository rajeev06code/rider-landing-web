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
        <meta property="og:title" content="Riderly Rides - Book Safe and Affordable Rides" />
        <meta property="og:description" content="Riderly Rides is your go-to app for safe and affordable rides. Book your next ride easily or sign up as a driver today!" />
        <meta property="og:image" content="https://www.example.com/og-image.jpg" />
        <meta property="og:url" content="https://www.riderlyrides.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Riderly Rides" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Riderly Rides - Book Safe and Affordable Rides" />
        <meta name="twitter:description" content="Riderly Rides is your go-to app for safe and affordable rides. Book your next ride easily or sign up as a driver today!" />
        <meta name="twitter:image" content="https://www.example.com/og-image.jpg" />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <Loader isLoading={isLoading} />
        <Toaster />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css'; // Make sure to adjust the path if needed
import { Poppins } from 'next/font/google';
import ClientLayout from './client-layout';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });
export const metadata: Metadata = {
  title: "Riderly Rides - Book Bike & Auto Rides Across India",
  description: "Riderly Rides offers fast, safe, and affordable bike and auto taxi services in India. Download the app to book your ride in minutes or sign up as a driver partner!",
  keywords: "Riderly Rides, bike taxi, auto taxi, ride hailing India, book ride, affordable rides, driver signup, Chalo India",
};
export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={poppins.className}>
      <ClientLayout>{children}</ClientLayout>
    </html>
  );
}

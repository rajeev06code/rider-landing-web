import type { Metadata } from 'next';
import './globals.css'; // Make sure to adjust the path if needed
import { Poppins } from 'next/font/google';
import ClientLayout from './client-layout';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });
export const metadata = {
  title: "Riderly Rides - Book Safe and Affordable Rides",
  description: "Riderly Rides is your go-to app for safe and affordable rides. Book your next ride easily or sign up as a driver today!",
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

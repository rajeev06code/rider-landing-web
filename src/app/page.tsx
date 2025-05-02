import Header from "@/components/landing/header";
import Hero from "@/components/landing/hero";
import Features from "@/components/landing/features";
import HowItWorks from "@/components/landing/how-it-works";
import Testimonials from "@/components/landing/testimonials";
// Removed import for MapPlaceholder
import DownloadApp from "@/components/landing/download-app";
import Footer from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        {/* Removed MapPlaceholder component */}
        <DownloadApp />
      </main>
      <Footer />
    </div>
  );
}

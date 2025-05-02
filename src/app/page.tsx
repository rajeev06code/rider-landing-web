"use client";
import Header from "@/components/landing/header";
import Hero from "@/components/landing/hero";
import Features from "@/components/landing/features";
import HowItWorks from "@/components/landing/how-it-works";
import Testimonials from "@/components/landing/testimonials";
import DownloadApp from "@/components/landing/download-app"; // Import the new component
import JoinDriverTeam from "@/components/landing/join-driver-team";
import Footer from "@/components/landing/footer";
import Head from "next/head";
import DriverSignupForm from "@/components/landing/contact-us-form";

export default function Home() {
  return (
    <>
      <Head>
        <title>Riderly Rides - Book Safe and Affordable Rides</title>
        <meta name="description" content="Riderly Rides is your go-to app for safe and affordable rides. Book your next ride easily or sign up as a driver today!" />
      </Head>
    <div className="flex flex-col min-h-dvh ">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <DownloadApp />
        <DriverSignupForm />
      </main>
      <Footer />
    </div>
    </>
  );
}

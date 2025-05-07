"use client";
import { useRef } from "react";
import Hero from "@/components/landing/hero";
import Features from "@/components/landing/features";
import HowItWorks from "@/components/landing/how-it-works";
import Testimonials from "@/components/landing/testimonials";
import LoyaltyProgram from "@/components/landing/loyalty-program";
import Header from "@/components/landing/header";
import DownloadApp from "@/components/landing/download-app";
import Footer from "@/components/landing/footer";
import Head from "next/head";
import ContactUsForm from "@/components/landing/contact-us-form"; // Renamed import for clarity
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);

  const { ref: heroRef, inView: isHeroVisible } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: featuresRef, inView: isFeaturesVisible } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: howItWorksRef, inView: isHowItWorksVisible } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: loyaltyProgramRef, inView: isLoyaltyProgramVisible } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: testimonialsRef, inView: isTestimonialsVisible } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: downloadAppRef, inView: isDownloadAppVisible } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: contactUsRef, inView: isContactUsVisible } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <>
      <Head>
        <title>ZiplyRide - Book Bike & Auto Rides Across India</title>
        <meta
          name="description"
          content="ZiplyRide offers fast, safe, and affordable bike and auto taxi services in India. Download the app to book your ride in minutes or sign up as a driver partner!"
        />
        <meta name="keywords" content="ZiplyRide, bike taxi, auto taxi, ride hailing India, book ride, affordable rides, driver signup, Chalo India" />
      </Head>
      <div className="flex flex-col min-h-dvh relative bg-background" ref={mainRef}>
        <Header />
        <main className="flex-1">
          <motion.section ref={heroRef} variants={sectionVariants} initial="hidden" animate={isHeroVisible ? "visible" : "hidden"}>
            <Hero />
          </motion.section>
          <motion.section ref={featuresRef} variants={sectionVariants} initial="hidden" animate={isFeaturesVisible ? "visible" : "hidden"}>
            <Features />
          </motion.section>
          <motion.section ref={howItWorksRef} variants={sectionVariants} initial="hidden" animate={isHowItWorksVisible ? "visible" : "hidden"}>
            <HowItWorks />
          </motion.section>
          <motion.section ref={loyaltyProgramRef} variants={sectionVariants} initial="hidden" animate={isLoyaltyProgramVisible ? "visible" : "hidden"}>
            <LoyaltyProgram />
          </motion.section>
          <motion.section
            ref={testimonialsRef}
            variants={sectionVariants}
            initial="hidden"
            animate={isTestimonialsVisible ? "visible" : "hidden"}
          >
            <Testimonials />
          </motion.section>
          <motion.section
            ref={downloadAppRef}
            variants={sectionVariants}
            initial="hidden"
            animate={isDownloadAppVisible ? "visible" : "hidden"}
          >
            <DownloadApp />
          </motion.section>
          <motion.section ref={contactUsRef} variants={sectionVariants} initial="hidden" animate={isContactUsVisible ? "visible" : "hidden"}>
            <ContactUsForm />
          </motion.section>
        </main>
        <Footer />
      </div>
    </>
  );
}

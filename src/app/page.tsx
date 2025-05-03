"use client";
import Header from "@/components/landing/header";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import Hero from "@/components/landing/hero";
import Features from "@/components/landing/features";
import HowItWorks from "@/components/landing/how-it-works";
import Testimonials from "@/components/landing/testimonials";
import LoyaltyProgram from "@/components/landing/loyalty-program"; // Import the new component
import DownloadApp from "@/components/landing/download-app";

import Footer from "@/components/landing/footer";
import Head from "next/head";
import DriverSignupForm from "@/components/landing/contact-us-form";
import { useInView } from "react-intersection-observer";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};



export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);

  const { ref: heroRef, inView: isHeroVisible } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const { ref: featuresRef, inView: isFeaturesVisible } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const { ref: howItWorksRef, inView: isHowItWorksVisible } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const { ref: loyaltyProgramRef, inView: isLoyaltyProgramVisible } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const { ref: testimonialsRef, inView: isTestimonialsVisible } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const { ref: downloadAppRef, inView: isDownloadAppVisible } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const { ref: contactUsRef, inView: isContactUsVisible } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <>
      <Head>
        <title>Riderly Rides - Book Safe and Affordable Rides</title>
        <meta
          name="description"
          content="Riderly Rides is your go-to app for safe and affordable rides. Book your next ride easily or sign up as a driver today!"
        />
      </Head>
      <div className="flex flex-col min-h-dvh " ref={mainRef}>
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
            <LoyaltyProgram  />
          </motion.section>
          <motion.section ref={testimonialsRef} variants={sectionVariants} initial="hidden" animate={isTestimonialsVisible ? "visible" : "hidden"}>
            <Testimonials />
          </motion.section>
          <motion.section ref={downloadAppRef} variants={sectionVariants} initial="hidden" animate={isDownloadAppVisible ? "visible" : "hidden"}>
            <DownloadApp />
          </motion.section>
          <motion.section ref={contactUsRef} variants={sectionVariants} initial="hidden" animate={isContactUsVisible ? "visible" : "hidden"}>
            <DriverSignupForm />
          </motion.section>
        </main>
        <Footer />
      </div>
    </>
  );
}

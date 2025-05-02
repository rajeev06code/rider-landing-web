"use client";

import Header from "@/components/landing/header";
import Footer from "@/components/landing/footer";
import { useEffect } from "react";

export default function TermsPage() {
  useEffect(() => {
    document.title = "Riderly Rides - Terms and Conditions";
    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content = "Riderly Rides Terms and Conditions: Understand your responsibilities and rights when using our services.";
    document.head.appendChild(metaDescription);
  }, []);
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container py-16 md:py-24">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms and Conditions</h1>
        <div className="prose dark:prose-invert max-w-none space-y-4">
          <p>
            Welcome to Riderly Rides! These terms and conditions outline the rules and regulations for the use of Riderly Rides's Website and App.
          </p>
          <p>
            By accessing this website/app we assume you accept these terms and conditions. Do not continue to use Riderly Rides if you do not agree to take all of the terms and conditions stated on this page.
          </p>
          <h2 className="text-2xl font-semibold mt-6">License</h2>
          <p>
            Unless otherwise stated, Riderly Rides and/or its licensors own the intellectual property rights for all material on Riderly Rides. All intellectual property rights are reserved. You may access this from Riderly Rides for your own personal use subjected to restrictions set in these terms and conditions.
          </p>
           <p>You must not:</p>
          <ul>
              <li>Republish material from Riderly Rides</li>
              <li>Sell, rent or sub-license material from Riderly Rides</li>
              <li>Reproduce, duplicate or copy material from Riderly Rides</li>
              <li>Redistribute content from Riderly Rides</li>
          </ul>
          <h2 className="text-2xl font-semibold mt-6">User Responsibilities</h2>
           <p>...</p>
           <ul>
            <li>You agree to use our services only for lawful purposes and in accordance with these Terms.</li>
            <li>You are responsible for maintaining the confidentiality of your account information.</li>
            <li>You agree not to use our services to engage in any illegal, fraudulent, or harmful activities.</li>
            <li>You must not attempt to gain unauthorized access to our systems or any user accounts.</li>
            <li>You must not interfere with the security or proper functioning of our services.</li>
          </ul>
          <h2 className="text-2xl font-semibold mt-6">Payment Terms</h2>
          <p>Payment for services is due at the time of service.</p>
          <p>We accept various forms of payment, including credit cards and digital payment methods.</p>
          <p>All transactions are processed securely.</p>
          <p>Any disputes regarding payment should be reported to us immediately.</p>
          <h2 className="text-2xl font-semibold mt-6">Limitation of Liability</h2>
           <p>...</p>
          <p>
            [More detailed terms and conditions specific to the ride-hailing service will be added here.]
          </p>
          <h2 className="text-2xl font-semibold mt-6">Contact Information</h2>
          <p>
            If you have any questions about these Terms and Conditions, please contact us at [Your Contact Email]
          </p>
           <p className="font-semibold mt-8">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
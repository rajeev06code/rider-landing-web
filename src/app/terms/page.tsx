"use client";

import Header from "@/components/landing/header";
import Footer from "@/components/landing/footer";
import { useEffect, useState } from "react";

export default function TermsPage() {
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
    document.title = "Riderly Rides - Terms and Conditions";
    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content = "Riderly Rides Terms and Conditions: Understand your responsibilities and rights when using our bike and auto ride-hailing services.";
    document.head.appendChild(metaDescription);

    setLastUpdated(new Date().toLocaleDateString());
    
    return () => {
      document.head.removeChild(metaDescription);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container py-16 md:py-24">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms and Conditions for Riderly Rides</h1>
        <div className="prose dark:prose-invert max-w-none space-y-4">
          {lastUpdated && <p className="font-semibold">Last updated: {lastUpdated}</p>}
          <p>
            Welcome to Riderly Rides! These terms and conditions outline the rules and regulations for the use of Riderly Rides's Website and Mobile Application (collectively, "Services").
          </p>
          <p>
            By accessing or using our Services, we assume you accept these terms and conditions. Do not continue to use Riderly Rides if you do not agree to all of the terms and conditions stated on this page.
          </p>
          <h2 className="text-2xl font-semibold mt-6">License to Use Services</h2>
          <p>
            Unless otherwise stated, Riderly Rides and/or its licensors own the intellectual property rights for all material on Riderly Rides. All intellectual property rights are reserved. You may access our Services for your own personal, non-commercial use subjected to restrictions set in these terms and conditions.
          </p>
           <p>You must not:</p>
          <ul>
              <li>Republish material from Riderly Rides without prior written consent.</li>
              <li>Sell, rent or sub-license material from Riderly Rides.</li>
              <li>Reproduce, duplicate or copy material from Riderly Rides for commercial purposes.</li>
              <li>Redistribute content from Riderly Rides.</li>
              <li>Use our Services in any way that is, or may be, damaging to the Services or impairs user access.</li>
              <li>Use our Services contrary to applicable laws and regulations, or in a way that causes, or may cause, harm to the Services, or to any person or business entity.</li>
          </ul>
          <h2 className="text-2xl font-semibold mt-6">User Accounts</h2>
           <p>To use certain features of our Services (e.g., booking rides), you may be required to create an account. You must provide accurate and complete information and keep your account information updated. You are responsible for maintaining the confidentiality of your account login information and are fully responsible for all activities that occur under your account.</p>
           <p>Riderly Rides reserves the right to suspend or terminate your account at any time for any breach of these Terms.</p>

          <h2 className="text-2xl font-semibold mt-6">Ride Booking and Services</h2>
            <ul>
                <li>Riderly Rides provides a platform to connect users seeking transportation (Riders) with independent third-party transportation providers (Drivers).</li>
                <li>Ride availability may vary based on location, time, and demand.</li>
                <li>Estimated fares are provided before booking but may vary due to factors like traffic, route changes, or surge pricing. The final fare will be displayed in the app upon ride completion.</li>
                <li>Riders are expected to treat Drivers and their vehicles with respect. Any damage caused to a Driver's vehicle by a Rider may result in charges.</li>
                <li>Riders must adhere to safety guidelines, including wearing helmets for bike rides where applicable by law.</li>
            </ul>

          <h2 className="text-2xl font-semibold mt-6">Driver Partner Terms</h2>
           <p>If you register as a Driver partner, additional terms and conditions specific to Drivers will apply. These will be provided to you during the driver onboarding process.</p>
           
          <h2 className="text-2xl font-semibold mt-6">Payment Terms</h2>
          <p>Payment for rides is processed through the app using integrated payment gateways. You agree to pay all fares and charges associated with your use of the Services.</p>
          <p>We accept various forms of payment, including credit/debit cards and digital payment methods, as available in the app.</p>
          <p>All transactions are processed securely. Riderly Rides does not store your full card details.</p>
          <p>Cancellation fees may apply if you cancel a ride after a certain period or if a Driver has already started moving towards your pickup location.</p>
          <p>Any disputes regarding payment should be reported to our customer support immediately.</p>

          <h2 className="text-2xl font-semibold mt-6">Limitation of Liability</h2>
           <p>To the fullest extent permitted by applicable law, Riderly Rides shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (a) your access to or use of or inability to access or use the services; (b) any conduct or content of any third party on the services, including without limitation, any defamatory, offensive or illegal conduct of other users or third parties; (c) any content obtained from the services; or (d) unauthorized access, use or alteration of your transmissions or content.</p>
           <p>Riderly Rides does not guarantee the quality, suitability, safety, or ability of third-party Drivers. You agree that the entire risk arising out of your use of the Services, and any service or good requested in connection therewith, remains solely with you.</p>
          
          <h2 className="text-2xl font-semibold mt-6">Changes to Terms</h2>
          <p>Riderly Rides reserves the right to modify these terms at any time. We will notify you of any changes by posting the new Terms and Conditions on this page and updating the "Last updated" date. Your continued use of the Services after such changes constitutes your acceptance of the new Terms.</p>

          <h2 className="text-2xl font-semibold mt-6">Contact Information</h2>
          <p>
            If you have any questions about these Terms and Conditions, please contact us at support@riderlyrides.com
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

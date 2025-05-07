
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Riderly Rides - Privacy Policy",
  description: "Riderly Rides Privacy Policy: Learn how we collect, use, and protect your personal information when you use our bike and auto ride-hailing services.",
}; //TODO: Update the metadata to reflect the change of Riderly Rides to ZiplyRide

import Header from "@/components/landing/header";
import Footer from "@/components/landing/footer";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-dvh"> 
      <Header />
      <main className="flex-1 container py-16 md:py-24">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy for Riderly Rides</h1>
        <div className="prose dark:prose-invert max-w-none space-y-4">
          <p className="font-semibold">Last updated: {new Date().toLocaleDateString()}</p>
          <p>
            Your privacy is important to us. It is Riderly Rides's policy to respect your privacy regarding any information we may collect from you across our website, app, and other sites we own and operate.
          </p> 
          <h2 className="text-2xl font-semibold mt-6">Information We Collect</h2>
          <p>
           We only ask for personal information when we truly need it to provide our ride-hailing services to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.
          </p>
          <p>
            Information we collect may include:
          </p>
           <ul>
              <li>Name and contact details (email, phone number)</li>
              <li>Location data (for ride booking, tracking, and safety purposes)</li>
              <li>Payment information (processed securely by third-party payment gateways)</li>
              <li>Device information (model, OS version) and usage data (app interactions, ride history)</li>
              <li>Driver-specific information (if you sign up as a driver): vehicle details, license, and other necessary documents.</li>
          </ul>
           <h2 className="text-2xl font-semibold mt-6">How We Use Your Information</h2>
          <p>We use the collected information to:</p>
          <ul>
            <li>Provide, operate, and maintain our ride-hailing services (bike and auto rides).</li>
            <li>Improve, personalize, and expand our services.</li>
            <li>Understand and analyze how you use our services to enhance user experience.</li>
            <li>Process your transactions, manage payments, and send ride-related communications.</li>
            <li>
              Communicate with you, either directly or through one of our partners,
              including for customer service, to provide you with updates and other
              information relating to the service, and for marketing and promotional
              purposes (with your consent).
            </li>
            <li>Detect and prevent fraud, and ensure the safety and security of our users and platform.</li>
            <li>Conduct research and analytics to understand usage patterns and trends for service improvement.</li>
            <li>Comply with applicable laws, regulations, and legal processes.</li>
          </ul>
           <h2 className="text-2xl font-semibold mt-6">Data Security</h2>
           <p>
             We are committed to protecting your data. We implement commercially acceptable security measures to prevent loss and theft, as well as unauthorized access, disclosure, copying, use, or modification of your personal information.
           </p>
          <h2 className="text-2xl font-semibold mt-6">Your Rights</h2>
           <p>You have the right to access, update, or delete your personal information. You can manage your information through your Riderly Rides app settings or by contacting our support team. You also have the right to opt-out of certain communications.</p>
          <p> 
            This policy is effective as of the last updated date. We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
          </p>
            <h2 className="text-2xl font-semibold mt-6">Contact Information</h2> 
            <p>If you have any questions about this Privacy Policy, please contact us at support@riderlyrides.com</p> 
        </div>
      </main>
      <Footer />
    </div>
  );
}

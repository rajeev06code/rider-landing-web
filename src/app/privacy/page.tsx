import Header from "@/components/landing/header";
import Footer from "@/components/landing/footer";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <main className="flex-1 container py-16 md:py-24">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose dark:prose-invert max-w-none space-y-4">
          <p>
            Your privacy is important to us. It is Chalo India Rides's policy to respect your privacy regarding any information we may collect from you across our website and app.
          </p>
          <h2 className="text-2xl font-semibold mt-6">Information We Collect</h2>
          <p>
           We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.
          </p>
          <p>
            Information we collect may include:
          </p>
           <ul>
              <li>Name and contact details (email, phone number)</li>
              <li>Location data (for ride booking and tracking)</li>
              <li>Payment information (processed securely by third-party providers)</li>
              <li>Device information and usage data</li>
          </ul>
           <h2 className="text-2xl font-semibold mt-6">How We Use Your Information</h2>
          <p>
           We use the collected information to:
          </p>
           <ul>
              <li>Provide, operate, and maintain our services</li>
              <li>Improve, personalize, and expand our services</li>
              <li>Understand and analyze how you use our services</li>
              <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the service, and for marketing and promotional purposes</li>
              <li>Process your transactions</li>
              <li>Find and prevent fraud</li>
          </ul>
           <h2 className="text-2xl font-semibold mt-6">Data Security</h2>
           <p>
             We protect your data within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.
           </p>
          <h2 className="text-2xl font-semibold mt-6">Your Rights</h2>
           <p>...</p>
          <p>
            [More detailed privacy policy information will be added here.]
          </p>
          <p className="font-semibold mt-8">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
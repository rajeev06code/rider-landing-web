import Header from "@/components/landing/header";
import Footer from "@/components/landing/footer";

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <main className="flex-1 container py-16 md:py-24">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms and Conditions</h1>
        <div className="prose dark:prose-invert max-w-none space-y-4">
          <p>
            Welcome to Chalo India Rides! These terms and conditions outline the rules and regulations for the use of Chalo India Rides's Website and App.
          </p>
          <p>
            By accessing this website/app we assume you accept these terms and conditions. Do not continue to use Chalo India Rides if you do not agree to take all of the terms and conditions stated on this page.
          </p>
          <h2 className="text-2xl font-semibold mt-6">License</h2>
          <p>
            Unless otherwise stated, Chalo India Rides and/or its licensors own the intellectual property rights for all material on Chalo India Rides. All intellectual property rights are reserved. You may access this from Chalo India Rides for your own personal use subjected to restrictions set in these terms and conditions.
          </p>
           <p>You must not:</p>
          <ul>
              <li>Republish material from Chalo India Rides</li>
              <li>Sell, rent or sub-license material from Chalo India Rides</li>
              <li>Reproduce, duplicate or copy material from Chalo India Rides</li>
              <li>Redistribute content from Chalo India Rides</li>
          </ul>
          <h2 className="text-2xl font-semibold mt-6">User Responsibilities</h2>
           <p>...</p>
          <h2 className="text-2xl font-semibold mt-6">Payment Terms</h2>
           <p>...</p>
          <h2 className="text-2xl font-semibold mt-6">Limitation of Liability</h2>
           <p>...</p>
          <p>
            [More detailed terms and conditions specific to the ride-hailing service will be added here.]
          </p>
           <p className="font-semibold mt-8">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

import { MapPin, Smartphone, Navigation, CheckCircle, ShieldCheck } from "lucide-react"; // Added ShieldCheck
import React from "react";

const steps = [
  {
    icon: <Smartphone className="h-12 w-12 text-primary" />,
    title: "1. Download & Sign Up",
    titleHi: "१. ऐप डाउनलोड और साइन अप करें",
    description: "Get the Riderly app from your app store and create your account in minutes.",
    descriptionHi: "अपने ऐप स्टोर से राइडरली ऐप प्राप्त करें और मिनटों में अपना खाता बनाएं।",
  },
  {
    icon: <MapPin className="h-12 w-12 text-primary" />,
    title: "2. Set Pickup & Destination",
    titleHi: "२. पिकअप और ड्रॉप-ऑफ सेट करें",
    description: "Enter where you're going. Confirm your pickup location easily on the map.",
    descriptionHi: "आप कहाँ जा रहे हैं दर्ज करें। मानचित्र पर आसानी से अपने पिकअप स्थान की पुष्टि करें।",
  },
  {
    icon: <Navigation className="h-12 w-12 text-primary" />,
    title: "3. Choose Ride & Book",
    titleHi: "३. राइड चुनें और बुक करें",
    description: "Select your preferred ride (Bike or Auto) and tap to confirm your booking instantly.",
    descriptionHi: "अपनी पसंदीदा राइड (बाइक या ऑटो) चुनें और तुरंत अपनी बुकिंग की पुष्टि करने के लिए टैप करें।",
  },
   {
    icon: <ShieldCheck className="h-12 w-12 text-primary" />, // Changed icon to ShieldCheck for safety
    title: "4. Ride Securely & Pay",
    titleHi: "४. सुरक्षित सवारी और भुगतान करें",
    description: "Your driver arrives shortly. Track them, enjoy your safe ride, and pay seamlessly in-app!",
    descriptionHi: "आपका ड्राइवर शीघ्र ही आ जाएगा। उन्हें ट्रैक करें, अपनी सुरक्षित सवारी का आनंद लें, और ऐप में आसानी से भुगतान करें!",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="container py-16 md:py-24 bg-background">
      <div className="text-center mb-16 motion-safe:animate-fade-slide-up">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Booking Riderly is Easy!</h2>
         <p className="text-xl text-muted-foreground mt-3">राइडरली बुक करना है एकदम आसान!</p>
      </div>
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 lg:gap-x-12">
        {/* Dashed line connecting cards for larger screens - Improved visuals */}
        <div className="absolute top-1/2 left-0 right-0 h-1 border-t-2 border-dashed border-primary/30 hidden lg:block mt-[-24px] z-0 transform -translate-y-1/2"></div>

        {steps.map((step, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center text-center p-6 bg-card rounded-xl shadow-lg border border-border/50 motion-safe:animate-fade-slide-up transition-all duration-300 ease-in-out motion-safe:hover:scale-105 motion-safe:hover:shadow-primary/20 hover:border-primary/30 z-10 group"
            style={{ animationDelay: `${index * 180}ms`, animationFillMode: 'backwards' }}
          >
             {/* Circle on the dashed line - Improved visuals */}
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[24px] h-5 w-5 rounded-full bg-primary border-4 border-background hidden lg:block z-20 shadow-md transition-transform duration-300 group-hover:scale-125 group-hover:bg-primary/80" />
            <div className="mb-5 p-5 bg-primary/10 rounded-full inline-block transform transition-transform duration-300 ease-in-out group-hover:rotate-12 group-hover:bg-primary/20 shadow-sm">
              {React.cloneElement(step.icon, { className: "h-12 w-12 text-primary" })}
            </div>
            <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
            <p className="text-lg text-secondary font-medium mb-3">{step.titleHi}</p>
            <p className="text-muted-foreground text-base leading-relaxed">{step.description} <span className="block mt-1 text-sm">{step.descriptionHi}</span></p>
          </div>
        ))}
      </div>
    </section>
  );
}

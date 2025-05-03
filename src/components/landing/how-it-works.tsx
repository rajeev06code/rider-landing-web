import { MapPin, Smartphone, Navigation, CheckCircle } from "lucide-react";
import React from "react";

const steps = [
  {
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    title: "Download the App",
    titleHi: "ऐप डाउनलोड करें",
    description: "Get the Riderly Rides app from the App Store or Google Play.",
    descriptionHi: "ऐप स्टोर या गूगल प्ले से चलो इंडिया राइड्स ऐप प्राप्त करें।",
  },
  {
    icon: <MapPin className="h-10 w-10 text-primary" />,
    title: "Set Pickup & Drop",
    titleHi: "पिकअप और ड्रॉप सेट करें",
    description: "Enter your destination and confirm your pickup location on the map.",
    descriptionHi: "अपना गंतव्य दर्ज करें और मानचित्र पर अपने पिकअप स्थान की पुष्टि करें।",
  },
  {
    icon: <Navigation className="h-10 w-10 text-primary" />,
    title: "Book Your Ride",
    titleHi: "अपनी राइड बुक करें",
    description: "Choose your preferred ride (bike or auto) and confirm your booking.",
    descriptionHi: "अपनी पसंदीदा राइड (बाइक या ऑटो) चुनें और अपनी बुकिंग की पुष्टि करें।",
  },
   {
    icon: <CheckCircle className="h-10 w-10 text-primary" />,
    title: "Enjoy Your Safar!",
    titleHi: "अपने सफ़र का आनंद लें!",
    description: "Your driver arrives shortly. Track their location and enjoy the ride!",
    descriptionHi: "आपका ड्राइवर शीघ्र ही आ जाएगा। उनके स्थान को ट्रैक करें और सवारी का आनंद लें!",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="container py-16 md:py-24">
      <div className="text-center mb-16 motion-safe:animate-fade-slide-up"> {/* Increased margin bottom */}
        <h2 className="text-3xl md:text-4xl font-bold font-poppins">Booking Kaise Karein?</h2>
         <p className="text-base text-muted-foreground mt-2 font-poppins">How to Book a Ride?</p>
      </div>
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"> {/* Increased gap */}
         {/* Dashed line for larger screens */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 border-t-2 border-dashed border-primary/30 hidden lg:block mt-[-20px] z-0" /> {/* Adjusted position */}

        {steps.map((step, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-lg border border-border/50 motion-safe:animate-fade-slide-up transition-all duration-300 ease-in-out motion-safe:hover:scale-105 motion-safe:hover:bg-muted/30 z-10 group" // Added hover background and group
            style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'backwards' }} // Adjusted fill mode
          >
             {/* Circle on the dashed line */}
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[20px] h-4 w-4 rounded-full bg-primary border-4 border-background hidden lg:block z-20 shadow-md transition-transform duration-300 group-hover:scale-125" /> {/* Adjusted position, added hover effect */}
            <div className="mb-4 p-4 bg-primary/10 rounded-full inline-block transform transition-transform duration-300 ease-in-out group-hover:rotate-12">
              {React.cloneElement(step.icon, { className: "h-10 w-10 text-primary" })}
            </div>
            <h3 className="text-xl font-semibold mb-2 font-poppins">{step.title} <span className="block text-lg text-secondary font-poppins">{step.titleHi}</span></h3>
            <p className="text-muted-foreground text-sm">{step.description} <span className="block mt-1">{step.descriptionHi}</span></p> {/* Adjusted text size */}
          </div>
        ))}
      </div>
    </section>
  );
}

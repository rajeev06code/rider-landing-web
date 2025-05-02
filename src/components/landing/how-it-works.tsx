import { MapPin, Smartphone, Navigation, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    title: "Download the App",
    titleHi: "ऐप डाउनलोड करें",
    description: "Get the Chalo India Rides app from the App Store or Google Play.",
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
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Booking Kaise Karein?</h2>
         <p className="text-lg text-muted-foreground mt-2">How to Book a Ride?</p>
      </div>
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
         {/* Dashed line for larger screens - purely visual */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 border-t-2 border-dashed border-primary/50 hidden lg:block mt-[-1px]" />

        {steps.map((step, index) => (
          <div key={index} className="relative flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-sm border border-border/50">
             {/* Circle on the dashed line */}
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-primary border-2 border-background hidden lg:block z-10" />
            <div className="mb-4 p-4 bg-primary/10 rounded-full inline-block">
              {step.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{step.title} <span className="block text-lg text-secondary">{step.titleHi}</span></h3>
            <p className="text-muted-foreground">{step.description} <span className="block text-sm">{step.descriptionHi}</span></p>
          </div>
        ))}
      </div>
    </section>
  );
}

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Bike, IndianRupee, ShieldCheck, MapPin, Smartphone } from "lucide-react"; // Added Smartphone
import AutoIcon from "@/components/icons/auto-icon";

const features = [
  {
    icon: <Bike className="h-10 w-10 text-primary" />,
    title: "Bike & Auto Rides",
    titleHi: "बाइक और ऑटो राइड्स",
    description: "Choose quick bikes for solo trips or comfy autos for group travel. Your ride, your choice!",
    descriptionHi: "अकेले सफ़र के लिए तेज़ बाइक या समूह यात्रा के लिए आरामदायक ऑटो चुनें। आपकी राइड, आपकी पसंद!",
  },
  {
    icon: <IndianRupee className="h-10 w-10 text-primary" />,
    title: "Affordable & Transparent Fares",
    titleHi: "किफायती और पारदर्शी किराया",
    description: "Enjoy budget-friendly pricing with no hidden charges. Know your fare upfront.",
    descriptionHi: "बिना किसी छिपे शुल्क के बजट-अनुकूल मूल्य निर्धारण का आनंद लें। अपना किराया पहले ही जान लें।",
  },
   {
    icon: <MapPin className="h-10 w-10 text-primary" />, // Changed from Map to MapPin for location focus
    title: "Wide Availability",
    titleHi: "व्यापक उपलब्धता",
    description: "Find rides easily, anytime and anywhere across major Indian cities. We're always near you!",
    descriptionHi: "प्रमुख भारतीय शहरों में कहीं भी, कभी भी आसानी से राइड पाएं। हम हमेशा आपके करीब हैं!",
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: "Safety First, Always",
    titleHi: "सुरक्षा पहले, हमेशा",
    description: "Verified drivers, SOS alerts, and in-app safety features ensure a secure journey every time.",
    descriptionHi: "सत्यापित ड्राइवर, SOS अलर्ट और इन-ऐप सुरक्षा सुविधाएँ हर बार एक सुरक्षित यात्रा सुनिश्चित करती हैं।",
  },
];

export default function Features() {
  return (
    <section id="features" className="container py-16 md:py-24 bg-muted/20">
      <div className="text-center mb-16 motion-safe:animate-fade-slide-up">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Why Ride with ZiplyRide?</h2>
        <p className="text-xl text-muted-foreground mt-3">क्यों चुनें ZiplyRide के साथ अपना सफ़र?</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <Card
             key={index}
             className="text-center shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform motion-safe:hover:-translate-y-2 motion-safe:animate-fade-slide-up group bg-card border border-primary/10 hover:border-primary/30 rounded-xl"
             style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'backwards' }}
          >
            <CardHeader className="items-center p-8">
               <div className="p-5 rounded-full bg-primary/10 mb-6 transform transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:bg-primary/20 shadow-md">
                 {feature.icon}
               </div>
              <CardTitle className="text-2xl font-semibold mb-1">{feature.title}</CardTitle>
              <p className="text-lg text-secondary font-medium mb-2">{feature.titleHi}</p>
              <CardDescription className="mt-2 text-muted-foreground text-base leading-relaxed">{feature.description} <span className="block text-sm mt-1">{feature.descriptionHi}</span></CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}

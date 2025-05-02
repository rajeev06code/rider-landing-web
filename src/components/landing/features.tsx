import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Bike, IndianRupee, ShieldCheck, Map } from "lucide-react";
import AutoIcon from "@/components/icons/auto-icon";

const features = [
  {
    icon: <Bike className="h-8 w-8 text-primary" />,
    title: "Bike & Auto Rides",
    titleHi: "बाइक और ऑटो राइड्स",
    description: "Choose from bikes for quick commutes or autos for comfortable rides.",
    descriptionHi: "त्वरित आवागमन के लिए बाइक या आरामदायक सवारी के लिए ऑटो चुनें।",
  },
  {
    icon: <IndianRupee className="h-8 w-8 text-primary" />,
    title: "Affordable Fares",
    titleHi: "किफायती किराया",
    description: "Transparent and budget-friendly pricing for every ride.",
    descriptionHi: "हर सवारी के लिए पारदर्शी और बजट-अनुकूल मूल्य निर्धारण।",
  },
   {
    icon: <Map className="h-8 w-8 text-primary" />,
    title: "Wide Availability",
    titleHi: "व्यापक उपलब्धता",
    description: "Find rides easily, anytime and anywhere across major Indian cities.",
    descriptionHi: "प्रमुख भारतीय शहरों में कहीं भी, कभी भी आसानी से राइड पाएं।",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "Safety First",
    titleHi: "सुरक्षा पहले",
    description: "Verified drivers and safety features ensure a secure journey.",
    descriptionHi: "सत्यापित ड्राइवर और सुरक्षा सुविधाएँ एक सुरक्षित यात्रा सुनिश्चित करती हैं।",
  },
];

export default function Features() {
  return (
    <section id="features" className="container py-16 md:py-24 bg-muted/20">
      <div className="text-center mb-12 motion-safe:animate-fade-slide-up">
        <h2 className="text-3xl md:text-4xl font-bold">Why Choose Riderly?</h2>
        <p className="text-lg text-muted-foreground mt-2">क्यों चुनें चलो इंडिया?</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <Card
             key={index}
             className="text-center shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform motion-safe:hover:-translate-y-2 motion-safe:animate-fade-slide-up group bg-background" // Added group
             style={{ animationDelay: `${index * 120}ms`, animationFillMode: 'backwards' }} // Adjusted delay and fill mode
          >
            <CardHeader className="items-center p-6">
               <div className="p-4 rounded-full bg-primary/10 mb-4 transform transition-transform duration-300 ease-in-out group-hover:scale-110"> {/* Use group-hover */}
                 {feature.icon}
               </div>
              <CardTitle className="text-xl font-semibold">{feature.title} <span className="block text-lg text-secondary font-medium">{feature.titleHi}</span></CardTitle>
              <CardDescription className="mt-2 text-muted-foreground">{feature.description} <span className="block text-sm">{feature.descriptionHi}</span></CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}

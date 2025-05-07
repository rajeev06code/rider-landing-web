"use client";

import * as React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card"; // Added CardFooter
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Autoplay from "embla-carousel-autoplay";
import { Star } from "lucide-react"; // For ratings

const testimonials = [
  {
    name: "Priya S.",
    initials: "PS",
    location: "Delhi",
    rating: 5,
    quote: "ZiplyRide is a lifesaver! Super fast bikes, always available, and the app is so easy to use. My daily commute is sorted!",
    quoteHi: "राइडरली जीवनरक्षक है! सुपर फास्ट बाइक, हमेशा उपलब्ध, और ऐप का उपयोग करना बहुत आसान है। मेरा दैनिक आवागमन अब व्यवस्थित है!",
    image: "https://picsum.photos/seed/priyarider/120/120",
    aiHint: "smiling indian woman urban professional",
  },
  {
    name: "Rajesh K.",
    initials: "RK",
    location: "Mumbai",
    rating: 4,
    quote: "The auto rides are very convenient, especially during monsoons. Transparent pricing and friendly drivers. Good job, ZiplyRide!",
    quoteHi: "ऑटो की सवारी बहुत सुविधाजनक है, खासकर मानसून के दौरान। पारदर्शी मूल्य निर्धारण और मिलनसार ड्राइवर। बहुत बढ़िया, राइडरली!",
    image: "https://picsum.photos/seed/rajeshauto/120/120",
    aiHint: "indian man casual city ride",
  },
   {
    name: "Anjali M.",
    initials: "AM",
    location: "Bangalore",
    rating: 5,
    quote: "I feel very safe using ZiplyRide, even late at night. The safety features in the app are reassuring. Highly recommend!",
    quoteHi: "मुझे राइडरली का उपयोग करके बहुत सुरक्षित महसूस होता है, देर रात में भी। ऐप में सुरक्षा सुविधाएँ आश्वस्त करने वाली हैं। अत्यधिक अनुशंसित!",
     image: "https://picsum.photos/seed/anjalisafe/120/120",
    aiHint: "happy indian female student tech city",
  },
   {
    name: "Vikram P.",
    initials: "VP",
    location: "Ahmedabad",
    rating: 5,
    quote: "Affordable, reliable, and always on time! Booking is a breeze with ZiplyRide. Kya mast service hai! Keep it up!",
    quoteHi: "किफायती, भरोसेमंद और हमेशा समय पर! राइडरली के साथ बुकिंग बहुत आसान है। क्या मस्त सर्विस है! इसे जारी रखो!",
    image: "https://picsum.photos/seed/vikramfast/120/120",
    aiHint: "indian businessman smiling professional modern",
  },
   {
    name: "Sunita D.",
    initials: "SD",
    location: "Jaipur",
    rating: 4,
    quote: "Finally, a good ride-hailing app that works well in smaller cities too! ZiplyRide has made my travel so much easier.",
    quoteHi: "अंत में, एक अच्छा राइड-हेलिंग ऐप जो छोटे शहरों में भी अच्छी तरह से काम करता है! राइडरली ने मेरी यात्रा को बहुत आसान बना दिया है।",
    image: "https://picsum.photos/seed/sunitacity/120/120",
    aiHint: "indian woman traditional happy travel",
   }
];

// Helper to render stars
const renderStars = (rating: number) => {
  return Array(5).fill(null).map((_, i) => (
    <Star key={i} className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
  ));
};


export default function Testimonials() {
  const plugin = React.useRef(
    Autoplay({ delay: 4500, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  return (
    <section id="testimonials" className="container py-16 md:py-24 bg-background">
      <div className="text-center mb-16 motion-safe:animate-fade-slide-up">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Our Riders Love Us!</h2>
        <p className="text-xl text-muted-foreground mt-3">हमारे यात्री हमें पसंद करते हैं!</p>
      </div>
      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-6xl mx-auto" // Wider carousel
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-4">
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="p-1 h-full">
                 <Card className="h-full flex flex-col justify-between shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out bg-card border border-primary/10 hover:border-primary/30 rounded-xl transform motion-safe:hover:-translate-y-1">
                   <CardContent className="flex flex-col items-start text-left p-6 space-y-4 flex-grow">
                     <div className="flex items-center space-x-4 w-full mb-2">
                       <Avatar className="h-16 w-16 border-2 border-primary/50 shadow-md">
                        <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.aiHint} />
                        <AvatarFallback className="bg-primary/20 text-primary font-semibold">{testimonial.initials}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-lg text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      </div>
                     </div>
                     <div className="flex mb-2">
                        {renderStars(testimonial.rating)}
                     </div>
                    <blockquote className="text-foreground italic relative text-base leading-relaxed border-l-4 border-primary/50 pl-4 py-2">
                      <p>{testimonial.quote}</p>
                    </blockquote>
                     <blockquote className="text-secondary italic relative mt-2 text-base leading-relaxed border-l-4 border-secondary/50 pl-4 py-2">
                      <p>{testimonial.quoteHi}</p>
                     </blockquote>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-[-20px] md:left-[-50px] top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background border-2 border-primary/30 text-primary hover:text-primary/80 shadow-md rounded-full h-12 w-12 transition-all hover:scale-110" />
        <CarouselNext className="absolute right-[-20px] md:right-[-50px] top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background border-2 border-primary/30 text-primary hover:text-primary/80 shadow-md rounded-full h-12 w-12 transition-all hover:scale-110" />
      </Carousel>
    </section>
  );
}

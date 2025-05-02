"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    name: "Priya Sharma",
    initials: "PS",
    location: "Delhi",
    quote: "Chalo India is my go-to app for daily commute. Super fast bikes and always available!",
    quoteHi: "चलो इंडिया मेरे दैनिक आवागमन के लिए मेरा पसंदीदा ऐप है। सुपर फास्ट बाइक और हमेशा उपलब्ध!",
    image: "https://picsum.photos/100/100?random=1",
    aiHint: "Indian woman smiling professional",
  },
  {
    name: "Rajesh Kumar",
    initials: "RK",
    location: "Mumbai",
    quote: "The auto rides are very convenient, especially during monsoon. Fair prices too.",
    quoteHi: "ऑटो की सवारी बहुत सुविधाजनक है, खासकर मानसून के दौरान। उचित दाम भी।",
    image: "https://picsum.photos/100/100?random=2",
    aiHint: "Indian man casual tech",
  },
   {
    name: "Anjali Singh",
    initials: "AS",
    location: "Bangalore",
    quote: "I feel safe using Chalo India. The drivers are professional and the app has great safety features.",
    quoteHi: "मुझे चलो इंडिया का उपयोग करके सुरक्षित महसूस होता है। ड्राइवर पेशेवर हैं और ऐप में बेहतरीन सुरक्षा सुविधाएँ हैं।",
     image: "https://picsum.photos/100/100?random=3",
    aiHint: "Indian student female happy",
  },
   {
    name: "Vikram Patel",
    initials: "VP",
    location: "Ahmedabad",
    quote: "Affordable and reliable. Booking is so easy, saves a lot of time. Kya mast service hai!",
    quoteHi: "किफायती और भरोसेमंद। बुकिंग बहुत आसान है, बहुत समय बचता है। क्या मस्त सर्विस है!",
    image: "https://picsum.photos/100/100?random=4",
    aiHint: "Indian businessman smiling glasses",
  },
   {
    name: "Sunita Devi",
    initials: "SD",
    location: "Kolkata",
    quote: "Finally, a good ride-hailing app for smaller cities too! Highly recommend.",
    quoteHi: "अंत में, छोटे शहरों के लिए भी एक अच्छा राइड-हेलिंग ऐप! अत्यधिक अनुशंसित।",
    image: "https://picsum.photos/100/100?random=5",
    aiHint: "Indian woman middle-aged saree",
   }
];

export default function Testimonials() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true }) // Slightly faster autoplay
  );

  return (
    <section id="testimonials" className="container py-16 md:py-24 bg-secondary/5">
      <div className="text-center mb-12 motion-safe:animate-fade-slide-up">
        <h2 className="text-3xl md:text-4xl font-bold">Customer Kya Kehte Hain?</h2>
        <p className="text-lg text-muted-foreground mt-2">What Our Customers Say</p>
      </div>
      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-5xl mx-auto" // Slightly wider carousel
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-4"> {/* Adjust margin for spacing */}
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3"> {/* Adjust padding */}
              <div className="p-1 h-full">
                 <Card className="h-full flex flex-col justify-between shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out bg-card border-border/50 transform motion-safe:hover:-translate-y-1"> {/* Added hover animation */}
                   <CardContent className="flex flex-col items-center text-center p-6 space-y-4 flex-grow"> {/* Added flex-grow */}
                     <Avatar className="h-16 w-16 mb-4 border-2 border-primary/50 shadow-sm">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.aiHint} />
                      <AvatarFallback>{testimonial.initials}</AvatarFallback>
                    </Avatar>
                    <blockquote className="text-foreground italic relative text-base leading-relaxed"> {/* Adjusted text size/leading */}
                      <span className="absolute -top-2 -left-3 text-4xl text-primary/30 opacity-50 font-serif">“</span>
                      {testimonial.quote}
                       <span className="absolute -bottom-2 -right-3 text-4xl text-primary/30 opacity-50 font-serif">”</span>
                    </blockquote>
                     <blockquote className="text-secondary italic relative mt-2 text-base leading-relaxed"> {/* Adjusted text size/leading */}
                       <span className="absolute -top-2 -left-3 text-4xl text-secondary/30 opacity-50 font-serif">“</span>
                      {testimonial.quoteHi}
                      <span className="absolute -bottom-2 -right-3 text-4xl text-secondary/30 opacity-50 font-serif">”</span>
                     </blockquote>
                  </CardContent>
                   <div className="pt-4 pb-6 border-t border-border/30 w-full mt-auto text-center"> {/* Use mt-auto */}
                     <p className="font-semibold mt-4">{testimonial.name}</p>
                     <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                   </div>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-[-20px] md:left-[-50px] top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background border shadow-md" />
        <CarouselNext className="absolute right-[-20px] md:right-[-50px] top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background border shadow-md" />
      </Carousel>
    </section>
  );
}

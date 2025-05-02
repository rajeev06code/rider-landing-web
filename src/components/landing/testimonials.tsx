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
    aiHint: "Indian woman smiling",
  },
  {
    name: "Rajesh Kumar",
    initials: "RK",
    location: "Mumbai",
    quote: "The auto rides are very convenient, especially during monsoon. Fair prices too.",
    quoteHi: "ऑटो की सवारी बहुत सुविधाजनक है, खासकर मानसून के दौरान। उचित दाम भी।",
    image: "https://picsum.photos/100/100?random=2",
    aiHint: "Indian man professional",
  },
   {
    name: "Anjali Singh",
    initials: "AS",
    location: "Bangalore",
    quote: "I feel safe using Chalo India. The drivers are professional and the app has great safety features.",
    quoteHi: "मुझे चलो इंडिया का उपयोग करके सुरक्षित महसूस होता है। ड्राइवर पेशेवर हैं और ऐप में बेहतरीन सुरक्षा सुविधाएँ हैं।",
     image: "https://picsum.photos/100/100?random=3",
    aiHint: "Indian student happy",
  },
   {
    name: "Vikram Patel",
    initials: "VP",
    location: "Ahmedabad",
    quote: "Affordable and reliable. Kya mast service hai!",
    quoteHi: "किफायती और भरोसेमंद। क्या मस्त सर्विस है!",
    image: "https://picsum.photos/100/100?random=4",
    aiHint: "Indian businessman casual",
  },
];

export default function Testimonials() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section id="testimonials" className="container py-16 md:py-24 bg-secondary/5">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Customer Kya Kehte Hain?</h2>
        <p className="text-lg text-muted-foreground mt-2">What Our Customers Say</p>
      </div>
      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-4xl mx-auto"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1 h-full">
                <Card className="h-full flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-300">
                   <CardContent className="flex flex-col items-center text-center p-6 space-y-4">
                     <Avatar className="h-16 w-16 mb-4">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.aiHint} />
                      <AvatarFallback>{testimonial.initials}</AvatarFallback>
                    </Avatar>
                    <p className="text-foreground italic">"{testimonial.quote}"</p>
                     <p className="text-secondary italic">"{testimonial.quoteHi}"</p>
                     <div className="pt-2">
                       <p className="font-semibold">{testimonial.name}</p>
                       <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                     </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 hidden md:inline-flex" />
        <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 hidden md:inline-flex" />
      </Carousel>
    </section>
  );
}
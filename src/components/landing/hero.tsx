import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, MoveRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="container grid lg:grid-cols-2 gap-12 items-center py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Text Content */}
      <div className="space-y-8 motion-safe:animate-fade-in motion-safe:slide-in-from-left-16 motion-safe:duration-700 motion-safe:ease-out">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-tight">
          Shehar Mein Kahin Bhi, Kabhi Bhi. <br />
          <span className="text-primary">Chalo India</span> Ke Saath!
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
          Quick bikes for solo trips or comfy autos for group rides – your perfect journey is just a tap away. Experience hassle-free booking and reliable service across India.
          <br />
          <span className="font-semibold text-secondary mt-2 block">शहर भर में आपकी भरोसेमंद सवारी, मिनटों में।</span>
        </p>
         <div className="flex flex-col sm:flex-row gap-4 pt-6">
          <Button size="lg" variant="default" asChild className="shadow-lg transform transition-transform duration-300 ease-out motion-safe:hover:scale-105 motion-safe:hover:shadow-primary/30">
            <a href="#download">
              Get the App <ArrowRight className="ml-2 h-5 w-5" />
             </a>
          </Button>
           <Button size="lg" variant="outline" asChild className="border-primary text-primary hover:bg-primary/10 hover:text-primary transform transition-transform duration-300 ease-out motion-safe:hover:scale-105 motion-safe:hover:shadow-primary/20">
            <a href="#features">
              Learn More <MoveRight className="ml-2 h-5 w-5" />
             </a>
          </Button>
        </div>
      </div>

       {/* Illustration */}
      <div className="flex justify-center lg:justify-end motion-safe:animate-fade-in motion-safe:slide-in-from-right-16 motion-safe:duration-700 motion-safe:ease-out relative">
         {/* Background shape - more subtle */}
         <div className="absolute inset-0 -z-10 transform -rotate-12 scale-125 bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent rounded-full blur-3xl opacity-40"></div>
        <Image
          src="https://img.freepik.com/free-vector/romantic-getaway-illustration-concept_114360-765.jpg?semt=ais_hybrid&w=740" // Updated image source
          alt="Illustration of a couple on a romantic getaway with a scooter" // Updated alt text
          data-ai-hint="romantic getaway couple scooter illustration travel love" // Updated AI hint
          width={600}
          height={500}
          className="rounded-xl shadow-2xl object-cover aspect-[6/5] transform transition-transform duration-500 ease-in-out motion-safe:hover:scale-105 motion-safe:hover:shadow-primary/20"
          priority // Load the hero image faster
        />
      </div>
    </section>
  );
}

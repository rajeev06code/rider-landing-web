import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, MoveRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="container grid lg:grid-cols-2 gap-12 items-center py-20 md:py-20 lg:py-20 overflow-hidden">
      {/* Text Content */}
      <div className="space-y-8 motion-safe:animate-fade-in motion-safe:slide-in-from-left-16 motion-safe:duration-700 motion-safe:ease-out">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-tight">
          Shehar Mein Kahin Bhi, Kabhi Bhi. <br />
          <span className="text-primary">Riderly</span> Ke Saath!
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
      <div className="hidden md:block flex justify-center lg:justify-end motion-safe:animate-fade-in motion-safe:slide-in-from-right-16 motion-safe:duration-700 motion-safe:ease-out relative">
        {/* Background shape - more subtle */}
        <div className="absolute inset-0 -z-10 transform -rotate-12 scale-125 bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent rounded-full blur-3xl opacity-40"></div>
        <Image
          src="https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-2fd8-61f7-b8fc-627ff06904f0/raw?se=2025-05-02T11%3A21%3A48Z&sp=r&sv=2024-08-04&sr=b&scid=a757a5ee-50e1-5841-9f89-55f541822ced&skoid=7c382de0-129f-486b-9922-6e4a89c6eb7d&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-02T08%3A56%3A27Z&ske=2025-05-03T08%3A56%3A27Z&sks=b&skv=2024-08-04&sig=t5Y2AXB46OVkDF9qT/fDMcnA4A5ah8UxPLAnBB8AV1g%3D" // Updated image source
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

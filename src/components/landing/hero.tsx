import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, AppWindow } from "lucide-react"; // Added AppWindow for variety

export default function Hero() {
  return (
    <section className="container grid lg:grid-cols-2 gap-16 items-center py-20 md:py-28 lg:py-36 overflow-hidden">
      {/* Text Content */}
      <div className="space-y-8 motion-safe:animate-fade-in motion-safe:slide-in-from-left-12 motion-safe:duration-700 motion-safe:ease-out">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-tight">
          Shehar Mein Kahin Bhi, Kabhi Bhi. <br />
          <span className="text-primary">Chalo India</span> Ke Saath!
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
          Quick bikes for solo trips or comfy autos for group rides – your perfect journey is just a tap away. Experience hassle-free booking and reliable service across India.
          <br />
          <span className="font-semibold text-secondary mt-2 block">शहर भर में आपकी भरोसेमंद सवारी, मिनटों में।</span>
        </p>
         <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Button size="lg" variant="default" asChild className="motion-safe:hover:scale-105 transition-transform duration-200 shadow-lg">
            <a href="#download">
              Get the App <ArrowRight className="ml-2 h-5 w-5" />
             </a>
          </Button>
           <Button size="lg" variant="outline" className="motion-safe:hover:scale-105 transition-transform duration-200 border-primary text-primary hover:bg-primary/10 hover:text-primary">
            Learn More <AppWindow className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

       {/* Illustration */}
      <div className="flex justify-center lg:justify-end motion-safe:animate-fade-in motion-safe:slide-in-from-right-12 motion-safe:duration-700 motion-safe:ease-out relative">
         {/* Background shape */}
         <div className="absolute inset-0 -z-10 transform -rotate-6 scale-110 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl opacity-50"></div>
        <Image
          src="https://picsum.photos/id/101/600/500" // New placeholder
          alt="Modern illustration showing a person booking a ride on the Chalo India app with city background"
          data-ai-hint="ride sharing app booking illustration modern city india phone" // Updated hint
          width={600}
          height={500} // Adjusted height slightly
          className="rounded-xl shadow-2xl object-cover aspect-[6/5] transform transition-transform duration-500 motion-safe:hover:scale-105"
          priority // Load the hero image faster
        />
      </div>
    </section>
  );
}

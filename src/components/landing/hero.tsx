
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight, Bike, Navigation } from "lucide-react"; // Added Bike, Navigation
import AutoIcon from "@/components/icons/auto-icon"; // Assuming this icon exists
import heroImage from "@/assets/images/hero.png"

export default function Hero() {
  return (
    <section className="container grid lg:grid-cols-2 gap-12 items-center py-20 md:py-20 lg:py-20 overflow-hidden min-h-[calc(100vh-8rem)] md:min-h-[calc(100vh-9rem)]">
      {/* Text Content */}
      <div className="space-y-8 motion-safe:animate-fade-in motion-safe:slide-in-from-left-16 motion-safe:duration-700 motion-safe:ease-out">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-tight">
          Apki City, Apki Ride. <br />
          <span className="text-primary animate-pulse">ZiplyRide</span> Hai Na!
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
          Need a quick bike for solo trips or a comfy auto for group travel? ZiplyRide connects you with safe, affordable rides across India in minutes. Your perfect journey is just a tap away!
          <br />
          <span className="font-semibold text-secondary mt-3 block"> शहर भर में आपकी भरोसेमंद सवारी, मिनटों में। बाइक हो या ऑटो, ZiplyRide है सब का साथी!
          </span>
        </p>
        <div className="flex flex-col sm:flex-row items-start gap-4 pt-6">
          <Button 
            size="lg" 
            variant="default" 
            asChild 
            className="shadow-lg transform transition-transform duration-300 ease-out motion-safe:hover:scale-105 motion-safe:hover:shadow-primary/40 border border-transparent hover:border-primary/50 px-8 py-3 text-lg"
          >
            <a href="#download">
              Download App <Navigation className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            asChild 
            className="border-primary text-primary hover:bg-primary/10 hover:text-primary transform transition-transform duration-300 ease-out motion-safe:hover:scale-105 motion-safe:hover:shadow-primary/20 px-8 py-3 text-lg"
          >
            <a href="#how-it-works">
              Book a Ride <Bike className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
         <div className="flex items-center gap-4 pt-6 text-sm text-muted-foreground">
            <div className="flex items-center">
                <Bike className="h-5 w-5 mr-2 text-primary/80"/> Bike Rides
            </div>
            <div className="flex items-center">
                <AutoIcon className="h-5 w-5 mr-2 text-primary/80"/> Auto Rides
            </div>
            <span>| Trusted by Lakhs</span>
        </div>
      </div>

      {/* Illustration */}
      <div className="hidden md:block flex justify-center lg:justify-end motion-safe:animate-fade-in motion-safe:slide-in-from-right-16 motion-safe:duration-700 motion-safe:ease-out relative">
        {/* Background shape - more subtle */}
        <div className="absolute inset-0 -z-10 transform -rotate-12 scale-125 bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent rounded-full blur-3xl opacity-40"></div>
        <Image
          src={heroImage} // Updated image source
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

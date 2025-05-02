import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="container grid lg:grid-cols-2 gap-12 items-center py-16 md:py-24 lg:py-32">
      <div className="space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          Bike ya Auto? <span className="text-primary">Chalo India</span> ke saath!
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          Your reliable ride across India, just a tap away. Safar karo bina tension. Book bikes and autos instantly.
          <br />
          <span className="font-semibold text-secondary">भारत भर में आपकी भरोसेमंद सवारी, बस एक टैप दूर।</span>
        </p>
         <div className="flex gap-4 pt-4">
           {/* Removed Input fields for pickup/drop */}
          {/* Removed "Find Ride" button */}
          <Button size="lg" variant="default" asChild>
            {/* Changed variant to default and linked to download section */}
            <a href="#download">
              Download App <ArrowRight className="ml-2 h-5 w-5" />
             </a>
          </Button>
          {/* Optional: Keep a secondary action or remove */}
        </div>
      </div>
      <div className="flex justify-center lg:justify-end">
        <Image
          src="https://picsum.photos/600/400"
          alt="Hero Image - Bike and Auto in India"
          data-ai-hint="Indian street bike auto rickshaw"
          width={600}
          height={400}
          className="rounded-lg shadow-lg object-cover aspect-[3/2]"
          priority // Load the hero image faster
        />
      </div>
    </section>
  );
}

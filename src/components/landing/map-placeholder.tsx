import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin } from "lucide-react";

export default function MapPlaceholder() {
  return (
    <section id="map" className="container py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-background to-secondary/10">
      <div className="absolute inset-0 opacity-10 z-0">
           {/* Decorative background pattern or image could go here */}
      </div>
      <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left side: Map Visual Placeholder */}
        <div className="rounded-lg overflow-hidden shadow-xl border border-border/20 aspect-video">
           <Image
            src="https://picsum.photos/800/600"
            alt="Map showing ride options"
            data-ai-hint="India map illustration routes"
            width={800}
            height={600}
            className="w-full h-full object-cover"
            />
            {/* Interactive elements overlay (conceptual) */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 p-4 text-center pointer-events-none">
                 <p className="text-background text-lg font-semibold">Interactive Map Coming Soon!</p>
            </div>
        </div>

        {/* Right side: Booking Form Placeholder */}
        <div className="space-y-6 bg-card p-8 rounded-lg shadow-lg border border-border/50">
          <h2 className="text-2xl md:text-3xl font-bold">Book Your Ride</h2>
           <p className="text-muted-foreground">Apni manzil chunein aur chalein!</p>
          <div className="space-y-4">
             <div className="relative">
               <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
               <Input type="text" placeholder="Enter pickup location" className="pl-10 pr-4 py-3 text-base" />
             </div>
             <div className="relative">
               <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
               <Input type="text" placeholder="Enter drop location" className="pl-10 pr-4 py-3 text-base" />
            </div>
          </div>
          <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-base">
            Search Rides
          </Button>
           <p className="text-xs text-center text-muted-foreground">Detailed map integration planned for future release.</p>
        </div>
      </div>
    </section>
  );
}
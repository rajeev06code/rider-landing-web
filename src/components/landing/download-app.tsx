import Image from "next/image";
import { Button } from "@/components/ui/button";
import GooglePlayIcon from "@/components/icons/google-play-icon";
import AppleStoreIcon from "@/components/icons/apple-store-icon";

export default function DownloadApp() {
  return (
    <section id="download" className="container py-16 md:py-24 bg-gradient-to-br from-primary to-orange-500 text-primary-foreground rounded-lg shadow-xl my-16 md:my-24 animate-fade-slide-up">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Get Started Today!</h2>
          <h3 className="text-2xl md:text-3xl font-semibold">आज ही शुरू करें!</h3>
          <p className="text-lg md:text-xl opacity-90">
            Download the Chalo India Rides app and experience seamless travel across your city. Ab safar hoga aasaan!
             <br />
             <span className="font-medium">चलो इंडिया राइड्स ऐप डाउनलोड करें और अपने शहर में सहज यात्रा का अनुभव करें।</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              variant="secondary"
              size="lg"
              className="bg-background text-foreground hover:bg-background/90 justify-start px-4 py-3 h-auto text-left transform transition-transform duration-200 motion-safe:hover:scale-105 shadow-md"
              asChild
            >
              <a href="#" target="_blank" rel="noopener noreferrer">
                <GooglePlayIcon className="h-8 w-8 mr-3" />
                 <div>
                   <p className="text-xs">GET IT ON</p>
                   <p className="text-xl font-semibold">Google Play</p>
                 </div>
              </a>
            </Button>
             <Button
              variant="secondary"
              size="lg"
              className="bg-background text-foreground hover:bg-background/90 justify-start px-4 py-3 h-auto text-left transform transition-transform duration-200 motion-safe:hover:scale-105 shadow-md"
              asChild
            >
              <a href="#" target="_blank" rel="noopener noreferrer">
                <AppleStoreIcon className="h-8 w-8 mr-3" />
                <div>
                   <p className="text-xs">Download on the</p>
                   <p className="text-xl font-semibold">App Store</p>
                 </div>
              </a>
            </Button>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          {/* Use a more illustrative image */}
          <Image
            src="https://picsum.photos/500/500" // Placeholder - replace with actual illustration if available
            alt="Illustration of people using Chalo India app on phones"
            data-ai-hint="mobile app download illustration india happy users"
            width={350} // Adjusted size
            height={350} // Adjusted size
            className="rounded-lg object-contain aspect-square transform motion-safe:hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
}

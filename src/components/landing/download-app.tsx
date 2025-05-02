import Image from "next/image";
import { Button } from "@/components/ui/button";
import GooglePlayIcon from "@/components/icons/google-play-icon";
import AppleStoreIcon from "@/components/icons/apple-store-icon";

export default function DownloadApp() {
  return (
    <section id="download" className="relative overflow-hidden my-16 md:my-24">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary via-orange-500 to-secondary opacity-80 blur-xl"></div>

      <div className="container py-16 md:py-24 text-primary-foreground relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 motion-safe:animate-fade-slide-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Get Started Today!</h2>
            <h3 className="text-2xl md:text-3xl font-semibold opacity-90">आज ही शुरू करें!</h3>
            <p className="text-lg md:text-xl opacity-90 max-w-lg">
              Download the Chalo India Rides app and experience seamless travel across your city. Ab safar hoga aasaan!
              <br />
              <span className="font-medium block mt-1">चलो इंडिया राइड्स ऐप डाउनलोड करें और अपने शहर में सहज यात्रा का अनुभव करें।</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                variant="secondary"
                size="lg"
                className="bg-background text-foreground hover:bg-background/90 justify-start px-5 py-3 h-auto text-left transform transition-all duration-300 ease-out motion-safe:hover:scale-105 motion-safe:hover:shadow-lg shadow-md rounded-lg group"
                asChild
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <GooglePlayIcon className="h-8 w-8 mr-3 text-green-500 transition-transform duration-300 group-hover:scale-110" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">Get it on</p>
                    <p className="text-xl font-semibold">Google Play</p>
                  </div>
                </a>
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="bg-background text-foreground hover:bg-background/90 justify-start px-5 py-3 h-auto text-left transform transition-all duration-300 ease-out motion-safe:hover:scale-105 motion-safe:hover:shadow-lg shadow-md rounded-lg group"
                asChild
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <AppleStoreIcon className="h-8 w-8 mr-3 text-gray-700 dark:text-gray-300 transition-transform duration-300 group-hover:scale-110" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">Download on the</p>
                    <p className="text-xl font-semibold">App Store</p>
                  </div>
                </a>
              </Button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end motion-safe:animate-fade-in motion-safe:delay-200">
            <Image
              src="https://picsum.photos/id/237/500/500" // Different placeholder
              alt="Illustration of people using Chalo India app on phones with map elements"
              data-ai-hint="mobile app download illustration india happy users map phone screen"
              width={400} // Adjusted size
              height={400} // Adjusted size
              className="rounded-lg object-contain aspect-square transform transition-transform duration-500 ease-in-out motion-safe:hover:scale-105 motion-safe:hover:rotate-1 shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

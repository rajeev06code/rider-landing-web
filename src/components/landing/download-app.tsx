
import Image from "next/image";
import { Button } from "@/components/ui/button";
import GooglePlayIcon from "@/components/icons/google-play-icon";
import AppleStoreIcon from "@/components/icons/apple-store-icon";
import driverImage from "@/assets/images/driver.png"

export default function DownloadApp() {
  return (
    <section id="download" className="relative overflow-hidden bg-muted/30">
      <div className="container py-16 md:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Ready to Ride? <span className="block text-primary">Get ZiplyRide Now!</span>
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-secondary opacity-90">
              सफ़र के लिए तैयार? <span className="block">अभी राइडरली पाएं!</span>
            </h3>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0">
              Download the ZiplyRide app for seamless bike and auto rides across your city. Your next journey is just a tap away! Ab safar hoga super aasaan!
              <br />
              <span className="font-medium text-foreground/80 mt-2 block">
                अपने शहर में आसान बाइक और ऑटो राइड्स के लिए राइडरली ऐप डाउनलोड करें। आपकी अगली यात्रा बस एक टैप दूर है! अब सफर होगा सुपर आसान!
              </span>
            </p>    
            <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center lg:justify-start">
              <Button
                variant="default" 
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 justify-start px-6 py-4 h-auto text-left transform transition-all duration-300 ease-out motion-safe:hover:scale-105 rounded-lg group shadow-lg hover:shadow-primary/40"
                asChild
              >
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Get ZiplyRide on Google Play">
                  <GooglePlayIcon className="h-8 w-8 mr-3 text-green-400 transition-transform duration-300 group-hover:scale-110" />
                  <div>
                    <p className="text-xs uppercase tracking-wider opacity-80">Get it on</p>
                    <p className="text-xl font-semibold">Google Play</p>
                  </div>
                </a>
              </Button>
              <Button
                variant="secondary" 
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 justify-start px-6 py-4 h-auto text-left transform transition-all duration-300 ease-out motion-safe:hover:scale-105 rounded-lg group shadow-lg hover:shadow-secondary/40"
                asChild
              >
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Download ZiplyRide on the App Store">
                  <AppleStoreIcon className="h-8 w-8 mr-3 text-foreground/70 transition-transform duration-300 group-hover:scale-110" />
                  <div>
                    <p className="text-xs uppercase tracking-wider opacity-80">Download on the</p>
                    <p className="text-xl font-semibold">App Store</p>
                  </div>
                </a>
              </Button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end motion-safe:animate-fade-in motion-safe:delay-200 ">
            <Image
              src={driverImage} // Seeded placeholder
              alt="Illustration of people using ZiplyRide app on phones with map elements and download icons" // Updated alt text
              data-ai-hint="mobile app download illustration india happy users map phone screen ride sharing" // Updated AI hint
              width={600} // Adjusted size
              height={600} // Adjusted size
              className=" object-contain aspect-square transform transition-transform duration-500 ease-in-out "
            />
          </div>
        </div>
      </div>
       {/* Decorative background elements */}
      <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full opacity-50 blur-3xl -z-10"></div>
      <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-secondary/5 rounded-full opacity-50 blur-3xl -z-10"></div>
    </section>
  );
}

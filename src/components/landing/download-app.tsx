import Image from "next/image";
import { Button } from "@/components/ui/button";
// Using simple SVGs for store badges as lucide-react doesn't have them
import GooglePlayIcon from "@/components/icons/google-play-icon";
import AppleStoreIcon from "@/components/icons/apple-store-icon";


export default function DownloadApp() {
  return (
    <section id="download" className="container py-16 md:py-24 bg-primary text-primary-foreground">
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
              className="bg-background text-foreground hover:bg-background/90 justify-start px-4 py-3 h-auto text-left"
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
              className="bg-background text-foreground hover:bg-background/90 justify-start px-4 py-3 h-auto text-left"
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
          <Image
            src="https://picsum.photos/500/500"
            alt="App Mockup"
            data-ai-hint="smartphone app mockup india"
            width={400}
            height={400}
            className="rounded-lg shadow-lg object-contain aspect-square"
          />
        </div>
      </div>
    </section>
  );
}
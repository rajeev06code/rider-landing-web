
import Link from "next/link";
import AutoIcon from "@/components/icons/auto-icon";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Navigation } from 'lucide-react'; // Added Youtube, Navigation
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "@/assets/images/logo.png"

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t border-border/40 pt-16 pb-8 text-foreground">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand and Description */}
          <div className="lg:col-span-1 space-y-4">
            <Link href="/" className="flex items-center space-x-3 group mb-4">
            <div className="flex justify-center lg:justify-end motion-safe:animate-fade-in motion-safe:delay-200 ">
            <Image
              src={logo} // Seeded placeholder
              alt="Illustration of people using ZiplyRide app on phones with map elements and download icons" // Updated alt text
              data-ai-hint="mobile app download illustration india happy users map phone screen ride sharing" // Updated AI hint
              width={90} // Adjusted size
              height={80} // Adjusted size
              className=" object-contain aspect-square transform transition-transform duration-500 ease-in-out "
            />
          </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your reliable partner for affordable and convenient bike and auto rides across India. Quick, Safe, and Always on Time!
            </p>
             <p className="text-muted-foreground text-sm">
               भारत भर में सस्ती और सुविधाजनक बाइक और ऑटो राइड्स के लिए आपका विश्वसनीय साथी। तेज़, सुरक्षित और हमेशा समय पर!
             </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-primary">Quick Links</h4>
            <nav className="flex flex-col space-y-3">
              <Link href="#features" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">Features (विशेषताएं)</Link>
              <Link href="#how-it-works" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">How It Works (कैसे काम करता है)</Link>
              <Link href="#testimonials" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">Testimonials (ग्राहक प्रतिक्रिया)</Link>
              <Link href="#download" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">Download App (ऐप डाउनलोड करें)</Link>
              <Link href="#driver-signup" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">Become a Driver (ड्राइवर बनें)</Link>
            </nav>
          </div>

          {/* Legal & Support */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-primary">Support & Legal</h4>
            <nav className="flex flex-col space-y-3">
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">Contact Us (संपर्क करें)</Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">Terms & Conditions (नियम एवं शर्तें)</Link>
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">Privacy Policy (गोपनीयता नीति)</Link>
              {/* <Link href="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">FAQ (अक्सर पूछे जाने वाले प्रश्न)</Link> */}
            </nav>
          </div>

          {/* Connect With Us */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-primary">Connect With Us</h4>
            <p className="text-sm text-muted-foreground mb-4">Follow us on social media for updates and offers.</p>
            <div className="flex space-x-3">
              {[
                { icon: Facebook, label: "Facebook", href: "#" },
                { icon: Twitter, label: "Twitter", href: "#" },
                { icon: Instagram, label: "Instagram", href: "#" },
                { icon: Linkedin, label: "LinkedIn", href: "#" },
                { icon: Youtube, label: "YouTube", href: "#" },
              ].map(social => (
                <Button key={social.label} variant="outline" size="icon" className="rounded-full hover:bg-primary/10 hover:border-primary group border-border/60 transition-all duration-300 hover:scale-110" asChild>
                  <a href={social.href} aria-label={social.label} target="_blank" rel="noopener noreferrer">
                    <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
                  </a>
                </Button>
              ))}
            </div>
            <div className="mt-6">
              <h5 className="font-medium text-md mb-2 text-primary/90">Newsletter</h5>
              <p className="text-xs text-muted-foreground mb-2">Subscribe for latest updates (नवीनतम अपडेट के लिए सदस्यता लें).</p>
              <form className="flex gap-2">
                <input type="email" placeholder="Enter your email" className="flex-grow p-2 rounded-md border border-input bg-background text-sm focus:ring-primary focus:border-primary" />
                <Button type="submit" variant="default" size="sm" className="transform transition-transform duration-200 motion-safe:hover:scale-105">
                  <Navigation className="h-4 w-4 mr-1" /> Go
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border/40 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} ZiplyRide. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/80 mt-1">
            Proudly Made in India for India. ❤️ Designed & Developed with Passion.
          </p>
        </div>
      </div>
    </footer>
  );
}

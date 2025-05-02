
import Link from "next/link";
import AutoIcon from "@/components/icons/auto-icon";
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/40 border-t border-border/40 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand and Description */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center space-x-2 group mb-2">
              <AutoIcon className="h-8 w-8 text-primary transition-transform duration-300 group-hover:rotate-[15deg]" />
              <span className="text-xl font-bold transition-colors duration-300 group-hover:text-primary">Riderly Rides</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your reliable partner for affordable and convenient bike and auto rides across India. Safar Karo, Befikar Raho!
            </p>
             <p className="text-muted-foreground text-sm">
               भारत भर में सस्ती और सुविधाजनक बाइक और ऑटो राइड के लिए आपका विश्वसनीय साथी।
             </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="#features" className="text-sm text-muted-foreground hover:text-primary transition-colors">Features</Link>
              <Link href="#how-it-works" className="text-sm text-muted-foreground hover:text-primary transition-colors">How It Works</Link>
              <Link href="#testimonials" className="text-sm text-muted-foreground hover:text-primary transition-colors">Testimonials</Link>
              <Link href="#download" className="text-sm text-muted-foreground hover:text-primary transition-colors">Download App</Link>
              <Link href="#driver-signup" className="text-sm text-muted-foreground hover:text-primary transition-colors">Become a Driver</Link>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Legal</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms & Conditions</Link>
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
               {/* <Link href="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">FAQ</Link> */}
            </nav>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Connect</h4>
             <nav className="flex flex-col space-y-2 mb-4">
               <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact Us</Link>
             </nav>
            <div className="flex space-x-3">
              <Button variant="outline" size="icon" className="rounded-full hover:bg-primary/10 hover:border-primary group" asChild>
                 <a href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full hover:bg-primary/10 hover:border-primary group" asChild>
                 <a href="#" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full hover:bg-primary/10 hover:border-primary group" asChild>
                 <a href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                </a>
              </Button>
               <Button variant="outline" size="icon" className="rounded-full hover:bg-primary/10 hover:border-primary group" asChild>
                 <a href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border/40 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Riderly Rides. All rights reserved. Crafted with ❤️ in India.
          </p>
        </div>
      </div>
    </footer>
  );
}

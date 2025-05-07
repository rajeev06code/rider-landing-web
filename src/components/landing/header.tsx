"use client"
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import AutoIcon from '@/components/icons/auto-icon';
import { DriverSignupModal } from './driver-signup-modal';
import { useState, useEffect } from 'react';
import { Menu, X, LogIn, UserPlus } from 'lucide-react'; // Added LogIn, UserPlus
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import logo from "@/assets/images/logo.png"
import Image from 'next/image';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const handleMobileMenuToggle = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const handleMobileMenuClose = () => setIsMobileMenuOpen(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return ( 
    <header className={cn(
        "sticky top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-background/80 transition-all duration-300 ease-in-out",
        isScrolled ? "h-20 border-border/60 shadow-md" : "h-24 border-transparent"
    )}>
      <div className="container flex h-full max-w-screen-2xl items-center justify-between">        
        <Link href="/" className="flex items-center space-x-2 group">
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
            {/* <AutoIcon className="h-10 w-10 text-primary transition-transform duration-300 group-hover:rotate-[15deg] group-hover:scale-110" />
            <span className="text-3xl font-bold tracking-tight transition-colors duration-300 group-hover:text-primary">
                ZiplyRide
            </span> */}
        </Link>
          
        <nav className="hidden gap-8 text-lg md:flex items-center">            
            <Link href="#features" className="text-foreground/80 font-semibold transition-colors hover:text-primary">
              Features
            </Link>
            <Link href="#how-it-works" className="text-foreground/80 font-semibold transition-colors hover:text-primary">
              How it Works
            </Link>
             <Link href="#testimonials" className="text-foreground/80 font-semibold transition-colors hover:text-primary">
              Loved By Riders
            </Link>
            <Link href="#download" className="text-foreground/80 font-semibold transition-colors hover:text-primary">
              Get App
            </Link>
        </nav>

        <div className="flex items-center space-x-3">
          <DriverSignupModal />
        
          
          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden text-foreground hover:text-primary">
                      <Menu className="h-8 w-8" />
                      <span className="sr-only">Toggle Menu</span>
                  </Button>
              </SheetTrigger>
              <SheetContent side="right" className="p-0 w-[300px] bg-background flex flex-col">
                  <SheetHeader className="p-6 border-b border-border/40">
                    <SheetTitle className="flex items-center space-x-2">
                      <AutoIcon className="h-8 w-8 text-primary" />
                      <span className="text-2xl font-bold text-primary">ZiplyRide Rides</span>
                    </SheetTitle>
                    <SheetDescription className="text-sm text-muted-foreground">
                        Your city, your ride. Apka sheher, apki sawari.
                    </SheetDescription>
                  </SheetHeader>

                  <nav className="flex-grow flex flex-col gap-2 p-6 space-y-3">
                      {[
                        { href: "#features", label: "Features (विशेषताएं)" },
                        { href: "#how-it-works", label: "How it Works (कैसे काम करता है)" },
                        { href: "#testimonials", label: "Loved By Riders (ग्राहक प्रशंसा)" },
                        { href: "#download", label: "Get App (ऐप पाएं)" },
                      ].map(item => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="block px-4 py-3 text-lg hover:bg-primary/10 rounded-md transition-colors duration-200 font-medium text-foreground hover:text-primary" 
                            onClick={handleMobileMenuClose}
                        >
                            {item.label}
                        </Link>
                      ))}
                  </nav>
                  <div className="p-6 border-t border-border/40 space-y-4">
                    <Button 
                      onClick={() => { handleMobileMenuClose(); /* TODO: Open Driver Signup Modal */ }} 
                      className="w-full transform transition-transform duration-200 motion-safe:hover:scale-105" 
                      variant="default" 
                      size="lg"
                    >
                      <UserPlus className="mr-2 h-5 w-5" /> Driver Sign Up
                    </Button>
                    <Button 
                      onClick={handleMobileMenuClose} 
                      className="w-full transform transition-transform duration-200 motion-safe:hover:scale-105" 
                      variant="outline" 
                      size="lg"
                    >
                      <LogIn className="mr-2 h-5 w-5" /> Rider Login
                    </Button>
                  </div>
                  <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-4 right-4 text-muted-foreground hover:text-destructive"
                      onClick={handleMobileMenuClose}
                  >
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close Menu</span>
                  </Button>
              </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

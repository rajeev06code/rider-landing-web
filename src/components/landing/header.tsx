"use client"
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import AutoIcon from '@/components/icons/auto-icon';
import { DriverSignupModal } from './driver-signup-modal';
import { useState, useEffect } from 'react';
import { Menu, LogIn, UserPlus } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import logo from "@/assets/images/logo.png"
import Image from 'next/image';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDriverModalOpen, setIsDriverModalOpen] = useState(false);

    const handleMobileMenuToggle = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const handleMobileMenuClose = () => setIsMobileMenuOpen(false);
    const handleDriverSignup = () => {
        setIsMobileMenuOpen(false);
        setIsDriverModalOpen(true);
    };

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
          <div className="flex justify-center h-16 w-16 lg:h-20 lg:w-20 lg:justify-end motion-safe:animate-fade-in motion-safe:delay-200">
            <Image
              src={logo}
              alt="ZiplyRide"
              width={90}
              height={80}
              className="object-contain aspect-square transform transition-transform duration-500 ease-in-out"
            />
          </div>
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
          <DriverSignupModal open={isDriverModalOpen} onOpenChange={setIsDriverModalOpen} />
          
          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <Menu className="h-10 w-10 cursor-pointer md:hidden" onClick={handleMobileMenuToggle} />
              <span className="sr-only">Toggle Menu</span>
              <SheetContent side="right" className="p-0 w-[300px] bg-background flex flex-col">
                  <SheetHeader className="p-6 border-b border-border/40">
                    <div className="flex items-center justify-center">
                      <Image
                        src={logo}
                        alt="ZiplyRide"
                        width={90}
                        height={80}
                        className="object-contain aspect-square h-16 w-16"
                      />
                    </div>
                  </SheetHeader>

                  <nav className="flex-grow flex flex-col gap-2 p-6 space-y-3">
                      {[
                        { href: "#features", label: "Features" },
                        { href: "#how-it-works", label: "How it Works" },
                        { href: "#testimonials", label: "Loved By Riders" },
                        { href: "#download", label: "Get App" },
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
                      onClick={handleDriverSignup}
                      className="w-full transform transition-transform duration-200 motion-safe:hover:scale-105" 
                      variant="default" 
                      size="lg"
                    >
                      <UserPlus className="mr-2 h-5 w-5" /> Driver Sign Up
                    </Button>
                  </div>
              </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

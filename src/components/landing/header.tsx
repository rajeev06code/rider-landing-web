"use client"
import Link from 'next/link';
import { Button, buttonVariants } from '@/components/ui/button';
import AutoIcon from '@/components/icons/auto-icon';
import { DriverSignupModal } from './driver-signup-modal';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleMobileMenuClose = () => {
      setIsMobileMenuOpen(false);
    }



  return ( 
    <>    
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 animate-fade-in motion-safe:duration-500">
      <div className="container flex h-20 max-w-screen-2xl items-center">        
        <div className="mr-4 flex flex-1 items-center"> {/* Adjusted flex for spacing */}
          <Link href="/" className="mr-6 flex items-center space-x-2 group">
                        {/* Slightly larger icon */}
                        <AutoIcon className="h-8 w-8 text-primary transition-transform duration-300 group-hover:rotate-[15deg]" />
                        {/* Larger font size */}
                        <span className="text-xl font-bold transition-colors duration-300 group-hover:text-primary">
                            Riderly
                        </span>
                    </Link>
          <nav className="hidden gap-8 text-base font-medium md:flex ml-auto">            
            {' '}
            {/* Added ml-auto */}
            <Link
              href="#features" 
              className="text-foreground/70 transition-colors hover:text-primary" // Adjusted colors
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-foreground/70 transition-colors hover:text-primary"
            >
              Kaise Chalega?
            </Link>
             <Link
              href="#testimonials"
              className="text-foreground/70 transition-colors hover:text-primary"
            >
              Testimonials
            </Link>
            <Link
              href="#download"
              className="text-foreground/70 transition-colors hover:text-primary"
            >
              Download
            </Link>
          </nav>
        </div>
        <div className="flex items-center justify-end space-x-3 md:ml-6">
          {' '}
          {/* Adjusted spacing */}
          <DriverSignupModal />
          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={handleMobileMenuToggle}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden">
                                {/* Slightly larger icon */}
                                <Menu className="h-8 w-8" />
                                <span className="sr-only">Toggle Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="p-0">
                            <Button
                                variant="outline"
                                size="icon"
                                className="absolute top-4 right-4 md:hidden"
                                onClick={handleMobileMenuClose}
                            >
                                <X className="h-6 w-6" />
                                <span className="sr-only">Close Menu</span>
                            </Button>

                            <nav className="flex flex-col gap-6 pt-12 p-6">
                                <Link href="/" className="flex items-center space-x-2 mb-6 group" onClick={handleMobileMenuClose}>
                                    <AutoIcon className="h-7 w-7 text-primary transition-transform duration-300 group-hover:rotate-[15deg]" />
                                    <span className="text-lg font-bold transition-colors duration-300 group-hover:text-primary">
                                        Riderly Rides
                                    </span>
                                </Link>
                                <Link
                                    href="#features"
                                    className="block px-3 py-2 text-lg hover:bg-accent rounded-md transition-colors duration-200 font-medium" onClick={handleMobileMenuClose}
                                >
                                    Features
                                </Link>
                                <Link
                                    href="#how-it-works"
                                    className="block px-3 py-2 text-lg hover:bg-accent rounded-md transition-colors duration-200 font-medium" onClick={handleMobileMenuClose}
                                >
                                    Kaise Chalega?
                                </Link>
                                <Link
                                    href="#testimonials"
                                    className="block px-3 py-2 text-lg hover:bg-accent rounded-md transition-colors duration-200 font-medium" onClick={handleMobileMenuClose}
                                >
                                    Testimonials
                                </Link>
                                <Link
                                    href="#download"
                                    className="block px-3 py-2 text-lg hover:bg-accent rounded-md transition-colors duration-200 font-medium" onClick={handleMobileMenuClose}
                                >
                                    Download
                                </Link>
                                <DriverSignupModal />
                            </nav>
                        </SheetContent>
                    </Sheet>
      </div>
      </div>
    </header>
    
    </>
  );
}

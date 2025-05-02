import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Navigation } from "lucide-react"; // Changed icon
import AutoIcon from "@/components/icons/auto-icon";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 animate-fade-in motion-safe:duration-500">
      {/* Increased height from h-14 to h-20 */}
      <div className="container flex h-20 max-w-screen-2xl items-center">
        <div className="mr-4 flex flex-1 items-center"> {/* Adjusted flex for spacing */}
          <Link href="/" className="mr-6 flex items-center space-x-2 group">
             {/* Slightly larger icon */}
             <AutoIcon className="h-8 w-8 text-primary transition-transform duration-300 group-hover:rotate-[15deg]" />
             {/* Larger font size */}
            <span className="text-xl font-bold transition-colors duration-300 group-hover:text-primary">Chalo India Rides</span>
          </Link>
           {/* Adjusted navigation styling */}
          <nav className="hidden gap-8 text-base font-medium md:flex ml-auto"> {/* Added ml-auto */}
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
         <div className="flex items-center justify-end space-x-3 md:ml-6"> {/* Adjusted spacing */}
           <Button className="hidden md:inline-flex transform transition-transform duration-200 motion-safe:hover:scale-105" variant="secondary" size="lg" asChild>
            <Link href="#driver-signup">Driver Sign Up</Link>
            </Button>
           {/* Mobile Menu */}
           <Sheet>
            <SheetTrigger asChild>
               <Button variant="ghost" size="icon" className="md:hidden"> {/* Changed variant */}
                <Menu className="h-6 w-6" /> {/* Slightly larger icon */}
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
              <nav className="flex flex-col gap-6 pt-12"> {/* Increased gap and padding */}
                 <Link href="/" className="flex items-center space-x-2 mb-6 group">
                   <AutoIcon className="h-7 w-7 text-primary transition-transform duration-300 group-hover:rotate-[15deg]" />
                  <span className="text-lg font-bold transition-colors duration-300 group-hover:text-primary">Chalo India Rides</span>
                </Link>
                <Link
                  href="#features"
                  className="block px-3 py-2 text-lg hover:bg-accent rounded-md transition-colors duration-200 font-medium" // Adjusted styling
                >
                  Features
                </Link>
                <Link
                  href="#how-it-works"
                  className="block px-3 py-2 text-lg hover:bg-accent rounded-md transition-colors duration-200 font-medium"
                >
                  Kaise Chalega?
                </Link>
                 <Link
                  href="#testimonials"
                  className="block px-3 py-2 text-lg hover:bg-accent rounded-md transition-colors duration-200 font-medium"
                >
                  Testimonials
                </Link>
                <Link
                  href="#download"
                  className="block px-3 py-2 text-lg hover:bg-accent rounded-md transition-colors duration-200 font-medium"
                >
                  Download
                </Link>
                 <Button className="w-full mt-6" variant="secondary" size="lg" asChild>
                   <Link href="#driver-signup">Driver Sign Up</Link>
                 </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

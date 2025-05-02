import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import AutoIcon from "@/components/icons/auto-icon"; // Placeholder for custom icon

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
             <AutoIcon className="h-6 w-6 text-primary" />
            <span className="font-bold">Chalo India Rides</span>
          </Link>
          <nav className="hidden gap-6 text-sm md:flex">
            <Link
              href="#features"
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              Kaise Chalega?
            </Link>
             <Link
              href="#testimonials"
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              Testimonials
            </Link>
            <Link
              href="#download"
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              Download
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
           <Button className="hidden md:inline-flex" variant="secondary">Driver Sign Up</Button>
           {/* Removed "Book Now" button */}
           {/* Mobile Menu */}
           <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 pt-8">
                 <Link href="/" className="flex items-center space-x-2 mb-4">
                   <AutoIcon className="h-6 w-6 text-primary" />
                  <span className="font-bold">Chalo India Rides</span>
                </Link>
                <Link
                  href="#features"
                  className="block px-2 py-1 text-lg hover:bg-accent rounded-md"
                >
                  Features
                </Link>
                <Link
                  href="#how-it-works"
                  className="block px-2 py-1 text-lg hover:bg-accent rounded-md"
                >
                  Kaise Chalega?
                </Link>
                 <Link
                  href="#testimonials"
                  className="block px-2 py-1 text-lg hover:bg-accent rounded-md"
                >
                  Testimonials
                </Link>
                <Link
                  href="#download"
                  className="block px-2 py-1 text-lg hover:bg-accent rounded-md"
                >
                  Download
                </Link>
                 <Button className="w-full mt-4" variant="secondary">Driver Sign Up</Button>
                 {/* Removed "Book Now" button */}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

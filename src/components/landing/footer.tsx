import Link from "next/link";
import AutoIcon from "@/components/icons/auto-icon";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
           <AutoIcon className="h-6 w-6 text-primary hidden md:block" />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {currentYear} Chalo India Rides. All rights reserved. <span className="hidden sm:inline">Built with ❤️ in India.</span>
          </p>
        </div>
        <nav className="flex gap-4 sm:gap-6 items-center">
          <Link
            href="/terms"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Terms
          </Link>
          <Link
            href="/privacy"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Privacy
          </Link>
           <Link
            href="/contact"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
'use client';
import { useState } from 'react';
import { DriverSignupForm } from './driver-signup-form';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { UserPlus } from 'lucide-react';

interface DriverSignupModalProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function DriverSignupModal({ open, onOpenChange }: DriverSignupModalProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const isControlled = open !== undefined;

  const handleOpenChange = (newOpen: boolean) => {
    if (onOpenChange) {
      onOpenChange(newOpen);
    } else {
      setInternalOpen(newOpen);
    }
  };

  const handleFormSuccess = () => {
    handleOpenChange(false); // Close the modal on successful form submission
  };

  return (
    <Dialog open={isControlled ? open : internalOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button
          className="hidden md:inline-flex transform transition-transform duration-200 motion-safe:hover:scale-105 text-base"
          variant="default"
          size="lg"
        >
          <UserPlus className="mr-2 h-5 w-5" /> Driver Sign Up / पार्टनर बनें
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px] bg-card p-0">
        <DialogHeader className="p-6 pb-4">
          <DialogTitle className="text-2xl font-semibold flex items-center">
            <UserPlus className="h-7 w-7 mr-3 text-primary" /> Become a ZiplyRide Driver Partner
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Fill in your details to express interest. We'll guide you through the next steps.
            <br/>अपनी रुचि व्यक्त करने के लिए अपना विवरण भरें। हम आपको अगले चरणों में मार्गदर्शन करेंगे।
          </DialogDescription>
        </DialogHeader>
        <div className="p-6 pt-0 max-h-[70vh] overflow-y-auto">
          <DriverSignupForm onSuccess={handleFormSuccess} />
        </div>
      </DialogContent>
    </Dialog>
  );
}

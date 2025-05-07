'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'; 
import { IndianRupee, UserPlus, CheckCircle, CornerDownRight } from 'lucide-react';
import { DriverSignupForm } from './driver-signup-form'; // Import the new form component

export default function DriverSignupSection() {
  return (
    <section id="driver-signup" className="container py-16 md:py-24 bg-background">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center rounded-lg bg-primary/10 px-4 py-2 text-sm font-semibold text-primary mb-4 shadow-sm">
            <IndianRupee className="h-5 w-5 mr-2" /> ZiplyRide के साथ कमाएं (Earn with ZiplyRide)
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Join Our Driver Team!</h2>
          <h3 className="text-3xl md:text-4xl font-semibold text-secondary">
          हमारे ड्राइवर पार्टनर बनें!
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Become a ZiplyRide driver partner and earn flexibly on your own schedule. Drive your bike or auto, be your own boss, and connect with your city.
             <br />
             <span className="font-medium text-foreground/80 mt-2 block">राइडरली ड्राइवर पार्टनर बनें और अपने समय पर लचीले ढंग से कमाएं। अपनी बाइक या ऑटो चलाएं, खुद के बॉस बनें, और अपने शहर से जुड़ें।</span>
          </p>
          <ul className="space-y-4 text-muted-foreground">
            {[
              { text: "Flexible working hours", textHi: "लचीले काम के घंटे" },
              { text: "Competitive earnings & weekly payments", textHi: "प्रतिस्पर्धी कमाई और साप्ताहिक भुगतान" },
              { text: "Be your own boss", textHi: "खुद के मालिक बनें" },
              { text: "Dedicated driver support", textHi: "समर्पित ड्राइवर सहायता" },
            ].map((item, idx) => (
              <li key={idx} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <span>{item.text} <span className="block text-sm text-primary/80">({item.textHi})</span></span>
              </li>
            ))}
          </ul>
           <Button 
             size="lg" 
             variant="outline" 
             className="mt-6 border-primary text-primary hover:bg-primary/10 hover:text-primary transform transition-transform duration-300 ease-out motion-safe:hover:scale-105" 
             onClick={() => {
                const formNameInput = document.getElementById('name');
                if (formNameInput) {
                    formNameInput.focus();
                }
              }
            }>
            Start Your Application <CornerDownRight className="ml-2 h-5 w-5" />
            आवेदन शुरू करें
          </Button>
        </div>

        <Card className="shadow-xl border-primary/20 transform transition-all duration-500 hover:shadow-primary/20 hover:-translate-y-1">
          <CardHeader className="bg-primary/5 p-6 rounded-t-lg">
            <CardTitle className="text-2xl flex items-center font-semibold">
               <UserPlus className="h-7 w-7 mr-3 text-primary" /> Express Your Interest
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Fill out the form below, and we'll get in touch. <br />नीचे दिया गया फ़ॉर्म भरें, और हम जल्द ही संपर्क करेंगे।
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <DriverSignupForm /> {/* Use the extracted form component here */}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

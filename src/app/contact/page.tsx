
import Header from "@/components/landing/header";
import Footer from "@/components/landing/footer";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <main className="flex-1 container py-16 md:py-24">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Contact Riderly Rides</h1>
         <p className="text-lg text-muted-foreground text-center mb-12">
           Hamse sampark karein - We'd love to hear from you! Reach out for any support or inquiries.
         </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <Card className="text-center shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="items-center">
              <div className="p-3 rounded-full bg-primary/10 mb-4">
                 <Mail className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>Email Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">For support or inquiries:</p>
              <a href="mailto:support@riderlyrides.com" className="text-primary hover:underline">
                support@riderlyrides.com
              </a>
            </CardContent>
          </Card>

           <Card className="text-center shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="items-center">
               <div className="p-3 rounded-full bg-primary/10 mb-4">
                <Phone className="h-8 w-8 text-primary" />
               </div>
              <CardTitle>Call Us</CardTitle>
            </CardHeader>
            <CardContent>
               <p className="text-muted-foreground">Customer support helpline:</p>
              <a href="tel:+91XXXXXXXXXX" className="text-primary hover:underline">
                +91 XXXX XXXXXX
              </a>
               <p className="text-xs text-muted-foreground mt-1">(Available 9 AM - 6 PM IST)</p>
            </CardContent>
          </Card>

           <Card className="text-center shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="items-center">
               <div className="p-3 rounded-full bg-primary/10 mb-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>Our Office</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Riderly Rides HQ</p>
              <p>123 Tech Park, Cyber City</p>
              <p>Gurugram, Haryana, India</p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

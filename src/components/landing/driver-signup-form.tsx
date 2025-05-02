'use client';

import * as React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Bike, IndianRupee, UserPlus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import AutoIcon from '@/components/icons/auto-icon';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  phone: z
    .string()
    .min(10, { message: 'Phone number must be at least 10 digits.' })
    .regex(/^\d+$/, { message: 'Phone number must contain only digits.' }),
  city: z.string().min(2, { message: 'City must be at least 2 characters.' }),
  vehicleType: z.enum(['bike', 'auto'], {
    required_error: 'You need to select a vehicle type.',
  }),
});

export default function DriverSignupForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      city: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    console.log('Driver Signup Submitted:', values);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: 'Application Submitted!',
      description: `Thanks ${values.name}, we've received your interest. We'll contact you soon on ${values.phone}.`,
      variant: 'default', // Success variant is not default in shadcn/ui
    });
    form.reset();
    setIsSubmitting(false);
  }

  return (
    <section id="driver-signup" className="container py-16 md:py-10 bg-background">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Info */}
        <div className="space-y-6 animate-fade-slide-up motion-safe:delay-100">
          <div className="inline-flex items-center rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
            <IndianRupee className="h-4 w-4 mr-2" /> Earn with Riderly
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">Join Our Driver Team!</h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-secondary">
            हमारे ड्राइवर टीम में शामिल हों!
          </h3>
          <p className="text-lg text-muted-foreground">
            Become a Riderly driver partner and earn flexibly on your own schedule. Drive your bike or auto and be your own boss.
             <br />
             <span className="font-medium">चलो इंडिया ड्राइवर पार्टनर बनें और अपने समय पर लचीले ढंग से कमाएं।</span>
          </p>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-center">
              <CheckCircleIcon className="h-5 w-5 text-primary mr-2" /> Flexible working hours
            </li>
            <li className="flex items-center">
              <CheckCircleIcon className="h-5 w-5 text-primary mr-2" /> Competitive earnings
            </li>
            <li className="flex items-center">
              <CheckCircleIcon className="h-5 w-5 text-primary mr-2" /> Weekly payments
            </li>
             <li className="flex items-center">
              <CheckCircleIcon className="h-5 w-5 text-primary mr-2" /> Driver support
            </li>
          </ul>
        </div>

        {/* Right Side: Form */}
        <Card className="shadow-xl animate-fade-slide-up motion-safe:delay-200">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center">
               <UserPlus className="h-6 w-6 mr-2 text-primary" /> Express Your Interest
            </CardTitle>
            <CardDescription>
              Fill out the form below, and we'll get in touch. <br />नीचे दिया गया फ़ॉर्म भरें, और हम संपर्क करेंगे।
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Rahul Kumar" {...field} disabled={isSubmitting} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="e.g., 9876543210" {...field} disabled={isSubmitting} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>City</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Delhi" {...field} disabled={isSubmitting} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="vehicleType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Vehicle Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value} disabled={isSubmitting}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select vehicle type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="bike">
                            <span className='flex items-center'><Bike className="h-4 w-4 mr-2 inline-block" />Bike</span>
                          </SelectItem>
                          <SelectItem value="auto">
                             <span className='flex items-center'><AutoIcon className="h-4 w-4 mr-2 inline-block" />Auto Rickshaw</span>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Submit Interest'}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

// Simple CheckCircleIcon component
function CheckCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

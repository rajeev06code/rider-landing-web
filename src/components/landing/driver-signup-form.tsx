'use client';

import * as React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
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
import { toast } from 'sonner';
import { Bike } from 'lucide-react';
import AutoIcon from '@/components/icons/auto-icon';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters. नाम कम से कम 2 अक्षरों का होना चाहिए।' }),
  phone: z
    .string()
    .min(10, { message: 'Phone number must be at least 10 digits. फ़ोन नंबर कम से कम 10 अंकों का होना चाहिए।' })
    .regex(/^\d{10,15}$/, { message: 'Please enter a valid phone number. कृपया एक वैध फ़ोन नंबर दर्ज करें।' }),
  city: z.string().min(2, { message: 'City must be at least 2 characters. शहर का नाम कम से कम 2 अक्षरों का होना चाहिए।' }),
  vehicleType: z.enum(['bike', 'auto'], {
    required_error: 'You need to select a vehicle type. आपको वाहन का प्रकार चुनना होगा।',
  }),
});

type DriverSignupFormValues = z.infer<typeof formSchema>;

interface DriverSignupFormProps {
  onSuccess?: () => void;
}

export function DriverSignupForm({ onSuccess }: DriverSignupFormProps) {
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const form = useForm<DriverSignupFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      city: '',
    },
  });

  async function onSubmit(values: DriverSignupFormValues) {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/driver-interest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        toast.success('Application Submitted! आवेदन जमा हो गया!', {
          description: `Thanks ${values.name}, we've received your interest. We'll contact you soon on ${values.phone}. धन्यवाद ${values.name}, हमें आपकी रुचि प्राप्त हुई है। हम जल्द ही आपसे ${values.phone} पर संपर्क करेंगे।`,
          duration: 5000,
        });
        form.reset();
        if (onSuccess) {
          onSuccess();
        }
      } else {
        const errorData = await response.json().catch(() => ({ message: 'Submission failed. Please try again.' }));
        toast.error('Submission Failed! जमा करने में विफल!', {
          description: errorData.message || 'An unknown error occurred. कृपया पुनः प्रयास करें।',
          duration: 5000,
        });
      }
    } catch (error) {
      toast.error('Submission Failed! जमा करने में विफल!', {
        description: 'An error occurred while submitting the form. कृपया पुनः प्रयास करें।',
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold">Full Name (पूरा नाम)</FormLabel>
              <FormControl>
                <Input id="name" placeholder="e.g., Rahul Kumar (राहुल कुमार)" {...field} disabled={isSubmitting} className="text-base py-3 px-4"/>
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
              <FormLabel className="font-semibold">Phone Number (फ़ोन नंबर)</FormLabel>
              <FormControl>
                <Input type="tel" placeholder="e.g., 9876543210" {...field} disabled={isSubmitting} className="text-base py-3 px-4"/>
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
              <FormLabel className="font-semibold">City (शहर)</FormLabel>
              <FormControl>
                <Input placeholder="e.g., Delhi (दिल्ली)" {...field} disabled={isSubmitting} className="text-base py-3 px-4"/>
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
              <FormLabel className="font-semibold">Vehicle Type (वाहन का प्रकार)</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value} disabled={isSubmitting}>
                <FormControl>
                  <SelectTrigger className="text-base py-3 px-4">
                    <SelectValue placeholder="Select vehicle type (वाहन का प्रकार चुनें)" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="bike">
                    <span className='flex items-center'><Bike className="h-5 w-5 mr-2 inline-block text-primary" />Bike (बाइक)</span>
                  </SelectItem>
                  <SelectItem value="auto">
                     <span className='flex items-center'><AutoIcon className="h-5 w-5 mr-2 inline-block text-primary" />Auto Rickshaw (ऑटो रिक्शा)</span>
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full text-base py-3 mt-4 shadow-md hover:shadow-lg transform transition-all duration-300 ease-out motion-safe:hover:scale-105 motion-safe:hover:shadow-primary/30" size="lg" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting (जमा हो रहा है)...' : 'Submit Interest (रुचि जमा करें)'}
        </Button>
      </form>
    </Form>
  );
}

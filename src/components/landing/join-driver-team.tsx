import { Button, SvgIcon } from '@mui/material';
import { Input } from '@/components/ui/input';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';
import { toast } from 'sonner';

export default function JoinDriverTeam() {
  const [formValues, setFormValues] = useState({
    fullName: '',
    phoneNumber: '',
    city: '',
    vehicleType: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/driver-interest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      });
      if (response.ok) {
        toast.success('Interest Submitted Successfully!');
      } else {
        toast.error('Interest Submission Failed!');
      }
      setFormValues({
        fullName: '',
        phoneNumber: '',
        city: '',
        vehicleType: '',
      });
    } catch (error) {
      toast.error('Interest Submission Failed!');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center p-6 w-full max-w-7xl mx-auto my-12 bg-stone-50 rounded-2xl">
      <div className="md:w-1/2 pr-6">
        <div className="text-gray-500 font-medium">💰 Earn with ZiplyRide</div>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          Join Our Driver Team!
        </h2>
        <h2 className="text-2xl font-bold text-gray-800 mt-2">हमारे ड्राइवर टीम में शामिल हों!</h2>
        <p className="text-gray-600 mt-4">
          Become a ZiplyRide driver partner and earn flexibly on your own schedule. Drive your bike or auto and be your own boss.
        </p>
        <p className="text-gray-600 mt-2">चलो इंडिया ड्राइवर पार्टनर बनें और अपने समय पर लचीले ढंग से कमाएं।</p>
        <ul className="mt-6 space-y-2 text-gray-600">
          <li className="flex items-center">
           <CheckCircleIcon className="mr-2 text-green-500" fontSize="small" /> Flexible working hours
          </li>
          <li className="flex items-center">
            <CheckCircleIcon className="mr-2 text-green-500" fontSize="small" /> Competitive earnings
          </li>
          <li className="flex items-center">
           <CheckCircleIcon className="mr-2 text-green-500" fontSize="small" /> Weekly payments
          </li>
          <li className="flex items-center">
            <CheckCircleIcon className="mr-2 text-green-500" fontSize="small" /> Driver support
          </li>
        </ul>
      </div>
      <div className="md:w-1/2 p-6 bg-stone-50 rounded-2xl">
        <h3 className="text-xl font-semibold">Express Your Interest</h3>
        <p className="text-gray-600 mt-2">
          Fill out the form below, and we'll get in touch.
        </p>
        <p className="text-gray-600 mt-1">नीचे दिया गया फ़ॉर्म भरें, और हम संपर्क करेंगे।</p>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="e.g. Rahul Kumar"
              value={formValues.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <Input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="e.g. 9876543210"
              value={formValues.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="city">City</Label>
            <Input
              type="text"
              id="city"
              name="city"
              placeholder="e.g. Delhi"
              value={formValues.city}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="vehicleType">Vehicle Type</Label>
            <Select name="vehicleType" onValueChange={(value) => handleChange({ target: { name: 'vehicleType', value } } as any)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select vehicle type" />
              </SelectTrigger>              
              <SelectContent>
                <SelectItem value="Bike">Bike</SelectItem>
                <SelectItem value="Auto">Auto</SelectItem>
              </SelectContent>
            </Select>            
          </div>
           <Button
            type="submit"
            variant="contained"
            color="success"
            fullWidth
            disabled={isSubmitting}
            className="mt-4 w-full"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Interest'}
          </Button>
        </form>
      </div>
    </div>
  );
}
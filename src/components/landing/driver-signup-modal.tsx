import { useState } from 'react';
import { DriverSignupForm } from './driver-signup-form';
import { Modal, Box, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@/components/ui/button';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  borderRadius:2,
  p: 4,
};

export function DriverSignupModal() {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
         <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6" component="h2">
              Driver Sign Up
            </Typography>
            <IconButton onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
          </Box>
           <Box>
            <DriverSignupForm />
          </Box>
        </Box>
      </Modal>
        <Button
          onClick={() => setOpen(true)}
          className="hidden md:inline-flex transform transition-transform duration-200 motion-safe:hover:scale-105"
          variant="secondary"
          size="lg"
        >Driver Sign Up</Button>
    </>
  );
}
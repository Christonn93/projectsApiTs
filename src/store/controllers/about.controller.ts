import { Request, Response } from 'express';

// Contact information example
const contactInfo = {
  email: 'contact@store.com',
  phone: '123-456-7890'
};

// Get contact information
export const getContactInfo = (req: Request, res: Response) => {
  res.json(contactInfo);
};

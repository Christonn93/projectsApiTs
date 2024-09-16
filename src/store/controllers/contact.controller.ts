import { Request, Response } from 'express';
import { ContactInfo } from '../types'; 

// Contact information example
const contactInfo: ContactInfo = {
  email: 'contact@store.com',
  phone: '123-456-7890'
};

// Get contact information
export const getContactInfo = (req: Request, res: Response) => {
  console.log(req.query);
  res.json(contactInfo);
};
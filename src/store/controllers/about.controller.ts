import { Request, Response } from 'express';

// About information example
const aboutInfo = {
  description: 'This is a sample application to demonstrate an Express and TypeScript setup.',
  version: '1.0.0',
  author: 'Your Name',
  contact: 'contact@store.com'
};

// Get about information
export const getAboutInfo = (req: Request, res: Response) => {
  console.log(req.query);
  res.json(aboutInfo);
};

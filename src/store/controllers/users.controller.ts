import { Request, Response } from "express";
import UserModel from "../models/user.model";

// Get seller information
export const getSellerInfo = async (req: Request, res: Response) => {
 console.log(req.query);
 try {
  const sellers = await UserModel.find({ role: "seller" });
  res.json(sellers);
 } catch (error) {
  if (error instanceof Error) {
   res.status(500).json({ message: error.message });
  } else {
   res.status(500).json({ message: "An unknown error occurred" });
  }
 }
};

// Get buyer information
export const getBuyerInfo = async (req: Request, res: Response) => {
 console.log(req.query);
 try {
  const buyers = await UserModel.find({ role: "buyer" });
  res.json(buyers);
 } catch (error) {
  if (error instanceof Error) {
   res.status(500).json({ message: error.message });
  } else {
   res.status(500).json({ message: "An unknown error occurred" });
  }
 }
};

// Get management information
export const getManagementInfo = async (req: Request, res: Response) => {
 console.log(req.query);
 try {
  const management = await UserModel.find({ role: "management" });
  res.json(management);
 } catch (error) {
  if (error instanceof Error) {
   res.status(500).json({ message: error.message });
  } else {
   res.status(500).json({ message: "An unknown error occurred" });
  }
 }
};

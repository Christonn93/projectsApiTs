import { Request, Response } from "express";
import ProductModel from '../models/product.model';

// Get all products
export const getAllProducts = async (req: Request, res: Response) => {
    console.log(req.query);
 try {
  const products = await ProductModel.find();
  res.json(products);
 } catch (error) {
  if (error instanceof Error) {
   res.status(500).json({ message: error.message });
  } else {
   res.status(500).json({ message: "An unknown error occurred" });
  }
 }
};

// Add a new product
export const addProduct = async (req: Request, res: Response) => {
 try {
  const newProduct = new ProductModel(req.body);
  await newProduct.save();
  res.status(201).json(newProduct);
 } catch (error) {
  if (error instanceof Error) {
   res.status(500).json({ message: error.message });
  } else {
   res.status(500).json({ message: "An unknown error occurred" });
  }
 }
};

// Update product details
export const updateProduct = async (req: Request, res: Response) => {
 try {
  const updatedProduct = await ProductModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedProduct);
 } catch (error) {
  if (error instanceof Error) {
   res.status(500).json({ message: error.message });
  } else {
   res.status(500).json({ message: "An unknown error occurred" });
  }
 }
};

// Delete a product
export const deleteProduct = async (req: Request, res: Response) => {
 try {
  await ProductModel.findByIdAndDelete(req.params.id);
  res.status(204).send();
 } catch (error) {
  if (error instanceof Error) {
   res.status(500).json({ message: error.message });
  } else {
   res.status(500).json({ message: "An unknown error occurred" });
  }
 }
};

import mongoose, { Document, Schema } from "mongoose";
import { Product } from "../types";

interface ProductDocument extends Product, Document {}

const productSchema: Schema = new Schema({
 name: { type: String, required: true },
 price: { type: Number, required: true },
});

const ProductModel = mongoose.model<ProductDocument>("Product", productSchema);

export default ProductModel;

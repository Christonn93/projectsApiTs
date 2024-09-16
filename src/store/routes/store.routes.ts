import express from "express";
import { getAllProducts, addProduct, updateProduct, deleteProduct } from "../controllers/products.controller";
import { getSellerInfo, getBuyerInfo, getManagementInfo } from "../controllers/users.controller";
import { getContactInfo } from "../controllers/about.controller";

const router = express.Router();

// Products routes
router.get("/products", getAllProducts);
router.post("/products", addProduct);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

// Users routes
router.get("/user/seller", getSellerInfo);
router.get("/user/buyer", getBuyerInfo);
router.get("/user/management", getManagementInfo);

// About routes
router.get("/about/contact", getContactInfo);

export default router;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const products_controller_1 = require("../controllers/products.controller");
const users_controller_1 = require("../controllers/users.controller");
const about_controller_1 = require("../controllers/about.controller");
const contact_controller_1 = require("../controllers/contact.controller");
const router = express_1.default.Router();
// Products routes
router.get("/products", products_controller_1.getAllProducts);
router.post("/products", products_controller_1.addProduct);
router.put("/products/:id", products_controller_1.updateProduct);
router.delete("/products/:id", products_controller_1.deleteProduct);
// Users routes
router.get("/user/seller", users_controller_1.getSellerInfo);
router.get("/user/buyer", users_controller_1.getBuyerInfo);
router.get("/user/management", users_controller_1.getManagementInfo);
// About routes
router.use('/about', about_controller_1.getAboutInfo);
router.get("/about/contact", contact_controller_1.getContactInfo);
exports.default = router;

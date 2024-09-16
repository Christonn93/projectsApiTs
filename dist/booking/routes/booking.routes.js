"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
// Assets (things you can book)
router.get("/products/assets", (req, res) => {
    console.log(req.query);
    res.json({ message: "Get all assets available for booking" });
});
router.post("/products/assets", (req, res) => {
    console.log(req.query);
    res.json({ message: "Add a new asset for booking" });
});
// Lender routes
router.get("/users/lender/objects", (req, res) => {
    console.log(req.query);
    res.json({ message: "Get lender objects" });
});
router.get("/users/lender/userInformation", (req, res) => {
    console.log(req.query);
    res.json({ message: "Get lender user information" });
});
// Renter routes
router.get("/users/renter/bookingHistory", (req, res) => {
    console.log(req.query);
    res.json({ message: "Get renter booking history" });
});
router.get("/users/renter/userInformation", (req, res) => {
    console.log(req.query);
    res.json({ message: "Get renter user information" });
});
// About section
router.get("/about/contact", (req, res) => {
    console.log(req.query);
    res.json({ message: "Booking system contact info" });
});
exports.default = router;
